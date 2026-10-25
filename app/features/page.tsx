import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  Shield,
  Zap,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  Sparkles,
  Lock,
  Calculator,
  ArrowRight,
  Database,
  Building,
  FileText,
  FileCode,
} from "lucide-react";
import { APP_ID, breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features — Advanced Bank Statement Parsing & Enrichment Engine",
  description:
    "Explore Parsify's powerful bank statement conversion features: 99.9% accuracy, zero data retention, auto GST extraction, smart ledger categorization, and Tally Prime XML export.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Parsify Features — Bank Statement PDF to Excel & Tally Converter",
    description:
      "Built for Indian CAs, bookkeepers, and finance teams. Auto GST tagging, party extraction, and running balance reconciliation.",
    url: "https://parsify.in/features",
  },
};

const featuresSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Parsify Features",
  url: "https://parsify.in/features",
  about: { "@id": APP_ID },
  description:
    "Comprehensive feature overview of Parsify's bank statement parser and data enrichment engine.",
};

const FEATURES = [
  {
    icon: Shield,
    badge: "Security First",
    title: "Zero Data Retention & Bank-Grade Privacy",
    description:
      "We never store your financial records. Files are processed entirely in memory and permanently wiped within seconds of conversion completion. TLS 1.3 encrypted in transit.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Calculator,
    badge: "Audit Grade",
    title: "99.9% Mathematical Balance Reconciliation",
    description:
      "Our self-healing verification engine calculates Prev Balance - Debit + Credit = Current Balance for every single row, auto-correcting flipped columns and OCR decimal shifts.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Sparkles,
    badge: "Smart Tagging",
    title: "Auto GST & GSTIN Extraction",
    description:
      "Extracts hidden GSTINs, CGST, SGST, and IGST breakdowns embedded in unstructured UPI and NEFT narrations, saving hours during GST return preparation.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Layers,
    badge: "Accounting Ready",
    title: "Tally Voucher Type Auto-Mapping",
    description:
      "Automatically classifies each transaction as Receipt, Payment, or Contra based on debit/credit flow, account numbers, and context for seamless Tally import.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Building,
    badge: "Universal Support",
    title: "100+ Indian Bank Formats Supported",
    description:
      "Auto-detects templates for SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, PNB, Bank of Baroda, Canara Bank, IndusInd, and all scheduled Indian banks without configuration.",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
  {
    icon: FileText,
    badge: "Clean Data",
    title: "Party & Beneficiary Name Extraction",
    description:
      "Strips away bank codes, IFSC suffixes, UTR references, and transaction junk to leave you with clean, recognizable customer and vendor names.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Zap,
    badge: "High Performance",
    title: "Parallel Multi-Page Chunking",
    description:
      "Convert massive 50+ page annual statements in under 15 seconds. Large PDFs are automatically split into parallel chunks to guarantee zero transaction drops or token truncation.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Lock,
    badge: "Password Handling",
    title: "Protected PDF Decryption",
    description:
      "Upload password-encrypted e-statements safely. Enter your password once and the parser decrypts the document directly in memory without saving keys.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: FileSpreadsheet,
    badge: "Multi-Format",
    title: "Styled Excel (.XLSX), CSV & Tally XML",
    description:
      "Export structured Excel sheets formatted with native currency amounts, clean CSVs for SQL/ERP pipelines, or direct Tally XML with ledger mapping.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export default function FeaturesPage() {
  const dashboardUrl =
    process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.parsify.in";

  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 font-sans bg-grid-pattern">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Features", path: "/features" }])
          ),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Hero */}
        <div className="text-center mb-16 sm:mb-20 brutal-card p-8 sm:p-14 bg-card">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-6 brutal-shadow">
            Enterprise Feature Suite
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6 leading-tight">
            Built for the{" "}
            <span className="bg-primary text-primary-foreground px-3 py-1 border-2 border-shadow-color inline-block rotate-1 brutal-shadow">
              Complex Reality
            </span>{" "}
            of Indian Statements.
          </h1>
          <p className="text-lg sm:text-xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            From multi-line UPI narrations and borderless tables to scanned
            passbooks and encrypted PDFs — Parsify is built to extract, clean, and
            reconcile every single transaction row.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/"
              className="brutal-btn-primary uppercase tracking-wider text-sm sm:text-base px-8 py-4 inline-flex items-center gap-2"
            >
              Convert Statement Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="brutal-btn-secondary uppercase tracking-wider text-sm sm:text-base px-8 py-4"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="brutal-card p-8 bg-card flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-3 border-2 border-shadow-color brutal-shadow bg-background`}
                  >
                    <feat.icon
                      className={`w-7 h-7 ${feat.color}`}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 border-2 border-shadow-color bg-background text-shadow-color">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-shadow-color mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section: Parsify vs Standard vs Manual */}
        <div className="brutal-card p-8 sm:p-12 bg-background border-2 border-shadow-color mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-shadow-color mb-3">
              Why Financial Teams Choose Parsify
            </h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
              How Parsify compares to generic PDF converters and error-prone manual data entry.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border-2 border-shadow-color text-sm sm:text-base">
              <thead>
                <tr className="bg-muted border-b-2 border-shadow-color text-shadow-color font-black uppercase">
                  <th className="p-4 border-r-2 border-shadow-color">Capability</th>
                  <th className="p-4 border-r-2 border-shadow-color bg-primary text-primary-foreground">
                    Parsify
                  </th>
                  <th className="p-4 border-r-2 border-shadow-color">Generic PDF Tools</th>
                  <th className="p-4">Manual Excel Typing</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-shadow-color font-medium">
                <tr>
                  <td className="p-4 border-r-2 border-shadow-color font-bold">Extraction Accuracy</td>
                  <td className="p-4 border-r-2 border-shadow-color bg-primary/5 font-bold text-success flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> 99.9% Math Reconciled
                  </td>
                  <td className="p-4 border-r-2 border-shadow-color text-muted-foreground">60-75% (Breaks on merged cells)</td>
                  <td className="p-4 text-muted-foreground">High Human Error</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-2 border-shadow-color font-bold">Speed (20 Pages)</td>
                  <td className="p-4 border-r-2 border-shadow-color bg-primary/5 font-bold text-primary">
                    Under 10 Seconds
                  </td>
                  <td className="p-4 border-r-2 border-shadow-color text-muted-foreground">30-60 Seconds</td>
                  <td className="p-4 text-muted-foreground">2 to 4 Hours</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-2 border-shadow-color font-bold">Auto GST &amp; Ledger Tagging</td>
                  <td className="p-4 border-r-2 border-shadow-color bg-primary/5 font-bold text-success">
                    Yes (Built-in)
                  </td>
                  <td className="p-4 border-r-2 border-shadow-color text-muted-foreground">No</td>
                  <td className="p-4 text-muted-foreground">Manual Lookup</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-2 border-shadow-color font-bold">Tally XML Direct Export</td>
                  <td className="p-4 border-r-2 border-shadow-color bg-primary/5 font-bold text-success">
                    Yes (1-Click Import)
                  </td>
                  <td className="p-4 border-r-2 border-shadow-color text-muted-foreground">No</td>
                  <td className="p-4 text-muted-foreground">Requires Custom Script</td>
                </tr>
                <tr>
                  <td className="p-4 border-r-2 border-shadow-color font-bold">Data Privacy</td>
                  <td className="p-4 border-r-2 border-shadow-color bg-primary/5 font-bold text-success">
                    0-Day Zero Retention
                  </td>
                  <td className="p-4 border-r-2 border-shadow-color text-muted-foreground">Files often kept on server</td>
                  <td className="p-4 text-muted-foreground">Stored on local machines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="brutal-card p-8 sm:p-12 bg-primary text-primary-foreground text-center border-2 border-shadow-color">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-sans">
            Ready to Convert Your Bank Statements?
          </h2>
          <p className="text-base sm:text-lg font-medium opacity-90 max-w-2xl mx-auto mb-8">
            Experience the fastest, most accurate bank statement converter for Indian Chartered Accountants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/"
              className="bg-card text-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm sm:text-base border-2 border-shadow-color brutal-shadow hover:bg-background transition-colors"
            >
              Start Free Today
            </Link>
            <a
              href={`${dashboardUrl}/signup`}
              className="bg-secondary text-secondary-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm sm:text-base border-2 border-shadow-color brutal-shadow hover:opacity-95 transition-opacity"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
