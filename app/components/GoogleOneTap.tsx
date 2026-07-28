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

      const initializeGoogleOneTap = async () => {
        if (!(window as any).google) return;
        
        // Use your Google Client ID here
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "92698238630-m4si9ed1ek3876rq1ngqbsn1i1vc534q.apps.googleusercontent.com";
        
        try {
          const rawNonce = crypto.randomUUID();
          const encoder = new TextEncoder();
          const encoded = encoder.encode(rawNonce);
          const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashedNonce = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

          const handleCredentialResponse = async (response: any) => {
            try {
              const { data, error } = await supabase.auth.signInWithIdToken({
                provider: "google",
                token: response.credential,
                nonce: rawNonce,
              });

              if (error) throw error;
              
              // Redirect to dashboard after successful login
              const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://app.parsify.in";
              window.location.href = `${dashboardUrl}/dashboard`;
            } catch (error: any) {
              console.error("Google One Tap sign-in failed", error);
            }
          };

          (window as any).google.accounts.id.initialize({
            client_id: clientId,
            nonce: hashedNonce,
            callback: handleCredentialResponse,
          });

          (window as any).google.accounts.id.prompt((notification: any) => {
            if (notification.isNotDisplayed()) {
              console.log("One Tap is not displayed:", notification.getNotDisplayedReason());
            }
          });
        } catch (err) {
          console.error("Error initializing Google One Tap", err);
        }
      };

      if ((window as any).google) {
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
