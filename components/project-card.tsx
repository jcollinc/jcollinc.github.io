import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import type { ComponentProps } from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  impact: string;
  tags: string[];
  demo: string;
  demoLabel?: string;
  code?: string;
  app?: string;
  image: ComponentProps<typeof Image>['src'];
}

export function ProjectCard({ name, description, impact, tags, demo, demoLabel, code, app, image }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] bg-muted/30">
        <Image src={image} alt={name} fill className="object-contain p-4 transition duration-500 group-hover:scale-105" />
      </div>
      <div className="space-y-4 px-6 py-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-sm font-medium text-foreground/90">{impact}</p>
        </div>
        <ul className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
          {tags.map((tag) => (
            <li key={tag} className="rounded-full border border-border px-3 py-1">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 pt-2 text-sm font-semibold">
          <Link href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent transition hover:text-accent/80">
            {demoLabel ?? 'View demo'} <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          {app && (
            <Link href={app} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent transition hover:text-accent/80">
              Open app <ExternalLink className="h-4 w-4" aria-hidden />
            </Link>
          )}
          {code && (
            <Link href={code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground">
              <Github className="h-4 w-4" aria-hidden /> Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
