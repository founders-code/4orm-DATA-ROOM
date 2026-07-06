import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: '4orm Finance Data Room',
  description: 'Canada’s institutional settlement layer for tokenized real-world assets.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
