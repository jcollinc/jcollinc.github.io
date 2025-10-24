import Link from 'next/link';
import { Github, Linkedin, Rss } from 'lucide-react';
import { links, meta } from '@/content/site';

const socials = [
  { icon: Github, href: links.github, label: 'GitHub' },
  { icon: Linkedin, href: links.linkedin, label: 'LinkedIn' },
  { icon: Rss, href: links.medium, label: 'Medium' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">{meta.name}</p>
          <p className="text-xs text-muted-foreground">Crafted in Queens, NY · Built with Next.js & Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
