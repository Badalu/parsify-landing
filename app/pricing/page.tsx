"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  const plans = [
    {
      name: "Starter",
      inr: 999,
      usd: 12,
      desc: "For individuals filing personal returns.",
      features: ["500 pages/month", "Standard AI parsing", "All 200+ banks supported", "Email support"],
      missing: ["GST split tagging", "REST API access"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      inr: 1999,
      usd: 25,
      desc: "For practising CAs and freelancers.",
      features: [
        "1500 pages/month",
        "Priority Gemini AI parsing",
        "All 200+ banks supported",
        "GST split tagging",
        "Bulk processing",
        "Priority support",
      ],
      missing: ["REST API access"],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Business",
      inr: 3499,
      usd: 45,
      desc: "For firms and high-volume teams.",
      features: ["5000 pages/month", "API Access & Webhooks", "Custom integrations", "24/7 Dedicated Support"],
      missing: [],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-24 bg-grid-pattern">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16 relative z-10">
          <div className="inline-block border-2 border-shadow-color bg-card px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-6 brutal-shadow">
            Pricing Plans
          </div>
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
            Simple <span className="bg-secondary text-white px-2 border-2 border-shadow-color inline-block rotate-1 brutal-shadow">Pricing</span>
          </h1>
          <p className="text-xl font-medium text-muted-foreground leading-relaxed mb-8">
            Choose the subscription that fits your volume. Credits never expire.
          </p>

          <div className="inline-flex items-center bg-card border-2 border-shadow-color brutal-shadow p-1">
            {(["INR", "USD"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors ${
                  currency === c 
                    ? "bg-primary text-white border-2 border-shadow-color shadow-[2px_2px_0px_0px_#1a1c1d]" 
                    : "text-muted-foreground hover:text-shadow-color border-2 border-transparent"
                }`}
              >
                {c === "INR" ? "₹ INR" : "$ USD"}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3 relative z-10">
          {plans.map((p) => {
            const price = currency === "INR" ? p.inr : p.usd;
            const symbol = currency === "INR" ? "₹" : "$";
            return (
              <div
                key={p.name}
                className={`brutal-card p-8 flex flex-col ${
                  p.popular
                    ? "bg-primary text-white border-4 scale-105 shadow-[8px_8px_0px_0px_#1a1c1d]"
                    : "bg-card"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-4 -right-4 bg-secondary text-white border-2 border-shadow-color px-4 py-1 text-sm font-black uppercase tracking-widest brutal-shadow rotate-3">
                    Most Popular
                  </span>
                )}
                
                <h3 className={`text-xl font-black uppercase tracking-widest mb-2 ${p.popular ? "text-white" : "text-shadow-color"}`}>
                  {p.name}
                </h3>
                <p className={`text-sm font-medium h-10 ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>
                  {p.desc}
                </p>
                
                <div className="mt-8 mb-4 flex items-baseline gap-1 border-b-2 border-shadow-color/20 pb-8">
                  <span className={`text-6xl font-black ${p.popular ? "text-white" : "text-shadow-color"}`}>
                    {symbol}{price}
                  </span>
                  <span className={`text-sm font-bold uppercase ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>
                    /mo
                  </span>
                </div>
                
                <ul className="flex-1 space-y-4 mb-8 pt-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-5 w-5 shrink-0 ${p.popular ? "text-white" : "text-success"}`} strokeWidth={3} />
                      <span className={`font-bold ${p.popular ? "text-white" : "text-shadow-color"}`}>{f}</span>
                    </li>
                  ))}
                  {p.missing.map((f) => (
                    <li key={f} className="flex items-start gap-3 opacity-50">
                      <X className={`mt-0.5 h-5 w-5 shrink-0 ${p.popular ? "text-white" : "text-muted-foreground"}`} strokeWidth={3} />
                      <span className={`font-medium line-through ${p.popular ? "text-white" : "text-muted-foreground"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`${dashboardUrl}/login?plan=${p.name}`}
                  className={`w-full text-center py-4 uppercase tracking-wider font-black text-sm border-2 border-shadow-color shadow-[4px_4px_0px_0px_#1a1c1d] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all ${
                    p.popular 
                      ? "bg-secondary text-white" 
                      : "bg-primary text-white"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Credit Packs */}
        <div className="mx-auto mt-24 max-w-4xl brutal-card bg-background p-10 relative z-10">
          <div className="text-center mb-10 border-b-2 border-shadow-color pb-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-shadow-color mb-4">Pay-Per-Page Credits</h2>
            <p className="font-medium text-muted-foreground max-w-xl mx-auto">
              Credits never expire. Top up anytime and use them whenever you need to process financial statements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Standard", pages: "100", price: currency === "INR" ? "₹500" : "$10", rate: currency === "INR" ? "₹5/pg" : "$0.10/pg" },
              { title: "Premium", pages: "500", price: currency === "INR" ? "₹2000" : "$40", rate: currency === "INR" ? "₹4/pg" : "$0.08/pg" },
              { title: "Enterprise", pages: "2000", price: currency === "INR" ? "₹6000" : "$120", rate: currency === "INR" ? "₹3/pg" : "$0.06/pg" },
            ].map((pack) => (
              <div key={pack.title} className="bg-card border-2 border-shadow-color p-6 text-center shadow-[4px_4px_0px_0px_#1a1c1d]">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2">{pack.title}</h4>
                <div className="text-3xl font-black text-shadow-color mb-1">{pack.pages}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Pages</div>
                
                <div className="pt-6 border-t-2 border-shadow-color/20">
                  <div className="text-2xl font-black text-shadow-color mb-1">{pack.price}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-success mb-6">{pack.rate}</div>
                  
                  <a
                    href={`${dashboardUrl}/login?topup=true`}
                    className="block w-full bg-background border-2 border-shadow-color py-2 text-xs font-black uppercase tracking-widest text-shadow-color hover:bg-shadow-color hover:text-white transition-colors"
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
