// import { NextResponse, type NextRequest } from 'next/server';

import { auth } from '@/libs/auth';
import { NextResponse } from 'next/server';

// export const proxy = (req: NextRequest) => {
//   // return NextResponse.redirect('http://localhost:8080');
//   console.log('PROXY');
// };

// export const config = {
//   matcher: '/dashboard'
// };

const protectedRoutes = ['/dashboard', '/todo'];
const publicRoutes = ['/login', '/register'];

export const proxy = auth((req) => {
  // req.nextUrl.pathname, req.auth
  const pathname = req.nextUrl.pathname;
  const isAuthenticated = !!req.auth;

  // ex. pathname ==> /dashboard
  const isProtectedRoute = protectedRoutes.some((el) =>
    pathname.startsWith(el)
  );

  // protected route but not authenticated ==> redirect to login
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const isPublicRoute = publicRoutes.some((el) => pathname.startsWith(el));

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
