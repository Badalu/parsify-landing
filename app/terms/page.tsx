import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Parsify',
  description: 'Terms of service and user agreement for Parsify.',
};

export default function TermsPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="brutal-card p-8 md:p-12 bg-card relative">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
            Legal Information
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-10 text-shadow-color uppercase font-sans">
            Terms of <span className="text-secondary">Service</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-6">
            <p>
              Welcome to Parsify. By using our website and services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using our document conversion services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">2. Description of Service</h2>
            <p>
              Parsify provides an automated tool to convert bank statement PDFs into Excel and CSV formats. We do not store any of your financial data once the conversion is completed and delivered to you.
            </p>
            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">3. User Responsibilities</h2>
            <p>
              You are responsible for the documents you upload. Ensure that you have the right to process the data contained within those documents. You must not use our service for any illegal or unauthorized purpose.
            </p>
            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall Parsify be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
