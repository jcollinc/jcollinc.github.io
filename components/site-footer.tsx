import Link from 'next/link';
import { Github, Linkedin, Rss } from 'lucide-react';
import { links, meta } from '@/content/site';

const socials = [
  { icon: Github, href: links.github, label: 'GitHub' },
  { icon: Linkedin, href: links.linkedin, label: 'LinkedIn' },
  { icon: Rss, href: links.medium, label: 'Medium' }
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-foreground/15">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <p className="font-display text-5xl font-normal italic leading-[1] tracking-tightest text-accent sm:text-7xl">
          More to come!
        </p>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-foreground/10 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center">
          <span>© {year} {meta.name}</span>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted-foreground transition hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
