"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, X, ShieldCheck } from "lucide-react";

export function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-xl z-50 animate-in fade-in slide-in-from-bottom-6 duration-300">
      <div className="brutal-card bg-primary text-primary-foreground p-4 border-4 border-shadow-color shadow-[6px_6px_0px_0px_#1a1c1d] flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary text-white border-2 border-shadow-color brutal-shadow shrink-0 hidden sm:block">
            <Zap className="w-5 h-5" strokeWidth={3} />
          </div>
          <div>
            <div className="font-black text-sm uppercase tracking-tight leading-tight flex items-center gap-2">
              Convert Bank Statement PDF <span className="hidden lg:inline-block bg-secondary text-white text-[9px] px-1.5 py-0.5 border border-shadow-color font-bold">5 Secs</span>
            </div>
            <div className="text-xs font-bold opacity-90 flex items-center gap-2 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-success" /> 50 Pages Free • Tally & Excel Ready
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`${DASHBOARD_URL}/dashboard/convert`}
            className="brutal-btn-primary bg-secondary text-white border-2 border-shadow-color text-xs px-4 py-2.5 uppercase font-black tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#1a1c1d] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            Try Free <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 hover:bg-white/20 text-white transition-colors border border-transparent hover:border-white/40"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
