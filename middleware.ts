//NEXT-INTL
//https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};