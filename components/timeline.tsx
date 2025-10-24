import type { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period?: string;
  details?: ReactNode;
}

export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border/60 pl-6">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`} className="group">
          <span className="absolute -left-[11px] mt-1 h-2.5 w-2.5 rounded-full border border-border/70 bg-card transition group-hover:border-accent group-hover:bg-accent" />
          <div className="space-y-2">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              {item.period && <span className="text-sm font-medium text-muted-foreground">{item.period}</span>}
            </div>
            <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            {item.details ? <div className="space-y-2 text-sm text-muted-foreground">{item.details}</div> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
