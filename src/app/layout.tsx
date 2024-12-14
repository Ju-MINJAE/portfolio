import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardGOVVariable.woff2',
  display: 'swap',
  weight: '35 920',
});

export const metadata: Metadata = {
  title: 'MinJae Portfolio',
  description: 'FrontEnd developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
