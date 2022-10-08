import { NextResponse } from "next/dist/server/web/spec-extension/response";

export default function middleware(req) {
  const { url } = req;
  const path = req.nextUrl.clone();
  const isAdmin = req.cookies.get('isAdmin');
  const access = req.cookies.get('access');
  if (url.includes('/dashboard') || url.includes('/bulkupload') ||
    url.includes('/documentsmapping') || url.includes('/mydocuments') ||
    url.includes('/documents') || url.includes('/documentsdump') ||
    url.includes('/entity') || url.includes('/org') ||
    url.includes('/docu') || url.includes('/qanda-admin') ||
    url.includes('/forum') || url.includes('/faq-admin') ||
    url.includes('/getinvolved') || url.includes('/analytics')) {
    if (!access) {
      path.pathname = '/signin';
      return NextResponse.redirect(path);
    } else if (isAdmin !== 'true' && (path.pathname === '/documentsdump' ||
      path.pathname === '/entity' || path.pathname === '/org' ||
      path.pathname === '/docu' || path.pathname === '/qanda-admin' ||
      path.pathname === '/faq-admin' || path.pathname === '/getinvolved')) {
      path.pathname = '/dashboard';
      return NextResponse.redirect(path);
    }
  }

  return NextResponse.next();
} 