import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Subdomain handling for app.parsify.in
  const isAppSubdomain = hostname.startsWith("app.");

  if (isAppSubdomain) {
    // If accessing root of app.parsify.in -> point to /dashboard
    const res = pathname === "/"
      ? NextResponse.rewrite(new URL("/dashboard", request.url))
      : NextResponse.next();
    // The app subdomain serves the same Next.js build as parsify.in, so every
    // marketing page would otherwise be indexable twice (duplicate content).
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
