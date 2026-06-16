import { NextRequest, NextResponse } from "next/server";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const password = formData.get("password") as string | null;

    if (!file) {
      return NextResponse.json({ detail: "No file provided" }, { status: 400 });
    }

    const API_KEY = process.env.BSC_API_KEY;
    if (!API_KEY) {
      return NextResponse.json({ detail: "BSC_API_KEY is not configured on the server." }, { status: 500 });
    }

    // 1. Upload to BSC
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    const uploadRes = await fetch("https://api2.bankstatementconverter.com/api/v1/BankStatement", {
      method: "POST",
      headers: {
        "Authorization": API_KEY,
      },
      body: uploadFormData,
    });

    if (!uploadRes.ok) {
      const errText = await uploadRes.text();
      throw new Error(`Failed to upload to BSC: ${errText}`);
    }

    const uploadData = await uploadRes.json();
    if (!uploadData || !uploadData.length) {
      throw new Error("Invalid response from BSC upload API");
    }

    const doc = uploadData[0];
    const uuid = doc.uuid;

    // 2. Set Password if provided
    if (password) {
      const pwdRes = await fetch("https://api2.bankstatementconverter.com/api/v1/BankStatement/setPassword", {
        method: "POST",
        headers: {
          "Authorization": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passwords: [{ uuid, password }]
        }),
      });
      if (!pwdRes.ok) {
        throw new Error("Failed to set password on BSC");
      }
    }

    // 3. Poll Status if PROCESSING
    let currentState = doc.state;
    let attempts = 0;
    while (currentState === "PROCESSING" && attempts < 12) { // wait up to ~120s
      await delay(10000); // Poll every 10 seconds per docs
      const statusRes = await fetch("https://api2.bankstatementconverter.com/api/v1/BankStatement/status", {
        method: "POST",
        headers: {
          "Authorization": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([uuid]),
      });
      if (statusRes.ok) {
        const statusData = await statusRes.json();
        if (statusData && statusData.length > 0) {
          currentState = statusData[0].state;
        }
      }
      attempts++;
    }

    // 4. Convert
    const convertRes = await fetch("https://api2.bankstatementconverter.com/api/v1/BankStatement/convert?format=JSON&raw=false", {
      method: "POST",
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([uuid]),
    });

    if (!convertRes.ok) {
      const errText = await convertRes.text();
      // If it mentions password, we can throw the specific error to trigger the UI prompt
      if (errText.toLowerCase().includes("password") || errText.toLowerCase().includes("locked")) {
         return NextResponse.json({ detail: "Password required for PDF", needs_password: true }, { status: 400 });
      }
      throw new Error(`Failed to convert on BSC: ${errText}`);
    }

    const convertData = await convertRes.json();
    if (!convertData || !convertData.length || !convertData[0].normalised) {
      // It might be password protected and failed silently?
      return NextResponse.json({ detail: "Password required for PDF", needs_password: true }, { status: 400 });
    }

    const normalised = convertData[0].normalised;
    if (normalised.length === 0) {
      throw new Error("No transactions extracted by BSC");
    }

    // 5. Map to our expected format
    const transactions = normalised.map((tx: any) => {
      const amt = parseFloat(tx.amount || "0");
      const isCredit = amt > 0;
      const absAmt = Math.abs(amt).toFixed(2);
      return {
        date: tx.date || "",
        description: tx.description || "",
        debit: !isCredit ? absAmt : null,
        credit: isCredit ? absAmt : null,
        balance: null, // BSC normalised doesn't return balance
        category: "Other",
        gst: null,
      };
    });

    return NextResponse.json({
      filename: file.name.replace(".pdf", ""),
      bank_detected: "BSC_API",
      quality_score: 100,
      flagged_count: 0,
      transactions: transactions
    });

  } catch (err: any) {
    console.error("BSC Convert Error:", err);
    return NextResponse.json({ detail: err.message || "Failed to process statement" }, { status: 500 });
  }
}
