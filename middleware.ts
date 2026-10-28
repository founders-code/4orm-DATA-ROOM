import { clerkMiddleware, createRouteMatcher, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Gated: the room and every document. Landing, privacy, terms, assets stay public.
const isProtected = createRouteMatcher([
  '/data-room.html',
  '/roadmap.html',
  '/visual-data.html',
  '/documents/(.*)',
]);

// Every page view (and who, when signed in) is reported to the 4orm Ops control room, which logs
// sign-ins, time in the room and traffic. Fire-and-forget: a failed report never blocks a page.
const OPS_VISIT_URL = process.env.OPS_VISIT_URL || 'https://www.4ormop.com/api/hooks/visit';
// Optional shared key. Set SITE_BEACON_KEY to the same value in this project and in 4orm Ops to verify reports.
const BEACON_KEY = process.env.SITE_BEACON_KEY || '';

function isPage(path: string) {
  return path === '/' || /\.html$/i.test(path) || /^\/documents\//.test(path);
}

function report(body: Record<string, unknown>) {
  return fetch(OPS_VISIT_URL, {
    method: 'POST',
    headers: BEACON_KEY ? { 'content-type': 'application/json', 'x-beacon-key': BEACON_KEY } : { 'content-type': 'application/json' },
    body: JSON.stringify({ site: 'dataroom', ...body }),
  }).catch(() => undefined);
}

export default clerkMiddleware(async (auth, req, event) => {
  const path = new URL(req.url).pathname;
  let person: { id: string; email: string; name: string } | null = null;

  if (isProtected(req)) {
    // Must be signed in.
    await auth.protect();

    // Must have signed the confidentiality agreement at least once.
    const { userId } = await auth();
    if (userId) {
      try {
        const user = await (await clerkClient()).users.getUser(userId);
        person = {
          id: userId,
          email: user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress || '',
          name: [user.firstName, user.lastName].filter(Boolean).join(' '),
        };
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

  if (req.method === 'GET' && isPage(path)) {
    let visitor = '';
    if (!person) {
      const { userId } = await auth();
      if (userId) person = { id: userId, email: '', name: '' };
      visitor = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim().replace(/\.\d+$/, '.0');
    }
    event.waitUntil(report({
      path,
      userId: person?.id,
      email: person?.email,
      name: person?.name,
      visitor: visitor || undefined,
      ref: req.headers.get('referer') || undefined,
    }));
  }
});

export const config = {
  matcher: [
    '/',
    '/(.*\\.html)',
    '/documents/(.*)',
    '/(api|trpc)(.*)',
  ],
};
