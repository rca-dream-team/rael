import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decodeToken } from './utils';
import { deleteCookie } from 'cookies-next';

export const authRoutes = ['/auth/login', '/auth/signup', '/auth/logout'];
export const otherWhitelisted = ['/members', '/studio'];
export const whitelist = [...authRoutes, ...otherWhitelisted];

export function middleware(request: NextRequest) {
   const token = request.cookies.get('token');
   const path = request.nextUrl.pathname;
   const isStudio = path.startsWith('/studio');

   if (
      whitelist.some((whitePath) => {
         if (path === '/') {
            return false;
         }
         return whitePath.startsWith(path);
      }) ||
      isStudio
   ) {
      return NextResponse.next();
   }

   if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.nextUrl).href + '?redirect=' + path);
   } else {
      const decoded = decodeToken(token.value);
      console.log('decoded', decoded);
      if (decoded.exp < Date.now() / 1000 || !decoded) {
         // we divide by 1000 because the Date.now() returns milliseconds and the exp is in seconds
         deleteCookie('token');
         deleteCookie('user_type');
         deleteCookie('mis_token');
         return NextResponse.redirect(new URL('/auth/login', request.nextUrl).href + '?redirect=' + path);
      }
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
      '/((?!api|_next/static|_next/image|favicon.ico|logo.png|rael.svg|svgs/auth-bg.svg|logo.svg|favicon.svg).*)',
   ],
};
