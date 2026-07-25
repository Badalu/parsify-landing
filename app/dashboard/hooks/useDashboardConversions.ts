"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { useDashboardAuth } from "./useDashboardAuth";

export interface Conversion {
  id: string;
  user_id: string;
  file_name: string;
  bank: string | null;
  pages: number;
  format: string;
  status: string;
  credits: number;
  transactions_count: number;
  created_at: string;
  updated_at: string;
}

export const REGISTERED_PAGE_LIMIT = 15;

interface CacheEntry {
  userId: string;
  rows: Conversion[];
  tier: string;
  userCredits: number;
  planName: string | null;
  todayPages: number;
  monthlyPages: number;
  monthlyStatements: number;
  pagesRemaining: number;
}

let _cache: CacheEntry | null = null;
let _fetchPromise: Promise<void> | null = null;

export function invalidateConversionsCache() {
  _cache = null;
  _fetchPromise = null;
}

async function fetchData(userId: string): Promise<CacheEntry> {
  const { data: profileData } = await (supabase.from("profiles") as any)
    .select("tier, premium_expiry_date, credits, plan_name")
    .eq("id", userId)
    .single();

  let userTier = profileData?.tier || "registered";
  const credits = profileData?.credits || 0;
  const expiryStr = profileData?.premium_expiry_date;
  const planName = profileData?.plan_name || null;

  if (userTier === "subscribed" && expiryStr) {
    if (new Date(expiryStr) < new Date()) {
      userTier = "registered";
    }
  }

  const { data } = await supabase
    .from("conversions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);

  const fetchedRows = (data as Conversion[]) ?? [];

  const now = new Date();
  const todayStr = now.toDateString();
  const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const thisMonthRows = fetchedRows.filter((r) => new Date(r.created_at) >= firstOfMonth);

  const pToday = fetchedRows
    .filter((r) => new Date(r.created_at).toDateString() === todayStr)
    .reduce((sum, r) => sum + (r.pages || 0), 0);

  const pMonth = thisMonthRows.reduce((sum, r) => sum + (r.pages || 0), 0);
  const stmtMonth = thisMonthRows.length;

  const pRemaining = userTier === "subscribed"
    ? Math.max(0, credits - stmtMonth)
    : Math.max(0, REGISTERED_PAGE_LIMIT - pMonth);

  return {
    userId,
    rows: fetchedRows,
    tier: userTier,
    userCredits: credits,
    planName,
    todayPages: pToday,
    monthlyPages: userTier === "subscribed" ? stmtMonth : pMonth,
    monthlyStatements: stmtMonth,
    pagesRemaining: pRemaining,
  };
}

export function useDashboardConversions() {
  const { user } = useDashboardAuth();

  const [rows, setRows] = useState<Conversion[]>(_cache?.rows ?? []);
  const [loading, setLoading] = useState(!_cache);
  const [todayPages, setTodayPages] = useState(_cache?.todayPages ?? 0);
  const [monthlyPages, setMonthlyPages] = useState(_cache?.monthlyPages ?? 0);
  const [monthlyStatements, setMonthlyStatements] = useState(_cache?.monthlyStatements ?? 0);
  const [userCredits, setUserCredits] = useState(_cache?.userCredits ?? 0);
  const [planName, setPlanName] = useState<string | null>(_cache?.planName ?? null);
  const [tier, setTier] = useState<string>(_cache?.tier ?? "registered");
  const [pagesRemaining, setPagesRemaining] = useState<number>(_cache?.pagesRemaining ?? REGISTERED_PAGE_LIMIT);

  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  const applyCache = (entry: CacheEntry) => {
    setRows(entry.rows);
    setTier(entry.tier);
    setUserCredits(entry.userCredits);
    setPlanName(entry.planName);
    setTodayPages(entry.todayPages);
    setMonthlyPages(entry.monthlyPages);
    setMonthlyStatements(entry.monthlyStatements ?? 0);
    setPagesRemaining(entry.pagesRemaining);
  };

  useEffect(() => {
    if (!user) {
      _cache = null;
      _fetchPromise = null;
      setRows([]);
      setTodayPages(0);
      setMonthlyPages(0);
      setMonthlyStatements(0);
      setUserCredits(0);
      setPlanName(null);
      setTier("anonymous");
      setPagesRemaining(0);
      setLoading(false);
      return;
    }

    if (_cache && _cache.userId === user.id) {
      applyCache(_cache);
      setLoading(false);
    } else if (!_fetchPromise) {
      setLoading(true);
      _fetchPromise = fetchData(user.id)
        .then((entry) => {
          _cache = entry;
          applyCache(entry);
          setLoading(false);
          _fetchPromise = null;
        })
        .catch(() => {
          setLoading(false);
          _fetchPromise = null;
        });
    }

    if (channelRef.current) return;

    const channel = supabase
      .channel(`conversions:${user.id}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "conversions",
          filter: `user_id=eq.${user.id}`,
        },
        (payload: any) => {
          if (payload.eventType === "INSERT") {
            const newConv = payload.new as Conversion;
            setRows((prev) => [newConv, ...prev.filter((r) => r.id !== newConv.id)]);
          }
        }
      )
      .subscribe();

    channelRef.current = channel;

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
    };
  }, [user?.id]);

  return {
    rows,
    loading,
    todayCount: todayPages,
    todayPages,
    monthlyPages,
    monthlyStatements,
    userCredits,
    planName,
    pagesRemaining,
    tier,
  };
}
