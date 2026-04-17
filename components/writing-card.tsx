import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface WritingCardProps {
  title: string;
  description: string;
  date: string;
  url: string;
}

export function WritingCard({ title, description, date, url }: WritingCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block border-t border-foreground/15 py-6 transition-colors hover:border-foreground/40"
    >
      <article className="grid gap-3 sm:grid-cols-12 sm:items-baseline">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:col-span-3">
          {date}
        </span>
        <div className="sm:col-span-8 space-y-2">
          <h3 className="font-display text-xl font-normal leading-snug tracking-tightest text-foreground transition group-hover:text-accent">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight
          className="hidden h-5 w-5 self-center text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:col-span-1 sm:block"
          aria-hidden
        />
      </article>
    </Link>
  );
}
