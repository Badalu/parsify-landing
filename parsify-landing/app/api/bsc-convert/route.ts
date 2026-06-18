import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const password = formData.get("password") as string | null;
    const bank = formData.get("bank") as string || "auto";
    const dateFormat = formData.get("date_format") as string || "DD/MM/YYYY";
    const categorize = formData.get("categorize") as string || "true";
    const gst = formData.get("gst") as string || "true";

    if (!file) {
      return NextResponse.json({ detail: "No file provided" }, { status: 400 });
    }

    // Proxy request directly to the dedicated Python backend on Vercel
    // This completely replaces the third-party BSC API integration
    const backendUrl = "https://parsify-api.vercel.app/api/convert";
    
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);
    uploadFormData.append("bank", bank);
    uploadFormData.append("date_format", dateFormat);
    uploadFormData.append("categorize", categorize);
    uploadFormData.append("gst", gst);
    if (password) {
      uploadFormData.append("password", password);
    }

    const res = await fetch(backendUrl, {
      method: "POST",
      body: uploadFormData,
    });

    const resData = await res.json();
    return NextResponse.json(resData, { status: res.status });

  } catch (err: any) {
    console.error("Proxy Convert Error:", err);
    return NextResponse.json({ detail: err.message || "Failed to process statement" }, { status: 500 });
  }
}
