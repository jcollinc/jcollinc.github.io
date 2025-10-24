import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { hero, meta } from '@/content/site';

export function Hero() {
  return (
    <section className="grid gap-10 pb-16 pt-12 sm:grid-cols-[1.2fr_1fr] sm:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">{meta.role}</p>
        <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          {hero.headline}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">{hero.subheadline}</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {hero.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent/80" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <Link
            href={hero.ctaPrimary.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition hover:shadow-lg"
          >
            {hero.ctaPrimary.label}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
      <div className="relative hidden sm:block">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-3xl" aria-hidden />
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-card/70 shadow-soft backdrop-blur">
          <Image
            src={hero.heroImage}
            alt={`${meta.name} smiling`}
            width={640}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
