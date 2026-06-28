import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { AuthorBio } from "@/app/components/AuthorBio";

export const revalidate = 60; // Revalidate blogs every minute

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic metadata for search engines and social cards
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, excerpt, cover_image, seo_title, seo_description")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const title = post.seo_title || `${post.title} — StatementConvert Blog`;
  const description = post.seo_description || post.excerpt || post.title;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://parsify.in/blog/${slug}`,
      images: post.cover_image ? [{ url: post.cover_image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, content, cover_image, tags, published_at, updated_at")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !post) {
    notFound();
  }

  // Schema Markup (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://parsify.in/blog/${slug}#article`,
        "headline": post.title,
        "description": post.excerpt || post.title,
        "image": post.cover_image || undefined,
        "datePublished": post.published_at,
        "dateModified": post.updated_at,
        "author": { "@type": "Person", "name": "CA Rahul Sharma" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://parsify.in" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://parsify.in/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://parsify.in/blog/${slug}` }
        ]
      }
    ]
  };

  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="brutal-card p-5 md:p-12 bg-card relative">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
            {post.tags?.length ? post.tags[0] : "Blog Post"}
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-10 text-shadow-color uppercase font-sans">
            {post.title.includes('*') ? (
              post.title.split('*').map((part: string, i: number) => (
                i % 2 === 1 ? <span key={i} className="text-secondary bg-secondary/10 px-2 border-2 border-secondary inline-block transform -rotate-1 mt-2 md:mt-0">{part}</span> : part
              ))
            ) : (
              post.title
            )}
          </h1>
            


          <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-6">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({node, ...props}) => <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-6 mb-2 text-shadow-color" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2 mt-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 space-y-2 mt-4" {...props} />,
                a: ({node, ...props}) => <a className="text-primary hover:underline font-bold" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                img: ({node, ...props}) => <img className="my-8 w-full border-4 border-shadow-color brutal-shadow rounded-sm bg-background object-cover" {...props} />
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <hr className="my-12 border-2 border-shadow-color" />
          
          <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">Try It Now: Direct Demo</h2>
          <p className="text-muted-foreground font-medium mb-6">
            Upload your bank statement below to instantly extract data and export it as Tally XML. No credit card required.
          </p>
          
          {/* Embedded Parsify Demo */}
          <div className="w-full my-8 border-4 border-shadow-color brutal-shadow rounded-sm overflow-hidden bg-background">
            <iframe 
              src={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.parsify.in"}/dashboard/convert?embed=true`} 
              className="w-full h-[600px] md:h-[700px] border-none"
              title="Parsify Bank Statement Converter Demo"
              allow="clipboard-read; clipboard-write"
            />
          </div>

          <AuthorBio />
        </div>
      </div>

      {/* ══ OTHER BANKS CTA ══ */}
      <section className="py-16 mt-16 border-t-2 border-shadow-color bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-black uppercase tracking-tight text-shadow-color font-sans mb-8 text-center">
            Also supports <span className="text-primary">200+ other banks</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'SBI', href: '/sbi-bank-statement-converter' },
              { name: 'ICICI', href: '/icici-bank-statement-converter' },
              { name: 'Axis', href: '/axis-bank-statement-converter' },
              { name: 'Kotak', href: '/kotak-bank-statement-converter' },
              { name: 'PNB', href: '/pnb-bank-statement-converter' },
              { name: 'Bank of Baroda', href: '/bank-of-baroda-statement-converter' },
              { name: 'IndusInd', href: '/indusind-bank-statement-converter' },
              { name: 'Yes Bank', href: '/yes-bank-statement-converter' },
              { name: 'Canara Bank', href: '/canara-bank-statement-converter' },
            ].map((bank) => (
              <Link key={bank.name} href={bank.href} className="border-2 border-shadow-color bg-card px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors brutal-shadow">
                {bank.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
