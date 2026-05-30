"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ArrowDownUp, Menu, X } from "lucide-react";

const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-2 border-shadow-color transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground border-2 border-shadow-color brutal-shadow" style={{ borderRadius: 0 }}>
            <ArrowDownUp className="h-4 w-4" strokeWidth={3} />
          </span>
          <span className="text-xl font-bold tracking-tight font-serif uppercase tracking-widest text-shadow-color ml-2">Parsify</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`${DASHBOARD_URL}/login`}
            className="text-sm font-bold uppercase tracking-wider text-shadow-color transition-colors hover:text-primary"
          >
            Log in
          </a>
          <a
            href={`${DASHBOARD_URL}/signup`}
            className="brutal-btn-primary uppercase tracking-wider text-sm"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-9 w-9 place-items-center md:hidden brutal-border-dark brutal-shadow bg-card"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-t-2 border-shadow-color bg-background">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-card hover:text-shadow-color border-b border-border"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`${DASHBOARD_URL}/login`}
                onClick={() => setOpen(false)}
                className="brutal-btn-secondary w-full uppercase tracking-wider"
              >
                Log in
              </a>
              <a
                href={`${DASHBOARD_URL}/signup`}
                onClick={() => setOpen(false)}
                className="brutal-btn-primary w-full uppercase tracking-wider"
              >
                Sign up free
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
