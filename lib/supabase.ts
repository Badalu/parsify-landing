import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://gibzhkibcpbdvxbfcqhb.supabase.co";
// Using publishable key for public client queries
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpYnpoa2liY3BiZHZ4YmZjcWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5OTY5NjEsImV4cCI6MjA5NDU3Mjk2MX0.jhC7N4we_WBJEbhydxyYAqJaHnSfRpQzkb5myHPkUn0";

export const supabase = createClient(supabaseUrl, supabaseKey);
