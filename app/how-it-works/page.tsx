import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import {
  FileText,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
  Upload,
  Sparkles,
  FileSpreadsheet,
  Cpu,
  Clock,
  HelpCircle,
} from "lucide-react";
import { APP_ID, breadcrumbSchema } from "@/lib/site";
import { BeforeAfterPreview } from "../components/BeforeAfterPreview";

export const metadata: Metadata = {
  title: "How It Works — Convert Bank Statement PDF to Excel in 3 Steps",
  description:
    "Learn how Parsify converts bank statements to Excel and CSV in under 10 seconds. Step-by-step guide to uploading, AI table extraction, and 1-click accounting download.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How Parsify Works — Bank Statement PDF to Excel & CSV",
    description:
      "Convert any Indian bank statement (SBI, HDFC, ICICI, Axis) to clean Excel or Tally XML in 3 simple steps.",
    url: "https://parsify.in/how-it-works",
  },
};

const howItWorksSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Convert Bank Statement PDF to Excel with Parsify",
  description:
    "A 3-step guide to converting uneditable PDF bank statements to structured Excel and CSV spreadsheets.",
  totalTime: "PT10S",
  step: [
    {
      "@type": "HowToStep",
      name: "Upload Statement",
      text: "Drag and drop your PDF bank statement. Enter password if the file is encrypted.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "AI Extraction & Reconciliation",
      text: "Parsify's layout engine reads all columns, heals merged cells, and mathematically audits the running balance.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Download Excel or CSV",
      text: "Review the live interactive table preview and download your structured XLSX, CSV, or Tally XML file.",
      position: 3,
    },
  ],
};

const STEPS = [
  {
    step: "01",
    title: "Upload Any Bank Statement",
    subtitle: "Supports original e-statements, scanned PDFs & password-locked files",
    icon: Upload,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    points: [
      "Drag and drop any PDF from 100+ Indian banks (SBI, HDFC, ICICI, Axis, Kotak, etc.)",
      "If your statement is password-protected, enter the password once for safe in-memory decryption",
      "Handles both digital text PDFs and scanned physical paper statements seamlessly",
    ],
  },
  {
    step: "02",
    title: "AI Table Extraction & Math Audit",
    subtitle: "Zero-template neural parsing with 99.9% mathematical balance reconciliation",
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    points: [
      "Automatically maps Date, Value Date, Narration, Cheque No, Debit, Credit, and Balance",
      "Mathematical self-healing engine verifies Prev Balance - Debit + Credit = Current Balance",
      "Extracts embedded GSTINs and assigns accounting categories (Salary, Vendor, Tax, EMI)",
    ],
  },
  {
    step: "03",
    title: "Download Clean Excel, CSV or Tally XML",
    subtitle: "Ready for immediate import into Tally Prime, Zoho Books, or Excel models",
    icon: FileSpreadsheet,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    points: [
      "Live in-browser preview lets you inspect and search rows before downloading",
      "Download native Microsoft Excel (.XLSX) with clean numerical columns and formulas",
      "Export 1-click Tally Prime XML with automated voucher type assignment (Receipt/Payment/Contra)",
    ],
  },
];

const FAQS = [
  {
    q: "Do I need to install any software or Excel add-in?",
    a: "No software or plugins required. Parsify works 100% online in your web browser on desktop, tablet, and mobile devices.",
  },
  {
    q: "Can Parsify convert password-encrypted PDF statements?",
    a: "Yes! When you upload a password-locked statement, Parsify prompts you for the password and decrypts the document directly in memory without ever saving your password.",
  },
  {
    q: "How does Parsify handle multi-page large statements?",
    a: "Parsify splits multi-page statements into parallel 3-page chunks. This guarantees that 20, 50, or 100+ page statements are extracted end-to-end without hitting AI output token limits or dropping transactions.",
  },
  {
    q: "Is my financial data kept safe and private?",
    a: "We maintain a strict Zero Data Retention policy. Your original statement and extracted records are processed entirely in memory and permanently wiped right after conversion. We never share or sell financial information.",
  },
  {
    q: "Can I convert scanned statements from a mobile camera or printer?",
    a: "Yes. Our OCR model extracts transactions from scanned passbooks, photocopied statements, and mobile phone photos with computer-vision text restoration.",
  },
];

