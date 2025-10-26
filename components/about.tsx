'use client';

import { Fragment, useCallback } from 'react';

import { about, placeholders } from '@/content/site';

const CITY_LINK_TOKEN = placeholders.cityDehumidifierLink;
const CITY_LINK_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const CITY_LINK_LABEL = 'here';

export function About() {
  const handleCityLink = useCallback(() => {
    window.open(CITY_LINK_URL, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="grid gap-8 rounded-3xl border border-border/60 bg-card/70 p-8 shadow-soft sm:grid-cols-2">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">About</p>
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{about.title}</h2>
      </div>
      <div className="space-y-4 text-base text-muted-foreground">
        {about.body.map((paragraph, index) => {
          if (typeof paragraph === 'string' && paragraph.includes(CITY_LINK_TOKEN)) {
            const segments = paragraph.split(CITY_LINK_TOKEN);

            return (
              <p key={index}>
                {segments.map((segment, segmentIndex) => (
                  <Fragment key={segmentIndex}>
                    {segment}
                    {segmentIndex < segments.length - 1 && (
                      <button
                        type="button"
                        onClick={handleCityLink}
                        className="inline-flex items-center font-medium text-foreground underline decoration-solid decoration-accent/60 underline-offset-4 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label="Open a short video about the city-scale dehumidifier project in a new tab"
                      >
                        {CITY_LINK_LABEL}
                      </button>
                    )}
                  </Fragment>
                ))}
              </p>
            );
          }

          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}
