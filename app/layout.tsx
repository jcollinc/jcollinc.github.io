import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Lato } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const sans = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jon-chinje.com'),
  title: 'Jon-Collin Chinje',
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
