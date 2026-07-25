import { createClient } from "@supabase/supabase-js";

export function getAdminSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "https://gibzhkibcpbdvxbfcqhb.supabase.co";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  if (!key) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable.");
  }
  
  return createClient(url, key);
}
