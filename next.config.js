const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Duplicate of /bank-of-baroda-statement-converter — consolidate ranking signals
      {
        source: '/bob-bank-statement-converter',
        destination: '/bank-of-baroda-statement-converter',
        permanent: true,
      },
      // Legacy broken canonicals that may already be in Google's index
      ...[
        'yes-bank', 'union-bank', 'idbi-bank', 'canara-bank',
        'federal-bank', 'indian-bank', 'bank-of-baroda',
      ].map((b) => ({
        source: `/${b}-bank-statement-converter`,
        destination: `/${b}-statement-converter`,
        permanent: true,
      })),
    ];
  },
};

module.exports = nextConfig;
