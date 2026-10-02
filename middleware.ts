import { clerkMiddleware, createRouteMatcher, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Gated: the room and every document. Landing, privacy, terms, assets stay public.
const isProtected = createRouteMatcher([
  '/data-room.html',
  '/roadmap.html',
  '/visual-data.html',
  '/documents/(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) {
    // Must be signed in.
    await auth.protect();

    // Must have signed the confidentiality agreement at least once.
    const { userId } = await auth();
    if (userId) {
      try {
        const user = await (await clerkClient()).users.getUser(userId);
        const signed = Boolean((user.privateMetadata as Record<string, unknown>)?.ndaAccepted);
        if (!signed) {
          return NextResponse.redirect(new URL('/nda', req.url));
        }
      } catch {
        // If the check cannot complete, hold the person at the agreement rather than let them through.
        return NextResponse.redirect(new URL('/nda', req.url));
      }
    }
  }
});

export const config = {
  matcher: [
    '/data-room.html',
    '/roadmap.html',
    '/visual-data.html',
    '/documents/(.*)',
    '/(api|trpc)(.*)',
  ],
};
