/**
 * Single source of truth for brand facts used across metadata, JSON-LD,
 * llms.txt and page copy. Keep claims here consistent — search engines and
 * AI answer engines (ChatGPT, Perplexity, Gemini, AI Overviews) penalise
 * sites that state contradicting numbers on different pages.
 */
export const SITE = {
  name: "Parsify",
  legalName: "Parsify",
  url: "https://parsify.in",
  appUrl: "https://app.parsify.in",
  logo: "https://parsify.in/icon.svg",
  ogImage: "https://parsify.in/og-image.png",
  foundingDate: "2024",
  country: "India",
  city: "Bengaluru",
  supportUrl: "https://parsify.in/contact",
  // Add real public profiles here as they are created — this powers
  // Organization.sameAs, the most important entity signal for AI search.
  sameAs: [] as string[],
} as const;

export const FACTS = {
  banks: "all major Indian banks",
  banksExamples: "SBI, HDFC, ICICI, Axis, Kotak, PNB, Bank of Baroda, Canara, Union Bank, IndusInd, Yes Bank, IDBI, Federal Bank and Indian Bank",
  internationalBanks: "leading banks in the USA, UK, UAE, Australia and Singapore",
  accuracy: "99.3%",
  outputs: "Excel (XLSX), CSV and Tally XML",
  freePlan: "1 statement per day without signup, 2 per day with a free account",
  pricing: [
    { name: "Free", price: 0, desc: "1 statement/day without signup, 2/day with a free account" },
    { name: "Starter", price: 999, desc: "40 statements per month" },
    { name: "Growth", price: 1999, desc: "120 statements per month" },
    { name: "Pro", price: 3499, desc: "400 statements per month" },
  ],
} as const;

/** Last meaningful content update — used for sitemap lastmod. Bump when pages change. */
export const CONTENT_UPDATED = "2026-10-21";

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const APP_ID = `${SITE.url}/#software`;

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}
