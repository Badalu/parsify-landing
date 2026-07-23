import React from "react";
import { Building2, ShieldCheck, Cpu } from "lucide-react";

export const metadata = {
  title: "About Us — Parsify",
  description: "Learn about Parsify's mission to eliminate manual bank statement data entry for Indian accountants, CAs and finance teams.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-24 font-sans bg-grid-pattern">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-20 brutal-card p-12 bg-card">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-6 brutal-shadow">
            Our Mission
          </div>
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight text-shadow-color font-sans mb-6">
            Streamlining <span className="bg-secondary text-white px-2 border-2 border-shadow-color inline-block -rotate-1 brutal-shadow">Data Entry</span>
          </h1>
          <p className="text-xl font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-8">
            Parsify was born out of a simple frustration: financial professionals wasting thousands of hours copying data from PDF statements into Excel. We built a layout-aware AI engine to automate it once and for all.
          </p>
        </div>

        <div className="mt-16 space-y-16">
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
              <div key={v.title} className="brutal-card p-8 bg-background flex flex-col items-center text-center">
                <div className="grid h-16 w-16 place-items-center bg-card border-2 border-shadow-color brutal-shadow text-primary mb-6">
                  <v.icon className="h-8 w-8 text-primary" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-widest text-shadow-color mb-4">{v.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          <article className="brutal-card p-12 bg-card text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-black uppercase text-shadow-color mb-8 pb-4 border-b-2 border-shadow-color">Why CAs across India trust Parsify</h2>
            <div className="text-lg font-medium space-y-6">
              <p>
                Every month, tax professionals, accountants, and business owners receive thousands of bank statements. Most statements are locked in secure PDF documents. In the past, matching transaction descriptions, splitting out GST calculations, and cleaning currency values took hours of tedious, error-prone manual labor.
              </p>
              <p>
                Parsify automates this entire pipeline. Our backend uses layout extraction tools to preserve the visual flow of PDF pages, and uses Google Gemini models to extract structured dates, descriptions, categories, and tax fields. The result is a clean, standard, highly formatted Excel sheet that you can hand straight to your auditor or upload to software like Tally, Zoho Books, or QuickBooks.
              </p>
            </div>
          </article>

          {/* EEAT: Author & Team Section */}
          <div className="mt-24 mb-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black uppercase text-shadow-color">Meet the Experts Behind Parsify</h2>
              <p className="text-muted-foreground font-medium mt-4 max-w-xl mx-auto">
                Built by a team of finance professionals and AI engineers to solve real accounting problems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="brutal-card p-8 bg-card flex gap-6">
                <div className="w-24 h-24 bg-background border-2 border-shadow-color brutal-shadow shrink-0 flex items-center justify-center">
                  <span className="text-3xl font-black text-muted-foreground">RS</span>
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase text-shadow-color mb-1">CA Rahul Sharma</h3>
                  <div className="text-sm font-bold text-success uppercase tracking-wider mb-4">Head of Finance & Compliance</div>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    With over 10 years of experience in auditing and bank reconciliation, Rahul ensures that Parsify's outputs perfectly match Tally Prime standards and Indian accounting regulations.
                  </p>
                </div>
              </div>

              <div className="brutal-card p-8 bg-card flex gap-6">
                <div className="w-24 h-24 bg-background border-2 border-shadow-color brutal-shadow shrink-0 flex items-center justify-center">
                  <span className="text-3xl font-black text-muted-foreground">BH</span>
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase text-shadow-color mb-1">Badal Hari</h3>
                  <div className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Lead AI Engineer</div>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                    Badal leads the AI pipeline, developing the layout-aware extraction models that allow Parsify to achieve 99.3% accuracy on even the lowest quality PDF scans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
