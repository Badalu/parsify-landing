import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const revalidate = 60; // Revalidate blogs every minute for fast updates

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image: string | null;
  tags: string[];
  published_at: string | null;
}

export const metadata = {
  title: "Blog — StatementConvert",
  description: "Guides, tips and walk-throughs on converting bank statement PDFs, GST tagging, and Indian accounting workflows.",
};

export default async function BlogIndex() {
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, cover_image, tags, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });

  const blogPosts: BlogPost[] = posts || [];

  return (
    <div className="min-h-screen bg-background py-16 sm:py-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl sm:text-5xl">Blog</h1>
          <p className="mt-4 text-muted-foreground font-sans">
            Tutorials, tips and updates on bank statement workflows for accountants and businesses.
          </p>
        </header>

        {blogPosts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground font-sans">
            No posts yet. Check back soon.
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {p.cover_image ? (
                  <img
                    src={p.cover_image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                ) : (
                  <div className="aspect-video w-full bg-gradient-to-br from-primary/20 to-accent" />
                )}
                <div className="flex flex-1 flex-col p-5">
                  {p.tags?.length ? (
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground font-sans">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <h2 className="font-serif text-xl leading-tight group-hover:text-primary transition-colors">{p.title}</h2>
                  {p.excerpt ? (
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground font-sans">{p.excerpt}</p>
                  ) : null}
                  <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {p.published_at ? new Date(p.published_at).toLocaleDateString() : "Draft"}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-primary">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
