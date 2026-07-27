import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, Shield, Zap, Check } from 'lucide-react';
import { Pricing } from './components/pricing';
import { AnonUpload } from './components/AnonUpload';
import { TypewriterHeading } from './components/TypewriterHeading';
import { Testimonials } from './components/Testimonials';
import { BeforeAfterPreview } from './components/BeforeAfterPreview';
import { StickyBottomCTA } from './components/StickyBottomCTA';
import globalBanks from '@/data/global-banks.json';

export const metadata: Metadata = {
  title: 'Bank Statement Converter — Convert PDF to Excel & CSV | Parsify',
  description: 'Convert bank statements instantly with the best AI-powered bank statement converter. Convert PDF bank statements to clean Excel, CSV & Tally in seconds. 99.3% accuracy.',
  alternates: {
    canonical: 'https://parsify.in',
  },
};

const BANK_LINKS = [
  { name: "HDFC Bank Statement Converter", slug: "hdfc-bank-statement-converter" },
  { name: "SBI Bank Statement Converter", slug: "sbi-bank-statement-converter" },
  { name: "ICICI Bank Statement Converter", slug: "icici-bank-statement-converter" },
  { name: "Axis Bank Statement Converter", slug: "axis-bank-statement-converter" },
  { name: "Kotak Bank Statement Converter", slug: "kotak-bank-statement-converter" },
  { name: "PNB Bank Statement Converter", slug: "pnb-bank-statement-converter" },
  { name: "Bank of Baroda Converter", slug: "bank-of-baroda-statement-converter" },
  { name: "IndusInd Bank Converter", slug: "indusind-bank-statement-converter" },
  { name: "Yes Bank Converter", slug: "yes-bank-statement-converter" },
  { name: "Canara Bank Converter", slug: "canara-bank-statement-converter" },
  { name: "IDBI Bank Converter", slug: "idbi-bank-statement-converter" },
  { name: "Union Bank Converter", slug: "union-bank-statement-converter" },
  { name: "BOB Bank Converter", slug: "bob-bank-statement-converter" },
  { name: "Indian Bank Converter", slug: "indian-bank-statement-converter" },
  { name: "Federal Bank Converter", slug: "federal-bank-statement-converter" }
];

