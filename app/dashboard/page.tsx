"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Zap,
  FileText,
  Clock,
  CheckCircle2,
  FileCheck2,
  Lock,
  ArrowUpRight,
  RefreshCw,
  Layers,
  Sparkles,
  ShieldCheck,
  FileCode2
} from "lucide-react";
import { UploadZone } from "./components/UploadZone";
import { useDashboardAuth } from "./hooks/useDashboardAuth";
import { useDashboardConversions, REGISTERED_PAGE_LIMIT } from "./hooks/useDashboardConversions";
import { useRouter } from "next/navigation";

function statusBadge(s: string) {
  if (s === "done")
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Completed
      </span>
    );
  if (s === "processing")
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
        Processing
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
      Failed
    </span>
  );
}

function relTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export default function DashboardHome() {
  const router = useRouter();
  const { user } = useDashboardAuth();
  const { rows, todayCount, loading, tier, planName, pagesRemaining } = useDashboardConversions();

  const name =
    (user?.user_metadata?.full_name as string) ||
    (user?.user_metadata?.name as string) ||
    user?.email?.split("@")[0] ||
    "there";

  const totalPages = rows.reduce((sum, r) => sum + (r.pages || 0), 0);
  const filesCount = rows.length;
  const isSubscribed = tier === "subscribed";

  const handleFileDrop = (file: File) => {
    // Redirect to converter with state
    router.push("/dashboard/convert");
  };

  const stats = [
    {
      label: "Statements Converted",
      value: isSubscribed ? filesCount.toLocaleString() : todayCount.toString(),
      icon: FileCheck2,
      sub: isSubscribed ? "Total conversions" : `${todayCount}/15 converted today`,
    },
    {
      label: "Quota Remaining",
      value: pagesRemaining.toLocaleString(),
      icon: Clock,
      sub: isSubscribed ? `${planName || "Subscribed"} plan` : "Free daily limit",
    },
    {
      label: "Pages Processed",
      value: totalPages.toLocaleString(),
      icon: FileText,
      sub: "Auto-structured",
    },
    {
      label: "Active Parser",
      value: "Gemini 2.0 AI",
      icon: Zap,
      sub: "High accuracy Engine v2.4",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200/80">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Active Parser Engine
          </div>
          <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
            Welcome back, {name}
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Convert Indian bank statements PDF to Excel, CSV, or Tally Prime XML in seconds.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/dashboard/tally-xml"
            className="h-9 px-3.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
          >
            <FileCode2 className="w-3.5 h-3.5 text-zinc-500" />
            Tally XML
          </Link>
          <Link
            href="/dashboard/convert"
            className="h-9 px-4 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            Start Conversion
          </Link>
        </div>
      </div>

      {/* Minimalist Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-2xs hover:border-zinc-300 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                  {s.label}
                </span>
                <Icon className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="mt-3">
                <span className="text-2xl font-extrabold font-mono text-zinc-950 tracking-tight block">
                  {s.value}
                </span>
                <span className="text-[11px] font-medium text-zinc-500 mt-0.5 block">
                  {s.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Drag & Drop Quick Converter + History Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Quick Upload Zone & Bank Badges */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-zinc-950 tracking-tight">Quick Converter</h2>
                <p className="text-[11px] text-zinc-500 mt-0.5">Drag PDF or Image statement here</p>
              </div>
              <Zap className="w-4 h-4 text-zinc-950 fill-current" />
            </div>

            <UploadZone onFileSelect={handleFileDrop} compact />

            <Link
              href="/dashboard/convert"
              className="w-full py-2 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs"
            >
              <Layers className="w-3.5 h-3.5" /> Launch Full Converter
            </Link>
          </div>

          {/* Supported Banks Card */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-2xs space-y-2">
            <h3 className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Supported Banks
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["HDFC", "ICICI", "SBI", "Axis", "Kotak", "PNB", "Federal", "Yes Bank", "BOB", "Canara"].map((b) => (
                <span
                  key={b}
                  className="px-2 py-0.5 rounded-md bg-zinc-100 border border-zinc-200/60 text-[10px] font-mono text-zinc-600"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Conversions History Table */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-2xs overflow-hidden">
            <div className="p-4 border-b border-zinc-200/80 flex items-center justify-between bg-zinc-50/50">
              <div className="flex items-center gap-2">
                <h2 className="text-xs font-bold text-zinc-950 font-mono uppercase tracking-wider">
                  Recent Conversions
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-zinc-200/80 text-[10px] font-mono font-bold text-zinc-700">
                  {rows.length} files
                </span>
              </div>
              <Link
                href="/dashboard/history"
                className="text-xs font-semibold text-zinc-900 hover:underline flex items-center gap-1"
              >
                View History <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
            </div>

            {loading ? (
              <div className="p-12 text-center text-xs text-zinc-400 font-mono">
                <RefreshCw className="w-4 h-4 animate-spin mx-auto mb-2 text-zinc-600" />
                Loading conversion logs…
              </div>
            ) : rows.length === 0 ? (
              <div className="p-12 text-center text-xs text-zinc-500">
                <FileText className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
                <p className="font-semibold text-zinc-900">No conversions yet</p>
                <p className="text-zinc-500 text-[11px] mt-0.5">
                  Upload your first bank statement PDF to start extracting clean transaction data.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-50/80 border-b border-zinc-200/80">
                      <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                        File Name
                      </th>
                      <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                        Bank
                      </th>
                      <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                        Pages
                      </th>
                      <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {rows.slice(0, 8).map((r) => (
                      <tr key={r.id} className="hover:bg-zinc-50/80 transition-colors">
                        <td className="py-3 px-4 font-semibold text-zinc-900 flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span className="truncate max-w-[200px]" title={r.file_name}>
                            {r.file_name}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-zinc-600 font-medium">
                          <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 text-[10px] font-mono">
                            {r.bank ?? "Auto-detect"}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-zinc-600 font-mono">{r.pages}</td>
                        <td className="py-3 px-4 text-zinc-400 font-mono text-[11px]">
                          {relTime(r.created_at)}
                        </td>
                        <td className="py-3 px-4">{statusBadge(r.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
