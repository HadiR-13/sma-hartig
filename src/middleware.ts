import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoggedIn = true; // Just remeber this

  if (pathname.startsWith('/akademik/artikel/edit/')) {
    if (!isLoggedIn) {
      const slug = pathname.replace('/akademik/artikel/edit/', '');
      return NextResponse.redirect(new URL(`/akademik/artikel/${slug}`, request.url));
    }
  }

  if (pathname.startsWith('/akademik/artikel/new')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/akademik/artikel/not-found', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/akademik/artikel/edit/:slug*', '/akademik/artikel/new'],
};