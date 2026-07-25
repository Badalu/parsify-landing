"use client";

import { useState, useEffect } from "react";
import { useDashboardAuth } from "../hooks/useDashboardAuth";
import { supabase } from "@/lib/supabase";
import {
  ShieldAlert,
  Users,
  Search,
  Zap,
  CheckCircle2,
  Loader2,
  RefreshCw,
  Sparkles,
  Lock
} from "lucide-react";

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  tier: string;
  credits: number;
  plan_name: string | null;
  premium_expiry_date: string | null;
  created_at: string;
}

export default function AdminPage() {
  const { user } = useDashboardAuth();

  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [actionUserId, setActionUserId] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await (supabase.from("profiles") as any)
        .select("id, full_name, tier, credits, plan_name, premium_expiry_date, created_at")
        .order("created_at", { ascending: false });

      if (data) {
        setProfiles(data);
      }
    } catch (e) {
      console.error("Failed to load profiles", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleActivatePlan = async (userId: string, planId: string, credits: number, name: string) => {
    setActionUserId(userId);
    try {
      const { data: current } = await (supabase.from("profiles") as any)
        .select("credits, premium_expiry_date")
        .eq("id", userId)
        .single();

      const currentCredits = current?.credits || 0;
      const newCredits = currentCredits + credits;

      let expiryDate = new Date();
      if (current?.premium_expiry_date && new Date(current.premium_expiry_date) > new Date()) {
        expiryDate = new Date(new Date(current.premium_expiry_date).getTime() + 30 * 24 * 60 * 60 * 1000);
      } else {
        expiryDate.setDate(expiryDate.getDate() + 30);
      }

      const { error } = await (supabase.from("profiles") as any)
        .update({
          tier: "subscribed",
          credits: newCredits,
          plan_name: name,
          premium_expiry_date: expiryDate.toISOString(),
        })
        .eq("id", userId);

      if (error) throw error;
      alert(`Activated ${name} for user! Total credits: ${newCredits}`);
      fetchUsers();
    } catch (e: any) {
      alert(e.message || "Failed to activate plan.");
    } finally {
      setActionUserId(null);
    }
  };

  const handleResetUser = async (userId: string) => {
    if (!confirm("Are you sure you want to reset this user to free tier?")) return;
    setActionUserId(userId);
    try {
      const { error } = await (supabase.from("profiles") as any)
        .update({
          tier: "registered",
          credits: 0,
          plan_name: null,
          premium_expiry_date: null,
        })
        .eq("id", userId);

      if (error) throw error;
      alert("User reset to free tier.");
      fetchUsers();
    } catch (e: any) {
      alert(e.message || "Failed to reset user.");
    } finally {
      setActionUserId(null);
    }
  };

  const filtered = profiles.filter(
    (p) =>
      p.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      p.id?.toLowerCase().includes(search.toLowerCase()) ||
      p.plan_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-4 border-b border-zinc-200/80 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 mb-1">
            <ShieldAlert className="w-3.5 h-3.5" /> Admin Portal
          </div>
          <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
            User Management &amp; Plan Allocation
          </h1>
          <p className="text-xs text-zinc-500 mt-0.5">
            Manage user profiles, manually grant plan statement credits, and reset accounts.
          </p>
        </div>

        <button
          onClick={fetchUsers}
          className="h-9 px-3.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-zinc-500 ${loading ? "animate-spin" : ""}`} /> Refresh Users
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-2xs flex items-center justify-between">
        <div className="relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Search users by name, ID or plan…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
          />
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5" />
        </div>

        <span className="text-xs font-mono text-zinc-400">Total Users: {profiles.length}</span>
      </div>

      {/* Users Table */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-2xs overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-zinc-400 font-mono">
            <Loader2 className="w-4 h-4 animate-spin mx-auto mb-2 text-zinc-600" />
            Loading user database…
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-xs text-zinc-500 font-mono">
            No users match search criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200/80">
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    User Details
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Tier
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Plan Name
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Credits
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Expiry
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider text-right">
                    Actions (Grant Plan)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-zinc-900">{p.full_name || "User"}</div>
                      <div className="text-[10px] font-mono text-zinc-400">{p.id.slice(0, 18)}...</div>
                    </td>
                    <td className="py-3 px-4 font-mono">
                      {p.tier === "subscribed" ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[10px]">
                          SUBSCRIBED
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200 text-[10px]">
                          FREE
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-semibold text-zinc-900">{p.plan_name || "—"}</td>
                    <td className="py-3 px-4 font-mono font-bold text-emerald-600">
                      {p.credits} stmts
                    </td>
                    <td className="py-3 px-4 font-mono text-zinc-400 text-[11px]">
                      {p.premium_expiry_date
                        ? new Date(p.premium_expiry_date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "—"}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleActivatePlan(p.id, "starter_plan", 40, "Starter (₹999)")}
                          disabled={actionUserId === p.id}
                          className="px-2 py-1 rounded bg-zinc-100 hover:bg-zinc-200 text-[10px] font-bold text-zinc-800"
                        >
                          +Starter (+40)
                        </button>
                        <button
                          onClick={() => handleActivatePlan(p.id, "professional_plan", 120, "Growth (₹1999)")}
                          disabled={actionUserId === p.id}
                          className="px-2 py-1 rounded bg-zinc-950 hover:bg-zinc-800 text-[10px] font-bold text-white"
                        >
                          +Growth (+120)
                        </button>
                        <button
                          onClick={() => handleResetUser(p.id)}
                          disabled={actionUserId === p.id}
                          className="px-2 py-1 rounded bg-rose-50 hover:bg-rose-100 text-[10px] font-bold text-rose-700"
                        >
                          Reset
                        </button>
                      </div>
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
