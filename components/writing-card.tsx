import { ArrowUpRight } from 'lucide-react';

interface WritingCardProps {
  title: string;
  description: string;
  date: string;
  url: string;
}

export function WritingCard({ title, description, date, url }: WritingCardProps) {
  return (
    <article className="writing-entry">
      <p className="writing-date">{date}</p>
      <div>
        <h3><a href={url} target="_blank" rel="noreferrer">{title} <ArrowUpRight size={18} aria-hidden="true" /></a></h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
