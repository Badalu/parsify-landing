import React from "react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Parsify saves my team at least 5 hours every week. We used to manually copy-paste HDFC and SBI statements into Tally. Now, the AI does it perfectly in seconds. Zero errors so far.",
      name: "CA Ramesh K.",
      role: "Partner, RK Associates",
      stars: 5,
    },
    {
      quote: "The ability to auto-tag GST and resolve merged cells from bad PDF scans is a lifesaver. This is the only statement converter we trust for our client audits.",
      name: "Sneha Patel",
      role: "Senior Accountant",
      stars: 5,
    },
    {
      quote: "Finally, a tool built for the messy reality of Indian banks. The voucher mapping for Tally Prime works flawlessly. Highly recommend for any CA firm looking to scale.",
      name: "Vikram Sharma",
      role: "Finance Director",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 border-b-2 border-shadow-color bg-background bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-shadow-color font-sans mb-4 leading-tight">
            Trusted by <span className="text-primary bg-primary/10 px-2 border-2 border-primary inline-block mt-2 sm:mt-0">Finance Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            See what Chartered Accountants and finance teams across India are saying about Parsify.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="brutal-card p-8 bg-card hover:-translate-y-2 transition-transform duration-300 relative flex flex-col">
              <div className="absolute top-4 right-4 text-shadow-color/10">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed mb-8 flex-1 relative z-10 italic">
                "{t.quote}"
              </p>
              <div className="mt-auto border-t-2 border-shadow-color pt-6 flex items-center justify-between">
                <div>
                  <div className="font-black uppercase text-shadow-color">{t.name}</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
