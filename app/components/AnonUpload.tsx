"use client";

import React from "react";
import { ArrowRight, FileText, CheckCircle2, FileSpreadsheet, Sparkles } from "lucide-react";

export function AnonUpload() {
  const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  return (
    <div className="w-full max-w-md mx-auto mt-8 relative z-20">
      <div className="brutal-card p-6 bg-card transition-all duration-300 border-4 border-shadow-color shadow-[8px_8px_0px_0px_#1a1c1d] hover:shadow-[4px_4px_0px_0px_#1a1c1d] hover:translate-x-0.5 hover:translate-y-0.5">
        
        {/* Header Badge */}
        <div className="flex justify-between items-center mb-6">
          <span className="inline-block border-2 border-shadow-color bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 brutal-shadow">
            PRO FEATURE
          </span>
          <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase">
            🔒 SECURE SSL
          </span>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="font-black uppercase tracking-tight text-2xl text-shadow-color leading-tight mb-2">
            CONVERT PDF & IMAGES TO EXCEL
          </h3>
          <p className="text-sm font-medium text-muted-foreground leading-relaxed">
            Convert any bank statement or screenshot instantly. Get structured, Tally-ready spreadsheets in 5 seconds.
          </p>
        </div>

        {/* Visual Mock of PDF to Excel conversion */}
        <div className="border-2 border-shadow-color bg-background p-4 mb-6 brutal-shadow relative overflow-hidden flex flex-col gap-3">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* File row 1: Before */}
          <div className="flex items-center justify-between bg-card border border-shadow-color p-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-destructive" />
              <span className="font-bold truncate max-w-[150px]">statement_hdfc.pdf</span>
            </div>
            <span className="text-[10px] text-muted-foreground">Original PDF</span>
          </div>

          {/* Connection / Flow graphic */}
          <div className="flex items-center justify-center gap-2 my-1 text-muted-foreground">
            <span className="h-0.5 w-12 bg-shadow-color/20"></span>
            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
            <span className="h-0.5 w-12 bg-shadow-color/20"></span>
          </div>

          {/* File row 2: After */}
          <div className="flex items-center justify-between bg-secondary/15 border-2 border-secondary/30 p-2.5 text-xs font-mono text-secondary">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-secondary" />
              <span className="font-black truncate max-w-[150px]">statement_hdfc.xlsx</span>
            </div>
            <span className="inline-flex items-center gap-1 bg-secondary text-white text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 border border-shadow-color">
              <CheckCircle2 className="w-2.5 h-2.5" /> PARSED
            </span>
          </div>
        </div>

        {/* Feature Checkpoints */}
        <div className="space-y-2.5 mb-8 text-sm">
          {[
            "Free 50 pages every single month",
            "Automatic GST splitting & Ledgers",
            "99.3% accuracy across 100+ Indian banks",
            "Zero data retention (deleted instantly)"
          ].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2 font-bold text-shadow-color text-xs">
              <CheckCircle2 className="w-4 h-4 text-success shrink-0" strokeWidth={3} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Group */}
        <div className="space-y-3">
          <a 
            href={`${DASHBOARD_URL}/signup`} 
            className="brutal-btn-primary bg-secondary text-white border-2 border-shadow-color w-full text-center py-3.5 uppercase tracking-widest text-sm font-black flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 shadow-[4px_4px_0px_0px_#1a1c1d] hover:shadow-[2px_2px_0px_0px_#1a1c1d] transition-all"
          >
            Start Free Conversion
            <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </a>
          
          <div className="flex justify-between items-center text-xs font-bold pt-2">
            <span className="text-muted-foreground">No credit card required</span>
            <a href={`${DASHBOARD_URL}/login`} className="text-secondary hover:underline">
              Log In &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
