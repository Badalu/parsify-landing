"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export function GoogleOneTap() {
  useEffect(() => {
    // Only run on client and if user is not already logged in
    if (typeof window === "undefined") return;

    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) return; // Don't show if already logged in

      const handleCredentialResponse = async (response: any) => {
        try {
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: "google",
            token: response.credential,
          });

          if (error) throw error;
          
          // Redirect to dashboard after successful login
          const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.parsify.in";
          window.location.href = `${dashboardUrl}/dashboard`;
        } catch (error: any) {
          console.error("Google One Tap sign-in failed", error);
        }
      };

      const initializeGoogleOneTap = () => {
        if (!window.google) return;
        
        // Use your Google Client ID here
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "282237923154-mlkrui9qo45odd8vv0q56cps40d4ecjk.apps.googleusercontent.com";
        
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed()) {
            console.log("One Tap is not displayed:", notification.getNotDisplayedReason());
          }
        });
      };

      if (window.google) {
        initializeGoogleOneTap();
      } else {
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = initializeGoogleOneTap;
        document.body.appendChild(script);
        
        return () => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        };
      }
    };

    checkSession();
  }, []);

  return null;
}
