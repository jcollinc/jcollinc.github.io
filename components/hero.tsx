import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { hero, meta } from '@/content/site';

export function Hero() {
  const hasTradeMark = hero.headline.endsWith('™');
  const headlineText = hasTradeMark ? hero.headline.slice(0, -1) : hero.headline;

  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="intro-role">{meta.role}</p>
        <h1 id="intro-title">{headlineText}{hasTradeMark ? <sup className="intro-trademark">™</sup> : null}</h1>
        <p className="intro-description">{hero.subheadline}</p>
        <div className="intro-links">
          <a className="text-link intro-link" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="text-link intro-link" href={hero.ctaSecondary.href}>{hero.ctaSecondary.label}</a>
        </div>
      </div>
      <figure className="intro-portrait">
        <Image
          src={hero.heroImage}
          alt={meta.name}
          width={360}
          height={432}
          sizes="(max-width: 639px) 136px, (max-width: 899px) 260px, 360px"
          priority
        />
        <figcaption>{meta.name}</figcaption>
      </figure>
    </section>
  );
}
