import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

// ─── Bank-specific landing pages for programmatic SEO ────────────────────────
const BANK_PAGES = [
  'hdfc-bank-statement-converter',
  'sbi-bank-statement-converter',
  'icici-bank-statement-converter',
  'axis-bank-statement-converter',
  'kotak-bank-statement-converter',
  'pnb-bank-statement-converter',
  'bank-of-baroda-statement-converter',
  'indusind-bank-statement-converter',
  'yes-bank-statement-converter',
  'canara-bank-statement-converter',
  'idbi-bank-statement-converter',
  'union-bank-statement-converter',
  'bob-bank-statement-converter',
  'indian-bank-statement-converter',
  'federal-bank-statement-converter',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://parsify.in'
  const now = new Date()

  // ── Static pages ──
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // ── Blog pages ──
  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-import-pdf-bank-statement-in-tally-prime`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-convert-scanned-pdf-bank-statement-to-excel`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/bank-statement-reconciliation-process-in-tally`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/shortcut-to-enter-bank-statement-in-tally`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-format-bank-statement-in-excel-for-tally`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // ── Bank-specific landing pages ──
  const bankRoutes: MetadataRoute.Sitemap = BANK_PAGES.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // ── Dynamic Blog pages from Supabase ──
  const { data: dynamicPosts } = await supabase
    .from("blog_posts")
    .select("slug, updated_at")
    .eq("published", true);

  const dynamicBlogRoutes: MetadataRoute.Sitemap = (dynamicPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated_at ? new Date(post.updated_at) : now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...dynamicBlogRoutes, ...bankRoutes]
}
