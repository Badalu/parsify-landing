import React from "react";
import { Building2, ShieldCheck, Cpu } from "lucide-react";

export const metadata = {
  title: "About Us — Parsify",
  description: "Learn about Parsify's mission to eliminate manual bank statement data entry for Indian accountants, CAs and finance teams.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Mission
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Streamlining finance data entry
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Parsify was born out of a simple frustration: financial professionals wasting thousands of hours copying data from PDF statements into Excel. We built a layout-aware AI engine to automate it once and for all.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Made in India",
                desc: "Headquartered in Bengaluru. Built specifically for the Indian bank ecosystem and accounting standard standards like GST and Tally."
              },
              {
                icon: ShieldCheck,
                title: "Security First",
                desc: "We recognize statements contain sensitive financial history. That is why all files are auto-deleted within 24 hours and encrypted at rest."
              },
              {
                icon: Cpu,
                title: "State-of-the-Art AI",
                desc: "Combining the speed of Python with layout-understanding LLMs allows us to convert multi-page complex statements with near-100% accuracy."
              }
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          <article className="prose prose-neutral dark:prose-invert mt-12 max-w-none prose-headings:font-serif leading-relaxed text-muted-foreground">
            <h2 className="text-foreground">Why CAs across India trust Parsify</h2>
            <p>
              Every month, tax professionals, accountants, and business owners receive thousands of bank statements. Most statements are locked in secure PDF documents. In the past, matching transaction descriptions, splitting out GST calculations, and cleaning currency values took hours of tedious, error-prone manual labor.
            </p>
            <p className="mt-4">
              Parsify automates this entire pipeline. Our backend uses layout extraction tools to preserve the visual flow of PDF pages, and uses Google Gemini models to extract structured dates, descriptions, categories, and tax fields. The result is a clean, standard, highly formatted Excel sheet that you can hand straight to your auditor or upload to software like Tally, Zoho Books, or QuickBooks.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
