"use client";

import { useState, useEffect } from "react";
import { useDashboardAuth } from "../hooks/useDashboardAuth";
import { useDashboardConversions } from "../hooks/useDashboardConversions";
import { supabase } from "@/lib/supabase";
import {
  CreditCard,
  Receipt,
  Check,
  ShieldCheck,
  Loader2,
  Sparkles,
  Zap,
  Clock
} from "lucide-react";

interface PaymentLog {
  id: string;
  order_id: string;
  plan_name: string;
  amount: number;
  credits_added: number;
  status: string;
  created_at: string;
}

export default function UsagePage() {
  const { user } = useDashboardAuth();
  const { tier, userCredits, planName, pagesRemaining, monthlyStatements } = useDashboardConversions();

  const [paymentLogs, setPaymentLogs] = useState<PaymentLog[]>([]);
  const [loadingLogs, setLoadingLogs] = useState(true);
  const [expiryDate, setExpiryDate] = useState<string | null>(null);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    const fetchLogs = async () => {
      try {
        const { data: profile } = await (supabase.from("profiles") as any)
          .select("premium_expiry_date")
          .eq("id", user.id)
          .single();
        if (profile) setExpiryDate(profile.premium_expiry_date);

        const { data: logs } = await (supabase as any)
          .from("payment_logs")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false });
        if (logs) setPaymentLogs(logs);
      } catch (e) {
        console.error("Failed to load logs", e);
      } finally {
        setLoadingLogs(false);
      }
    };
    fetchLogs();
  }, [user]);

  const isSubscribed = tier === "subscribed";

  const handleCheckout = async (planId: string, amount: number) => {
    if (!user) return;
    setCheckoutLoading(planId);
    try {
      const response = await fetch("/api/cashfree/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency,
          customerPhone: user.phone || "9999999999",
          customerEmail: user.email || "customer@example.com",
          customerName: user.user_metadata?.full_name || "Customer",
          userId: user.id,
          planId,
        }),
      });
      const data = await response.json();
      if (data.paymentLink) {
        window.location.href = data.paymentLink;
      } else {
        alert(data.error || "Payment order creation failed. Please try again.");
      }
    } catch (e: any) {
      alert(e.message || "Failed to launch payment checkout.");
    } finally {
      setCheckoutLoading(null);
    }
  };

  const plans = [
    { id: "starter_plan", name: "Starter", inr: 999, usd: 12, statements: 40, popular: false },
    { id: "professional_plan", name: "Growth", inr: 1999, usd: 25, statements: 120, popular: true },
    { id: "business_plan", name: "Pro", inr: 3499, usd: 45, statements: 400, popular: false },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="pb-4 border-b border-zinc-200/80">
        <h1 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
          Usage &amp; Statements Quota
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          Monitor your statement conversions, active subscription plan details, and payment receipts.
        </p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
            Active Subscription
          </span>
          <div className="text-xl font-extrabold text-zinc-950">
            {isSubscribed ? (planName || "Starter (₹999)") : "Free Tier"}
          </div>
          <p className="text-xs text-emerald-600 font-medium">
            {isSubscribed
              ? expiryDate
                ? `Valid till ${new Date(expiryDate).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`
                : "Active"
              : "50 free pages / month"}
          </p>
        </div>

        <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
            Remaining Statements
          </span>
          <div className="text-2xl font-extrabold font-mono text-zinc-950">
            {pagesRemaining.toLocaleString()}
          </div>
          <p className="text-[11px] text-zinc-500">
            {isSubscribed ? "1 PDF file upload = 1 statement" : "Free trial quota"}
          </p>
        </div>

        <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-2xs space-y-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
            Used This Month
          </span>
          <div className="text-2xl font-extrabold font-mono text-zinc-950">
            {monthlyStatements} <span className="text-xs font-normal text-zinc-400">statements</span>
          </div>
          <p className="text-[11px] text-zinc-500">Resets on 1st of next month</p>
        </div>
      </div>

      {/* Upgrade Plans Grid */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
          <div>
            <h2 className="text-base font-extrabold text-zinc-950 tracking-tight">Upgrade Your Plan</h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              Paid plans are statement-based. Credits accumulate on top of existing remaining statements.
            </p>
          </div>

          <div className="flex items-center p-1 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-semibold">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-3 py-1 rounded-md transition-colors ${currency === "INR" ? "bg-white text-zinc-950 shadow-2xs" : "text-zinc-500 hover:text-zinc-950"}`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-3 py-1 rounded-md transition-colors ${currency === "USD" ? "bg-white text-zinc-950 shadow-2xs" : "text-zinc-500 hover:text-zinc-950"}`}
            >
              $ USD
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl p-5 border flex flex-col justify-between space-y-4 relative ${
                p.popular ? "border-zinc-950 ring-1 ring-zinc-950 bg-zinc-50/50" : "border-zinc-200"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-2.5 right-4 bg-zinc-950 text-white text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-sm font-extrabold text-zinc-950">{p.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-extrabold font-mono text-zinc-950">
                    {currency === "INR" ? `₹${p.inr}` : `$${p.usd}`}
                  </span>
                  <span className="text-xs text-zinc-500"> / month</span>
                </div>
                <p className="text-xs text-emerald-600 font-semibold mt-1">
                  +{p.statements} statements / month
                </p>
              </div>

              <button
                onClick={() => handleCheckout(p.id, currency === "INR" ? p.inr : p.usd)}
                disabled={checkoutLoading !== null}
                className="w-full py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer disabled:opacity-50"
              >
                {checkoutLoading === p.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 fill-current" /> Buy {p.name}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment History Log */}
      <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-zinc-200/80 flex items-center gap-2 bg-zinc-50/50">
          <Receipt className="w-4 h-4 text-zinc-600" />
          <h2 className="text-xs font-bold text-zinc-950 font-mono uppercase tracking-wider">
            Payment History &amp; Invoice Receipts
          </h2>
        </div>

        {loadingLogs ? (
          <div className="p-10 text-center text-xs text-zinc-400 font-mono">
            <Loader2 className="w-4 h-4 animate-spin mx-auto mb-2 text-zinc-600" />
            Loading payment receipts…
          </div>
        ) : paymentLogs.length === 0 ? (
          <div className="p-10 text-center text-xs text-zinc-500">
            <CreditCard className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
            <p className="font-semibold text-zinc-900">No payment history</p>
            <p className="text-zinc-500 text-[11px] mt-0.5">Your purchase receipts will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-50/80 border-b border-zinc-200/80">
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Statements Added
                  </th>
                  <th className="py-2.5 px-4 text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {paymentLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono text-zinc-600">
                      {new Date(log.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="py-3 px-4 font-bold text-zinc-900">{log.plan_name}</td>
                    <td className="py-3 px-4 font-mono text-zinc-900 font-semibold">
                      ₹{log.amount?.toLocaleString("en-IN")}
                    </td>
                    <td className="py-3 px-4 font-mono text-emerald-600 font-bold">
                      +{log.credits_added} stmts
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono font-semibold uppercase">
                        ✓ {log.status}
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
