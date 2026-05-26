// @ts-nocheck
import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

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

  React.useEffect(() => {
if (typeof window !== 'undefined') {

    // 1. Sticky Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Reveal Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other accordions (optional, but good UX)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                item.classList.remove('active');
                answer.style.maxHeight = null;
            }
        });
    });

}

  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        body > nav, body > header, body > footer, .Navbar { display: none !important; }
/* 
  Parsify Landing Page Styles
  Color System & Variables 
*/
:root {
  --color-bg: #0A0C10;
  --color-surface: #111318;
  --color-border: #1E2228;
  --color-accent: #00D4AA;
  --color-accent-dim: rgba(0, 212, 170, 0.094); /* 18 in hex is approx 9.4% opacity */
  --color-text-primary: #F0F2F5;
  --color-text-secondary: #8B9099;
  --color-text-muted: #4A5060;
  --color-warning: #F5A623;
  --color-success: #22C55E;

  /* Typography Variables */
  --font-display: 'DM Serif Display', serif;
  --font-heading: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
}

/* Background Grid Pattern */
.bg-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: radial-gradient(var(--color-accent-dim) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.3;
  pointer-events: none;
}

/* Typography Base */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
}

h1 {
  font-family: var(--font-display);
  font-weight: 400;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

/* Utilities */
.text-primary { color: var(--color-text-primary); }
.text-teal { color: var(--color-accent); }
.text-secondary { color: var(--color-text-secondary); }

.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border), transparent);
  margin: 4rem 0;
}

/* Scroll Reveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-accent);
  color: #000;
  font-family: var(--font-heading);
  font-weight: 700;
  padding: 0.875rem 1.75rem;
  border-radius: 9999px; /* Pill shape */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 212, 170, 0.15);
}

.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(0, 212, 170, 0.4);
  transform: translateY(-2px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--color-text-primary);
  font-family: var(--font-heading);
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  background-color: var(--color-surface);
  border-color: var(--color-text-muted);
}

.btn-block {
  width: 100%;
}

.btn-large {
  padding: 1.25rem 2.5rem;
  font-size: 1.125rem;
}

/* 1. STICKY NAVBAR */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1.25rem 0;
  border-bottom: 1px solid transparent;
}

#navbar.scrolled {
  background-color: rgba(10, 12, 16, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 212, 170, 0.3); /* Thin teal line */
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  width: 12px;
  height: 12px;
  background-color: var(--color-accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--color-text-primary);
}

.btn-nav {
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
}

/* 2. HERO SECTION */
.hero {
  padding-top: 8rem;
  padding-bottom: 4rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero-content {
  flex: 0 0 55%;
  max-width: 55%;
  z-index: 2;
}

.eyebrow {
  color: var(--color-accent);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  display: inline-block;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 0ms;
}

.hero h1 {
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 150ms;
}

.hero .subtext {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  max-width: 90%;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 300ms;
}

.cta-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 450ms;
}

.social-proof {
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 600ms;
}

.avatars {
  display: flex;
}

.avatars img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--color-bg);
  margin-left: -10px;
}

.avatars img:first-child {
  margin-left: 0;
}

.social-proof p {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* HERO GRAPHIC (Right 45%) */
.hero-graphic {
  flex: 0 0 45%;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: var(--color-accent);
  filter: blur(120px);
  opacity: 0.15;
  border-radius: 50%;
  z-index: 0;
}

/* Floating Badges */
.floating-badge {
  position: absolute;
  background: rgba(17, 19, 24, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-primary);
  z-index: 10;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}

.badge-1 {
  top: 10%;
  right: -5%;
  transform: rotate(-3deg);
  animation: float 3.5s ease-in-out infinite;
}

.badge-2 {
  bottom: 20%;
  left: -15%;
  transform: rotate(2deg);
  animation: float 4s ease-in-out infinite 1s;
}

.badge-3 {
  bottom: 5%;
  right: 10%;
  transform: rotate(-1deg);
  animation: float 3s ease-in-out infinite 0.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
  50% { transform: translateY(-10px) rotate(var(--rot, 0deg)); }
}

.badge-1 { --rot: -3deg; }
.badge-2 { --rot: 2deg; }
.badge-3 { --rot: -1deg; }

/* Conversion Panel */
.conversion-panel {
  position: relative;
  width: 100%;
  height: 400px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0, 212, 170, 0.1);
  display: flex;
  overflow: hidden;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.pdf-side, .excel-side {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pdf-side {
  background: #111318;
  border-right: 1px solid var(--color-border);
  /* The PDF side starts fully visible, Excel side hidden */
}

.excel-side {
  background: #0d1217;
  position: relative;
  /* Animation handles visibility */
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 3fr 1.5fr 1.5fr 2fr;
  color: var(--color-text-muted);
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 0.5rem;
}

.excel-header {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent-dim);
}

.row {
  display: grid;
  grid-template-columns: 2fr 3fr 1.5fr 1.5fr 2fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.02);
}