export default function HowItWorksPage() {
  const dashboardUrl =
    process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.parsify.in";

  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 font-sans bg-grid-pattern">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howItWorksSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "How It Works", path: "/how-it-works" }])
          ),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Hero */}
        <div className="text-center mb-16 sm:mb-20 brutal-card p-8 sm:p-14 bg-card">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-6 brutal-shadow">
            Simple 3-Step Process
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6 leading-tight">
            How Parsify{" "}
            <span className="bg-secondary text-white px-3 py-1 border-2 border-shadow-color inline-block -rotate-1 brutal-shadow">
              Works
            </span>
          </h1>
          <p className="text-lg sm:text-xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Transform messy, locked, or scanned PDF bank statements into audit-ready
            Excel spreadsheets and Tally XML files in under 10 seconds.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/"
              className="brutal-btn-primary uppercase tracking-wider text-sm sm:text-base px-8 py-4 inline-flex items-center gap-2"
            >
              Try Free Conversion <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/features"
              className="brutal-btn-secondary uppercase tracking-wider text-sm sm:text-base px-8 py-4"
            >
              Explore All Features
            </Link>
          </div>
        </div>

        {/* 3 Step Breakdown */}
        <div className="space-y-12 mb-20">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className="brutal-card p-8 sm:p-12 bg-card border-2 border-shadow-color"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-3 flex lg:flex-col items-center justify-between lg:justify-center gap-4 pb-6 lg:pb-0 border-b-2 lg:border-b-0 lg:border-r-2 border-shadow-color pr-0 lg:pr-8">
                  <span className="text-6xl sm:text-8xl font-black text-shadow-color/15 font-sans leading-none">
                    {s.step}
                  </span>
                  <div className="p-4 bg-background border-2 border-shadow-color brutal-shadow">
                    <s.icon className={`w-10 h-10 ${s.color}`} strokeWidth={2.5} />
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-primary uppercase tracking-wider mb-6">
                    {s.subtitle}
                  </p>
                  <ul className="space-y-3">
                    {s.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-3 font-medium text-foreground text-sm sm:text-base"
                      >
                        <CheckCircle2
                          className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before vs After Demo */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary inline-block mb-3">
              Interactive Preview
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-shadow-color">
              See the Transformation
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl mx-auto mt-2">
              Compare an unreadable PDF statement against Parsify&apos;s clean, structured Excel export.
            </p>
          </div>
          <BeforeAfterPreview />
        </div>

        {/* FAQs */}
        <div className="brutal-card p-8 sm:p-12 bg-background border-2 border-shadow-color mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-shadow-color mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl mx-auto">
              Everything you need to know about how Parsify converts statements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-card border-2 border-shadow-color brutal-shadow"
              >
                <h4 className="text-base sm:text-lg font-black uppercase text-shadow-color mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="brutal-card p-8 sm:p-12 bg-primary text-primary-foreground text-center border-2 border-shadow-color">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 font-sans">
            Ready to Try It Yourself?
          </h2>
          <p className="text-base sm:text-lg font-medium opacity-90 max-w-2xl mx-auto mb-8">
            Upload your first statement for free. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/"
              className="bg-card text-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm sm:text-base border-2 border-shadow-color brutal-shadow hover:bg-background transition-colors"
            >
              Convert A Statement Now
            </Link>
            <a
              href={`${dashboardUrl}/signup`}
              className="bg-secondary text-secondary-foreground px-8 py-4 font-bold uppercase tracking-wider text-sm sm:text-base border-2 border-shadow-color brutal-shadow hover:opacity-95 transition-opacity"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
