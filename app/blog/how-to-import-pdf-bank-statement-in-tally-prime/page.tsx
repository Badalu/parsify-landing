import React from 'react';
import type { Metadata } from 'next';
import { AuthorBio } from '@/app/components/AuthorBio';

export const metadata: Metadata = {
  title: 'How to Import PDF Bank Statement in Tally Prime | Parsify',
  description: 'Learn the exact steps to convert and import your PDF bank statements directly into Tally Prime using Parsify for automated bank reconciliation.',
};

export default function BlogPost1() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Import PDF Bank Statement in Tally Prime",
    "description": "Learn the exact steps to convert and import your PDF bank statements directly into Tally Prime using Parsify for automated bank reconciliation.",
    "author": { "@type": "Person", "name": "CA Rahul Sharma" },
    "publisher": { "@type": "Organization", "name": "Parsify" }
  };

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="brutal-card p-8 md:p-12 bg-card relative">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
            Tally Prime Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-10 text-shadow-color uppercase font-sans">
            How to Import <span className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block transform -rotate-1 mt-2 md:mt-0">PDF Bank Statement</span> in Tally Prime
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-6">
            <p>
              Entering bank statement transactions manually into Tally Prime is incredibly time-consuming and error-prone. Thankfully, you don't have to type out every single transaction anymore. By importing a structured Excel or CSV file into Tally Prime, you can automate your Bank Reconciliation Statement (BRS) process in minutes. 
            </p>
            <p>
              Since most Indian banks provide statements in PDF format, the first step is converting your PDF bank statement into a Tally-compatible format. Here's a step-by-step guide on how to do exactly that.
            </p>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Step 1: Convert Your PDF to Excel</h2>
            <p>
              Tally Prime natively accepts Excel (`.xlsx`) or XML files for bank reconciliation, but extracting structured data from a PDF can be messy. Use an intelligent converter like <strong>Parsify</strong> to turn your PDF into clean data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Go to <a href="/" className="text-primary hover:underline font-bold">Parsify Converter</a>.</li>
              <li>Upload your bank statement PDF.</li>
              <li>Let our AI engine parse the transactions—handling merged cells, multi-line descriptions, and passwords automatically.</li>
              <li>Download the resulting `.xlsx` file.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Step 2: Prepare the Excel Sheet for Tally</h2>
            <p>
              Ensure your downloaded Excel file has the necessary columns formatted correctly: <strong>Date, Particulars/Description, Withdrawal (Debit), Deposit (Credit), and Balance.</strong> If you used Parsify, the Excel file is already cleaned up and formatted properly for Tally Prime mapping.
            </p>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Step 3: Import into Tally Prime</h2>
            <p>
              Once your Excel file is ready, follow these steps within Tally Prime to complete the import:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open your company in Tally Prime.</li>
              <li>Navigate to <strong>Gateway of Tally &gt; Banking &gt; Bank Reconciliation</strong>.</li>
              <li>Select your Bank Ledger.</li>
              <li>Click on the <strong>Import</strong> button (or press `Alt + O`) from the top menu, and select <strong>Bank Statement</strong>.</li>
              <li>Browse and select the `.xlsx` file you downloaded.</li>
              <li>Map the columns (Date, Amount, Description) if prompted, and click accept.</li>
            </ol>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Conclusion</h2>
            <p>
              By converting your PDFs to Excel with Parsify, you eliminate manual data entry entirely. Import thousands of transactions into Tally Prime in seconds and keep your books reconciled with zero headache.
            </p>
          </div>

          <AuthorBio />
        </div>
      </div>
    </main>
  );
}
