import React from "react";

export const metadata = {
  title: "Privacy Policy — StatementConvert",
  description: "Read our privacy policy to understand how we protect your bank statements and process financial data securely.",
};

export default function PrivacyPage() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      
      <div className="min-h-screen py-24" style={{ background: "#0E0C09", color: "#F0E8D8", fontFamily: "'DM Sans', sans-serif" }}>
        <article className="mx-auto max-w-3xl px-6 leading-relaxed" style={{ color: "#C8B99A" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E8913A", border: "1px solid rgba(200,185,154,0.18)", padding: "4px 10px", borderRadius: "2px" }}>LEGAL</span>
          <h1 className="mt-6 mb-4" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "#F0E8D8", letterSpacing: "-0.02em" }}>Privacy Policy</h1>
          <p className="text-xs font-mono" style={{ color: "#7A6E5F" }}>Last updated: May 22, 2026</p>
          
          <div style={{ height: "1px", background: "rgba(200,185,154,0.08)", margin: "32px 0" }} />

          <p style={{ fontSize: "15px", lineHeight: "1.75", marginBottom: "24px" }}>
            At Parsify (StatementConvert), we understand that your financial statements contain highly sensitive personal and business information. We are committed to maintaining the highest standards of data security and privacy.
          </p>

          <h2 className="mt-12 mb-4" style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", fontWeight: 300, color: "#F0E8D8", letterSpacing: "-0.01em" }}>1. Data Minimization & Auto-Deletion</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
            We employ a strict data minimization policy. When you upload a bank statement PDF for conversion:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", fontSize: "14px" }}>
            <li>The PDF is processed in temporary workspace buffers on our secure servers.</li>
            <li>All uploaded files are automatically and permanently deleted from our server filesystems within 24 hours of upload.</li>
            <li>We do not build databases of your transactions for secondary analysis or marketing. The converted spreadsheets are strictly accessible only via your secure dashboard history.</li>
          </ul>

          <h2 className="mt-12 mb-4" style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", fontWeight: 300, color: "#F0E8D8", letterSpacing: "-0.01em" }}>2. Encryption</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
            All data is protected by bank-level encryption standards:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", fontSize: "14px" }}>
            <li><strong>In Transit:</strong> Data is encrypted using Transport Layer Security (TLS 1.3) during transfer between your browser and our backend APIs.</li>
            <li><strong>At Rest:</strong> Any data written to database records (e.g. conversions logs, credit statements) is encrypted using AES-256 standard encryption keys.</li>
          </ul>

          <h2 className="mt-12 mb-4" style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", fontWeight: 300, color: "#F0E8D8", letterSpacing: "-0.01em" }}>3. Third-Party Disclosures</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>
            We do not sell, rent, trade, or distribute your transactional records to any third-party marketing networks, insurance brokers, or financial credit systems. Processing is strictly confined to parsing statements using official secure cloud APIs (such as Google Gemini) under strict data-protection agreements.
          </p>

          <div style={{ height: "1px", background: "rgba(200,185,154,0.08)", margin: "48px 0" }} />

          <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "#7A6E5F" }}>
            <a href="/terms" style={{ color: "#7A6E5F", textDecoration: "none" }}>Terms of Service</a>
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
