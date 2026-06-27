import React from 'react';
import type { Metadata } from 'next';
import { AuthorBio } from '@/app/components/AuthorBio';

export const metadata: Metadata = {
  title: 'Bank Statement Reconciliation Process in Tally | Parsify',
  description: 'Understand the end-to-end bank statement reconciliation process in Tally Prime and how to automate it for faster month-end closing.',
};

export default function BlogPost3() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bank Statement Reconciliation Process in Tally",
    "description": "Understand the end-to-end bank statement reconciliation process in Tally Prime, and learn how automated parsing tools can save you hours of work.",
    "author": { "@type": "Person", "name": "CA Rahul Sharma" },
    "publisher": { "@type": "Organization", "name": "Parsify" }
  };

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="brutal-card p-8 md:p-12 bg-card relative">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
            Accounting Workflows
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-10 text-shadow-color uppercase font-sans">
            Bank Statement <span className="text-secondary">Reconciliation Process</span> in Tally
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-6">
            <p>
              Bank reconciliation is a critical accounting process that ensures your company's financial records align with the bank's records. In Tally Prime, the Bank Reconciliation Statement (BRS) feature simplifies identifying discrepancies like uncashed checks, bank fees, or missing deposits.
            </p>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">The Standard Reconciliation Workflow</h2>
            <p>
              Traditionally, the process involves comparing your physical or PDF bank statement against your Tally ledger line by line:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Open BRS:</strong> Go to Gateway of Tally &gt; Banking &gt; Bank Reconciliation and select the bank ledger.</li>
              <li><strong>Verify Transactions:</strong> Cross-check each entry in Tally with the bank statement.</li>
              <li><strong>Enter Bank Dates:</strong> For matching transactions, enter the clearing date in the 'Bank Date' column in Tally.</li>
              <li><strong>Identify Discrepancies:</strong> Investigate entries present in the bank statement but missing in Tally (like bank charges or direct deposits) and pass the necessary journal entries.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Automating the Process with Auto Reconciliation</h2>
            <p>
              Tally Prime offers an "Auto Bank Reconciliation" feature that dramatically reduces the time spent on this process.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>First, convert your PDF bank statement into an Excel format using a tool like Parsify.</li>
              <li>Import the Excel file directly into the Bank Reconciliation screen in Tally.</li>
              <li>Tally will automatically match transactions based on amount, date, and instrument number.</li>
              <li>You only need to manually review the "Unreconciled" transactions, which usually account for less than 5% of the total entries.</li>
            </ol>

            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Best Practices</h2>
            <p>
              To maintain healthy financials, perform bank reconciliations at least monthly. With automated tools, many businesses have moved to weekly or even daily reconciliations, ensuring real-time visibility into cash flow.
            </p>
          </div>

          <AuthorBio />
        </div>
      </div>
    </main>
  );
}
