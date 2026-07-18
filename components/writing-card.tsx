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
    <Link href={url} target="_blank" rel="noreferrer" className="group block py-5">
      <article>
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-foreground transition group-hover:text-accent sm:text-xl">
            {title}
          </h3>
          <span className="leader hidden sm:block" aria-hidden />
          <span className="hidden whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:inline-flex sm:items-center sm:gap-2">
            {date}
            <ArrowUpRight
              className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              aria-hidden
            />
          </span>
        </div>
        <p className="mt-1.5 max-w-xl text-base text-muted-foreground">{description}</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:hidden">{date}</p>
      </article>
    </Link>
  );
}
