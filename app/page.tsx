import React from 'react';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  metadataBase: new URL('https://parsify.in'),
  title: {
    default: 'Free Bank Statement Converter — PDF to Excel & CSV | Parsify',
    template: '%s | Parsify',
  },
  description: 'Convert PDF bank statements to Excel or CSV instantly. Free, secure, and supports all major Indian banks including SBI, HDFC, ICICI, Axis, and Kotak.',
  keywords: [
    'bank statement converter',
    'bank statement to excel',
    'pdf to csv',
    'SBI statement converter',
    'HDFC statement converter',
    'ICICI statement converter',
    'Axis statement converter',
    'Kotak statement converter',
    'bank statement to csv',
    'pdf bank statement to excel',
    'free bank statement converter',
    'convert bank statement to excel free',
    'online bank statement converter',
    'bank statement parsing',
    'indian bank statement converter'
  ],
  authors: [{ name: 'Parsify' }],
  creator: 'Parsify',
  publisher: 'Parsify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://parsify.in',
  },
  openGraph: {
    title: 'Free Bank Statement Converter — PDF to Excel & CSV | Parsify',
    description: 'Convert PDF bank statements to Excel or CSV instantly. Free, secure, and supports all major Indian banks including SBI, HDFC, ICICI, Axis, and Kotak.',
    url: 'https://parsify.in',
    siteName: 'Parsify',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Parsify - Free Bank Statement Converter',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Bank Statement Converter — PDF to Excel & CSV | Parsify',
    description: 'Convert PDF bank statements to Excel or CSV instantly. Free, secure, and supports all major Indian banks.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />

      <style dangerouslySetInnerHTML={{ __html: `
        body > nav, body > header, .Navbar, body > footer { display: none !important; }

        /* ═══════════════════════════════════════
           PARSIFY — EDITORIAL DESIGN SYSTEM
           ═══════════════════════════════════════ */

        :root {
          --bg:        #0E0C09;
          --bg2:       #141210;
          --bg3:       #1C1914;
          --amber:     #E8913A;
          --amber2:    #C97428;
          --amber-dim: rgba(232,145,58,0.08);
          --cream:     #F0E8D8;
          --cream2:    #C8B99A;
          --cream3:    #7A6E5F;
          --border:    rgba(200,185,154,0.10);
          --border2:   rgba(200,185,154,0.18);
        }

        /* Paper noise texture filter */
        .noise-layer {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          background-color: var(--bg);
          color: var(--cream);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          line-height: 1.65;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .parsify-wrap {
          background-color: var(--bg);
        }

        /* ── TYPOGRAPHY ── */
        .f-fraunces { font-family: 'Fraunces', serif; }
        .f-mono     { font-family: 'JetBrains Mono', monospace; }

        .eyebrow-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--amber);
          border: 1px solid var(--border2);
          padding: 5px 12px;
          border-radius: 2px;
          margin-bottom: 28px;
        }

        /* ── LAYOUT ── */
        .wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 56px;
        }

        @media (max-width: 900px) {
          .wrap { padding: 0 24px; }
        }

        .section-pad { padding: 100px 0; }

        hr.divider {
          border: none;
          border-top: 1px solid var(--border);
          margin: 0;
        }

        /* ── SCROLL REVEAL ── */
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        /* ══════════════════════════════════════
           1. STICKY NAV
           ══════════════════════════════════════ */
        #p-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: background 0.3s ease, padding 0.3s ease;
        }
        #p-nav.scrolled {
          background: rgba(14,12,9,0.82);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border);
          padding: 14px 0;
        }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 900px) {
          .nav-inner { padding: 0 24px; }
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--cream);
          font-family: 'Fraunces', serif;
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.02em;
        }
        .nav-logo-mark {
          width: 32px; height: 32px;
          flex-shrink: 0;
        }
        .nav-links-row {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }
        .nav-links-row a {
          text-decoration: none;
          color: var(--cream2);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .nav-links-row a:hover { color: var(--cream); }
        .btn-start {
          background: var(--amber);
          color: #0E0C09;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          padding: 9px 20px;
          border-radius: 4px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .btn-start:hover {
          background: var(--amber2);
          transform: translateY(-1px);
        }
        @media (max-width: 700px) {
          .nav-links-row { display: none; }
        }

        /* ══════════════════════════════════════
           2. HERO
           ══════════════════════════════════════ */
        .hero-section {
          padding-top: 140px;
          padding-bottom: 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 60px; }
        }
        .hero-h1 {
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: clamp(44px, 5.5vw, 72px);
          line-height: 1.08;
          letter-spacing: -0.028em;
          color: var(--cream);
          margin-bottom: 24px;
        }
        .hero-h1 em {
          font-style: italic;
          color: var(--amber);
        }
        .hero-sub {
          font-size: 16px;
          font-weight: 300;
          color: var(--cream2);
          max-width: 420px;
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--amber);
          color: #0E0C09;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 15px;
          padding: 13px 24px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-hero-primary:hover {
          background: var(--amber2);
          transform: translateY(-1px);
        }
        .btn-arrow-box {
          width: 28px; height: 28px;
          background: rgba(0,0,0,0.15);
          display: flex; align-items: center; justify-content: center;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .hero-meta {
          font-size: 13px;
          color: var(--cream3);
          letter-spacing: 0.03em;
        }
        .hero-meta span { margin: 0 8px; opacity: 0.5; }

        /* Hero SVG illustration */
        .hero-illustration {
          position: relative;
          animation: float-hero 4s ease-in-out infinite alternate;
        }
        @keyframes float-hero {
          from { transform: translateY(0px); }
          to   { transform: translateY(-6px); }
        }

        /* Draw-on arrow */
        .arrow-draw {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw-arrow 2s ease forwards 0.5s;
        }
        @keyframes draw-arrow {
          to { stroke-dashoffset: 0; }
        }

        /* Processing dots pulse */
        .dot-pulse { animation: dot-pulse 1.6s ease-in-out infinite; }
        .dot-pulse-2 { animation: dot-pulse 1.6s ease-in-out infinite 0.5s; }
        .dot-pulse-3 { animation: dot-pulse 1.6s ease-in-out infinite 1s; }
        @keyframes dot-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* ══════════════════════════════════════
           3. STAT STRIP
           ══════════════════════════════════════ */
        .stat-strip {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .stat-strip-inner {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 56px;
        }
        @media (max-width: 900px) {
          .stat-strip-inner {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 24px;
          }
        }
        @media (max-width: 560px) {
          .stat-strip-inner { grid-template-columns: repeat(2, 1fr); }
        }
        .stat-item-box {
          padding: 40px 32px;
          border-right: 1px solid var(--border);
          text-align: center;
        }
        .stat-item-box:last-child { border-right: none; }
        .stat-number {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 36px;
          color: var(--amber);
          line-height: 1;
          margin-bottom: 8px;
          display: block;
        }
        .stat-label {
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--cream3);
        }

        /* ══════════════════════════════════════
           4. HOW IT WORKS
           ══════════════════════════════════════ */
        .hiw-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hiw-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        .section-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--amber);
          margin-bottom: 20px;
        }
        .section-h2 {
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: clamp(32px, 3.5vw, 54px);
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--cream);
          margin-bottom: 48px;
        }
        .section-h2 em { font-style: italic; color: var(--amber); }
        .hiw-steps { display: flex; flex-direction: column; }
        .hiw-step {
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 20px;
          align-items: start;
        }
        .hiw-step:last-child { border-bottom: none; }
        .step-numeral {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 16px;
          font-weight: 300;
          color: var(--amber);
          opacity: 0.7;
          padding-top: 2px;
        }
        .step-title {
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: 22px;
          color: var(--cream);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .step-desc {
          font-size: 14px;
          font-weight: 300;
          color: var(--cream2);
          line-height: 1.7;
        }

        /* ── Connecting path dot animation ── */
        .path-dot {
          animation: path-travel 3s linear infinite;
        }
        .path-dot-2 { animation-delay: 1s; }
        .path-dot-3 { animation-delay: 2s; }
        @keyframes path-travel {
          0%   { opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { opacity: 0; }
        }
        .gear-spin { animation: gear-spin 3s linear infinite; transform-origin: center; }
        @keyframes gear-spin { to { transform: rotate(360deg); } }

        /* ══════════════════════════════════════
           5. FEATURES
           ══════════════════════════════════════ */
        .feature-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          padding: 72px 0;
          border-top: 1px solid var(--border);
        }
        @media (max-width: 900px) {
          .feature-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .feature-row.reverse-mobile .feat-art { order: -1; }
        }
        .feature-row:first-child { border-top: none; padding-top: 0; }
        .feat-text {}
        .feat-h3 {
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: clamp(26px, 2.8vw, 38px);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cream);
          margin-bottom: 16px;
        }
        .feat-h3 em { font-style: italic; color: var(--amber); }
        .feat-body {
          font-size: 15px;
          font-weight: 300;
          color: var(--cream2);
          line-height: 1.75;
          max-width: 400px;
        }
        .feat-art {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ══════════════════════════════════════
           6. PRICING
           ══════════════════════════════════════ */
        .pricing-table {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border: 1px solid var(--border);
          margin-top: 56px;
        }
        @media (max-width: 800px) {
          .pricing-table { grid-template-columns: 1fr; }
          .pricing-col { border-right: none !important; border-bottom: 1px solid var(--border); }
        }
        .pricing-col {
          padding: 40px 32px;
          border-right: 1px solid var(--border);
          position: relative;
        }
        .pricing-col:last-child { border-right: none; }
        .pricing-col.featured { background: var(--bg3); }
        .popular-badge {
          position: absolute;
          top: 20px; right: 20px;
          background: var(--amber-dim);
          border: 1px solid var(--border2);
          color: var(--amber);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 2px;
        }
        .tier-name {
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--cream3);
          margin-bottom: 20px;
        }
        .price-num {
          font-family: 'Fraunces', serif;
          font-weight: 700;
          font-size: 48px;
          color: var(--cream);
          line-height: 1;
          margin-bottom: 6px;
        }
        .price-period {
          font-size: 13px;
          color: var(--cream3);
          margin-bottom: 32px;
        }
        .pricing-features-list {
          list-style: none;
          margin-bottom: 36px;
        }
        .pricing-features-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 11px 0;
          font-size: 14px;
          font-weight: 300;
          color: var(--cream2);
          border-bottom: 1px solid var(--border);
        }
        .pricing-features-list li:last-child { border-bottom: none; }
        .check-amber { color: var(--amber); font-size: 14px; flex-shrink: 0; }
        .check-dim { color: var(--cream3); font-size: 14px; flex-shrink: 0; }
        .btn-pricing-primary {
          display: block;
          width: 100%;
          text-align: center;
          background: var(--amber);
          color: #0E0C09;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          padding: 12px 20px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .btn-pricing-primary:hover { background: var(--amber2); }
        .btn-pricing-outline {
          display: block;
          width: 100%;
          text-align: center;
          background: transparent;
          color: var(--cream2);
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 14px;
          padding: 12px 20px;
          border-radius: 4px;
          border: 1px solid var(--border2);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-pricing-outline:hover { border-color: var(--cream3); color: var(--cream); }

        /* ══════════════════════════════════════
           7. TESTIMONIALS
           ══════════════════════════════════════ */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border: 1px solid var(--border);
          margin-top: 56px;
        }
        @media (max-width: 800px) {
          .testimonials-grid { grid-template-columns: 1fr; }
          .testi-col { border-right: none !important; border-bottom: 1px solid var(--border); }
        }
        .testi-col {
          padding: 40px 32px;
          border-right: 1px solid var(--border);
        }
        .testi-col:last-child { border-right: none; }
        .testi-col.featured-t { background: var(--bg3); }
        .quote-mark {
          font-family: 'Fraunces', serif;
          font-size: 48px;
          color: var(--amber);
          opacity: 0.5;
          line-height: 1;
          margin-bottom: 16px;
          display: block;
        }
        .quote-text {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-weight: 300;
          font-size: 17px;
          color: var(--cream2);
          line-height: 1.65;
          margin-bottom: 28px;
        }
        .testi-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--cream);
          margin-bottom: 4px;
        }
        .testi-role {
          font-size: 13px;
          color: var(--cream3);
        }

        /* ══════════════════════════════════════
           8. FAQ
           ══════════════════════════════════════ */
        .faq-wrap {
          max-width: 860px;
          margin: 56px auto 0;
        }
        .faq-item {
          border-top: 1px solid var(--border);
        }
        .faq-item:last-child { border-bottom: 1px solid var(--border); }
        .faq-q {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          text-align: left;
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: 18px;
          color: var(--cream);
          letter-spacing: -0.01em;
        }
        .faq-icon {
          font-size: 20px;
          color: var(--amber);
          transition: transform 0.3s ease;
          flex-shrink: 0;
          margin-left: 16px;
          font-weight: 300;
        }
        .faq-item.open .faq-icon { transform: rotate(45deg); }
        .faq-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.38s ease;
        }
        .faq-item.open .faq-body { max-height: 300px; }
        .faq-body p {
          padding-bottom: 24px;
          font-size: 15px;
          font-weight: 300;
          color: var(--cream2);
          line-height: 1.75;
        }

        /* ══════════════════════════════════════
           9. FINAL CTA
           ══════════════════════════════════════ */
        .final-cta {
          position: relative;
          text-align: center;
          overflow: hidden;
        }
        .final-cta-bg {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0.04;
        }
        .final-cta-content { position: relative; z-index: 1; }
        .final-h2 {
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: clamp(38px, 4.5vw, 64px);
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--cream);
          margin-bottom: 20px;
        }
        .final-h2 em { font-style: italic; color: var(--amber); }
        .final-sub {
          font-size: 17px;
          font-weight: 300;
          color: var(--cream2);
          margin-bottom: 36px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ══════════════════════════════════════
           10. FOOTER
           ══════════════════════════════════════ */
        .p-footer {
          border-top: 1px solid var(--border);
          padding: 64px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 64px;
          margin-bottom: 48px;
        }
        @media (max-width: 700px) {
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--cream);
          text-decoration: none;
          margin-bottom: 12px;
        }
        .footer-tagline {
          font-size: 14px;
          color: var(--cream3);
          font-weight: 300;
          max-width: 280px;
        }
        .footer-cols {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        @media (max-width: 600px) {
          .footer-cols { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        .footer-col h5 {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--cream3);
          margin-bottom: 16px;
          font-weight: 400;
        }
        .footer-col a {
          display: block;
          font-size: 14px;
          font-weight: 300;
          color: var(--cream2);
          text-decoration: none;
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .footer-col a:hover { color: var(--cream); }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bottom p {
          font-size: 13px;
          color: var(--cream3);
          font-weight: 300;
        }
      `}} />

      <div className="parsify-wrap">
        {/* NOISE OVERLAY */}
        <div className="noise-layer" aria-hidden="true" />

        {/* ══ 1. STICKY NAV ══ */}
        <nav id="p-nav" aria-label="Main navigation">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              <svg className="nav-logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="28" height="28" rx="4" fill="none" stroke="#E8913A" strokeWidth="1"/>
                <path d="M9 10 C9 10 10 8.5 14 8.5 C18 8.5 20 10.5 20 13 C20 15.5 18 17 14 17 L12 17 L12 23" stroke="#E8913A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                <circle cx="22" cy="22" r="1.5" fill="#E8913A" opacity="0.6"/>
              </svg>
              Parsify
            </a>
            <ul className="nav-links-row">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
            <a href={`${DASHBOARD_URL}/register`} className="btn-start" id="nav-cta">Start Free</a>
          </div>
        </nav>

        {/* ══ 2. HERO ══ */}
        <section className="hero-section">
          <div className="wrap">
            <div className="hero-grid">
              {/* Left */}
              <div>
                <div className="eyebrow-tag reveal">Bank Statement Intelligence</div>
                <h1 className="hero-h1 reveal reveal-delay-1">
                  PDFs into<br />
                  <em>clean data,</em><br />
                  effortlessly.
                </h1>
                <p className="hero-sub reveal reveal-delay-2">
                  Upload any bank statement PDF. Our engine parses every row, handles every Indian bank format, and delivers structured Excel or CSV in seconds.
                </p>
                <div className="hero-cta-row reveal reveal-delay-3">
                  <a href={`${DASHBOARD_URL}/register`} className="btn-hero-primary" id="hero-cta">
                    Start for free
                    <span className="btn-arrow-box">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="#0E0C09" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                </div>
                <p className="hero-meta reveal reveal-delay-4">
                  Free to start <span>·</span> No credit card <span>·</span> 50+ banks
                </p>
              </div>

              {/* Right — Hand-drawn SVG illustration */}
              <div className="hero-illustration" aria-hidden="true">
                <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:'520px'}}>
                  {/* PDF Document panel */}
                  <rect x="18" y="30" width="168" height="210" rx="5" fill="#1C1914" stroke="#3A3228" strokeWidth="1"/>
                  {/* PDF header bar */}
                  <rect x="18" y="30" width="168" height="28" rx="5" fill="#241f18" stroke="#3A3228" strokeWidth="1"/>
                  <rect x="18" y="48" width="168" height="10" fill="#241f18"/>
                  <text x="102" y="49" fill="#7A6E5F" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono, monospace">HDFC_Statement.pdf</text>
                  {/* PDF rows — blurred/messy */}
                  {[68,84,100,116,132,148,164,180,196,212,228].map((y, i) => (
                    <g key={i} opacity={i > 6 ? 0.35 : 0.7}>
                      <rect x="28" y={y} width={28 + (i%3)*8} height="7" rx="1" fill="#3A3228"/>
                      <rect x="66" y={y} width={52 + (i%4)*6} height="7" rx="1" fill="#3A3228" opacity="0.8"/>
                      <rect x="140" y={y} width={28} height="7" rx="1" fill="#3A3228" opacity="0.6"/>
                    </g>
                  ))}
                  {/* italic label PDF */}
                  <text x="102" y="254" fill="#7A6E5F" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="Fraunces, serif">source document</text>

                  {/* Animated arrow / "parsing..." */}
                  <g>
                    <path d="M196 135 C230 100 270 100 310 135" stroke="#E8913A" strokeWidth="1" strokeDasharray="5 3" className="arrow-draw" strokeLinecap="round"/>
                    <path d="M303 128 L310 135 L300 138" stroke="#E8913A" strokeWidth="1" className="arrow-draw" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* parsing dots */}
                    <circle cx="232" cy="108" r="3" fill="#E8913A" className="dot-pulse"/>
                    <circle cx="248" cy="102" r="3" fill="#E8913A" className="dot-pulse-2"/>
                    <circle cx="264" cy="100" r="3" fill="#E8913A" className="dot-pulse-3"/>
                    <text x="248" y="92" fill="#E8913A" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="Fraunces, serif" opacity="0.8">parsing...</text>
                  </g>

                  {/* Excel Output panel */}
                  <rect x="334" y="30" width="168" height="210" rx="5" fill="#1A1710" stroke="#3A3228" strokeWidth="1"/>
                  <rect x="334" y="30" width="168" height="28" rx="5" fill="#1E1c12" stroke="#3A3228" strokeWidth="1"/>
                  <rect x="334" y="48" width="168" height="10" fill="#1E1c12"/>
                  <text x="418" y="49" fill="#7A6E5F" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono, monospace">output.xlsx</text>
                  {/* Excel header row */}
                  <rect x="340" y="63" width="157" height="10" rx="1" fill="#241f14"/>
                  <text x="346" y="71" fill="#E8913A" fontSize="6.5" fontFamily="JetBrains Mono, monospace" opacity="0.9">Date</text>
                  <text x="380" y="71" fill="#E8913A" fontSize="6.5" fontFamily="JetBrains Mono, monospace" opacity="0.9">Narration</text>
                  <text x="450" y="71" fill="#E8913A" fontSize="6.5" fontFamily="JetBrains Mono, monospace" opacity="0.9">Amount</text>
                  {/* Clean rows */}
                  {[
                    ['12 Apr','UPI/RAHUL','1,200'],
                    ['14 Apr','NEFT-HDFC','15,000'],
                    ['15 Apr','IMPS-ZOMATO','450'],
                    ['16 Apr','POS-SWIGGY','280'],
                    ['17 Apr','UPI-NETFLIX','199'],
                    ['18 Apr','RTGS-SALARY','85,000'],
                    ['19 Apr','ATM-WDL','2,000'],
                    ['20 Apr','BILL-AIRTEL','999'],
                  ].map(([date, narr, amt], i) => (
                    <g key={i} opacity={i > 5 ? 0.45 : 0.85}>
                      <text x="346" y={82 + i*16} fill="#C8B99A" fontSize="6" fontFamily="JetBrains Mono, monospace">{date}</text>
                      <text x="380" y={82 + i*16} fill="#C8B99A" fontSize="6" fontFamily="JetBrains Mono, monospace">{narr}</text>
                      <text x="450" y={82 + i*16} fill={i===2||i===4?"#C8B99A":"#E8913A"} fontSize="6" fontFamily="JetBrains Mono, monospace">{amt}</text>
                      {i < 7 && <line x1="340" y1={86 + i*16} x2="494" y2={86 + i*16} stroke="#3A3228" strokeWidth="0.5" opacity="0.5"/>}
                    </g>
                  ))}
                  <text x="418" y="254" fill="#7A6E5F" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="Fraunces, serif">clean output</text>

                  {/* Floating annotation labels */}
                  {/* "4.2 seconds" */}
                  <g>
                    <line x1="230" y1="310" x2="248" y2="285" stroke="#7A6E5F" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6"/>
                    <text x="225" y="322" fill="#7A6E5F" fontSize="9.5" fontStyle="italic" fontFamily="Fraunces, serif" textAnchor="middle">4.2 seconds</text>
                    <circle cx="227" cy="310" r="1.5" fill="#E8913A" opacity="0.6"/>
                  </g>
                  {/* "99.3% accurate" */}
                  <g>
                    <line x1="418" y1="268" x2="430" y2="250" stroke="#7A6E5F" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6"/>
                    <text x="418" y="280" fill="#7A6E5F" fontSize="9.5" fontStyle="italic" fontFamily="Fraunces, serif" textAnchor="middle">99.3% accurate</text>
                    <circle cx="418" cy="268" r="1.5" fill="#E8913A" opacity="0.6"/>
                  </g>
                  {/* "847 rows extracted" */}
                  <g>
                    <line x1="102" y1="268" x2="102" y2="248" stroke="#7A6E5F" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6"/>
                    <text x="102" y="280" fill="#7A6E5F" fontSize="9.5" fontStyle="italic" fontFamily="Fraunces, serif" textAnchor="middle">847 rows extracted</text>
                    <circle cx="102" cy="268" r="1.5" fill="#E8913A" opacity="0.6"/>
                  </g>

                  {/* Decorative cross marks */}
                  <text x="20" y="310" fill="#7A6E5F" fontSize="12" opacity="0.4" fontFamily="DM Sans, sans-serif">+</text>
                  <text x="490" y="60" fill="#7A6E5F" fontSize="12" opacity="0.35" fontFamily="DM Sans, sans-serif">+</text>
                  <text x="310" y="300" fill="#7A6E5F" fontSize="12" opacity="0.3" fontFamily="DM Sans, sans-serif">+</text>
                  {/* Decorative circles */}
                  <circle cx="36" cy="340" r="5" stroke="#7A6E5F" strokeWidth="0.8" fill="none" opacity="0.3"/>
                  <circle cx="500" cy="280" r="4" stroke="#7A6E5F" strokeWidth="0.8" fill="none" opacity="0.25"/>
                  <circle cx="260" cy="370" r="7" stroke="#E8913A" strokeWidth="0.8" fill="none" opacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. STAT STRIP ══ */}
        <div className="stat-strip">
          <div className="stat-strip-inner">
            {[
              {num: '2,400+', label: 'Finance teams'},
              {num: '50+',    label: 'Indian banks'},
              {num: '4.2s',   label: 'Avg parse time'},
              {num: '99.3%',  label: 'Accuracy rate'},
              {num: '0',      label: 'Data stored'},
            ].map(({num, label}, i) => (
              <div className="stat-item-box reveal" key={i} style={{transitionDelay: `${i*0.08}s`}}>
                <span className="stat-number">{num}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ 4. HOW IT WORKS ══ */}
        <section className="section-pad" id="how-it-works">
          <div className="wrap">
            <div className="hiw-grid">
              {/* Left — steps */}
              <div className="reveal">
                <span className="section-eyebrow">How it works</span>
                <h2 className="section-h2">Three steps.<br /><em>Zero headaches.</em></h2>
                <div className="hiw-steps">
                  {[
                    {num:'i.', title:'Upload your PDF', desc:'Drag and drop any bank statement. Supports all Indian bank formats — HDFC, SBI, ICICI, Axis, Kotak, and 45+ more.'},
                    {num:'ii.', title:'We parse it', desc:'Our engine reads every row, resolves merged cells, and cleans up formatting inconsistencies automatically.'},
                    {num:'iii.', title:'Download clean data', desc:'Get perfectly formatted Excel or CSV, ready for Tally, QuickBooks, or your own analysis. In seconds.'},
                  ].map(({num, title, desc}, i) => (
                    <div className="hiw-step" key={i}>
                      <span className="step-numeral">{num}</span>
                      <div>
                        <div className="step-title">{title}</div>
                        <div className="step-desc">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — circular flow SVG */}
              <div className="feat-art reveal reveal-delay-2">
                <svg viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:'340px'}}>
                  {/* Outer decorative circle */}
                  <circle cx="170" cy="170" r="140" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.5"/>

                  {/* Connecting dashed arcs */}
                  {/* Upload → Parse */}
                  <path d="M170 60 C220 60 280 110 280 170" stroke="#3A3228" strokeWidth="1" strokeDasharray="5 4" strokeLinecap="round"/>
                  {/* Parse → Download */}
                  <path d="M280 170 C280 230 220 280 170 280" stroke="#3A3228" strokeWidth="1" strokeDasharray="5 4" strokeLinecap="round"/>
                  {/* Download → Upload (back) */}
                  <path d="M170 280 C120 280 60 230 60 170 C60 110 120 60 170 60" stroke="#3A3228" strokeWidth="1" strokeDasharray="5 4" strokeLinecap="round" opacity="0.4"/>

                  {/* Animated traveling dots */}
                  <circle r="4" fill="#E8913A" className="path-dot">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M170 60 C220 60 280 110 280 170 C280 230 220 280 170 280 C120 280 60 230 60 170 C60 110 120 60 170 60"/>
                  </circle>
                  <circle r="3" fill="#E8913A" opacity="0.5" className="path-dot-2">
                    <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M170 60 C220 60 280 110 280 170 C280 230 220 280 170 280 C120 280 60 230 60 170 C60 110 120 60 170 60"/>
                  </circle>

                  {/* UPLOAD node (top) */}
                  <circle cx="170" cy="60" r="32" fill="#1C1914" stroke="#E8913A" strokeWidth="1"/>
                  <path d="M162 65 L170 55 L178 65 M170 55 L170 70" stroke="#E8913A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="170" y="105" fill="#7A6E5F" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="Fraunces, serif">upload</text>

                  {/* PARSE node (right) — with spinning gear */}
                  <circle cx="280" cy="170" r="32" fill="#1C1914" stroke="#3A3228" strokeWidth="1"/>
                  <g style={{transformOrigin:'280px 170px'}} className="gear-spin">
                    <path d="M280 157 L282 163 L288 161 L290 167 L284 168 L284 174 L290 175 L288 181 L282 179 L280 185 L278 179 L272 181 L270 175 L276 174 L276 168 L270 167 L272 161 L278 163 Z" stroke="#C8B99A" strokeWidth="0.8" fill="none" opacity="0.5"/>
                    <circle cx="280" cy="170" r="5" stroke="#C8B99A" strokeWidth="0.8" fill="none" opacity="0.5"/>
                  </g>
                  <text x="280" y="215" fill="#7A6E5F" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="Fraunces, serif">parsing</text>
                  {/* sparkle near parse */}
                  <g opacity="0.6">
                    <line x1="310" y1="145" x2="310" y2="150" stroke="#E8913A" strokeWidth="1"/>
                    <line x1="307.5" y1="147.5" x2="312.5" y2="147.5" stroke="#E8913A" strokeWidth="1"/>
                    <line x1="308.5" y1="145.5" x2="311.5" y2="150.5" stroke="#E8913A" strokeWidth="0.8"/>
                    <line x1="311.5" y1="145.5" x2="308.5" y2="150.5" stroke="#E8913A" strokeWidth="0.8"/>
                  </g>

                  {/* DOWNLOAD node (bottom) */}
                  <circle cx="170" cy="280" r="32" fill="#1C1914" stroke="#3A3228" strokeWidth="1"/>
                  <path d="M162 275 L170 285 L178 275 M170 285 L170 270" stroke="#C8B99A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="170" y="325" fill="#7A6E5F" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="Fraunces, serif">download</text>

                  {/* Center label */}
                  <text x="100" y="175" fill="#7A6E5F" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="Fraunces, serif">~4.2s total</text>
                  <line x1="115" y1="170" x2="140" y2="170" stroke="#7A6E5F" strokeWidth="0.7" strokeDasharray="2 2" opacity="0.5"/>

                  {/* Decorative cross */}
                  <text x="38" y="72" fill="#7A6E5F" fontSize="11" opacity="0.3" fontFamily="DM Sans, sans-serif">+</text>
                  <text x="300" y="310" fill="#7A6E5F" fontSize="11" opacity="0.3" fontFamily="DM Sans, sans-serif">+</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══ 5. FEATURES ══ */}
        <section className="section-pad" id="features">
          <div className="wrap">
            {/* Section header */}
            <div className="reveal" style={{marginBottom:'64px'}}>
              <span className="section-eyebrow">Features</span>
              <h2 className="section-h2" style={{maxWidth:'600px'}}>
                Built for the messy reality<br />of <em>Indian bank statements.</em>
              </h2>
            </div>

            {/* Feature 1 — text left, art right */}
            <div className="feature-row reveal">
              <div className="feat-text">
                <span className="eyebrow-tag">Bank Coverage</span>
                <h3 className="feat-h3">Every major Indian bank,<br /><em>handled.</em></h3>
                <p className="feat-body">
                  From HDFC to ICICI, SBI to Kotak, Axis to PNB — Parsify knows every format by heart. No templates to configure. Just upload and get clean data.
                </p>
              </div>
              <div className="feat-art reveal reveal-delay-2">
                {/* Bank bubbles SVG */}
                <svg viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:'360px'}}>
                  {/* Connecting dashed lines */}
                  <line x1="180" y1="140" x2="72" y2="78" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <line x1="180" y1="140" x2="290" y2="78" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <line x1="180" y1="140" x2="50" y2="178" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <line x1="180" y1="140" x2="310" y2="195" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <line x1="180" y1="140" x2="130" y2="225" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <line x1="180" y1="140" x2="240" y2="238" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="3 3"/>

                  {/* ICICI center — slightly larger amber */}
                  <ellipse cx="180" cy="140" rx="40" ry="36" fill="rgba(232,145,58,0.07)" stroke="#E8913A" strokeWidth="1"/>
                  <text x="180" y="144" fill="#E8913A" fontSize="12" fontWeight="500" textAnchor="middle" fontFamily="DM Sans, sans-serif">ICICI</text>

                  {/* Other bank ellipses */}
                  {[
                    {cx:72, cy:78, rx:30, ry:26, name:'HDFC'},
                    {cx:290, cy:78, rx:28, ry:24, name:'SBI'},
                    {cx:50, cy:178, rx:26, ry:22, name:'Axis'},
                    {cx:310, cy:195, rx:30, ry:26, name:'Kotak'},
                    {cx:130, cy:228, rx:24, ry:20, name:'PNB'},
                    {cx:240, cy:238, rx:26, ry:22, name:'BOB'},
                  ].map(({cx,cy,rx,ry,name}, i) => (
                    <g key={i}>
                      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="rgba(200,185,154,0.04)" stroke="#3A3228" strokeWidth="0.8"/>
                      <text x={cx} y={cy+4} fill="#C8B99A" fontSize="10" textAnchor="middle" fontFamily="DM Sans, sans-serif">{name}</text>
                    </g>
                  ))}

                  {/* Small decoration dots */}
                  <circle cx="180" cy="30" r="2" fill="#7A6E5F" opacity="0.4"/>
                  <circle cx="350" cy="140" r="2" fill="#7A6E5F" opacity="0.3"/>
                  <text x="12" y="120" fill="#7A6E5F" fontSize="10" opacity="0.3" fontFamily="DM Sans, sans-serif">+</text>
                  <text x="340" y="60" fill="#7A6E5F" fontSize="10" opacity="0.3" fontFamily="DM Sans, sans-serif">+</text>
                </svg>
              </div>
            </div>

            {/* Feature 2 — art left, text right */}
            <div className="feature-row reveal">
              <div className="feat-art reveal">
                {/* Split panel: messy → clean */}
                <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:'360px'}}>
                  {/* Left messy panel */}
                  <rect x="8" y="8" width="148" height="204" rx="4" fill="#1A1714" stroke="#3A3228" strokeWidth="0.8"/>
                  <text x="82" y="26" fill="#7A6E5F" fontSize="8" textAnchor="middle" fontFamily="DM Sans, sans-serif">raw PDF</text>
                  {/* Messy rows */}
                  {[38,56,74,92,110,128,146,164,182].map((y, i) => (
                    <g key={i} opacity={0.7}>
                      <rect x="16" y={y} width={18 + (i%5)*4} height="6" rx="1" fill="#3A3228"/>
                      <rect x={42 + (i%3)*3} y={y} width={58 + (i%4)*5} height="6" rx="1" fill="#3A3228" opacity="0.7"/>
                      <rect x="140" y={y} width="10" height="6" rx="1" fill="#3A3228" opacity="0.4"/>
                    </g>
                  ))}
                  {/* X mark */}
                  <line x1="76" y1="196" x2="84" y2="204" stroke="#7A6E5F" strokeWidth="1.2"/>
                  <line x1="84" y1="196" x2="76" y2="204" stroke="#7A6E5F" strokeWidth="1.2"/>

                  {/* Arrow between */}
                  <path d="M162 110 L198 110" stroke="#E8913A" strokeWidth="1" strokeDasharray="4 3" strokeLinecap="round"/>
                  <path d="M192 105 L198 110 L192 115" stroke="#E8913A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>

                  {/* Right clean panel */}
                  <rect x="204" y="8" width="148" height="204" rx="4" fill="#1C1a10" stroke="#3A3228" strokeWidth="0.8"/>
                  <text x="278" y="26" fill="#7A6E5F" fontSize="8" textAnchor="middle" fontFamily="DM Sans, sans-serif">clean output</text>
                  {/* Clean rows */}
                  {[38,56,74,92,110,128,146,164,182].map((y, i) => (
                    <g key={i} opacity={i > 6 ? 0.35 : 0.85}>
                      <rect x="212" y={y} width="24" height="6" rx="1" fill="#E8913A" opacity="0.3"/>
                      <rect x="244" y={y} width="72" height="6" rx="1" fill="#C8B99A" opacity="0.5"/>
                      <rect x="324" y={y} width="22" height="6" rx="1" fill="#E8913A" opacity="0.2"/>
                    </g>
                  ))}
                  {/* Check mark */}
                  <path d="M271 196 L276 203 L286 193" stroke="#E8913A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feat-text reveal reveal-delay-2">
                <span className="eyebrow-tag">Accuracy</span>
                <h3 className="feat-h3">Zero rows<br />left <em>behind.</em></h3>
                <p className="feat-body">
                  Merged cells, split transactions, rotated text, multi-page statements — our engine handles every edge case that breaks other tools. 99.3% accuracy, every time.
                </p>
              </div>
            </div>

            {/* Feature 3 — text left, art right */}
            <div className="feature-row reveal">
              <div className="feat-text">
                <span className="eyebrow-tag">Privacy</span>
                <h3 className="feat-h3">Your data,<br /><em>deleted instantly.</em></h3>
                <p className="feat-body">
                  We never store your financial data. The moment your conversion is complete, your original PDF and the extracted data are permanently erased from our servers. Always.
                </p>
              </div>
              <div className="feat-art reveal reveal-delay-2">
                {/* Shield / Privacy SVG */}
                <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:'280px'}}>
                  {/* Outer dashed circle */}
                  <circle cx="140" cy="140" r="110" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="6 5" opacity="0.6"/>

                  {/* Shield shape — hand-drawn feel */}
                  <path d="M140 42 C140 42 185 56 188 100 C191 145 170 185 140 206 C110 185 89 145 92 100 C95 56 140 42 140 42 Z" fill="rgba(232,145,58,0.05)" stroke="#E8913A" strokeWidth="1" strokeLinejoin="round"/>

                  {/* Inner dashed circle */}
                  <circle cx="140" cy="130" r="38" stroke="#3A3228" strokeWidth="0.8" strokeDasharray="4 4"/>

                  {/* Lock icon sketch */}
                  <rect x="126" y="128" width="28" height="22" rx="3" stroke="#C8B99A" strokeWidth="1" fill="none" opacity="0.7"/>
                  <path d="M132 128 L132 122 C132 116 148 116 148 122 L148 128" stroke="#C8B99A" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7"/>
                  <circle cx="140" cy="138" r="3" fill="#C8B99A" opacity="0.5"/>
                  <line x1="140" y1="141" x2="140" y2="146" stroke="#C8B99A" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>

                  {/* "original PDF" with strikethrough */}
                  <text x="140" y="192" fill="#7A6E5F" fontSize="9" textAnchor="middle" fontFamily="DM Sans, sans-serif">original PDF</text>
                  <line x1="108" y1="189" x2="172" y2="189" stroke="#C97428" strokeWidth="1" opacity="0.7"/>

                  {/* "zero retention, always" italic label */}
                  <text x="140" y="225" fill="#7A6E5F" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="Fraunces, serif">zero retention, always</text>

                  {/* Decorative small elements */}
                  <text x="18" y="90" fill="#7A6E5F" fontSize="11" opacity="0.3" fontFamily="DM Sans, sans-serif">+</text>
                  <text x="254" y="188" fill="#7A6E5F" fontSize="11" opacity="0.3" fontFamily="DM Sans, sans-serif">+</text>
                  <circle cx="26" cy="188" r="4" stroke="#7A6E5F" strokeWidth="0.7" fill="none" opacity="0.25"/>
                  <circle cx="254" cy="82" r="3" stroke="#7A6E5F" strokeWidth="0.7" fill="none" opacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══ 6. PRICING ══ */}
        <section className="section-pad" id="pricing">
          <div className="wrap reveal">
            <span className="section-eyebrow">Pricing</span>
            <h2 className="section-h2">Simple pricing.<br /><em>No surprises.</em></h2>
            <div className="pricing-table">
              {/* Starter */}
              <div className="pricing-col">
                <div className="tier-name">Starter</div>
                <div className="price-num">₹0</div>
                <div className="price-period">free forever</div>
                <ul className="pricing-features-list">
                  <li><span className="check-amber">✓</span> 10 conversions / month</li>
                  <li><span className="check-amber">✓</span> Up to 50 pages per file</li>
                  <li><span className="check-amber">✓</span> Excel + CSV output</li>
                  <li><span className="check-amber">✓</span> Email support</li>
                  <li><span className="check-dim">—</span> Duplicate detection</li>
                  <li><span className="check-dim">—</span> API access</li>
                  <li><span className="check-dim">—</span> Priority support</li>
                </ul>
                <a href={`${DASHBOARD_URL}/register`} className="btn-pricing-outline" id="pricing-starter">Start Free</a>
              </div>

              {/* Pro */}
              <div className="pricing-col featured">
                <span className="popular-badge">Popular</span>
                <div className="tier-name">Pro</div>
                <div className="price-num">₹999</div>
                <div className="price-period">per month · ₹799 billed annually</div>
                <ul className="pricing-features-list">
                  <li><span className="check-amber">✓</span> 500 conversions / month</li>
                  <li><span className="check-amber">✓</span> Unlimited page count</li>
                  <li><span className="check-amber">✓</span> All output formats</li>
                  <li><span className="check-amber">✓</span> Duplicate detection</li>
                  <li><span className="check-amber">✓</span> Priority support</li>
                  <li><span className="check-dim">—</span> API access</li>
                  <li><span className="check-dim">—</span> Team seats</li>
                </ul>
                <a href={`${DASHBOARD_URL}/register`} className="btn-pricing-primary" id="pricing-pro">Get Pro</a>
              </div>

              {/* Business */}
              <div className="pricing-col">
                <div className="tier-name">Business</div>
                <div className="price-num">₹3,999</div>
                <div className="price-period">per month</div>
                <ul className="pricing-features-list">
                  <li><span className="check-amber">✓</span> Unlimited conversions</li>
                  <li><span className="check-amber">✓</span> Unlimited page count</li>
                  <li><span className="check-amber">✓</span> All output formats</li>
                  <li><span className="check-amber">✓</span> Duplicate detection</li>
                  <li><span className="check-amber">✓</span> API access + webhooks</li>
                  <li><span className="check-amber">✓</span> Team seats (5 users)</li>
                  <li><span className="check-amber">✓</span> Dedicated support</li>
                </ul>
                <a href="#contact" className="btn-pricing-outline" id="pricing-business">Contact Sales</a>
              </div>
            </div>
            <p style={{marginTop:'20px', fontSize:'13px', color:'var(--cream3)', fontWeight:300}}>
              Cancel anytime · Secure payments via Razorpay · GST invoice included
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ══ 7. TESTIMONIALS ══ */}
        <section className="section-pad">
          <div className="wrap reveal">
            <span className="section-eyebrow">Testimonials</span>
            <h2 className="section-h2">What finance teams<br /><em>are saying.</em></h2>
            <div className="testimonials-grid">
              <div className="testi-col">
                <span className="quote-mark">"</span>
                <p className="quote-text">Parsify saved our team 40+ hours a month. We process 300+ bank statements for clients and the accuracy is insane.</p>
                <div className="testi-name">Rahul Sharma</div>
                <div className="testi-role">CA · RS & Associates, Mumbai</div>
              </div>
              <div className="testi-col featured-t">
                <span className="quote-mark">"</span>
                <p className="quote-text">Finally — a converter that handles SBI's terrible PDF format correctly. Worth every rupee. The time savings are real.</p>
                <div className="testi-name">Priya Mehta</div>
                <div className="testi-role">Finance Manager · Finova Startup</div>
              </div>
              <div className="testi-col">
                <span className="quote-mark">"</span>
                <p className="quote-text">We integrated the API into our reconciliation tool in 2 days. Documentation is clean, support is fast. Highly recommended.</p>
                <div className="testi-name">Arjun Das</div>
                <div className="testi-role">CTO · Khata.io</div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══ 8. FAQ ══ */}
        <section className="section-pad">
          <div className="wrap">
            <div className="reveal" style={{textAlign:'center', marginBottom:'0'}}>
              <span className="section-eyebrow">FAQ</span>
              <h2 className="section-h2">Common questions.</h2>
            </div>
            <div className="faq-wrap">
              {[
                {
                  q: 'Which banks does Parsify support?',
                  a: 'We support over 50 Indian banks, including all major public and private sector banks — HDFC, SBI, ICICI, Axis, Kotak, PNB, Yes Bank, BOB, and more. Our engine is constantly updated to handle their latest statement formats.'
                },
                {
                  q: 'Is my data safe? Do you store my statements?',
                  a: 'Your data is 100% safe. We have a strict zero data retention policy. Your PDF statements and the extracted data are permanently deleted from our servers immediately after the conversion process is complete.'
                },
                {
                  q: 'What output formats do you support?',
                  a: 'We support .xlsx (Excel) and .csv formats. These files are optimized to be easily imported into Tally, QuickBooks, Zoho Books, or your own custom ERP systems.'
                },
                {
                  q: 'Can Parsify handle scanned or image PDFs?',
                  a: 'Parsify is optimized for native digital PDFs — the ones you download directly from your bank\'s net banking portal. We are currently beta testing OCR for scanned image statements, available in the Business tier soon.'
                },
                {
                  q: 'Is there an API for developers?',
                  a: 'Yes, we offer a robust REST API available on our Business tier. It features webhook notifications upon conversion completion and detailed API documentation to get you up and running quickly.'
                },
                {
                  q: 'Do I get a GST invoice?',
                  a: 'Absolutely. You can add your company\'s GST details during checkout, and a valid tax invoice will be sent to your email automatically for every billing cycle.'
                },
              ].map(({q, a}, i) => (
                <div className="faq-item reveal" key={i} id={`faq-${i}`}>
                  <button className="faq-q" aria-expanded="false" aria-controls={`faq-body-${i}`}>
                    {q}
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-body" id={`faq-body-${i}`}>
                    <p>{a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ══ 9. FINAL CTA ══ */}
        <section className="section-pad final-cta">
          {/* Decorative concentric ellipses background */}
          <div className="final-cta-bg" aria-hidden="true">
            <svg viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:'700px'}}>
              <ellipse cx="350" cy="250" rx="320" ry="210" stroke="#F0E8D8" strokeWidth="0.8"/>
              <ellipse cx="350" cy="250" rx="250" ry="165" stroke="#F0E8D8" strokeWidth="0.8"/>
              <ellipse cx="350" cy="250" rx="180" ry="120" stroke="#F0E8D8" strokeWidth="0.8"/>
              <ellipse cx="350" cy="250" rx="110" ry="74" stroke="#F0E8D8" strokeWidth="0.8"/>
              {/* Crosshair lines */}
              <line x1="350" y1="40" x2="350" y2="460" stroke="#F0E8D8" strokeWidth="0.6"/>
              <line x1="30" y1="250" x2="670" y2="250" stroke="#F0E8D8" strokeWidth="0.6"/>
            </svg>
          </div>
          <div className="wrap final-cta-content reveal" style={{textAlign:'center'}}>
            <h2 className="final-h2">
              Stop fighting<br /><em>your own data.</em>
            </h2>
            <p className="final-sub">
              Join 2,400+ finance professionals who converted to clean, structured data — for free. No setup, no credit card required.
            </p>
            <a href={`${DASHBOARD_URL}/register`} className="btn-hero-primary" id="final-cta" style={{display:'inline-flex', margin:'0 auto'}}>
              Convert your first statement free
              <span className="btn-arrow-box">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#0E0C09" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <p style={{marginTop:'16px', fontSize:'13px', color:'var(--cream3)'}}>
              Free to start · No credit card · 50+ banks
            </p>
          </div>
        </section>

        {/* ══ 10. FOOTER ══ */}
        <footer className="p-footer">
          <div className="wrap">
            <div className="footer-grid">
              <div>
                <a href="#" className="footer-logo">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="2" width="28" height="28" rx="4" fill="none" stroke="#E8913A" strokeWidth="1"/>
                    <path d="M9 10 C9 10 10 8.5 14 8.5 C18 8.5 20 10.5 20 13 C20 15.5 18 17 14 17 L12 17 L12 23" stroke="#E8913A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                    <circle cx="22" cy="22" r="1.5" fill="#E8913A" opacity="0.6"/>
                  </svg>
                  Parsify
                </a>
                <p className="footer-tagline">
                  Bank statement intelligence — PDFs into clean data, effortlessly.
                </p>
              </div>
              <div className="footer-cols">
                <div className="footer-col">
                  <h5>Product</h5>
                  <a href="#features">Features</a>
                  <a href="#pricing">Pricing</a>
                  <a href="#changelog">Changelog</a>
                  <a href="#security">Security</a>
                </div>
                <div className="footer-col">
                  <h5>Developers</h5>
                  <a href="#docs" id="footer-docs">API Docs</a>
                  <a href="#webhooks">Webhooks</a>
                  <a href="#status">Status</a>
                </div>
                <div className="footer-col">
                  <h5>Company</h5>
                  <a href="#about">About</a>
                  <a href="#blog" id="footer-blog">Blog</a>
                  <a href="#contact">Contact</a>
                </div>
                <div className="footer-col">
                  <h5>Legal</h5>
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/terms">Terms of Service</a>
                  <a href="/refund">Refund Policy</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2025 Parsify. All rights reserved.</p>
              <p>Made with care in India 🇮🇳</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Scripts */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function init() {
            // ── Scroll-reveal ──
            const reveals = document.querySelectorAll('.reveal');
            const io = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  io.unobserve(entry.target);
                }
              });
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
            reveals.forEach(function(el) { io.observe(el); });

            // ── Nav scroll effect ──
            var nav = document.getElementById('p-nav');
            if (nav) {
              function onScroll() {
                if (window.scrollY > 60) {
                  nav.classList.add('scrolled');
                } else {
                  nav.classList.remove('scrolled');
                }
              }
              window.addEventListener('scroll', onScroll, { passive: true });
              onScroll();
            }

            // ── FAQ accordion ──
            document.querySelectorAll('.faq-q').forEach(function(btn) {
              btn.addEventListener('click', function() {
                var item = btn.closest('.faq-item');
                var isOpen = item.classList.contains('open');
                document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
                document.querySelectorAll('.faq-q').forEach(function(b) { b.setAttribute('aria-expanded','false'); });
                if (!isOpen) {
                  item.classList.add('open');
                  btn.setAttribute('aria-expanded','true');
                }
              });
            });
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
          } else {
            init();
          }
        })();
      `}} />
    </>
  );
}
