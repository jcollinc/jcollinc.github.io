import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://jon-chinje.com'),
  title: {
    default: 'Jon-Collin Chinje · Software Engineer',
    template: '%s · Jon-Collin Chinje'
  },
  description:
    "Portfolio of Jon-Collin Chinje, a software engineer crafting reliable, human-centered web experiences with JavaScript and cloud-first thinking.",
  openGraph: {
    title: 'Jon-Collin Chinje · Software Engineer',
    description:
      'Portfolio of Jon-Collin Chinje, a software engineer crafting reliable, human-centered web experiences with JavaScript and cloud-first thinking.',
    url: 'https://jon-chinje.com',
    siteName: 'Jon-Collin Chinje',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jon-Collin Chinje · Software Engineer',
    description:
      'Portfolio of Jon-Collin Chinje, a software engineer crafting reliable, human-centered web experiences with JavaScript and cloud-first thinking.'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
