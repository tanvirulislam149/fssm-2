import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
  const { url } = req;
  const isAdmin = req.cookies.get('isAdmin');
  const { origin } = req.nextUrl;
  if (url.includes('/dashboard')) {
    if (!isAdmin) {
      return NextResponse.rewrite(`${origin}/signin`)
    }
  }

  return NextResponse.next();
} 