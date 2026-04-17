import Image from 'next/image';
import { hero, meta } from '@/content/site';

export function Hero() {
  const hasTradeMark = hero.headline.endsWith('™');
  const headlineText = hasTradeMark ? hero.headline.slice(0, -1) : hero.headline;
  const emphasisMatch = headlineText.match(/somewhat useful/i);
  const parts = emphasisMatch
    ? headlineText.split(/(somewhat useful)/i)
    : [headlineText];

  return (
    <section className="relative pt-8 sm:pt-14">
      <div className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>{meta.role}</span>
        <span className="h-px flex-1 bg-foreground/15" />
      </div>

      <div className="grid gap-12 sm:grid-cols-12 sm:items-center">
        <div className="sm:col-span-8">
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-normal leading-[1.02] tracking-tightest text-foreground">
            {parts.map((part, i) =>
              part.toLowerCase() === 'somewhat useful' ? (
                <span key={i} className="italic text-accent">{part}</span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
            {hasTradeMark && (
              <span className="align-top font-mono text-base text-muted-foreground sm:text-xl">™</span>
            )}
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subheadline}
          </p>

          <ul className="mt-8 max-w-xl space-y-3">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/85 sm:text-base">
                <span className="mt-[0.65rem] h-px w-4 flex-shrink-0 bg-accent" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="relative hidden sm:col-span-4 sm:block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 z-10 bg-accent/10 mix-blend-multiply" aria-hidden />
            <Image
              src={hero.heroImage}
              alt={`${meta.name}`}
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
          <div className="absolute -bottom-3 left-0 right-0 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>fig. 01</span>
            <span>— {meta.name.toLowerCase()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
