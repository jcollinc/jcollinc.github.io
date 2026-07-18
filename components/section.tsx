import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { HandArrow } from '@/components/doodles';

interface SectionProps {
  id: string;
  eyebrow: string;
  index?: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, index, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24', className)}>
      <header className="relative isolate mb-12 space-y-4">
        {index ? (
          <span className="ghost-num" aria-hidden>
            {index}
          </span>
        ) : null}
        <p className="mono-label">
          {index ? <span className="text-accent">№ {index}</span> : null} {index ? '— ' : null}
          {eyebrow}
        </p>
        <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
          <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <span className="relative mb-1 inline-flex max-w-[15rem] -rotate-2 items-start gap-1">
              <HandArrow className="mt-1 h-6 w-7 flex-shrink-0 scale-x-[-1] text-accent/70" />
              <span className="scribble">{description}</span>
            </span>
          ) : null}
        </div>
      </header>
      {children}
    </section>
  );
}
