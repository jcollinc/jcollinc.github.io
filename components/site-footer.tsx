import Link from 'next/link';
import { Github, Linkedin, Rss } from 'lucide-react';
import { links, meta } from '@/content/site';
import { HandCircle } from '@/components/doodles';

const socials = [
  { icon: Github, href: links.github, label: 'GitHub' },
  { icon: Linkedin, href: links.linkedin, label: 'LinkedIn' },
  { icon: Rss, href: links.medium, label: 'Medium' }
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-28 border-t border-foreground/15 pt-14">
      <p className="font-display text-5xl font-semibold leading-[1] tracking-tight text-foreground sm:text-7xl">
        <span className="relative inline-block px-3 py-2">
          More to come!
          <HandCircle className="absolute -inset-x-4 -inset-y-3 h-[calc(100%+1.5rem)] w-[calc(100%+2rem)] text-accent" />
        </span>
      </p>

      <div className="mt-14 grid gap-8 border-t border-foreground/10 pt-8 sm:grid-cols-2">
        <div className="space-y-1.5">
          <p className="mono-label">Colophon</p>
          <p className="max-w-sm text-sm italic leading-relaxed text-muted-foreground">
            Set in Bricolage Grotesque, Inter, and JetBrains Mono. Built with Next.js and Tailwind, printed on
            digital paper with a little grain. The details were sweated so you don&rsquo;t have to.
          </p>
          <p className="scribble -rotate-1 pt-1">p.s. yes, the dots are hand-tuned</p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end sm:justify-between">
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
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            © {year} {meta.name}
          </p>
        </div>
      </div>
      <div className="h-10" />
    </footer>
  );
}
