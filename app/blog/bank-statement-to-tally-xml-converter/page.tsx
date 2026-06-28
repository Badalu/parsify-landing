import React from 'react';
import type { Metadata } from 'next';
import { AuthorBio } from '@/app/components/AuthorBio';

export const metadata: Metadata = {
  title: 'How to convert bank statement PDF to Tally XML — step by step [2025]',
  description: 'Learn how to directly convert your PDF bank statements to Tally XML format for instant import. Step-by-step guide for CAs and accountants.',
};

export default function BankToTallyXML() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to convert bank statement PDF to Tally XML — step by step [2025]",
    "description": "Learn how to directly convert your PDF bank statements to Tally XML format for instant import into Tally Prime.",
    "author": { "@type": "Person", "name": "CA Rahul Sharma" },
    "publisher": { "@type": "Organization", "name": "Parsify" }
  };

  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.parsify.in";

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="brutal-card p-5 md:p-12 bg-card relative">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
            CA Toolkit 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-10 text-shadow-color uppercase font-sans">
            How to convert <span className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block transform -rotate-1 mt-2 md:mt-0">bank statement PDF</span> to Tally XML
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-6">
            <p>
              Manual bank reconciliation in Tally is one of the most time-consuming tasks for Chartered Accountants and finance teams. Typing out hundreds of transactions from a PDF statement into Tally Prime is not just tedious, but highly prone to errors.
            </p>
            <p>
              What if you could bypass Excel altogether and convert your bank statement PDF <strong>directly into Tally XML</strong>? With AI-powered tools, you can extract, categorize, and export data in a format Tally natively understands.
            </p>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Try It Now: Direct Demo</h2>
            <p>
              Upload your bank statement below to instantly extract data and export it as Tally XML. No credit card required.
            </p>
            
            {/* Embedded Parsify Demo */}
            <div className="w-full my-8 border-4 border-shadow-color brutal-shadow rounded-sm overflow-hidden bg-background">
              <iframe 
                src={`${DASHBOARD_URL}/dashboard/convert?embed=true`} 
                className="w-full h-[600px] md:h-[700px] border-none"
                title="Parsify Bank Statement Converter Demo"
                allow="clipboard-read; clipboard-write"
              />
            </div>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Step-by-Step Guide</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-2 text-shadow-color">Step 1: Upload your PDF Bank Statement</h3>
            <p>
              Drag and drop your PDF (whether it's a native digital PDF or a scanned document) into the converter tool above. Parsify's OCR and AI engine instantly reads all Indian bank formats (HDFC, SBI, ICICI, etc.) without requiring any manual templates.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-shadow-color">Step 2: Auto-Categorize Ledgers</h3>
            <p>
              Tally requires proper ledger mapping (e.g., categorizing an Indigo Airlines transaction under "Travel"). Instead of doing this manually, Parsify's AI automatically detects GSTINs, cleans up party names, and maps the correct voucher types (Receipt, Payment, Contra).
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-shadow-color">Step 3: Export as Tally XML</h3>
            <p>
              Once your transactions are processed and categorized, click the export button and select <strong>Tally XML</strong>. The system will generate an XML file structured perfectly for Tally ERP 9 or Tally Prime.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2 text-shadow-color">Step 4: Import into Tally</h3>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Open your company in Tally Prime.</li>
              <li>Go to <strong>Import Data</strong> {'>'} <strong>Transactions</strong>.</li>
              <li>Select the XML file you just downloaded.</li>
              <li>Tally will automatically create the vouchers and map them to the correct ledgers!</li>
            </ol>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Why Tally XML is Better than Excel</h2>
            <p>
              While Excel is great for analysis, importing Excel into Tally requires custom macros or third-party utilities. Tally XML is the native language of Tally. By generating XML directly, you skip the middleman, ensuring 100% data integrity and saving hours of mapping time.
            </p>
          </div>

          <AuthorBio />
        </div>
      </div>
    </main>
  );
}
