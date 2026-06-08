import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Parsify',
  description: 'Refund policy for Parsify subscriptions and services.',
};

export default function RefundPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="brutal-card p-8 md:p-12 bg-card relative">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
            Legal Information
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-10 text-shadow-color uppercase font-sans">
            Refund <span className="text-secondary">Policy</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground font-medium space-y-6">
            <p>
              At Parsify, we strive to ensure our customers are completely satisfied with our document conversion services. Please read our refund policy carefully.
            </p>
            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">1. Eligibility for Refund</h2>
            <p>
              We offer a 7-day money-back guarantee for your first subscription payment. If you are not satisfied with the service within the first 7 days, you can request a full refund.
            </p>
            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">2. Non-Refundable Cases</h2>
            <p>
              Refunds are not granted for recurring subscription charges after the initial 7-day period. Additionally, if you have heavily utilized the service (e.g., converted more than 50 pages), a refund may not be applicable.
            </p>
            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">3. How to Request</h2>
            <p>
              To request a refund, please contact our support team at support@parsify.in with your account details and the reason for the refund.
            </p>
            <h2 className="text-2xl font-black uppercase text-shadow-color mt-10 mb-4">4. Processing Time</h2>
            <p>
              Approved refunds will be processed and credited back to your original payment method within 5-10 business days.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
