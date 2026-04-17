import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
    <section id={id} className={cn('scroll-mt-28', className)}>
      <header className="mb-12 grid gap-6 sm:grid-cols-12 sm:items-end">
        <div className="sm:col-span-4 space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {index ? <span className="text-accent">§ {index}</span> : null} {index ? '— ' : null}{eyebrow}
          </p>
          <div className="rule" />
        </div>
        <div className="sm:col-span-8 space-y-3">
          <h2 className="font-display text-3xl font-normal leading-[1.05] tracking-tightest text-foreground sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">{description}</p>
          ) : null}
        </div>
      </header>
      {children}
    </section>
  );
}
