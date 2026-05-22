import "./globals.css";
import Link from "next/link";
import React from "react";
import { ArrowDownUp, Menu } from "lucide-react";

export const metadata = {
  title: "Parsify — Best Bank Statement Converter (PDF to Excel)",
  description: "Convert bank statement PDFs to Excel/CSV instantly. Top bank statement converter for SBI, HDFC, ICICI, Axis, Kotak and 200+ banks. Auto-categorize & GST tagging.",
  keywords: "bank statement converter, pdf to excel, sbi statement to excel, hdfc statement converter, convert bank statement to csv, bank statement analyzer, bank statement to excel online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  const links = [
    { href: "/#features", label: "Features" },
    { href: "/#how", label: "How it works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border transition-colors">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <ArrowDownUp className="h-4.5 w-4.5" />
              </span>
              <span className="text-lg font-bold tracking-tight">Parsify</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <a
                href={`${dashboardUrl}/login`}
                className="text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
              >
                Log in
              </a>
              <a
                href={`${dashboardUrl}/signup`}
                className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Sign up
              </a>
            </div>

            <button className="grid h-9 w-9 place-items-center rounded-lg md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
              <div className="col-span-2">
                <Link href="/" className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <ArrowDownUp className="h-4.5 w-4.5" />
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
                  <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                  <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                  <li><a href="#how" className="text-sm text-muted-foreground hover:text-foreground">How it works</a></li>
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
                  <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms & Conditions</Link></li>
                  <li><Link href="/privacy#security" className="text-sm text-muted-foreground hover:text-foreground">Security</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold">Support</h4>
                <ul className="mt-4 space-y-2.5">
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link></li>
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                  <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Banks list</a></li>
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
