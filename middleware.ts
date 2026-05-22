import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:8080";

  // Dashboard-related routes that should be handled by the Vite SPA
  const dashboardPaths = ["/login", "/signup", "/dashboard", "/admin"];

  const shouldRedirect = dashboardPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );

  if (shouldRedirect) {
    // Construct the destination URL preserving the path and all query strings (e.g. ?plan=Professional)
    const destination = `${dashboardUrl}${pathname}${search}`;
    return NextResponse.redirect(new URL(destination, request.url));
  }

  return NextResponse.next();
}

// Limit the middleware to run only on these specific route patterns for optimal performance
export const config = {
  matcher: [
    "/login",
    "/signup",
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};
