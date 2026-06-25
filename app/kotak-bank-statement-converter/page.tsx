import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, Zap, Shield, Download, Check } from 'lucide-react';
import { AnonUpload } from '../components/AnonUpload';

export const metadata: Metadata = {
  title: 'Kotak Bank Statement to Excel Converter — PDF to Excel/CSV Free | Parsify',
  description:
    'Convert Kotak bank statement PDF to Excel or CSV instantly. Supports all Kotak statement formats — savings, current, credit card, fixed deposit. Auto GST tagging, Tally-ready output. Free for Indian CAs.',
  alternates: {
    canonical: 'https://parsify.in/kotak-bank-statement-converter',
  },
  openGraph: {
    title: 'Kotak Bank Statement to Excel Converter — Free | Parsify',
    description: 'Convert Kotak bank statement PDF to clean Excel/CSV in seconds. Auto-detects all Kotak formats. Used by 2,400+ CA firms across India.',
    url: 'https://parsify.in/kotak-bank-statement-converter',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to convert Kotak bank statement PDF to Excel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to Parsify.in, upload your Kotak bank statement PDF, and download a clean Excel file in seconds. Parsify auto-detects all Kotak statement formats including savings, current, and credit card statements."
      }
    },
    {
      "@type": "Question",
      "name": "Does Parsify support Kotak NetBanking downloaded statements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Parsify supports all Kotak statement formats — statements downloaded from Kotak NetBanking, Kotak mobile app, and even scanned/physical copies. Both portrait and landscape layouts are handled automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert password-protected Kotak bank statements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Just upload the PDF and enter the password when prompted. Parsify handles Kotak's standard password format (usually your customer ID or date of birth) and extracts all transactions accurately."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Kotak statement converter free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can convert 1 Kotak statement per day completely free without signing up. Create a free account for 50 free pages monthly. Paid plans start at ₹999/month for 40 statements."
      }
    }
  ]
};

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

const BANK_FORMATS = [
  { name: 'Kotak Savings Account', desc: 'Standard savings account statements from NetBanking or branch' },
  { name: 'Kotak Current Account', desc: 'Business current account statements with high transaction volumes' },
  { name: 'Kotak Credit Card', desc: 'Credit card statements with merchant details and reward points' },
  { name: 'Kotak Fixed Deposit', desc: 'FD statements with interest accrual and maturity details' },
  { name: 'Kotak Demat/Trading', desc: 'Demat account statements with stock transaction details' },
  { name: 'Kotak NRI Account', desc: 'NRE/NRO account statements with forex conversion details' },
];

