import { NextRequest, NextResponse } from "next/server";
import * as xlsx from "xlsx";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { transactions, filename, format } = body;

    if (!transactions || !Array.isArray(transactions)) {
      return NextResponse.json({ detail: "Invalid transactions data" }, { status: 400 });
    }

    const worksheet = xlsx.utils.json_to_sheet(transactions);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Transactions");

    // Write to buffer
    const buf = xlsx.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new NextResponse(buf, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename="${filename || "transactions"}.xlsx"`,
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error: any) {
    console.error("Download API Error:", error);
    return NextResponse.json({ detail: "Failed to generate Excel file" }, { status: 500 });
  }
}
