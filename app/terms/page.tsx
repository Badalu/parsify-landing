import React from "react";

export const metadata = {
  title: "Terms & Conditions — StatementConvert",
  description: "Read our terms of service and conditions for utilizing our automated PDF to Excel statement conversion SaaS.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 font-sans">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-neutral dark:prose-invert leading-relaxed text-muted-foreground prose-headings:font-serif">
        <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">Terms & Conditions</h1>
        <p className="text-sm">Last updated: May 22, 2026</p>

        <p className="mt-6">
          Welcome to Parsify. By accessing or using our website, services, and backend conversion APIs, you agree to comply with and be bound by the following Terms & Conditions.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold">1. Account Terms & Billing</h2>
        <p>
          You must provide accurate, complete registrations when signing up for an account. 
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Credit Expiry:</strong> Any standalone pay-per-use credits purchased do not expire. They remain in your account history until consumed.</li>
          <li><strong>SaaS Subscriptions:</strong> Standard monthly/yearly subscriptions provide credit quotas that reset at the end of each billing cycle. Unused subscription-tier credits do not roll over to subsequent months.</li>
          <li><strong>Refunds:</strong> We provide a 14-day money-back guarantee for subscriptions if you have processed fewer than 10 pages and are unsatisfied with the conversion quality.</li>
        </ul>

        <h2 className="text-foreground mt-8 text-2xl font-semibold">2. Permitted Use</h2>
        <p>
          You represent that you have the legal right, ownership, or explicit permission to parse and convert the bank statements uploaded to our servers. You may not utilize our platform or REST APIs to process stolen documents, engage in automated scraping of third-party portals, or run malicious payload stress tests.
        </p>

        <h2 className="text-foreground mt-8 text-2xl font-semibold">3. Limitation of Liability</h2>
        <p>
          Parsify utilizes layout-aware algorithms and language learning models to structure bank records. While we strive for near-100% precision, you are responsible for auditing the resulting spreadsheets before submitting them to official tax registers, corporate databases, or regulatory bodies. Parsify is not liable for errors in tax filings or corporate ledger entries.
        </p>
      </article>
    </div>
  );
}
