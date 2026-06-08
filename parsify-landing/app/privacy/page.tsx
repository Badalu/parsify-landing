import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — StatementConvert",
  description: "Read our privacy policy to understand how we protect your bank statements and process financial data securely.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-24 font-sans bg-grid-pattern">
      <article className="mx-auto max-w-4xl px-6">
        <div className="brutal-card p-12 bg-card mb-12">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-6 brutal-shadow">
            LEGAL
          </div>
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-shadow-color mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Last updated: May 22, 2026
          </p>
        </div>

        <div className="brutal-card p-12 bg-background text-muted-foreground font-medium leading-relaxed space-y-10">
          <p className="text-xl text-shadow-color font-bold">
            At Parsify (StatementConvert), we understand that your financial statements contain highly sensitive personal and business information. We are committed to maintaining the highest standards of data security and privacy.
          </p>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-shadow-color mb-6 pb-2 border-b-2 border-shadow-color/20">
              1. Data Minimization & Auto-Deletion
            </h2>
            <p className="mb-4">
              We employ a strict data minimization policy. When you upload a bank statement PDF for conversion:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The PDF is processed in temporary workspace buffers on our secure servers.</li>
              <li>All uploaded files are automatically and permanently deleted from our server filesystems within 24 hours of upload.</li>
              <li>We do not build databases of your transactions for secondary analysis or marketing. The converted spreadsheets are strictly accessible only via your secure dashboard history.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-shadow-color mb-6 pb-2 border-b-2 border-shadow-color/20">
              2. Encryption
            </h2>
            <p className="mb-4">
              All data is protected by bank-level encryption standards:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-shadow-color font-bold">In Transit:</strong> Data is encrypted using Transport Layer Security (TLS 1.3) during transfer between your browser and our backend APIs.</li>
              <li><strong className="text-shadow-color font-bold">At Rest:</strong> Any data written to database records (e.g. conversions logs, credit statements) is encrypted using AES-256 standard encryption keys.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-shadow-color mb-6 pb-2 border-b-2 border-shadow-color/20">
              3. Third-Party Disclosures
            </h2>
            <p>
              We do not sell, rent, trade, or distribute your transactional records to any third-party marketing networks, insurance brokers, or financial credit systems. Processing is strictly confined to parsing statements using official secure cloud APIs (such as Google Gemini) under strict data-protection agreements.
            </p>
          </div>

          <div className="pt-8 mt-12 border-t-2 border-shadow-color/20 flex flex-wrap gap-6 text-sm font-bold uppercase tracking-widest">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/refund" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link>
            <Link href="/" className="text-secondary hover:text-primary transition-colors ml-auto">← Back to Home</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
