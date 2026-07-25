import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Subdomain handling for app.parsify.in
  const isAppSubdomain = hostname.startsWith("app.");

  if (isAppSubdomain) {
    // If accessing root of app.parsify.in -> point to /dashboard
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
