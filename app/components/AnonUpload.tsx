"use client";

import React, { useState, useEffect, useRef } from "react";
import { Upload, FileText, Loader2, AlertCircle, ArrowRight } from "lucide-react";

export function AnonUpload() {
  const [anonId, setAnonId] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Generate or get anonymous ID
    let storedId = localStorage.getItem("sc_anon_id");
    if (!storedId) {
      storedId = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem("sc_anon_id", storedId);
    }
    setAnonId(storedId);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    
    if (selected.type !== "application/pdf") {
      setStatus("error");
      setErrorMsg("Please upload a PDF file.");
      return;
    }

    setFile(selected);
    processFile(selected);
  };

  const processFile = async (selectedFile: File) => {
    setStatus("uploading");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("bank", "auto");
      formData.append("date_format", "DD/MM/YYYY");
      formData.append("categorize", "true");
      formData.append("gst", "true");

      const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

      // 1. Convert
      const convertRes = await fetch(`${API_BASE}/api/py-convert`, {
        method: "POST",
        headers: {
          "X-Anon-Id": anonId,
        },
        body: formData,
      });

      if (!convertRes.ok) {
        const err = await convertRes.json();
        throw new Error(err.detail || err.message || "Failed to convert file.");
      }

      const convertData = await convertRes.json();

      // 2. Download Excel
      const downloadRes = await fetch(`${API_BASE}/api/download`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transactions: convertData.transactions,
          filename: convertData.filename,
          format: "xlsx",
        }),
      });

      if (!downloadRes.ok) throw new Error("Failed to generate Excel file.");

      const blob = await downloadRes.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${selectedFile.name.replace(/\.pdf$/i, "")}_converted.xlsx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();

      setStatus("done");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err.message || "An error occurred.");
    }
  };

  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  return (
    <div className="w-full max-w-md mx-auto mt-8 relative z-20">
      <div 
        className={`brutal-card p-6 bg-card transition-all duration-300 border-4 border-shadow-color ${status === "uploading" ? "animate-pulse shadow-[0_0_20px_rgba(91,33,182,0.3)]" : "shadow-[8px_8px_0px_0px_#1a1c1d]"}`}
      >
        <div className="text-center mb-4">
          <h3 className="font-black uppercase tracking-widest text-lg">Try it instantly</h3>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">1 free statement daily. No signup.</p>
        </div>

        {status === "idle" || status === "error" || status === "done" ? (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-shadow-color bg-background hover:bg-secondary/10 hover:border-secondary cursor-pointer transition-colors p-8 flex flex-col items-center justify-center text-center group"
          >
            <input 
              type="file" 
              accept=".pdf" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileChange}
            />
            <Upload className="w-10 h-10 mb-3 text-muted-foreground group-hover:text-secondary transition-colors" strokeWidth={2} />
            <span className="font-bold uppercase text-sm tracking-wider group-hover:text-secondary">Click or tap to upload PDF</span>
          </div>
        ) : (
          <div className="border-2 border-shadow-color bg-background p-8 flex flex-col items-center justify-center text-center">
            <Loader2 className="w-10 h-10 mb-3 text-secondary animate-spin" strokeWidth={3} />
            <span className="font-bold uppercase text-sm tracking-wider text-secondary">Parsing Statement...</span>
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 p-3 bg-destructive/10 border-2 border-destructive text-destructive text-xs font-bold flex items-start gap-2 text-left">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {status === "done" && (
          <div className="mt-4 p-3 bg-success/10 border-2 border-success text-success text-xs font-bold flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Success! Check your downloads.</span>
          </div>
        )}

        {(status === "error" && errorMsg.toLowerCase().includes("limit")) && (
          <a href={`${DASHBOARD_URL}/signup`} className="mt-4 brutal-btn-primary w-full text-center block py-2 text-xs uppercase tracking-wider bg-primary text-white">
            Sign up for 2 free statements/day <ArrowRight className="inline w-3 h-3 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
}
