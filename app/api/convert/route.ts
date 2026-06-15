import { NextRequest, NextResponse } from "next/server";
import pdfParse from "pdf-parse";

// Run on Node.js to support pdf-parse
export const runtime = "nodejs";
// Prevent Vercel from applying strict 10-second timeout if possible
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ detail: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 1. Extract text from PDF
    const pdfData = await pdfParse(buffer);
    const text = pdfData.text;

    if (!text || text.trim().length < 20) {
      return NextResponse.json({ detail: "Could not extract text from this PDF. It may be a scanned image. Please upload a text-based bank statement." }, { status: 400 });
    }

    // 2. Call Gemini
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ detail: "API key not configured" }, { status: 500 });
    }

    // Prepare prompt
    const categorize = formData.get("categorize") === "true";
    const gst = formData.get("gst") === "true";

    let systemInstruction = `You are a world-class bank statement parser with deep expertise in Indian and international bank statement formats. Your sole job is to extract EVERY transaction from the provided bank statement text with 100% accuracy.

=== CRITICAL RULES ===
- NEVER skip a transaction. Even partial or unclear rows must be included.
- NEVER hallucinate data. Only extract information explicitly present.
- NEVER merge two separate transactions into one.
- Process transactions in chronological order, exactly as they appear.

=== FIELD EXTRACTION RULES ===
1. DATE: Extract EXACTLY as shown in the statement.
2. VALUE_DATE: The clearing/value date if listed. Otherwise, copy the transaction date.
3. DESCRIPTION: The full transaction narrative/particulars. Include UPI IDs, reference numbers, etc.
4. DEBIT: Any withdrawal or outflow. Normalize (remove currency symbols, commas). Empty if none.
5. CREDIT: Any deposit or inflow. Normalize. Empty if none.
6. BALANCE: Running balance after the transaction. Empty if none.
`;

    if (categorize) {
      systemInstruction += `\n=== CATEGORY ASSIGNMENT ===
Assign exactly ONE category per transaction from this list ONLY:
Salary, Food, Fuel, Rent, Utilities, Shopping, Groceries, Transfer, Subscription, GST, Tax, Investment, EMI, Refund, Other\n`;
    } else {
      systemInstruction += `\n=== CATEGORY ===\nSet category to 'Other' for every row.\n`;
    }

    if (gst) {
      systemInstruction += `\n=== GST FIELD ===
If the transaction description explicitly mentions GST components, set: 'CGST+SGST', 'IGST', or 'GST'. Else empty.\n`;
    } else {
      systemInstruction += `\n=== GST FIELD ===\nSet gst to '' (empty string) for all rows.\n`;
    }

    const payload = {
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      contents: [{
        role: "user",
        parts: [{ text: `Extract ALL transactions from this bank statement text. Return every transaction row.\n\nBANK STATEMENT TEXT:\n=================\n${text}` }]
      }],
      tools: [{
        functionDeclarations: [{
          name: "return_transactions",
          description: "Return parsed transactions",
          parameters: {
            type: "OBJECT",
            properties: {
              transactions: {
                type: "ARRAY",
                items: {
                  type: "OBJECT",
                  properties: {
                    date: { type: "STRING" },
                    value_date: { type: "STRING" },
                    description: { type: "STRING" },
                    debit: { type: "STRING" },
                    credit: { type: "STRING" },
                    balance: { type: "STRING" },
                    category: { type: "STRING" },
                    gst: { type: "STRING" }
                  }
                }
              }
            }
          }
        }]
      }],
      toolConfig: {
        functionCallingConfig: {
          mode: "ANY",
          allowedFunctionNames: ["return_transactions"]
        }
      }
    };

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini Error:", errText);
      return NextResponse.json({ detail: "Failed to parse bank statement with AI model" }, { status: 500 });
    }

    const geminiData = await res.json();
    
    // Extract the function call arguments
    let transactions = [];
    try {
      const call = geminiData.candidates[0].content.parts[0].functionCall;
      if (call && call.name === "return_transactions") {
        transactions = call.args.transactions || [];
      }
    } catch (e) {
      console.error("Failed to parse Gemini response", e);
    }

    return NextResponse.json({
      filename: file.name.replace(/\.[^/.]+$/, ""),
      transactions
    });
  } catch (error: any) {
    console.error("Convert API Error:", error);
    return NextResponse.json({ detail: error.message || "Internal Server Error" }, { status: 500 });
  }
}