.row-messy {
  color: var(--color-text-secondary);
}

.row-messy .scrambled {
  color: var(--color-warning);
  font-style: italic;
  letter-spacing: 1px;
}

.row-messy.blurred {
  filter: blur(3px);
  opacity: 0.5;
}

.row-clean {
  color: var(--color-text-primary);
}

.amount-debit { color: var(--color-warning); }
.amount-credit { color: var(--color-success); }

.skeleton-row div {
  height: 12px;
  background: var(--color-border);
  border-radius: 2px;
  margin-right: 8px;
}

.conversion-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: var(--color-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  z-index: 10;
  box-shadow: 0 0 20px rgba(0, 212, 170, 0.4);
  /* Pulsing animation */
  animation: pulse-arrow 3.5s infinite;
}

.exported-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(34, 197, 94, 0.2);
  color: var(--color-success);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  opacity: 0;
  animation: show-badge 3.5s infinite;
}

/* Sweep Animation Logic */
/* We simulate a sweep by having the excel side reveal over the pdf side */
.excel-side {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%; /* It takes the right half natively */
  height: 100%;
  border-left: 1px solid var(--color-accent);
  clip-path: inset(0 100% 0 0); /* Hidden initially */
  animation: sweep 3.5s infinite;
}

@keyframes sweep {
  0%, 20% { clip-path: inset(0 100% 0 0); } /* Wait */
  40%, 80% { clip-path: inset(0 0 0 0); } /* Reveal */
  100% { clip-path: inset(0 100% 0 0); } /* Reset */
}

@keyframes show-badge {
  0%, 45% { opacity: 0; transform: translateY(-5px); }
  50%, 80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; }
}

@keyframes pulse-arrow {
  0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 0 rgba(0, 212, 170, 0.4); }
  50% { transform: translate(-50%, -50%) scale(1.1); box-shadow: 0 0 0 15px rgba(0, 212, 170, 0); }
}


