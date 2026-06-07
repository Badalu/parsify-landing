"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "e100b28b-27ae-4d50-a575-3e8d18ae17db");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('Message sent successfully!');
        e.currentTarget.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        console.error("Error", data);
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Error", error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="brutal-card p-6 bg-background">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-shadow-color mb-2">Name</label>
          <input type="text" id="name" name="name" required className="w-full border-2 border-shadow-color p-3 bg-card font-medium focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-shadow-color mb-2">Email</label>
          <input type="email" id="email" name="email" required className="w-full border-2 border-shadow-color p-3 bg-card font-medium focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-shadow-color mb-2">Message</label>
          <textarea id="message" name="message" required className="w-full border-2 border-shadow-color p-3 bg-card font-medium h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help?"></textarea>
        </div>
        
        {/* Web3Forms Configuration */}
        <input type="hidden" name="subject" value="New Contact Message from Parsify" />
        <input type="hidden" name="from_name" value="Parsify Contact Form" />
        
        <button type="submit" disabled={status === 'Sending...'} className="brutal-btn-primary w-full py-4 uppercase tracking-wider mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
        </button>
        
        {status && status !== 'Sending...' && (
          <p className={`mt-4 font-bold text-center p-2 border-2 border-shadow-color ${status.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
