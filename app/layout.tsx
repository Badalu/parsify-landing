import "./globals.css";
import Link from "next/link";
import React from "react";
import { ArrowDownUp } from "lucide-react";
import type { Metadata, Viewport } from "next";

// Import the client Navbar we extracted
import { Navbar } from "./components/navbar";

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Parsify",
    default: "Parsify - Best Bank Statement Converter for Indian CAs",
  },
  description: "Convert PDF bank statements to Excel and CSV in seconds using AI. Supports SBI, HDFC, ICICI, and 200+ banks.",
  applicationName: "Parsify",
  authors: [{ name: "Parsify Team" }],
  generator: "Next.js",
  keywords: ["Parsify", "Bank Statement Converter", "PDF to Excel", "India", "CA", "Finance"],
  metadataBase: new URL("https://parsify.in"),
  alternates: {
    canonical: "https://parsify.in",
  },
  openGraph: {
    title: "Parsify - Best Bank Statement Converter for Indian CAs",
    description: "Convert PDF bank statements to Excel and CSV in seconds using AI. Supports SBI, HDFC, ICICI, and 200+ banks.",
    url: "https://parsify.in",
    siteName: "Parsify",
    images: [
      {
        url: "/icon.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parsify - Best Bank Statement Converter for Indian CAs",
    description: "Convert PDF bank statements to Excel and CSV in seconds using AI. Supports SBI, HDFC, ICICI, and 200+ banks.",
    images: ["/icon.svg"],
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
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Parsify",
  "operatingSystem": "All",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "999",
    "priceCurrency": "INR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "18000"
  }
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Bank statement PDF to Excel kaise convert karein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify.in par apna bank statement PDF upload karein, software automatically scan aur parse karke clean Excel (.xlsx) ya CSV format mein download link de dega."
      }
    },
    {
      "@type": "Question",
      "name": "CA ke liye best bank statement converter tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify Indian Chartered Accountants (CAs) ke liye sabse best tool hai kyunki ye SBI, HDFC, ICICI, Axis samet 200+ banks ke statements support karta hai aur bina template config ke double rows/merged cells ko automatically parse karta hai."
      }
    },
    {
      "@type": "Question",
      "name": "Parsify free mein kitne pages process hote hain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsify par free account create karne ke baad aapko 50 pages free monthly milte hain jo har mahine ki 1 tarik ko auto-reset ho jaate hain."
      }
    },
    {
      "@type": "Question",
      "name": "GST statement Excel mein kaise convert karein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aap Parsify.in par apna GST data upload karke, software ki madad se unhe structured, tidy aur reconcile-ready Excel sheets mein instantly convert kar sakte hain."
      }
    },
    {
      "@type": "Question",
      "name": "Indian bank statement analyzer tool kaunsa best hai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indian market ke liye Parsify sabse badhiya bank statement analyzer aur converter tool hai jo CAs aur accounting teams ke reconciliation workflows ko bohot tez karta hai."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Bank Statement PDF to Excel",
  "description": "Learn how to instantly convert PDF bank statements to structured Excel/CSV format on Parsify.",
  "step": [
    {
      "@type": "HowToStep",
      "url": "https://parsify.in#start",
      "name": "Upload PDF",
      "text": "Select your bank statement PDF and upload it on Parsify."
    },
    {
      "@type": "HowToStep",
      "url": "https://parsify.in#start",
      "name": "Wait for AI Parsing",
      "text": "Our layout-aware AI engine parses all the transaction rows in seconds."
    },
    {
      "@type": "HowToStep",
      "url": "https://parsify.in#start",
      "name": "Download Sheet",
      "text": "Get your clean, structured Excel file ready for audit and Tally import."
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
