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
        <footer className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
              <div className="col-span-2">
                <Link href="/" className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <ArrowDownUp className="h-4 w-4" />
                  </span>
                  <span className="text-lg font-bold">Parsify</span>
                </Link>
                <p className="mt-4 max-w-xs text-sm text-muted-foreground font-sans">
                  AI-powered bank statement converter built for Indian CAs, freelancers
                  and small businesses.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold">Product</h4>
                <ul className="mt-4 space-y-2.5">
                  <li><a href="/#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                  <li><a href="/#how" className="text-sm text-muted-foreground hover:text-foreground">How it works</a></li>
                  <li><a href={`${dashboardUrl}/dashboard/settings`} className="text-sm text-muted-foreground hover:text-foreground">API</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold">Company</h4>
                <ul className="mt-4 space-y-2.5">
                  <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
                  <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                  <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold">Legal</h4>
                <ul className="mt-4 space-y-2.5">
                  <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms &amp; Conditions</Link></li>
                  <li><Link href="/refund" className="text-sm text-muted-foreground hover:text-foreground">Refund Policy</Link></li>
                  <li><Link href="/privacy#security" className="text-sm text-muted-foreground hover:text-foreground">Security</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold">Support</h4>
                <ul className="mt-4 space-y-2.5">
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link></li>
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                  <li><a href="/#features" className="text-sm text-muted-foreground hover:text-foreground">Banks list</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">
                © 2026 Parsify · Made in India 🇮🇳
              </p>
              <p className="text-xs text-muted-foreground">SOC 2 · GDPR · ISO 27001</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
