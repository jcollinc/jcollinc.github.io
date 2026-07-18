"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Rss } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { links, meta } from '@/content/site';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'about', num: '01', label: 'about' },
  { id: 'experience', num: '02', label: 'journey' },
  { id: 'projects', num: '03', label: 'projects' },
  { id: 'writing', num: '04', label: 'writing' }
];

const socials = [
  { icon: Github, href: links.github, label: 'GitHub' },
  { icon: Linkedin, href: links.linkedin, label: 'LinkedIn' },
  { icon: Rss, href: links.medium, label: 'Medium' }
];

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export function SiteNav() {
  const active = useActiveSection();

  return (
    <>
      {/* mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="font-display text-base font-semibold tracking-tight">
            {meta.name}
          </Link>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={cn('transition hover:text-foreground', active === id && 'text-accent')}
                >
                  {label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* desktop rail — the table of contents */}
      <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-12 lg:pr-8">
        <div className="space-y-2.5">
          <Link href="/" className="block font-display text-xl font-semibold leading-tight tracking-tight">
            {meta.name}
          </Link>
          <p className="mono-label">
            {meta.role}
            <span className="mt-1 block normal-case tracking-[0.08em]">{meta.location}</span>
          </p>
        </div>

        <nav aria-label="Sections">
          <p className="mono-label mb-4">Contents</p>
          <ul className="space-y-3">
            {sections.map(({ id, num, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-baseline gap-2.5 font-mono text-xs">
                    <span className={cn('transition', isActive ? 'text-accent' : 'text-foreground/30')}>
                      {num}
                    </span>
                    <span
                      className={cn(
                        'lowercase transition',
                        isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                      )}
                    >
                      {label}
                    </span>
                    <span className="leader opacity-60" />
                    <span
                      className={cn(
                        'h-px bg-accent transition-all duration-300',
                        isActive ? 'w-4' : 'w-0 group-hover:w-2.5'
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-4">
          <Link
            href={links.resume}
            className="inline-flex items-center gap-1.5 border-b border-foreground/25 pb-0.5 font-mono text-xs text-foreground transition hover:border-accent hover:text-accent"
          >
            résumé ↗
          </Link>
          <div className="flex items-center gap-0.5 text-muted-foreground">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-8 w-8 items-center justify-center transition hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </Link>
            ))}
            <span className="mx-1 h-4 w-px bg-foreground/15" aria-hidden />
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