export default function KotakConverterPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">

      {/* ══ HERO ══ */}
      <section className="relative pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-20 border-b-2 border-shadow-color overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Hero Left */}
            <div className="max-w-2xl">
              <div className="inline-block border-2 border-shadow-color bg-card px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
                Kotak Bank Statement Converter
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none mb-6 text-shadow-color uppercase font-sans">
                Convert Kotak<br/>
                <span className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block transform -rotate-1 mt-2">Bank Statement</span><br/>
                to Excel.
              </h1>
              <p className="text-lg text-muted-foreground font-medium mb-10 max-w-lg leading-relaxed">
                Upload your Kotak bank statement PDF — savings, current, or credit card. Get a clean, structured Excel or CSV file in under 5 seconds. Auto GST tagging and Tally-ready output included.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Savings', 'Current', 'Credit Card', 'FD', 'Demat'].map((type) => (
                  <span key={type} className="inline-flex items-center gap-1.5 border-2 border-shadow-color bg-card px-3 py-1.5 text-xs font-bold uppercase tracking-widest brutal-shadow">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" strokeWidth={3} />
                    {type}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary w-full sm:w-auto justify-center text-lg px-8 py-4 uppercase tracking-wider">
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 inline-block" strokeWidth={3} />
                </a>
              </div>
            </div>

            {/* Hero Right - Upload */}
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-secondary/20 animate-pulse hidden sm:block"></div>
              <AnonUpload />
            </div>
          </div>
        </div>

        {/* JSON-LD for Kotak FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="border-b-2 border-shadow-color bg-card">
        <div className="max-w-7xl mx-auto flex flex-wrap lg:grid lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-shadow-color">
          {[
            { num: '2,400+', label: 'CA Firms Trust Parsify' },
            { num: '99.3%', label: 'Accuracy on Kotak' },
            { num: '<5s', label: 'Average Parse Time' },
            { num: '0', label: 'Data Stored' },
          ].map((stat, i) => (
            <div key={i} className="p-8 w-full text-center hover:bg-background transition-colors cursor-default">
              <div className="text-4xl font-black text-primary mb-2 font-sans">{stat.num}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SUPPORTED Kotak FORMATS ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              All Kotak <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">Formats Supported</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Parsify auto-detects every Kotak statement layout. No manual template selection needed — just upload and download.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BANK_FORMATS.map((format, i) => (
              <div key={i} className="brutal-card p-6 bg-card hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 border-2 border-primary/20">
                    <FileText className="w-5 h-5 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black uppercase text-shadow-color">{format.name}</h3>
                </div>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-card bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              Convert Kotak Statement <span className="text-secondary inline-block mt-2 sm:mt-0">in 3 Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Upload Kotak PDF',
                desc: 'Drag and drop your Kotak bank statement. Password-protected PDFs are handled automatically. Works with NetBanking, mobile app, and branch downloads.',
                icon: FileText,
              },
              {
                num: '02',
                title: 'AI Parses Everything',
                desc: 'Our engine reads every transaction row, resolves Kotak\'s merged cells and multi-page formatting, auto-tags GST, extracts party names, and categorizes transactions.',
                icon: Zap,
              },
              {
                num: '03',
                title: 'Download Excel/CSV',
                desc: 'Get a perfectly structured spreadsheet with Date, Description, Debit, Credit, Balance, Category, and GST columns. Ready for Tally Prime import or manual audit.',
                icon: Download,
              },
            ].map((step, i) => (
              <div key={i} className="brutal-card p-8 bg-background hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-black text-shadow-color/20">{step.num}</span>
                  <div className="p-3 bg-card border-2 border-shadow-color brutal-shadow">
                    <step.icon className="w-8 h-8 text-secondary" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 text-shadow-color">{step.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY PARSIFY FOR Kotak ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6 leading-tight">
                Why CAs Choose Parsify for <span className="bg-secondary text-white px-2 border-2 border-shadow-color inline-block rotate-1 mt-2 lg:mt-0">Kotak Statements</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium mb-10">
                Kotak Bank statements are notoriously difficult to parse — merged header rows, inconsistent date formats, multi-page transaction tables that break mid-row. Parsify&apos;s AI engine was built to handle exactly these edge cases.
              </p>
              <ul className="space-y-4">
                {[
                  'Auto-detects all Kotak statement formats (savings, current, CC)',
                  'Handles Kotak password protection (Customer ID based)',
                  'Resolves merged cells and split transaction rows',
                  'Extracts clean party names from Kotak\'s verbose descriptions',
                  'Maps voucher types for direct Tally import',
                  'Auto-tags GST/IGST/CGST/SGST from transaction narrations',
                  '99.3% accuracy across all Kotak statement variants',
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-shadow-color">
                    <Check className="w-6 h-6 text-secondary shrink-0" strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="brutal-card p-8 bg-card relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-10 h-10 text-success" strokeWidth={2.5} />
                  <h3 className="text-2xl font-black uppercase text-shadow-color">Zero Data Retention</h3>
                </div>
                <p className="text-muted-foreground font-medium mb-6">
                  Your Kotak bank statement is processed in-memory and permanently deleted the moment your conversion is complete. We never store your financial data — ever.
                </p>
                <div className="inline-flex items-center gap-2 bg-success/10 text-success border-2 border-success px-4 py-2 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={3} /> Bank-Grade Privacy
                </div>
              </div>
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 border-2 border-shadow-color z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Kotak FAQ ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              Kotak Statement <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">FAQ</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How to convert Kotak bank statement PDF to Excel?",
                a: "Go to Parsify.in and upload your Kotak statement PDF. The AI engine auto-detects the Kotak format, parses all transactions (including merged cells and multi-page tables), and delivers a clean Excel file in under 5 seconds. Works with statements from NetBanking, mobile app, and branch-issued copies."
              },
              {
                q: "Does Parsify support password-protected Kotak statements?",
                a: "Yes! Kotak typically protects statements with your Customer ID or date of birth. Simply upload the PDF, enter the password when prompted, and Parsify will decrypt and parse it accurately. The password is used in-browser only and never stored."
              },
              {
                q: "Which Kotak account types are supported?",
                a: "Parsify supports all Kotak account types: Savings Account, Current Account, Credit Card statements, Fixed Deposit statements, Demat/Trading account statements, and NRE/NRO account statements. All formats are auto-detected."
              },
              {
                q: "Can I import Kotak Excel output into Tally?",
                a: "Yes! Parsify auto-maps Kotak transactions to Tally voucher types (Receipt, Payment, Contra), extracts clean party names from Kotak's narration text, and formats dates uniformly — making the output directly importable into Tally Prime and Tally ERP 9."
              },
              {
                q: "Is the Kotak statement converter free?",
                a: "You can convert 1 Kotak statement daily completely free — no signup needed. Create a free account for 50 pages per month. Paid plans for CA firms start at ₹999/month for 40 statements."
              }
            ].map((faq, i) => (
              <div key={i} className="brutal-card p-6 bg-background">
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
      </section>

      {/* ══ OTHER BANKS CTA ══ */}
      <section className="py-16 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-shadow-color font-sans mb-8 text-center">
            Also supports <span className="text-primary">200+ other banks</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'SBI', href: '/sbi-bank-statement-converter' },
              { name: 'ICICI', href: '/icici-bank-statement-converter' },
              { name: 'Axis', href: '/axis-bank-statement-converter' },
              { name: 'Kotak', href: '/kotak-bank-statement-converter' },
              { name: 'PNB', href: '/pnb-bank-statement-converter' },
              { name: 'Bank of Baroda', href: '/bank-of-baroda-statement-converter' },
              { name: 'IndusInd', href: '/indusind-bank-statement-converter' },
              { name: 'Yes Bank', href: '/yes-bank-statement-converter' },
              { name: 'Canara Bank', href: '/canara-bank-statement-converter' },
            ].map((bank) => (
              <Link key={bank.name} href={bank.href} className="border-2 border-shadow-color bg-card px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors brutal-shadow">
                {bank.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 bg-primary text-primary-foreground border-b-2 border-shadow-color relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-8 leading-tight">
            Convert your Kotak <span className="text-secondary bg-white px-2 border-4 border-shadow-color inline-block rotate-2 brutal-shadow mt-2 md:mt-0">statement now</span>
          </h2>
          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto">
            Join 2,400+ CA firms using Parsify to automate Kotak bank statement reconciliation.
          </p>
          <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary bg-secondary text-white border-shadow-color shadow-[6px_6px_0px_0px_#1a1c1d] hover:shadow-[2px_2px_0px_0px_#1a1c1d] hover:translate-x-1 hover:translate-y-1 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 uppercase tracking-widest w-full sm:w-auto text-center block sm:inline-block">
            Start Converting Free
          </a>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </section>

    </main>
  );
}
