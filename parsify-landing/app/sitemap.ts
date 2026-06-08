import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://parsify.in'

  const staticRoutes = [
    '', 
    '/about', 
    '/contact', 
    '/pricing', 
    '/privacy', 
    '/terms', 
    '/refund',
    '/blog',
    '/blog/how-to-import-pdf-bank-statement-in-tally-prime',
    '/blog/how-to-convert-scanned-pdf-bank-statement-to-excel',
    '/blog/bank-statement-reconciliation-process-in-tally',
    '/blog/shortcut-to-enter-bank-statement-in-tally',
    '/blog/how-to-format-bank-statement-in-excel-for-tally'
  ]

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return routes
}
