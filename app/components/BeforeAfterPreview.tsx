"use client";

import React, { useState } from "react";
import { ArrowRight, Check, X, FileSpreadsheet, FileText, Sparkles, Zap, ShieldCheck } from "lucide-react";

type BankKey = "hdfc" | "sbi" | "icici";

interface SampleData {
  bankName: string;
  pdfRaw: {
    title: string;
    accountNo: string;
    lines: { date: string; rawText: string; amount: string }[];
  };
  excelParsed: {
    date: string;
    party: string;
    debit: string;
    credit: string;
    balance: string;
    gstin: string;
    voucher: string;
  }[];
}

const BANK_SAMPLES: Record<BankKey, SampleData> = {
  hdfc: {
    bankName: "HDFC Bank",
    pdfRaw: {
      title: "HDFC BANK LIMITED - ACCOUNT STATEMENT (CONFIDENTIAL)",
      accountNo: "A/C: 50200012345678",
      lines: [
        { date: "15/07/2024", rawText: "UPI-SWIGGY INDIA PVT LTD-123456789012-FOOD EXP-NOIDA", amount: "DR 485.00" },
        { date: "16/07/2024", rawText: "NEFT-N320241589-AMAZON SELLER SERVICES-CORP PAY-MUMBAI", amount: "CR 24,500.00" },
        { date: "17/07/2024", rawText: "POS 459821 AWS CLOUD SRV SEATTLE US IN 07AAACS1234F1Z", amount: "DR 2,100.00" },
        { date: "18/07/2024", rawText: "CHQ CLG / KOTAK MAHINDRA / 004512 / VENDOR SETTLEMENT", amount: "DR 8,750.00" },
      ],
    },
    excelParsed: [
      { date: "15-Jul-2024", party: "Swiggy India Pvt Ltd", debit: "₹485.00", credit: "-", balance: "₹1,45,210.00", gstin: "07AAACS1234F", voucher: "Payment" },
      { date: "16-Jul-2024", party: "Amazon Seller Services", debit: "-", credit: "₹24,500.00", balance: "₹1,69,710.00", gstin: "27AABCA5544R", voucher: "Receipt" },
      { date: "17-Jul-2024", party: "AWS Cloud Services", debit: "₹2,100.00", credit: "-", balance: "₹1,67,610.00", gstin: "07AAACS1234F", voucher: "Payment" },
      { date: "18-Jul-2024", party: "Kotak Mahindra Vendor", debit: "₹8,750.00", credit: "-", balance: "₹1,58,860.00", gstin: "27AACCK9988M", voucher: "Payment" },
    ],
  },
  sbi: {
    bankName: "State Bank of India",
    pdfRaw: {
      title: "STATE BANK OF INDIA - STATEMENT OF ACCOUNT",
      accountNo: "A/C: 33984512091",
      lines: [
        { date: "10-07-2024", rawText: "BY TRANSFER-INB/UTIB000123/RELIANCE RETAIL LTD/INV991", amount: "CR 18,200.00" },
        { date: "11-07-2024", rawText: "TO TRANSFER-INB/ZOMATO HYPERPURE/GROCERY PURCHASE/UTR0091", amount: "DR 3,450.00" },
        { date: "12-07-2024", rawText: "ATM WDL / SBI MAIN BR / CASH WITHDRAWAL FOR OFFICE", amount: "DR 10,000.00" },
        { date: "14-07-2024", rawText: "BY CLEARING / TATA CONSULTANCY SRV / TAX CONSULTING", amount: "CR 45,000.00" },
      ],
    },
    excelParsed: [
      { date: "10-Jul-2024", party: "Reliance Retail Ltd", debit: "-", credit: "₹18,200.00", balance: "₹92,300.00", gstin: "24AAACR1234E", voucher: "Receipt" },
      { date: "11-Jul-2024", party: "Zomato Hyperpure", debit: "₹3,450.00", credit: "-", balance: "₹88,850.00", gstin: "07AAACZ9876P", voucher: "Payment" },
      { date: "12-Jul-2024", party: "Cash Withdrawal (ATM)", debit: "₹10,000.00", credit: "-", balance: "₹78,850.00", gstin: "-", voucher: "Contra" },
      { date: "14-Jul-2024", party: "Tata Consultancy Services", debit: "-", credit: "₹45,000.00", balance: "₹1,23,850.00", gstin: "27AAACT5511A", voucher: "Receipt" },
    ],
  },
  icici: {
    bankName: "ICICI Bank",
    pdfRaw: {
      title: "ICICI BANK CORPORATE ACCOUNT STATEMENT",
      accountNo: "A/C: 000405123987",
      lines: [
        { date: "02/07/2024", rawText: "INF/NEFT/009123847/FLIPKART INTERNET PVT LTD/MERCHANT", amount: "CR 32,100.00" },
        { date: "04/07/2024", rawText: "CLG/AIRTEL BROADBAND BILL/MONTHLY FIBER CHARGE/DELHI", amount: "DR 1,499.00" },
        { date: "05/07/2024", rawText: "MMT/IMPS/4123091/ZEPTO COMMERCE / CAFE EXPENSES", amount: "DR 640.00" },
        { date: "08/07/2024", rawText: "RTGS/SBIN000123/HCL TECHNOLOGIES LTD/SOFTWARE LICENSE", amount: "CR 85,000.00" },
      ],
    },
    excelParsed: [
      { date: "02-Jul-2024", party: "Flipkart Internet Pvt Ltd", debit: "-", credit: "₹32,100.00", balance: "₹2,10,400.00", gstin: "29AAACF1122D", voucher: "Receipt" },
      { date: "04-Jul-2024", party: "Airtel Broadband", debit: "₹1,499.00", credit: "-", balance: "₹2,08,901.00", gstin: "07AAACA8899K", voucher: "Payment" },
      { date: "05-Jul-2024", party: "Zepto Commerce", debit: "₹640.00", credit: "-", balance: "₹2,08,261.00", gstin: "27AAACZ1234M", voucher: "Payment" },
      { date: "08-Jul-2024", party: "HCL Technologies Ltd", debit: "-", credit: "₹85,000.00", balance: "₹2,93,261.00", gstin: "07AAACH4433R", voucher: "Receipt" },
    ],
  },
};

