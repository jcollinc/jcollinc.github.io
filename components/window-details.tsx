import { windowDetails } from '@/content/window-details';
import type { WindowId } from '@/lib/desktop';

export function WindowDetails({ id }: { id: WindowId }) {
  const { heading, paragraphs } = windowDetails[id];
  return (
    <section className="window-details" aria-labelledby={`${id}-details-title`}>
      <h2 id={`${id}-details-title`}>{heading}</h2>
      <div className="window-details-copy">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex}>
            {typeof paragraph === 'string' ? paragraph : paragraph.map((part, partIndex) => {
              if (typeof part === 'string') return part;
              if ('emphasis' in part) return <em key={partIndex}>{part.emphasis}</em>;
              return <a key={partIndex} href={part.href} target="_blank" rel="noreferrer">{part.text}</a>;
            })}
          </p>
        ))}
      </div>
    </section>
  );
}
