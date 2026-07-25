"use client";

import { useState } from "react";
import { UploadZone } from "../components/UploadZone";
import { useDashboardAuth } from "../hooks/useDashboardAuth";
import { useDashboardConversions } from "../hooks/useDashboardConversions";
import {
  Zap,
  FileSpreadsheet,
  Download,
  Lock,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  SlidersHorizontal,
  RefreshCw,
  FileText
} from "lucide-react";
import * as XLSX from "xlsx";

interface Transaction {
  date: string;
  value_date?: string;
  description: string;
  debit?: string;
  credit?: string;
  balance?: string;
  category?: string;
  gst?: string;
}

export default function ConvertPage() {
  const { user } = useDashboardAuth();
  const { tier, pagesRemaining } = useDashboardConversions();

  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [bank, setBank] = useState("auto");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [categorize, setCategorize] = useState(true);
  const [gstTagging, setGstTagging] = useState(true);

  const [converting, setConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [resultFileName, setResultFileName] = useState<string>("");

  const handleConvert = async () => {
    if (!file) {
      setErrorMsg("Please select a bank statement PDF or Image file first.");
      return;
    }

    setConverting(true);
    setProgress(15);
    setErrorMsg(null);
    setTransactions([]);

    try {
      const formData = new FormData();
      formData.append("file", file);
      if (password) formData.append("password", password);
      formData.append("bank", bank);
      formData.append("date_format", dateFormat);
      formData.append("categorize", categorize ? "true" : "false");
      formData.append("gst", gstTagging ? "true" : "false");

      const backendUrl = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL || "http://localhost:8000";
      
      setProgress(40);

      const headers: Record<string, string> = {};
      if (user) {
        const session = (await import("@/lib/supabase")).supabase.auth.getSession();
        const token = (await session).data.session?.access_token;
        if (token) headers["Authorization"] = `Bearer ${token}`;
      } else {
        headers["X-Anon-Id"] = "anon_user_dashboard";
      }

      const response = await fetch(`${backendUrl}/api/convert`, {
        method: "POST",
        headers,
        body: formData,
      });

      setProgress(80);

      const data = await response.json();

      if (!response.ok) {
        if (data.error === "password_required") {
          throw new Error("This PDF is password protected. Please enter password above and retry.");
        }
        throw new Error(data.detail || data.message || "Failed to convert bank statement.");
      }

      setProgress(100);
      setTransactions(data.transactions || []);
      setResultFileName(data.filename || file.name);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred during conversion.");
    } finally {
      setConverting(false);
    }
  };

  const exportExcel = () => {
    if (transactions.length === 0) return;
    const ws = XLSX.utils.json_to_sheet(transactions);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Transactions");
    const name = resultFileName ? resultFileName.replace(/\.[^/.]+$/, "") : "statement";
    XLSX.writeFile(wb, `${name}_converted.xlsx`);
  };

  const exportCSV = () => {
    if (transactions.length === 0) return;
    const ws = XLSX.utils.json_to_sheet(transactions);
    const csv = XLSX.utils.sheet_to_csv(ws);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const name = resultFileName ? resultFileName.replace(/\.[^/.]+$/, "") : "statement";
    a.download = `${name}_converted.csv`;
    a.click();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-4 border-b border-zinc-200/80">
        <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
          PDF Bank Statement Converter
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          Upload PDF or image bank statements to parse dates, descriptions, debits, credits, balances, categories &amp; GST tags.
        </p>
      </div>

      {/* Main Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Zone & Settings */}
        <div className="lg:col-span-2 space-y-4">
          <UploadZone onFileSelect={(f) => setFile(f)} />

          {/* Settings Box */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-950 font-mono uppercase tracking-wider">
              <SlidersHorizontal className="w-4 h-4 text-zinc-600" /> Parser Options
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
                  Bank Name
                </label>
                <select
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  className="w-full h-9 px-3 rounded-lg border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
                >
                  <option value="auto">⚡ Auto-Detect Bank (Recommended)</option>
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="ICICI Bank">ICICI Bank</option>
                  <option value="State Bank of India">State Bank of India (SBI)</option>
                  <option value="Axis Bank">Axis Bank</option>
                  <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                  <option value="Punjab National Bank">Punjab National Bank (PNB)</option>
                  <option value="Bank of Baroda">Bank of Baroda (BOB)</option>
                  <option value="Canara Bank">Canara Bank</option>
                  <option value="Federal Bank">Federal Bank</option>
                  <option value="Yes Bank">Yes Bank</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
                  PDF Password (If Encrypted)
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter PDF password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-9 px-3 pl-8 rounded-lg border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
                  />
                  <Lock className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-2.5" />
                </div>
              </div>
            </div>

            {/* AI Options Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-zinc-100">
              <label className="flex items-center gap-2.5 text-xs text-zinc-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={categorize}
                  onChange={(e) => setCategorize(e.target.checked)}
                  className="rounded border-zinc-300 text-zinc-950 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <div>
                  <span className="font-semibold block">AI Category Tagging</span>
                  <span className="text-[10px] text-zinc-400 block">Salary, Rent, EMI, Food, Groceries</span>
                </div>
              </label>

              <label className="flex items-center gap-2.5 text-xs text-zinc-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={gstTagging}
                  onChange={(e) => setGstTagging(e.target.checked)}
                  className="rounded border-zinc-300 text-zinc-950 focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <div>
                  <span className="font-semibold block">GST Tagging</span>
                  <span className="text-[10px] text-zinc-400 block">Auto-detect CGST, SGST, IGST</span>
                </div>
              </label>
            </div>

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              disabled={converting || !file}
              className="w-full h-11 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-2xs disabled:opacity-50 cursor-pointer"
            >
              {converting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Converting Bank Statement ({progress}%)…
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current" />
                  Convert Statement Now
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="space-y-4">
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold text-zinc-950 font-mono uppercase tracking-wider">
              Statements Quota
            </h3>
            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
              <div className="flex items-center justify-between text-xs text-zinc-600 mb-1">
                <span>Statements Remaining</span>
                <span className="font-mono font-bold text-zinc-950">{pagesRemaining}</span>
              </div>
              <p className="text-[10px] text-zinc-400">
                1 file upload = 1 statement allowance. Unlimited pages per statement.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 text-xs text-emerald-950 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Guarantee &amp; Privacy
            </div>
            <p className="text-[11px] text-emerald-800/90 leading-relaxed">
              Your financial data is processed in-memory and never stored on persistent storage.
            </p>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Results Table & Export Actions */}
      {transactions.length > 0 && (
        <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-2xs overflow-hidden space-y-4 p-5 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
            <div>
              <h2 className="text-sm font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                Parsed {transactions.length} Transactions
              </h2>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{resultFileName}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={exportCSV}
                className="h-8 px-3 rounded-lg border border-zinc-200 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-zinc-500" /> CSV
              </button>
              <button
                onClick={exportExcel}
                className="h-8 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" /> Download Excel (.xlsx)
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200/80">
                  <th className="py-2.5 px-3 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="py-2.5 px-3 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="py-2.5 px-3 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Debit (₹)
                  </th>
                  <th className="py-2.5 px-3 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Credit (₹)
                  </th>
                  <th className="py-2.5 px-3 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Balance (₹)
                  </th>
                  <th className="py-2.5 px-3 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {transactions.slice(0, 100).map((t, i) => (
                  <tr key={i} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-2.5 px-3 font-mono text-zinc-600 whitespace-nowrap">{t.date}</td>
                    <td className="py-2.5 px-3 font-medium text-zinc-900 max-w-xs truncate" title={t.description}>
                      {t.description}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-rose-600 font-semibold">{t.debit || "—"}</td>
                    <td className="py-2.5 px-3 font-mono text-emerald-600 font-semibold">{t.credit || "—"}</td>
                    <td className="py-2.5 px-3 font-mono text-zinc-600">{t.balance || "—"}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 text-[10px] font-mono">
                        {t.category || "Other"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
