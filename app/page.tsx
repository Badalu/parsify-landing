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

});

  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{ __html: 
        body > nav, body > header, body > footer, .Navbar { display: none !important; }
        \/\*\ \
\ \ \P\a\r\s\i\f\y\ \L\a\n\d\i\n\g\ \P\a\g\e\ \S\t\y\l\e\s\
\ \ \C\o\l\o\r\ \S\y\s\t\e\m\ \&\ \V\a\r\i\a\b\l\e\s\ \
\*\/\
\:\r\o\o\t\ \{\
\ \ \-\-\c\o\l\o\r\-\b\g\:\ \#\0\A\0\C\1\0\;\
\ \ \-\-\c\o\l\o\r\-\s\u\r\f\a\c\e\:\ \#\1\1\1\3\1\8\;\
\ \ \-\-\c\o\l\o\r\-\b\o\r\d\e\r\:\ \#\1\E\2\2\2\8\;\
\ \ \-\-\c\o\l\o\r\-\a\c\c\e\n\t\:\ \#\0\0\D\4\A\A\;\
\ \ \-\-\c\o\l\o\r\-\a\c\c\e\n\t\-\d\i\m\:\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\0\9\4\)\;\ \/\*\ \1\8\ \i\n\ \h\e\x\ \i\s\ \a\p\p\r\o\x\ \9\.\4\%\ \o\p\a\c\i\t\y\ \*\/\
\ \ \-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\:\ \#\F\0\F\2\F\5\;\
\ \ \-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\:\ \#\8\B\9\0\9\9\;\
\ \ \-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\:\ \#\4\A\5\0\6\0\;\
\ \ \-\-\c\o\l\o\r\-\w\a\r\n\i\n\g\:\ \#\F\5\A\6\2\3\;\
\ \ \-\-\c\o\l\o\r\-\s\u\c\c\e\s\s\:\ \#\2\2\C\5\5\E\;\
\
\ \ \/\*\ \T\y\p\o\g\r\a\p\h\y\ \V\a\r\i\a\b\l\e\s\ \*\/\
\ \ \-\-\f\o\n\t\-\d\i\s\p\l\a\y\:\ \'\D\M\ \S\e\r\i\f\ \D\i\s\p\l\a\y\'\,\ \s\e\r\i\f\;\
\ \ \-\-\f\o\n\t\-\h\e\a\d\i\n\g\:\ \'\S\y\n\e\'\,\ \s\a\n\s\-\s\e\r\i\f\;\
\ \ \-\-\f\o\n\t\-\b\o\d\y\:\ \'\D\M\ \S\a\n\s\'\,\ \s\a\n\s\-\s\e\r\i\f\;\
\ \ \-\-\f\o\n\t\-\m\o\n\o\:\ \'\J\e\t\B\r\a\i\n\s\ \M\o\n\o\'\,\ \m\o\n\o\s\p\a\c\e\;\
\}\
\
\/\*\ \R\e\s\e\t\ \&\ \B\a\s\e\ \S\t\y\l\e\s\ \*\/\
\*\ \{\
\ \ \m\a\r\g\i\n\:\ \0\;\
\ \ \p\a\d\d\i\n\g\:\ \0\;\
\ \ \b\o\x\-\s\i\z\i\n\g\:\ \b\o\r\d\e\r\-\b\o\x\;\
\}\
\
\h\t\m\l\ \{\
\ \ \s\c\r\o\l\l\-\b\e\h\a\v\i\o\r\:\ \s\m\o\o\t\h\;\
\}\
\
\b\o\d\y\ \{\
\ \ \b\a\c\k\g\r\o\u\n\d\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\b\g\)\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\b\o\d\y\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \4\0\0\;\
\ \ \l\i\n\e\-\h\e\i\g\h\t\:\ \1\.\6\;\
\ \ \o\v\e\r\f\l\o\w\-\x\:\ \h\i\d\d\e\n\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\}\
\
\/\*\ \B\a\c\k\g\r\o\u\n\d\ \G\r\i\d\ \P\a\t\t\e\r\n\ \*\/\
\.\b\g\-\g\r\i\d\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \f\i\x\e\d\;\
\ \ \t\o\p\:\ \0\;\
\ \ \l\e\f\t\:\ \0\;\
\ \ \w\i\d\t\h\:\ \1\0\0\v\w\;\
\ \ \h\e\i\g\h\t\:\ \1\0\0\v\h\;\
\ \ \z\-\i\n\d\e\x\:\ \-\1\;\
\ \ \b\a\c\k\g\r\o\u\n\d\-\i\m\a\g\e\:\ \r\a\d\i\a\l\-\g\r\a\d\i\e\n\t\(\v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\-\d\i\m\)\ \1\p\x\,\ \t\r\a\n\s\p\a\r\e\n\t\ \1\p\x\)\;\
\ \ \b\a\c\k\g\r\o\u\n\d\-\s\i\z\e\:\ \3\2\p\x\ \3\2\p\x\;\
\ \ \o\p\a\c\i\t\y\:\ \0\.\3\;\
\ \ \p\o\i\n\t\e\r\-\e\v\e\n\t\s\:\ \n\o\n\e\;\
\}\
\
\/\*\ \T\y\p\o\g\r\a\p\h\y\ \B\a\s\e\ \*\/\
\h\1\,\ \h\2\,\ \h\3\,\ \h\4\,\ \h\5\,\ \h\6\ \{\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \7\0\0\;\
\ \ \l\i\n\e\-\h\e\i\g\h\t\:\ \1\.\2\;\
\}\
\
\h\1\ \{\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\d\i\s\p\l\a\y\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \4\0\0\;\
\}\
\
\a\ \{\
\ \ \t\e\x\t\-\d\e\c\o\r\a\t\i\o\n\:\ \n\o\n\e\;\
\ \ \c\o\l\o\r\:\ \i\n\h\e\r\i\t\;\
\}\
\
\u\l\ \{\
\ \ \l\i\s\t\-\s\t\y\l\e\:\ \n\o\n\e\;\
\}\
\
\/\*\ \U\t\i\l\i\t\i\e\s\ \*\/\
\.\t\e\x\t\-\p\r\i\m\a\r\y\ \{\ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\ \}\
\.\t\e\x\t\-\t\e\a\l\ \{\ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\ \}\
\.\t\e\x\t\-\s\e\c\o\n\d\a\r\y\ \{\ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\ \}\
\
\.\s\e\c\t\i\o\n\-\d\i\v\i\d\e\r\ \{\
\ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \h\e\i\g\h\t\:\ \1\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \l\i\n\e\a\r\-\g\r\a\d\i\e\n\t\(\9\0\d\e\g\,\ \t\r\a\n\s\p\a\r\e\n\t\,\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\,\ \t\r\a\n\s\p\a\r\e\n\t\)\;\
\ \ \m\a\r\g\i\n\:\ \4\r\e\m\ \0\;\
\}\
\
\/\*\ \S\c\r\o\l\l\ \R\e\v\e\a\l\ \*\/\
\.\s\c\r\o\l\l\-\r\e\v\e\a\l\ \{\
\ \ \o\p\a\c\i\t\y\:\ \0\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\3\0\p\x\)\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \o\p\a\c\i\t\y\ \0\.\8\s\ \e\a\s\e\-\o\u\t\,\ \t\r\a\n\s\f\o\r\m\ \0\.\8\s\ \e\a\s\e\-\o\u\t\;\
\}\
\
\.\s\c\r\o\l\l\-\r\e\v\e\a\l\.\v\i\s\i\b\l\e\ \{\
\ \ \o\p\a\c\i\t\y\:\ \1\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\0\)\;\
\}\
\
\/\*\ \B\u\t\t\o\n\s\ \*\/\
\.\b\t\n\-\p\r\i\m\a\r\y\ \{\
\ \ \d\i\s\p\l\a\y\:\ \i\n\l\i\n\e\-\f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \g\a\p\:\ \0\.\5\r\e\m\;\
\ \ \b\a\c\k\g\r\o\u\n\d\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \c\o\l\o\r\:\ \#\0\0\0\;\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \7\0\0\;\
\ \ \p\a\d\d\i\n\g\:\ \0\.\8\7\5\r\e\m\ \1\.\7\5\r\e\m\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \9\9\9\9\p\x\;\ \/\*\ \P\i\l\l\ \s\h\a\p\e\ \*\/\
\ \ \b\o\r\d\e\r\:\ \n\o\n\e\;\
\ \ \c\u\r\s\o\r\:\ \p\o\i\n\t\e\r\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \a\l\l\ \0\.\3\s\ \e\a\s\e\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \4\p\x\ \1\5\p\x\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\1\5\)\;\
\}\
\
\.\b\t\n\-\p\r\i\m\a\r\y\:\h\o\v\e\r\ \{\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \6\p\x\ \2\0\p\x\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\4\)\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\-\2\p\x\)\;\
\}\
\
\.\b\t\n\-\g\h\o\s\t\ \{\
\ \ \d\i\s\p\l\a\y\:\ \i\n\l\i\n\e\-\f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \g\a\p\:\ \0\.\5\r\e\m\;\
\ \ \b\a\c\k\g\r\o\u\n\d\-\c\o\l\o\r\:\ \t\r\a\n\s\p\a\r\e\n\t\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \6\0\0\;\
\ \ \p\a\d\d\i\n\g\:\ \0\.\8\7\5\r\e\m\ \1\.\7\5\r\e\m\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \9\9\9\9\p\x\;\
\ \ \b\o\r\d\e\r\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \c\u\r\s\o\r\:\ \p\o\i\n\t\e\r\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \a\l\l\ \0\.\3\s\ \e\a\s\e\;\
\}\
\
\.\b\t\n\-\g\h\o\s\t\:\h\o\v\e\r\ \{\
\ \ \b\a\c\k\g\r\o\u\n\d\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\r\f\a\c\e\)\;\
\ \ \b\o\r\d\e\r\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\}\
\
\.\b\t\n\-\b\l\o\c\k\ \{\
\ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\}\
\
\.\b\t\n\-\l\a\r\g\e\ \{\
\ \ \p\a\d\d\i\n\g\:\ \1\.\2\5\r\e\m\ \2\.\5\r\e\m\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\1\2\5\r\e\m\;\
\}\
\
\/\*\ \1\.\ \S\T\I\C\K\Y\ \N\A\V\B\A\R\ \*\/\
\#\n\a\v\b\a\r\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \f\i\x\e\d\;\
\ \ \t\o\p\:\ \0\;\
\ \ \l\e\f\t\:\ \0\;\
\ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \z\-\i\n\d\e\x\:\ \1\0\0\0\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \a\l\l\ \0\.\3\s\ \e\a\s\e\;\
\ \ \p\a\d\d\i\n\g\:\ \1\.\2\5\r\e\m\ \0\;\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \t\r\a\n\s\p\a\r\e\n\t\;\
\}\
\
\#\n\a\v\b\a\r\.\s\c\r\o\l\l\e\d\ \{\
\ \ \b\a\c\k\g\r\o\u\n\d\-\c\o\l\o\r\:\ \r\g\b\a\(\1\0\,\ \1\2\,\ \1\6\,\ \0\.\8\)\;\
\ \ \b\a\c\k\d\r\o\p\-\f\i\l\t\e\r\:\ \b\l\u\r\(\1\2\p\x\)\;\
\ \ \-\w\e\b\k\i\t\-\b\a\c\k\d\r\o\p\-\f\i\l\t\e\r\:\ \b\l\u\r\(\1\2\p\x\)\;\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\3\)\;\ \/\*\ \T\h\i\n\ \t\e\a\l\ \l\i\n\e\ \*\/\
\ \ \p\a\d\d\i\n\g\:\ \1\r\e\m\ \0\;\
\}\
\
\.\n\a\v\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\ \ \p\a\d\d\i\n\g\:\ \0\ \2\r\e\m\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \s\p\a\c\e\-\b\e\t\w\e\e\n\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\}\
\
\.\l\o\g\o\ \{\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\5\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \7\0\0\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \g\a\p\:\ \0\.\5\r\e\m\;\
\}\
\
\.\l\o\g\o\-\i\c\o\n\ \{\
\ \ \w\i\d\t\h\:\ \1\2\p\x\;\
\ \ \h\e\i\g\h\t\:\ \1\2\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\}\
\
\.\n\a\v\-\l\i\n\k\s\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \g\a\p\:\ \2\r\e\m\;\
\}\
\
\.\n\a\v\-\l\i\n\k\s\ \a\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\5\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \5\0\0\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \c\o\l\o\r\ \0\.\2\s\;\
\}\
\
\.\n\a\v\-\l\i\n\k\s\ \a\:\h\o\v\e\r\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\}\
\
\.\b\t\n\-\n\a\v\ \{\
\ \ \p\a\d\d\i\n\g\:\ \0\.\6\r\e\m\ \1\.\2\5\r\e\m\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\r\e\m\;\
\}\
\
\/\*\ \2\.\ \H\E\R\O\ \S\E\C\T\I\O\N\ \*\/\
\.\h\e\r\o\ \{\
\ \ \p\a\d\d\i\n\g\-\t\o\p\:\ \8\r\e\m\;\
\ \ \p\a\d\d\i\n\g\-\b\o\t\t\o\m\:\ \4\r\e\m\;\
\ \ \m\i\n\-\h\e\i\g\h\t\:\ \9\0\v\h\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \o\v\e\r\f\l\o\w\:\ \h\i\d\d\e\n\;\
\}\
\
\.\h\e\r\o\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\ \ \p\a\d\d\i\n\g\:\ \0\ \2\r\e\m\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \g\a\p\:\ \4\r\e\m\;\
\}\
\
\.\h\e\r\o\-\c\o\n\t\e\n\t\ \{\
\ \ \f\l\e\x\:\ \0\ \0\ \5\5\%\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \5\5\%\;\
\ \ \z\-\i\n\d\e\x\:\ \2\;\
\}\
\
\.\e\y\e\b\r\o\w\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\8\7\5\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \7\0\0\;\
\ \ \l\e\t\t\e\r\-\s\p\a\c\i\n\g\:\ \0\.\1\e\m\;\
\ \ \t\e\x\t\-\t\r\a\n\s\f\o\r\m\:\ \u\p\p\e\r\c\a\s\e\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\ \ \d\i\s\p\l\a\y\:\ \i\n\l\i\n\e\-\b\l\o\c\k\;\
\ \ \o\p\a\c\i\t\y\:\ \0\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \f\a\d\e\U\p\ \0\.\8\s\ \e\a\s\e\ \f\o\r\w\a\r\d\s\ \0\m\s\;\
\}\
\
\.\h\e\r\o\ \h\1\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \4\.\5\r\e\m\;\
\ \ \l\i\n\e\-\h\e\i\g\h\t\:\ \1\.\1\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\ \ \o\p\a\c\i\t\y\:\ \0\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \f\a\d\e\U\p\ \0\.\8\s\ \e\a\s\e\ \f\o\r\w\a\r\d\s\ \1\5\0\m\s\;\
\}\
\
\.\h\e\r\o\ \.\s\u\b\t\e\x\t\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\1\2\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \9\0\%\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \2\.\5\r\e\m\;\
\ \ \o\p\a\c\i\t\y\:\ \0\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \f\a\d\e\U\p\ \0\.\8\s\ \e\a\s\e\ \f\o\r\w\a\r\d\s\ \3\0\0\m\s\;\
\}\
\
\.\c\t\a\-\g\r\o\u\p\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \g\a\p\:\ \1\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \2\r\e\m\;\
\ \ \o\p\a\c\i\t\y\:\ \0\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \f\a\d\e\U\p\ \0\.\8\s\ \e\a\s\e\ \f\o\r\w\a\r\d\s\ \4\5\0\m\s\;\
\}\
\
\.\s\o\c\i\a\l\-\p\r\o\o\f\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \g\a\p\:\ \1\r\e\m\;\
\ \ \o\p\a\c\i\t\y\:\ \0\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \f\a\d\e\U\p\ \0\.\8\s\ \e\a\s\e\ \f\o\r\w\a\r\d\s\ \6\0\0\m\s\;\
\}\
\
\.\a\v\a\t\a\r\s\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\}\
\
\.\a\v\a\t\a\r\s\ \i\m\g\ \{\
\ \ \w\i\d\t\h\:\ \3\2\p\x\;\
\ \ \h\e\i\g\h\t\:\ \3\2\p\x\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \5\0\%\;\
\ \ \b\o\r\d\e\r\:\ \2\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\g\)\;\
\ \ \m\a\r\g\i\n\-\l\e\f\t\:\ \-\1\0\p\x\;\
\}\
\
\.\a\v\a\t\a\r\s\ \i\m\g\:\f\i\r\s\t\-\c\h\i\l\d\ \{\
\ \ \m\a\r\g\i\n\-\l\e\f\t\:\ \0\;\
\}\
\
\.\s\o\c\i\a\l\-\p\r\o\o\f\ \p\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\8\7\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\}\
\
\@\k\e\y\f\r\a\m\e\s\ \f\a\d\e\U\p\ \{\
\ \ \f\r\o\m\ \{\ \o\p\a\c\i\t\y\:\ \0\;\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\2\0\p\x\)\;\ \}\
\ \ \t\o\ \{\ \o\p\a\c\i\t\y\:\ \1\;\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\0\)\;\ \}\
\}\
\
\/\*\ \H\E\R\O\ \G\R\A\P\H\I\C\ \(\R\i\g\h\t\ \4\5\%\)\ \*\/\
\.\h\e\r\o\-\g\r\a\p\h\i\c\ \{\
\ \ \f\l\e\x\:\ \0\ \0\ \4\5\%\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \h\e\i\g\h\t\:\ \5\0\0\p\x\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\}\
\
\.\h\e\r\o\-\g\l\o\w\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \5\0\%\;\
\ \ \l\e\f\t\:\ \5\0\%\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\(\-\5\0\%\,\ \-\5\0\%\)\;\
\ \ \w\i\d\t\h\:\ \3\0\0\p\x\;\
\ \ \h\e\i\g\h\t\:\ \3\0\0\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \f\i\l\t\e\r\:\ \b\l\u\r\(\1\2\0\p\x\)\;\
\ \ \o\p\a\c\i\t\y\:\ \0\.\1\5\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \5\0\%\;\
\ \ \z\-\i\n\d\e\x\:\ \0\;\
\}\
\
\/\*\ \F\l\o\a\t\i\n\g\ \B\a\d\g\e\s\ \*\/\
\.\f\l\o\a\t\i\n\g\-\b\a\d\g\e\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \r\g\b\a\(\1\7\,\ \1\9\,\ \2\4\,\ \0\.\6\)\;\
\ \ \b\a\c\k\d\r\o\p\-\f\i\l\t\e\r\:\ \b\l\u\r\(\8\p\x\)\;\
\ \ \b\o\r\d\e\r\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \p\a\d\d\i\n\g\:\ \0\.\5\r\e\m\ \1\r\e\m\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \8\p\x\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\8\7\5\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \5\0\0\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\ \ \z\-\i\n\d\e\x\:\ \1\0\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \8\p\x\ \3\2\p\x\ \r\g\b\a\(\0\,\0\,\0\,\0\.\2\)\;\
\}\
\
\.\b\a\d\g\e\-\1\ \{\
\ \ \t\o\p\:\ \1\0\%\;\
\ \ \r\i\g\h\t\:\ \-\5\%\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \r\o\t\a\t\e\(\-\3\d\e\g\)\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \f\l\o\a\t\ \3\.\5\s\ \e\a\s\e\-\i\n\-\o\u\t\ \i\n\f\i\n\i\t\e\;\
\}\
\
\.\b\a\d\g\e\-\2\ \{\
\ \ \b\o\t\t\o\m\:\ \2\0\%\;\
\ \ \l\e\f\t\:\ \-\1\5\%\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \r\o\t\a\t\e\(\2\d\e\g\)\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \f\l\o\a\t\ \4\s\ \e\a\s\e\-\i\n\-\o\u\t\ \i\n\f\i\n\i\t\e\ \1\s\;\
\}\
\
\.\b\a\d\g\e\-\3\ \{\
\ \ \b\o\t\t\o\m\:\ \5\%\;\
\ \ \r\i\g\h\t\:\ \1\0\%\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \r\o\t\a\t\e\(\-\1\d\e\g\)\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \f\l\o\a\t\ \3\s\ \e\a\s\e\-\i\n\-\o\u\t\ \i\n\f\i\n\i\t\e\ \0\.\5\s\;\
\}\
\
\@\k\e\y\f\r\a\m\e\s\ \f\l\o\a\t\ \{\
\ \ \0\%\,\ \1\0\0\%\ \{\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\0\)\ \r\o\t\a\t\e\(\v\a\r\(\-\-\r\o\t\,\ \0\d\e\g\)\)\;\ \}\
\ \ \5\0\%\ \{\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\-\1\0\p\x\)\ \r\o\t\a\t\e\(\v\a\r\(\-\-\r\o\t\,\ \0\d\e\g\)\)\;\ \}\
\}\
\
\.\b\a\d\g\e\-\1\ \{\ \-\-\r\o\t\:\ \-\3\d\e\g\;\ \}\
\.\b\a\d\g\e\-\2\ \{\ \-\-\r\o\t\:\ \2\d\e\g\;\ \}\
\.\b\a\d\g\e\-\3\ \{\ \-\-\r\o\t\:\ \-\1\d\e\g\;\ \}\
\
\/\*\ \C\o\n\v\e\r\s\i\o\n\ \P\a\n\e\l\ \*\/\
\.\c\o\n\v\e\r\s\i\o\n\-\p\a\n\e\l\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \h\e\i\g\h\t\:\ \4\0\0\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\r\f\a\c\e\)\;\
\ \ \b\o\r\d\e\r\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \1\6\p\x\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \2\0\p\x\ \4\0\p\x\ \r\g\b\a\(\0\,\0\,\0\,\0\.\5\)\,\ \0\ \0\ \0\ \1\p\x\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\1\)\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \o\v\e\r\f\l\o\w\:\ \h\i\d\d\e\n\;\
\ \ \z\-\i\n\d\e\x\:\ \2\;\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\m\o\n\o\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\7\5\r\e\m\;\
\}\
\
\.\p\d\f\-\s\i\d\e\,\ \.\e\x\c\e\l\-\s\i\d\e\ \{\
\ \ \f\l\e\x\:\ \1\;\
\ \ \p\a\d\d\i\n\g\:\ \1\.\5\r\e\m\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \g\a\p\:\ \0\.\5\r\e\m\;\
\}\
\
\.\p\d\f\-\s\i\d\e\ \{\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \#\1\1\1\3\1\8\;\
\ \ \b\o\r\d\e\r\-\r\i\g\h\t\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \/\*\ \T\h\e\ \P\D\F\ \s\i\d\e\ \s\t\a\r\t\s\ \f\u\l\l\y\ \v\i\s\i\b\l\e\,\ \E\x\c\e\l\ \s\i\d\e\ \h\i\d\d\e\n\ \*\/\
\}\
\
\.\e\x\c\e\l\-\s\i\d\e\ \{\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \#\0\d\1\2\1\7\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \/\*\ \A\n\i\m\a\t\i\o\n\ \h\a\n\d\l\e\s\ \v\i\s\i\b\i\l\i\t\y\ \*\/\
\}\
\
\.\t\a\b\l\e\-\h\e\a\d\e\r\ \{\
\ \ \d\i\s\p\l\a\y\:\ \g\r\i\d\;\
\ \ \g\r\i\d\-\t\e\m\p\l\a\t\e\-\c\o\l\u\m\n\s\:\ \2\f\r\ \3\f\r\ \1\.\5\f\r\ \1\.\5\f\r\ \2\f\r\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \6\0\0\;\
\ \ \p\a\d\d\i\n\g\-\b\o\t\t\o\m\:\ \0\.\5\r\e\m\;\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \0\.\5\r\e\m\;\
\}\
\
\.\e\x\c\e\l\-\h\e\a\d\e\r\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\-\d\i\m\)\;\
\}\
\
\.\r\o\w\ \{\
\ \ \d\i\s\p\l\a\y\:\ \g\r\i\d\;\
\ \ \g\r\i\d\-\t\e\m\p\l\a\t\e\-\c\o\l\u\m\n\s\:\ \2\f\r\ \3\f\r\ \1\.\5\f\r\ \1\.\5\f\r\ \2\f\r\;\
\ \ \p\a\d\d\i\n\g\:\ \0\.\5\r\e\m\ \0\;\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \r\g\b\a\(\2\5\5\,\2\5\5\,\2\5\5\,\0\.\0\2\)\;\
\}\
\
\.\r\o\w\-\m\e\s\s\y\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\}\
\
\.\r\o\w\-\m\e\s\s\y\ \.\s\c\r\a\m\b\l\e\d\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\w\a\r\n\i\n\g\)\;\
\ \ \f\o\n\t\-\s\t\y\l\e\:\ \i\t\a\l\i\c\;\
\ \ \l\e\t\t\e\r\-\s\p\a\c\i\n\g\:\ \1\p\x\;\
\}\
\
\.\r\o\w\-\m\e\s\s\y\.\b\l\u\r\r\e\d\ \{\
\ \ \f\i\l\t\e\r\:\ \b\l\u\r\(\3\p\x\)\;\
\ \ \o\p\a\c\i\t\y\:\ \0\.\5\;\
\}\
\
\.\r\o\w\-\c\l\e\a\n\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\}\
\
\.\a\m\o\u\n\t\-\d\e\b\i\t\ \{\ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\w\a\r\n\i\n\g\)\;\ \}\
\.\a\m\o\u\n\t\-\c\r\e\d\i\t\ \{\ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\c\c\e\s\s\)\;\ \}\
\
\.\s\k\e\l\e\t\o\n\-\r\o\w\ \d\i\v\ \{\
\ \ \h\e\i\g\h\t\:\ \1\2\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \2\p\x\;\
\ \ \m\a\r\g\i\n\-\r\i\g\h\t\:\ \8\p\x\;\
\}\
\
\.\c\o\n\v\e\r\s\i\o\n\-\a\r\r\o\w\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \5\0\%\;\
\ \ \l\e\f\t\:\ \5\0\%\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\(\-\5\0\%\,\ \-\5\0\%\)\;\
\ \ \w\i\d\t\h\:\ \4\0\p\x\;\
\ \ \h\e\i\g\h\t\:\ \4\0\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \5\0\%\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \c\o\l\o\r\:\ \#\0\0\0\;\
\ \ \z\-\i\n\d\e\x\:\ \1\0\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \0\ \2\0\p\x\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\4\)\;\
\ \ \/\*\ \P\u\l\s\i\n\g\ \a\n\i\m\a\t\i\o\n\ \*\/\
\ \ \a\n\i\m\a\t\i\o\n\:\ \p\u\l\s\e\-\a\r\r\o\w\ \3\.\5\s\ \i\n\f\i\n\i\t\e\;\
\}\
\
\.\e\x\p\o\r\t\e\d\-\b\a\d\g\e\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \1\0\p\x\;\
\ \ \r\i\g\h\t\:\ \1\0\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \r\g\b\a\(\3\4\,\ \1\9\7\,\ \9\4\,\ \0\.\2\)\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\c\c\e\s\s\)\;\
\ \ \p\a\d\d\i\n\g\:\ \2\p\x\ \8\p\x\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \4\p\x\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\7\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \b\o\l\d\;\
\ \ \o\p\a\c\i\t\y\:\ \0\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \s\h\o\w\-\b\a\d\g\e\ \3\.\5\s\ \i\n\f\i\n\i\t\e\;\
\}\
\
\/\*\ \S\w\e\e\p\ \A\n\i\m\a\t\i\o\n\ \L\o\g\i\c\ \*\/\
\/\*\ \W\e\ \s\i\m\u\l\a\t\e\ \a\ \s\w\e\e\p\ \b\y\ \h\a\v\i\n\g\ \t\h\e\ \e\x\c\e\l\ \s\i\d\e\ \r\e\v\e\a\l\ \o\v\e\r\ \t\h\e\ \p\d\f\ \s\i\d\e\ \*\/\
\.\e\x\c\e\l\-\s\i\d\e\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \0\;\
\ \ \r\i\g\h\t\:\ \0\;\
\ \ \w\i\d\t\h\:\ \5\0\%\;\ \/\*\ \I\t\ \t\a\k\e\s\ \t\h\e\ \r\i\g\h\t\ \h\a\l\f\ \n\a\t\i\v\e\l\y\ \*\/\
\ \ \h\e\i\g\h\t\:\ \1\0\0\%\;\
\ \ \b\o\r\d\e\r\-\l\e\f\t\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \c\l\i\p\-\p\a\t\h\:\ \i\n\s\e\t\(\0\ \1\0\0\%\ \0\ \0\)\;\ \/\*\ \H\i\d\d\e\n\ \i\n\i\t\i\a\l\l\y\ \*\/\
\ \ \a\n\i\m\a\t\i\o\n\:\ \s\w\e\e\p\ \3\.\5\s\ \i\n\f\i\n\i\t\e\;\
\}\
\
\@\k\e\y\f\r\a\m\e\s\ \s\w\e\e\p\ \{\
\ \ \0\%\,\ \2\0\%\ \{\ \c\l\i\p\-\p\a\t\h\:\ \i\n\s\e\t\(\0\ \1\0\0\%\ \0\ \0\)\;\ \}\ \/\*\ \W\a\i\t\ \*\/\
\ \ \4\0\%\,\ \8\0\%\ \{\ \c\l\i\p\-\p\a\t\h\:\ \i\n\s\e\t\(\0\ \0\ \0\ \0\)\;\ \}\ \/\*\ \R\e\v\e\a\l\ \*\/\
\ \ \1\0\0\%\ \{\ \c\l\i\p\-\p\a\t\h\:\ \i\n\s\e\t\(\0\ \1\0\0\%\ \0\ \0\)\;\ \}\ \/\*\ \R\e\s\e\t\ \*\/\
\}\
\
\@\k\e\y\f\r\a\m\e\s\ \s\h\o\w\-\b\a\d\g\e\ \{\
\ \ \0\%\,\ \4\5\%\ \{\ \o\p\a\c\i\t\y\:\ \0\;\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\-\5\p\x\)\;\ \}\
\ \ \5\0\%\,\ \8\0\%\ \{\ \o\p\a\c\i\t\y\:\ \1\;\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\0\)\;\ \}\
\ \ \1\0\0\%\ \{\ \o\p\a\c\i\t\y\:\ \0\;\ \}\
\}\
\
\@\k\e\y\f\r\a\m\e\s\ \p\u\l\s\e\-\a\r\r\o\w\ \{\
\ \ \0\%\,\ \1\0\0\%\ \{\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\(\-\5\0\%\,\ \-\5\0\%\)\ \s\c\a\l\e\(\1\)\;\ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \0\ \0\ \0\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\4\)\;\ \}\
\ \ \5\0\%\ \{\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\(\-\5\0\%\,\ \-\5\0\%\)\ \s\c\a\l\e\(\1\.\1\)\;\ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \0\ \0\ \1\5\p\x\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\)\;\ \}\
\}\
\
\
\/\*\ \3\.\ \L\O\G\O\ \S\T\R\I\P\ \/\ \T\R\U\S\T\ \B\A\R\ \*\/\
\.\t\r\u\s\t\-\b\a\r\ \{\
\ \ \p\a\d\d\i\n\g\:\ \3\r\e\m\ \0\;\
\ \ \b\o\r\d\e\r\-\t\o\p\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \r\g\b\a\(\1\7\,\ \1\9\,\ \2\4\,\ \0\.\3\)\;\
\ \ \o\v\e\r\f\l\o\w\:\ \h\i\d\d\e\n\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \g\a\p\:\ \1\.\5\r\e\m\;\
\}\
\
\.\t\r\u\s\t\-\t\i\t\l\e\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\8\7\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\ \ \t\e\x\t\-\t\r\a\n\s\f\o\r\m\:\ \u\p\p\e\r\c\a\s\e\;\
\ \ \l\e\t\t\e\r\-\s\p\a\c\i\n\g\:\ \0\.\0\5\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \6\0\0\;\
\}\
\
\.\m\a\r\q\u\e\e\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \o\v\e\r\f\l\o\w\:\ \h\i\d\d\e\n\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\}\
\
\/\*\ \F\a\d\e\ \e\d\g\e\s\ \*\/\
\.\m\a\r\q\u\e\e\-\c\o\n\t\a\i\n\e\r\:\:\b\e\f\o\r\e\,\
\.\m\a\r\q\u\e\e\-\c\o\n\t\a\i\n\e\r\:\:\a\f\t\e\r\ \{\
\ \ \c\o\n\t\e\n\t\:\ \"\"\;\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \0\;\
\ \ \w\i\d\t\h\:\ \1\5\0\p\x\;\
\ \ \h\e\i\g\h\t\:\ \1\0\0\%\;\
\ \ \z\-\i\n\d\e\x\:\ \2\;\
\}\
\
\.\m\a\r\q\u\e\e\-\c\o\n\t\a\i\n\e\r\:\:\b\e\f\o\r\e\ \{\
\ \ \l\e\f\t\:\ \0\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \l\i\n\e\a\r\-\g\r\a\d\i\e\n\t\(\t\o\ \r\i\g\h\t\,\ \v\a\r\(\-\-\c\o\l\o\r\-\b\g\)\,\ \t\r\a\n\s\p\a\r\e\n\t\)\;\
\}\
\
\.\m\a\r\q\u\e\e\-\c\o\n\t\a\i\n\e\r\:\:\a\f\t\e\r\ \{\
\ \ \r\i\g\h\t\:\ \0\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \l\i\n\e\a\r\-\g\r\a\d\i\e\n\t\(\t\o\ \l\e\f\t\,\ \v\a\r\(\-\-\c\o\l\o\r\-\b\g\)\,\ \t\r\a\n\s\p\a\r\e\n\t\)\;\
\}\
\
\.\m\a\r\q\u\e\e\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \w\i\d\t\h\:\ \f\i\t\-\c\o\n\t\e\n\t\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \m\a\r\q\u\e\e\ \2\5\s\ \l\i\n\e\a\r\ \i\n\f\i\n\i\t\e\;\
\}\
\
\.\m\a\r\q\u\e\e\ \s\p\a\n\ \{\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\5\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \7\0\0\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \o\p\a\c\i\t\y\:\ \0\.\4\;\
\ \ \m\a\r\g\i\n\:\ \0\ \3\r\e\m\;\
\ \ \w\h\i\t\e\-\s\p\a\c\e\:\ \n\o\w\r\a\p\;\
\}\
\
\@\k\e\y\f\r\a\m\e\s\ \m\a\r\q\u\e\e\ \{\
\ \ \0\%\ \{\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\X\(\0\)\;\ \}\
\ \ \1\0\0\%\ \{\ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\X\(\-\5\0\%\)\;\ \}\ \/\*\ \T\r\a\n\s\l\a\t\e\ \b\y\ \h\a\l\f\ \s\i\n\c\e\ \w\e\ \d\u\p\l\i\c\a\t\e\d\ \i\t\e\m\s\ \*\/\
\}\
\
\/\*\ \4\.\ \"\H\O\W\ \I\T\ \W\O\R\K\S\"\ \S\E\C\T\I\O\N\ \*\/\
\.\h\o\w\-\i\t\-\w\o\r\k\s\ \{\
\ \ \p\a\d\d\i\n\g\:\ \8\r\e\m\ \2\r\e\m\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\ \ \t\e\x\t\-\a\l\i\g\n\:\ \c\e\n\t\e\r\;\
\}\
\
\.\s\e\c\t\i\o\n\-\t\i\t\l\e\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \3\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\r\e\m\;\
\}\
\
\.\s\e\c\t\i\o\n\-\s\u\b\t\i\t\l\e\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\2\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \4\r\e\m\;\
\}\
\
\.\s\t\e\p\s\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \s\p\a\c\e\-\b\e\t\w\e\e\n\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \g\a\p\:\ \2\r\e\m\;\
\ \ \m\a\r\g\i\n\-\t\o\p\:\ \4\r\e\m\;\
\}\
\
\.\s\t\e\p\-\c\o\n\n\e\c\t\o\r\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \3\0\p\x\;\ \/\*\ \A\l\i\g\n\e\d\ \w\i\t\h\ \i\c\o\n\ \c\e\n\t\e\r\s\ \r\o\u\g\h\l\y\ \*\/\
\ \ \l\e\f\t\:\ \1\0\%\;\
\ \ \r\i\g\h\t\:\ \1\0\%\;\
\ \ \h\e\i\g\h\t\:\ \2\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\-\i\m\a\g\e\:\ \l\i\n\e\a\r\-\g\r\a\d\i\e\n\t\(\9\0\d\e\g\,\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\ \5\0\%\,\ \t\r\a\n\s\p\a\r\e\n\t\ \5\0\%\)\;\
\ \ \b\a\c\k\g\r\o\u\n\d\-\s\i\z\e\:\ \1\0\p\x\ \2\p\x\;\
\ \ \z\-\i\n\d\e\x\:\ \0\;\
\ \ \o\p\a\c\i\t\y\:\ \0\.\3\;\
\}\
\
\.\c\o\n\n\e\c\t\o\r\-\d\o\t\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \-\3\p\x\;\
\ \ \l\e\f\t\:\ \0\;\
\ \ \w\i\d\t\h\:\ \8\p\x\;\
\ \ \h\e\i\g\h\t\:\ \8\p\x\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \5\0\%\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \0\ \1\0\p\x\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \t\r\a\v\e\l\-\d\o\t\ \4\s\ \l\i\n\e\a\r\ \i\n\f\i\n\i\t\e\;\
\}\
\
\@\k\e\y\f\r\a\m\e\s\ \t\r\a\v\e\l\-\d\o\t\ \{\
\ \ \0\%\ \{\ \l\e\f\t\:\ \0\;\ \o\p\a\c\i\t\y\:\ \0\;\ \}\
\ \ \1\0\%\ \{\ \o\p\a\c\i\t\y\:\ \1\;\ \}\
\ \ \9\0\%\ \{\ \o\p\a\c\i\t\y\:\ \1\;\ \}\
\ \ \1\0\0\%\ \{\ \l\e\f\t\:\ \1\0\0\%\;\ \o\p\a\c\i\t\y\:\ \0\;\ \}\
\}\
\
\.\s\t\e\p\-\c\a\r\d\ \{\
\ \ \f\l\e\x\:\ \1\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\r\f\a\c\e\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \1\6\p\x\;\
\ \ \p\a\d\d\i\n\g\:\ \2\.\5\r\e\m\ \2\r\e\m\;\
\ \ \t\e\x\t\-\a\l\i\g\n\:\ \l\e\f\t\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \z\-\i\n\d\e\x\:\ \1\;\
\ \ \b\o\r\d\e\r\-\l\e\f\t\:\ \2\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \1\0\p\x\ \3\0\p\x\ \r\g\b\a\(\0\,\0\,\0\,\0\.\2\)\;\
\}\
\
\.\s\t\e\p\-\i\c\o\n\-\w\r\a\p\p\e\r\ \{\
\ \ \w\i\d\t\h\:\ \6\0\p\x\;\
\ \ \h\e\i\g\h\t\:\ \6\0\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\-\d\i\m\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \1\2\p\x\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\}\
\
\.\s\t\e\p\-\i\c\o\n\ \{\
\ \ \w\i\d\t\h\:\ \2\8\p\x\;\
\ \ \h\e\i\g\h\t\:\ \2\8\p\x\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\}\
\
\.\s\t\e\p\-\c\a\r\d\ \h\3\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\5\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\r\e\m\;\
\}\
\
\.\s\t\e\p\-\c\a\r\d\ \p\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\r\e\m\;\
\}\
\
\/\*\ \5\.\ \F\E\A\T\U\R\E\ \G\R\I\D\ \*\/\
\.\f\e\a\t\u\r\e\s\ \{\
\ \ \p\a\d\d\i\n\g\:\ \8\r\e\m\ \2\r\e\m\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\}\
\
\.\s\e\c\t\i\o\n\-\h\e\a\d\e\r\ \{\
\ \ \t\e\x\t\-\a\l\i\g\n\:\ \c\e\n\t\e\r\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \5\r\e\m\;\
\}\
\
\.\f\e\a\t\u\r\e\-\g\r\i\d\ \{\
\ \ \d\i\s\p\l\a\y\:\ \g\r\i\d\;\
\ \ \g\r\i\d\-\t\e\m\p\l\a\t\e\-\c\o\l\u\m\n\s\:\ \r\e\p\e\a\t\(\3\,\ \1\f\r\)\;\
\ \ \g\a\p\:\ \1\.\5\r\e\m\;\
\}\
\
\.\f\e\a\t\u\r\e\-\c\a\r\d\ \{\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\r\f\a\c\e\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \1\6\p\x\;\
\ \ \p\a\d\d\i\n\g\:\ \2\.\5\r\e\m\ \2\r\e\m\;\
\ \ \b\o\r\d\e\r\:\ \1\p\x\ \s\o\l\i\d\ \t\r\a\n\s\p\a\r\e\n\t\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \a\l\l\ \0\.\3\s\ \e\a\s\e\;\
\ \ \c\u\r\s\o\r\:\ \d\e\f\a\u\l\t\;\
\}\
\
\.\f\e\a\t\u\r\e\-\c\a\r\d\:\h\o\v\e\r\ \{\
\ \ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\-\4\p\x\)\;\
\ \ \b\o\r\d\e\r\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \i\n\s\e\t\ \0\ \0\ \0\ \1\p\x\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\,\ \0\ \1\0\p\x\ \3\0\p\x\ \r\g\b\a\(\0\,\0\,\0\,\0\.\4\)\;\
\}\
\
\.\f\e\a\t\u\r\e\-\i\c\o\n\ \{\
\ \ \w\i\d\t\h\:\ \4\0\p\x\;\
\ \ \h\e\i\g\h\t\:\ \4\0\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\-\d\i\m\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \8\p\x\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\}\
\
\.\f\e\a\t\u\r\e\-\i\c\o\n\ \s\v\g\ \{\
\ \ \w\i\d\t\h\:\ \2\0\p\x\;\
\ \ \h\e\i\g\h\t\:\ \2\0\p\x\;\
\}\
\
\.\f\e\a\t\u\r\e\-\c\a\r\d\ \h\4\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\2\5\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \0\.\7\5\r\e\m\;\
\}\
\
\.\f\e\a\t\u\r\e\-\c\a\r\d\ \p\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\5\r\e\m\;\
\}\
\
\/\*\ \6\.\ \L\I\V\E\ \D\E\M\O\ \S\E\C\T\I\O\N\ \*\/\
\.\d\e\m\o\-\s\e\c\t\i\o\n\ \{\
\ \ \p\a\d\d\i\n\g\:\ \6\r\e\m\ \2\r\e\m\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\}\
\
\.\d\e\m\o\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\r\f\a\c\e\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \2\4\p\x\;\
\ \ \o\v\e\r\f\l\o\w\:\ \h\i\d\d\e\n\;\
\ \ \b\o\r\d\e\r\-\t\o\p\:\ \4\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \2\0\p\x\ \5\0\p\x\ \r\g\b\a\(\0\,\0\,\0\,\0\.\5\)\;\
\}\
\
\.\d\e\m\o\-\l\e\f\t\ \{\
\ \ \f\l\e\x\:\ \0\ \0\ \3\5\%\;\
\ \ \p\a\d\d\i\n\g\:\ \4\r\e\m\ \2\r\e\m\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \b\o\r\d\e\r\-\r\i\g\h\t\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \#\0\d\1\0\1\5\;\
\}\
\
\.\u\p\l\o\a\d\-\z\o\n\e\ \{\
\ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \b\o\r\d\e\r\:\ \2\p\x\ \d\a\s\h\e\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \1\6\p\x\;\
\ \ \p\a\d\d\i\n\g\:\ \3\r\e\m\ \2\r\e\m\;\
\ \ \t\e\x\t\-\a\l\i\g\n\:\ \c\e\n\t\e\r\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \a\l\l\ \0\.\3\s\;\
\}\
\
\.\u\p\l\o\a\d\-\z\o\n\e\:\h\o\v\e\r\ \{\
\ \ \b\o\r\d\e\r\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\0\5\)\;\
\}\
\
\.\u\p\l\o\a\d\-\z\o\n\e\-\i\c\o\n\ \{\
\ \ \w\i\d\t\h\:\ \4\8\p\x\;\
\ \ \h\e\i\g\h\t\:\ \4\8\p\x\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\r\e\m\;\
\}\
\
\.\u\p\l\o\a\d\-\t\e\x\t\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\1\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \5\0\0\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\}\
\
\.\t\r\y\-\s\a\m\p\l\e\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \6\0\0\;\
\}\
\
\.\d\e\m\o\-\r\i\g\h\t\ \{\
\ \ \f\l\e\x\:\ \1\;\
\ \ \p\a\d\d\i\n\g\:\ \3\r\e\m\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\}\
\
\.\d\e\m\o\-\b\a\d\g\e\ \{\
\ \ \a\l\i\g\n\-\s\e\l\f\:\ \f\l\e\x\-\s\t\a\r\t\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \r\g\b\a\(\3\4\,\ \1\9\7\,\ \9\4\,\ \0\.\1\)\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\c\c\e\s\s\)\;\
\ \ \p\a\d\d\i\n\g\:\ \4\p\x\ \1\2\p\x\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \2\0\p\x\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\8\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \6\0\0\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \2\r\e\m\;\
\ \ \b\o\r\d\e\r\:\ \1\p\x\ \s\o\l\i\d\ \r\g\b\a\(\3\4\,\ \1\9\7\,\ \9\4\,\ \0\.\2\)\;\
\}\
\
\.\d\e\m\o\-\t\a\b\l\e\-\w\r\a\p\p\e\r\ \{\
\ \ \o\v\e\r\f\l\o\w\-\x\:\ \a\u\t\o\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \2\r\e\m\;\
\}\
\
\.\d\e\m\o\-\t\a\b\l\e\ \{\
\ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \b\o\r\d\e\r\-\c\o\l\l\a\p\s\e\:\ \c\o\l\l\a\p\s\e\;\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\m\o\n\o\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\8\r\e\m\;\
\}\
\
\.\d\e\m\o\-\t\a\b\l\e\ \t\h\ \{\
\ \ \t\e\x\t\-\a\l\i\g\n\:\ \l\e\f\t\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \6\0\0\;\
\ \ \p\a\d\d\i\n\g\:\ \1\r\e\m\ \0\.\5\r\e\m\;\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\}\
\
\.\d\e\m\o\-\t\a\b\l\e\ \t\d\ \{\
\ \ \p\a\d\d\i\n\g\:\ \1\r\e\m\ \0\.\5\r\e\m\;\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \r\g\b\a\(\2\5\5\,\2\5\5\,\2\5\5\,\0\.\0\3\)\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\}\
\
\.\b\t\n\-\d\e\m\o\-\d\l\ \{\
\ \ \a\l\i\g\n\-\s\e\l\f\:\ \f\l\e\x\-\s\t\a\r\t\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\r\e\m\;\
\ \ \p\a\d\d\i\n\g\:\ \0\.\7\5\r\e\m\ \1\.\5\r\e\m\;\
\}\
\
\.\b\t\n\-\d\e\m\o\-\d\l\ \s\v\g\ \{\
\ \ \w\i\d\t\h\:\ \1\8\p\x\;\
\ \ \h\e\i\g\h\t\:\ \1\8\p\x\;\
\}\
\
\/\*\ \7\.\ \P\R\I\C\I\N\G\ \S\E\C\T\I\O\N\ \*\/\
\.\p\r\i\c\i\n\g\ \{\
\ \ \p\a\d\d\i\n\g\:\ \8\r\e\m\ \2\r\e\m\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\}\
\
\.\p\r\i\c\i\n\g\-\c\a\r\d\s\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \g\a\p\:\ \2\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \3\r\e\m\;\
\}\
\
\.\p\r\i\c\e\-\c\a\r\d\ \{\
\ \ \f\l\e\x\:\ \1\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\r\f\a\c\e\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \2\4\p\x\;\
\ \ \p\a\d\d\i\n\g\:\ \3\r\e\m\ \2\r\e\m\;\
\ \ \b\o\r\d\e\r\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\}\
\
\.\p\r\i\c\e\-\c\a\r\d\.\f\e\a\t\u\r\e\d\ \{\
\ \ \b\o\r\d\e\r\-\c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \s\c\a\l\e\(\1\.\0\5\)\;\
\ \ \z\-\i\n\d\e\x\:\ \2\;\
\ \ \b\o\x\-\s\h\a\d\o\w\:\ \0\ \2\0\p\x\ \4\0\p\x\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\1\)\;\
\}\
\
\.\f\e\a\t\u\r\e\d\-\b\a\d\g\e\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \-\1\2\p\x\;\
\ \ \l\e\f\t\:\ \5\0\%\;\
\ \ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\X\(\-\5\0\%\)\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \c\o\l\o\r\:\ \#\0\0\0\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\7\5\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \7\0\0\;\
\ \ \t\e\x\t\-\t\r\a\n\s\f\o\r\m\:\ \u\p\p\e\r\c\a\s\e\;\
\ \ \p\a\d\d\i\n\g\:\ \4\p\x\ \1\2\p\x\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \1\2\p\x\;\
\}\
\
\/\*\ \S\h\i\m\m\e\r\ \e\f\f\e\c\t\ \f\o\r\ \p\r\o\ \b\o\r\d\e\r\ \*\/\
\.\s\h\i\m\m\e\r\-\b\o\r\d\e\r\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \-\1\p\x\;\ \l\e\f\t\:\ \-\1\p\x\;\ \r\i\g\h\t\:\ \-\1\p\x\;\ \b\o\t\t\o\m\:\ \-\1\p\x\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \2\4\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \l\i\n\e\a\r\-\g\r\a\d\i\e\n\t\(\9\0\d\e\g\,\ \t\r\a\n\s\p\a\r\e\n\t\,\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\4\)\,\ \t\r\a\n\s\p\a\r\e\n\t\)\;\
\ \ \b\a\c\k\g\r\o\u\n\d\-\s\i\z\e\:\ \2\0\0\%\ \1\0\0\%\;\
\ \ \z\-\i\n\d\e\x\:\ \-\1\;\
\ \ \a\n\i\m\a\t\i\o\n\:\ \s\h\i\m\m\e\r\ \3\s\ \i\n\f\i\n\i\t\e\ \l\i\n\e\a\r\;\
\}\
\
\@\k\e\y\f\r\a\m\e\s\ \s\h\i\m\m\e\r\ \{\
\ \ \0\%\ \{\ \b\a\c\k\g\r\o\u\n\d\-\p\o\s\i\t\i\o\n\:\ \-\2\0\0\%\ \0\;\ \}\
\ \ \1\0\0\%\ \{\ \b\a\c\k\g\r\o\u\n\d\-\p\o\s\i\t\i\o\n\:\ \2\0\0\%\ \0\;\ \}\
\}\
\
\.\t\i\e\r\-\n\a\m\e\ \{\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\2\5\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \7\0\0\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\r\e\m\;\
\}\
\
\.\p\r\i\c\e\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \3\r\e\m\;\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \8\0\0\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \0\.\5\r\e\m\;\
\}\
\
\.\p\r\i\c\e\ \s\p\a\n\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \4\0\0\;\
\}\
\
\.\p\r\i\c\e\-\s\t\r\i\k\e\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\ \ \t\e\x\t\-\d\e\c\o\r\a\t\i\o\n\:\ \l\i\n\e\-\t\h\r\o\u\g\h\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \2\r\e\m\;\
\}\
\
\.\p\r\i\c\e\-\c\a\r\d\:\n\o\t\(\.\f\e\a\t\u\r\e\d\)\ \.\p\r\i\c\e\ \{\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \3\.\4\r\e\m\;\ \/\*\ \A\l\i\g\n\s\ \c\o\n\t\e\n\t\ \w\i\t\h\ \p\r\o\ \t\i\e\r\ \w\h\i\c\h\ \h\a\s\ \s\t\r\i\k\e\-\t\h\r\o\u\g\h\ \*\/\
\}\
\
\.\f\e\a\t\u\r\e\s\-\l\i\s\t\ \{\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \2\.\5\r\e\m\;\
\ \ \f\l\e\x\:\ \1\;\
\}\
\
\.\f\e\a\t\u\r\e\s\-\l\i\s\t\ \l\i\ \{\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\5\r\e\m\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \g\a\p\:\ \0\.\5\r\e\m\;\
\}\
\
\.\p\r\i\c\i\n\g\-\f\o\o\t\e\r\ \{\
\ \ \t\e\x\t\-\a\l\i\g\n\:\ \c\e\n\t\e\r\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\r\e\m\;\
\}\
\
\/\*\ \8\.\ \T\E\S\T\I\M\O\N\I\A\L\S\ \*\/\
\.\t\e\s\t\i\m\o\n\i\a\l\s\ \{\
\ \ \p\a\d\d\i\n\g\:\ \8\r\e\m\ \2\r\e\m\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\}\
\
\.\t\e\s\t\i\m\o\n\i\a\l\-\g\r\i\d\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \g\a\p\:\ \2\r\e\m\;\
\ \ \m\a\r\g\i\n\-\t\o\p\:\ \4\r\e\m\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \f\l\e\x\-\s\t\a\r\t\;\
\}\
\
\.\t\e\s\t\i\m\o\n\i\a\l\-\c\a\r\d\ \{\
\ \ \f\l\e\x\:\ \1\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\s\u\r\f\a\c\e\)\;\
\ \ \b\o\r\d\e\r\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \1\6\p\x\;\
\ \ \p\a\d\d\i\n\g\:\ \2\r\e\m\;\
\}\
\
\.\m\i\d\d\l\e\-\c\a\r\d\ \{\
\ \ \t\r\a\n\s\f\o\r\m\:\ \t\r\a\n\s\l\a\t\e\Y\(\-\2\0\p\x\)\;\
\}\
\
\.\c\a\r\d\-\h\e\a\d\e\r\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \g\a\p\:\ \1\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\}\
\
\.\a\v\a\t\a\r\-\i\n\i\t\i\a\l\ \{\
\ \ \w\i\d\t\h\:\ \4\8\p\x\;\
\ \ \h\e\i\g\h\t\:\ \4\8\p\x\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \c\o\l\o\r\:\ \#\0\0\0\;\
\ \ \b\o\r\d\e\r\-\r\a\d\i\u\s\:\ \5\0\%\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \7\0\0\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\2\5\r\e\m\;\
\}\
\
\.\u\s\e\r\-\i\n\f\o\ \h\4\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\1\r\e\m\;\
\}\
\
\.\u\s\e\r\-\i\n\f\o\ \p\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\8\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\}\
\
\.\s\t\a\r\s\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\w\a\r\n\i\n\g\)\;\
\ \ \l\e\t\t\e\r\-\s\p\a\c\i\n\g\:\ \2\p\x\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\r\e\m\;\
\}\
\
\.\q\u\o\t\e\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\r\e\m\;\
\ \ \f\o\n\t\-\s\t\y\l\e\:\ \i\t\a\l\i\c\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\ \ \l\i\n\e\-\h\e\i\g\h\t\:\ \1\.\6\;\
\}\
\
\/\*\ \9\.\ \F\A\Q\ \S\E\C\T\I\O\N\ \*\/\
\.\f\a\q\ \{\
\ \ \p\a\d\d\i\n\g\:\ \8\r\e\m\ \2\r\e\m\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \8\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\}\
\
\.\f\a\q\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \m\a\r\g\i\n\-\t\o\p\:\ \4\r\e\m\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \g\a\p\:\ \1\r\e\m\;\
\}\
\
\.\f\a\q\-\i\t\e\m\ \{\
\ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\}\
\
\.\f\a\q\-\q\u\e\s\t\i\o\n\ \{\
\ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \n\o\n\e\;\
\ \ \b\o\r\d\e\r\:\ \n\o\n\e\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\h\e\a\d\i\n\g\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\1\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \6\0\0\;\
\ \ \t\e\x\t\-\a\l\i\g\n\:\ \l\e\f\t\;\
\ \ \p\a\d\d\i\n\g\:\ \1\.\5\r\e\m\ \0\;\
\ \ \c\u\r\s\o\r\:\ \p\o\i\n\t\e\r\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \s\p\a\c\e\-\b\e\t\w\e\e\n\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\}\
\
\.\f\a\q\-\i\c\o\n\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\5\r\e\m\;\
\ \ \f\o\n\t\-\w\e\i\g\h\t\:\ \4\0\0\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \t\r\a\n\s\f\o\r\m\ \0\.\3\s\;\
\}\
\
\.\f\a\q\-\i\t\e\m\.\a\c\t\i\v\e\ \.\f\a\q\-\i\c\o\n\ \{\
\ \ \t\r\a\n\s\f\o\r\m\:\ \r\o\t\a\t\e\(\4\5\d\e\g\)\;\
\}\
\
\.\f\a\q\-\a\n\s\w\e\r\ \{\
\ \ \m\a\x\-\h\e\i\g\h\t\:\ \0\;\
\ \ \o\v\e\r\f\l\o\w\:\ \h\i\d\d\e\n\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \m\a\x\-\h\e\i\g\h\t\ \0\.\3\s\ \e\a\s\e\-\o\u\t\;\
\}\
\
\.\f\a\q\-\a\n\s\w\e\r\ \p\ \{\
\ \ \p\a\d\d\i\n\g\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \l\i\n\e\-\h\e\i\g\h\t\:\ \1\.\6\;\
\}\
\
\/\*\ \1\0\.\ \F\I\N\A\L\ \C\T\A\ \*\/\
\.\f\i\n\a\l\-\c\t\a\ \{\
\ \ \p\a\d\d\i\n\g\:\ \1\0\r\e\m\ \2\r\e\m\;\
\ \ \t\e\x\t\-\a\l\i\g\n\:\ \c\e\n\t\e\r\;\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \o\v\e\r\f\l\o\w\:\ \h\i\d\d\e\n\;\
\}\
\
\.\c\t\a\-\m\e\s\h\-\b\g\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \a\b\s\o\l\u\t\e\;\
\ \ \t\o\p\:\ \0\;\ \l\e\f\t\:\ \0\;\ \w\i\d\t\h\:\ \1\0\0\%\;\ \h\e\i\g\h\t\:\ \1\0\0\%\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \r\a\d\i\a\l\-\g\r\a\d\i\e\n\t\(\c\i\r\c\l\e\ \a\t\ \c\e\n\t\e\r\,\ \r\g\b\a\(\0\,\ \2\1\2\,\ \1\7\0\,\ \0\.\1\5\)\ \0\%\,\ \v\a\r\(\-\-\c\o\l\o\r\-\b\g\)\ \7\0\%\)\;\
\ \ \z\-\i\n\d\e\x\:\ \0\;\
\}\
\
\.\c\t\a\-\c\o\n\t\e\n\t\ \{\
\ \ \p\o\s\i\t\i\o\n\:\ \r\e\l\a\t\i\v\e\;\
\ \ \z\-\i\n\d\e\x\:\ \1\;\
\ \ \m\a\x\-\w\i\d\t\h\:\ \8\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\}\
\
\.\c\t\a\-\c\o\n\t\e\n\t\ \h\2\ \{\
\ \ \f\o\n\t\-\f\a\m\i\l\y\:\ \v\a\r\(\-\-\f\o\n\t\-\d\i\s\p\l\a\y\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \4\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\}\
\
\.\c\t\a\-\c\o\n\t\e\n\t\ \p\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\.\2\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \3\r\e\m\;\
\}\
\
\.\c\t\a\-\s\u\b\t\e\x\t\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\r\e\m\ \!\i\m\p\o\r\t\a\n\t\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\ \!\i\m\p\o\r\t\a\n\t\;\
\ \ \m\a\r\g\i\n\-\t\o\p\:\ \1\.\5\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \0\ \!\i\m\p\o\r\t\a\n\t\;\
\}\
\
\/\*\ \1\1\.\ \F\O\O\T\E\R\ \*\/\
\f\o\o\t\e\r\ \{\
\ \ \b\o\r\d\e\r\-\t\o\p\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \p\a\d\d\i\n\g\:\ \5\r\e\m\ \2\r\e\m\ \2\r\e\m\;\
\ \ \b\a\c\k\g\r\o\u\n\d\:\ \v\a\r\(\-\-\c\o\l\o\r\-\b\g\)\;\
\}\
\
\.\f\o\o\t\e\r\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \s\p\a\c\e\-\b\e\t\w\e\e\n\;\
\ \ \g\a\p\:\ \4\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \4\r\e\m\;\
\}\
\
\.\f\o\o\t\e\r\-\b\r\a\n\d\ \{\
\ \ \m\a\x\-\w\i\d\t\h\:\ \3\0\0\p\x\;\
\}\
\
\.\f\o\o\t\e\r\-\b\r\a\n\d\ \p\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \m\a\r\g\i\n\-\t\o\p\:\ \1\r\e\m\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\5\r\e\m\;\
\}\
\
\.\f\o\o\t\e\r\-\l\i\n\k\s\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \g\a\p\:\ \4\r\e\m\;\
\}\
\
\.\l\i\n\k\-\c\o\l\u\m\n\ \h\4\ \{\
\ \ \f\o\n\t\-\s\i\z\e\:\ \1\r\e\m\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \1\.\5\r\e\m\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\p\r\i\m\a\r\y\)\;\
\}\
\
\.\l\i\n\k\-\c\o\l\u\m\n\ \a\ \{\
\ \ \d\i\s\p\l\a\y\:\ \b\l\o\c\k\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\s\e\c\o\n\d\a\r\y\)\;\
\ \ \m\a\r\g\i\n\-\b\o\t\t\o\m\:\ \0\.\7\5\r\e\m\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\9\r\e\m\;\
\ \ \t\r\a\n\s\i\t\i\o\n\:\ \c\o\l\o\r\ \0\.\2\s\;\
\}\
\
\.\l\i\n\k\-\c\o\l\u\m\n\ \a\:\h\o\v\e\r\ \{\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\}\
\
\.\f\o\o\t\e\r\-\b\o\t\t\o\m\ \{\
\ \ \m\a\x\-\w\i\d\t\h\:\ \1\2\0\0\p\x\;\
\ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\;\
\ \ \b\o\r\d\e\r\-\t\o\p\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \p\a\d\d\i\n\g\-\t\o\p\:\ \2\r\e\m\;\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \s\p\a\c\e\-\b\e\t\w\e\e\n\;\
\ \ \a\l\i\g\n\-\i\t\e\m\s\:\ \c\e\n\t\e\r\;\
\ \ \c\o\l\o\r\:\ \v\a\r\(\-\-\c\o\l\o\r\-\t\e\x\t\-\m\u\t\e\d\)\;\
\ \ \f\o\n\t\-\s\i\z\e\:\ \0\.\8\5\r\e\m\;\
\}\
\
\.\f\o\o\t\e\r\-\b\o\t\t\o\m\-\l\i\n\k\s\ \{\
\ \ \d\i\s\p\l\a\y\:\ \f\l\e\x\;\
\ \ \g\a\p\:\ \1\.\5\r\e\m\;\
\}\
\
\/\*\ \R\e\s\p\o\n\s\i\v\e\ \D\e\s\i\g\n\ \*\/\
\@\m\e\d\i\a\ \(\m\a\x\-\w\i\d\t\h\:\ \1\0\2\4\p\x\)\ \{\
\ \ \.\h\e\r\o\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \ \ \t\e\x\t\-\a\l\i\g\n\:\ \c\e\n\t\e\r\;\
\ \ \ \ \g\a\p\:\ \3\r\e\m\;\
\ \ \}\
\ \ \
\ \ \.\h\e\r\o\-\c\o\n\t\e\n\t\ \{\
\ \ \ \ \m\a\x\-\w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \}\
\ \ \
\ \ \.\h\e\r\o\ \h\1\ \{\
\ \ \ \ \f\o\n\t\-\s\i\z\e\:\ \3\.\5\r\e\m\;\
\ \ \}\
\ \ \
\ \ \.\s\u\b\t\e\x\t\ \{\
\ \ \ \ \m\a\r\g\i\n\:\ \0\ \a\u\t\o\ \2\.\5\r\e\m\;\
\ \ \}\
\ \ \
\ \ \.\c\t\a\-\g\r\o\u\p\ \{\
\ \ \ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \}\
\ \ \
\ \ \.\s\o\c\i\a\l\-\p\r\o\o\f\ \{\
\ \ \ \ \j\u\s\t\i\f\y\-\c\o\n\t\e\n\t\:\ \c\e\n\t\e\r\;\
\ \ \}\
\ \ \
\ \ \.\h\e\r\o\-\g\r\a\p\h\i\c\ \{\
\ \ \ \ \w\i\d\t\h\:\ \1\0\0\%\;\
\ \ \}\
\
\ \ \.\s\t\e\p\s\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \}\
\
\ \ \.\s\t\e\p\-\c\o\n\n\e\c\t\o\r\ \{\
\ \ \ \ \d\i\s\p\l\a\y\:\ \n\o\n\e\;\
\ \ \}\
\
\ \ \.\s\t\e\p\-\c\a\r\d\ \{\
\ \ \ \ \b\o\r\d\e\r\-\l\e\f\t\:\ \n\o\n\e\;\
\ \ \ \ \b\o\r\d\e\r\-\t\o\p\:\ \2\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\a\c\c\e\n\t\)\;\
\ \ \}\
\
\ \ \.\p\r\i\c\i\n\g\-\c\a\r\d\s\ \{\
\ \ \ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \}\
\
\ \ \.\p\r\i\c\e\-\c\a\r\d\.\f\e\a\t\u\r\e\d\ \{\
\ \ \ \ \t\r\a\n\s\f\o\r\m\:\ \n\o\n\e\;\
\ \ \}\
\ \ \
\ \ \.\m\i\d\d\l\e\-\c\a\r\d\ \{\
\ \ \ \ \t\r\a\n\s\f\o\r\m\:\ \n\o\n\e\;\
\ \ \}\
\ \ \
\ \ \.\t\e\s\t\i\m\o\n\i\a\l\-\g\r\i\d\ \{\
\ \ \ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \}\
\}\
\
\@\m\e\d\i\a\ \(\m\a\x\-\w\i\d\t\h\:\ \7\6\8\p\x\)\ \{\
\ \ \.\n\a\v\-\l\i\n\k\s\,\ \.\b\t\n\-\n\a\v\ \{\
\ \ \ \ \d\i\s\p\l\a\y\:\ \n\o\n\e\;\
\ \ \}\
\ \ \
\ \ \.\f\e\a\t\u\r\e\-\g\r\i\d\ \{\
\ \ \ \ \g\r\i\d\-\t\e\m\p\l\a\t\e\-\c\o\l\u\m\n\s\:\ \1\f\r\;\
\ \ \}\
\ \ \
\ \ \.\d\e\m\o\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \}\
\ \ \
\ \ \.\d\e\m\o\-\l\e\f\t\ \{\
\ \ \ \ \b\o\r\d\e\r\-\r\i\g\h\t\:\ \n\o\n\e\;\
\ \ \ \ \b\o\r\d\e\r\-\b\o\t\t\o\m\:\ \1\p\x\ \s\o\l\i\d\ \v\a\r\(\-\-\c\o\l\o\r\-\b\o\r\d\e\r\)\;\
\ \ \}\
\
\ \ \.\f\o\o\t\e\r\-\c\o\n\t\a\i\n\e\r\ \{\
\ \ \ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \}\
\ \ \
\ \ \.\f\o\o\t\e\r\-\l\i\n\k\s\ \{\
\ \ \ \ \f\l\e\x\-\w\r\a\p\:\ \w\r\a\p\;\
\ \ \ \ \g\a\p\:\ \2\r\e\m\;\
\ \ \}\
\ \ \
\ \ \.\f\o\o\t\e\r\-\b\o\t\t\o\m\ \{\
\ \ \ \ \f\l\e\x\-\d\i\r\e\c\t\i\o\n\:\ \c\o\l\u\m\n\;\
\ \ \ \ \g\a\p\:\ \1\r\e\m\;\
\ \ \ \ \t\e\x\t\-\a\l\i\g\n\:\ \c\e\n\t\e\r\;\
\ \ \}\
\}\
\
       }} />
      <div dangerouslySetInnerHTML={{ __html: 
        \<\!\-\-\ \B\a\c\k\g\r\o\u\n\d\ \G\r\i\d\ \-\-\>\
\ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\b\g\-\g\r\i\d\"\>\<\/\d\i\v\>\
\
\ \ \ \ \<\!\-\-\ \1\.\ \S\T\I\C\K\Y\ \N\A\V\B\A\R\ \-\-\>\
\ \ \ \ \<\n\a\v\ \i\d\=\"\n\a\v\b\a\r\"\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\n\a\v\-\c\o\n\t\a\i\n\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\ \c\l\a\s\s\=\"\l\o\g\o\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\l\o\g\o\-\i\c\o\n\"\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \P\a\r\s\i\f\y\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\n\a\v\-\l\i\n\k\s\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\f\e\a\t\u\r\e\s\"\>\F\e\a\t\u\r\e\s\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\p\r\i\c\i\n\g\"\>\P\r\i\c\i\n\g\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\h\o\w\-\i\t\-\w\o\r\k\s\"\>\H\o\w\ \i\t\ \W\o\r\k\s\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\a\p\i\"\>\A\P\I\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\s\t\a\r\t\"\ \c\l\a\s\s\=\"\b\t\n\-\p\r\i\m\a\r\y\ \b\t\n\-\n\a\v\"\>\S\t\a\r\t\ \F\r\e\e\<\/\a\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\n\a\v\>\
\
\ \ \ \ \<\!\-\-\ \2\.\ \H\E\R\O\ \S\E\C\T\I\O\N\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \c\l\a\s\s\=\"\h\e\r\o\ \s\c\r\o\l\l\-\r\e\v\e\a\l\"\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\h\e\r\o\-\c\o\n\t\a\i\n\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\!\-\-\ \L\e\f\t\ \5\5\%\ \T\e\x\t\ \-\-\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\h\e\r\o\-\c\o\n\t\e\n\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\e\y\e\b\r\o\w\"\>\T\R\U\S\T\E\D\ \B\Y\ \2\,\4\0\0\+\ \F\I\N\A\N\C\E\ \T\E\A\M\S\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\1\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\ \c\l\a\s\s\=\"\t\e\x\t\-\p\r\i\m\a\r\y\"\>\B\a\n\k\ \S\t\a\t\e\m\e\n\t\s\,\<\/\s\p\a\n\>\<\b\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\ \c\l\a\s\s\=\"\t\e\x\t\-\t\e\a\l\"\>\F\i\n\a\l\l\y\ \T\a\m\e\d\.\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\h\1\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\ \c\l\a\s\s\=\"\s\u\b\t\e\x\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \U\p\l\o\a\d\ \a\n\y\ \P\D\F\ \b\a\n\k\ \s\t\a\t\e\m\e\n\t\.\ \G\e\t\ \p\e\r\f\e\c\t\ \E\x\c\e\l\/\C\S\V\ \o\u\t\p\u\t\ \i\n\ \u\n\d\e\r\ \1\0\ \s\e\c\o\n\d\s\.\ \N\o\ \t\e\m\p\l\a\t\e\s\.\ \N\o\ \m\a\n\u\a\l\ \w\o\r\k\.\ \J\u\s\t\ \c\l\e\a\n\,\ \s\t\r\u\c\t\u\r\e\d\ \d\a\t\a\.\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\t\a\-\g\r\o\u\p\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\s\t\a\r\t\"\ \c\l\a\s\s\=\"\b\t\n\-\p\r\i\m\a\r\y\"\>\C\o\n\v\e\r\t\ \Y\o\u\r\ \F\i\r\s\t\ \S\t\a\t\e\m\e\n\t\ \F\r\e\e\ \&\r\a\r\r\;\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\d\e\m\o\"\ \c\l\a\s\s\=\"\b\t\n\-\g\h\o\s\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \w\i\d\t\h\=\"\2\0\"\ \h\e\i\g\h\t\=\"\2\0\"\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\p\o\l\y\g\o\n\ \p\o\i\n\t\s\=\"\5\ \3\ \1\9\ \1\2\ \5\ \2\1\ \5\ \3\"\>\<\/\p\o\l\y\g\o\n\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \S\e\e\ \l\i\v\e\ \d\e\m\o\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\o\c\i\a\l\-\p\r\o\o\f\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\a\v\a\t\a\r\s\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\i\m\g\ \s\r\c\=\"\h\t\t\p\s\:\/\/\i\.\p\r\a\v\a\t\a\r\.\c\c\/\1\0\0\?\i\m\g\=\1\"\ \a\l\t\=\"\U\s\e\r\ \1\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\i\m\g\ \s\r\c\=\"\h\t\t\p\s\:\/\/\i\.\p\r\a\v\a\t\a\r\.\c\c\/\1\0\0\?\i\m\g\=\2\"\ \a\l\t\=\"\U\s\e\r\ \2\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\i\m\g\ \s\r\c\=\"\h\t\t\p\s\:\/\/\i\.\p\r\a\v\a\t\a\r\.\c\c\/\1\0\0\?\i\m\g\=\3\"\ \a\l\t\=\"\U\s\e\r\ \3\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\J\o\i\n\ \2\,\4\0\0\+\ \a\c\c\o\u\n\t\a\n\t\s\ \&\ \C\A\ \f\i\r\m\s\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\
\ \ \ \ \ \ \ \ \ \ \ \ \<\!\-\-\ \R\i\g\h\t\ \4\5\%\ \I\n\t\e\r\a\c\t\i\v\e\ \G\r\a\p\h\i\c\ \-\-\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\h\e\r\o\-\g\r\a\p\h\i\c\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\h\e\r\o\-\g\l\o\w\"\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\!\-\-\ \F\l\o\a\t\i\n\g\ \N\u\m\b\e\r\ \B\a\d\g\e\s\ \-\-\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\l\o\a\t\i\n\g\-\b\a\d\g\e\ \b\a\d\g\e\-\1\"\>\⚡\ \4\.\2\s\ \a\v\g\ \p\a\r\s\e\ \t\i\m\e\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\l\o\a\t\i\n\g\-\b\a\d\g\e\ \b\a\d\g\e\-\2\"\>\✓\ \9\9\.\3\%\ \a\c\c\u\r\a\c\y\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\l\o\a\t\i\n\g\-\b\a\d\g\e\ \b\a\d\g\e\-\3\"\>\📄\ \5\0\+\ \b\a\n\k\s\<\/\d\i\v\>\
\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\o\n\v\e\r\s\i\o\n\-\p\a\n\e\l\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\d\f\-\s\i\d\e\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\a\b\l\e\-\h\e\a\d\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\D\a\t\e\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\D\e\s\c\r\i\p\t\i\o\n\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\D\e\b\i\t\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\C\r\e\d\i\t\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\B\a\l\a\n\c\e\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\a\b\l\e\-\b\o\d\y\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\m\e\s\s\y\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\1\2\/\0\4\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\U\P\I\/\R\A\H\U\L\/\S\B\I\N\.\.\.\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\1\,\2\0\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\4\5\,\0\2\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\m\e\s\s\y\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\1\4\/\0\4\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\c\r\a\m\b\l\e\d\"\>\N\E\F\T\-\H\D\F\C\-\R\E\N\T\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\1\5\,\0\0\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\6\0\,\0\2\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\m\e\s\s\y\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\1\5\/\0\4\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\c\r\a\m\b\l\e\d\"\>\I\M\P\S\-\Z\O\M\A\T\O\-\T\X\N\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\4\5\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\5\9\,\5\7\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\m\e\s\s\y\ \b\l\u\r\r\e\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\m\e\s\s\y\ \b\l\u\r\r\e\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\o\n\v\e\r\s\i\o\n\-\a\r\r\o\w\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\p\a\t\h\ \d\=\"\M\5\ \1\2\h\1\4\M\1\2\ \5\l\7\ \7\-\7\ \7\"\/\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\e\x\c\e\l\-\s\i\d\e\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\e\x\p\o\r\t\e\d\-\b\a\d\g\e\"\>\✓\ \E\x\p\o\r\t\e\d\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\a\b\l\e\-\h\e\a\d\e\r\ \e\x\c\e\l\-\h\e\a\d\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\D\a\t\e\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\D\e\s\c\r\i\p\t\i\o\n\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\D\e\b\i\t\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\C\r\e\d\i\t\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\B\a\l\a\n\c\e\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\a\b\l\e\-\b\o\d\y\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\c\l\e\a\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\2\0\2\4\-\0\4\-\1\2\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\U\P\I\/\R\A\H\U\L\/\S\B\I\N\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\d\e\b\i\t\"\>\1\,\2\0\0\.\0\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\4\5\,\0\2\0\.\0\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\c\l\e\a\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\2\0\2\4\-\0\4\-\1\4\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\N\E\F\T\-\H\D\F\C\-\R\E\N\T\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\c\r\e\d\i\t\"\>\1\5\,\0\0\0\.\0\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\6\0\,\0\2\0\.\0\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\c\l\e\a\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\2\0\2\4\-\0\4\-\1\5\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\I\M\P\S\-\Z\O\M\A\T\O\-\T\X\N\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\d\e\b\i\t\"\>\4\5\0\.\0\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\5\9\,\5\7\0\.\0\0\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\c\l\e\a\n\ \s\k\e\l\e\t\o\n\-\r\o\w\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\<\d\i\v\>\<\/\d\i\v\>\<\d\i\v\>\<\/\d\i\v\>\<\d\i\v\>\<\/\d\i\v\>\<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\r\o\w\ \r\o\w\-\c\l\e\a\n\ \s\k\e\l\e\t\o\n\-\r\o\w\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\>\<\/\d\i\v\>\<\d\i\v\>\<\/\d\i\v\>\<\d\i\v\>\<\/\d\i\v\>\<\d\i\v\>\<\/\d\i\v\>\<\d\i\v\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \3\.\ \L\O\G\O\ \S\T\R\I\P\ \/\ \T\R\U\S\T\ \B\A\R\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \c\l\a\s\s\=\"\t\r\u\s\t\-\b\a\r\"\>\
\ \ \ \ \ \ \ \ \<\p\ \c\l\a\s\s\=\"\t\r\u\s\t\-\t\i\t\l\e\"\>\U\s\e\d\ \b\y\ \t\e\a\m\s\ \a\t\<\/\p\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\m\a\r\q\u\e\e\-\c\o\n\t\a\i\n\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\m\a\r\q\u\e\e\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\F\i\n\B\o\o\k\s\ \A\I\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\C\l\e\a\r\T\a\x\ \P\r\o\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\S\e\t\u\ \F\i\n\a\n\c\e\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\K\h\a\t\a\b\o\o\k\ \T\e\a\m\s\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\R\a\z\o\r\p\a\y\ \R\e\c\o\n\c\i\l\e\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\P\a\y\t\m\ \B\u\s\i\n\e\s\s\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\!\-\-\ \D\u\p\l\i\c\a\t\e\ \f\o\r\ \i\n\f\i\n\i\t\e\ \s\c\r\o\l\l\ \-\-\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\F\i\n\B\o\o\k\s\ \A\I\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\C\l\e\a\r\T\a\x\ \P\r\o\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\S\e\t\u\ \F\i\n\a\n\c\e\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\K\h\a\t\a\b\o\o\k\ \T\e\a\m\s\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\R\a\z\o\r\p\a\y\ \R\e\c\o\n\c\i\l\e\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\P\a\y\t\m\ \B\u\s\i\n\e\s\s\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \4\.\ \"\H\O\W\ \I\T\ \W\O\R\K\S\"\ \S\E\C\T\I\O\N\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \i\d\=\"\h\o\w\-\i\t\-\w\o\r\k\s\"\ \c\l\a\s\s\=\"\h\o\w\-\i\t\-\w\o\r\k\s\ \s\c\r\o\l\l\-\r\e\v\e\a\l\"\>\
\ \ \ \ \ \ \ \ \<\h\2\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\t\i\t\l\e\"\>\T\h\r\e\e\ \s\t\e\p\s\.\ \Z\e\r\o\ \h\e\a\d\a\c\h\e\s\.\<\/\h\2\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\e\p\s\-\c\o\n\t\a\i\n\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\e\p\-\c\o\n\n\e\c\t\o\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\o\n\n\e\c\t\o\r\-\d\o\t\"\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\e\p\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\e\p\-\i\c\o\n\-\w\r\a\p\p\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \c\l\a\s\s\=\"\s\t\e\p\-\i\c\o\n\"\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\a\t\h\ \d\=\"\M\1\4\ \2\H\6\a\2\ \2\ \0\ \0\ \0\-\2\ \2\v\1\6\a\2\ \2\ \0\ \0\ \0\ \2\ \2\h\1\2\a\2\ \2\ \0\ \0\ \0\ \2\-\2\V\8\z\"\>\<\/\p\a\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\1\4\ \2\ \1\4\ \8\ \2\0\ \8\"\>\<\/\p\o\l\y\l\i\n\e\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\n\e\ \x\1\=\"\1\2\"\ \y\1\=\"\1\8\"\ \x\2\=\"\1\2\"\ \y\2\=\"\1\2\"\>\<\/\l\i\n\e\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\9\ \1\5\ \1\2\ \1\2\ \1\5\ \1\5\"\>\<\/\p\o\l\y\l\i\n\e\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\3\>\U\p\l\o\a\d\ \P\D\F\<\/\h\3\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\D\r\a\g\ \&\ \d\r\o\p\ \a\n\y\ \b\a\n\k\ \s\t\a\t\e\m\e\n\t\ \P\D\F\ \—\ \H\D\F\C\,\ \S\B\I\,\ \I\C\I\C\I\,\ \A\x\i\s\,\ \o\r\ \5\0\+\ \o\t\h\e\r\ \b\a\n\k\s\ \s\u\p\p\o\r\t\e\d\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\e\p\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\e\p\-\i\c\o\n\-\w\r\a\p\p\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \c\l\a\s\s\=\"\s\t\e\p\-\i\c\o\n\"\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\c\i\r\c\l\e\ \c\x\=\"\1\2\"\ \c\y\=\"\1\2\"\ \r\=\"\3\"\>\<\/\c\i\r\c\l\e\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\a\t\h\ \d\=\"\M\1\9\.\4\ \1\5\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \.\3\3\ \1\.\8\2\l\.\0\6\.\0\6\a\2\ \2\ \0\ \0\ \1\ \0\ \2\.\8\3\ \2\ \2\ \0\ \0\ \1\-\2\.\8\3\ \0\l\-\.\0\6\-\.\0\6\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\-\1\.\8\2\-\.\3\3\ \1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\-\1\ \1\.\5\1\V\2\1\a\2\ \2\ \0\ \0\ \1\-\2\ \2\ \2\ \2\ \0\ \0\ \1\-\2\-\2\v\-\.\0\9\A\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \9\ \1\9\.\4\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\-\1\.\8\2\.\3\3\l\-\.\0\6\.\0\6\a\2\ \2\ \0\ \0\ \1\-\2\.\8\3\ \0\ \2\ \2\ \0\ \0\ \1\ \0\-\2\.\8\3\l\.\0\6\-\.\0\6\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \.\3\3\-\1\.\8\2\ \1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\-\1\.\5\1\-\1\H\3\a\2\ \2\ \0\ \0\ \1\-\2\-\2\ \2\ \2\ \0\ \0\ \1\ \2\-\2\h\.\0\9\A\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \4\.\6\ \9\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\-\.\3\3\-\1\.\8\2\l\-\.\0\6\-\.\0\6\a\2\ \2\ \0\ \0\ \1\ \0\-\2\.\8\3\ \2\ \2\ \0\ \0\ \1\ \2\.\8\3\ \0\l\.\0\6\.\0\6\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \1\.\8\2\.\3\3\H\9\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \1\-\1\.\5\1\V\3\a\2\ \2\ \0\ \0\ \1\ \2\-\2\ \2\ \2\ \0\ \0\ \1\ \2\ \2\v\.\0\9\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \1\ \1\.\5\1\ \1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \1\.\8\2\-\.\3\3\l\.\0\6\-\.\0\6\a\2\ \2\ \0\ \0\ \1\ \2\.\8\3\ \0\ \2\ \2\ \0\ \0\ \1\ \0\ \2\.\8\3\l\-\.\0\6\.\0\6\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\-\.\3\3\ \1\.\8\2\V\9\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\ \1\.\5\1\ \1\H\2\1\a\2\ \2\ \0\ \0\ \1\ \2\ \2\ \2\ \2\ \0\ \0\ \1\-\2\ \2\h\-\.\0\9\a\1\.\6\5\ \1\.\6\5\ \0\ \0\ \0\-\1\.\5\1\ \1\z\"\>\<\/\p\a\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\3\>\A\I\ \P\a\r\s\e\s\ \I\t\<\/\h\3\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\O\u\r\ \M\L\ \e\n\g\i\n\e\ \r\e\a\d\s\,\ \c\l\e\a\n\s\,\ \a\n\d\ \s\t\r\u\c\t\u\r\e\s\ \e\v\e\r\y\ \t\r\a\n\s\a\c\t\i\o\n\ \r\o\w\ \—\ \i\n\c\l\u\d\i\n\g\ \m\e\r\g\e\d\ \c\e\l\l\s\ \a\n\d\ \w\e\i\r\d\ \f\o\r\m\a\t\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\e\p\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\e\p\-\i\c\o\n\-\w\r\a\p\p\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \c\l\a\s\s\=\"\s\t\e\p\-\i\c\o\n\"\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\a\t\h\ \d\=\"\M\1\4\ \2\H\6\a\2\ \2\ \0\ \0\ \0\-\2\ \2\v\1\6\a\2\ \2\ \0\ \0\ \0\ \2\ \2\h\1\2\a\2\ \2\ \0\ \0\ \0\ \2\-\2\V\8\z\"\>\<\/\p\a\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\1\4\ \2\ \1\4\ \8\ \2\0\ \8\"\>\<\/\p\o\l\y\l\i\n\e\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\n\e\ \x\1\=\"\1\2\"\ \y\1\=\"\1\2\"\ \x\2\=\"\1\2\"\ \y\2\=\"\1\8\"\>\<\/\l\i\n\e\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\9\ \1\5\ \1\2\ \1\8\ \1\5\ \1\5\"\>\<\/\p\o\l\y\l\i\n\e\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\r\e\c\t\ \x\=\"\3\"\ \y\=\"\2\"\ \w\i\d\t\h\=\"\1\8\"\ \h\e\i\g\h\t\=\"\2\0\"\ \r\x\=\"\2\"\ \r\y\=\"\2\"\ \o\p\a\c\i\t\y\=\"\0\.\3\"\>\<\/\r\e\c\t\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\3\>\D\o\w\n\l\o\a\d\ \E\x\c\e\l\/\C\S\V\<\/\h\3\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\G\e\t\ \a\ \p\e\r\f\e\c\t\l\y\ \f\o\r\m\a\t\t\e\d\ \f\i\l\e\ \r\e\a\d\y\ \f\o\r\ \T\a\l\l\y\,\ \Q\u\i\c\k\B\o\o\k\s\,\ \o\r\ \y\o\u\r\ \o\w\n\ \a\n\a\l\y\s\i\s\.\ \I\n\ \s\e\c\o\n\d\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \S\e\c\t\i\o\n\ \D\i\v\i\d\e\r\ \-\-\>\
\ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\d\i\v\i\d\e\r\"\>\<\/\d\i\v\>\
\
\ \ \ \ \<\!\-\-\ \5\.\ \F\E\A\T\U\R\E\ \G\R\I\D\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \i\d\=\"\f\e\a\t\u\r\e\s\"\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\s\ \s\c\r\o\l\l\-\r\e\v\e\a\l\"\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\h\e\a\d\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\h\2\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\t\i\t\l\e\"\>\B\u\i\l\t\ \f\o\r\ \t\h\e\ \m\e\s\s\y\ \r\e\a\l\i\t\y\ \o\f\ \I\n\d\i\a\n\ \b\a\n\k\ \s\t\a\t\e\m\e\n\t\s\.\<\/\h\2\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\p\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\s\u\b\t\i\t\l\e\"\>\M\o\s\t\ \c\o\n\v\e\r\t\e\r\s\ \b\r\e\a\k\ \o\n\ \c\o\m\p\l\e\x\ \P\D\F\s\.\ \P\a\r\s\i\f\y\ \d\o\e\s\n\'\t\.\<\/\p\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\g\r\i\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\i\c\o\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\r\e\c\t\ \x\=\"\4\"\ \y\=\"\2\"\ \w\i\d\t\h\=\"\1\6\"\ \h\e\i\g\h\t\=\"\2\0\"\ \r\x\=\"\2\"\ \r\y\=\"\2\"\>\<\/\r\e\c\t\>\<\p\a\t\h\ \d\=\"\M\1\2\ \2\2\V\1\2\"\>\<\/\p\a\t\h\>\<\c\i\r\c\l\e\ \c\x\=\"\1\2\"\ \c\y\=\"\1\2\"\ \r\=\"\2\"\>\<\/\c\i\r\c\l\e\>\<\p\a\t\h\ \d\=\"\M\8\ \6\h\.\0\1\M\1\6\ \6\h\.\0\1\M\8\ \1\0\h\.\0\1\M\1\6\ \1\0\h\.\0\1\M\8\ \1\4\h\.\0\1\M\1\6\ \1\4\h\.\0\1\M\8\ \1\8\h\.\0\1\M\1\6\ \1\8\h\.\0\1\"\>\<\/\p\a\t\h\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\5\0\+\ \I\n\d\i\a\n\ \B\a\n\k\s\ \S\u\p\p\o\r\t\e\d\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\H\D\F\C\,\ \S\B\I\,\ \I\C\I\C\I\,\ \A\x\i\s\,\ \K\o\t\a\k\,\ \Y\e\s\ \B\a\n\k\,\ \P\N\B\,\ \a\n\d\ \m\o\r\e\ \—\ \a\l\l\ \f\o\r\m\a\t\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\i\c\o\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\p\a\t\h\ \d\=\"\M\1\4\ \2\H\6\a\2\ \2\ \0\ \0\ \0\-\2\ \2\v\1\6\a\2\ \2\ \0\ \0\ \0\ \2\ \2\h\1\2\a\2\ \2\ \0\ \0\ \0\ \2\-\2\V\8\z\"\>\<\/\p\a\t\h\>\<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\1\4\ \2\ \1\4\ \8\ \2\0\ \8\"\>\<\/\p\o\l\y\l\i\n\e\>\<\p\a\t\h\ \d\=\"\M\1\6\ \1\3\H\8\"\>\<\/\p\a\t\h\>\<\p\a\t\h\ \d\=\"\M\1\6\ \1\7\H\8\"\>\<\/\p\a\t\h\>\<\p\a\t\h\ \d\=\"\M\1\0\ \9\H\8\"\>\<\/\p\a\t\h\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\M\u\l\t\i\-\P\a\g\e\ \S\t\a\t\e\m\e\n\t\s\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\2\0\0\-\p\a\g\e\ \s\t\a\t\e\m\e\n\t\s\?\ \N\o\ \p\r\o\b\l\e\m\.\ \P\a\r\s\i\f\y\ \h\a\n\d\l\e\s\ \b\u\l\k\ \w\i\t\h\o\u\t\ \b\r\e\a\k\i\n\g\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\i\c\o\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\l\i\n\e\ \x\1\=\"\1\8\"\ \y\1\=\"\6\"\ \x\2\=\"\6\"\ \y\2\=\"\1\8\"\>\<\/\l\i\n\e\>\<\l\i\n\e\ \x\1\=\"\6\"\ \y\1\=\"\6\"\ \x\2\=\"\1\8\"\ \y\2\=\"\1\8\"\>\<\/\l\i\n\e\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\D\u\p\l\i\c\a\t\e\ \R\o\w\ \D\e\t\e\c\t\i\o\n\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\A\u\t\o\m\a\t\i\c\a\l\l\y\ \f\l\a\g\s\ \a\n\d\ \r\e\m\o\v\e\s\ \d\u\p\l\i\c\a\t\e\ \t\r\a\n\s\a\c\t\i\o\n\ \e\n\t\r\i\e\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\i\c\o\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\r\e\c\t\ \x\=\"\3\"\ \y\=\"\3\"\ \w\i\d\t\h\=\"\1\8\"\ \h\e\i\g\h\t\=\"\1\8\"\ \r\x\=\"\2\"\ \r\y\=\"\2\"\>\<\/\r\e\c\t\>\<\l\i\n\e\ \x\1\=\"\3\"\ \y\1\=\"\9\"\ \x\2\=\"\2\1\"\ \y\2\=\"\9\"\>\<\/\l\i\n\e\>\<\l\i\n\e\ \x\1\=\"\9\"\ \y\1\=\"\2\1\"\ \x\2\=\"\9\"\ \y\2\=\"\9\"\>\<\/\l\i\n\e\>\<\p\a\t\h\ \d\=\"\M\1\5\ \1\5\l\2\-\2\ \2\ \2\"\>\<\/\p\a\t\h\>\<\l\i\n\e\ \x\1\=\"\1\7\"\ \y\1\=\"\1\3\"\ \x\2\=\"\1\7\"\ \y\2\=\"\1\9\"\>\<\/\l\i\n\e\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\M\e\r\g\e\d\ \C\e\l\l\ \H\a\n\d\l\i\n\g\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\H\a\n\d\l\e\s\ \n\i\g\h\t\m\a\r\e\ \m\e\r\g\e\d\-\c\e\l\l\ \P\D\F\s\ \t\h\a\t\ \b\r\e\a\k\ \e\v\e\r\y\ \o\t\h\e\r\ \t\o\o\l\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\i\c\o\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\1\6\ \1\8\ \2\2\ \1\2\ \1\6\ \6\"\>\<\/\p\o\l\y\l\i\n\e\>\<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\8\ \6\ \2\ \1\2\ \8\ \1\8\"\>\<\/\p\o\l\y\l\i\n\e\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\A\P\I\ \A\c\c\e\s\s\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\I\n\t\e\g\r\a\t\e\ \P\a\r\s\i\f\y\ \i\n\t\o\ \y\o\u\r\ \o\w\n\ \p\r\o\d\u\c\t\.\ \R\E\S\T\f\u\l\ \A\P\I\ \w\i\t\h\ \w\e\b\h\o\o\k\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\-\i\c\o\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\r\e\c\t\ \x\=\"\3\"\ \y\=\"\1\1\"\ \w\i\d\t\h\=\"\1\8\"\ \h\e\i\g\h\t\=\"\1\1\"\ \r\x\=\"\2\"\ \r\y\=\"\2\"\>\<\/\r\e\c\t\>\<\p\a\t\h\ \d\=\"\M\7\ \1\1\V\7\a\5\ \5\ \0\ \0\ \1\ \1\0\ \0\v\4\"\>\<\/\p\a\t\h\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\Z\e\r\o\ \D\a\t\a\ \R\e\t\e\n\t\i\o\n\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\Y\o\u\r\ \s\t\a\t\e\m\e\n\t\s\ \a\r\e\ \d\e\l\e\t\e\d\ \i\m\m\e\d\i\a\t\e\l\y\ \a\f\t\e\r\ \c\o\n\v\e\r\s\i\o\n\.\ \A\l\w\a\y\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \S\e\c\t\i\o\n\ \D\i\v\i\d\e\r\ \-\-\>\
\ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\d\i\v\i\d\e\r\"\>\<\/\d\i\v\>\
\
\ \ \ \ \<\!\-\-\ \6\.\ \L\I\V\E\ \D\E\M\O\ \/\ \I\N\T\E\R\A\C\T\I\V\E\ \S\E\C\T\I\O\N\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \i\d\=\"\d\e\m\o\"\ \c\l\a\s\s\=\"\d\e\m\o\-\s\e\c\t\i\o\n\ \s\c\r\o\l\l\-\r\e\v\e\a\l\"\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\d\e\m\o\-\c\o\n\t\a\i\n\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\d\e\m\o\-\l\e\f\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\u\p\l\o\a\d\-\z\o\n\e\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \c\l\a\s\s\=\"\u\p\l\o\a\d\-\z\o\n\e\-\i\c\o\n\"\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\p\a\t\h\ \d\=\"\M\1\4\ \2\H\6\a\2\ \2\ \0\ \0\ \0\-\2\ \2\v\1\6\a\2\ \2\ \0\ \0\ \0\ \2\ \2\h\1\2\a\2\ \2\ \0\ \0\ \0\ \2\-\2\V\8\z\"\>\<\/\p\a\t\h\>\<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\1\4\ \2\ \1\4\ \8\ \2\0\ \8\"\>\<\/\p\o\l\y\l\i\n\e\>\<\l\i\n\e\ \x\1\=\"\1\2\"\ \y\1\=\"\1\8\"\ \x\2\=\"\1\2\"\ \y\2\=\"\1\2\"\>\<\/\l\i\n\e\>\<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\9\ \1\5\ \1\2\ \1\2\ \1\5\ \1\5\"\>\<\/\p\o\l\y\l\i\n\e\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\ \c\l\a\s\s\=\"\u\p\l\o\a\d\-\t\e\x\t\"\>\D\r\o\p\ \y\o\u\r\ \s\t\a\t\e\m\e\n\t\ \h\e\r\e\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\ \c\l\a\s\s\=\"\t\r\y\-\s\a\m\p\l\e\"\>\T\r\y\ \s\a\m\p\l\e\ \f\i\l\e\ \&\r\a\r\r\;\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\d\e\m\o\-\r\i\g\h\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\d\e\m\o\-\b\a\d\g\e\"\>\✓\ \P\a\r\s\e\d\ \8\4\7\ \t\r\a\n\s\a\c\t\i\o\n\s\ \i\n\ \4\.\2\s\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\d\e\m\o\-\t\a\b\l\e\-\w\r\a\p\p\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\a\b\l\e\ \c\l\a\s\s\=\"\d\e\m\o\-\t\a\b\l\e\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\h\e\a\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\h\>\D\a\t\e\<\/\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\h\>\N\a\r\r\a\t\i\o\n\<\/\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\h\>\R\e\f\ \N\o\<\/\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\h\>\D\e\b\i\t\<\/\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\h\>\C\r\e\d\i\t\<\/\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\h\>\B\a\l\a\n\c\e\<\/\t\h\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\h\e\a\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\b\o\d\y\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\2\4\/\0\5\/\2\0\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\I\M\P\S\-\6\0\0\2\1\3\8\1\2\-\R\A\H\U\L\ \S\H\A\R\M\A\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\6\0\0\2\1\3\8\1\2\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\s\p\a\n\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\c\r\e\d\i\t\"\>\4\5\,\0\0\0\.\0\0\<\/\s\p\a\n\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\1\4\2\,\5\0\0\.\0\0\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\2\5\/\0\5\/\2\0\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\U\P\I\-\Z\O\M\A\T\O\-\P\A\Y\M\E\N\T\S\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\U\P\I\3\0\0\2\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\s\p\a\n\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\d\e\b\i\t\"\>\6\5\0\.\0\0\<\/\s\p\a\n\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\1\4\1\,\8\5\0\.\0\0\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\2\6\/\0\5\/\2\0\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\N\E\F\T\-\A\W\S\ \C\L\O\U\D\ \S\E\R\V\I\C\E\S\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\N\F\1\0\9\2\8\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\s\p\a\n\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\d\e\b\i\t\"\>\4\,\2\0\0\.\0\0\<\/\s\p\a\n\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\1\3\7\,\6\5\0\.\0\0\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\2\7\/\0\5\/\2\0\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\P\O\S\-\S\T\A\R\B\U\C\K\S\-\M\U\M\B\A\I\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\P\O\S\8\2\1\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\s\p\a\n\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\d\e\b\i\t\"\>\8\4\0\.\0\0\<\/\s\p\a\n\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\1\3\6\,\8\1\0\.\0\0\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\2\8\/\0\5\/\2\0\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\R\T\G\S\-\C\L\E\A\R\I\N\G\-\D\I\V\I\D\E\N\D\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\R\T\G\4\4\1\2\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\s\p\a\n\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\c\r\e\d\i\t\"\>\1\2\,\5\0\0\.\0\0\<\/\s\p\a\n\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\1\4\9\,\3\1\0\.\0\0\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\2\9\/\0\5\/\2\0\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\U\P\I\-\U\B\E\R\-\T\R\I\P\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\U\P\I\9\9\1\2\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\s\p\a\n\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\d\e\b\i\t\"\>\4\5\0\.\0\0\<\/\s\p\a\n\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\1\4\8\,\8\6\0\.\0\0\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\3\0\/\0\5\/\2\0\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\B\I\L\L\P\A\Y\-\A\I\R\T\E\L\-\B\R\O\A\D\B\A\N\D\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\B\P\1\0\2\9\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\s\p\a\n\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\d\e\b\i\t\"\>\1\,\1\8\0\.\0\0\<\/\s\p\a\n\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\1\4\7\,\6\8\0\.\0\0\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\3\1\/\0\5\/\2\0\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\I\N\T\E\R\E\S\T\ \C\R\E\D\I\T\E\D\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\I\N\T\0\5\2\6\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\<\s\p\a\n\ \c\l\a\s\s\=\"\a\m\o\u\n\t\-\c\r\e\d\i\t\"\>\4\2\0\.\5\0\<\/\s\p\a\n\>\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\t\d\>\1\4\8\,\1\0\0\.\5\0\<\/\t\d\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\r\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\b\o\d\y\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\t\a\b\l\e\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\b\u\t\t\o\n\ \c\l\a\s\s\=\"\b\t\n\-\p\r\i\m\a\r\y\ \b\t\n\-\d\e\m\o\-\d\l\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\v\g\ \v\i\e\w\B\o\x\=\"\0\ \0\ \2\4\ \2\4\"\ \f\i\l\l\=\"\n\o\n\e\"\ \s\t\r\o\k\e\=\"\c\u\r\r\e\n\t\C\o\l\o\r\"\ \s\t\r\o\k\e\-\w\i\d\t\h\=\"\2\"\>\<\p\a\t\h\ \d\=\"\M\2\1\ \1\5\v\4\a\2\ \2\ \0\ \0\ \1\-\2\ \2\H\5\a\2\ \2\ \0\ \0\ \1\-\2\-\2\v\-\4\"\>\<\/\p\a\t\h\>\<\p\o\l\y\l\i\n\e\ \p\o\i\n\t\s\=\"\7\ \1\0\ \1\2\ \1\5\ \1\7\ \1\0\"\>\<\/\p\o\l\y\l\i\n\e\>\<\l\i\n\e\ \x\1\=\"\1\2\"\ \y\1\=\"\1\5\"\ \x\2\=\"\1\2\"\ \y\2\=\"\3\"\>\<\/\l\i\n\e\>\<\/\s\v\g\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \D\o\w\n\l\o\a\d\ \E\x\c\e\l\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\b\u\t\t\o\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \S\e\c\t\i\o\n\ \D\i\v\i\d\e\r\ \-\-\>\
\ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\d\i\v\i\d\e\r\"\>\<\/\d\i\v\>\
\
\ \ \ \ \<\!\-\-\ \7\.\ \P\R\I\C\I\N\G\ \S\E\C\T\I\O\N\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \i\d\=\"\p\r\i\c\i\n\g\"\ \c\l\a\s\s\=\"\p\r\i\c\i\n\g\ \s\c\r\o\l\l\-\r\e\v\e\a\l\"\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\h\e\a\d\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\h\2\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\t\i\t\l\e\"\>\S\i\m\p\l\e\ \p\r\i\c\i\n\g\.\ \N\o\ \s\u\r\p\r\i\s\e\s\.\<\/\h\2\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\i\n\g\-\c\a\r\d\s\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\!\-\-\ \F\r\e\e\ \T\i\e\r\ \-\-\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\i\e\r\-\n\a\m\e\"\>\S\t\a\r\t\e\r\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\e\"\>\₹\0\<\s\p\a\n\>\/\ \m\o\n\t\h\<\/\s\p\a\n\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\u\l\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\s\-\l\i\s\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \1\0\ \c\o\n\v\e\r\s\i\o\n\s\/\m\o\n\t\h\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \U\p\ \t\o\ \5\0\ \p\a\g\e\s\ \p\e\r\ \f\i\l\e\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \E\x\c\e\l\ \+\ \C\S\V\ \o\u\t\p\u\t\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \E\m\a\i\l\ \s\u\p\p\o\r\t\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\u\l\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\s\t\a\r\t\"\ \c\l\a\s\s\=\"\b\t\n\-\g\h\o\s\t\ \b\t\n\-\b\l\o\c\k\"\>\S\t\a\r\t\ \F\r\e\e\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\!\-\-\ \P\r\o\ \T\i\e\r\ \-\-\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\e\-\c\a\r\d\ \f\e\a\t\u\r\e\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\d\-\b\a\d\g\e\"\>\M\o\s\t\ \P\o\p\u\l\a\r\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\h\i\m\m\e\r\-\b\o\r\d\e\r\"\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\i\e\r\-\n\a\m\e\"\>\P\r\o\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\e\"\>\₹\9\9\9\<\s\p\a\n\>\/\ \m\o\n\t\h\<\/\s\p\a\n\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\e\-\s\t\r\i\k\e\"\>\₹\7\9\9\ \b\i\l\l\e\d\ \a\n\n\u\a\l\l\y\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\u\l\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\s\-\l\i\s\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \5\0\0\ \c\o\n\v\e\r\s\i\o\n\s\/\m\o\n\t\h\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \U\n\l\i\m\i\t\e\d\ \p\a\g\e\ \c\o\u\n\t\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \A\l\l\ \o\u\t\p\u\t\ \f\o\r\m\a\t\s\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \D\u\p\l\i\c\a\t\e\ \d\e\t\e\c\t\i\o\n\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \P\r\i\o\r\i\t\y\ \s\u\p\p\o\r\t\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\u\l\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\s\t\a\r\t\"\ \c\l\a\s\s\=\"\b\t\n\-\p\r\i\m\a\r\y\ \b\t\n\-\b\l\o\c\k\"\>\G\e\t\ \P\r\o\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\!\-\-\ \B\u\s\i\n\e\s\s\ \T\i\e\r\ \-\-\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\i\e\r\-\n\a\m\e\"\>\B\u\s\i\n\e\s\s\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\e\"\>\₹\3\,\9\9\9\<\s\p\a\n\>\/\ \m\o\n\t\h\<\/\s\p\a\n\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\u\l\ \c\l\a\s\s\=\"\f\e\a\t\u\r\e\s\-\l\i\s\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \U\n\l\i\m\i\t\e\d\ \c\o\n\v\e\r\s\i\o\n\s\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \A\P\I\ \a\c\c\e\s\s\ \+\ \w\e\b\h\o\o\k\s\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \T\e\a\m\ \s\e\a\t\s\ \(\5\ \u\s\e\r\s\)\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \C\u\s\t\o\m\ \o\u\t\p\u\t\ \t\e\m\p\l\a\t\e\s\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\l\i\>\✓\ \D\e\d\i\c\a\t\e\d\ \s\u\p\p\o\r\t\<\/\l\i\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\u\l\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\c\o\n\t\a\c\t\"\ \c\l\a\s\s\=\"\b\t\n\-\g\h\o\s\t\ \b\t\n\-\b\l\o\c\k\"\>\C\o\n\t\a\c\t\ \S\a\l\e\s\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\p\r\i\c\i\n\g\-\f\o\o\t\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \🔒\ \C\a\n\c\e\l\ \a\n\y\t\i\m\e\ \·\ \S\e\c\u\r\e\ \p\a\y\m\e\n\t\s\ \v\i\a\ \R\a\z\o\r\p\a\y\ \·\ \G\S\T\ \i\n\v\o\i\c\e\ \i\n\c\l\u\d\e\d\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \S\e\c\t\i\o\n\ \D\i\v\i\d\e\r\ \-\-\>\
\ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\d\i\v\i\d\e\r\"\>\<\/\d\i\v\>\
\
\ \ \ \ \<\!\-\-\ \8\.\ \T\E\S\T\I\M\O\N\I\A\L\S\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \c\l\a\s\s\=\"\t\e\s\t\i\m\o\n\i\a\l\s\ \s\c\r\o\l\l\-\r\e\v\e\a\l\"\>\
\ \ \ \ \ \ \ \ \<\h\2\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\t\i\t\l\e\"\>\W\h\a\t\ \f\i\n\a\n\c\e\ \t\e\a\m\s\ \a\r\e\ \s\a\y\i\n\g\<\/\h\2\>\
\ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\e\s\t\i\m\o\n\i\a\l\-\g\r\i\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\e\s\t\i\m\o\n\i\a\l\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\a\r\d\-\h\e\a\d\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\a\v\a\t\a\r\-\i\n\i\t\i\a\l\"\>\R\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\u\s\e\r\-\i\n\f\o\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\R\a\h\u\l\ \S\h\a\r\m\a\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\C\A\,\ \R\S\ \&\ \A\s\s\o\c\i\a\t\e\s\,\ \M\u\m\b\a\i\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\a\r\s\"\>\★\★\★\★\★\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\ \c\l\a\s\s\=\"\q\u\o\t\e\"\>\"\P\a\r\s\i\f\y\ \s\a\v\e\d\ \o\u\r\ \t\e\a\m\ \4\0\+\ \h\o\u\r\s\ \a\ \m\o\n\t\h\.\ \W\e\ \p\r\o\c\e\s\s\ \3\0\0\+\ \b\a\n\k\ \s\t\a\t\e\m\e\n\t\s\ \f\o\r\ \c\l\i\e\n\t\s\ \a\n\d\ \t\h\e\ \a\c\c\u\r\a\c\y\ \i\s\ \i\n\s\a\n\e\.\"\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\e\s\t\i\m\o\n\i\a\l\-\c\a\r\d\ \m\i\d\d\l\e\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\a\r\d\-\h\e\a\d\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\a\v\a\t\a\r\-\i\n\i\t\i\a\l\"\>\P\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\u\s\e\r\-\i\n\f\o\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\P\r\i\y\a\ \M\e\h\t\a\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\F\i\n\a\n\c\e\ \M\a\n\a\g\e\r\,\ \F\i\n\o\v\a\ \S\t\a\r\t\u\p\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\a\r\s\"\>\★\★\★\★\★\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\ \c\l\a\s\s\=\"\q\u\o\t\e\"\>\"\F\i\n\a\l\l\y\ \—\ \a\ \c\o\n\v\e\r\t\e\r\ \t\h\a\t\ \h\a\n\d\l\e\s\ \S\B\I\'\s\ \t\e\r\r\i\b\l\e\ \P\D\F\ \f\o\r\m\a\t\ \c\o\r\r\e\c\t\l\y\.\ \W\o\r\t\h\ \e\v\e\r\y\ \r\u\p\e\e\.\"\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\t\e\s\t\i\m\o\n\i\a\l\-\c\a\r\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\a\r\d\-\h\e\a\d\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\a\v\a\t\a\r\-\i\n\i\t\i\a\l\"\>\A\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\u\s\e\r\-\i\n\f\o\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\A\r\j\u\n\ \D\a\s\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\C\T\O\,\ \K\h\a\t\a\.\i\o\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\t\a\r\s\"\>\★\★\★\★\★\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\ \c\l\a\s\s\=\"\q\u\o\t\e\"\>\"\W\e\ \i\n\t\e\g\r\a\t\e\d\ \t\h\e\ \A\P\I\ \i\n\t\o\ \o\u\r\ \r\e\c\o\n\c\i\l\i\a\t\i\o\n\ \t\o\o\l\ \i\n\ \2\ \d\a\y\s\.\ \D\o\c\u\m\e\n\t\a\t\i\o\n\ \i\s\ \c\l\e\a\n\,\ \s\u\p\p\o\r\t\ \i\s\ \f\a\s\t\.\"\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \S\e\c\t\i\o\n\ \D\i\v\i\d\e\r\ \-\-\>\
\ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\d\i\v\i\d\e\r\"\>\<\/\d\i\v\>\
\
\ \ \ \ \<\!\-\-\ \9\.\ \F\A\Q\ \S\E\C\T\I\O\N\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \c\l\a\s\s\=\"\f\a\q\ \s\c\r\o\l\l\-\r\e\v\e\a\l\"\>\
\ \ \ \ \ \ \ \ \<\h\2\ \c\l\a\s\s\=\"\s\e\c\t\i\o\n\-\t\i\t\l\e\"\>\C\o\m\m\o\n\ \q\u\e\s\t\i\o\n\s\<\/\h\2\>\
\ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\c\o\n\t\a\i\n\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\i\t\e\m\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\b\u\t\t\o\n\ \c\l\a\s\s\=\"\f\a\q\-\q\u\e\s\t\i\o\n\"\>\W\h\i\c\h\ \b\a\n\k\s\ \d\o\e\s\ \P\a\r\s\i\f\y\ \s\u\p\p\o\r\t\?\<\s\p\a\n\ \c\l\a\s\s\=\"\f\a\q\-\i\c\o\n\"\>\+\<\/\s\p\a\n\>\<\/\b\u\t\t\o\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\a\n\s\w\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\W\e\ \s\u\p\p\o\r\t\ \o\v\e\r\ \5\0\ \I\n\d\i\a\n\ \b\a\n\k\s\,\ \i\n\c\l\u\d\i\n\g\ \a\l\l\ \m\a\j\o\r\ \p\u\b\l\i\c\ \a\n\d\ \p\r\i\v\a\t\e\ \s\e\c\t\o\r\ \b\a\n\k\s\ \(\H\D\F\C\,\ \S\B\I\,\ \I\C\I\C\I\,\ \A\x\i\s\,\ \K\o\t\a\k\,\ \P\N\B\,\ \Y\e\s\ \B\a\n\k\,\ \B\O\B\,\ \e\t\c\.\)\.\ \O\u\r\ \e\n\g\i\n\e\ \i\s\ \c\o\n\s\t\a\n\t\l\y\ \u\p\d\a\t\e\d\ \t\o\ \h\a\n\d\l\e\ \t\h\e\i\r\ \l\a\t\e\s\t\ \s\t\a\t\e\m\e\n\t\ \f\o\r\m\a\t\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\i\t\e\m\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\b\u\t\t\o\n\ \c\l\a\s\s\=\"\f\a\q\-\q\u\e\s\t\i\o\n\"\>\I\s\ \m\y\ \d\a\t\a\ \s\a\f\e\?\ \D\o\ \y\o\u\ \s\t\o\r\e\ \m\y\ \s\t\a\t\e\m\e\n\t\s\?\<\s\p\a\n\ \c\l\a\s\s\=\"\f\a\q\-\i\c\o\n\"\>\+\<\/\s\p\a\n\>\<\/\b\u\t\t\o\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\a\n\s\w\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\Y\o\u\r\ \d\a\t\a\ \i\s\ \1\0\0\%\ \s\a\f\e\.\ \W\e\ \h\a\v\e\ \a\ \s\t\r\i\c\t\ \z\e\r\o\ \d\a\t\a\ \r\e\t\e\n\t\i\o\n\ \p\o\l\i\c\y\.\ \Y\o\u\r\ \P\D\F\ \s\t\a\t\e\m\e\n\t\s\ \a\n\d\ \t\h\e\ \e\x\t\r\a\c\t\e\d\ \d\a\t\a\ \a\r\e\ \p\e\r\m\a\n\e\n\t\l\y\ \d\e\l\e\t\e\d\ \f\r\o\m\ \o\u\r\ \s\e\r\v\e\r\s\ \i\m\m\e\d\i\a\t\e\l\y\ \a\f\t\e\r\ \t\h\e\ \c\o\n\v\e\r\s\i\o\n\ \p\r\o\c\e\s\s\ \i\s\ \c\o\m\p\l\e\t\e\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\i\t\e\m\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\b\u\t\t\o\n\ \c\l\a\s\s\=\"\f\a\q\-\q\u\e\s\t\i\o\n\"\>\W\h\a\t\ \o\u\t\p\u\t\ \f\o\r\m\a\t\s\ \d\o\ \y\o\u\ \s\u\p\p\o\r\t\?\<\s\p\a\n\ \c\l\a\s\s\=\"\f\a\q\-\i\c\o\n\"\>\+\<\/\s\p\a\n\>\<\/\b\u\t\t\o\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\a\n\s\w\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\C\u\r\r\e\n\t\l\y\,\ \w\e\ \s\u\p\p\o\r\t\ \.\x\l\s\x\ \(\E\x\c\e\l\)\ \a\n\d\ \.\c\s\v\ \f\o\r\m\a\t\s\.\ \T\h\e\s\e\ \f\i\l\e\s\ \a\r\e\ \o\p\t\i\m\i\z\e\d\ \t\o\ \b\e\ \e\a\s\i\l\y\ \i\m\p\o\r\t\e\d\ \i\n\t\o\ \T\a\l\l\y\,\ \Q\u\i\c\k\B\o\o\k\s\,\ \Z\o\h\o\ \B\o\o\k\s\,\ \o\r\ \y\o\u\r\ \o\w\n\ \c\u\s\t\o\m\ \E\R\P\ \s\y\s\t\e\m\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\i\t\e\m\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\b\u\t\t\o\n\ \c\l\a\s\s\=\"\f\a\q\-\q\u\e\s\t\i\o\n\"\>\C\a\n\ \P\a\r\s\i\f\y\ \h\a\n\d\l\e\ \s\c\a\n\n\e\d\/\i\m\a\g\e\ \P\D\F\s\?\<\s\p\a\n\ \c\l\a\s\s\=\"\f\a\q\-\i\c\o\n\"\>\+\<\/\s\p\a\n\>\<\/\b\u\t\t\o\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\a\n\s\w\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\P\a\r\s\i\f\y\ \i\s\ \o\p\t\i\m\i\z\e\d\ \f\o\r\ \n\a\t\i\v\e\ \d\i\g\i\t\a\l\ \P\D\F\s\ \(\t\h\e\ \o\n\e\s\ \y\o\u\ \d\o\w\n\l\o\a\d\ \d\i\r\e\c\t\l\y\ \f\r\o\m\ \y\o\u\r\ \b\a\n\k\'\s\ \n\e\t\ \b\a\n\k\i\n\g\ \p\o\r\t\a\l\)\.\ \W\e\ \a\r\e\ \c\u\r\r\e\n\t\l\y\ \b\e\t\a\ \t\e\s\t\i\n\g\ \O\C\R\ \f\o\r\ \s\c\a\n\n\e\d\ \i\m\a\g\e\ \s\t\a\t\e\m\e\n\t\s\,\ \w\h\i\c\h\ \w\i\l\l\ \b\e\ \a\v\a\i\l\a\b\l\e\ \i\n\ \t\h\e\ \B\u\s\i\n\e\s\s\ \t\i\e\r\ \s\o\o\n\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\i\t\e\m\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\b\u\t\t\o\n\ \c\l\a\s\s\=\"\f\a\q\-\q\u\e\s\t\i\o\n\"\>\I\s\ \t\h\e\r\e\ \a\n\ \A\P\I\ \f\o\r\ \d\e\v\e\l\o\p\e\r\s\?\<\s\p\a\n\ \c\l\a\s\s\=\"\f\a\q\-\i\c\o\n\"\>\+\<\/\s\p\a\n\>\<\/\b\u\t\t\o\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\a\n\s\w\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\Y\e\s\,\ \w\e\ \o\f\f\e\r\ \a\ \r\o\b\u\s\t\ \R\E\S\T\ \A\P\I\ \a\v\a\i\l\a\b\l\e\ \o\n\ \o\u\r\ \B\u\s\i\n\e\s\s\ \t\i\e\r\.\ \I\t\ \f\e\a\t\u\r\e\s\ \w\e\b\h\o\o\k\ \n\o\t\i\f\i\c\a\t\i\o\n\s\ \u\p\o\n\ \c\o\n\v\e\r\s\i\o\n\ \c\o\m\p\l\e\t\i\o\n\ \a\n\d\ \d\e\t\a\i\l\e\d\ \A\P\I\ \d\o\c\u\m\e\n\t\a\t\i\o\n\ \t\o\ \g\e\t\ \y\o\u\ \u\p\ \a\n\d\ \r\u\n\n\i\n\g\ \q\u\i\c\k\l\y\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\i\t\e\m\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\b\u\t\t\o\n\ \c\l\a\s\s\=\"\f\a\q\-\q\u\e\s\t\i\o\n\"\>\D\o\ \I\ \g\e\t\ \a\ \G\S\T\ \i\n\v\o\i\c\e\?\<\s\p\a\n\ \c\l\a\s\s\=\"\f\a\q\-\i\c\o\n\"\>\+\<\/\s\p\a\n\>\<\/\b\u\t\t\o\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\a\q\-\a\n\s\w\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\A\b\s\o\l\u\t\e\l\y\.\ \Y\o\u\ \c\a\n\ \a\d\d\ \y\o\u\r\ \c\o\m\p\a\n\y\'\s\ \G\S\T\ \d\e\t\a\i\l\s\ \d\u\r\i\n\g\ \c\h\e\c\k\o\u\t\,\ \a\n\d\ \a\ \v\a\l\i\d\ \t\a\x\ \i\n\v\o\i\c\e\ \w\i\l\l\ \b\e\ \s\e\n\t\ \t\o\ \y\o\u\r\ \e\m\a\i\l\ \a\u\t\o\m\a\t\i\c\a\l\l\y\ \f\o\r\ \e\v\e\r\y\ \b\i\l\l\i\n\g\ \c\y\c\l\e\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \1\0\.\ \F\I\N\A\L\ \C\T\A\ \S\E\C\T\I\O\N\ \-\-\>\
\ \ \ \ \<\s\e\c\t\i\o\n\ \c\l\a\s\s\=\"\f\i\n\a\l\-\c\t\a\ \s\c\r\o\l\l\-\r\e\v\e\a\l\"\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\t\a\-\m\e\s\h\-\b\g\"\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\c\t\a\-\c\o\n\t\e\n\t\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\h\2\>\S\t\o\p\ \w\r\e\s\t\l\i\n\g\ \w\i\t\h\ \P\D\F\s\.\<\/\h\2\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\J\o\i\n\ \2\,\4\0\0\+\ \f\i\n\a\n\c\e\ \p\r\o\f\e\s\s\i\o\n\a\l\s\ \w\h\o\ \c\o\n\v\e\r\t\e\d\ \t\o\ \c\l\e\a\n\ \d\a\t\a\ \—\ \f\o\r\ \f\r\e\e\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\s\t\a\r\t\"\ \c\l\a\s\s\=\"\b\t\n\-\p\r\i\m\a\r\y\ \b\t\n\-\l\a\r\g\e\"\>\C\o\n\v\e\r\t\ \Y\o\u\r\ \F\i\r\s\t\ \S\t\a\t\e\m\e\n\t\ \&\r\a\r\r\;\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\p\ \c\l\a\s\s\=\"\c\t\a\-\s\u\b\t\e\x\t\"\>\N\o\ \c\r\e\d\i\t\ \c\a\r\d\ \·\ \N\o\ \s\e\t\u\p\ \·\ \R\e\a\d\y\ \i\n\ \3\0\ \s\e\c\o\n\d\s\<\/\p\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\s\e\c\t\i\o\n\>\
\
\ \ \ \ \<\!\-\-\ \1\1\.\ \F\O\O\T\E\R\ \-\-\>\
\ \ \ \ \<\f\o\o\t\e\r\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\o\o\t\e\r\-\c\o\n\t\a\i\n\e\r\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\o\o\t\e\r\-\b\r\a\n\d\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\l\o\g\o\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\l\o\g\o\-\i\c\o\n\"\>\<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \P\a\r\s\i\f\y\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\F\r\o\m\ \P\D\F\ \C\h\a\o\s\ \t\o\ \C\l\e\a\n\ \D\a\t\a\ \—\ \i\n\ \S\e\c\o\n\d\s\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\o\o\t\e\r\-\l\i\n\k\s\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\l\i\n\k\-\c\o\l\u\m\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\P\r\o\d\u\c\t\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\F\e\a\t\u\r\e\s\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\P\r\i\c\i\n\g\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\C\h\a\n\g\e\l\o\g\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\S\e\c\u\r\i\t\y\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\l\i\n\k\-\c\o\l\u\m\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\D\e\v\e\l\o\p\e\r\s\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\A\P\I\ \D\o\c\s\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\W\e\b\h\o\o\k\s\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\S\t\a\t\u\s\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\l\i\n\k\-\c\o\l\u\m\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\C\o\m\p\a\n\y\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\A\b\o\u\t\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\B\l\o\g\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\C\o\n\t\a\c\t\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\l\i\n\k\-\c\o\l\u\m\n\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\h\4\>\L\e\g\a\l\<\/\h\4\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\P\r\i\v\a\c\y\ \P\o\l\i\c\y\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\T\e\r\m\s\ \o\f\ \S\e\r\v\i\c\e\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\R\e\f\u\n\d\ \P\o\l\i\c\y\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\o\o\t\e\r\-\b\o\t\t\o\m\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\p\>\&\c\o\p\y\;\ \2\0\2\5\ \P\a\r\s\i\f\y\.\ \A\l\l\ \r\i\g\h\t\s\ \r\e\s\e\r\v\e\d\.\<\/\p\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\d\i\v\ \c\l\a\s\s\=\"\f\o\o\t\e\r\-\b\o\t\t\o\m\-\l\i\n\k\s\"\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\P\r\i\v\a\c\y\ \P\o\l\i\c\y\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\a\ \h\r\e\f\=\"\#\"\>\T\e\r\m\s\<\/\a\>\
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \<\s\p\a\n\>\M\a\d\e\ \w\i\t\h\ \&\h\e\a\r\t\s\;\ \i\n\ \I\n\d\i\a\<\/\s\p\a\n\>\
\ \ \ \ \ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \ \ \ \ \<\/\d\i\v\>\
\ \ \ \ \<\/\f\o\o\t\e\r\>\
       }} />
    </>
  );
}
