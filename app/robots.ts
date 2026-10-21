import { MetadataRoute } from 'next'

// Private areas that no crawler (search or AI) should fetch.
// NOTE: /_next/ must NOT be blocked — Googlebot needs the CSS/JS to render pages.
const PRIVATE = ['/api/', '/dashboard/', '/admin/']

// Search + AI answer-engine crawlers we explicitly welcome. Listing them by name
// makes intent unambiguous; each group repeats the private disallows because a
// named group overrides the `*` group for that bot.
const AI_AND_SEARCH_BOTS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'meta-externalagent',
  'CCBot',
  'DuckAssistBot',
  'YouBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      { userAgent: AI_AND_SEARCH_BOTS, allow: '/', disallow: PRIVATE },
    ],
    sitemap: 'https://parsify.in/sitemap.xml',
    host: 'https://parsify.in',
  }
}
