"use client";

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { links, meta } from '@/content/site';

const navigation = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-card/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent to-accent/60" aria-hidden />
          {meta.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          {navigation.map(({ href, label }) => (
            <a key={href} href={href} className="relative transition hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={links.resume}
            className="hidden rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent sm:inline-flex"
          >
            Résumé
          </Link>
        </div>
      </div>
    </header>
  );
}
