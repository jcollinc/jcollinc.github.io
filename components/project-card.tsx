import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Apple, Code, Smartphone } from 'lucide-react';
import type { ComponentProps } from 'react';

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

  return (
    <article className="group relative border-t border-foreground/15 py-8 transition-colors hover:border-foreground/30">
      <div className="grid gap-6 sm:grid-cols-12 sm:items-start">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:col-span-2 sm:pt-2">
          {num} / {name}
        </div>

        <div className="sm:col-span-6 space-y-4">
          <h3 className="font-display text-3xl font-normal leading-[1.05] tracking-tightest text-foreground transition group-hover:text-accent sm:text-4xl">
            {primaryLink ? (
              <Link href={primaryLink} target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-2">
                {name}
                <ArrowUpRight
                  className="h-5 w-5 -translate-y-1 opacity-40 transition group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            ) : (
              name
            )}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
          <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">{impact}</p>

          <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            {tags.map((tag, i) => (
              <li key={tag} className="inline-flex items-center gap-3">
                {i > 0 ? <span className="text-foreground/20">·</span> : null}
                <span>{tag}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-mono text-xs">
            {demo && (
              <Link
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border-b border-foreground/20 pb-0.5 text-foreground transition hover:border-accent hover:text-accent"
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
                className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-accent"
              >
                <Apple className="h-3.5 w-3.5" aria-hidden /> app store
              </Link>
            )}
            {googlePlay && (
              <Link
                href={googlePlay}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-accent"
              >
                <Smartphone className="h-3.5 w-3.5" aria-hidden /> play store
              </Link>
            )}
            {code && (
              <Link
                href={code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition hover:text-accent"
              >
                <Code className="h-3.5 w-3.5" aria-hidden /> source
              </Link>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-muted/40 sm:col-span-4">
          {primaryLink ? (
            <Link href={primaryLink} target="_blank" rel="noreferrer" aria-label={`Visit ${name}`} className="absolute inset-0 block">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain p-4 transition duration-700 group-hover:scale-[1.04]"
              />
            </Link>
          ) : (
            <Image src={image} alt={name} fill className="object-contain p-4 transition duration-700 group-hover:scale-[1.04]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-accent/0 mix-blend-multiply transition duration-500 group-hover:bg-accent/5" aria-hidden />
        </div>
      </div>
    </article>
  );
}
