import React from "react";
import type { Metadata } from "next";
import { LandingPageClient } from "./components/landing-page";

export const metadata: Metadata = {
  title: "Parsify - Best Bank Statement Converter for Indian CAs & Businesses",
  description: "Easily convert PDF bank statements from 200+ Indian banks (SBI, HDFC, ICICI, etc.) into clean CSV or Excel files. Smart AI auto-tags categories and GST (CGST/SGST/IGST). SOC 2 compliant, no credit expiry.",
  keywords: "bank statement converter, PDF to Excel, PDF to CSV, Indian bank statement parser, SBI statement to Excel, HDFC statement converter, GST tagging, CA tools, auto categorize bank statement",
  openGraph: {
    title: "Parsify - Instant Bank Statement Converter",
    description: "Convert 200+ Indian bank statements to Excel/CSV in seconds with AI-powered category and GST tagging.",
    url: "https://parsify.in",
    siteName: "Parsify",
    images: [
      {
        url: "https://parsify.in/og-image.png", // Replace with your actual OG image URL when ready
        width: 1200,
        height: 630,
        alt: "Parsify Bank Statement Converter",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parsify - Instant Bank Statement Converter",
    description: "Convert 200+ Indian bank statements to Excel/CSV in seconds with AI-powered category and GST tagging.",
    images: ["https://parsify.in/og-image.png"], // Replace with your actual OG image URL when ready
  },
  alternates: {
    canonical: "https://parsify.in",
  },
};

export default function LandingPage() {
  return <LandingPageClient />;
}
