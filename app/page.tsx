import React from 'react';
import type { Metadata } from 'next';
import { ArrowRight, FileText, CheckCircle2, Shield, Zap, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Bank Statement Converter — PDF to Excel & CSV | Parsify',
  description: 'Convert PDF bank statements to Excel or CSV instantly. Free, secure, and supports all major Indian banks.',
};

export default function HomePage() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      
      {/* ══ 1. HERO ══ */}
      <section className="relative pt-32 pb-24 border-b-2 border-shadow-color overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left */}
            <div className="max-w-2xl">
              <div className="inline-block border-2 border-shadow-color bg-card px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
                Bank Statement Intelligence
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6 text-shadow-color uppercase font-sans">
                PDFs into <br/>
                <span className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block transform -rotate-1 mt-2">clean data</span><br/>
                effortlessly.
              </h1>
              <p className="text-lg text-muted-foreground font-medium mb-10 max-w-lg leading-relaxed">
                Upload any bank statement PDF. Our engine parses every row, handles every Indian bank format, and delivers structured Excel or CSV in seconds.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <a href={`${DASHBOARD_URL}/signup`} className="brutal-btn-primary text-lg px-8 py-4 uppercase tracking-wider">
                  Start for free
                  <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
                </a>
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  No credit card <span className="mx-2">•</span> 50+ Banks
                </p>
              </div>
            </div>

            {/* Hero Right - Brutalist Graphic */}
            <div className="relative">
              <div className="brutal-card p-8 bg-card relative z-10 rotate-1">
                <div className="flex justify-between items-center mb-6 border-b-2 border-shadow-color pb-4">
                  <span className="font-mono text-sm font-bold uppercase tracking-wider text-muted-foreground">statement.pdf</span>
                  <span className="bg-primary text-white text-xs font-bold uppercase px-2 py-1 border border-shadow-color">Processing</span>
                </div>
                <div className="space-y-4 mb-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex gap-4 opacity-50">
                      <div className="h-4 bg-shadow-color w-16 border border-shadow-color" />
                      <div className="h-4 bg-shadow-color w-48 border border-shadow-color" />
                      <div className="h-4 bg-shadow-color w-24 border border-shadow-color" />
                    </div>
                  ))}
                </div>
                <div className="absolute -right-6 -bottom-6 bg-secondary text-white p-6 border-2 border-shadow-color brutal-shadow rotate-3">
                  <div className="text-4xl font-black font-sans">4.2s</div>
                  <div className="text-sm font-bold uppercase tracking-widest mt-1">Average Parse Time</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 2. STAT STRIP ══ */}
      <section className="border-b-2 border-shadow-color bg-card">
        <div className="max-w-7xl mx-auto flex flex-wrap lg:grid lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-shadow-color">
          {[
            { num: '2,400+', label: 'Finance Teams' },
            { num: '50+', label: 'Indian Banks' },
            { num: '99.3%', label: 'Accuracy Rate' },
            { num: '0', label: 'Data Stored' },
          ].map((stat, i) => (
            <div key={i} className="p-8 w-full text-center hover:bg-background transition-colors cursor-default">
              <div className="text-4xl font-black text-primary mb-2 font-sans">{stat.num}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. HOW IT WORKS ══ */}
      <section id="how" className="py-32 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4">
              Three Steps. <span className="text-primary bg-primary/10 px-2 border-2 border-primary">Zero Headaches.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Upload', desc: 'Drag and drop any bank statement. Supports all Indian bank formats — HDFC, SBI, ICICI, Axis, Kotak, and more.', icon: FileText },
              { num: '02', title: 'Parse', desc: 'Our engine reads every row, resolves merged cells, and cleans up formatting inconsistencies automatically.', icon: Zap },
              { num: '03', title: 'Download', desc: 'Get perfectly formatted Excel or CSV, ready for Tally, QuickBooks, or your own analysis. In seconds.', icon: CheckCircle2 },
            ].map((step, i) => (
              <div key={i} className="brutal-card p-8 bg-card hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-black text-shadow-color/20">{step.num}</span>
                  <div className="p-3 bg-background border-2 border-shadow-color brutal-shadow">
                    <step.icon className="w-8 h-8 text-secondary" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 text-shadow-color">{step.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. FEATURES ══ */}
      <section id="features" className="py-32 border-b-2 border-shadow-color bg-card bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative">
              <div className="brutal-card p-8 bg-background relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-10 h-10 text-success" strokeWidth={2.5} />
                  <h3 className="text-2xl font-black uppercase text-shadow-color">Bank-Grade Privacy</h3>
                </div>
                <p className="text-muted-foreground font-medium mb-6">
                  We never store your financial data. The moment your conversion is complete, your original PDF and the extracted data are permanently erased from our servers. Always.
                </p>
                <div className="inline-flex items-center gap-2 bg-success/10 text-success border-2 border-success px-4 py-2 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={3} /> Zero Retention Policy
                </div>
              </div>
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 border-2 border-shadow-color z-0"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6 leading-tight">
                Built for the <span className="bg-secondary text-white px-2 border-2 border-shadow-color inline-block rotate-2">messy reality</span> of Indian banks.
              </h2>
              <p className="text-lg text-muted-foreground font-medium mb-10">
                Merged cells, split transactions, rotated text, multi-page statements — our engine handles every edge case that breaks other tools. 99.3% accuracy, every time.
              </p>
              <ul className="space-y-4">
                {['No templates to configure', 'Handles passwords automatically', 'Detects duplicate pages', 'Formats dates uniformly'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-shadow-color">
                    <Check className="w-6 h-6 text-secondary" strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 5. PRICING ══ */}
      <section id="pricing" className="py-32 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4">
              Simple Pricing. <span className="text-secondary">No surprises.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Starter */}
            <div className="brutal-card p-8 bg-card flex flex-col">
              <div className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Starter</div>
              <div className="text-5xl font-black mb-2 text-shadow-color">₹0</div>
              <div className="text-sm font-bold text-muted-foreground mb-8">free forever</div>
              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-primary" strokeWidth={3} /> 10 conversions / month</li>
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-primary" strokeWidth={3} /> Up to 50 pages per file</li>
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-primary" strokeWidth={3} /> Excel + CSV output</li>
                <li className="flex items-center gap-3 font-medium text-muted-foreground line-through opacity-50"><XIcon /> Duplicate detection</li>
              </ul>
              <a href={`${DASHBOARD_URL}/signup`} className="brutal-btn-secondary w-full text-center uppercase tracking-wider py-4">Start Free</a>
            </div>

            {/* Pro */}
            <div className="brutal-card p-8 bg-background border-4 border-primary relative flex flex-col scale-105 z-10 shadow-[8px_8px_0px_0px_#5b21b6]">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-b-4 border-l-4 border-shadow-color">Popular</div>
              <div className="text-sm font-black uppercase tracking-widest text-primary mb-4">Pro</div>
              <div className="text-5xl font-black mb-2 text-shadow-color">₹999</div>
              <div className="text-sm font-bold text-muted-foreground mb-8">per month</div>
              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-secondary" strokeWidth={3} /> 500 conversions / month</li>
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-secondary" strokeWidth={3} /> Unlimited page count</li>
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-secondary" strokeWidth={3} /> Duplicate detection</li>
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-secondary" strokeWidth={3} /> Priority Support</li>
              </ul>
              <a href={`${DASHBOARD_URL}/signup`} className="brutal-btn-primary w-full text-center uppercase tracking-wider py-4 bg-primary text-white">Upgrade to Pro</a>
            </div>

            {/* Business */}
            <div className="brutal-card p-8 bg-card flex flex-col">
              <div className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Business</div>
              <div className="text-5xl font-black mb-2 text-shadow-color">₹3499</div>
              <div className="text-sm font-bold text-muted-foreground mb-8">per month</div>
              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-primary" strokeWidth={3} /> 5000 conversions / month</li>
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-primary" strokeWidth={3} /> API Access</li>
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-primary" strokeWidth={3} /> Team seats</li>
                <li className="flex items-center gap-3 font-medium text-shadow-color"><Check className="w-5 h-5 text-primary" strokeWidth={3} /> 24/7 Dedicated Support</li>
              </ul>
              <a href={`${DASHBOARD_URL}/signup`} className="brutal-btn-secondary w-full text-center uppercase tracking-wider py-4">Contact Sales</a>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 6. CTA ══ */}
      <section className="py-32 bg-primary text-primary-foreground border-b-2 border-shadow-color relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight mb-8">
            Ready to stop <span className="text-secondary bg-white px-2 border-4 border-shadow-color inline-block rotate-2 brutal-shadow">typing</span>?
          </h2>
          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto">
            Join 2,400+ finance teams automating their bank statement reconciliation today.
          </p>
          <a href={`${DASHBOARD_URL}/signup`} className="brutal-btn-primary bg-secondary text-white border-shadow-color shadow-[6px_6px_0px_0px_#1a1c1d] hover:shadow-[2px_2px_0px_0px_#1a1c1d] hover:translate-x-1 hover:translate-y-1 text-xl px-12 py-6 uppercase tracking-widest">
            Create Free Account
          </a>
        </div>
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </section>

    </main>
  );
}

// Helper icon
function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
