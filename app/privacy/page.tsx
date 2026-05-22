import React from "react";

export const metadata = {
  title: "Privacy Policy — StatementConvert",
  description: "Read our privacy policy to understand how we protect your bank statements and process financial data securely.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 font-sans">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-neutral dark:prose-invert leading-relaxed text-muted-foreground prose-headings:font-serif">
        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">Privacy Policy</h1>
        <p className="text-sm">Last updated: May 22, 2026</p>
        
        <p className="mt-6">
          At Parsify (StatementConvert), we understand that your financial statements contain highly sensitive personal and business information. We are committed to maintaining the highest standards of data security and privacy.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold">1. Data Minimization & Auto-Deletion</h2>
        <p>
          We employ a strict data minimization policy. When you upload a bank statement PDF for conversion:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>The PDF is processed in temporary workspace buffers on our secure servers.</li>
          <li>All uploaded files are automatically and permanently deleted from our server filesystems within 24 hours of upload.</li>
          <li>We do not build databases of your transactions for secondary analysis or marketing. The converted spreadsheets are strictly accessible only via your secure dashboard history.</li>
        </ul>

        <h2 className="text-foreground mt-8 text-2xl font-semibold">2. Encryption</h2>
        <p>
          All data is protected by bank-level encryption standards:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>In Transit:</strong> Data is encrypted using Transport Layer Security (TLS 1.3) during transfer between your browser and our backend APIs.</li>
          <li><strong>At Rest:</strong> Any data written to database records (e.g. conversions logs, credit statements) is encrypted using AES-256 standard encryption keys.</li>
        </ul>

        <h2 className="text-foreground mt-8 text-2xl font-semibold">3. Third-Party Disclosures</h2>
        <p>
          We do not sell, rent, trade, or distribute your transactional records to any third-party marketing networks, insurance brokers, or financial credit systems. Processing is strictly confined to parsing statements using official secure cloud APIs (such as Google Gemini) under strict data-protection agreements.
        </p>
      </article>
    </div>
  );
}
