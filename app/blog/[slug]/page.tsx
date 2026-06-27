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

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} /> Back to blog
        </Link>

        <article className="brutal-card p-8 md:p-12 bg-card relative">
          <header>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              {post.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t: string) => (
                    <span key={t} className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary brutal-shadow">
                      {t}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary brutal-shadow">
                  Blog Post
                </div>
              )}
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <Calendar className="h-4 w-4" strokeWidth={3} />
                {post.published_at ? new Date(post.published_at).toLocaleDateString() : ""}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-6 text-shadow-color uppercase font-sans">
              {post.title}
            </h1>
            
            {post.excerpt ? (
              <p className="text-xl text-muted-foreground font-medium mb-10 leading-relaxed">
                {post.excerpt}
              </p>
            ) : null}
          </header>

          {post.cover_image ? (
            <img
              src={post.cover_image}
              alt={post.title}
              className="mt-4 mb-10 w-full border-2 border-shadow-color brutal-shadow object-cover"
            />
          ) : null}

          <div className="prose prose-lg max-w-none text-muted-foreground font-medium prose-headings:font-black prose-headings:uppercase prose-headings:text-shadow-color prose-a:text-primary prose-a:font-bold prose-strong:text-foreground prose-strong:font-black space-y-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          <AuthorBio />
        </article>
      </div>
    </main>
  );
}
