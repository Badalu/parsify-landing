"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, FileText, CheckCircle2, UploadCloud, Loader2, Sparkles, Lock, Shield, Zap, RefreshCw } from "lucide-react";

interface Transaction {
  date: string;
  value_date?: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
}

const SAMPLE_TRANSACTIONS: Transaction[] = [
  { date: "15/07/2024", description: "UPI-SWIGGY INDIA PVT LTD-123456789012", debit: "₹485.00", credit: "-", balance: "₹1,45,210.00" },
  { date: "16/07/2024", description: "NEFT-N320241589-AMAZON SELLER SERVICES", debit: "-", credit: "₹24,500.00", balance: "₹1,69,710.00" },
  { date: "17/07/2024", description: "POS 459821 AWS CLOUD SERVICES SEATTLE", debit: "₹2,100.00", credit: "-", balance: "₹1,67,610.00" },
  { date: "18/07/2024", description: "CHQ CLG KOTAK MAHINDRA VENDOR SETTLE", debit: "₹8,750.00", credit: "-", balance: "₹1,58,860.00" },
  { date: "19/07/2024", description: "IMPS RELIANCE RETAIL LIMITED BATCH99", debit: "-", credit: "₹14,200.00", balance: "₹1,73,060.00" },
];

export function AnonUpload() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";
  
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState("");
  const [isSampleMode, setIsSampleMode] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsSampleMode(false);
      handleUpload(e.target.files[0]);
    }
  };

  const handleTrySample = () => {
    setError(null);
    setLoading(true);
    setIsPasswordProtected(false);
    setIsSampleMode(true);
    setTimeout(() => {
      setTransactions(SAMPLE_TRANSACTIONS);
      setLoading(false);
    }, 600);
  };

  const handleUpload = async (selectedFile: File, pwd?: string) => {
    setFile(selectedFile);
    setLoading(true);
    setError(null);
    setTransactions(null);
    setIsPasswordProtected(false);
    setIsSampleMode(false);

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
      const getAnonId = () => {
        if (typeof window === 'undefined') return '00000000-0000-0000-0000-000000000000';
        let id = localStorage.getItem("parsify_anon_id");
        const isValidUUID = (str: string) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str);
        if (!id || !isValidUUID(id)) {
          try {
            id = crypto.randomUUID();
          } catch (e) {
            id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
          }
          localStorage.setItem("parsify_anon_id", id);
        }
        return id;
      };

      const anonId = getAnonId();

      const API_URL = "https://parsify-api-1vh0.onrender.com";
      const res = await fetch(`${API_URL}/api/convert`, {
        method: "POST",
        headers: {
          "X-Anon-Id": anonId
        },
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        if (res.status === 401 || errData.needs_password || errData.error === "password_required" || errData.detail === "password_required") {
          setIsPasswordProtected(true);
          if (pwd) {
            throw new Error("Incorrect Password");
          }
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
      if (e.message === "Incorrect Password") {
        setError("Incorrect password. Please try again.");
      } else if (e.message !== "Password Protected") {
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
            LIVE PARSER
          </span>
          <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase flex items-center gap-1">
            <Lock className="w-3 h-3 text-success" /> 256-BIT SSL SECURE
          </span>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="font-black uppercase tracking-tight text-2xl text-shadow-color leading-tight mb-2">
            TRY IT YOURSELF
          </h3>
          <p className="text-sm font-medium text-muted-foreground leading-relaxed">
            Upload any bank statement PDF to test instant extraction.
          </p>
        </div>

        {!transactions && !loading && !isPasswordProtected && (
          <div>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-shadow-color bg-background hover:bg-secondary/10 transition-colors p-8 mb-4 brutal-shadow flex flex-col items-center justify-center cursor-pointer min-h-[150px]"
            >
              <input 
                type="file" 
                accept=".pdf" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleFileChange}
              />
              <UploadCloud className="w-10 h-10 text-secondary mb-2" />
              <span className="font-bold text-sm uppercase tracking-wider text-shadow-color">Click to Upload Bank PDF</span>
              <span className="text-xs text-muted-foreground mt-1">HDFC, SBI, ICICI, Axis, Kotak & 200+ banks</span>
            </div>

            {/* Instant Demo Button */}
            <button
              onClick={handleTrySample}
              type="button"
              className="w-full mb-6 py-2.5 px-4 bg-background border-2 border-shadow-color text-xs font-black uppercase tracking-wider text-secondary flex items-center justify-center gap-2 hover:bg-secondary/10 brutal-shadow transition-all"
            >
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span>Don't have a file? Try Sample HDFC PDF Demo</span>
            </button>
          </div>
        )}

        {loading && (
          <div className="border-2 border-shadow-color bg-background p-8 mb-6 brutal-shadow flex flex-col items-center justify-center min-h-[160px]">
            <Loader2 className="w-8 h-8 text-secondary animate-spin mb-4" />
            <span className="font-bold text-sm uppercase tracking-wider text-shadow-color animate-pulse">
              {isSampleMode ? "Loading Sample HDFC Statement..." : "Parsing Document..."}
            </span>
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
            <button onClick={() => {setError(null); setFile(null); setIsPasswordProtected(false);}} className="block mx-auto mt-2 underline text-xs">Try again</button>
          </div>
        )}

        {transactions && !loading && (
          <div className="relative border-2 border-shadow-color bg-background mb-6 brutal-shadow overflow-hidden">
            <div className="bg-muted/30 border-b-2 border-shadow-color p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-xs font-black uppercase tracking-widest text-shadow-color">
                  {isSampleMode ? "Sample HDFC Extracted Data" : "Extracted Data"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {isSampleMode && (
                  <button 
                    onClick={() => { setTransactions(null); setIsSampleMode(false); }}
                    className="text-[10px] font-bold text-muted-foreground hover:text-foreground flex items-center gap-1 underline"
                  >
                    <RefreshCw className="w-3 h-3" /> Reset
                  </button>
                )}
                <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 border border-success">PARSED</span>
              </div>
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
                      Download Full Excel & CSV
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                    </a>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Security & Privacy Badges */}
        <div className="grid grid-cols-2 gap-2 mb-6 pt-2 border-t border-shadow-color/20">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-shadow-color bg-background p-2 border border-shadow-color brutal-shadow">
            <Lock className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>256-Bit SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-shadow-color bg-background p-2 border border-shadow-color brutal-shadow">
            <Shield className="w-3.5 h-3.5 text-success shrink-0" />
            <span>Auto-Purged 60 Mins</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-shadow-color bg-background p-2 border border-shadow-color brutal-shadow">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>DPDP Act 2023 Compliant</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-shadow-color bg-background p-2 border border-shadow-color brutal-shadow">
            <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>No Human Inspection</span>
          </div>
        </div>

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
              <span className="text-muted-foreground">50 pages free monthly</span>
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
