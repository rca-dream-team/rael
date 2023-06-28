import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const whitelist = ["/auth/login", "/auth/signup", "/auth/logout"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const path = request.nextUrl.pathname;

  if (whitelist.includes(path)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(
      new URL("/auth/login", request.nextUrl).href + "?redirect=" + path
    );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|logo.png|rael.svg|svgs/auth-bg.svg|logo.svg|favicon.svg).*)",
  ],
};
