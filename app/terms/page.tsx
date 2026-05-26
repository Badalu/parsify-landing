import React from "react";

export const metadata = {
  title: "Terms & Conditions — StatementConvert",
  description: "Read our terms of service and conditions for utilizing our automated PDF to Excel statement conversion SaaS.",
};

export default function TermsPage() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <div className="min-h-screen py-24" style={{ background: "#0E0C09", color: "#F0E8D8", fontFamily: "'DM Sans', sans-serif" }}>
        <article className="mx-auto max-w-3xl px-6 leading-relaxed" style={{ color: "#C8B99A" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E8913A", border: "1px solid rgba(200,185,154,0.18)", padding: "4px 10px", borderRadius: "2px" }}>LEGAL</span>
          <h1 className="mt-6 mb-4" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "#F0E8D8", letterSpacing: "-0.02em" }}>Terms &amp; Conditions</h1>
          <p className="text-xs font-mono" style={{ color: "#7A6E5F" }}>Last updated: May 22, 2026</p>

          <div style={{ height: "1px", background: "rgba(200,185,154,0.08)", margin: "32px 0" }} />

          <p style={{ fontSize: "15px", lineHeight: "1.75", marginBottom: "24px" }}>
            Welcome to Parsify. By accessing or using our website, services, and backend conversion APIs, you agree to comply with and be bound by the following Terms & Conditions.
          </p>

          <h2 className="mt-12 mb-4" style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", fontWeight: 300, color: "#F0E8D8", letterSpacing: "-0.01em" }}>1. Account Terms &amp; Billing</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
            You must provide accurate, complete registrations when signing up for an account.
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", fontSize: "14px" }}>
            <li><strong>Credit Expiry:</strong> Any standalone pay-per-use credits purchased do not expire. They remain in your account history until consumed.</li>
            <li><strong>SaaS Subscriptions:</strong> Standard monthly/yearly subscriptions provide credit quotas that reset at the end of each billing cycle. Unused subscription-tier credits do not roll over to subsequent months.</li>
            <li><strong>Refunds:</strong> We provide a 14-day money-back guarantee for subscriptions if you have processed fewer than 10 pages and are unsatisfied with the conversion quality.</li>
          </ul>

          <h2 className="mt-12 mb-4" style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", fontWeight: 300, color: "#F0E8D8", letterSpacing: "-0.01em" }}>2. Permitted Use</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
            You represent that you have the legal right, ownership, or explicit permission to parse and convert the bank statements uploaded to our servers. You may not utilize our platform or REST APIs to process stolen documents, engage in automated scraping of third-party portals, or run malicious payload stress tests.
          </p>

          <h2 className="mt-12 mb-4" style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", fontWeight: 300, color: "#F0E8D8", letterSpacing: "-0.01em" }}>3. Limitation of Liability</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
            Parsify utilizes layout-aware algorithms and language learning models to structure bank records. While we strive for near-100% precision, you are responsible for auditing the resulting spreadsheets before submitting them to official tax registers, corporate databases, or regulatory bodies. Parsify is not liable for errors in tax filings or corporate ledger entries.
          </p>

          <div style={{ height: "1px", background: "rgba(200,185,154,0.08)", margin: "48px 0" }} />

          <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "#7A6E5F" }}>
            <a href="/privacy" style={{ color: "#7A6E5F", textDecoration: "none" }}>Privacy Policy</a>
            <span>·</span>
            <a href="/refund" style={{ color: "#7A6E5F", textDecoration: "none" }}>Refund Policy</a>
            <span>·</span>
            <a href="/" style={{ color: "#E8913A", textDecoration: "none" }}>← Back to Home</a>
          </div>
        </article>
      </div>
    </>
  );
}