export default function HomePage() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      
      {/* ══ 1. HERO ══ */}
      <section className="relative pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-20 border-b-2 border-shadow-color overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left */}
            <div className="max-w-2xl">
              <div className="inline-block border-2 border-shadow-color bg-card px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
                #1 Bank Statement Converter for Indian CAs
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-none mb-6 text-shadow-color uppercase font-sans">
                Bank Statement <br/>
                <span className="text-primary bg-primary/10 px-4 py-1 border-2 border-primary inline-block transform -rotate-1 brutal-shadow my-2">Converter</span>
              </h1>
              <div className="mb-8">
                <TypewriterHeading />
              </div>
              <p className="text-lg text-muted-foreground font-medium mb-10 max-w-lg leading-relaxed">
                Upload any bank statement PDF — HDFC, SBI, ICICI, Axis, Kotak or 200+ banks. Get clean, Tally-ready Excel or CSV in seconds. Built for Indian CAs and accounting teams.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mt-8">
                <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary w-full sm:w-auto justify-center text-lg px-8 py-4 uppercase tracking-wider">
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 inline-block" strokeWidth={3} />
                </a>
              </div>
            </div>

            {/* Hero Right - Anonymous Upload Box */}
            <div className="relative mt-12 lg:mt-0">
              {/* Decorative background element */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-secondary/20 animate-pulse hidden sm:block"></div>
              
              <AnonUpload />
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              Three Steps. <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">Zero Headaches.</span>
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

      {/* ══ 3.5. INTERACTIVE BEFORE VS AFTER PREVIEW ══ */}
      <BeforeAfterPreview />

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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6 leading-tight">
                Built for the <span className="bg-secondary text-white px-2 border-2 border-shadow-color inline-block rotate-2 mt-2 lg:mt-0">messy reality</span> of Indian banks.
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

      {/* ══ 4.5. INTELLIGENT DATA ENRICHMENT ══ */}
      <section id="enrichment" className="py-32 border-b-2 border-shadow-color bg-background">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
               <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
                     Not Just Extraction. <br/><span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2">Intelligent Enrichment.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium max-w-2xl">
                     Parsify goes beyond raw text. It understands the context of every transaction, automatically tagging and categorizing data for your accounting software.
                  </p>
               </div>
               <div className="hidden lg:block text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-shadow-color bg-card text-xs font-bold uppercase tracking-widest brutal-shadow">
                     <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span> 6 ACTIVE MODULES
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
               {/* Feature 1: GST Tagging */}
               <div className="group brutal-card p-0 bg-card hover:-translate-y-1 transition-transform flex flex-col overflow-hidden cursor-crosshair">
                  <div className="h-48 bg-background border-b-2 border-shadow-color relative flex items-center justify-center overflow-hidden p-4">
                     <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                     <div className="relative w-full max-w-[220px] bg-card border-2 border-shadow-color brutal-shadow p-3 font-mono text-[10px] text-muted-foreground">
                        <div>UPI/SWIGGY/12345...</div>
                        <div className="mt-2 text-foreground font-bold">NEFT/AMAZON SELLER...</div>
                        <div className="mt-1 h-5 w-full bg-muted border border-dashed border-shadow-color relative overflow-hidden flex items-center">
                           <div className="absolute top-0 left-0 h-full bg-success/20 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                           <span className="absolute left-2 text-success font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">GSTIN: 27AACB...</span>
                        </div>
                     </div>
                     <div className="absolute top-4 right-4 bg-success text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200 border-2 border-shadow-color brutal-shadow">
                       VERIFIED
                     </div>
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-xl font-black uppercase text-shadow-color mb-3">Auto GST Identification</h4>
                     <p className="text-muted-foreground font-medium text-sm leading-relaxed">Instantly identifies and extracts GSTINs hidden within messy transaction descriptions for seamless reconciliation.</p>
                  </div>
               </div>

               {/* Feature 2: Category Tagging */}
               <div className="group brutal-card p-0 bg-card hover:-translate-y-1 transition-transform flex flex-col overflow-hidden cursor-crosshair">
                  <div className="h-48 bg-background border-b-2 border-shadow-color relative flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                     
                     <div className="relative flex flex-col gap-3 z-10 w-full px-8">
                        <div className="flex items-center justify-between bg-card border-2 border-shadow-color p-2 brutal-shadow transform group-hover:-translate-y-1 transition-transform duration-300">
                           <span className="text-[10px] font-bold font-mono">AWS CLOUD SRV</span>
                           <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 border-2 border-shadow-color brutal-shadow">SOFTWARE</span>
                        </div>
                        <div className="flex items-center justify-between bg-card border-2 border-shadow-color p-2 brutal-shadow transform group-hover:translate-x-2 transition-transform duration-300">
                           <span className="text-[10px] font-bold font-mono">INDIGO AIRLINES</span>
                           <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-secondary text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 border-2 border-shadow-color brutal-shadow">TRAVEL</span>
                        </div>
                        <div className="flex items-center justify-between bg-card border-2 border-shadow-color p-2 brutal-shadow transform group-hover:translate-y-1 transition-transform duration-300">
                           <span className="text-[10px] font-bold font-mono">RELIANCE DIGITAL</span>
                           <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-success text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500 border-2 border-shadow-color brutal-shadow">ASSET</span>
                        </div>
                     </div>
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-xl font-black uppercase text-shadow-color mb-3">Smart Category Tagging</h4>
                     <p className="text-muted-foreground font-medium text-sm leading-relaxed">Automatically assigns the correct accounting ledger categories to transactions using pattern matching and AI.</p>
                  </div>
               </div>

               {/* Feature 3: Party Name Extraction */}
               <div className="group brutal-card p-0 bg-card hover:-translate-y-1 transition-transform flex flex-col overflow-hidden cursor-crosshair">
                  <div className="h-48 bg-background border-b-2 border-shadow-color relative flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                     
                     <div className="relative z-10 w-full px-6 text-center font-mono">
                        <div className="bg-card border-2 border-shadow-color p-3 brutal-shadow inline-block w-full overflow-hidden whitespace-nowrap text-ellipsis">
                           <span className="text-[10px] text-muted-foreground">IMPS-</span>
                           <span className="text-[10px] font-bold text-foreground group-hover:bg-secondary group-hover:text-white transition-colors duration-300 px-1">ZOMATO LTD</span>
                           <span className="text-[10px] text-muted-foreground">-XX1234-NEW DELHI</span>
                        </div>
                        <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                           <div className="bg-card text-foreground px-4 py-2 border-2 border-shadow-color brutal-shadow flex items-center gap-2">
                              <Zap className="w-4 h-4 text-secondary" strokeWidth={3} />
                              <span className="text-sm font-bold uppercase">ZOMATO LTD</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-xl font-black uppercase text-shadow-color mb-3">Party Name Extraction</h4>
                     <p className="text-muted-foreground font-medium text-sm leading-relaxed">Strips out noise, bank jargon, and UTR numbers to give you the clean, exact party name for direct Tally import.</p>
                  </div>
               </div>

               {/* Feature 4: Voucher Type Mapping */}
               <div className="group brutal-card p-0 bg-card hover:-translate-y-1 transition-transform flex flex-col overflow-hidden cursor-crosshair">
                  <div className="h-48 bg-background border-b-2 border-shadow-color relative flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                     <div className="relative z-10 w-full flex flex-col items-center gap-4">
                        <div className="flex gap-4 items-center w-full px-8">
                           <div className="flex-1 p-2 bg-card border-2 border-destructive/20 text-center text-[10px] font-bold text-destructive brutal-shadow">-₹500.00</div>
                           <div className="text-muted-foreground">➔</div>
                           <div className="flex-1 p-2 bg-destructive text-white border-2 border-shadow-color text-center text-[10px] font-bold uppercase brutal-shadow scale-90 group-hover:scale-100 transition-transform">PAYMENT</div>
                        </div>
                        <div className="flex gap-4 items-center w-full px-8">
                           <div className="flex-1 p-2 bg-card border-2 border-success/20 text-center text-[10px] font-bold text-success brutal-shadow">+₹2,000.00</div>
                           <div className="text-muted-foreground">➔</div>
                           <div className="flex-1 p-2 bg-success text-white border-2 border-shadow-color text-center text-[10px] font-bold uppercase brutal-shadow scale-90 group-hover:scale-100 transition-transform delay-100">RECEIPT</div>
                        </div>
                     </div>
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-xl font-black uppercase text-shadow-color mb-3">Tally Voucher Mapping</h4>
                     <p className="text-muted-foreground font-medium text-sm leading-relaxed">Automatically flags transactions as Receipt, Payment, or Contra based on debit/credit flow and context.</p>
                  </div>
               </div>

               {/* Feature 5: Bank Template Detection */}
               <div className="group brutal-card p-0 bg-card hover:-translate-y-1 transition-transform flex flex-col overflow-hidden cursor-crosshair">
                  <div className="h-48 bg-background border-b-2 border-shadow-color relative flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                     <div className="relative z-10 w-full px-8 flex justify-center">
                        <div className="relative w-32 h-24 border-2 border-dashed border-shadow-color flex items-center justify-center bg-card group-hover:border-primary transition-colors brutal-shadow overflow-hidden">
                           <span className="text-muted-foreground font-bold text-[10px] group-hover:opacity-0 transition-opacity">UNKNOWN PDF</span>
                           <div className="absolute inset-0 bg-primary flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-white font-black text-sm mb-1 uppercase tracking-widest">HDFC</span>
                              <span className="bg-white text-primary text-[8px] px-2 py-0.5 font-bold uppercase">DETECTED</span>
                           </div>
                           {/* Scanner line */}
                           <div className="absolute top-0 left-0 w-full h-0.5 bg-white shadow-[0_0_8px_white] -translate-y-full group-hover:translate-y-[96px] transition-all duration-[1200ms] ease-in-out opacity-0 group-hover:opacity-100"></div>
                        </div>
                     </div>
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-xl font-black uppercase text-shadow-color mb-3">Auto Bank Detection</h4>
                     <p className="text-muted-foreground font-medium text-sm leading-relaxed">No manual format selection required. Our engine instantly recognizes layouts from 100+ Indian and global banks.</p>
                  </div>
               </div>

               {/* Feature 6: Smudge Reconstruction */}
               <div className="group brutal-card p-0 bg-card hover:-translate-y-1 transition-transform flex flex-col overflow-hidden cursor-crosshair">
                  <div className="h-48 bg-background border-b-2 border-shadow-color relative flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                     <div className="relative z-10 w-full flex justify-center items-center gap-4 px-4 font-mono">
                        <div className="text-xl font-bold text-muted-foreground blur-[1px] group-hover:blur-[2px] transition-all duration-500 border-2 border-shadow-color bg-card p-2 brutal-shadow">
                           ₹45<span className="opacity-50">.</span>0<span className="opacity-20">0</span>
                        </div>
                        <div className="w-8 h-8 bg-shadow-color flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 brutal-shadow">
                           <Zap className="w-4 h-4 text-success" strokeWidth={3} />
                        </div>
                        <div className="text-xl font-black text-white bg-success p-2 border-2 border-shadow-color opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100 brutal-shadow">
                           ₹45.00
                        </div>
                     </div>
                  </div>
                  <div className="p-8 flex-1">
                     <h4 className="text-xl font-black uppercase text-shadow-color mb-3">AI Text Reconstruction</h4>
                     <p className="text-muted-foreground font-medium text-sm leading-relaxed">Uses contextual computer vision to fix smudged decimals, faded numbers, and broken text in low-quality scans.</p>
                  </div>
                </div>

             </div>
          </div>
       </section>

      {/* ══ 4.6. SEO CONTENT SECTION ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-card bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          {/* 1. Direct Definition */}
          <div className="brutal-card p-8 bg-background mb-16 border-2 border-shadow-color">
            <p className="text-lg text-foreground font-medium leading-relaxed">
              A bank statement converter is a software utility that transforms financial transactions from uneditable PDF files into structured spreadsheet formats like PDF to Excel and PDF to CSV. Parsify is an online tool designed to convert bank statement PDFs into editable XLS, XLSX, and CSV files. It supports thousands of Indian bank statement formats, including State Bank of India (SBI), HDFC Bank, ICICI Bank, and Axis Bank.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* 2. How to Convert Bank Statement PDF to Excel or CSV */}
            <div className="brutal-card p-8 bg-background h-full">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                How to Convert Bank Statement PDF to Excel or CSV
              </h2>
              <ol className="space-y-4 list-decimal list-inside font-medium text-muted-foreground">
                <li className="pl-2"><span className="text-foreground font-bold">Upload</span> your bank statement PDF document to the online converter interface.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Enter</span> the file password if your bank statement PDF is password-protected.</li>
                <li className="pl-2"><span className="text-foreground font-bold">The system</span> automatically parses transaction rows, dates, descriptions, and balances.</li>
                <li className="pl-2"><span className="text-foreground font-bold">Download</span> the extracted financial data in your preferred Excel (XLS, XLSX) or CSV format.</li>
              </ol>
            </div>

            {/* 3. PDF to Excel vs PDF to CSV: Which Should You Choose */}
            <div className="brutal-card p-8 bg-background h-full">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
                PDF to Excel vs PDF to CSV: Which Should You Choose
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Choosing between Excel and CSV depends on your accounting workflow and data structure requirements. Exporting a bank statement to Excel (XLS or XLSX) provides formatted tables with grid lines, making it suitable for manual inspection, formulas, and direct desktop spreadsheet analysis. Conversely, converting a bank statement to CSV produces lightweight, unformatted plain text data ideal for automated database imports, custom scripts, and bulk uploads into Tally Prime or Zoho Books. Financial professionals generally prefer Excel for auditing individual statements and CSV for batch data processing.
              </p>
            </div>
          </div>

          {/* 4. Why Use an Online Bank Statement Converter */}
          <div className="brutal-card p-8 bg-background">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
              Why Use an Online Bank Statement Converter
            </h2>
            <ul className="space-y-4 list-disc list-inside font-medium text-muted-foreground">
              <li className="pl-2">
                <strong className="text-foreground font-bold">High Data Extraction Accuracy:</strong> Automated tabular parsing eliminates human copy-paste errors by preserving debit, credit, date, and running balance alignment.
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-bold">Time Savings Over Manual Entry:</strong> Processing multi-page transaction records takes seconds instead of hours of manual typing into spreadsheets.
              </li>
              <li className="pl-2">
                <strong className="text-foreground font-bold">Support for Password-Protected and Scanned Files:</strong> Built-in optical character recognition (OCR) and password handlers process encrypted, original digital, and scanned image PDFs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 4.8. SUPPORTED BANKS SEO LINKS ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4">
               Supported <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block">Bank Converters</span>
             </h2>
             <p className="text-muted-foreground font-medium max-w-xl mx-auto">
               Instantly convert PDF bank statements from any major Indian bank using our specialized bank statement converter tools.
             </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {BANK_LINKS.map((bank, i) => (
              <Link
                key={i}
                href={`/${bank.slug}`}
                className="px-4 py-2 border-2 border-shadow-color bg-card font-bold text-sm uppercase tracking-wider hover:-translate-y-0.5 hover:translate-x-0.5 brutal-shadow hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all"
              >
                {bank.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <h3 className="text-xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4">
               Global Banks (International)
             </h3>
             <div className="flex flex-wrap justify-center gap-3">
               {globalBanks.slice(0, 15).map((bank) => (
                 <Link
                   key={bank.bankSlug}
                   href={`/converter/${bank.countrySlug}/${bank.bankSlug}`}
                   className="px-3 py-1.5 border-2 border-shadow-color bg-background text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 hover:translate-x-0.5 brutal-shadow hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all"
                 >
                   {bank.bankName}
                 </Link>
               ))}
               <Link href="/converter/usa/chase" className="px-3 py-1.5 border-2 border-primary bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 hover:translate-x-0.5 brutal-shadow hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all">
                 View All Global Banks →
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* ══ 4.9. TESTIMONIALS ══ */}
      <Testimonials />

      {/* ══ 5. PRICING ══ */}
      <Pricing DASHBOARD_URL={DASHBOARD_URL} />
      
      {/* ══ 5.1. FAQ SECTION & JSON-LD SCHEMA ══ */}
      <section id="faq" className="py-32 border-b-2 border-shadow-color bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              Frequently Asked <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Is Parsify free to convert PDF to Excel or CSV?",
                a: "Yes, Parsify provides free conversions for bank statement PDFs to Excel or CSV formats. Users can test document parsing without requiring credit card details. Subscription plans are available for Chartered Accountants and enterprises needing high-volume monthly conversions."
              },
              {
                q: "Is it safe? Does it store my bank statement data?",
                a: "Parsify uses end-to-end encryption to process documents securely. Uploaded bank statements and converted spreadsheet files are automatically purged from servers after processing. Parsify does not store, share, or sell sensitive customer transactional data or account numbers to third parties."
              },
              {
                q: "Which banks are supported for PDF to Excel conversion?",
                a: "Parsify supports thousands of Indian and global banking institutions. Supported Indian banks include State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, Kotak Mahindra Bank, and Punjab National Bank, including savings, current, and credit card statements."
              },
              {
                q: "Can it convert scanned or image-based bank statement PDFs?",
                a: "Yes, Parsify integrates Optical Character Recognition (OCR) technology to extract transactions from scanned document copies and image-based PDFs. The system identifies headers, transaction lines, and numbers from image files and converts them into structured Excel or CSV tables."
              },
              {
                q: "What is the difference between exporting to Excel vs CSV?",
                a: "Excel files (XLS/XLSX) preserve formatting, cell types, and multiple worksheets, making them suitable for manual accounting and analysis in Microsoft Excel. CSV files contain plain, unformatted comma-separated text values, ideal for programmatic imports into Tally, Zoho Books, or custom financial databases."
              },
              {
                q: "Can I convert multiple bank statement PDFs at once (bulk conversion)?",
                a: "Yes, Parsify supports batch processing for multiple bank statement PDFs simultaneously. Users can upload several PDF files at once, and the platform parses each statement, allowing batch export into separate or consolidated Excel or CSV files for efficient accounting workflows."
              }
            ].map((faq, i) => (
              <div key={i} className="brutal-card p-6 bg-background">
                <h3 className="text-lg sm:text-xl font-black uppercase text-shadow-color mb-3 flex items-start gap-2">
                  <span className="text-secondary font-mono font-black">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-muted-foreground font-medium pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQPage JSON-LD Schema injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is Parsify free to convert PDF to Excel or CSV?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Parsify provides free conversions for bank statement PDFs to Excel or CSV formats. Users can test document parsing without requiring credit card details. Subscription plans are available for Chartered Accountants and enterprises needing high-volume monthly conversions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is it safe? Does it store my bank statement data?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Parsify uses end-to-end encryption to process documents securely. Uploaded bank statements and converted spreadsheet files are automatically purged from servers after processing. Parsify does not store, share, or sell sensitive customer transactional data or account numbers to third parties."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which banks are supported for PDF to Excel conversion?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Parsify supports thousands of Indian and global banking institutions. Supported Indian banks include State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, Kotak Mahindra Bank, and Punjab National Bank, including savings, current, and credit card statements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can it convert scanned or image-based bank statement PDFs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Parsify integrates Optical Character Recognition (OCR) technology to extract transactions from scanned document copies and image-based PDFs. The system identifies headers, transaction lines, and numbers from image files and converts them into structured Excel or CSV tables."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between exporting to Excel vs CSV?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Excel files (XLS/XLSX) preserve formatting, cell types, and multiple worksheets, making them suitable for manual accounting and analysis in Microsoft Excel. CSV files contain plain, unformatted comma-separated text values, ideal for programmatic imports into Tally, Zoho Books, or custom financial databases."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I convert multiple bank statement PDFs at once (bulk conversion)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Parsify supports batch processing for multiple bank statement PDFs simultaneously. Users can upload several PDF files at once, and the platform parses each statement, allowing batch export into separate or consolidated Excel or CSV files for efficient accounting workflows."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* ══ 6. CTA ══ */}
      <section className="py-32 bg-primary text-primary-foreground border-b-2 border-shadow-color relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight mb-8 leading-tight">
            Ready to stop <span className="text-secondary bg-white px-2 border-4 border-shadow-color inline-block rotate-2 brutal-shadow mt-2 md:mt-0">typing</span>?
          </h2>
          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto">
            Join 2,400+ finance teams automating their bank statement reconciliation today.
          </p>
          <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary bg-secondary text-white border-shadow-color shadow-[6px_6px_0px_0px_#1a1c1d] hover:shadow-[2px_2px_0px_0px_#1a1c1d] hover:translate-x-1 hover:translate-y-1 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 uppercase tracking-widest w-full sm:w-auto text-center block sm:inline-block">
            Start Converting
          </a>
        </div>
        
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </section>

      {/* ══ 7. STICKY BOTTOM FLOATING CTA ══ */}
      <StickyBottomCTA />

    </main>
  );
}

// Helper icon
function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
