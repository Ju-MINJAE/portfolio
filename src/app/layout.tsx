import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type React from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
  display: 'swap',
});

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
      <body
        className={`${poppins.className} bg-white dark:bg-neutral-950 text-black dark:text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
