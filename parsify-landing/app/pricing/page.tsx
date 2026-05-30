"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  const plans = [
    {
      name: "Starter",
      monthly: 15,
      desc: "For individuals filing personal returns.",
      features: ["100 pages/month", "Excel + CSV export", "All 200+ banks supported", "Email support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      monthly: 39,
      desc: "For practising CAs and freelancers.",
      features: [
        "500 pages/month",
        "All 200+ banks supported",
        "GST split tagging",
        "Bulk processing",
        "Priority AI support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Business",
      monthly: 99,
      desc: "For firms and high-volume teams.",
      features: ["Unlimited pages", "REST API access", "Custom integrations", "Dedicated key manager"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Pricing Plans
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Simple USD pricing
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Choose the subscription that fits your volume, or top up with one-time credit packs.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                !yearly ? "bg-foreground text-background" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                yearly ? "bg-foreground text-background" : "text-muted-foreground"
              }`}
            >
              Yearly
              <span className="rounded-full bg-success/15 px-1.5 py-0.5 text-[10px] font-semibold text-success">
                −20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const price = yearly ? Math.round(p.monthly * 0.8) : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-7 ${
                  p.popular
                    ? "border-primary shadow-lg shadow-primary/10"
                    : "border-border"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-5xl">${price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                {yearly && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Billed ${price * 12}/year
                  </p>
                )}
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${dashboardUrl}/login?plan=${p.name}`}
                  className={`mt-8 inline-flex h-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors w-full text-center ${
                    p.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Credit Packs */}
        <div className="mx-auto mt-20 max-w-4xl rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-sm">
          <div className="text-center sm:text-left">
            <h2 className="font-serif text-3xl">Need credits occasionally? Try Pay-Per-Page</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Credits never expire. Top up anytime and use them whenever you need to process financial statements.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Standard Pack", pages: "100 Pages", price: "$10", rate: "$0.10/page" },
              { title: "Premium Pack", pages: "500 Pages", price: "$40", rate: "$0.08/page" },
              { title: "Enterprise Pack", pages: "2,000 Pages", price: "$120", rate: "$0.06/page" },
            ].map((pack) => (
              <div key={pack.title} className="rounded-xl border border-border bg-secondary/25 p-5 text-center flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground">{pack.title}</h4>
                  <p className="mt-3 font-serif text-3xl text-foreground font-semibold">{pack.pages}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-border/80">
                  <p className="text-2xl font-bold font-serif">{pack.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">{pack.rate}</p>
                  <a
                    href={`${dashboardUrl}/login?topup=true`}
                    className="mt-4 inline-flex h-9 items-center justify-center rounded-lg bg-foreground text-background text-xs font-semibold px-4 w-full transition-colors hover:bg-foreground/90"
                  >
                    Buy Pack
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
