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
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Parsify",
    "url": "https://parsify.in",
    "description": "Free online bank statement converter (PDF to Excel/CSV). Supports major Indian banks.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": [
      "Bank statement to Excel conversion",
      "PDF to CSV extraction",
      "Supports SBI, HDFC, ICICI, Axis, Kotak and more",
      "No signup required",
      "100% Free"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I convert a PDF bank statement to Excel or CSV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply upload your PDF bank statement to Parsify, and our tool will automatically extract the transaction data and provide a downloadable Excel or CSV file instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Is this bank statement converter free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Parsify is 100% free to use. There are no hidden charges, and you don't even need to sign up to convert your bank statements."
        }
      },
      {
        "@type": "Question",
        "name": "Which Indian banks are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support 15+ major Indian banks including SBI, HDFC, ICICI, Axis, Kotak, PNB, Canara Bank, Bank of Baroda, Union Bank, IDBI, Yes Bank, and IndusInd Bank."
        }
      },
      {
        "@type": "Question",
        "name": "Is my financial data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We do not store your bank statements or transaction data. All processing is done securely, and your files are immediately deleted from our servers after conversion."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this for ITR filing or accounting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our tool is heavily used by Chartered Accountants (CAs), freelancers, and businesses to prepare bank statements for ITR filing, audits, and accounting software imports."
        }
      }
    ]
  };

  return (
    <>
      <Script id="schema-webapp" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide layout navbar/footer so our custom design can take over the whole screen */
        body > nav, body > header, body > footer, .Navbar {
            display: none !important;
        }
        
        .parsify-landing {
            --bg-color: #FAF9F7;
            --primary: #1A6B4A;
            --text-main: #111111;
            --sage: #C8D9C8;
            --peach: #E8B89A;
            --red: #C84040;
            --dark: #1a1a1a;
            --light: #F0EDE8;
            
            --dash-bg: #FDE8E8;
            --dash-border: #E8A0A0;
            --dash-text: #C04040;
            --dash-hover: #F5D0D0;
            
            --border-color: #E6E4DF;
            
            font-family: 'DM Sans', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
            width: 100vw;
            margin-left: calc(50% - 50vw);
            margin-top: -1px;
        }

        .parsify-landing * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .parsify-landing h1, .parsify-landing .logo, .parsify-landing .playfair {
            font-family: 'Playfair Display', serif;
        }

        /* Navigation */
        .parsify-landing nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 5%;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
        }

        .parsify-landing .logo {
            font-size: 1.75rem;
            font-weight: 700;
            text-decoration: none;
            color: var(--text-main);
            display: flex;
            align-items: baseline;
            letter-spacing: -0.5px;
        }

        .parsify-landing .logo-dot {
            color: var(--primary);
        }

        .parsify-landing .nav-links {
            display: flex;
            gap: 2rem;
        }

        .parsify-landing .nav-links a {
            text-decoration: none;
            color: var(--text-main);
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.2s;
        }

        .parsify-landing .nav-links a:hover {
            color: var(--primary);
        }

        .parsify-landing .nav-right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .parsify-landing .login-link {
            text-decoration: none;
            color: var(--text-main);
            font-weight: 500;
            font-size: 0.95rem;
            transition: color 0.2s;
        }
        
        .parsify-landing .login-link:hover {
            color: var(--primary);
        }

        .parsify-landing .btn-dashboard {
            background-color: var(--dash-bg);
            border: 1.5px solid var(--dash-border);
            color: var(--dash-text);
            border-radius: 6px;
            padding: 7px 16px;
            font-family: 'DM Sans', sans-serif;
            font-size: 13px;
            font-weight: 500;
            text-decoration: none;
            transition: background-color 0.2s;
        }

        .parsify-landing .btn-dashboard:hover {
            background-color: var(--dash-hover);
        }

        /* Hero Section */
        .parsify-landing .hero {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem 5%;
            position: relative;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
            text-align: center;
            padding-bottom: 4rem;
        }

        .parsify-landing .hero-center {
            max-width: 600px;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .parsify-landing .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background-color: white;
            border: 1px solid var(--border-color);
            padding: 0.4rem 0.8rem;
            border-radius: 2rem;
            font-size: 0.85rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }
        
        .parsify-landing .badge span {
            color: #E2B13C;
        }

        .parsify-landing h1 {
            font-size: 48px;
            line-height: 1.15;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-main);
            letter-spacing: -1px;
        }

        .parsify-landing .hero-subtext {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 2rem;
            line-height: 1.5;
            max-width: 500px;
        }

        .parsify-landing .btn-primary {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 1rem 2.5rem;
            border-radius: 8px;
            font-size: 1.05rem;
            font-weight: 500;
            text-decoration: none;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 14px rgba(26, 107, 74, 0.2);
            cursor: pointer;
            margin-bottom: 3rem;
            display: inline-block;
        }

        .parsify-landing .btn-primary:hover {
            transform: scale(1.03);
            box-shadow: 0 6px 20px rgba(26, 107, 74, 0.3);
        }

        /* Drag & Drop Box */
        .parsify-landing .upload-container {
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
        }

        .parsify-landing .upload-box {
            background-color: #F0F7F3;
            border: 2px dashed rgba(26, 107, 74, 0.6);
            border-radius: 12px;
            padding: 2.5rem 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            animation: borderPulse 2s infinite alternate ease-in-out;
        }

        @keyframes borderPulse {
            0% { border-color: rgba(26, 107, 74, 0.6); }
            100% { border-color: rgba(26, 107, 74, 1); }
        }

        .parsify-landing .upload-box:hover {
            border: 2px solid var(--primary);
            background-color: #E9F2ED;
            animation: none;
        }

        .parsify-landing .upload-icon {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }

        .parsify-landing .upload-title {
            font-weight: 600;
            margin-bottom: 0.5rem;
            font-size: 1.05rem;
            color: var(--text-main);
        }

        .parsify-landing .upload-subtitle {
            font-size: 0.9rem;
            color: #666;
        }

        .parsify-landing .trust-text {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 0.85rem;
            color: #666;
            margin-top: 1.25rem;
        }
        
        .parsify-landing .bank-pills {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
        }
        
        .parsify-landing .bank-pill {
            font-size: 0.75rem;
            font-weight: 600;
            color: #555;
            background-color: white;
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            border: 1px solid var(--border-color);
        }

        /* Tile Grids */
        .parsify-landing .tile-grid {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            display: grid;
            grid-template-columns: repeat(2, 90px);
            grid-auto-rows: 90px;
            gap: 0;
            z-index: 1;
        }

        .parsify-landing .tile-grid.left {
            left: 5%;
        }

        .parsify-landing .tile-grid.right {
            right: 5%;
        }

        .parsify-landing .tile {
            width: 90px;
            height: 90px;
            border: 1.5px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            opacity: 0;
            animation: fadeIn 0.6s forwards cubic-bezier(0.16, 1, 0.3, 1);
            color: var(--text-main);
            margin-top: -1.5px;
            margin-left: -1.5px;
        }
        
        .parsify-landing .tile-grid .tile:nth-child(2n) {
            margin-left: -1.5px;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }

        /* Tile Backgrounds */
        .parsify-landing .bg-primary { background-color: var(--primary); color: white; border-color: var(--primary); z-index: 2; }
        .parsify-landing .bg-sage { background-color: var(--sage); }
        .parsify-landing .bg-peach { background-color: var(--peach); }
        .parsify-landing .bg-red { background-color: var(--red); color: white; border-color: var(--red); z-index: 2;}
        .parsify-landing .bg-dark { background-color: var(--dark); color: white; border-color: var(--dark); z-index: 2;}
        .parsify-landing .bg-light { background-color: var(--light); }
        .parsify-landing .bg-white { background-color: #FFFFFF; }

        /* Bottom Stats Strip */
        .parsify-landing .stats-strip {
            border-top: 1px solid var(--border-color);
            padding: 1.5rem 5%;
            display: flex;
            justify-content: center;
            background-color: var(--bg-color);
            width: 100%;
            margin-top: auto;
        }

        .parsify-landing .stats-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            max-width: 1000px;
            width: 100%;
            text-align: center;
        }

        .parsify-landing .stat-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 0.95rem;
            font-weight: 500;
            color: #444;
        }

        /* Responsive Design */
        @media (max-width: 1100px) {
            .parsify-landing .tile-grid {
                display: none; 
            }
        }

        @media (max-width: 768px) {
            .parsify-landing nav {
                flex-direction: column;
                gap: 1rem;
            }
            .parsify-landing .nav-links {
                display: flex; 
                flex-wrap: wrap;
                justify-content: center;
                gap: 1rem;
            }
            .parsify-landing h1 {
                font-size: 36px;
            }
            .parsify-landing .stats-container {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            .parsify-landing .hero {
                padding-bottom: 2rem;
            }
            .parsify-landing .nav-right {
                width: 100%;
                justify-content: center;
            }
        }
      ` }} />

      <div className="parsify-landing">
        <nav>
          <a href="#" className="logo">parsify<span className="logo-dot">.</span></a>
          
          <div className="nav-links">
              <a href="#">How it works</a>
              <a href="#">Supported Banks</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
          </div>
          
          <div className="nav-right">
              <a href="#" className="login-link">Login</a>
              <a href="#" className="btn-dashboard">Dashboard</a>
          </div>
        </nav>

        <main className="hero">
          
          <div className="tile-grid left">
              <div className="tile bg-light" style={{ animationDelay: '0.1s' }}><i className="ti ti-percentage"></i></div>
              <div className="tile bg-primary" style={{ animationDelay: '0.2s' }}><i className="ti ti-arrow-up-left"></i></div>
              <div className="tile bg-peach" style={{ animationDelay: '0.3s' }}><i className="ti ti-chevron-right"></i></div>
              <div className="tile bg-white" style={{ animationDelay: '0.4s' }}><i className="ti ti-clock"></i></div>
              <div className="tile bg-dark" style={{ animationDelay: '0.5s' }}><i className="ti ti-diamond"></i></div>
              <div className="tile bg-sage" style={{ animationDelay: '0.6s' }}><i className="ti ti-settings"></i></div>
              <div className="tile bg-white" style={{ animationDelay: '0.7s' }}><i className="ti ti-circle"></i></div>
              <div className="tile bg-light" style={{ animationDelay: '0.8s' }}><i className="ti ti-dots"></i></div>
          </div>

          <div className="hero-center">
              <div className="badge">
                  <span>★</span> 4.9 · 18,000+ CAs & Professionals
              </div>
              
              <h1>Parse Your Bank Statements Instantly</h1>
              
              <p className="hero-subtext">
                  Upload any PDF — HDFC, SBI, ICICI, Axis — get clean, categorized Excel data in seconds.
              </p>
              
              <a href="#" className="btn-primary">Try it free</a>
              
              <div className="upload-container">
                  <div className="upload-box">
                      <i className="ti ti-upload upload-icon"></i>
                      <div className="upload-title">Drag & drop your bank statement here</div>
                      <div className="upload-subtitle">or click to browse · PDF files only · Max 10MB</div>
                  </div>
                  <div className="trust-text">
                      🔒 Your file is deleted immediately after conversion
                  </div>
                  
                  <div className="bank-pills">
                      <span className="bank-pill">HDFC</span>
                      <span className="bank-pill">SBI</span>
                      <span className="bank-pill">ICICI</span>
                      <span className="bank-pill">Axis</span>
                      <span className="bank-pill">Kotak</span>
                      <span className="bank-pill">PNB</span>
                      <span className="bank-pill">BOB</span>
                  </div>
              </div>
          </div>

          <div className="tile-grid right">
              <div className="tile bg-white" style={{ animationDelay: '0.9s' }}><i className="ti ti-file-spreadsheet"></i></div>
              <div className="tile bg-red" style={{ animationDelay: '1.0s' }}><i className="ti ti-dots"></i></div>
              <div className="tile bg-sage" style={{ animationDelay: '1.1s' }}><i className="ti ti-circle"></i></div>
              <div className="tile bg-light" style={{ animationDelay: '1.2s' }}><i className="ti ti-arrow-up-left"></i></div>
              <div className="tile bg-white" style={{ animationDelay: '1.3s' }}><i className="ti ti-clock"></i></div>
              <div className="tile bg-peach" style={{ animationDelay: '1.4s' }}><i className="ti ti-percentage"></i></div>
              <div className="tile bg-dark" style={{ animationDelay: '1.5s' }}><i className="ti ti-settings"></i></div>
              <div className="tile bg-light" style={{ animationDelay: '1.6s' }}><i className="ti ti-chevron-right"></i></div>
          </div>

        </main>

        <footer className="stats-strip">
            <div className="stats-container">
                <div className="stat-item">
                    👥 18,000+ professionals trust us
                </div>
                <div className="stat-item">
                    🛡️ Free trial, no card needed
                </div>
                <div className="stat-item">
                    ✅ All Indian banks supported
                </div>
            </div>
        </footer>
      </div>
    </>
  );
}
