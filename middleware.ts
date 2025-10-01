import { decrypt } from "@/lib/auth/session";
import { type NextRequest, NextResponse } from "next/server";

// Define protected and public routes
/* const protectedRoutes = ["/dashboard"]
const publicRoutes = ["/login", "/"] */

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  /*   const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route))
  const isPublicRoute = publicRoutes.includes(path) */

  // Get session from cookie
  const cookie = req.cookies.get("session")?.value;
  const session = await decrypt(cookie);

  // Redirect to login if accessing protected route without session
  /*   if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl))
  } */

  // Redirect to dashboard if accessing login while authenticated
  if (path === "/admin-login" && session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
