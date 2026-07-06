import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0B1220' }}>
      <SignIn afterSignInUrl="/data-room.html" afterSignUpUrl="/data-room.html" />
    </div>
  );
}
