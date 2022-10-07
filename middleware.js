import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
  const { url } = req;
  const isAdmin = req.cookies.get('isAdmin');
  const { origin } = req.nextUrl;
  // if (url.includes('/dashboard') || url.includes('/bulkupload') ||
  //   url.includes('/documentsmapping') || url.includes('/mydocuments') ||
  //   url.includes('/documents') || url.includes('/documentsdump') ||
  //   url.includes('/entity') || url.includes('/org') ||
  //   url.includes('/docu') || url.includes('/qanda-admin') ||
  //   url.includes('/forum') || url.includes('/faq-admin') ||
  //   url.includes('/getinvolved') || url.includes('/analytics')) {
  //   if (!isAdmin) {
  //     return NextResponse.rewrite(`${origin}/signin`)
  //   }
  // }

  return NextResponse.next();
} 