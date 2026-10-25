import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, Shield, Zap, Check, ShieldCheck, Lock } from 'lucide-react';
import { Pricing } from './components/pricing';
import { AnonUpload } from './components/AnonUpload';
import { TypewriterHeading } from './components/TypewriterHeading';
import { Testimonials } from './components/Testimonials';
import { BeforeAfterPreview } from './components/BeforeAfterPreview';
import { StickyBottomCTA } from './components/StickyBottomCTA';
import globalBanks from '@/data/global-banks.json';

export const metadata: Metadata = {
  title: { absolute: 'Bank Statement Converter — Free PDF to Excel & CSV | Parsify' },
  description: 'Convert bank statement PDF to Excel, CSV & Tally in seconds with 99.3% accuracy. AI bank statement converter built for CAs & finance teams. Fast, secure & free.',
  alternates: {
    canonical: 'https://parsify.in',
  },
  keywords: [
    'bank statement converter',
    'bank statement convert to excel',
    'accurate bank statement converter',
    'bank statement converter free',
    'bank statement pdf to excel converter',
    'convert pdf bank statement to excel',
    'convert bank statements to excel',
    'how to convert bank statement pdf to excel',
    'bank statement converter online',
    'best bank statement converter for CAs',
    'bank reconciliation software'
  ]
};

const BANK_LINKS = [
  { name: "HDFC Bank Statement Converter", slug: "hdfc-bank-statement-converter" },
  { name: "SBI Bank Statement Converter", slug: "sbi-bank-statement-converter" },
  { name: "ICICI Bank Statement Converter", slug: "icici-bank-statement-converter" },
  { name: "Axis Bank Statement Converter", slug: "axis-bank-statement-converter" },
  { name: "Kotak Bank Statement Converter", slug: "kotak-bank-statement-converter" },
  { name: "PNB Bank Statement Converter", slug: "pnb-bank-statement-converter" },
  { name: "Bank of Baroda Converter", slug: "bank-of-baroda-statement-converter" },
  { name: "IndusInd Bank Converter", slug: "indusind-bank-statement-converter" },
  { name: "Yes Bank Converter", slug: "yes-bank-statement-converter" },
  { name: "Canara Bank Converter", slug: "canara-bank-statement-converter" },
  { name: "IDBI Bank Converter", slug: "idbi-bank-statement-converter" },
  { name: "Union Bank Converter", slug: "union-bank-statement-converter" },
  { name: "BOB Bank Converter", slug: "bob-bank-statement-converter" },
  { name: "Indian Bank Converter", slug: "indian-bank-statement-converter" },
  { name: "Federal Bank Converter", slug: "federal-bank-statement-converter" }
];

