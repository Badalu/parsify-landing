"use client";

import { useState, useEffect } from "react";
import { useDashboardAuth } from "../hooks/useDashboardAuth";
import { supabase } from "@/lib/supabase";
import { Settings, User, Lock, Key, Copy, Check, Save, Loader2 } from "lucide-react";

export default function SettingsPage() {
  const { user } = useDashboardAuth();

  const [profile, setProfile] = useState({
    full_name: "",
    phone: "",
    company: "",
    gst_number: "",
    plan_name: "",
    credits: 0,
    premium_expiry_date: null as string | null,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatingPass, setUpdatingPass] = useState(false);

  useEffect(() => {
    if (!user) return;
    const loadProfile = async () => {
      try {
        const { data } = await (supabase.from("profiles") as any)
          .select("*")
          .eq("id", user.id)
          .single();
        if (data) {
          setProfile({
            full_name: data.full_name || "",
            phone: data.phone || "",
            company: data.company || "",
            gst_number: data.gst_number || "",
            plan_name: data.plan_name || "",
            credits: data.credits || 0,
            premium_expiry_date: data.premium_expiry_date || null,
          });
        }
      } catch (e) {
        console.error("Failed to load profile", e);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, [user]);

  const handleSaveProfile = async () => {
    if (!user) return;
    setSaving(true);
    setSuccessMsg(null);
    try {
      const { error } = await (supabase.from("profiles") as any).upsert({
        id: user.id,
        full_name: profile.full_name,
        phone: profile.phone,
        company: profile.company,
        gst_number: profile.gst_number,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      setSuccessMsg("Profile details updated successfully!");
    } catch (e: any) {
      alert(e.message || "Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    setUpdatingPass(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      alert("Password updated successfully!");
      setNewPassword("");
      setConfirmPassword("");
    } catch (e: any) {
      alert(e.message || "Failed to update password.");
    } finally {
      setUpdatingPass(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="pb-4 border-b border-zinc-200/80">
        <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
          Account Settings
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          Manage your account details, security passwords, GST invoices, and active plan.
        </p>
      </div>

      {successMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Profile Form */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-950 font-mono uppercase tracking-wider border-b border-zinc-100 pb-3">
          <User className="w-4 h-4 text-zinc-600" /> Personal &amp; Invoice Information
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={profile.full_name}
              onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full h-9 px-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full h-9 px-3 rounded-xl border border-zinc-200 text-xs text-zinc-400 bg-zinc-100 outline-none cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
              Phone Number
            </label>
            <input
              type="text"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full h-9 px-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
              Company Name (Optional)
            </label>
            <input
              type="text"
              value={profile.company}
              onChange={(e) => setProfile({ ...profile, company: e.target.value })}
              placeholder="e.g. Sharma &amp; Associates"
              className="w-full h-9 px-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
              GST Number (For Tax Invoice)
            </label>
            <input
              type="text"
              value={profile.gst_number}
              onChange={(e) => setProfile({ ...profile, gst_number: e.target.value })}
              placeholder="e.g. 22AAAAA0000A1Z5"
              className="w-full h-9 px-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none font-mono"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={handleSaveProfile}
            disabled={saving}
            className="h-9 px-5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
            Save Changes
          </button>
        </div>
      </div>

      {/* Password Form */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-2xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-950 font-mono uppercase tracking-wider border-b border-zinc-100 pb-3">
          <Lock className="w-4 h-4 text-zinc-600" /> Security &amp; Password
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="At least 6 characters"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full h-9 px-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-1">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="Repeat new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-9 px-3 rounded-xl border border-zinc-200 text-xs text-zinc-900 bg-zinc-50/50 focus:bg-white focus:border-zinc-950 outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={handleUpdatePassword}
            disabled={updatingPass}
            className="h-9 px-5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer disabled:opacity-50"
          >
            {updatingPass ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Lock className="w-3.5 h-3.5" />}
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
