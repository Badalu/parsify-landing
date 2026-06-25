import "./globals.css";
import Link from "next/link";
import React from "react";
import { ArrowDownUp } from "lucide-react";
import type { Metadata, Viewport } from "next";

// Import the client Navbar we extracted
import { Navbar } from "./components/navbar";

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

// ─── Viewport — removed maximum-scale=1 (Google penalizes it for accessibility) ──
export const viewport: Viewport = {
  themeColor: "#5b21b6",
  width: "device-width",
  initialScale: 1,
};

// ─── Full SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    template: "%s | Parsify — Bank Statement PDF to Excel Converter",
    default: "Bank Statement PDF to Excel & CSV Converter — Free for Indian CAs | Parsify",
  },
  description:
    "Convert bank statement PDF to Excel & CSV instantly. India's #1 bank statement converter for CAs — supports HDFC, SBI, ICICI, Axis, Kotak & 200+ banks. Auto GST tagging, Tally-ready output, 99.3% accuracy. 50 pages free monthly.",
  applicationName: "Parsify",
  authors: [{ name: "Parsify", url: "https://parsify.in" }],
  creator: "Parsify",
  publisher: "Parsify",
  generator: "Next.js",
  keywords: [
    "bank statement converter",
    "bank statement pdf to excel",
    "pdf to excel converter",
    "HDFC bank statement to excel",
    "SBI bank statement converter",
    "ICICI bank statement to excel",
    "bank statement to tally",
    "CA bank statement software India",
    "bank statement analyzer",
    "bank reconciliation software",
    "pdf bank statement converter free",
    "bank statement excel converter India",
    "Parsify",
  ],
  metadataBase: new URL("https://parsify.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bank Statement PDF to Excel Converter — Free for Indian CAs | Parsify",
    description:
      "Convert any bank statement PDF to clean Excel/CSV in seconds. Supports HDFC, SBI, ICICI, Axis & 200+ Indian banks. Auto GST tagging, Tally-ready output. Used by 2,400+ CA firms.",
    url: "https://parsify.in",
    siteName: "Parsify",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parsify — Convert Bank Statement PDF to Excel instantly",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank Statement PDF to Excel — Free Converter for Indian CAs | Parsify",
    description:
      "Convert bank statement PDFs to Excel/CSV instantly. Supports HDFC, SBI, ICICI & 200+ banks. Auto GST tagging, Tally import. 99.3% accuracy.",
    images: ["/og-image.png"],
    creator: "@parsabordin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  category: "Finance",
};

