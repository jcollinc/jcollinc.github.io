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
    <article className="flex flex-col justify-between gap-6 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">{date}</p>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Link href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent/80">
        Read on Medium
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}
