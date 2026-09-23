import Markdown from 'react-markdown';
import { readWindowCopy, type ExpandedWindowId } from '@/lib/window-copy';

export function WindowDetails({ id }: { id: ExpandedWindowId }) {
  const { heading, body } = readWindowCopy(id);
  return (
    <section className="window-details" aria-labelledby={`${id}-details-title`}>
      <h2 id={`${id}-details-title`}>{heading}</h2>
      <div className="window-details-copy">
        <Markdown components={{
          a: ({ href, children, title }) => <a href={href} title={title} target="_blank" rel="noreferrer">{children}</a>
        }}>
          {body}
        </Markdown>
      </div>
    </section>
  );
}
