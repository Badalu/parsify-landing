"use client";

import { useState } from "react";
import { useDashboardConversions } from "../hooks/useDashboardConversions";
import {
  History,
  Search,
  Filter,
  FileText,
  Download,
  RefreshCw,
  ArrowUpRight
} from "lucide-react";

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

export default function HistoryPage() {
  const { rows, loading } = useDashboardConversions();
  const [searchTerm, setSearchTerm] = useState("");
  const [bankFilter, setBankFilter] = useState("all");

  const filteredRows = rows.filter((r) => {
    const matchesSearch =
      r.file_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.bank?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBank = bankFilter === "all" || (r.bank && r.bank.toLowerCase().includes(bankFilter.toLowerCase()));
    return matchesSearch && matchesBank;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-4 border-b border-zinc-200/80">
        <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
          Conversion History
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          Complete log of all bank statement conversions and extracted document history.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[260px]">
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Search statements by name or bank…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-9 pl-9 pr-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
            />
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5" />
          </div>

          <select
            value={bankFilter}
            onChange={(e) => setBankFilter(e.target.value)}
            className="h-9 px-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
          >
            <option value="all">All Banks</option>
            <option value="hdfc">HDFC Bank</option>
            <option value="icici">ICICI Bank</option>
            <option value="sbi">State Bank of India</option>
            <option value="axis">Axis Bank</option>
            <option value="kotak">Kotak Bank</option>
          </select>
        </div>

        <span className="text-xs font-mono text-zinc-400">
          Showing {filteredRows.length} of {rows.length} files
        </span>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-2xs overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-zinc-400 font-mono">
            <RefreshCw className="w-4 h-4 animate-spin mx-auto mb-2 text-zinc-600" />
            Loading history…
          </div>
        ) : filteredRows.length === 0 ? (
          <div className="p-12 text-center text-xs text-zinc-500">
            <FileText className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
            <p className="font-semibold text-zinc-900">No conversions found</p>
            <p className="text-zinc-500 text-[11px] mt-0.5">
              Try adjusting your search query or upload a new bank statement.
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
                    Format
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
                {filteredRows.map((r) => (
                  <tr key={r.id} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-zinc-900 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span className="truncate max-w-[240px]" title={r.file_name}>
                        {r.file_name}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-zinc-600 font-medium">
                      <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 text-[10px] font-mono">
                        {r.bank ?? "Auto-detect"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-zinc-600 font-mono">{r.pages}</td>
                    <td className="py-3 px-4 text-zinc-600 font-mono">{r.format || "Excel"}</td>
                    <td className="py-3 px-4 text-zinc-400 font-mono text-[11px]">
                      {relTime(r.created_at)}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Completed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
