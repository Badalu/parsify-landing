"use client";

import { useState } from "react";
import { UploadZone } from "../components/UploadZone";
import { useDashboardAuth } from "../hooks/useDashboardAuth";
import {
  FileCode2,
  Download,
  CheckCircle2,
  Loader2,
  AlertCircle,
  SlidersHorizontal,
  FileSpreadsheet
} from "lucide-react";

export default function TallyXmlPage() {
  const { user } = useDashboardAuth();

  const [file, setFile] = useState<File | null>(null);
  const [bankLedger, setBankLedger] = useState("HDFC Bank Account");
  const [defaultPartyLedger, setDefaultPartyLedger] = useState("Suspense Account");
  const [converting, setConverting] = useState(false);
  const [xmlContent, setXmlContent] = useState<string | null>(null);
  const [txnCount, setTxnCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleGenerateXml = async () => {
    if (!file) {
      setErrorMsg("Please select a bank statement PDF or Image first.");
      return;
    }

    setConverting(true);
    setErrorMsg(null);
    setXmlContent(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("bank", "auto");
      formData.append("date_format", "DD/MM/YYYY");
      formData.append("categorize", "true");
      formData.append("gst", "true");

      const backendUrl = process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL || "http://localhost:8000";
      
      const response = await fetch(`${backendUrl}/api/convert`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || data.message || "Failed to parse bank statement.");
      }

      const txns = data.transactions || [];
      setTxnCount(txns.length);

      // Build Tally XML
      let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<ENVELOPE>\n  <HEADER>\n    <TALLYREQUEST>Import Data</TALLYREQUEST>\n  </HEADER>\n  <BODY>\n    <IMPORTDATA>\n      <REQUESTDESC>\n        <REPORTNAME>Vouchers</REPORTNAME>\n      </REQUESTDESC>\n      <REQUESTDATA>\n`;

      txns.forEach((t: any, idx: number) => {
        const amount = parseFloat((t.debit || t.credit || "0").replace(/,/g, "")) || 0;
        const isDebit = !!t.debit;
        const dateFormatted = (t.date || "").replace(/[/.-]/g, "");

        xml += `        <VOUCHER VCHTYPE="${isDebit ? "Payment" : "Receipt"}" ACTION="Create">\n`;
        xml += `          <DATE>${dateFormatted || "20260401"}</DATE>\n`;
        xml += `          <NARRATION>${t.description || ""}</NARRATION>\n`;
        xml += `          <VOUCHERTYPENAME>${isDebit ? "Payment" : "Receipt"}</VOUCHERTYPENAME>\n`;
        xml += `          <ALLLEDGERENTRIES.LIST>\n`;
        xml += `            <LEDGERNAME>${bankLedger}</LEDGERNAME>\n`;
        xml += `            <ISDEEMEDPOSITIVE>${isDebit ? "No" : "Yes"}</ISDEEMEDPOSITIVE>\n`;
        xml += `            <AMOUNT>${isDebit ? amount : -amount}</AMOUNT>\n`;
        xml += `          </ALLLEDGERENTRIES.LIST>\n`;
        xml += `          <ALLLEDGERENTRIES.LIST>\n`;
        xml += `            <LEDGERNAME>${t.category || defaultPartyLedger}</LEDGERNAME>\n`;
        xml += `            <ISDEEMEDPOSITIVE>${isDebit ? "Yes" : "No"}</ISDEEMEDPOSITIVE>\n`;
        xml += `            <AMOUNT>${isDebit ? -amount : amount}</AMOUNT>\n`;
        xml += `          </ALLLEDGERENTRIES.LIST>\n`;
        xml += `        </VOUCHER>\n`;
      });

      xml += `      </REQUESTDATA>\n    </IMPORTDATA>\n  </BODY>\n</ENVELOPE>`;

      setXmlContent(xml);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to generate Tally XML.");
    } finally {
      setConverting(false);
    }
  };

  const downloadXmlFile = () => {
    if (!xmlContent) return;
    const blob = new Blob([xmlContent], { type: "text/xml;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const name = file ? file.name.replace(/\.[^/.]+$/, "") : "tally_import";
    a.download = `${name}_tally.xml`;
    a.click();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-4 border-b border-zinc-200/80">
        <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
          Tally Prime XML Converter
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          Convert PDF bank statements directly into Tally Prime XML vouchers for 1-click import into Tally ERP / Prime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <UploadZone onFileSelect={(f) => setFile(f)} />

          <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-950 font-mono uppercase tracking-wider">
              <SlidersHorizontal className="w-4 h-4 text-zinc-600" /> Tally Ledger Configuration
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
                  Bank Ledger Name in Tally
                </label>
                <input
                  type="text"
                  value={bankLedger}
                  onChange={(e) => setBankLedger(e.target.value)}
                  placeholder="e.g. HDFC Bank Account"
                  className="w-full h-9 px-3 rounded-lg border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
                  Default Party/Expense Ledger
                </label>
                <input
                  type="text"
                  value={defaultPartyLedger}
                  onChange={(e) => setDefaultPartyLedger(e.target.value)}
                  placeholder="e.g. Suspense Account"
                  className="w-full h-9 px-3 rounded-lg border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none font-medium"
                />
              </div>
            </div>

            <button
              onClick={handleGenerateXml}
              disabled={converting || !file}
              className="w-full h-11 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-2xs disabled:opacity-50 cursor-pointer"
            >
              {converting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating Tally XML Vouchers…
                </>
              ) : (
                <>
                  <FileCode2 className="w-4 h-4" />
                  Generate Tally XML File
                </>
              )}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold text-zinc-950 font-mono uppercase tracking-wider">
              How Tally Import Works
            </h3>
            <ol className="text-xs text-zinc-600 space-y-2 list-decimal list-inside leading-relaxed">
              <li>Upload bank statement PDF.</li>
              <li>Configure your Bank Ledger name in Tally.</li>
              <li>Click Generate Tally XML.</li>
              <li>Open Tally Prime ➔ Press Alt+O (Import) ➔ Vouchers.</li>
            </ol>
          </div>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {xmlContent && (
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Generated XML with {txnCount} Vouchers
            </div>
            <button
              onClick={downloadXmlFile}
              className="h-9 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" /> Download Tally XML (.xml)
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-zinc-950 text-emerald-400 font-mono text-[11px] max-h-64 overflow-y-auto leading-relaxed">
            {xmlContent.slice(0, 1200)}...
          </pre>
        </div>
      )}
    </div>
  );
}
