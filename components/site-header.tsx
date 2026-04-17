"use client";

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { links } from '@/content/site';

const navigation = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#experience', label: 'Work', num: '02' },
  { href: '#projects', label: 'Projects', num: '03' },
  { href: '#writing', label: 'Writing', num: '04' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="group flex items-baseline gap-2 font-mono text-sm">
          <span className="font-display text-xl italic leading-none text-accent transition group-hover:rotate-[-6deg]">j</span>
          <span className="text-foreground">/collin</span>
          <span className="text-muted-foreground">.chinje</span>
        </Link>
        <nav className="hidden items-center gap-6 font-mono text-xs text-muted-foreground sm:flex">
          {navigation.map(({ href, label, num }) => (
            <a key={href} href={href} className="group inline-flex items-baseline gap-1.5 transition hover:text-foreground">
              <span className="text-foreground/30 group-hover:text-accent">{num}</span>
              <span className="lowercase">{label}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <ThemeToggle />
          <Link
            href={links.resume}
            className="hidden items-center gap-1.5 border-b border-foreground/30 pb-0.5 font-mono text-xs text-foreground transition hover:border-accent hover:text-accent sm:inline-flex"
          >
            résumé ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
