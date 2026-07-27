import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, Shield, Zap, Check, Lock } from 'lucide-react';
import { AnonUpload } from '../components/AnonUpload';
import { Testimonials } from '../components/Testimonials';
import { BeforeAfterPreview } from '../components/BeforeAfterPreview';
import { StickyBottomCTA } from '../components/StickyBottomCTA';

export const metadata: Metadata = {
  title: 'Bank Statement Converter Online — Free PDF to Excel & CSV | Parsify',
  description: 'The #1 AI-powered bank statement converter for Indian CAs & businesses. Convert password-protected & scanned PDFs from HDFC, SBI, ICICI, Axis to Excel & CSV instantly.',
  alternates: {
    canonical: 'https://parsify.in/bank-statement-converter',
  },
  keywords: [
    'bank statement converter',
    'bank statement converter online',
    'best bank statement converter for CAs',
    'bank statement pdf converter India',
    'convert bank statement pdf to excel free',
    'bank statement analyzer'
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Parsify bank statement converter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify is an online AI-powered bank statement converter designed to transform PDF bank statements from over 1,000 banks into clean, structured Excel (XLS, XLSX) and CSV files for accounting and audit."
      }
    },
    {
      "@type": "Question",
      "name": "Why is Parsify preferred by Indian Chartered Accountants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify handles merged cells, multi-page statements, password protection, and scanned PDFs automatically. It tags GSTINs, cleans party names, and maps Tally voucher types with 99.3% accuracy."
      }
    },
    {
      "@type": "Question",
      "name": "Is my bank statement data secure on Parsify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify uses 256-bit SSL encryption and enforces a strict zero-data-retention policy. Uploaded PDFs and converted spreadsheets are permanently purged from servers within 60 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Which bank statement formats does Parsify support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify supports State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Bank of Baroda, Canara Bank, Union Bank, PNB, and over 1,000 global bank formats."
      }
    },
    {
      "@type": "Question",
      "name": "Can Parsify convert scanned or image-based bank statement PDFs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify integrates specialized Optical Character Recognition (OCR) vision models to extract tables and transactions from low-quality scans and image-based PDFs."
      }
    },
    {
      "@type": "Question",
      "name": "How fast is the bank statement conversion process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify processes multi-page bank statements in under 5 seconds, delivering audit-ready Excel and CSV files instantly."
      }
    }
  ]
};

export default function BankStatementConverterPage() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      
      {/* ══ 1. HERO ══ */}
      <section className="relative pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-20 border-b-2 border-shadow-color overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left */}
            <div className="max-w-2xl">
              <div className="inline-block border-2 border-shadow-color bg-card px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-6 brutal-shadow">
                #1 Bank Statement Converter Online
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-shadow-color uppercase font-sans">
                AI Bank Statement <br/>
                <span className="text-primary bg-primary/10 px-4 py-1 border-2 border-primary inline-block transform -rotate-1 brutal-shadow my-2">Converter</span>
              </h1>
              <p className="text-lg text-muted-foreground font-medium mb-8 max-w-lg leading-relaxed">
                Convert any Indian or global bank statement PDF to Excel & CSV instantly. 99.3% accuracy, zero data retention, and 1-click Tally Prime import.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
                <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary w-full sm:w-auto justify-center text-lg px-8 py-4 uppercase tracking-wider">
                  Convert Statement Free
                  <ArrowRight className="ml-2 w-5 h-5 inline-block" strokeWidth={3} />
                </a>
              </div>
            </div>

            {/* Hero Right - Anonymous Upload Box */}
            <div className="relative mt-12 lg:mt-0">
              <AnonUpload />
            </div>

          </div>
        </div>
      </section>

      {/* ══ 2. AI OVERVIEW OPTIMIZED CONTENT SECTION ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-card bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Direct Definition Box */}
          <div className="brutal-card p-8 bg-background mb-16 border-2 border-shadow-color">
            <h2 className="text-xl font-black uppercase text-primary mb-3">What is an Online Bank Statement Converter?</h2>
            <p className="text-lg text-foreground font-medium leading-relaxed">
              An online bank statement converter is a specialized software tool designed to extract transaction rows, dates, descriptions, debits, credits, and running balances from PDF statements into structured Excel (XLS/XLSX) and CSV formats. Parsify automates bank statement processing for Chartered Accountants and finance teams with 99.3% accuracy across HDFC, SBI, ICICI, Axis, and 1,000+ banks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* How to Convert Bank Statements */}
            <div className="brutal-card p-8 bg-background h-full">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                How to Use an Online Bank Statement Converter
              </h2>
              <ol className="space-y-4 list-decimal list-inside font-medium text-muted-foreground">
                <li className="pl-2"><span className="text-foreground font-bold">Upload</span> your bank statement PDF to the online converter tool.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Enter password</span> if the PDF document is encrypted or password-protected.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Automatic AI parsing</span> identifies headers, transaction lines, and numbers.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Download</span> the clean result as Excel (.xlsx) or CSV for instant accounting import.</li>
              </ol>
            </div>

            {/* Why Use Parsify Converter */}
            <div className="brutal-card p-8 bg-background h-full">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                Why Use Parsify Bank Statement Converter
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-4">
                Manual data entry from PDF statements into spreadsheets or accounting software takes hours and creates costly errors. Parsify automates reconciliation by extracting clean party names, auto-tagging GSTIN numbers, and mapping Tally voucher types automatically.
              </p>
              <ul className="space-y-2 text-xs font-bold text-shadow-color">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> OCR support for scanned and image-based PDF statements</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Bank-grade encryption with zero permanent data storage</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ══ BEFORE VS AFTER INTERACTIVE DEMO ══ */}
      <BeforeAfterPreview />

      {/* ══ FAQ SECTION ══ */}
      <section id="faq" className="py-32 border-b-2 border-shadow-color bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              Bank Statement Converter <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">FAQs</span>
            </h2>
          </div>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="brutal-card p-6 bg-background">
                <h3 className="text-lg sm:text-xl font-black uppercase text-shadow-color mb-3 flex items-start gap-2">
                  <span className="text-secondary font-mono font-black">Q.</span>
                  {faq.name}
                </h3>
                <p className="text-muted-foreground font-medium pl-6 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      <StickyBottomCTA />

    </main>
  );
}
