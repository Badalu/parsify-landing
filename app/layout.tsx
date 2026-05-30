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
    icon: "/favicon.ico",
  },
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
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4ZTPN4PH1M');
              gtag('config', 'AW-18169246685');
            `,
          }}
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
