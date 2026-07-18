import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Apple, Code, Smartphone } from 'lucide-react';
import type { ComponentProps, CSSProperties } from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  impact: string;
  tags: string[];
  demo?: string;
  demoLabel?: string;
  code?: string;
  googlePlay?: string;
  appStore?: string;
  image: ComponentProps<typeof Image>['src'];
  index?: number;
}

/* each project gets its own flavor, borrowed from the product's own branding */
const flavors: Record<string, { light: string; dark: string; note?: string }> = {
  MajaLabs: { light: '36 90% 40%', dark: '40 95% 62%', note: 'the mothership' },
  PayTogether: { light: '217 80% 46%', dark: '214 92% 68%', note: 'handles the awkward math' },
  myFPL: { light: '150 65% 32%', dark: '150 70% 52%', note: 'my unfair advantage' }
};
const fallbackFlavor = { light: '14 68% 42%', dark: '20 86% 64%' };

export function ProjectCard({
  name,
  description,
  impact,
  tags,
  demo,
  demoLabel,
  code,
  googlePlay,
  appStore,
  image,
  index
}: ProjectCardProps) {
  const primaryLink = demo || googlePlay || appStore || code;
  const num = String(index ?? 0).padStart(2, '0');
  const exhibit = String.fromCharCode(96 + (index ?? 1));
  const flavor = flavors[name] ?? fallbackFlavor;
  const style = { '--flavor-light': flavor.light, '--flavor-dark': flavor.dark } as CSSProperties;

  return (
    <article
      style={style}
      className="group relative overflow-hidden rounded-2xl border border-[hsl(var(--flavor)/0.25)] bg-[hsl(var(--flavor)/0.05)] [--flavor:var(--flavor-light)] dark:[--flavor:var(--flavor-dark)] dark:bg-[hsl(var(--flavor)/0.07)]"
    >
      {/* oversized hollow numeral, cropped by the card edge */}
      <span
        className="outline-num pointer-events-none absolute -right-5 -top-12 select-none font-display text-[11rem] font-bold leading-none"
        aria-hidden
      >
        {num}
      </span>

      <div className="relative p-7 sm:p-10 sm:pb-0">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="mono-label">
            <span className="text-[hsl(var(--flavor))]">exhibit {exhibit}</span> — {name.toLowerCase()}
          </p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[hsl(var(--flavor)/0.3)] bg-[hsl(var(--flavor)/0.08)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--flavor))]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-5xl">
          {primaryLink ? (
            <Link
              href={primaryLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline gap-2 transition hover:text-[hsl(var(--flavor))]"
            >
              {name}
              <ArrowUpRight
                className="h-6 w-6 -translate-y-1 opacity-40 transition group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          ) : (
            name
          )}
          {flavor.note ? (
            <span className="scribble ml-4 inline-block -rotate-2 align-middle font-normal tracking-normal text-[hsl(var(--flavor))]">
              {flavor.note}
            </span>
          ) : null}
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 sm:gap-10">
          <p className="text-base leading-relaxed text-foreground/85">{description}</p>
          <p className="text-base leading-relaxed text-muted-foreground">{impact}</p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs">
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-[hsl(var(--flavor)/0.5)] pb-0.5 text-[hsl(var(--flavor))] transition hover:border-[hsl(var(--flavor))]"
            >
              {(demoLabel ?? 'view demo').toLowerCase()}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          )}
          {appStore && (
            <Link
              href={appStore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-[hsl(var(--flavor))]"
            >
              <Apple className="h-3.5 w-3.5" aria-hidden /> app store
            </Link>
          )}
          {googlePlay && (
            <Link
              href={googlePlay}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-[hsl(var(--flavor))]"
            >
              <Smartphone className="h-3.5 w-3.5" aria-hidden /> play store
            </Link>
          )}
          {code && (
            <Link
              href={code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-[hsl(var(--flavor))]"
            >
              <Code className="h-3.5 w-3.5" aria-hidden /> source
            </Link>
          )}
        </div>
      </div>

      {/* the anchor — big screenshot rising out of the card's bottom edge */}
      <div className="relative mt-8 h-[16rem] px-7 sm:h-[24rem] sm:px-14">
        {primaryLink ? (
          <Link href={primaryLink} target="_blank" rel="noreferrer" aria-label={`Visit ${name}`} className="absolute inset-0 block">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain object-bottom transition duration-700 group-hover:scale-[1.02]"
            />
          </Link>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-bottom transition duration-700 group-hover:scale-[1.02]"
          />
        )}
      </div>
    </article>
  );
}
