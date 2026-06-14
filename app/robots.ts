import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
    ],
    sitemap: 'https://parsify.in/sitemap.xml',
    host: 'https://parsify.in',
  }
}
