import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Records a signed confidentiality agreement against the signed-in account.
// The record lives in privateMetadata (server-side only, not exposed to the client).
export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Not signed in.' }, { status: 401 });
  }

  let body: { name?: unknown; phone?: unknown; signature?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Could not read the request.' }, { status: 400 });
  }

  const clean = (v: unknown, max: number) =>
    typeof v === 'string' ? v.trim().slice(0, max) : '';
  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const signature = clean(body.signature, 120);

  if (!name || !phone || !signature) {
    return NextResponse.json({ error: 'Please complete every field.' }, { status: 400 });
  }

  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    const email = user.primaryEmailAddress?.emailAddress ?? '';
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      req.headers.get('x-real-ip') ??
      null;

    await client.users.updateUserMetadata(userId, {
      privateMetadata: {
        ndaAccepted: {
          version: '1.0',
          name,
          email,
          phone,
          signature,
          at: new Date().toISOString(),
          ip,
        },
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Could not save the agreement.' }, { status: 500 });
  }
}
