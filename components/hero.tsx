import Image from 'next/image';
import Link from 'next/link';
import { hero, meta } from '@/content/site';
import { Squiggle, Tape } from '@/components/doodles';

function Headline({ text }: { text: string }) {
  const hasTradeMark = text.endsWith('™');
  const body = hasTradeMark ? text.slice(0, -1) : text;
  const parts = body.split(/(hopefully|useful|for myself)/);

  return (
    <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.08] tracking-tight text-foreground">
      {parts.map((part, i) => {
        if (part === 'hopefully') {
          return (
            <span key={i} className="font-normal text-muted-foreground">
              hopefully
            </span>
          );
        }
        if (part === 'for myself') {
          return (
            <span key={i} className="marker whitespace-nowrap">
              for myself
            </span>
          );
        }
        if (part === 'useful') {
          return (
            <span key={i} className="relative inline-block whitespace-nowrap">
              useful
              <Squiggle className="absolute -bottom-2 left-0 h-2.5 w-full text-accent sm:-bottom-3" />
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
      {hasTradeMark && (
        <span className="relative inline-block align-top font-mono text-base font-normal text-muted-foreground sm:text-xl">
          ™
          <span className="scribble absolute -right-4 -top-9 hidden w-max rotate-6 md:block">
            not legally binding
          </span>
        </span>
      )}
    </h1>
  );
}

const bulletPops = ['bg-[hsl(var(--pop-green))]', 'bg-[hsl(var(--pop-blue))]', 'bg-accent'];

export function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16">
      <div className="mb-10 flex items-center gap-4">
        <span className="mono-label">
          № 00 — {meta.role} · {meta.location}
        </span>
        <span className="rule flex-1" />
      </div>

      <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <Headline text={hero.headline} />

          <p className="mt-8 max-w-xl text-lg italic leading-relaxed text-muted-foreground">
            {hero.subheadline}
          </p>

          <ul className="mt-9 max-w-xl space-y-3.5">
            {hero.bullets.map((bullet, i) => (
              <li key={bullet} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                <span
                  className={`mt-[0.7rem] h-[3px] w-5 flex-shrink-0 rounded-full ${bulletPops[i % bulletPops.length]}`}
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-7 font-mono text-xs">
            <Link
              href={hero.ctaPrimary.href}
              className="border-b border-foreground/25 pb-0.5 text-foreground transition hover:border-accent hover:text-accent"
            >
              {hero.ctaPrimary.label.toLowerCase()} ↗
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="text-muted-foreground transition hover:text-accent"
            >
              {hero.ctaSecondary.label.toLowerCase()} →
            </Link>
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:block">
          <figure className="plate relative rotate-[1.75deg] p-3 hover:rotate-0">
            <Tape className="-left-6 -top-3 -rotate-[38deg]" />
            <Tape className="-right-6 -top-3 rotate-[41deg]" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <div className="pointer-events-none absolute inset-0 z-10 bg-accent/10 mix-blend-multiply" aria-hidden />
              <Image src={hero.heroImage} alt={meta.name} fill className="object-cover grayscale" priority />
            </div>
            <figcaption className="flex items-center justify-between pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>fig. 01</span>
              <span>— {meta.name.toLowerCase()}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
