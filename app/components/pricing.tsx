"use client";

import React, { useState } from 'react';
import { Check, FileText, Zap, Receipt, ShieldCheck, CreditCard } from 'lucide-react';

export function Pricing({ DASHBOARD_URL }: { DASHBOARD_URL: string }) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const plans = [
    {
      id: "free_plan",
      name: "Free",
      inr: 0,
      usd: 0,
      quota: "15 pages",
      quotaNote: "Free daily limit · resets every midnight",
      isPageBased: true,
      isDaily: true,
      features: [
        "15 free pages every day",
        "Resets daily at midnight",
        "No credit card required",
        "All Indian banks supported",
        "Export to Excel & CSV",
      ],
      popular: false,
      isFree: true,
    },
    {
      id: "starter_plan",
      name: "Starter",
      inr: 999,
      usd: 12,
      // Paid plan: STATEMENT-based
      quota: "40 statements",
      quotaNote: "Per month · unlimited pages each",
      isPageBased: false,
      features: [
        "40 statements / month",
        "Unlimited pages per statement",
        "Excel, CSV & Tally XML",
        "Standard AI parsing",
        "Email support",
      ],
      popular: false,
    },
    {
      id: "professional_plan",
      name: "Growth",
      inr: 1999,
      usd: 25,
      quota: "120 statements",
      quotaNote: "Per month · unlimited pages each",
      isPageBased: false,
      features: [
        "120 statements / month",
        "Unlimited pages per statement",
        "Direct Tally XML Export",
        "Priority Gemini AI parsing",
        "Bulk upload support",
        "Priority support",
      ],
      popular: true,
    },
    {
      id: "business_plan",
      name: "Pro",
      inr: 3499,
      usd: 45,
      quota: "400 statements",
      quotaNote: "Per month · unlimited pages each",
      isPageBased: false,
      features: [
        "400 statements / month",
        "Unlimited pages per statement",
        "Direct Tally XML Export",
        "API Access & Webhooks",
        "24/7 Dedicated Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 border-b-2 border-shadow-color bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
            Simple Plans. <span className="text-secondary inline-block mt-2 sm:mt-0">No surprises.</span>
          </h2>
          <p className="text-muted-foreground font-medium mb-2">
            Paid plans are <strong className="text-foreground">statement-based</strong> — convert any size PDF, pay per statement.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Free plan includes 15 pages every day. Paid plans count each uploaded file as 1 statement with unlimited pages.
          </p>

          {/* Currency Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-card border-2 border-shadow-color brutal-shadow p-1">
              {(["INR", "USD"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                    currency === c
                      ? "bg-primary text-white border-2 border-shadow-color"
                      : "text-muted-foreground hover:text-foreground border-2 border-transparent"
                  }`}
                >
                  {c === "INR" ? "₹ INR" : "$ USD"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Cost Comparison Banner (Why Statement-Based Beats Per-Page Tools) ── */}
        <div className="mb-14 max-w-4xl mx-auto bg-card border-2 border-shadow-color brutal-shadow p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-shadow-color pb-4 mb-5">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 border border-primary/30 inline-block mb-1">
                Value Analysis for Indian CAs
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-shadow-color tracking-tight">
                Statement-Based vs Per-Page Pricing
              </h3>
            </div>
            <div className="bg-success text-white px-3 py-1 font-black text-xs uppercase tracking-wider border-2 border-shadow-color brutal-shadow shrink-0">
              Save up to 90% Every Month
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div className="p-4 bg-background border-2 border-dashed border-destructive/40">
              <div className="text-xs font-bold text-destructive uppercase tracking-wider mb-1">❌ Other Tools (DocuClipper / NanoNets)</div>
              <div className="text-base font-bold text-shadow-color mb-1">Charge ₹5 – ₹10 PER PAGE</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A 50-page statement costs <strong>₹250 to ₹500 per file</strong>. Converting 40 monthly statements easily exceeds <strong>₹10,000+ per month</strong>.
              </p>
            </div>

            <div className="p-4 bg-primary/5 border-2 border-primary/60">
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">✅ Parsify AI (Built for CAs)</div>
              <div className="text-base font-black text-primary mb-1">Flat ₹25 PER STATEMENT (Unlimited Pages)</div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Whether your bank statement is 5 pages or 100 pages, it counts as <strong>just 1 statement</strong>. 40 statements = <strong>flat ₹999/month</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`brutal-card p-8 bg-card flex flex-col ${
                plan.popular ? "border-4 border-primary scale-105 z-10 shadow-[8px_8px_0px_0px_#5b21b6] relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-b-4 border-l-4 border-shadow-color">
                  Popular
                </div>
              )}

              <div className={`text-xl font-black uppercase tracking-widest ${plan.popular ? "text-primary" : "text-shadow-color"} mb-4`}>
                {plan.name}
              </div>

              <div className="mb-2">
                <span className="text-4xl font-black text-shadow-color">
                  {plan.isFree ? "Free" : currency === "INR" ? `₹${plan.inr}` : `$${plan.usd}`}
                </span>
                {!plan.isFree && <span className="text-sm font-bold text-muted-foreground"> / month</span>}
              </div>

              {/* Quota badge */}
              <div className={`mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold w-max border-2 ${
                plan.isFree
                  ? "bg-muted/50 border-shadow-color/30 text-muted-foreground"
                  : "bg-secondary/10 border-secondary/30 text-secondary"
              }`}>
                {plan.isFree ? <FileText className="w-3 h-3" /> : <Zap className="w-3 h-3" />}
                <div>
                  <span className="font-black">{plan.quota}</span>
                  <span className="font-normal ml-1 opacity-70">{(plan as any).isDaily ? "/ day" : "/ month"}</span>
                </div>
              </div>

              {/* Quota note */}
              <p className="text-xs text-muted-foreground mb-6 font-medium">{plan.quotaNote}</p>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-shadow-color">
                    <Check
                      className={`w-5 h-5 ${plan.popular ? "text-secondary" : "text-primary"}`}
                      strokeWidth={3}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={`mt-auto pt-4 ${plan.popular ? "border-t-2 border-shadow-color border-dashed" : ""}`}>
                <a
                  href={plan.isFree ? `${DASHBOARD_URL}/signup` : `${DASHBOARD_URL}/signup?plan=${plan.id}&checkout=true`}
                  className={`brutal-btn-primary w-full text-center block py-3 text-sm uppercase tracking-wider ${
                    plan.popular ? "bg-secondary text-white border-shadow-color" : ""
                  }`}
                >
                  {plan.isFree ? "Register Free (15 Pgs/Day)" : `Get ${plan.name} Plan →`}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Guarantee Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="brutal-card p-4 bg-card border-2 border-shadow-color flex items-start gap-3">
            <Receipt className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-xs uppercase tracking-wider text-shadow-color">GST Tax Invoice</p>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">Claim 18% Input Tax Credit with automated GSTIN invoices.</p>
            </div>
          </div>
          <div className="brutal-card p-4 bg-card border-2 border-shadow-color flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-xs uppercase tracking-wider text-shadow-color">Instant UPI & Cards</p>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">Pay via GPay, PhonePe, Paytm, BHIM, RuPay or Cards.</p>
            </div>
          </div>
          <div className="brutal-card p-4 bg-card border-2 border-shadow-color flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-xs uppercase tracking-wider text-shadow-color">7-Day Refund Policy</p>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">100% money back guarantee if statement conversion fails.</p>
            </div>
          </div>
          <div className="brutal-card p-4 bg-card border-2 border-shadow-color flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-xs uppercase tracking-wider text-shadow-color">Instant Activation</p>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">Quota credited in seconds. Convert 100+ pages immediately.</p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center space-y-2">
          <p className="text-muted-foreground font-medium">
             Looking to test conversions? <a href={`${DASHBOARD_URL}/signup`} className="text-primary font-bold hover:underline">Register</a> to get 15 free pages every day. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Paid plans: each uploaded PDF = 1 statement. No page limits per statement.
          </p>
        </div>
      </div>
    </section>
  );
}
