import type { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period?: string;
  details?: ReactNode;
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <ol className="divide-y divide-foreground/10">
      {items.map((item) => (
        <li key={`${item.title}-${item.period ?? item.subtitle}`} className="group py-4 transition hover:bg-foreground/[0.02]">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="space-y-1">
              <h3 className="font-display text-xl font-normal leading-tight tracking-tightest text-foreground transition group-hover:text-accent">
                {item.title}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {item.subtitle}
              </p>
            </div>
            {item.period && (
              <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
            )}
          </div>
          {item.details ? <div className="mt-2 space-y-2 text-sm text-muted-foreground">{item.details}</div> : null}
        </li>
      ))}
    </ol>
  );
}
