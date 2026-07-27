import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileSpreadsheet, CheckCircle2, Shield, Zap, Check, Lock } from 'lucide-react';
import { AnonUpload } from '../components/AnonUpload';
import { Testimonials } from '../components/Testimonials';
import { BeforeAfterPreview } from '../components/BeforeAfterPreview';
import { StickyBottomCTA } from '../components/StickyBottomCTA';

export const metadata: Metadata = {
  title: 'PDF to Excel Bank Statement Converter — XLS & XLSX Output | Parsify',
  description: 'Convert bank statement PDF to Excel (XLS & XLSX) instantly. 99.3% accuracy for HDFC, SBI, ICICI, Axis & 200+ banks. Free online converter for CAs and businesses.',
  alternates: {
    canonical: 'https://parsify.in/pdf-to-excel',
  },
  keywords: [
    'pdf to excel',
    'bank statement pdf to excel',
    'pdf to excel converter online',
    'bank statement to excel',
    'hdfc bank statement pdf to excel',
    'sbi bank statement to excel'
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a bank statement PDF to Excel for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your bank statement PDF to Parsify.in. The AI engine automatically parses transaction tables and generates a clean Excel (.xlsx or .xls) file ready to download in under 5 seconds."
      }
    },
    {
      "@type": "Question",
      "name": "Does converting PDF to Excel preserve formulas and table formatting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify extracts transaction data into structured Excel cells with proper date, number, and currency formatting, allowing you to add Excel formulas directly for auditing and reconciliation."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert password-protected bank statement PDFs to Excel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify handles password-protected bank statement PDFs. Enter your PDF password during upload, and the tool decrypts and extracts the data into an Excel spreadsheet."
      }
    },
    {
      "@type": "Question",
      "name": "Is the converted Excel file compatible with Tally Prime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the Excel output from Parsify maps transactions with Tally voucher types (Receipt, Payment, Contra), clean party names, and uniform date formats for direct Tally Prime import."
      }
    },
    {
      "@type": "Question",
      "name": "Which Indian banks are supported for PDF to Excel conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify supports State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra, Bank of Baroda, Punjab National Bank, and over 200 Indian and global banks."
      }
    },
    {
      "@type": "Question",
      "name": "Can Parsify convert scanned bank statement PDFs to Excel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify includes Optical Character Recognition (OCR) to convert scanned, image-based, or low-quality PDF bank statements into editable Excel tables."
      }
    }
  ]
};

export default function PdfToExcelPage() {
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
                PDF to Excel Converter
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-shadow-color uppercase font-sans">
                Convert Bank Statement <br/>
                <span className="text-primary bg-primary/10 px-4 py-1 border-2 border-primary inline-block transform -rotate-1 brutal-shadow my-2">PDF to Excel</span>
              </h1>
              <p className="text-lg text-muted-foreground font-medium mb-8 max-w-lg leading-relaxed">
                Extract bank statement PDF data into clean, formatted Excel (XLS & XLSX) spreadsheets in 5 seconds. Mapped for Tally Prime, audits, and financial analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
                <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary w-full sm:w-auto justify-center text-lg px-8 py-4 uppercase tracking-wider">
                  Convert to Excel Free
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
            <h2 className="text-xl font-black uppercase text-primary mb-3">What is a PDF to Excel Bank Statement Converter?</h2>
            <p className="text-lg text-foreground font-medium leading-relaxed">
              A PDF to Excel bank statement converter is an online tool that converts non-editable bank statement PDF files into structured Microsoft Excel spreadsheets (XLS or XLSX). Parsify automatically parses transaction dates, descriptions, debit, credit, and running balances from over 1,000 Indian bank formats including SBI, HDFC, ICICI, and Axis Bank.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* How to Convert PDF to Excel */}
            <div className="brutal-card p-8 bg-background h-full">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                How to Convert Bank Statement PDF to Excel
              </h2>
              <ol className="space-y-4 list-decimal list-inside font-medium text-muted-foreground">
                <li className="pl-2"><span className="text-foreground font-bold">Upload</span> your bank statement PDF to the Parsify converter interface.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Provide</span> your PDF password if the document is password-protected.</li>
                <li className="pl-2"><span className="text-foreground font-bold">The AI engine</span> parses transaction rows, resolves merged cells, and formats columns.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Download</span> the clean Excel (.xlsx or .xls) file ready for Tally or auditing.</li>
              </ol>
            </div>

            {/* Why Choose Excel Format */}
            <div className="brutal-card p-8 bg-background h-full">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                Why Convert Bank Statements to Excel Format
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-4">
                Excel (XLS and XLSX) is the gold standard format for accounting reconciliation, financial audits, and desktop analysis. Converting bank statement PDFs to Excel preserves grid line structure, allows formula calculations (SUM, VLOOKUP, IF), and enables seamless import into accounting software like Tally Prime and Zoho Books.
              </p>
              <ul className="space-y-2 text-xs font-bold text-shadow-color">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Preserves cell data types (Dates, Numbers, Currency)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Formats columns for direct Tally voucher mapping</li>
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
              PDF to Excel <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">FAQs</span>
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
