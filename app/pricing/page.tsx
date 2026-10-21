import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { FACTS, APP_ID, breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — Bank Statement Converter Plans from ₹999/month",
  description:
    "Parsify pricing: free plan (1 statement/day without signup, 2/day with a free account). Paid plans for CAs from ₹999/month for 40 statements. Excel, CSV & Tally XML export.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Parsify Pricing — Bank Statement Converter Plans",
    description: "Free plan + paid plans from ₹999/month for Indian CAs and finance teams.",
    url: "https://parsify.in/pricing",
  },
};

const offersSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Parsify Pricing",
  url: "https://parsify.in/pricing",
  about: { "@id": APP_ID },
  mainEntity: {
    "@type": "OfferCatalog",
    name: "Parsify plans",
    itemListElement: FACTS.pricing.map((p) => ({
      "@type": "Offer",
      name: `${p.name} Plan`,
      price: String(p.price),
      priceCurrency: "INR",
      description: p.desc,
      itemOffered: { "@id": APP_ID },
    })),
  },
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Pricing", path: "/pricing" }])) }}
      />
      <PricingClient />
    </>
  );
}
