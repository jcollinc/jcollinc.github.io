import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-28 space-y-8', className)}>
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">{eyebrow}</p>
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
        {description ? <p className="max-w-2xl text-base text-muted-foreground">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
