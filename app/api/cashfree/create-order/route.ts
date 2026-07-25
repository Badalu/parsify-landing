import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, currency, customerPhone, customerEmail, customerName, userId, planId } = body;

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const env = process.env.CASHFREE_ENV || (secretKey?.includes("prod") ? "PRODUCTION" : "TEST");

    if (!appId || !secretKey) {
      return NextResponse.json(
        { error: "Cashfree API configuration is missing." },
        { status: 500 }
      );
    }

    const host = env === "PRODUCTION" ? "https://api.cashfree.com" : "https://sandbox.cashfree.com";
    const orderId = `ord_${Date.now()}_${userId.substring(0, 8)}`;
    const origin = request.headers.get("origin") || "https://parsify.in";
    const returnUrl = `${origin}/dashboard/usage?order_id={order_id}`;

    const res = await fetch(`${host}/pg/orders`, {
      method: "POST",
      headers: {
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: currency || "INR",
        customer_details: {
          customer_id: userId.substring(0, 36),
          customer_phone: customerPhone || "9999999999",
          customer_email: customerEmail,
          customer_name: customerName || "Customer",
        },
        order_meta: {
          return_url: returnUrl,
          notify_url: `${origin}/api/cashfree/webhook`,
        },
        order_tags: {
          user_id: userId,
          plan_id: planId,
        },
      }),
    });

    const orderData = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: orderData.message || "Failed to create order" }, { status: 400 });
    }

    return NextResponse.json({
      paymentSessionId: orderData.payment_session_id ?? null,
      paymentLink: orderData.payment_link ?? null,
      orderId: orderData.order_id ?? orderId,
      environment: env,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
