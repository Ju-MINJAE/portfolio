import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JUMINJAE | 주민재',
  description: 'JUMINJAE Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
