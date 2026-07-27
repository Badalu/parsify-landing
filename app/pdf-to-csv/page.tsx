import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, Shield, Zap, Check, Lock } from 'lucide-react';
import { AnonUpload } from '../components/AnonUpload';
import { Testimonials } from '../components/Testimonials';
import { BeforeAfterPreview } from '../components/BeforeAfterPreview';
import { StickyBottomCTA } from '../components/StickyBottomCTA';

export const metadata: Metadata = {
  title: 'PDF to CSV Bank Statement Converter — Online & Free | Parsify',
  description: 'Convert bank statement PDF to CSV online instantly. Extract raw transaction data for database imports, Tally, Zoho Books, and custom scripts. 99.3% accuracy.',
  alternates: {
    canonical: 'https://parsify.in/pdf-to-csv',
  },
  keywords: [
    'pdf to csv',
    'bank statement to csv',
    'convert bank statement to csv',
    'pdf to csv converter online',
    'bank statement csv export',
    'hdfc bank statement csv'
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a bank statement PDF to CSV online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drag and drop your bank statement PDF into Parsify.in. The AI parser extracts transaction rows, dates, and amounts into a lightweight, plain-text CSV file ready to download."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose CSV over Excel for bank statement conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CSV (Comma-Separated Values) files are unformatted plain-text files ideal for bulk database imports, automated processing scripts, and importing bank feeds into accounting platforms like Zoho Books and Tally."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert password-protected bank statement PDFs to CSV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify decrypts password-protected PDF bank statements. Enter the file password when prompted, and download your extracted CSV file immediately."
      }
    },
    {
      "@type": "Question",
      "name": "Does the CSV file include GSTIN and cleaned party names?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify automatically strips bank noise and UTR numbers, extracting clean party names and GSTIN numbers as dedicated CSV columns."
      }
    },
    {
      "@type": "Question",
      "name": "Which banks are supported for PDF to CSV conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify supports State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Bank of Baroda, and over 200 Indian and global banking formats."
      }
    },
    {
      "@type": "Question",
      "name": "Can I batch convert multiple bank statement PDFs to CSV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify supports bulk PDF conversion, allowing you to process multiple bank statement PDFs simultaneously into individual or merged CSV files."
      }
    }
  ]
};

export default function PdfToCsvPage() {
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
                PDF to CSV Converter
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-shadow-color uppercase font-sans">
                Convert Bank Statement <br/>
                <span className="text-secondary bg-secondary/10 px-4 py-1 border-2 border-secondary inline-block transform rotate-1 brutal-shadow my-2">PDF to CSV</span>
              </h1>
              <p className="text-lg text-muted-foreground font-medium mb-8 max-w-lg leading-relaxed">
                Transform complex PDF bank statements into lightweight, unformatted CSV text files in seconds. Ideal for bulk database uploads, Tally, and custom financial scripts.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
                <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary bg-secondary text-white border-shadow-color w-full sm:w-auto justify-center text-lg px-8 py-4 uppercase tracking-wider">
                  Convert to CSV Free
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
            <h2 className="text-xl font-black uppercase text-secondary mb-3">What is a PDF to CSV Bank Statement Converter?</h2>
            <p className="text-lg text-foreground font-medium leading-relaxed">
              A PDF to CSV bank statement converter is a software utility that extracts tabular financial data from uneditable PDF bank statements into plain-text Comma-Separated Values (CSV). Parsify converts PDF statements from SBI, HDFC, ICICI, Axis, and 200+ banks into clean CSV files formatted for Tally, Zoho Books, and database imports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* How to Convert PDF to CSV */}
            <div className="brutal-card p-8 bg-background h-full">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                How to Convert Bank Statement PDF to CSV
              </h2>
              <ol className="space-y-4 list-decimal list-inside font-medium text-muted-foreground">
                <li className="pl-2"><span className="text-foreground font-bold">Select</span> and upload your bank statement PDF file to Parsify.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Enter</span> the PDF password if your statement is encrypted.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Automated parsing</span> extracts transaction dates, descriptions, and balances.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Download</span> your standardized CSV file instantly for database or accounting import.</li>
              </ol>
            </div>

            {/* Why Choose CSV Format */}
            <div className="brutal-card p-8 bg-background h-full">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                Why Choose CSV Export for Financial Data
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-4">
                CSV is a lightweight, universal plain-text file format supported by every database system, programming language, and accounting software package. Converting bank statements to CSV eliminates proprietary spreadsheet formatting overhead, making it perfect for automated workflows and bulk data processing.
              </p>
              <ul className="space-y-2 text-xs font-bold text-shadow-color">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Lightweight plain text with zero formatting bloat</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Direct import for Zoho Books, Tally, SQL, & Python</li>
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
              PDF to CSV <span className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block mt-2 sm:mt-0">FAQs</span>
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