export default function HomePage() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      
      {/* ══ 1. HERO ══ */}
      <section className="relative pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-20 border-b-2 border-shadow-color overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left */}
            <div className="max-w-2xl">
              <div className="inline-block border-2 border-shadow-color bg-card px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
                AI Bank Statement Converter for Indian CAs &amp; Accountants
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-none mb-6 text-shadow-color uppercase font-sans">
                Bank Statement <br/>
                <span className="text-primary bg-primary/10 px-4 py-1 border-2 border-primary inline-block transform -rotate-1 brutal-shadow my-2">Converter</span>
              </h1>
              <div className="mb-8">
                <TypewriterHeading />
              </div>
              <p className="text-lg text-muted-foreground font-medium mb-8 max-w-lg leading-relaxed">
                The AI-powered <strong>bank statement converter</strong> built for Indian Chartered Accountants and finance teams. Convert any bank statement PDF (HDFC, SBI, ICICI, Axis, Kotak &amp; all major Indian banks) into clean, Tally-ready Excel (XLSX, XLS) or CSV in seconds with 99.3% accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mt-8">
                <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary w-full sm:w-auto justify-center text-lg px-8 py-4 uppercase tracking-wider">
                  Convert Statement Now
                  <ArrowRight className="ml-2 w-5 h-5 inline-block" strokeWidth={3} />
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-y-2.5 gap-x-3 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-success bg-success/10 px-2.5 py-1 border border-success/30">
                  <ShieldCheck className="w-4 h-4 text-success" strokeWidth={2.5} /> 99.9% Math Reconciled
                </span>
                <span className="flex items-center gap-1.5 text-foreground bg-card px-2.5 py-1 border border-shadow-color">
                  <Check className="w-4 h-4 text-primary" strokeWidth={3} /> Zero Tally Mismatch
                </span>
                <span className="flex items-center gap-1.5 text-foreground bg-card px-2.5 py-1 border border-shadow-color">
                  <Lock className="w-3.5 h-3.5 text-secondary" strokeWidth={2.5} /> Zero Data Retention
                </span>
                <span className="flex items-center gap-1.5 text-foreground bg-card px-2.5 py-1 border border-shadow-color">
                  <FileText className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} /> Password &amp; Scanned PDFs
                </span>
              </div>
            </div>

            {/* Hero Right - Anonymous Upload Box */}
            <div className="relative mt-12 lg:mt-0">
              {/* Decorative background element */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-secondary/20 animate-pulse hidden sm:block"></div>
              
              <AnonUpload />
            </div>

          </div>
        </div>
      </section>

      {/* ══ 2. STAT STRIP ══ */}
      <section className="border-b-2 border-shadow-color bg-card">
        <div className="max-w-7xl mx-auto flex flex-wrap lg:grid lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-shadow-color">
          {[
            { num: '2,400+', label: 'Finance Teams' },
            { num: '50+', label: 'Indian Banks' },
            { num: '99.3%', label: 'Accuracy Rate' },
            { num: '0', label: 'Data Stored' },
          ].map((stat, i) => (
            <div key={i} className="p-8 w-full text-center hover:bg-background transition-colors cursor-default">
              <div className="text-4xl font-black text-primary mb-2 font-sans">{stat.num}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. HOW IT WORKS ══ */}
      <section id="how" className="py-24 sm:py-32 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              Three Steps. <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">Zero Headaches.</span>
            </h2>
            <p className="text-muted-foreground font-medium text-lg max-w-2xl mx-auto">
              Extract every transaction from any Indian or international bank statement in seconds without formatting errors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Upload', desc: 'Drag and drop any bank statement. Supports all Indian bank formats — HDFC, SBI, ICICI, Axis, Kotak, and more.', icon: FileText },
              { num: '02', title: 'Parse', desc: 'Our engine reads every row, resolves merged cells, and cleans up formatting inconsistencies automatically.', icon: Zap },
              { num: '03', title: 'Download', desc: 'Get perfectly formatted Excel or CSV, ready for Tally, QuickBooks, or your own analysis. In seconds.', icon: CheckCircle2 },
            ].map((step, i) => (
              <div key={i} className="brutal-card p-8 bg-card hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-black text-shadow-color/20">{step.num}</span>
                  <div className="p-3 bg-background border-2 border-shadow-color brutal-shadow">
                    <step.icon className="w-8 h-8 text-secondary" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 text-shadow-color">{step.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-shadow-color bg-card font-bold uppercase tracking-wider text-sm brutal-shadow hover:-translate-y-1 hover:bg-primary hover:text-white transition-all"
            >
              Learn More: Full Workflow & FAQ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 3.5. INTERACTIVE BEFORE VS AFTER PREVIEW ══ */}
      <BeforeAfterPreview />

      {/* ══ 4. FEATURES ══ */}
      <section id="features" className="py-24 sm:py-32 border-b-2 border-shadow-color bg-card bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="brutal-card p-8 bg-background relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-10 h-10 text-success" strokeWidth={2.5} />
                  <h3 className="text-2xl font-black uppercase text-shadow-color">Bank-Grade Privacy</h3>
                </div>
                <p className="text-muted-foreground font-medium mb-6">
                  We never store your financial data. The moment your conversion is complete, your original PDF and the extracted data are permanently erased from our servers. Always.
                </p>
                <div className="inline-flex items-center gap-2 bg-success/10 text-success border-2 border-success px-4 py-2 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={3} /> Zero Retention Policy
                </div>
              </div>
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 border-2 border-shadow-color z-0"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6 leading-tight">
                Built for the <span className="bg-secondary text-white px-2 border-2 border-shadow-color inline-block rotate-2 mt-2 lg:mt-0">messy reality</span> of Indian banks.
              </h2>
              <p className="text-lg text-muted-foreground font-medium mb-8">
                Merged cells, split transactions, rotated text, multi-page statements — our engine handles every edge case that breaks other tools. 99.3% accuracy, every time.
              </p>
              <ul className="space-y-4 mb-10">
                {['No templates to configure', 'Handles passwords automatically', 'Detects duplicate pages', 'Formats dates uniformly'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-shadow-color">
                    <Check className="w-6 h-6 text-secondary" strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-shadow-color bg-primary text-white font-bold uppercase tracking-wider text-sm brutal-shadow hover:-translate-y-1 transition-all"
              >
                Explore All 12+ Features & Comparisons <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 4.6. SEO MASTER CONTENT SECTION ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-card bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 1. Direct Definition (Featured Snippet Optimized) */}
          <div className="brutal-card p-8 sm:p-10 bg-background mb-16 border-2 border-shadow-color">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary inline-block mb-4">
              Comprehensive Guide
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4">
              What is a Bank Statement Converter?
            </h2>
            <p className="text-lg text-foreground font-medium leading-relaxed mb-4">
              A <strong>bank statement converter</strong> is an automated financial software that extracts transaction records from uneditable digital or scanned PDF bank statements into structured, editable spreadsheet formats like Microsoft Excel (XLS, XLSX), CSV, and Tally XML. Unlike basic document converters, a specialized AI bank statement converter detects complex bank table layouts, splits multi-line transaction narratives, auto-calculates running balances, and tags GST details for immediate accounting reconciliation.
            </p>
            <p className="text-base text-muted-foreground font-medium leading-relaxed">
              Parsify is engineered specifically for Indian Chartered Accountants (CAs), bookkeepers, tax professionals, and enterprise finance departments handling high-volume bank statement audits across SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, and all major Indian banks.
            </p>
          </div>

          {/* 2. How to Convert & Format Choice Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* How to Convert Bank Statement PDF to Excel Online */}
            <div className="brutal-card p-8 bg-background h-full border-2 border-shadow-color">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                How to Convert Bank Statement PDF to Excel in 3 Steps
              </h2>
              <ol className="space-y-6 list-none font-medium text-muted-foreground">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-none border-2 border-shadow-color bg-primary text-primary-foreground font-black flex items-center justify-center text-sm brutal-shadow">1</span>
                  <div>
                    <strong className="text-foreground font-bold block text-base mb-1">Upload Your Bank Statement PDF</strong>
                    <span>Drag and drop your PDF bank statement into the converter. Original e-statements and password-encrypted PDFs are automatically unlocked upon password entry.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-none border-2 border-shadow-color bg-secondary text-secondary-foreground font-black flex items-center justify-center text-sm brutal-shadow">2</span>
                  <div>
                    <strong className="text-foreground font-bold block text-base mb-1">AI Recognizes Table Columns &amp; Data</strong>
                    <span>The neural extraction engine scans dates, descriptions, cheque numbers, withdrawal debits, deposit credits, and balance columns with 99.3% accuracy.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-none border-2 border-shadow-color bg-success text-white font-black flex items-center justify-center text-sm brutal-shadow">3</span>
                  <div>
                    <strong className="text-foreground font-bold block text-base mb-1">Export Clean Excel (.XLSX) or CSV</strong>
                    <span>Download clean, standardized tabular data ready for immediate import into Tally Prime, Zoho Books, QuickBooks, or custom financial models.</span>
                  </div>
                </li>
              </ol>
            </div>

            {/* Excel vs CSV Selection Guide */}
            <div className="brutal-card p-8 bg-background h-full border-2 border-shadow-color">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                PDF to Excel vs PDF to CSV: Which Format to Choose?
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                Selecting the ideal output format depends on your financial workflow:
              </p>
              <div className="space-y-4 text-sm font-medium">
                <div className="p-4 bg-card border-2 border-shadow-color">
                  <h3 className="font-bold text-base text-foreground uppercase mb-1 flex items-center gap-2">
                    <span className="text-primary font-black">XLSX / XLS (Microsoft Excel)</span>
                  </h3>
                  <p className="text-muted-foreground">Best for auditing, manual review, and mathematical formulas. Retains visual column formatting, currency signs, and date formats across multi-page bank accounts.</p>
                </div>
                <div className="p-4 bg-card border-2 border-shadow-color">
                  <h3 className="font-bold text-base text-foreground uppercase mb-1 flex items-center gap-2">
                    <span className="text-secondary font-black">CSV (Comma-Separated Values)</span>
                  </h3>
                  <p className="text-muted-foreground">Ideal for automated bulk imports into accounting databases, ERP systems, Tally Prime, and Zoho Books where clean raw data without formatting overhead is required.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Detailed Comparison Table (High-Value SEO Asset) */}
          <div className="brutal-card p-8 sm:p-10 bg-background mb-16 border-2 border-shadow-color overflow-hidden">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 border border-secondary inline-block mb-3">
                Industry Comparison
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-shadow-color font-sans mb-3">
                Manual Entry vs Generic PDF Tools vs Parsify AI Converter
              </h2>
              <p className="text-muted-foreground font-medium max-w-2xl">
                See why over 2,400 accounting firms and chartered accountants transitioned from slow manual entry and broken generic PDF tools to Parsify.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-shadow-color bg-card">
                    <th className="p-4 font-black uppercase text-foreground">Feature / Capability</th>
                    <th className="p-4 font-black uppercase text-muted-foreground">Manual Typing</th>
                    <th className="p-4 font-black uppercase text-destructive">Generic PDF Converters</th>
                    <th className="p-4 font-black uppercase text-primary bg-primary/10 border-l-2 border-r-2 border-primary">Parsify Bank Converter</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-b-2 border-shadow-color font-medium">
                  <tr>
                    <td className="p-4 font-bold text-foreground">Speed (50-Page Statement)</td>
                    <td className="p-4 text-muted-foreground">4 to 6 Hours</td>
                    <td className="p-4 text-muted-foreground">2 to 3 Minutes</td>
                    <td className="p-4 font-bold text-success bg-primary/5 border-l-2 border-r-2 border-primary">Under 10 Seconds ⚡</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-foreground">Merged Cells &amp; Split Narratives</td>
                    <td className="p-4 text-muted-foreground">Prone to human error</td>
                    <td className="p-4 text-destructive">Breaks table structure ❌</td>
                    <td className="p-4 font-bold text-success bg-primary/5 border-l-2 border-r-2 border-primary">Auto-reconstructed (99.3%) ✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-foreground">Scanned Image &amp; CamScanner PDFs</td>
                    <td className="p-4 text-muted-foreground">Requires manual typing</td>
                    <td className="p-4 text-destructive">Unreadable / Garbage text ❌</td>
                    <td className="p-4 font-bold text-success bg-primary/5 border-l-2 border-r-2 border-primary">Deep Neural OCR Engine ✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-foreground">Password-Protected Bank Statements</td>
                    <td className="p-4 text-muted-foreground">Manual unlock needed</td>
                    <td className="p-4 text-destructive">Upload fails ❌</td>
                    <td className="p-4 font-bold text-success bg-primary/5 border-l-2 border-r-2 border-primary">One-click auto decryption ✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-foreground">GSTIN &amp; Party Name Tagging</td>
                    <td className="p-4 text-muted-foreground">Manual search &amp; copy</td>
                    <td className="p-4 text-destructive">Not available ❌</td>
                    <td className="p-4 font-bold text-success bg-primary/5 border-l-2 border-r-2 border-primary">Auto-extracted &amp; Verified ✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-foreground">Tally Voucher Mapping (Contra/Receipt)</td>
                    <td className="p-4 text-muted-foreground">Manual classification</td>
                    <td className="p-4 text-destructive">Not available ❌</td>
                    <td className="p-4 font-bold text-success bg-primary/5 border-l-2 border-r-2 border-primary">Tally Prime Ready ✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-foreground">Data Confidentiality &amp; Privacy</td>
                    <td className="p-4 text-muted-foreground">Controlled locally</td>
                    <td className="p-4 text-destructive">Stored on third-party cloud ⚠️</td>
                    <td className="p-4 font-bold text-success bg-primary/5 border-l-2 border-r-2 border-primary">Strict Zero Data Retention 🔒</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Why Use an Online Bank Statement Converter (SEO Keywords Block) */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="brutal-card p-6 bg-background border-2 border-shadow-color">
              <h3 className="text-xl font-black uppercase text-shadow-color mb-3">
                Eliminate Reconciliation Errors
              </h3>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                Manual transcription of debit and credit amounts often leads to accounting variances. Parsify cross-verifies opening and closing balances across every statement page to ensure zero discrepancy.
              </p>
            </div>
            <div className="brutal-card p-6 bg-background border-2 border-shadow-color">
              <h3 className="text-xl font-black uppercase text-shadow-color mb-3">
                Bulk Bank Statement Processing
              </h3>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                Convert dozens of monthly statements for multi-year audits or loan underwriting simultaneously. Combine multi-month bank statements into a single unified Excel spreadsheet effortlessly.
              </p>
            </div>
            <div className="brutal-card p-6 bg-background border-2 border-shadow-color">
              <h3 className="text-xl font-black uppercase text-shadow-color mb-3">
                Bank-Grade 256-bit Security
              </h3>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">
                Your client bank statements are processed in memory with 256-bit encryption. Files are never stored, indexed, or shared. Everything is permanently purged immediately after conversion.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══ 4.8. SUPPORTED BANKS & TOOLS SEO LINKS ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Featured Tools */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4">
              Featured <span className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block">Conversion Tools</span>
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl mx-auto mb-8">
              Explore specialized conversion formats built for Indian CAs, accountants, and finance teams.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              <Link
                href="/pdf-to-excel"
                className="brutal-card p-6 bg-card hover:-translate-y-1 transition-transform border-2 border-shadow-color"
              >
                <div className="text-primary font-black uppercase text-lg mb-2">PDF to Excel Converter →</div>
                <p className="text-xs text-muted-foreground font-medium">Extract bank statements directly into formatted XLS & XLSX files mapped for Tally.</p>
              </Link>
              <Link
                href="/pdf-to-csv"
                className="brutal-card p-6 bg-card hover:-translate-y-1 transition-transform border-2 border-shadow-color"
              >
                <div className="text-secondary font-black uppercase text-lg mb-2">PDF to CSV Converter →</div>
                <p className="text-xs text-muted-foreground font-medium">Convert PDF statements into lightweight plain-text CSV files for databases & Zoho.</p>
              </Link>
              <Link
                href="/blog/how-to-import-pdf-bank-statement-in-tally-prime"
                className="brutal-card p-6 bg-card hover:-translate-y-1 transition-transform border-2 border-shadow-color"
              >
                <div className="text-success font-black uppercase text-lg mb-2">Tally Prime Bank Importer →</div>
                <p className="text-xs text-muted-foreground font-medium">Automate bank reconciliation in Tally Prime with formatted Excel &amp; XML voucher mapping.</p>
              </Link>
            </div>
          </div>

          <div className="text-center mb-12">
             <h3 className="text-2xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4">
               Supported <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block">Bank Converters</span>
             </h3>
             <p className="text-muted-foreground font-medium max-w-xl mx-auto">
               Instantly convert PDF bank statements from any major Indian bank using our specialized bank statement converter tools.
             </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {BANK_LINKS.map((bank, i) => (
              <Link
                key={i}
                href={`/${bank.slug}`}
                className="px-4 py-2 border-2 border-shadow-color bg-card font-bold text-sm uppercase tracking-wider hover:-translate-y-0.5 hover:translate-x-0.5 brutal-shadow hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all"
              >
                {bank.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <h3 className="text-xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4">
               Global Banks (International)
             </h3>
             <div className="flex flex-wrap justify-center gap-3">
               {globalBanks.slice(0, 15).map((bank) => (
                 <Link
                   key={bank.bankSlug}
                   href={`/converter/${bank.countrySlug}/${bank.bankSlug}`}
                   className="px-3 py-1.5 border-2 border-shadow-color bg-background text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 hover:translate-x-0.5 brutal-shadow hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all"
                 >
                   {bank.bankName}
                 </Link>
               ))}
               <Link href="/converter/usa/chase" className="px-3 py-1.5 border-2 border-primary bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 hover:translate-x-0.5 brutal-shadow hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all">
                 View All Global Banks →
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* ══ 4.9. TESTIMONIALS ══ */}
      <Testimonials />

      {/* ══ 5. PRICING ══ */}
      <Pricing DASHBOARD_URL={DASHBOARD_URL} />
      
      {/* ══ 5.1. FAQ SECTION & JSON-LD SCHEMA ══ */}
      <section id="faq" className="py-32 border-b-2 border-shadow-color bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary inline-block mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              Bank Statement Converter <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">FAQs</span>
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl mx-auto">
              Everything you need to know about converting bank statements from PDF to Excel, CSV, and Tally.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What is the best bank statement converter for Indian CAs and accountants?",
                a: "Parsify is an AI bank statement converter built specifically for Indian Chartered Accountants, tax practitioners, and bookkeepers. It supports all major Indian banks (including SBI, HDFC, ICICI, Axis, Kotak, and Bank of Baroda), handles merged rows and scanned PDFs, tags GSTINs, and formats outputs for instant Tally Prime import with 99.3% accuracy."
              },
              {
                q: "How can I convert a bank statement to Excel for free?",
                a: "You can convert bank statement PDFs to Excel for free on Parsify without credit card details. Simply drag and drop your PDF bank statement into the upload box on our homepage. The AI parses transaction rows in seconds and gives you an instant, clean Microsoft Excel (XLSX) or CSV file."
              },
              {
                q: "Can this bank statement converter handle password-protected PDFs?",
                a: "Yes! Parsify comes with automated PDF decryption. When you upload a password-protected bank statement (such as standard DOB or PAN passwords from SBI or HDFC), simply enter the password once. The file is decrypted in memory and converted without saving your password."
              },
              {
                q: "Does Parsify convert scanned or image-based bank statement PDFs?",
                a: "Yes. Parsify features a deep Neural OCR engine trained specifically on financial records and bank fonts. It successfully recognizes table borders, currency signs, and numbers from low-resolution scans, CamScanner mobile uploads, and skewed photocopies that fail on normal PDF converters."
              },
              {
                q: "How does an AI bank statement converter differ from generic PDF converters?",
                a: "Generic PDF converters treat pages as unstructured text, often jumbling columns, splitting multi-line transaction narratives into fake rows, and corrupting balances. Parsify's AI understands banking structure, reconciles opening and closing balances, extracts clean party names, and separates debits from credits perfectly."
              },
              {
                q: "Can I import the converted bank statement directly into Tally Prime or Zoho Books?",
                a: "Yes. Parsify's Excel and CSV exports are mapped specifically for accounting software. Outputs include standardized columns for Date, Narration, Extracted Party Name, Debit, Credit, Balance, GSTIN, and auto-classified Tally Voucher types (Payment, Receipt, Contra) for smooth import into Tally Prime and Zoho."
              },
              {
                q: "Which Indian and international banks are supported?",
                a: "Parsify supports all major Indian banks plus leading banks in the USA, UK, UAE, Australia and Singapore. In India, it natively supports State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Punjab National Bank (PNB), Bank of Baroda (BOB), Canara Bank, Union Bank, IndusInd, and cooperative banks across all account types."
              },
              {
                q: "Is it safe to upload confidential client bank statements to Parsify?",
                a: "Absolutely. Security is our highest priority. Parsify uses 256-bit SSL encryption and enforces a strict Zero-Data-Retention policy. Statements are processed in ephemeral memory and permanently purged immediately after conversion. We never store, share, or monetize financial transaction records."
              }
            ].map((faq, i) => (
              <div key={i} className="brutal-card p-6 bg-background border-2 border-shadow-color">
                <h3 className="text-lg sm:text-xl font-black uppercase text-shadow-color mb-3 flex items-start gap-2">
                  <span className="text-secondary font-mono font-black">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-muted-foreground font-medium pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQPage JSON-LD Schema injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best bank statement converter for Indian CAs and accountants?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Parsify is an AI bank statement converter built specifically for Indian Chartered Accountants, tax practitioners, and bookkeepers. It supports all major Indian banks (including SBI, HDFC, ICICI, Axis, Kotak, and Bank of Baroda), handles merged rows and scanned PDFs, tags GSTINs, and formats outputs for instant Tally Prime import with 99.3% accuracy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I convert a bank statement to Excel for free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can convert bank statement PDFs to Excel for free on Parsify without credit card details. Simply drag and drop your PDF bank statement into the upload box on our homepage. The AI parses transaction rows in seconds and gives you an instant, clean Microsoft Excel (XLSX) or CSV file."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can this bank statement converter handle password-protected PDFs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Parsify comes with automated PDF decryption. When you upload a password-protected bank statement (such as standard DOB or PAN passwords from SBI or HDFC), simply enter the password once. The file is decrypted in memory and converted without saving your password."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Parsify convert scanned or image-based bank statement PDFs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Parsify features a deep Neural OCR engine trained specifically on financial records and bank fonts. It successfully recognizes table borders, currency signs, and numbers from low-resolution scans, CamScanner mobile uploads, and skewed photocopies that fail on normal PDF converters."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does an AI bank statement converter differ from generic PDF converters?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Generic PDF converters treat pages as unstructured text, often jumbling columns, splitting multi-line transaction narratives into fake rows, and corrupting balances. Parsify's AI understands banking structure, reconciles opening and closing balances, extracts clean party names, and separates debits from credits perfectly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I import the converted bank statement directly into Tally Prime or Zoho Books?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Parsify's Excel and CSV exports are mapped specifically for accounting software. Outputs include standardized columns for Date, Narration, Extracted Party Name, Debit, Credit, Balance, GSTIN, and auto-classified Tally Voucher types (Payment, Receipt, Contra) for smooth import into Tally Prime and Zoho."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which Indian and international banks are supported?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Parsify supports all major Indian banks plus leading banks in the USA, UK, UAE, Australia and Singapore. In India, it natively supports State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Punjab National Bank (PNB), Bank of Baroda (BOB), Canara Bank, Union Bank, IndusInd, and cooperative banks across all account types."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it safe to upload confidential client bank statements to Parsify?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Security is our highest priority. Parsify uses 256-bit SSL encryption and enforces a strict Zero-Data-Retention policy. Statements are processed in ephemeral memory and permanently purged immediately after conversion. We never store, share, or monetize financial transaction records."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* ══ 6. CTA ══ */}
      <section className="py-32 bg-primary text-primary-foreground border-b-2 border-shadow-color relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight mb-8 leading-tight">
            Ready to stop <span className="text-secondary bg-white px-2 border-4 border-shadow-color inline-block rotate-2 brutal-shadow mt-2 md:mt-0">typing</span>?
          </h2>
          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto">
            Join 2,400+ finance teams automating their bank statement reconciliation today.
          </p>
          <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary bg-secondary text-white border-shadow-color shadow-[6px_6px_0px_0px_#1a1c1d] hover:shadow-[2px_2px_0px_0px_#1a1c1d] hover:translate-x-1 hover:translate-y-1 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 uppercase tracking-widest w-full sm:w-auto text-center block sm:inline-block">
            Start Converting
          </a>
        </div>
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </section>

      {/* ══ 7. STICKY BOTTOM FLOATING CTA ══ */}
      <StickyBottomCTA />

    </div>
  );
}

// Helper icon
function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