// ─── JSON-LD Schemas ─────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Parsify",
  "url": "https://parsify.in",
  "logo": "https://parsify.in/icon.svg",
  "description": "India's #1 bank statement PDF to Excel converter for Chartered Accountants and accounting professionals.",
  "foundingDate": "2024",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "url": "https://parsify.in/contact",
    "availableLanguage": ["English", "Hindi"]
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Parsify — Bank Statement Converter",
  "operatingSystem": "Web (All platforms)",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Accounting Software",
  "description": "Convert PDF bank statements from HDFC, SBI, ICICI, Axis & 200+ Indian banks to Excel/CSV. Auto GST tagging, Tally-ready output, 99.3% accuracy.",
  "url": "https://parsify.in",
  "screenshot": "https://parsify.in/og-image.png",
  "featureList": "PDF to Excel, PDF to CSV, Auto bank detection, GST tagging, Tally voucher mapping, Party name extraction, Category tagging",
  "offers": [
    {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "name": "Free Plan",
      "description": "2 free statement conversions daily"
    },
    {
      "@type": "Offer",
      "price": "999",
      "priceCurrency": "INR",
      "name": "Starter Plan",
      "description": "40 statements per month"
    },
    {
      "@type": "Offer",
      "price": "1999",
      "priceCurrency": "INR",
      "name": "Growth Plan",
      "description": "120 statements per month"
    },
    {
      "@type": "Offer",
      "price": "3400",
      "priceCurrency": "INR",
      "name": "Pro Plan",
      "description": "400 statements per month"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2400",
    "bestRating": "5",
    "worstRating": "1"
  }
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to convert bank statement PDF to Excel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to Parsify.in, upload your bank statement PDF, and the AI engine will automatically parse all transactions and deliver a clean Excel (.xlsx) or CSV file in seconds. No templates needed — supports HDFC, SBI, ICICI, Axis, Kotak and 200+ Indian banks."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best bank statement converter for Indian CAs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify is India's #1 bank statement converter built specifically for Chartered Accountants. It supports 200+ Indian bank formats, handles merged cells and multi-page statements, auto-tags GST, maps Tally voucher types, and delivers 99.3% accuracy. Used by 2,400+ finance teams."
      }
    },
    {
      "@type": "Question",
      "name": "Is Parsify free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You can convert 1 statement per day without signing up. Create a free account to get 50 free pages every month. Paid plans start at ₹999/month for 40 statements."
      }
    },
    {
      "@type": "Question",
      "name": "Does Parsify support HDFC, SBI, and ICICI bank statements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Parsify supports all major Indian banks including HDFC, SBI, ICICI, Axis, Kotak, PNB, Bank of Baroda, IndusInd, Yes Bank, and 200+ more. The AI engine auto-detects the bank format — no manual configuration needed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I import Parsify output directly into Tally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Parsify automatically maps transactions to Tally voucher types (Receipt, Payment, Contra), extracts clean party names, and formats dates uniformly — making the Excel output directly importable into Tally Prime and Tally ERP 9."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the bank statement conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify achieves 99.3% accuracy across all supported banks. The AI engine handles merged cells, split transactions, rotated text, multi-page statements, and even low-quality scanned PDFs with smudged numbers."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Bank Statement PDF to Excel Using Parsify",
  "description": "Step-by-step guide to convert any Indian bank statement PDF to structured Excel/CSV format using Parsify's AI-powered converter.",
  "totalTime": "PT30S",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": "0"
  },
  "tool": {
    "@type": "HowToTool",
    "name": "Parsify Bank Statement Converter"
  },
  "step": [
    {
      "@type": "HowToStep",
      "url": "https://parsify.in/#how",
      "name": "Upload your bank statement PDF",
      "text": "Go to Parsify.in and drag-and-drop your bank statement PDF. Supports HDFC, SBI, ICICI, Axis, Kotak and 200+ Indian banks. Password-protected PDFs are handled automatically.",
      "position": 1
    },
    {
      "@type": "HowToStep",
      "url": "https://parsify.in/#how",
      "name": "AI parses all transactions",
      "text": "Parsify's AI engine reads every row, resolves merged cells, detects the bank format, tags GST, categorizes transactions, and extracts clean party names — all in under 5 seconds.",
      "position": 2
    },
    {
      "@type": "HowToStep",
      "url": "https://parsify.in/#how",
      "name": "Download Excel or CSV",
      "text": "Download your perfectly formatted Excel (.xlsx) or CSV file. The output includes Date, Description, Debit, Credit, Balance, Category, and GST columns — ready for Tally import or audit.",
      "position": 3
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dashboardUrl = DASHBOARD_URL;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18169246685"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4ZTPN4PH1M"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="1f15e138-4d9d-4e8a-8294-498000837a4e";
              (function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4ZTPN4PH1M');
              gtag('config', 'AW-18169246685');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Navbar />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-card py-16 border-t-2 border-shadow-color">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary border-2 border-shadow-color brutal-shadow flex items-center justify-center">
                <span className="text-white font-black leading-none">P</span>
              </div>
              <span className="text-xl font-black uppercase tracking-widest text-shadow-color ml-2 font-serif">Parsify</span>
            </div>
            <div className="flex gap-6">
              {['Terms', 'Privacy', 'Refund', 'Contact'].map(link => (
                <Link key={link} href={`/${link.toLowerCase()}`} className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                  {link}
                </Link>
              ))}
            </div>
            <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              © {new Date().getFullYear()} Parsify Inc.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
