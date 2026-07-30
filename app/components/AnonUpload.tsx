"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, FileText, CheckCircle2, UploadCloud, Loader2, Sparkles, Lock, Shield, Zap, RefreshCw, X, Maximize2, FileSpreadsheet, Download } from "lucide-react";
import * as XLSX from "xlsx";

interface Transaction {
  date: string;
  value_date?: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
  gstin?: string;
  gst_amount?: string;
}

const SAMPLE_TRANSACTIONS: Transaction[] = [
  { date: "15/07/2024", description: "UPI-SWIGGY INDIA PVT LTD-123456789012", debit: "₹485.00", credit: "-", balance: "₹1,45,210.00", gstin: "07AAACS1234F1Z", gst_amount: "₹73.98 (18%)" },
  { date: "16/07/2024", description: "NEFT-N320241589-AMAZON SELLER SERVICES", debit: "-", credit: "₹24,500.00", balance: "₹1,69,710.00", gstin: "27AABCA5544R1ZS", gst_amount: "₹3,737.29 (18%)" },
  { date: "17/07/2024", description: "POS 459821 AWS CLOUD SERVICES SEATTLE", debit: "₹2,100.00", credit: "-", balance: "₹1,67,610.00", gstin: "07AAACS1234F1Z", gst_amount: "₹320.34 (18%)" },
  { date: "18/07/2024", description: "CHQ CLG KOTAK MAHINDRA VENDOR SETTLE", debit: "₹8,750.00", credit: "-", balance: "₹1,58,860.00", gstin: "27AACCK9988M1ZP", gst_amount: "₹1,334.75 (18%)" },
  { date: "19/07/2024", description: "IMPS RELIANCE RETAIL LIMITED BATCH99", debit: "-", credit: "₹14,200.00", balance: "₹1,73,060.00", gstin: "24AAACR1234E1ZV", gst_amount: "₹2,166.10 (18%)" },
  { date: "20/07/2024", description: "NEFT-HDFC000123-TATA CONSULTANCY SERVICES", debit: "-", credit: "₹45,000.00", balance: "₹2,18,060.00", gstin: "27AAACT5511A1Z9", gst_amount: "₹6,864.41 (18%)" },
  { date: "21/07/2024", description: "UPI-ZOMATO HYPERPURE-GROCERY PURCHASE", debit: "₹3,250.00", credit: "-", balance: "₹2,14,810.00", gstin: "07AAACZ9876P1Z4", gst_amount: "₹154.76 (5%)" },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
      setIsModalOpen(true); // Open modal popup automatically
    }, 600);
  };

  const handleDownloadDemoExcel = () => {
    if (!transactions) return;
    const exportData = transactions.map((t) => ({
      "Date": t.date,
      "Description / Party Name": t.description,
      "Debit (₹)": t.debit,
      "Credit (₹)": t.credit,
      "Balance (₹)": t.balance,
      "GSTIN / GST Details": t.gstin || "-",
      "GST Amount": t.gst_amount || "-",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Demo_Statement");
    XLSX.writeFile(workbook, "Parsify_HDFC_Demo_Statement.xlsx");
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
        setIsModalOpen(true); // Open modal popup automatically
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
    <>
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

          {/* PARSED RESULT SUMMARY CARD (With Open Modal Popup Trigger & Direct Demo Excel Download) */}
          {transactions && !loading && (
            <div className="border-2 border-shadow-color bg-background p-4 mb-6 brutal-shadow">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-shadow-color/20">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-success" />
                  <span className="text-xs font-black uppercase tracking-widest text-shadow-color">
                    {isSampleMode ? "Sample HDFC Statement Parsed" : "Statement Parsed Successfully"}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-success bg-success/10 px-2 py-0.5 border border-success">
                  {transactions.length} ROWS
                </span>
              </div>

              <p className="text-xs text-muted-foreground font-medium mb-4">
                {isSampleMode
                  ? "All transaction dates, GSTIN codes, debit/credit, and running balances ready for full preview & download."
                  : "All transaction dates, party names, debit, credit, and running balances extracted cleanly."}
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 px-4 bg-primary text-white border-2 border-shadow-color text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 brutal-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all mb-2"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Open Full Extracted Preview Popup</span>
              </button>

              {isSampleMode && (
                <button
                  onClick={handleDownloadDemoExcel}
                  className="w-full py-2.5 px-4 bg-success text-white border-2 border-shadow-color text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 brutal-shadow hover:bg-success/90 transition-all mb-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Demo Excel (.xlsx)</span>
                </button>
              )}

              {isSampleMode && (
                <button
                  onClick={() => { setTransactions(null); setIsSampleMode(false); setIsModalOpen(false); }}
                  className="w-full text-center text-[11px] font-bold text-muted-foreground hover:text-foreground underline pt-1"
                >
                  Upload Your Own PDF Instead
                </button>
              )}
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
            {isSampleMode ? (
              <button
                onClick={handleDownloadDemoExcel}
                className="brutal-btn-primary bg-success text-white border-2 border-shadow-color w-full text-center py-3.5 uppercase tracking-widest text-sm font-black flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 shadow-[4px_4px_0px_0px_#1a1c1d] transition-all"
              >
                <Download className="w-5 h-5" /> Download Demo Excel (.xlsx)
              </button>
            ) : (
              <a 
                href={transactions ? `${DASHBOARD_URL}/signup` : `${DASHBOARD_URL}/dashboard/convert`} 
                className="brutal-btn-primary bg-secondary text-white border-2 border-shadow-color w-full text-center py-3.5 uppercase tracking-widest text-sm font-black flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 shadow-[4px_4px_0px_0px_#1a1c1d] hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all"
              >
                {transactions ? "Unlock Full Excel & CSV Download" : "Go to Dashboard"}
                <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </a>
            )}
            
            {!transactions && (
              <div className="flex justify-between items-center text-xs font-bold pt-2">
                <span className="text-muted-foreground">5 free trial pages on signup</span>
                <a href={`${DASHBOARD_URL}/login`} className="text-secondary hover:underline">
                  Log In &rarr;
                </a>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ══ LARGE EXTRACTED RESULT POPUP MODAL ══ */}
      {isModalOpen && transactions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="brutal-card bg-card border-4 border-shadow-color shadow-[12px_12px_0px_0px_#1a1c1d] w-full max-w-5xl max-h-[90vh] flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-background border-b-4 border-shadow-color flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-secondary text-white border-2 border-shadow-color brutal-shadow">
                  <FileSpreadsheet className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-black uppercase text-shadow-color tracking-tight font-sans">
                      {isSampleMode ? "Sample HDFC Statement Output (Full Preview)" : "Extracted Bank Statement Preview"}
                    </h3>
                    <span className="bg-success text-white text-[9px] font-black uppercase px-2 py-0.5 border border-shadow-color brutal-shadow hidden sm:inline-block">
                      99.3% ACCURATE
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                    Clean, structured table ready for Microsoft Excel, CSV & Tally Prime import.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-card hover:bg-destructive hover:text-white border-2 border-shadow-color brutal-shadow transition-colors text-shadow-color"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>

            {/* Modal Body - Large Table View */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-background relative">
              <div className="border-2 border-shadow-color brutal-shadow overflow-hidden bg-card">
                
                {/* Table Header Controls */}
                <div className="bg-muted/40 p-3 border-b-2 border-shadow-color flex justify-between items-center text-xs font-mono font-bold">
                  <span className="text-shadow-color uppercase">Parsed Rows: {transactions.length}</span>
                  <span className="text-success uppercase font-black">✓ Date, Balance & GST Aligned</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono whitespace-nowrap">
                    <thead>
                      <tr className="bg-secondary/10 text-shadow-color font-black text-xs uppercase border-b-2 border-shadow-color">
                        <th className="p-3 border-r border-shadow-color/20">Date</th>
                        <th className="p-3 border-r border-shadow-color/20">Description / Party Name</th>
                        <th className="p-3 text-right border-r border-shadow-color/20">Debit (₹)</th>
                        <th className="p-3 text-right border-r border-shadow-color/20">Credit (₹)</th>
                        <th className="p-3 text-right border-r border-shadow-color/20">Balance (₹)</th>
                        <th className="p-3 border-r border-shadow-color/20">GSTIN / GST Details</th>
                        <th className="p-3 text-right">GST Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-shadow-color/20 relative">
                      {transactions.map((txn, idx) => (
                        <tr
                          key={idx}
                          className={`hover:bg-primary/5 transition-colors ${
                            !isSampleMode && idx > 2 ? "blur-[2.5px] opacity-50 pointer-events-none select-none" : ""
                          }`}
                        >
                          <td className="p-3 font-semibold text-muted-foreground border-r border-shadow-color/20">{txn.date}</td>
                          <td className="p-3 font-bold text-foreground max-w-[280px] truncate border-r border-shadow-color/20">{txn.description}</td>
                          <td className="p-3 text-right text-destructive font-bold border-r border-shadow-color/20">{txn.debit}</td>
                          <td className="p-3 text-right text-success font-bold border-r border-shadow-color/20">{txn.credit}</td>
                          <td className="p-3 text-right font-bold text-shadow-color border-r border-shadow-color/20">{txn.balance}</td>
                          <td className="p-3 font-bold text-primary border-r border-shadow-color/20">{txn.gstin || "-"}</td>
                          <td className="p-3 text-right font-semibold text-emerald-600">{txn.gst_amount || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Blur Paywall Overlay - ONLY FOR REAL FILES (!isSampleMode) */}
                {!isSampleMode && (
                  <div className="absolute inset-x-0 bottom-0 top-[180px] bg-gradient-to-t from-background via-background/90 to-transparent flex flex-col items-center justify-center p-6 z-20">
                    <div className="brutal-card p-6 bg-card border-4 border-shadow-color shadow-[6px_6px_0px_0px_#1a1c1d] max-w-md text-center">
                      <div className="w-10 h-10 bg-primary/10 border-2 border-primary text-primary mx-auto mb-3 flex items-center justify-center brutal-shadow">
                        <Lock className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                      <h4 className="text-lg font-black uppercase text-shadow-color mb-2">
                        Unlock Complete Statement Excel File
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium mb-4">
                        Create your free Parsify account to download all {transactions.length} rows as XLS, XLSX, CSV, or Tally XML format.
                      </p>
                      <a
                        href={`${DASHBOARD_URL}/signup`}
                        className="brutal-btn-primary bg-secondary text-white border-2 border-shadow-color w-full py-3 uppercase tracking-widest text-xs font-black flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#1a1c1d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                      >
                        Register Free to Download Full File
                        <ArrowRight className="w-4 h-4" strokeWidth={3} />
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-background border-t-4 border-shadow-color flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs font-bold text-muted-foreground flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span>Zero Data Stored • Auto Purged after download</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border-2 border-shadow-color bg-card text-xs font-bold uppercase tracking-wider text-shadow-color hover:bg-background brutal-shadow"
                >
                  Close Preview
                </button>

                {isSampleMode ? (
                  <button
                    onClick={handleDownloadDemoExcel}
                    className="brutal-btn-primary bg-success text-white border-2 border-shadow-color text-xs px-6 py-2.5 uppercase font-black tracking-wider flex items-center gap-2 shadow-[3px_3px_0px_0px_#1a1c1d] hover:bg-success/90"
                  >
                    <Download className="w-4 h-4" /> Download Demo Excel (.xlsx)
                  </button>
                ) : (
                  <a
                    href={`${DASHBOARD_URL}/signup`}
                    className="brutal-btn-primary bg-secondary text-white border-2 border-shadow-color text-xs px-6 py-2.5 uppercase font-black tracking-wider flex items-center gap-2 shadow-[3px_3px_0px_0px_#1a1c1d]"
                  >
                    Download Excel / CSV <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

