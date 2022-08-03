import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
  const { url } = req;
  const access = req.cookies.get('access');
  const { origin } = req.nextUrl;
  // if (url.includes('/protected-route-example')) {
  //   if (access === undefined) {
  //     return NextResponse.rewrite(`${origin}/signin`)
  //   }
  // }

  return NextResponse.next();
} 