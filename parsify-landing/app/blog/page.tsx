import React from 'react';
import type { Metadata } from 'next';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Parsify',
  description: 'Latest news, guides, and insights from the Parsify team.',
};

export default function BlogPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-shadow-color bg-card px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-6 brutal-shadow">
            Updates & Insights
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none text-shadow-color uppercase font-sans">
            The <span className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block transform -rotate-1">Parsify</span> Blog
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "How to Import PDF Bank Statement in Tally Prime",
              desc: "Learn the exact steps to convert and import your PDF bank statements directly into Tally Prime.",
              date: "Oct 24, 2023",
              author: "Team Parsify",
              tag: "Tally Guides",
              href: "/blog/how-to-import-pdf-bank-statement-in-tally-prime"
            },
            {
              title: "How to Convert Scanned PDF Bank Statement to Excel",
              desc: "A comprehensive guide on using OCR technology to convert scanned image-based PDF statements.",
              date: "Oct 20, 2023",
              author: "Team Parsify",
              tag: "Conversion",
              href: "/blog/how-to-convert-scanned-pdf-bank-statement-to-excel"
            },
            {
              title: "Bank Statement Reconciliation Process in Tally",
              desc: "Understand the end-to-end bank statement reconciliation process in Tally Prime.",
              date: "Oct 15, 2023",
              author: "Team Parsify",
              tag: "Accounting",
              href: "/blog/bank-statement-reconciliation-process-in-tally"
            },
            {
              title: "Shortcut to Enter Bank Statement in Tally",
              desc: "Discover the quickest shortcuts to enter bank statements into Tally Prime without manual typing.",
              date: "Oct 10, 2023",
              author: "Team Parsify",
              tag: "Tally Tips",
              href: "/blog/shortcut-to-enter-bank-statement-in-tally"
            },
            {
              title: "How to Format Bank Statement in Excel for Tally",
              desc: "Learn the exact Excel column formats required to successfully import into Tally Prime.",
              date: "Oct 05, 2023",
              author: "Team Parsify",
              tag: "Formatting",
              href: "/blog/how-to-format-bank-statement-in-excel-for-tally"
            }
          ].map((post, i) => (
            <a key={i} href={post.href} className="brutal-card p-6 bg-card flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-primary text-white text-xs font-bold uppercase px-2 py-1 border border-shadow-color">{post.tag}</span>
              </div>
              <h2 className="text-2xl font-black text-shadow-color leading-tight mb-4">{post.title}</h2>
              <p className="text-muted-foreground font-medium mb-8 flex-1">{post.desc}</p>
              
              <div className="pt-4 border-t-2 border-shadow-color flex items-center justify-between text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</div>
                <div className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
