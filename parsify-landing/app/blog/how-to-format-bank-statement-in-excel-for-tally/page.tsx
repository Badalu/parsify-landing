import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Format Bank Statement in Excel for Tally | Parsify',
  description: 'Learn the exact Excel column formats and templates required to successfully import a bank statement into Tally Prime without errors.',
};

export default function BlogPost5() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Format Bank Statement in Excel for Tally",
    "description": "Learn the exact Excel column formats and templates required to successfully import your bank statement data into Tally without errors.",
    "author": { "@type": "Organization", "name": "Parsify" },
    "publisher": { "@type": "Organization", "name": "Parsify" }
  };

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="brutal-card p-8 md:p-12 bg-card relative">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
            Excel Formatting
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-10 text-shadow-color uppercase font-sans">
            How to Format <span className="text-secondary">Bank Statement in Excel</span> for Tally
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-6">
            <p>
              Importing an Excel bank statement into Tally Prime can save you hours, but only if the Excel file is formatted correctly. If your columns are misaligned or date formats are incorrect, Tally will throw errors or skip transactions. Here is the exact format Tally expects.
            </p>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">The Required Columns</h2>
            <p>
              Tally's default bank statement import utility maps to specific data points. Ensure your Excel sheet (`.xlsx`) has clear headers in the first row. The essential columns are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Date:</strong> The transaction date.</li>
              <li><strong>Particulars / Description / Narration:</strong> The details of the transaction.</li>
              <li><strong>Instrument Number:</strong> (Optional) Cheque or reference number.</li>
              <li><strong>Withdrawal (Debit):</strong> Amount deducted from your account.</li>
              <li><strong>Deposit (Credit):</strong> Amount added to your account.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Critical Formatting Rules</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Date Format:</strong> Tally is strict about dates. Ensure the Date column is formatted uniformly (e.g., `DD-MM-YYYY`). Avoid mixing formats like `12-Oct-2023` and `10/12/23` in the same sheet.</li>
              <li><strong>Clean Amounts:</strong> Debit and Credit columns must contain pure numbers. Remove currency symbols (₹, $, etc.) and commas if they are stored as text. Blank cells in the Debit/Credit columns should ideally be `0` or left entirely empty (not spaces).</li>
              <li><strong>No Merged Cells:</strong> Tally cannot parse merged rows or columns. Every transaction must be on a single, flat row.</li>
              <li><strong>Remove Passwords:</strong> The Excel file cannot be password protected.</li>
            </ol>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">The Automated Approach</h2>
            <p>
              Formatting downloaded CSVs or manually converted PDFs to meet these strict rules takes time. By using <strong>Parsify</strong> to convert your PDF bank statements, the resulting Excel file is automatically cleaned, unmerged, and formatted precisely to be Tally-ready.
            </p>
            <p>
              Once formatted, simply go to Tally Prime &gt; Banking &gt; Bank Reconciliation &gt; Import, and map your pristine columns for a flawless import.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
