import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { hero, meta } from '@/content/site';
import { WindowPanel } from '@/components/desktop';
import { WindowDetails } from '@/components/window-details';

export function Hero() {
  const hasTradeMark = hero.headline.endsWith('™');
  const headlineText = hasTradeMark ? hero.headline.slice(0, -1) : hero.headline;

  return (
    <WindowPanel id="intro" title={meta.role} titleAs="p" className="intro" expandedContent={<WindowDetails id="intro" />}>
      <div className="intro-content">
        <div className="intro-copy">
          <h1 id="intro-title">{headlineText}{hasTradeMark ? <sup className="intro-trademark">™</sup> : null}</h1>
          <p className="intro-description">{hero.subheadline}</p>
          <div className="intro-links">
            <a className="text-link intro-link" href={hero.ctaPrimary.href} target="_blank" rel="noreferrer">
              {hero.ctaPrimary.label} <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="intro-portrait">
          <Image
            src={hero.heroImage}
            alt={meta.name}
            width={360}
            height={432}
            sizes="(max-width: 639px) 105px, (max-width: 899px) 230px, (max-width: 1099px) 285px, 332px"
            priority
          />
          <figcaption>{meta.name}</figcaption>
        </figure>
      </div>
    </WindowPanel>
  );
}
