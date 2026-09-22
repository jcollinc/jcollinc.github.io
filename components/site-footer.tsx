import { links, meta } from '@/content/site';
import { WindowPanel } from '@/components/desktop';
import { WindowDetails } from '@/components/window-details';

export function SiteFooter() {
  return (
    <WindowPanel id="footer" title="More to come!" as="footer" className="site-footer" expandedContent={<WindowDetails id="footer" />}>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {meta.name}</p>
        <nav aria-label="Elsewhere on the web">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.medium} target="_blank" rel="noreferrer">Medium</a>
        </nav>
        <a href="#top">Back to top ↑</a>
      </div>
    </WindowPanel>
  );
}
