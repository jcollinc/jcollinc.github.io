import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { ComponentProps } from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  impact: string;
  tags: string[];
  demo: string;
  code?: string;
  googlePlay?: string;
  appStore?: string;
  image: ComponentProps<typeof Image>['src'];
  demoLabel?: string;
}

export function ProjectCard({
  name, description, impact, tags, demo, demoLabel, code, googlePlay, appStore, image
}: ProjectCardProps) {
  return (
    <article className="project">
      <a className="project-image" href={demo} target="_blank" rel="noreferrer" aria-label={`Visit ${name}`}>
        <Image
          src={image}
          alt={`${name} website preview`}
          width={1512}
          height={827}
          sizes="(max-width: 699px) calc(100vw - 40px), (max-width: 1259px) calc((100vw - 92px) / 2), 574px"
        />
      </a>
      <div className="project-copy">
        <h3><a href={demo} target="_blank" rel="noreferrer">{name} <ArrowUpRight size={23} aria-hidden="true" /></a></h3>
        <p>{description}</p>
        <p>{impact}</p>
        <ul className="project-tools" aria-label={`${name} technologies`}>
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-links">
          <a href={demo} target="_blank" rel="noreferrer">{demoLabel ?? 'Website'}</a>
          {appStore ? <a href={appStore} target="_blank" rel="noreferrer">App Store</a> : null}
          {googlePlay ? <a href={googlePlay} target="_blank" rel="noreferrer">Google Play</a> : null}
          {code ? <a href={code} target="_blank" rel="noreferrer">Source code</a> : null}
        </div>
      </div>
    </article>
  );
}