export function BeforeAfterPreview() {
  const [selectedBank, setSelectedBank] = useState<BankKey>("hdfc");
  const [viewMode, setViewMode] = useState<"sideBySide" | "pdfOnly" | "excelOnly">("sideBySide");

  const sample = BANK_SAMPLES[selectedBank];

  return (
    <section id="preview-demo" className="py-24 border-b-2 border-shadow-color bg-background bg-grid-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border-2 border-shadow-color bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6 brutal-shadow">
            <Sparkles className="w-4 h-4 text-secondary" /> Interactive Visual Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
            See the Magic: <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">Before vs After</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Watch how messy Indian bank statement PDFs transform instantly into clean, audit-ready Excel sheets mapped for Tally.
          </p>
        </div>

        {/* Bank Selector Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {(["hdfc", "sbi", "icici"] as BankKey[]).map((key) => {
            const isActive = selectedBank === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedBank(key)}
                className={`px-6 py-3 border-2 border-shadow-color font-black uppercase text-sm tracking-wider transition-all brutal-shadow ${
                  isActive
                    ? "bg-primary text-primary-foreground translate-x-0.5 translate-y-0.5 shadow-[2px_2px_0px_0px_#1a1c1d]"
                    : "bg-card text-foreground hover:bg-background"
                }`}
              >
                {BANK_SAMPLES[key].bankName}
              </button>
            );
          })}
        </div>

        {/* View Switcher for Mobile / Compact Screen */}
        <div className="flex justify-center md:hidden mb-8">
          <div className="inline-flex border-2 border-shadow-color bg-card p-1 brutal-shadow">
            <button
              onClick={() => setViewMode("pdfOnly")}
              className={`px-4 py-2 text-xs font-bold uppercase ${viewMode === "pdfOnly" ? "bg-destructive text-white" : "text-muted-foreground"}`}
            >
              Messy PDF
            </button>
            <button
              onClick={() => setViewMode("sideBySide")}
              className={`px-4 py-2 text-xs font-bold uppercase ${viewMode === "sideBySide" ? "bg-primary text-white" : "text-muted-foreground"}`}
            >
              Split View
            </button>
            <button
              onClick={() => setViewMode("excelOnly")}
              className={`px-4 py-2 text-xs font-bold uppercase ${viewMode === "excelOnly" ? "bg-success text-white" : "text-muted-foreground"}`}
            >
              Parsify Excel
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* BEFORE: Messy PDF Box */}
          <div
            className={`brutal-card p-6 bg-card border-2 border-shadow-color relative flex flex-col justify-between ${
              viewMode === "excelOnly" ? "hidden lg:flex" : "flex"
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex justify-between items-center pb-4 border-b-2 border-shadow-color mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-destructive/10 border border-destructive text-destructive brutal-shadow">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-destructive block">BEFORE</span>
                    <span className="text-sm font-bold text-shadow-color">Messy PDF Statement</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-destructive/10 text-destructive border border-destructive text-[10px] font-bold uppercase tracking-widest">
                  Unformatted
                </span>
              </div>

              {/* PDF Mock Visual */}
              <div className="bg-background border-2 border-shadow-color p-4 font-mono text-xs text-muted-foreground mb-6 rounded-none brutal-shadow relative overflow-hidden">
                <div className="absolute top-2 right-2 opacity-10 font-sans text-5xl font-black text-foreground pointer-events-none">
                  PDF
                </div>
                <div className="text-[11px] font-bold text-foreground mb-3 pb-2 border-b border-dashed border-shadow-color/40">
                  {sample.pdfRaw.title} <br />
                  <span className="text-muted-foreground font-normal">{sample.pdfRaw.accountNo}</span>
                </div>

                <div className="space-y-3">
                  {sample.pdfRaw.lines.map((line, idx) => (
                    <div key={idx} className="p-2 bg-card/60 border border-shadow-color/20 text-[11px] leading-tight">
                      <div className="flex justify-between text-foreground font-semibold mb-1">
                        <span>{line.date}</span>
                        <span className="text-destructive font-bold">{line.amount}</span>
                      </div>
                      <div className="text-muted-foreground text-[10px] truncate">{line.rawText}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Issue Tags */}
              <div className="space-y-2 mb-6">
                {[
                  "Merged cells & split lines across pages",
                  "Cluttered UTR, UPI, & bank transaction codes",
                  "No ledger category or GSTIN identification",
                ].map((issue, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-destructive">
                    <X className="w-4 h-4 text-destructive flex-shrink-0" strokeWidth={3} />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-dashed border-shadow-color text-center text-xs font-bold text-muted-foreground uppercase tracking-wider">
              ❌ Takes hours of manual copy-paste typing
            </div>
          </div>

          {/* AFTER: Parsify Clean Excel Box */}
          <div
            className={`brutal-card p-6 bg-card border-2 border-primary relative flex flex-col justify-between shadow-[6px_6px_0px_0px_#5b21b6] ${
              viewMode === "pdfOnly" ? "hidden lg:flex" : "flex"
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex justify-between items-center pb-4 border-b-2 border-shadow-color mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-success/20 border-2 border-success text-success brutal-shadow">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-success block">AFTER PARSIFY</span>
                    <span className="text-sm font-bold text-shadow-color">Audit-Ready Excel / CSV</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-success text-white border-2 border-shadow-color text-[10px] font-bold uppercase tracking-widest brutal-shadow">
                  99.3% Accurate
                </span>
              </div>

              {/* Excel Mock Visual */}
              <div className="bg-background border-2 border-shadow-color p-3 font-sans text-xs mb-6 brutal-shadow overflow-x-auto">
                <div className="flex items-center justify-between bg-card p-2 border border-shadow-color mb-2 text-[10px] font-bold font-mono text-muted-foreground uppercase">
                  <span>Sheet1: Parsed_Output.xlsx</span>
                  <span className="text-success font-bold">✓ Tally Prime Mapped</span>
                </div>

                <table className="w-full text-left text-[11px] border-collapse font-mono">
                  <thead>
                    <tr className="bg-muted text-foreground font-black text-[10px] uppercase border-b-2 border-shadow-color">
                      <th className="p-2">Date</th>
                      <th className="p-2">Clean Party Name</th>
                      <th className="p-2 text-right">Debit</th>
                      <th className="p-2 text-right">Credit</th>
                      <th className="p-2">GSTIN</th>
                      <th className="p-2">Voucher</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-shadow-color/20">
                    {sample.excelParsed.map((row, idx) => (
                      <tr key={idx} className="hover:bg-primary/5 transition-colors">
                        <td className="p-2 text-muted-foreground text-[10px]">{row.date}</td>
                        <td className="p-2 font-bold text-foreground text-[10px]">{row.party}</td>
                        <td className="p-2 text-right text-destructive font-bold text-[10px]">{row.debit}</td>
                        <td className="p-2 text-right text-success font-bold text-[10px]">{row.credit}</td>
                        <td className="p-2 text-[9px] text-primary font-bold">{row.gstin}</td>
                        <td className="p-2">
                          <span className={`px-1.5 py-0.5 text-[8px] font-black uppercase border border-shadow-color ${
                            row.voucher === "Payment" ? "bg-destructive/10 text-destructive" : row.voucher === "Receipt" ? "bg-success/10 text-success" : "bg-secondary/10 text-secondary"
                          }`}>
                            {row.voucher}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Feature Tags */}
              <div className="space-y-2 mb-6">
                {[
                  "Clean Party Names stripped of UTR / Bank jargon",
                  "Auto GSTIN extraction for effortless reconciliation",
                  "Ready for 1-Click Tally Prime & Zoho Books import",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-success">
                    <Check className="w-4 h-4 text-success flex-shrink-0" strokeWidth={3} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-dashed border-shadow-color flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                <ShieldCheck className="w-4 h-4 text-success" /> Zero Data Stored • Auto Purged
              </div>
              <a
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080"}/dashboard/convert`}
                className="brutal-btn-primary bg-success text-white border-shadow-color shadow-[3px_3px_0px_0px_#1a1c1d] hover:shadow-[1px_1px_0px_0px_#1a1c1d] text-xs px-4 py-2 uppercase tracking-wider font-black flex items-center gap-1.5 w-full sm:w-auto justify-center"
              >
                Convert Your Statement <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
