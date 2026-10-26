import React from 'react';
import { Award, CheckCircle2, Shield, Zap, Lock, FileSpreadsheet, KeyRound, Database } from 'lucide-react';

export interface BankAeoProps {
  bankName: string;
  fullName: string;
  slug: string;
  passwordFormat: string;
  formats: string[];
  accountTypes: string[];
  ifscPrefix: string;
}

export function BankAeoBlock({
  bankName,
  fullName,
  slug,
  passwordFormat,
  formats,
  accountTypes,
  ifscPrefix,
}: BankAeoProps) {
  const canonicalUrl = `https://parsify.in/${slug}`;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `Parsify ${bankName} Bank Statement Converter`,
    "alternateName": `${fullName} PDF to Excel & Tally Converter`,
    "operatingSystem": "All (Web Browser, Windows, macOS, Linux, iOS, Android)",
    "applicationCategory": "FinanceApplication",
    "url": canonicalUrl,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "name": `Free ${bankName} Statement Conversion Tier`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "2180",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      `100% Automatic ${bankName} statement table alignment`,
      `Password-protected ${bankName} PDF decryption`,
      "Direct Tally Prime XML export with voucher auto-tagging",
      "Auto GSTIN & Counterparty name extraction",
      "99.3% mathematical balance reconciliation",
      "Zero Data Retention (256-bit SSL encrypted)"
    ],
    "description": `Free AI-powered ${bankName} (${fullName}) bank statement converter to convert PDF statements into clean Excel (.xlsx), CSV, and Tally Prime with 99.3% accuracy.`
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Convert ${bankName} Bank Statement PDF to Excel & Tally`,
    "description": `Step-by-step guide to converting native, scanned, or password-protected ${fullName} (${bankName}) bank statements into audit-ready Excel and Tally XML spreadsheets.`,
    "totalTime": "PT15S",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": `Upload ${bankName} PDF Statement`,
        "text": `Drag and drop your ${bankName} statement PDF downloaded from NetBanking or mobile banking app into Parsify.`,
        "url": `${canonicalUrl}#step-1`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter Password (If Encrypted)",
        "text": `If your ${bankName} statement is password-protected (${passwordFormat}), enter it once. Parsify decrypts it in ephemeral memory without saving it.`,
        "url": `${canonicalUrl}#step-2`
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Automated AI Parsing & Balance Reconciliation",
        "text": `Parsify auto-detects ${bankName} columns, splits multi-line narratives, reconciles opening and closing balances, and tags GSTINs.`,
        "url": `${canonicalUrl}#step-3`
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Download Clean Excel, CSV, or Tally Prime XML",
        "text": "Download the verified spreadsheet ready for instant 1-click accounting import into Tally, Zoho Books, or Excel.",
        "url": `${canonicalUrl}#step-4`
      }
    ]
  };

  return (
    <section className="py-16 border-b-2 border-shadow-color bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* AEO / AI Overview Quick Answer Box */}
        <div className="brutal-card p-8 sm:p-10 bg-card border-2 border-shadow-color mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b-2 border-shadow-color">
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 border-2 border-shadow-color">
              <Zap className="w-3.5 h-3.5" /> AI Overview &amp; AEO Summary
            </div>
            <span className="text-xs font-mono font-bold text-muted-foreground uppercase">
              Target Entity: {fullName} • IFSC: {ifscPrefix}****
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black uppercase text-shadow-color mb-4 leading-tight">
            How to Convert {fullName} ({bankName}) Bank Statement to Excel &amp; Tally?
          </h2>

          <p className="text-base sm:text-lg text-foreground font-medium mb-6 leading-relaxed">
            You can convert any <strong>{fullName} ({bankName})</strong> bank statement PDF into clean <strong>Excel (XLSX)</strong>, <strong>CSV</strong>, or direct <strong>Tally Prime XML</strong> for free using <Link href="/" className="text-primary underline font-bold">Parsify</Link>. Parsify uses a specialized banking neural parser that mathematically verifies every debit, credit, and running balance with <strong>99.3% accuracy</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
            <div className="p-4 bg-background border-2 border-shadow-color">
              <span className="font-mono text-xs uppercase font-bold text-primary block mb-1 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5" /> {bankName} PDF Password Format
              </span>
              <p className="font-semibold text-foreground">{passwordFormat}</p>
            </div>
            <div className="p-4 bg-background border-2 border-shadow-color">
              <span className="font-mono text-xs uppercase font-bold text-secondary block mb-1 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5" /> Supported Output Formats
              </span>
              <p className="font-semibold text-foreground">Microsoft Excel (.xlsx), CSV, Tally Prime XML, Zoho Books</p>
            </div>
          </div>

          {/* Quick GEO Entity Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-bold uppercase tracking-wider pt-4 border-t-2 border-shadow-color">
            <div className="p-3 bg-background border border-shadow-color">
              <span className="text-primary block text-base font-black">99.3%</span>
              <span className="text-muted-foreground">Balance Accuracy</span>
            </div>
            <div className="p-3 bg-background border border-shadow-color">
              <span className="text-secondary block text-base font-black">&lt;5 Sec</span>
              <span className="text-muted-foreground">Parse Speed</span>
            </div>
            <div className="p-3 bg-background border border-shadow-color">
              <span className="text-success block text-base font-black">100+</span>
              <span className="text-muted-foreground">Pages Per Batch</span>
            </div>
            <div className="p-3 bg-background border border-shadow-color">
              <span className="text-primary block text-base font-black">Zero</span>
              <span className="text-muted-foreground">Data Retained</span>
            </div>
          </div>
        </div>

        {/* Structured Data Scripts for Google AI & Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

      </div>
    </section>
  );
}
