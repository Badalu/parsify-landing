import React from "react";
import { ShieldCheck, User } from "lucide-react";

export function AuthorBio() {
  return (
    <div className="mt-16 mb-8 border-t-2 border-shadow-color pt-8">
      <div className="brutal-card p-6 bg-card flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        
        <div className="w-20 h-20 bg-background border-2 border-shadow-color brutal-shadow shrink-0 flex items-center justify-center overflow-hidden z-10">
          <User className="w-10 h-10 text-muted-foreground" />
        </div>
        
        <div className="flex-1 z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h3 className="text-xl font-black uppercase text-shadow-color">CA Rahul Sharma</h3>
            <span className="inline-flex items-center gap-1 bg-success/10 text-success text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border-2 border-success/20 w-max">
              <ShieldCheck className="w-3 h-3" strokeWidth={3} /> Financial Expert
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl">
            Rahul is a Chartered Accountant with over 10 years of experience in bank reconciliation, financial auditing, and automation. He leads the domain expertise team at Parsify, ensuring the AI models accurately map complex banking data to Tally standards.
          </p>
        </div>
      </div>
    </div>
  );
}
