import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
const isProtected = createRouteMatcher([
  '/data-room.html', '/roadmap.html', '/visual-data.html', '/documents/(.*)',
]);
export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) { await auth.protect(); }
});
export const config = {
  matcher: ['/data-room.html','/roadmap.html','/visual-data.html','/documents/:path*','/(api|trpc)(.*)'],
};
