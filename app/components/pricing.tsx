"use client";

import React, { useState } from 'react';
import { Check, FileText, Zap } from 'lucide-react';

export function Pricing({ DASHBOARD_URL }: { DASHBOARD_URL: string }) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const plans = [
    {
      id: "free_plan",
      name: "Free",
      inr: 0,
      usd: 0,
      // Free plan: STATEMENT-based
      quota: "2 statements",
      quotaNote: "Per day · no signup required for 1",
      isPageBased: false,
      isDaily: true,
      features: [
        "2 free statements every day",
        "1 free statement without signup",
        "All Indian banks supported",
        "Realtime conversion history",
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
            Free plan: 1 statement/day (no signup), 2/day (free account). Paid plans count each uploaded file as 1 statement, regardless of pages.
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
                  href={`${DASHBOARD_URL}/signup`}
                  className={`brutal-btn-primary w-full text-center block py-3 text-sm uppercase tracking-wider ${
                    plan.popular ? "bg-secondary text-white border-shadow-color" : ""
                  }`}
                >
                  {plan.isFree ? "Register Free" : "Get Started"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center space-y-2">
          <p className="text-muted-foreground font-medium">
             Looking for free conversions? <a href={`${DASHBOARD_URL}/signup`} className="text-primary font-bold hover:underline">Register</a> to get 2 free bank statement conversions every day. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Paid plans: each uploaded PDF = 1 statement. No page limits per statement.
          </p>
        </div>
      </div>
    </section>
  );
}
