interface TimelineItemProps {
  title: string;
  subtitle: string;
}

/* ledger-style rows: title ......... annotation */
export function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <ol className="space-y-1">
      {items.map((item) => (
        <li key={`${item.title}-${item.subtitle}`} className="group flex items-baseline gap-3 py-2.5">
          <h3 className="font-display text-lg font-medium leading-tight tracking-tight text-foreground transition group-hover:text-accent">
            {item.title}
          </h3>
          <span className="leader" aria-hidden />
          <p className="text-right font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {item.subtitle}
          </p>
        </li>
      ))}
    </ol>
  );
}
