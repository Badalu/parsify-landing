"use client";

import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';

export function Pricing({ DASHBOARD_URL }: { DASHBOARD_URL: string }) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const plans = [
    { 
      id: "starter_plan", 
      name: "Starter", 
      inr: 999, 
      usd: 12, 
      credits: 500, 
      features: ["~40 statements / month (500 pages)", "Starter — solo CA ke liye", "Standard AI parsing", "Email support"], 
      popular: false 
    },
    { 
      id: "professional_plan", 
      name: "Growth", 
      inr: 1999, 
      usd: 25, 
      credits: 1500, 
      features: ["~120 statements / month (1500 pages)", "Growth — small firm", "Priority Gemini AI parsing", "Priority support"], 
      popular: true 
    },
    { 
      id: "business_plan", 
      name: "Pro", 
      inr: 3400, 
      usd: 45, 
      credits: 5000, 
      features: ["~400 statements / month (5000 pages)", "Pro — busy season ready", "API Access & Webhooks", "24/7 Dedicated Support"], 
      popular: false 
    },
  ];

  return (
    <section id="pricing" className="py-32 border-b-2 border-shadow-color bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
            Simple Plans. <span className="text-secondary inline-block mt-2 sm:mt-0">No surprises.</span>
          </h2>
          <p className="text-muted-foreground font-medium mb-8">
            Credits never expire. Top up anytime.
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
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className={`brutal-card p-8 bg-card flex flex-col ${plan.popular ? 'border-4 border-primary scale-105 z-10 shadow-[8px_8px_0px_0px_#5b21b6] relative' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-b-4 border-l-4 border-shadow-color">
                  Popular
                </div>
              )}
              
              <div className={`text-xl font-black uppercase tracking-widest ${plan.popular ? 'text-primary' : 'text-shadow-color'} mb-4`}>
                {plan.name}
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-black text-shadow-color">
                  {currency === "INR" ? `₹${plan.inr}` : `$${plan.usd}`}
                </span>
              </div>
 
              <div className="mb-6 inline-flex items-center gap-2 bg-primary/10 text-primary border-2 border-primary/20 px-3 py-1 rounded-full text-xs font-bold w-max">
                <Zap className="w-3 h-3" />
                <span>{plan.credits.toLocaleString("en-IN")} credits</span>
              </div>
 
              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-shadow-color">
                    <Check className={`w-5 h-5 ${plan.popular ? 'text-secondary' : 'text-primary'}`} strokeWidth={3} /> 
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className={`mt-auto pt-4 ${plan.popular ? 'border-t-2 border-shadow-color border-dashed' : ''}`}>
                <a href={`${DASHBOARD_URL}/signup`} className={`brutal-btn-primary w-full text-center block py-3 text-sm uppercase tracking-wider ${plan.popular ? 'bg-secondary text-white border-shadow-color' : ''}`}>
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Free Tier Mention */}
        <div className="mt-16 text-center">
           <p className="text-muted-foreground font-medium">
             Looking for free conversions? <a href={`${DASHBOARD_URL}/signup`} className="text-primary font-bold hover:underline">Register</a> to get 50 free pages every month. No credit card required.
           </p>
        </div>
      </div>
    </section>
  );
}
