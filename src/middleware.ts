import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("__Secure-next-auth.session-token");
  const pathName = request.nextUrl.pathname;

  if (token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    (!token && pathName.startsWith("/houses")) ||
    pathName.startsWith("/characters") ||
    pathName.startsWith("/books")
  ) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/books", "/characters", "/houses", "/sign-in"],
};
