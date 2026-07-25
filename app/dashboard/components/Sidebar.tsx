"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Zap,
  FileCode2,
  History,
  CreditCard,
  Settings,
  ShieldAlert,
  LogOut,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { useDashboardAuth } from "../hooks/useDashboardAuth";
import { useDashboardConversions } from "../hooks/useDashboardConversions";

export function Sidebar() {
  const pathname = usePathname();
  const { user, signOut } = useDashboardAuth();
  const { tier, userCredits, planName, pagesRemaining } = useDashboardConversions();

  const isSubscribed = tier === "subscribed";

  const navItems = [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "PDF Converter", href: "/dashboard/convert", icon: Zap },
    { label: "Tally XML", href: "/dashboard/tally-xml", icon: FileCode2 },
    { label: "History", href: "/dashboard/history", icon: History },
    { label: "Usage & Billing", href: "/dashboard/usage", icon: CreditCard },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-zinc-200/80 flex flex-col justify-between h-screen sticky top-0 font-sans z-30">
      {/* Top Header / Branding */}
      <div>
        <div className="p-5 border-b border-zinc-100 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
              P
            </div>
            <div>
              <span className="font-extrabold text-zinc-950 text-base tracking-tight block leading-none">
                Parsify AI
              </span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mt-0.5">
                Dashboard
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-2xs"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-zinc-500"}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Plan Info Card & Logout */}
      <div className="p-3 border-t border-zinc-100 space-y-3">
        {/* Credits / Plan Status Badge */}
        <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
              {isSubscribed ? (planName || "PRO PLAN") : "FREE PLAN"}
            </span>
            {isSubscribed && (
              <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                <Sparkles className="w-2.5 h-2.5" /> Active
              </span>
            )}
          </div>
          <div>
            <span className="text-xl font-extrabold font-mono text-zinc-950 block">
              {pagesRemaining.toLocaleString()}
            </span>
            <span className="text-[10px] text-zinc-500 block mt-0.5">
              {isSubscribed ? "Statements left this month" : "Free pages left"}
            </span>
          </div>
          {!isSubscribed && (
            <Link
              href="/dashboard/usage"
              className="mt-1 w-full py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-[11px] flex items-center justify-center gap-1 transition-all"
            >
              <Zap className="w-3 h-3 fill-current" /> Upgrade Plan
            </Link>
          )}
        </div>

        {/* User Account info & Logout */}
        <div className="flex items-center justify-between pt-1 px-1">
          <div className="min-w-0 pr-2">
            <p className="text-xs font-semibold text-zinc-900 truncate" title={user?.email || ""}>
              {user?.email?.split("@")[0] || "User"}
            </p>
            <p className="text-[10px] text-zinc-400 font-mono truncate">{user?.email}</p>
          </div>
          <button
            onClick={signOut}
            title="Sign out"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
