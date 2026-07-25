import { NextResponse } from "next/server";
import crypto from "crypto";
import { getAdminSupabase } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const signature = request.headers.get("x-webhook-signature");
    const timestamp = request.headers.get("x-webhook-timestamp");
    const secretKey = process.env.CASHFREE_SECRET_KEY;

    if (!signature || !timestamp || !secretKey) {
      return new Response("Missing webhook headers or configuration", { status: 400 });
    }

    const rawBody = await request.text();

    const computedSignature1 = crypto
      .createHmac("sha256", secretKey)
      .update(timestamp + rawBody)
      .digest("base64");

    const computedSignature2 = crypto
      .createHmac("sha256", secretKey)
      .update(rawBody)
      .digest("base64");

    if (computedSignature1 !== signature && computedSignature2 !== signature) {
      return new Response("Invalid webhook signature", { status: 400 });
    }

    const payload = JSON.parse(rawBody);
    const eventType = payload.type || payload.event;

    if (["PAYMENT_SUCCESS_WEBHOOK", "PAYMENT_SUCCESS", "ORDER_PAID"].includes(eventType)) {
      const orderData = payload.data?.order;
      const orderId = orderData?.order_id;
      const userId = orderData?.order_tags?.user_id;
      const planId = orderData?.order_tags?.plan_id;
      const orderAmount = orderData?.order_amount;

      if (userId && planId && ["starter_plan", "professional_plan", "business_plan"].includes(planId)) {
        let allocatedCredits = 40;
        if (planId === "professional_plan") allocatedCredits = 120;
        if (planId === "business_plan") allocatedCredits = 400;

        const planName =
          planId === "starter_plan" ? "Starter (₹999)" :
          planId === "professional_plan" ? "Growth (₹1999)" : "Pro (₹3499)";

        const supabase = getAdminSupabase();

        const { data: currentProfile } = await supabase
          .from("profiles")
          .select("cashfree_subscription_id, credits, premium_expiry_date")
          .eq("id", userId)
          .single();

        if (currentProfile?.cashfree_subscription_id === `cf_order_${orderId}`) {
          return NextResponse.json({ received: true, status: "already_processed" });
        }

        const currentCredits = currentProfile?.credits || 0;
        const newCredits = currentCredits + allocatedCredits;

        let expiryDate = new Date();
        if (currentProfile?.premium_expiry_date && new Date(currentProfile.premium_expiry_date) > new Date()) {
          expiryDate = new Date(new Date(currentProfile.premium_expiry_date).getTime() + 30 * 24 * 60 * 60 * 1000);
        } else {
          expiryDate.setDate(expiryDate.getDate() + 30);
        }

        await supabase
          .from("profiles")
          .update({
            tier: "subscribed",
            cashfree_customer_id: `cf_cust_${userId}`,
            cashfree_subscription_id: `cf_order_${orderId}`,
            credits: newCredits,
            plan_name: planName,
            premium_expiry_date: expiryDate.toISOString(),
          })
          .eq("id", userId);

        try {
          await supabase.from("payment_logs").insert({
            user_id: userId,
            order_id: orderId,
            plan_name: planName,
            amount: orderAmount || 0,
            credits_added: allocatedCredits,
            status: "SUCCESS",
          });
        } catch (e) {
          console.error("Payment log insert error:", e);
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return new Response(`Webhook error: ${err.message}`, { status: 500 });
  }
}
