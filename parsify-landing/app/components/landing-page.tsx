"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Upload,
  Sparkles,
  Download,
  Building2,
  Tag,
  Receipt,
  Infinity as InfinityIcon,
  Lock,
  Layers,
  Check,
  Star,
  ArrowRight,
  Zap,
  ChevronDown
} from "lucide-react";

export function LandingPageClient() {
  const [yearly, setYearly] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && !tz.toLowerCase().includes("asia/calcutta") && !tz.toLowerCase().includes("asia/kolkata")) {
        setCurrency("USD");
      }
    } catch (e) {}
  }, []);

  const features = [
    {
      icon: Building2,
      title: "200+ Indian Banks Supported",
      desc: "From SBI to your local cooperative bank — every PDF layout handled natively.",
    },
    {
      icon: Sparkles,
      title: "AI Transaction Categorization",
      desc: "Each row auto-tagged: groceries, salary, fuel, EMI, subscriptions, transfers.",
    },
    {
      icon: Receipt,
      title: "GST Entry Auto-Tagging",
      desc: "Detect CGST, SGST and IGST splits automatically — ready for your accountant.",
    },
    {
      icon: InfinityIcon,
      title: "Credits Never Expire",
      desc: "Buy once and use whenever. No monthly burn-down on unused pages.",
    },
    {
      icon: Lock,
      title: "Password-Protected PDFs",
      desc: "Drop encrypted statements directly — we'll prompt for the password securely.",
    },
    {
      icon: Layers,
      title: "Bulk Upload",
      desc: "Process multiple PDFs at once and merge into a single clean spreadsheet.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CA",
      city: "Mumbai",
      initials: "RK",
      quote:
        "Finally a tool that works with SBI statements. Saves me 4 hours every week during ITR season.",
    },
    {
      name: "Priya Sharma",
      role: "Freelancer",
      city: "Bangalore",
      initials: "PS",
      quote:
        "INR pricing and no expiry on credits is a game changer. I only convert 20–30 pages a month and this is perfect.",
    },
    {
      name: "Amit Patel",
      role: "Small Business Owner",
      city: "Ahmedabad",
      initials: "AP",
      quote:
        "The GST tagging feature alone is worth the subscription. My accountant loves the clean output.",
    },
  ];

  const faqs = [
    {
      q: "Bank statement PDF to Excel kaise convert karein?",
      a: "Parsify par login karein, apna bank statement PDF drag and drop karein, aur software automatically read karke perfect Excel (.xlsx) ya CSV sheet taiyar kar dega jise aap download kar sakte hain.",
    },
    {
      q: "CA ke liye best bank statement analyzer tool kaunsa hai?",
      a: "CAs ke liye Parsify best bank statement analyzer tool hai kyunki ye HDFC, SBI, ICICI, Axis samet 200+ Indian banks ke statement formats support karta hai aur bad format multi-page tables ko perfectly clean Excel tables mein convert kar deta hai.",
    },
    {
      q: "GST statement converter India mein kaunsa use karein?",
      a: "India mein GST data aur portal statement conversions ke liye Parsify ekdam reliable converter hai jo GST data files ko structured and audit-ready Excel formats mein extract karke reconcile karne mein madad karta hai.",
    },
    {
      q: "Parsify free mein use kar sakte hain?",
      a: "Haan! Bina kisi credit card ke aap Parsify par sign up karke 50 pages free monthly convert kar sakte hain.",
    },
    {
      q: "Kitne pages free mein process hote hain?",
      a: "Parsify par registration ke baad har mahine 50 pages free mein process hote hain, jo har month ki 1st date (1 tarik) ko automatically reset ho jaate hain.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      monthly: { INR: 999, USD: 12 },
      desc: "Starter — solo CA ke liye",
      features: ["~40 statements/month (500 pages)", "Excel + CSV export", "All banks supported", "Email support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      monthly: { INR: 1999, USD: 25 },
      desc: "Growth — small firm",
      features: [
        "~120 statements/month (1500 pages)",
        "All banks supported",
        "GST tagging",
        "Bulk processing",
        "Priority support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Pro",
      monthly: { INR: 3400, USD: 45 },
      desc: "Pro — busy season ready",
      features: ["~400 statements/month (5000 pages)", "API access & webhooks", "Custom integrations", "Dedicated support"],
      cta: "Get Started",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-24">
        {/* Decorative Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-success/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                The #1 bank statement converter
              </span>
              
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1] font-serif">
                Convert bank statements instantly
              </h1>
              
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Easily convert PDF bank statements from 1000+ banks worldwide into clean CSV or Excel files in seconds. Fully automated, secure, and compliant.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a 
                  href={`${dashboardUrl}/dashboard/convert`} 
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
                >
                  Convert Free Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a 
                  href="#how" 
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  See How It Works
                </a>
              </div>

              <div className="mt-10 flex flex-col gap-3.5 text-sm font-medium text-muted-foreground">
                <span className="flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-primary stroke-[2.5]" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-primary stroke-[2.5]" />
                  Credits never expire
                </span>
                <span className="flex items-center gap-2.5">
                  <Check className="h-5 w-5 text-primary stroke-[2.5]" />
                  SOC 2 Compliant
                </span>
              </div>
            </div>

            {/* Right Upload Demo Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl border border-border bg-card p-2 shadow-xl">
                <div className="flex items-center gap-1.5 border-b border-border/85 bg-secondary/50 px-4 py-3 rounded-t-xl">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-[11px] font-medium text-muted-foreground/80 font-sans">
                    parsify.in/converter
                  </span>
                </div>
                <div className="p-8 sm:p-12 bg-card rounded-b-xl flex flex-col items-center justify-center text-center border-t-0">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Upload className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">Start your statement conversion</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                    Select a PDF bank statement to convert. The layout-aware AI automatically parses columns, dates, GST splits, and transactions.
                  </p>
                  <a
                    href={`${dashboardUrl}/dashboard/convert`}
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Select Statement PDF
                  </a>
                </div>
              </div>
              <p className="mt-3.5 text-center text-xs text-muted-foreground font-sans">
                Supports SBI, HDFC, ICICI, Axis, Kotak, HSBC and 200+ other global banks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-t border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              How it works
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Three steps to clean data</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Upload, title: "Upload PDF", desc: "Drag in any Indian bank statement, password-protected included." },
              { icon: Sparkles, title: "AI Extracts Data", desc: "Layout-aware AI reads every row — even multi-page tables." },
              { icon: Download, title: "Download Excel/CSV", desc: "Clean spreadsheet with categories and GST splits, ready to import." },
            ].map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-border bg-card p-7"
              >
                <div className="absolute -top-3 left-7 grid h-7 w-7 place-items-center rounded-full bg-foreground text-xs font-semibold text-background">
                  {i + 1}
                </div>
                <s.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USAGE TIERS */}
      <section id="tiers" className="border-t border-border py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Usage tiers
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Pick the access level that fits you
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Register free to convert statements, or subscribe to get more volume.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                name: "Registered",
                desc: "Registration is free",
                features: ["50 pages every month", "Realtime conversion history", "Categories & GST tagging"],
                price: "Free",
                cta: { label: "Register", to: `${dashboardUrl}/signup` },
                highlight: false,
              },
              {
                name: "Subscribe",
                desc: "Subscribe to convert more documents",
                features: ["Unlimited pages", "Priority AI processing", "API access & webhooks"],
                price: null,
                cta: { label: "See plans", to: "#pricing" },
                highlight: true,
              },
            ].map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-2xl border bg-card p-7 ${
                  t.highlight ? "border-primary shadow-lg shadow-primary/10" : "border-border"
                }`}
              >
                {t.highlight && (
                  <span className="absolute -top-3 right-7 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Best value
                  </span>
                )}
                <h3 className="font-serif text-2xl">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-end justify-between pt-8">
                  {t.price && <p className="font-serif text-3xl">{t.price}</p>}
                  {t.cta && (
                    <a
                      href={t.cta.to}
                      className="ml-auto text-sm font-medium text-primary hover:underline"
                    >
                      {t.cta.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Features
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Built for Indian finance pros
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO ARTICLE */}
      <section className="bg-background py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <article className="prose prose-sm sm:prose-base dark:prose-invert mx-auto text-muted-foreground">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">The Ultimate Bank Statement Converter for Indian Businesses</h2>
            <p className="leading-relaxed">
              Manually typing out bank statements is a thing of the past. With <strong>Parsify</strong>, you can instantly <strong className="text-foreground">convert bank statement PDFs to Excel or CSV formats</strong>. 
              Whether you are dealing with an <strong>SBI statement to Excel</strong> conversion or an <strong>HDFC bank statement</strong>, our AI-powered engine seamlessly extracts rows, multi-page tables, and even handles password-protected files.
            </p>
            <p className="mt-4 leading-relaxed">
              Designed specifically for the Indian financial ecosystem, Parsify is more than just a simple PDF to Excel converter. It automatically categorizes transactions and performs <strong>smart GST tagging (CGST, SGST, IGST)</strong>. 
              Join thousands of CAs, freelancers, and businesses who rely on the best <strong>statement converter online</strong> to save hours of manual data entry every month.
            </p>
          </article>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="border-t border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Pricing
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Simple USD pricing
            </h2>
            <p className="mt-4 text-muted-foreground">
              No hidden fees. No complicated setup. Credits never expire.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => setYearly(false)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    !yearly ? "bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  suppressHydrationWarning={true}
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

              <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => setCurrency("INR")}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    currency === "INR" ? "bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  ₹ INR
                </button>
                <button
                  suppressHydrationWarning={true}
                  onClick={() => setCurrency("USD")}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                    currency === "USD" ? "bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  $ USD
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {plans.map((p) => {
              const basePrice = currency === "INR" ? p.monthly.INR : p.monthly.USD;
              const price = yearly ? Math.round(basePrice * 0.8) : basePrice;
              const symbol = currency === "INR" ? "₹" : "$";
              
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
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-serif text-5xl">{symbol}{price}</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  {yearly && (
                    <p className="mt-1 text-xs text-muted-foreground font-sans">
                      Billed {symbol}{price * 12}/year
                    </p>
                  )}
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
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

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Pay-per-use option available —{" "}
            <span className="font-semibold text-foreground">
              {currency === "INR" ? "₹5" : "$0.10"}/page
            </span>, credits never expire.{" "}
            <a href={`${dashboardUrl}/pricing`} className="text-primary underline hover:text-primary/80">
              See credit packs
            </a>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Loved by 12,000+ users
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Trusted across India
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-sans">
                      {t.role} · {t.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-secondary/30 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Questions, answered
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-border pb-4">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="flex w-full items-center justify-between py-4 text-left text-base font-medium hover:text-primary transition-colors focus:outline-none"
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`h-4.5 w-4.5 text-muted-foreground transition-transform duration-250 ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="pb-4 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Contact us
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Talk to a real human — based in India
              </h2>
              <p className="mt-5 text-muted-foreground">
                Questions about bank support, GST tagging, or enterprise pricing?
                Our team replies within 4 business hours, IST.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                    <Receipt className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">support@parsify.in</p>
                    <p className="text-muted-foreground">For product help, billing & refunds</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                    <Building2 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">sales@parsify.in</p>
                    <p className="text-muted-foreground">Bulk pricing & CA firm partnerships</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                    <Lock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold">SOC 2 · ISO 27001 in progress</p>
                    <p className="text-muted-foreground">Files auto-deleted within 24 hours</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
                <span>🇮🇳 Made in Bengaluru</span>
                <span>·</span>
                <span>GSTIN ready invoices</span>
                <span>·</span>
                <span>12,000+ users</span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! We'll reply within 4 business hours.");
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <h3 className="font-serif text-2xl">Send us a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll get back to you within 4 business hours.
              </p>
              <div className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="cname">Name</label>
                  <input id="cname" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm" placeholder="Rajesh Kumar" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="cemail">Email</label>
                  <input id="cemail" type="email" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm" placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium" htmlFor="cmsg">Message</label>
                  <textarea id="cmsg" required rows={4} className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm" placeholder="How can we help?" />
                </div>
                <button
                  suppressHydrationWarning={true}
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
