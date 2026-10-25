import "./globals.css";
import Link from "next/link";
import React from "react";
import Script from "next/script";
import type { Metadata, Viewport } from "next";

// Import the client Navbar we extracted
import { Navbar } from "./components/navbar";
import { SITE, FACTS, ORG_ID, WEBSITE_ID, APP_ID } from "@/lib/site";

// ─── Viewport — removed maximum-scale=1 (Google penalizes it for accessibility) ──
export const viewport: Viewport = {
  themeColor: "#5b21b6",
  width: "device-width",
  initialScale: 1,
};

// ─── Full SEO Metadata ──────────────────────────────────────────────────────────
// NOTE: no `alternates.canonical` here on purpose. A canonical in the root layout
// is inherited by every page that doesn't override it, which made the blog,
// about, pricing etc. all canonicalise to the homepage. Each page sets its own.
export const metadata: Metadata = {
  title: {
    template: "%s | Parsify",
    default: "Bank Statement Converter — Free Online PDF to Excel & CSV | Parsify",
  },
  description:
    "Convert bank statement PDF to Excel, CSV & Tally with 99.3% accuracy. Free online AI bank statement converter for all major Indian banks (SBI, HDFC, ICICI, Axis). Instant & secure.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: "Bank Statement Converter — Free Online PDF to Excel & CSV | Parsify",
    description:
      "Convert bank statement PDF to Excel, CSV & Tally with 99.3% accuracy. Free online AI bank statement converter for all major Indian banks. Instant & secure.",
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Parsify — Bank Statement Converter PDF to Excel and CSV",
        type: "image/png",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank Statement Converter — Free Online PDF to Excel & CSV | Parsify",
    description:
      "Convert bank statement PDF to Excel, CSV & Tally with 99.3% accuracy. Free online AI bank statement converter for all major Indian banks.",
    images: ["/og-image.png"],
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

// ─── JSON-LD: one linked @graph (Organization ⇄ WebSite ⇄ SoftwareApplication) ──
// Page-specific schema (FAQPage, BreadcrumbList, Article) lives in each page so
// it is never duplicated or shown on pages where the content isn't visible.
const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: SITE.logo },
      image: SITE.ogImage,
      description:
        "Parsify is an AI bank statement converter that turns PDF bank statements into Excel, CSV and Tally XML for Indian Chartered Accountants and finance teams.",
      foundingDate: SITE.foundingDate,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressCountry: "IN",
      },
      ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: SITE.supportUrl,
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
      knowsAbout: [
        "Bank statement conversion",
        "PDF to Excel",
        "Tally Prime import",
        "Bank reconciliation",
        "GST",
        "OCR for scanned bank statements",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE.name,
      url: SITE.url,
      inLanguage: "en-IN",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "SoftwareApplication",
      "@id": APP_ID,
      name: "Parsify Bank Statement Converter",
      url: SITE.url,
      operatingSystem: "Web browser (Windows, macOS, Linux, Android, iOS)",
      applicationCategory: "FinanceApplication",
      applicationSubCategory: "Bank statement converter",
      description: `AI bank statement converter that converts PDF statements from ${FACTS.banksExamples} into ${FACTS.outputs} with ${FACTS.accuracy} accuracy. Handles password-protected and scanned PDFs.`,
      screenshot: SITE.ogImage,
      featureList: [
        "Bank statement PDF to Excel",
        "Bank statement PDF to CSV",
        "Tally XML export",
        "Automatic bank format detection",
        "Password-protected PDF support",
        "Scanned PDF OCR",
        "GST tagging",
        "Party name extraction",
        "Tally voucher type mapping",
      ],
      offers: FACTS.pricing.map((p) => ({
        "@type": "Offer",
        name: `${p.name} Plan`,
        price: String(p.price),
        priceCurrency: "INR",
        description: p.desc,
        url: `${SITE.url}/pricing`,
      })),
      publisher: { "@id": ORG_ID },
    },
  ],
};

