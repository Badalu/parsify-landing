"use client";

import React from "react";
import { Receipt, Building2, Lock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Contact us
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
              Talk to a real human — based in India
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Questions about statement formats, CA firm licenses, custom payment integrations or api endpoints?
              Our team answers within 4 business hours, Monday to Saturday.
            </p>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                  <Receipt className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">support@parsify.in</p>
                  <p className="text-muted-foreground mt-0.5">For product help, statement formatting bugs, billing & refunds</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                  <Building2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">sales@parsify.in</p>
                  <p className="text-muted-foreground mt-0.5">Bulk CA firm packages, tax-firm API accesses & corporate invoices</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary">
                  <Lock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">SOC 2 · ISO 27001 in progress</p>
                  <p className="text-muted-foreground mt-0.5">All files are securely auto-deleted within 24 hours of uploading</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6 text-xs text-muted-foreground font-sans">
              <span>🇮🇳 Made in Bengaluru</span>
              <span>·</span>
              <span>GSTIN invoices provided</span>
              <span>·</span>
              <span>12,000+ happy customers</span>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! We'll reply within 4 business hours.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <h3 className="font-serif text-2xl text-foreground">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Drop us your questions and we will respond directly to your inbox.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="cname">Name</label>
                <input id="cname" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm" placeholder="Rajesh Kumar" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="cemail">Email</label>
                <input id="cemail" type="email" required className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="cmsg">Message</label>
                <textarea id="cmsg" required rows={4} className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm" placeholder="Tell us how we can help..." />
              </div>
              <button type="submit" className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 w-full">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
