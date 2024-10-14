import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token =
    request.cookies.get("__Secure-next-auth.session-token") ||
    request.cookies.get("next-auth.session-token"); // Token can vary depending on environment
  const pathName = request.nextUrl.pathname;

  // If the user is authenticated (has token)
  if (token) {
    // If trying to access the sign-in page while logged in, redirect to the home page
    if (pathName === "/sign-in") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    // Allow access to all other pages
    return NextResponse.next();
  }

  // If the user is not authenticated (no token)
  if (!token) {
    // Allow access only to the home page ("/") and sign-in page ("/sign-in")
    if (pathName === "/" || pathName === "/sign-in") {
      return NextResponse.next();
    }
    // Redirect to sign-in page if accessing other restricted pages
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/books", "/characters", "/houses", "/profile", "/sign-in"], // Specify the routes to match
};
