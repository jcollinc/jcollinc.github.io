import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Bricolage_Grotesque, Caveat, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});
const sans = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap'
});
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const scribble = Caveat({ subsets: ['latin'], variable: '--font-scribble', display: 'swap' });

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
      <body className={`${display.variable} ${sans.variable} ${mono.variable} ${scribble.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="grain" aria-hidden />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
