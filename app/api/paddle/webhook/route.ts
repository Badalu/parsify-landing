import { NextResponse } from "next/server";
import crypto from "crypto";
import { getAdminSupabase } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const signature = request.headers.get("paddle-signature");
    const secretKey = process.env.PADDLE_WEBHOOK_SECRET;

    if (!signature || !secretKey) {
      return new Response("Missing paddle signature or secret", { status: 400 });
    }

    const parts = signature.split(";");
    const tsPart = parts.find((p) => p.startsWith("ts="));
    const h1Part = parts.find((p) => p.startsWith("h1="));

    if (!tsPart || !h1Part) {
      return new Response("Malformed signature header", { status: 400 });
    }

    const ts = tsPart.split("=")[1];
    const h1 = h1Part.split("=")[1];

    const rawBody = await request.text();

    const computedSignature = crypto
      .createHmac("sha256", secretKey)
      .update(`${ts}:${rawBody}`)
      .digest("hex");

    if (computedSignature !== h1) {
      return new Response("Invalid signature", { status: 400 });
    }

    const payload = JSON.parse(rawBody);
    const eventType = payload.event_type;
    const subData = payload.data;
    const status = subData?.status;

    if (
      (eventType === "subscription.created" ||
        eventType === "subscription.activated" ||
        eventType === "subscription.updated") &&
      status === "active"
    ) {
      const subscriptionId = subData.id;
      const customerId = subData.customer_id;
      const userId = subData.custom_data?.userId || subData.custom_data?.user_id;
      const planId = subData.custom_data?.planId || subData.custom_data?.plan_id;

      if (userId && planId && ["starter_plan", "professional_plan", "business_plan"].includes(planId)) {
        let allocatedCredits = 40;
        if (planId === "professional_plan") allocatedCredits = 120;
        if (planId === "business_plan") allocatedCredits = 400;

        let amount = 12;
        if (planId === "professional_plan") amount = 25;
        if (planId === "business_plan") amount = 45;

        const planName =
          planId === "starter_plan" ? "Starter ($12)" :
          planId === "professional_plan" ? "Growth ($25)" : "Pro ($45)";

        const supabase = getAdminSupabase();

        const { data: currentProfile } = await supabase
          .from("profiles")
          .select("cashfree_subscription_id, credits, premium_expiry_date")
          .eq("id", userId)
          .single();

        if (currentProfile?.cashfree_subscription_id === `paddle_${subscriptionId}`) {
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
            cashfree_customer_id: `paddle_${customerId}`,
            cashfree_subscription_id: `paddle_${subscriptionId}`,
            credits: newCredits,
            plan_name: planName,
            premium_expiry_date: expiryDate.toISOString(),
          })
          .eq("id", userId);

        try {
          await supabase.from("payment_logs").insert({
            user_id: userId,
            order_id: subscriptionId,
            plan_name: planName,
            amount: amount,
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
    return new Response(`Paddle webhook error: ${err.message}`, { status: 500 });
  }
}
