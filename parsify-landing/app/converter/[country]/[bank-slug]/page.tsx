import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, FileText, Zap, Shield, Download, Check } from 'lucide-react';
import { AnonUpload } from '@/app/components/AnonUpload';
import globalBanks from '@/data/global-banks.json';

interface PageProps {
  params: Promise<{
    country: string;
    'bank-slug': string;
  }>;
}

// Generate static params to statically build these pages for extreme speed
export async function generateStaticParams() {
  return globalBanks.map((bank) => ({
    country: bank.countrySlug,
    'bank-slug': bank.bankSlug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, 'bank-slug': bankSlug } = await params;
  
  const bankData = globalBanks.find(
    (b) => b.countrySlug === country && b.bankSlug === bankSlug
  );

  if (!bankData) {
    return {
      title: 'Bank Not Found',
    };
  }

  const { bankName, countryName } = bankData;

  const title = `${bankName} Bank Statement to Excel Converter — Free | ${countryName} | Parsify`;
  const description = `Convert ${bankName} bank statement PDF to Excel or CSV instantly. Parsify is the #1 AI converter for ${countryName} banks. Auto GST tagging, Tally-ready output. 99.3% accuracy.`;
  const url = `https://parsify.in/converter/${country}/${bankSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    }
  };
}

export default async function ProgrammaticBankConverterPage({ params }: PageProps) {
  const { country, 'bank-slug': bankSlug } = await params;
  
  const bankData = globalBanks.find(
    (b) => b.countrySlug === country && b.bankSlug === bankSlug
  );

  if (!bankData) {
    notFound();
  }

  const { bankName, countryName } = bankData;
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  // Dynamic FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How to convert ${bankName} bank statement PDF to Excel?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Go to Parsify.in, upload your ${bankName} bank statement PDF, and download a clean Excel file in seconds. Parsify auto-detects all ${bankName} statement formats.`
        }
      },
      {
        "@type": "Question",
        "name": `Does Parsify support password-protected ${bankName} statements?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! Just upload the PDF and enter the password when prompted. Parsify handles password-protected ${bankName} statements securely and extracts all transactions accurately.`
        }
      },
      {
        "@type": "Question",
        "name": `Is the ${bankName} statement converter free?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can convert 1 statement per day completely free without signing up. Create a free account for 2 statements daily."
        }
      }
    ]
  };

  // Dynamic SoftwareApplication Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `Parsify — ${bankName} Bank Statement Converter`,
    "operatingSystem": "Web (All platforms)",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Accounting Software",
    "description": `Convert PDF bank statements from ${bankName} (${countryName}) to Excel/CSV automatically. Handles merged cells and passwords.`,
    "screenshot": "https://parsify.in/og-image.png",
    "featureList": "PDF to Excel, PDF to CSV, Auto bank detection, GST tagging, Transaction category tagging",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const BANK_FORMATS = [
    { name: `${bankName} Savings Account`, desc: 'Standard savings account statements' },
    { name: `${bankName} Current Account`, desc: 'Business current account statements with high transaction volumes' },
    { name: `${bankName} Credit Card`, desc: 'Credit card statements with merchant details' },
  ];

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      
      {/* ══ HERO ══ */}
      <section className="relative pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-20 border-b-2 border-shadow-color overflow-hidden bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left */}
            <div className="max-w-2xl">
              <div className="inline-block border-2 border-shadow-color bg-card px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
                {countryName} Bank Statement Converter
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none mb-6 text-shadow-color uppercase font-sans">
                Convert {bankName}<br/>
                <span className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block transform -rotate-1 mt-2">Bank Statement</span><br/>
                to Excel.
              </h1>
              <p className="text-lg text-muted-foreground font-medium mb-10 max-w-lg leading-relaxed">
                Upload your {bankName} bank statement PDF — savings, current, or credit card. Get a clean, structured Excel or CSV file in under 5 seconds. Used by top accounting firms in {countryName}.
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary w-full sm:w-auto justify-center text-lg px-8 py-4 uppercase tracking-wider">
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 inline-block" strokeWidth={3} />
                </a>
              </div>
            </div>

            {/* Hero Right - Upload */}
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-secondary/20 animate-pulse hidden sm:block"></div>
              <AnonUpload />
            </div>
          </div>
        </div>

        {/* JSON-LD for FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* JSON-LD for Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="border-b-2 border-shadow-color bg-card">
        <div className="max-w-7xl mx-auto flex flex-wrap lg:grid lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-shadow-color">
          {[
            { num: '2,400+', label: 'Accounting Firms' },
            { num: '99.3%', label: `Accuracy on ${bankName}` },
            { num: '<5s', label: 'Average Parse Time' },
            { num: '0', label: 'Data Stored' },
          ].map((stat, i) => (
            <div key={i} className="p-8 w-full text-center hover:bg-background transition-colors cursor-default">
              <div className="text-4xl font-black text-primary mb-2 font-sans">{stat.num}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SUPPORTED FORMATS ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              All {bankName} <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">Formats Supported</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Parsify auto-detects every {bankName} statement layout in {countryName}. No manual template selection needed — just upload and download.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BANK_FORMATS.map((format, i) => (
              <div key={i} className="brutal-card p-6 bg-card hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-primary/10 border-2 border-primary/20">
                    <FileText className="w-5 h-5 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black uppercase text-shadow-color">{format.name}</h3>
                </div>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-card bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              Convert {bankName} Statement <span className="text-secondary inline-block mt-2 sm:mt-0">in 3 Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Upload PDF',
                desc: `Drag and drop your ${bankName} bank statement. Password-protected PDFs are handled automatically.`,
                icon: FileText,
              },
              {
                num: '02',
                title: 'AI Parses Everything',
                desc: 'Our engine reads every transaction row, resolves merged cells and multi-page formatting instantly.',
                icon: Zap,
              },
              {
                num: '03',
                title: 'Download Excel/CSV',
                desc: 'Get a perfectly structured spreadsheet with Date, Description, Debit, Credit, and Balance columns.',
                icon: Download,
              },
            ].map((step, i) => (
              <div key={i} className="brutal-card p-8 bg-background hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-black text-shadow-color/20">{step.num}</span>
                  <div className="p-3 bg-card border-2 border-shadow-color brutal-shadow">
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

      {/* ══ WHY PARSIFY ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6 leading-tight">
                Why Accounting Firms Choose Parsify for <span className="bg-secondary text-white px-2 border-2 border-shadow-color inline-block rotate-1 mt-2 lg:mt-0">{bankName}</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium mb-10">
                Bank statements are notoriously difficult to parse — merged header rows, inconsistent date formats, multi-page transaction tables that break mid-row. Parsify's AI engine was built to handle exactly these edge cases for {countryName} banks.
              </p>
              <ul className="space-y-4">
                {[
                  `Auto-detects all ${bankName} statement formats`,
                  `Handles ${bankName} password protection securely`,
                  'Resolves merged cells and split transaction rows',
                  'Extracts clean party names from verbose descriptions',
                  `99.3% accuracy across all ${countryName} bank statements`,
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-shadow-color">
                    <Check className="w-6 h-6 text-secondary shrink-0" strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="brutal-card p-8 bg-card relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <Shield className="w-10 h-10 text-success" strokeWidth={2.5} />
                  <h3 className="text-2xl font-black uppercase text-shadow-color">Zero Data Retention</h3>
                </div>
                <p className="text-muted-foreground font-medium mb-6">
                  Your {bankName} bank statement is processed in-memory and permanently deleted the moment your conversion is complete. We never store your financial data — ever.
                </p>
                <div className="inline-flex items-center gap-2 bg-success/10 text-success border-2 border-success px-4 py-2 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" strokeWidth={3} /> Bank-Grade Privacy
                </div>
              </div>
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 border-2 border-shadow-color z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-24 border-b-2 border-shadow-color bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
              {bankName} Statement <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">FAQ</span>
            </h2>
          </div>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="brutal-card p-6 bg-background">
                <h3 className="text-lg sm:text-xl font-black uppercase text-shadow-color mb-3 flex items-start gap-2">
                  <span className="text-secondary font-mono font-black">Q.</span>
                  {faq.name}
                </h3>
                <p className="text-muted-foreground font-medium pl-6 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OTHER GLOBAL BANKS CTA ══ */}
      <section className="py-16 border-b-2 border-shadow-color bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-shadow-color font-sans mb-8 text-center">
            Also supports <span className="text-primary">Global Banks</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {globalBanks.slice(0, 15).map((bank) => (
              <Link key={bank.bankSlug} href={`/converter/${bank.countrySlug}/${bank.bankSlug}`} className="border-2 border-shadow-color bg-card px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors brutal-shadow">
                {bank.bankName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-24 bg-primary text-primary-foreground border-b-2 border-shadow-color relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-8 leading-tight">
            Convert your {bankName} <span className="text-secondary bg-white px-2 border-4 border-shadow-color inline-block rotate-2 brutal-shadow mt-2 md:mt-0">statement now</span>
          </h2>
          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto">
            Join thousands of accounting firms worldwide using Parsify to automate reconciliation.
          </p>
          <a href={`${DASHBOARD_URL}/dashboard/convert`} className="brutal-btn-primary bg-secondary text-white border-shadow-color shadow-[6px_6px_0px_0px_#1a1c1d] hover:shadow-[2px_2px_0px_0px_#1a1c1d] hover:translate-x-1 hover:translate-y-1 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 uppercase tracking-widest w-full sm:w-auto text-center block sm:inline-block">
            Start Converting Free
          </a>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </section>

    </main>
  );
}
