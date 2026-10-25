import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: { absolute: 'Contact Us | Parsify' },
  description: 'Get in touch with the Parsify team for support or inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="brutal-card p-8 md:p-12 bg-card relative">
          <div className="inline-block border-2 border-shadow-color bg-background px-3 py-1 text-sm font-bold uppercase tracking-widest text-primary mb-8 brutal-shadow">
            Get in touch
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-10 text-shadow-color uppercase font-sans">
            Contact <span className="text-secondary">Us</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase text-shadow-color">We're here to help</h2>
              <p className="text-muted-foreground font-medium">
                Have questions about our service, need technical support, or want to explore an enterprise plan? Reach out to our team and we'll get back to you as soon as possible.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="brutal-card p-4 bg-background">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Legal Entity / Merchant</div>
                  <p className="text-base font-black text-shadow-color">BADAL RAJESH HARI</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">Operating under brand name Parsify</p>
                </div>

                <div className="brutal-card p-4 bg-background">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Direct Support Email</div>
                  <a href="mailto:haribadal5@gmail.com" className="text-base font-bold text-shadow-color hover:text-secondary block">
                    haribadal5@gmail.com
                  </a>
                  <a href="mailto:team@parsify.in" className="text-xs text-muted-foreground hover:text-primary mt-1 block">
                    team@parsify.in
                  </a>
                </div>

                <div className="brutal-card p-4 bg-background">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Phone / Support Contact</div>
                  <a href="tel:+917738973272" className="text-base font-bold text-shadow-color hover:text-secondary">
                    +91 7738973272
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">Available Mon-Sat (10:00 AM - 7:00 PM IST)</p>
                </div>

                <div className="brutal-card p-4 bg-background">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Registered Address</div>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                    Mumbai, Maharashtra, India - 400001
                  </p>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