const FOOTER_LINKS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Tools",
    links: [
      { href: "/bank-statement-converter", label: "Bank Statement Converter" },
      { href: "/pdf-to-excel", label: "Bank Statement PDF to Excel" },
      { href: "/pdf-to-csv", label: "Bank Statement PDF to CSV" },
      { href: "/blog/bank-statement-to-tally-xml-converter", label: "Bank Statement to Tally XML" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Indian Banks",
    links: [
      { href: "/sbi-bank-statement-converter", label: "SBI Statement to Excel" },
      { href: "/hdfc-bank-statement-converter", label: "HDFC Statement to Excel" },
      { href: "/icici-bank-statement-converter", label: "ICICI Statement to Excel" },
      { href: "/axis-bank-statement-converter", label: "Axis Statement to Excel" },
      { href: "/kotak-bank-statement-converter", label: "Kotak Statement to Excel" },
      { href: "/pnb-bank-statement-converter", label: "PNB Statement to Excel" },
      { href: "/bank-of-baroda-statement-converter", label: "Bank of Baroda Statement to Excel" },
      { href: "/canara-bank-statement-converter", label: "Canara Statement to Excel" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { href: "/blog/how-to-import-pdf-bank-statement-in-tally-prime", label: "Import PDF Statement in Tally Prime" },
      { href: "/blog/how-to-convert-scanned-pdf-bank-statement-to-excel", label: "Scanned PDF Statement to Excel" },
      { href: "/blog/bank-statement-reconciliation-process-in-tally", label: "Bank Reconciliation in Tally" },
      { href: "/blog/how-to-format-bank-statement-in-excel-for-tally", label: "Format Statement for Tally" },
      { href: "/blog", label: "All Articles" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/refund", label: "Refund" },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-4ZTPN4PH1M";
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Navbar />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER — crawlable internal links to every money page */}
        <footer className="bg-card py-16 border-t-2 border-shadow-color">
          <div className="max-w-7xl mx-auto px-6">
            <nav aria-label="Footer" className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              {FOOTER_LINKS.map((col) => (
                <div key={col.heading}>
                  <p className="text-xs font-black uppercase tracking-widest text-shadow-color mb-4">{col.heading}</p>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t-2 border-shadow-color">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary border-2 border-shadow-color brutal-shadow flex items-center justify-center">
                  <span className="text-white font-black leading-none">P</span>
                </div>
                <div>
                  <span className="text-xl font-black uppercase tracking-widest text-shadow-color ml-2 font-serif">Parsify</span>
                  <p className="text-[11px] text-muted-foreground ml-2 font-medium">Owned &amp; Operated by <strong className="text-foreground">BADAL RAJESH HARI</strong></p>
                </div>
              </div>
              <div className="text-xs font-medium text-muted-foreground text-center space-y-1">
                <p>Support: <a href="mailto:haribadal5@gmail.com" className="hover:underline text-foreground font-semibold">haribadal5@gmail.com</a> | <a href="tel:+917738973272" className="hover:underline text-foreground font-semibold">+91 7738973272</a></p>
                <p>Mumbai, Maharashtra, India</p>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                © {new Date().getFullYear()} Parsify
              </div>
            </div>
          </div>
        </footer>

        {/* Third-party scripts — loaded after hydration so they don't hurt LCP/INP */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { 'cookie_domain': 'auto' });
            gtag('config', 'AW-18169246685');
          `}
        </Script>
        <Script id="crisp-chat" strategy="lazyOnload">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="1f15e138-4d9d-4e8a-8294-498000837a4e";
            (function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `}
        </Script>
        {posthogKey ? (
          <Script id="posthog" strategy="afterInteractive">
            {`
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessQueue getActiveMatchingSurveys getSurveyResponse getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('${posthogKey}', {
                api_host: '${posthogHost}',
                person_profiles: 'always',
                capture_pageview: true,
                capture_pageleave: true
              });
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
