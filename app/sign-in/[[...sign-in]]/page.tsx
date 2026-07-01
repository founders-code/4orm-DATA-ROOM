import { SignIn } from '@clerk/nextjs';

// Brand these in the Clerk Dashboard (Customization): Inter + JetBrains Mono,
// navy #142036, blue #2E6BF2, 4orm wordmark, so the screen reads as 4orm.
export default function Page() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24 }}>
      <SignIn />
    </main>
  );
}
