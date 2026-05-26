import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

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
        "author": { "@type": "Organization", "name": "StatementConvert" }
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
    <div className="min-h-screen bg-background py-12">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground font-sans transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>

        <header className="mt-6">
          {post.tags?.length ? (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {post.tags.map((t: string) => (
                <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground font-sans">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">{post.title}</h1>
          {post.excerpt ? (
            <p className="mt-4 text-lg text-muted-foreground font-sans">{post.excerpt}</p>
          ) : null}
          <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
            <Calendar className="h-3 w-3" />
            {post.published_at ? new Date(post.published_at).toLocaleDateString() : ""}
          </p>
        </header>

        {post.cover_image ? (
          <img
            src={post.cover_image}
            alt={post.title}
            className="mt-8 aspect-video w-full rounded-2xl object-cover shadow-sm"
          />
        ) : null}

        <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none prose-headings:font-serif prose-a:text-primary leading-relaxed font-sans">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
