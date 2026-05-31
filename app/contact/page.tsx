import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Parsify',
  description: 'Get in touch with the Parsify team for support or inquiries.',
};

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white pt-32 pb-24 border-b-2 border-shadow-color bg-grid-pattern">
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
                  <div className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Email Support</div>
                  <a href="mailto:support@parsify.in" className="text-lg font-bold text-shadow-color hover:text-secondary">support@parsify.in</a>
                </div>
                <div className="brutal-card p-4 bg-background">
                  <div className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Business Inquiries</div>
                  <a href="mailto:business@parsify.in" className="text-lg font-bold text-shadow-color hover:text-secondary">business@parsify.in</a>
                </div>
              </div>
            </div>
            
            <div className="brutal-card p-6 bg-background">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-shadow-color mb-2">Name</label>
                  <input type="text" className="w-full border-2 border-shadow-color p-3 bg-card font-medium focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-shadow-color mb-2">Email</label>
                  <input type="email" className="w-full border-2 border-shadow-color p-3 bg-card font-medium focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-shadow-color mb-2">Message</label>
                  <textarea className="w-full border-2 border-shadow-color p-3 bg-card font-medium h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="brutal-btn-primary w-full py-4 uppercase tracking-wider mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