/* 3. LOGO STRIP / TRUST BAR */
.trust-bar {
  padding: 3rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background: rgba(17, 19, 24, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.trust-title {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* Fade edges */
.marquee-container::before,
.marquee-container::after {
  content: "";
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  z-index: 2;
}

.marquee-container::before {
  left: 0;
  background: linear-gradient(to right, var(--color-bg), transparent);
}

.marquee-container::after {
  right: 0;
  background: linear-gradient(to left, var(--color-bg), transparent);
}

.marquee {
  display: flex;
  width: fit-content;
  animation: marquee 25s linear infinite;
}

.marquee span {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  opacity: 0.4;
  margin: 0 3rem;
  white-space: nowrap;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* Translate by half since we duplicated items */
}

/* 4. "HOW IT WORKS" SECTION */
.how-it-works {
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 4rem;
}

.steps-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 2rem;
  margin-top: 4rem;
}

.step-connector {
  position: absolute;
  top: 30px; /* Aligned with icon centers roughly */
  left: 10%;
  right: 10%;
  height: 2px;
  background-image: linear-gradient(90deg, var(--color-accent) 50%, transparent 50%);
  background-size: 10px 2px;
  z-index: 0;
  opacity: 0.3;
}

.connector-dot {
  position: absolute;
  top: -3px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 10px var(--color-accent);
  animation: travel-dot 4s linear infinite;
}

@keyframes travel-dot {
  0% { left: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { left: 100%; opacity: 0; }
}

.step-card {
  flex: 1;
  background: var(--color-surface);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  text-align: left;
  position: relative;
  z-index: 1;
  border-left: 2px solid var(--color-accent);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.step-icon-wrapper {
  width: 60px;
  height: 60px;
  background: var(--color-accent-dim);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.step-icon {
  width: 28px;
  height: 28px;
  color: var(--color-accent);
}

.step-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.step-card p {
  color: var(--color-text-secondary);
  font-size: 1rem;
}

/* 5. FEATURE GRID */
.features {
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: var(--color-surface);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: default;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  box-shadow: inset 0 0 0 1px var(--color-accent), 0 10px 30px rgba(0,0,0,0.4);
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: var(--color-accent-dim);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--color-accent);
}

.feature-icon svg {
  width: 20px;
  height: 20px;
}

.feature-card h4 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
}

/* 6. LIVE DEMO SECTION */
.demo-section {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-container {
  display: flex;
  background: var(--color-surface);
  border-radius: 24px;
  overflow: hidden;
  border-top: 4px solid var(--color-accent);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}

.demo-left {
  flex: 0 0 35%;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--color-border);
  background: #0d1015;
}

.upload-zone {
  width: 100%;
  border: 2px dashed var(--color-border);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.3s;
}

.upload-zone:hover {
  border-color: var(--color-accent);
  background: rgba(0, 212, 170, 0.05);
}

.upload-zone-icon {
  width: 48px;
  height: 48px;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.upload-text {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.try-sample {
  color: var(--color-accent);
  font-size: 0.9rem;
  font-weight: 600;
}

.demo-right {
  flex: 1;
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.demo-badge {
  align-self: flex-start;
  background: rgba(34, 197, 94, 0.1);
  color: var(--color-success);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.demo-table-wrapper {
  overflow-x: auto;
  margin-bottom: 2rem;
}

.demo-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.demo-table th {
  text-align: left;
  color: var(--color-text-muted);
  font-weight: 600;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.demo-table td {
  padding: 1rem 0.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  color: var(--color-text-primary);
}

.btn-demo-dl {
  align-self: flex-start;
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
}

.btn-demo-dl svg {
  width: 18px;
  height: 18px;
}

/* 7. PRICING SECTION */
.pricing {
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-cards {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.price-card {
  flex: 1;
  background: var(--color-surface);
  border-radius: 24px;
  padding: 3rem 2rem;
  border: 1px solid var(--color-border);
  position: relative;
  display: flex;
  flex-direction: column;
}

.price-card.featured {
  border-color: var(--color-accent);
  transform: scale(1.05);
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0, 212, 170, 0.1);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-accent);
  color: #000;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 12px;
}

/* Shimmer effect for pro border */
.shimmer-border {
  position: absolute;
  top: -1px; left: -1px; right: -1px; bottom: -1px;
  border-radius: 24px;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 170, 0.4), transparent);
  background-size: 200% 100%;
  z-index: -1;
  animation: shimmer 3s infinite linear;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.tier-name {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.price {
  font-size: 3rem;
  font-family: var(--font-heading);
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.price span {
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-weight: 400;
}

.price-strike {
  color: var(--color-text-muted);
  text-decoration: line-through;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.price-card:not(.featured) .price {
  margin-bottom: 3.4rem; /* Aligns content with pro tier which has strike-through */
}

.features-list {
  margin-bottom: 2.5rem;
  flex: 1;
}

.features-list li {
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  font-size: 0.95rem;
  display: flex;
  gap: 0.5rem;
}

.pricing-footer {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

/* 8. TESTIMONIALS */
.testimonials {
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-grid {
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  align-items: flex-start;
}

.testimonial-card {
  flex: 1;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 2rem;
}

.middle-card {
  transform: translateY(-20px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.avatar-initial {
  width: 48px;
  height: 48px;
  background: var(--color-accent);
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.25rem;
}

.user-info h4 {
  font-size: 1.1rem;
}

.user-info p {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
}

.stars {
  color: var(--color-warning);
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.quote {
  font-size: 1rem;
  font-style: italic;
  color: var(--color-text-primary);
  line-height: 1.6;
}

/* 9. FAQ SECTION */
.faq {
  padding: 8rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.faq-container {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  padding: 1.5rem 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-icon {
  color: var(--color-accent);
  font-size: 1.5rem;
  font-weight: 400;
  transition: transform 0.3s;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.faq-answer p {
  padding-bottom: 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* 10. FINAL CTA */
.final-cta {
  padding: 10rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-mesh-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at center, rgba(0, 212, 170, 0.15) 0%, var(--color-bg) 70%);
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-family: var(--font-display);
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 3rem;
}

.cta-subtext {
  font-size: 0.9rem !important;
  color: var(--color-text-muted) !important;
  margin-top: 1.5rem;
  margin-bottom: 0 !important;
}

/* 11. FOOTER */
footer {
  border-top: 1px solid var(--color-border);
  padding: 5rem 2rem 2rem;
  background: var(--color-bg);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 4rem;
}

.footer-brand {
  max-width: 300px;
}

.footer-brand p {
  color: var(--color-text-secondary);
  margin-top: 1rem;
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  gap: 4rem;
}

.link-column h4 {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
}

.link-column a {
  display: block;
  color: var(--color-text-secondary);
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.link-column a:hover {
  color: var(--color-accent);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
  }
  
  .hero-content {
    max-width: 100%;
  }
  
  .hero h1 {
    font-size: 3.5rem;
  }
  
  .subtext {
    margin: 0 auto 2.5rem;
  }
  
  .cta-group {
    justify-content: center;
  }
  
  .social-proof {
    justify-content: center;
  }
  
  .hero-graphic {
    width: 100%;
  }

  .steps-container {
    flex-direction: column;
  }

  .step-connector {
    display: none;
  }

  .step-card {
    border-left: none;
    border-top: 2px solid var(--color-accent);
  }

  .pricing-cards {
    flex-direction: column;
  }

  .price-card.featured {
    transform: none;
  }
  
  .middle-card {
    transform: none;
  }
  
  .testimonial-grid {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .nav-links, .btn-nav {
    display: none;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .demo-container {
    flex-direction: column;
  }
  
  .demo-left {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }

  .footer-container {
    flex-direction: column;
  }
  
  .footer-links {
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

      ` }} />
      <div dangerouslySetInnerHTML={{ __html: `
<!-- Background Grid -->
    <div class="bg-grid"></div>

    <!-- 1. STICKY NAVBAR -->
    <nav id="navbar">
        <div class="nav-container">
            <a href="#" class="logo">
                <div class="logo-icon"></div>
                Parsify
            </a>
            <div class="nav-links">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#how-it-works">How it Works</a>
                <a href="#api">API</a>
            </div>
            <a href="#start" class="btn-primary btn-nav">Start Free</a>
        </div>
    </nav>

    <!-- 2. HERO SECTION -->
    <section class="hero scroll-reveal">
        <div class="hero-container">
            <!-- Left 55% Text -->
            <div class="hero-content">
                <div class="eyebrow">TRUSTED BY 2,400+ FINANCE TEAMS</div>
                <h1>
                    <span class="text-primary">Bank Statements,</span><br>
                    <span class="text-teal">Finally Tamed.</span>
                </h1>
                <p class="subtext">
                    Upload any PDF bank statement. Get perfect Excel/CSV output in under 10 seconds. No templates. No manual work. Just clean, structured data.
                </p>
                <div class="cta-group">
                    <a href="#start" class="btn-primary">Convert Your First Statement Free &rarr;</a>
                    <a href="#demo" class="btn-ghost">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        See live demo
                    </a>
                </div>
                <div class="social-proof">
                    <div class="avatars">
                        <img src="https://i.pravatar.cc/100?img=1" alt="User 1">
                        <img src="https://i.pravatar.cc/100?img=2" alt="User 2">
                        <img src="https://i.pravatar.cc/100?img=3" alt="User 3">
                    </div>
                    <p>Join 2,400+ accountants & CA firms</p>
                </div>
            </div>

            <!-- Right 45% Interactive Graphic -->
            <div class="hero-graphic">
                <div class="hero-glow"></div>
                
                <!-- Floating Number Badges -->
                <div class="floating-badge badge-1">⚡ 4.2s avg parse time</div>
                <div class="floating-badge badge-2">✓ 99.3% accuracy</div>
                <div class="floating-badge badge-3">📄 50+ banks</div>

                <div class="conversion-panel">
                    <div class="pdf-side">
                        <div class="table-header">
                            <div>Date</div>
                            <div>Description</div>
                            <div>Debit</div>
                            <div>Credit</div>
                            <div>Balance</div>
                        </div>
                        <div class="table-body">
                            <div class="row row-messy">
                                <div>12/04</div>
                                <div>UPI/RAHUL/SBIN...</div>
                                <div>1,200</div>
                                <div></div>
                                <div>45,020</div>
                            </div>
                            <div class="row row-messy">
                                <div>14/04</div>
                                <div class="scrambled">NEFT-HDFC-RENT</div>
                                <div></div>
                                <div>15,000</div>
                                <div>60,020</div>
                            </div>
                            <div class="row row-messy">
                                <div>15/04</div>
                                <div class="scrambled">IMPS-ZOMATO-TXN</div>
                                <div>450</div>
                                <div></div>
                                <div>59,570</div>
                            </div>
                            <div class="row row-messy blurred">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="row row-messy blurred">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="conversion-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>

                    <div class="excel-side">
                        <div class="exported-badge">✓ Exported</div>
                        <div class="table-header excel-header">
                            <div>Date</div>
                            <div>Description</div>
                            <div>Debit</div>
                            <div>Credit</div>
                            <div>Balance</div>
                        </div>
                        <div class="table-body">
                            <div class="row row-clean">
                                <div>2024-04-12</div>
                                <div>UPI/RAHUL/SBIN</div>
                                <div class="amount-debit">1,200.00</div>
                                <div></div>
                                <div>45,020.00</div>
                            </div>
                            <div class="row row-clean">
                                <div>2024-04-14</div>
                                <div>NEFT-HDFC-RENT</div>
                                <div></div>
                                <div class="amount-credit">15,000.00</div>
                                <div>60,020.00</div>
                            </div>
                            <div class="row row-clean">
                                <div>2024-04-15</div>
                                <div>IMPS-ZOMATO-TXN</div>
                                <div class="amount-debit">450.00</div>
                                <div></div>
                                <div>59,570.00</div>
                            </div>
                            <div class="row row-clean skeleton-row">
                                <div></div><div></div><div></div><div></div><div></div>
                            </div>
                            <div class="row row-clean skeleton-row">
                                <div></div><div></div><div></div><div></div><div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. LOGO STRIP / TRUST BAR -->
    <section class="trust-bar">
        <p class="trust-title">Used by teams at</p>
        <div class="marquee-container">
            <div class="marquee">
                <span>FinBooks AI</span>
                <span>ClearTax Pro</span>
                <span>Setu Finance</span>
                <span>Khatabook Teams</span>
                <span>Razorpay Reconcile</span>
                <span>Paytm Business</span>
                <!-- Duplicate for infinite scroll -->
                <span>FinBooks AI</span>
                <span>ClearTax Pro</span>
                <span>Setu Finance</span>
                <span>Khatabook Teams</span>
                <span>Razorpay Reconcile</span>
                <span>Paytm Business</span>
            </div>
        </div>
    </section>

    <!-- 4. "HOW IT WORKS" SECTION -->
    <section id="how-it-works" class="how-it-works scroll-reveal">
        <h2 class="section-title">Three steps. Zero headaches.</h2>
        <div class="steps-container">
            <div class="step-connector">
                <div class="connector-dot"></div>
            </div>
            
            <div class="step-card">
                <div class="step-icon-wrapper">
                    <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <polyline points="9 15 12 12 15 15"></polyline>
                    </svg>
                </div>
                <h3>Upload PDF</h3>
                <p>Drag & drop any bank statement PDF — HDFC, SBI, ICICI, Axis, or 50+ other banks supported.</p>
            </div>
            
            <div class="step-card">
                <div class="step-icon-wrapper">
                    <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                </div>
                <h3>AI Parses It</h3>
                <p>Our ML engine reads, cleans, and structures every transaction row — including merged cells and weird formats.</p>
            </div>
            
            <div class="step-card">
                <div class="step-icon-wrapper">
                    <svg class="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="12" x2="12" y2="18"></line>
                        <polyline points="9 15 12 18 15 15"></polyline>
                        <rect x="3" y="2" width="18" height="20" rx="2" ry="2" opacity="0.3"></rect>
                    </svg>
                </div>
                <h3>Download Excel/CSV</h3>
                <p>Get a perfectly formatted file ready for Tally, QuickBooks, or your own analysis. In seconds.</p>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- 5. FEATURE GRID -->
    <section id="features" class="features scroll-reveal">
        <div class="section-header">
            <h2 class="section-title">Built for the messy reality of Indian bank statements.</h2>
            <p class="section-subtitle">Most converters break on complex PDFs. Parsify doesn't.</p>
        </div>
        
        <div class="feature-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M12 22V12"></path><circle cx="12" cy="12" r="2"></circle><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01M8 18h.01M16 18h.01"></path></svg>
                </div>
                <h4>50+ Indian Banks Supported</h4>
                <p>HDFC, SBI, ICICI, Axis, Kotak, Yes Bank, PNB, and more — all formats.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
                </div>
                <h4>Multi-Page Statements</h4>
                <p>200-page statements? No problem. Parsify handles bulk without breaking.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <h4>Duplicate Row Detection</h4>
                <p>Automatically flags and removes duplicate transaction entries.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line><path d="M15 15l2-2 2 2"></path><line x1="17" y1="13" x2="17" y2="19"></line></svg>
                </div>
                <h4>Merged Cell Handling</h4>
                <p>Handles nightmare merged-cell PDFs that break every other tool.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </div>
                <h4>API Access</h4>
                <p>Integrate Parsify into your own product. RESTful API with webhooks.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <h4>Zero Data Retention</h4>
                <p>Your statements are deleted immediately after conversion. Always.</p>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- 6. LIVE DEMO / INTERACTIVE SECTION -->
    <section id="demo" class="demo-section scroll-reveal">
        <div class="demo-container">
            <div class="demo-left">
                <div class="upload-zone">
                    <svg class="upload-zone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><polyline points="9 15 12 12 15 15"></polyline></svg>
                    <p class="upload-text">Drop your statement here</p>
                    <a href="#" class="try-sample">Try sample file &rarr;</a>
                </div>
            </div>
            <div class="demo-right">
                <div class="demo-badge">✓ Parsed 847 transactions in 4.2s</div>
                <div class="demo-table-wrapper">
                    <table class="demo-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Narration</th>
                                <th>Ref No</th>
                                <th>Debit</th>
                                <th>Credit</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24/05/2026</td>
                                <td>IMPS-600213812-RAHUL SHARMA</td>
                                <td>600213812</td>
                                <td></td>
                                <td><span class="amount-credit">45,000.00</span></td>
                                <td>142,500.00</td>
                            </tr>
                            <tr>
                                <td>25/05/2026</td>
                                <td>UPI-ZOMATO-PAYMENTS</td>
                                <td>UPI3002</td>
                                <td><span class="amount-debit">650.00</span></td>
                                <td></td>
                                <td>141,850.00</td>
                            </tr>
                            <tr>
                                <td>26/05/2026</td>
                                <td>NEFT-AWS CLOUD SERVICES</td>
                                <td>NF10928</td>
                                <td><span class="amount-debit">4,200.00</span></td>
                                <td></td>
                                <td>137,650.00</td>
                            </tr>
                            <tr>
                                <td>27/05/2026</td>
                                <td>POS-STARBUCKS-MUMBAI</td>
                                <td>POS821</td>
                                <td><span class="amount-debit">840.00</span></td>
                                <td></td>
                                <td>136,810.00</td>
                            </tr>
                            <tr>
                                <td>28/05/2026</td>
                                <td>RTGS-CLEARING-DIVIDEND</td>
                                <td>RTG4412</td>
                                <td></td>
                                <td><span class="amount-credit">12,500.00</span></td>
                                <td>149,310.00</td>
                            </tr>
                            <tr>
                                <td>29/05/2026</td>
                                <td>UPI-UBER-TRIP</td>
                                <td>UPI9912</td>
                                <td><span class="amount-debit">450.00</span></td>
                                <td></td>
                                <td>148,860.00</td>
                            </tr>
                            <tr>
                                <td>30/05/2026</td>
                                <td>BILLPAY-AIRTEL-BROADBAND</td>
                                <td>BP1029</td>
                                <td><span class="amount-debit">1,180.00</span></td>
                                <td></td>
                                <td>147,680.00</td>
                            </tr>
                            <tr>
                                <td>31/05/2026</td>
                                <td>INTEREST CREDITED</td>
                                <td>INT0526</td>
                                <td></td>
                                <td><span class="amount-credit">420.50</span></td>
                                <td>148,100.50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button class="btn-primary btn-demo-dl">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Excel
                </button>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- 7. PRICING SECTION -->
    <section id="pricing" class="pricing scroll-reveal">
        <div class="section-header">
            <h2 class="section-title">Simple pricing. No surprises.</h2>
        </div>
        
        <div class="pricing-cards">
            <!-- Free Tier -->
            <div class="price-card">
                <div class="tier-name">Starter</div>
                <div class="price">₹0<span>/ month</span></div>
                <ul class="features-list">
                    <li>✓ 10 conversions/month</li>
                    <li>✓ Up to 50 pages per file</li>
                    <li>✓ Excel + CSV output</li>
                    <li>✓ Email support</li>
                </ul>
                <a href="#start" class="btn-ghost btn-block">Start Free</a>
            </div>
            
            <!-- Pro Tier -->
            <div class="price-card featured">
                <div class="featured-badge">Most Popular</div>
                <div class="shimmer-border"></div>
                <div class="tier-name">Pro</div>
                <div class="price">₹999<span>/ month</span></div>
                <div class="price-strike">₹799 billed annually</div>
                <ul class="features-list">
                    <li>✓ 500 conversions/month</li>
                    <li>✓ Unlimited page count</li>
                    <li>✓ All output formats</li>
                    <li>✓ Duplicate detection</li>
                    <li>✓ Priority support</li>
                </ul>
                <a href="#start" class="btn-primary btn-block">Get Pro</a>
            </div>
            
            <!-- Business Tier -->
            <div class="price-card">
                <div class="tier-name">Business</div>
                <div class="price">₹3,999<span>/ month</span></div>
                <ul class="features-list">
                    <li>✓ Unlimited conversions</li>
                    <li>✓ API access + webhooks</li>
                    <li>✓ Team seats (5 users)</li>
                    <li>✓ Custom output templates</li>
                    <li>✓ Dedicated support</li>
                </ul>
                <a href="#contact" class="btn-ghost btn-block">Contact Sales</a>
            </div>
        </div>
        
        <div class="pricing-footer">
            🔒 Cancel anytime · Secure payments via Razorpay · GST invoice included
        </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- 8. TESTIMONIALS -->
    <section class="testimonials scroll-reveal">
        <h2 class="section-title">What finance teams are saying</h2>
        
        <div class="testimonial-grid">
            <div class="testimonial-card">
                <div class="card-header">
                    <div class="avatar-initial">R</div>
                    <div class="user-info">
                        <h4>Rahul Sharma</h4>
                        <p>CA, RS & Associates, Mumbai</p>
                    </div>
                </div>
                <div class="stars">★★★★★</div>
                <p class="quote">"Parsify saved our team 40+ hours a month. We process 300+ bank statements for clients and the accuracy is insane."</p>
            </div>
            
            <div class="testimonial-card middle-card">
                <div class="card-header">
                    <div class="avatar-initial">P</div>
                    <div class="user-info">
                        <h4>Priya Mehta</h4>
                        <p>Finance Manager, Finova Startup</p>
                    </div>
                </div>
                <div class="stars">★★★★★</div>
                <p class="quote">"Finally — a converter that handles SBI's terrible PDF format correctly. Worth every rupee."</p>
            </div>
            
            <div class="testimonial-card">
                <div class="card-header">
                    <div class="avatar-initial">A</div>
                    <div class="user-info">
                        <h4>Arjun Das</h4>
                        <p>CTO, Khata.io</p>
                    </div>
                </div>
                <div class="stars">★★★★★</div>
                <p class="quote">"We integrated the API into our reconciliation tool in 2 days. Documentation is clean, support is fast."</p>
            </div>
        </div>
    </section>

    <!-- Section Divider -->
    <div class="section-divider"></div>

    <!-- 9. FAQ SECTION -->
    <section class="faq scroll-reveal">
        <h2 class="section-title">Common questions</h2>
        
        <div class="faq-container">
            <div class="faq-item">
                <button class="faq-question">Which banks does Parsify support?<span class="faq-icon">+</span></button>
                <div class="faq-answer">
                    <p>We support over 50 Indian banks, including all major public and private sector banks (HDFC, SBI, ICICI, Axis, Kotak, PNB, Yes Bank, BOB, etc.). Our engine is constantly updated to handle their latest statement formats.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">Is my data safe? Do you store my statements?<span class="faq-icon">+</span></button>
                <div class="faq-answer">
                    <p>Your data is 100% safe. We have a strict zero data retention policy. Your PDF statements and the extracted data are permanently deleted from our servers immediately after the conversion process is complete.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">What output formats do you support?<span class="faq-icon">+</span></button>
                <div class="faq-answer">
                    <p>Currently, we support .xlsx (Excel) and .csv formats. These files are optimized to be easily imported into Tally, QuickBooks, Zoho Books, or your own custom ERP systems.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">Can Parsify handle scanned/image PDFs?<span class="faq-icon">+</span></button>
                <div class="faq-answer">
                    <p>Parsify is optimized for native digital PDFs (the ones you download directly from your bank's net banking portal). We are currently beta testing OCR for scanned image statements, which will be available in the Business tier soon.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">Is there an API for developers?<span class="faq-icon">+</span></button>
                <div class="faq-answer">
                    <p>Yes, we offer a robust REST API available on our Business tier. It features webhook notifications upon conversion completion and detailed API documentation to get you up and running quickly.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">Do I get a GST invoice?<span class="faq-icon">+</span></button>
                <div class="faq-answer">
                    <p>Absolutely. You can add your company's GST details during checkout, and a valid tax invoice will be sent to your email automatically for every billing cycle.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 10. FINAL CTA SECTION -->
    <section class="final-cta scroll-reveal">
        <div class="cta-mesh-bg"></div>
        <div class="cta-content">
            <h2>Stop wrestling with PDFs.</h2>
            <p>Join 2,400+ finance professionals who converted to clean data — for free.</p>
            <a href="#start" class="btn-primary btn-large">Convert Your First Statement &rarr;</a>
            <p class="cta-subtext">No credit card · No setup · Ready in 30 seconds</p>
        </div>
    </section>

    <!-- 11. FOOTER -->
    <footer>
        <div class="footer-container">
            <div class="footer-brand">
                <div class="logo">
                    <div class="logo-icon"></div>
                    Parsify
                </div>
                <p>From PDF Chaos to Clean Data — in Seconds.</p>
            </div>
            
            <div class="footer-links">
                <div class="link-column">
                    <h4>Product</h4>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Changelog</a>
                    <a href="#">Security</a>
                </div>
                <div class="link-column">
                    <h4>Developers</h4>
                    <a href="#">API Docs</a>
                    <a href="#">Webhooks</a>
                    <a href="#">Status</a>
                </div>
                <div class="link-column">
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
                <div class="link-column">
                    <h4>Legal</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Refund Policy</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Parsify. All rights reserved.</p>
            <div class="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <span>Made with &hearts; in India</span>
            </div>
        </div>
    </footer>
      ` }} />
    </>
  );
}
