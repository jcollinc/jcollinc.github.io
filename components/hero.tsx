import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { hero, meta } from '@/content/site';

export function Hero() {
  return (
    <section className="grid gap-20 pb-16 pt-12 sm:grid-cols-[1.2fr_1fr] sm:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground pb-5">{meta.role}</p>
        <h1 className="text-5xl font-semibold leading-tight text-foreground sm:text-5xl pb-8">
          {hero.headline.replace(/™$/, '')}
          {hero.headline.endsWith('™') && (
            <span className="text-lg align-top text-muted-foreground sm:text-2xl">™</span>
          )}
        </h1>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {hero.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 pb-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent/80" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative hidden sm:block">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-3xl" aria-hidden />
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-card/70 shadow-soft backdrop-blur p-3">
          <Image
            src={hero.heroImage}
            alt={`${meta.name} smiling`}
            width={640}
            height={800}
            className="h-full w-full object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
