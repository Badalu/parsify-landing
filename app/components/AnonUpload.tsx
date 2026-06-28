"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, FileText, CheckCircle2, UploadCloud, Loader2, Sparkles, Lock } from "lucide-react";

interface Transaction {
  date: string;
  value_date?: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
}

export function AnonUpload() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";
  
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleUpload(e.target.files[0]);
    }
  };

  const handleUpload = async (selectedFile: File, pwd?: string) => {
    setFile(selectedFile);
    setLoading(true);
    setError(null);
    setTransactions(null);
    setIsPasswordProtected(false);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("bank", "auto");
      formData.append("date_format", "DD/MM/YYYY");
      formData.append("categorize", "false");
      formData.append("gst", "false");
      if (pwd) {
        formData.append("password", pwd);
      }

      const API_URL = "https://parsify-api-1vh0.onrender.com";
      const res = await fetch(`${API_URL}/api/convert`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        if (res.status === 401 || errData.needs_password || errData.error === "password_required") {
          setIsPasswordProtected(true);
          throw new Error("Password Protected");
        }
        throw new Error(errData.detail || `Server error ${res.status}`);
      }

      const data = await res.json();
      if (data.transactions && data.transactions.length > 0) {
        setTransactions(data.transactions);
      } else {
        throw new Error("No transactions detected in this statement.");
      }
    } catch (e: any) {
      if (e.message !== "Password Protected") {
        setError(e.message || "Failed to process the statement");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file && password) {
      handleUpload(file, password);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8 relative z-20">
      <div className="brutal-card p-6 bg-card transition-all duration-300 border-4 border-shadow-color shadow-[8px_8px_0px_0px_#1a1c1d] hover:shadow-[4px_4px_0px_0px_#1a1c1d] hover:-translate-x-1 hover:-translate-y-1">
        
        {/* Header Badge */}
        <div className="flex justify-between items-center mb-6">
          <span className="inline-block border-2 border-shadow-color bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 brutal-shadow">
            LIVE PREVIEW
          </span>
          <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase">
            🔒 SECURE SSL
          </span>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="font-black uppercase tracking-tight text-2xl text-shadow-color leading-tight mb-2">
            TRY IT YOURSELF
          </h3>
          <p className="text-sm font-medium text-muted-foreground leading-relaxed">
            Upload a bank statement PDF to see the magic. First page preview is free.
          </p>
        </div>

        {!transactions && !loading && !isPasswordProtected && (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-shadow-color bg-background hover:bg-secondary/10 transition-colors p-8 mb-6 brutal-shadow flex flex-col items-center justify-center cursor-pointer min-h-[160px]"
          >
            <input 
              type="file" 
              accept=".pdf" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileChange}
            />
            <UploadCloud className="w-10 h-10 text-secondary mb-3" />
            <span className="font-bold text-sm uppercase tracking-wider text-shadow-color">Click to Upload PDF</span>
            <span className="text-xs text-muted-foreground mt-2">HDFC, SBI, ICICI, Axis & more</span>
          </div>
        )}

        {loading && (
          <div className="border-2 border-shadow-color bg-background p-8 mb-6 brutal-shadow flex flex-col items-center justify-center min-h-[160px]">
            <Loader2 className="w-8 h-8 text-secondary animate-spin mb-4" />
            <span className="font-bold text-sm uppercase tracking-wider text-shadow-color animate-pulse">Parsing Document...</span>
            <span className="text-xs text-muted-foreground mt-2 text-center">Our AI is reading tables, fixing smudges, and merging rows.</span>
          </div>
        )}

        {isPasswordProtected && !loading && (
          <form onSubmit={handlePasswordSubmit} className="border-2 border-shadow-color bg-background p-6 mb-6 brutal-shadow">
            <div className="flex items-center gap-2 mb-4 text-amber-600 font-bold text-sm">
              <Lock className="w-4 h-4" />
              <span>Password Protected PDF</span>
            </div>
            <input
              type="password"
              placeholder="Enter PDF password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-shadow-color p-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary brutal-shadow"
            />
            <button type="submit" className="brutal-btn-primary bg-secondary text-white border-2 border-shadow-color w-full py-2.5 uppercase text-xs font-black">
              Unlock & Parse
            </button>
          </form>
        )}

        {error && (
          <div className="border-2 border-destructive bg-destructive/10 p-4 mb-6 brutal-shadow text-destructive text-sm font-bold text-center">
            {error}
            <button onClick={() => {setError(null); setFile(null);}} className="block mx-auto mt-2 underline text-xs">Try again</button>
          </div>
        )}

        {transactions && !loading && (
          <div className="relative border-2 border-shadow-color bg-background mb-6 brutal-shadow overflow-hidden">
            <div className="bg-muted/30 border-b-2 border-shadow-color p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-xs font-black uppercase tracking-widest text-shadow-color">Extracted Data</span>
              </div>
              <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 border border-success">SUCCESS</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[10px] font-mono whitespace-nowrap">
                <thead className="bg-secondary/10 border-b-2 border-shadow-color">
                  <tr>
                    <th className="p-2">Date</th>
                    <th className="p-2">Description</th>
                    <th className="p-2 text-right">Debit</th>
                    <th className="p-2 text-right">Credit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-shadow-color/20 relative">
                  {transactions.slice(0, 7).map((txn, idx) => (
                    <tr key={idx} className={idx > 2 ? "blur-[2px] opacity-60 pointer-events-none select-none" : ""}>
                      <td className="p-2">{txn.date}</td>
                      <td className="p-2 truncate max-w-[120px]">{txn.description}</td>
                      <td className="p-2 text-right text-destructive">{txn.debit}</td>
                      <td className="p-2 text-right text-success">{txn.credit}</td>
                    </tr>
                  ))}
                  
                  {/* Blur Overlay */}
                  <div className="absolute inset-x-0 bottom-0 top-[100px] bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col items-center justify-end pb-4 z-10">
                    <a 
                      href={`${DASHBOARD_URL}/signup`} 
                      className="bg-primary text-white border-2 border-shadow-color px-4 py-2 uppercase tracking-widest text-xs font-black flex items-center gap-2 shadow-[4px_4px_0px_0px_#1a1c1d] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all"
                    >
                      Get Premium to Download
                      <Lock className="w-3 h-3" strokeWidth={3} />
                    </a>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Feature Checkpoints */}
        {!transactions && (
          <div className="space-y-2.5 mb-8 text-sm">
            {[
              "Free 50 pages every single month",
              "Automatic GST splitting & Ledgers",
              "99.3% accuracy across 100+ Indian banks",
              "Zero data retention (deleted instantly)"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 font-bold text-shadow-color text-xs">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" strokeWidth={3} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Group */}
        <div className="space-y-3">
          <a 
            href={transactions ? `${DASHBOARD_URL}/signup` : `${DASHBOARD_URL}/dashboard/convert`} 
            className="brutal-btn-primary bg-secondary text-white border-2 border-shadow-color w-full text-center py-3.5 uppercase tracking-widest text-sm font-black flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 shadow-[4px_4px_0px_0px_#1a1c1d] hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all"
          >
            {transactions ? "Unlock Full Excel & CSV" : "Go to Dashboard"}
            <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </a>
          
          {!transactions && (
            <div className="flex justify-between items-center text-xs font-bold pt-2">
              <span className="text-muted-foreground">No credit card required</span>
              <a href={`${DASHBOARD_URL}/login`} className="text-secondary hover:underline">
                Log In &rarr;
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
