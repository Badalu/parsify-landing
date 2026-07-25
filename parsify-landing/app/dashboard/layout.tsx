"use client";

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { useDashboardAuth } from "./hooks/useDashboardAuth";
import { useDashboardConversions } from "./hooks/useDashboardConversions";
import Link from "next/link";
import { Menu, X, Zap, Shield, Sparkles } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useDashboardAuth();
  const { tier, planName, pagesRemaining } = useDashboardConversions();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-zinc-950 text-white font-bold flex items-center justify-center animate-pulse">
            P
          </div>
          <span className="text-xs font-mono font-medium text-zinc-500">Loading Parsify Dashboard…</span>
        </div>
      </div>
    );
  }

  const isSubscribed = tier === "subscribed";

  return (
    <div className="min-h-screen bg-zinc-50/50 flex font-sans text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Drawer Backdrop & Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-zinc-950/40 backdrop-blur-2xs" onClick={() => setMobileOpen(false)} />
          <div className="relative w-64 bg-white h-full z-10">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-1 rounded hover:bg-zinc-100 text-zinc-500"
            >
              <X className="w-5 h-5" />
            </button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="h-14 bg-white border-b border-zinc-200/80 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-1.5 rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100"
            >
              <Menu className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-medium text-zinc-400 hidden sm:inline-block">
              Parsify AI Engine v2.4
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Active Plan Tag */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{isSubscribed ? (planName || "Subscribed") : "Free Plan"}</span>
              <span className="font-mono text-zinc-400">({pagesRemaining} {isSubscribed ? "stmts" : "pages"})</span>
            </div>

            {!isSubscribed && (
              <Link
                href="/dashboard/usage"
                className="h-8 px-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
              >
                <Zap className="w-3.5 h-3.5 fill-current" /> Upgrade
              </Link>
            )}
          </div>
        </header>

        {/* Dynamic Subpage Output */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
