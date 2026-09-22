import { links, meta } from '@/content/site';
import { CopyEmail } from '@/components/copy-email';

export function SiteFooter() {
  return (
    <footer className="site-footer page-width">
      <div className="contact-row">
        <div>
          <h2>More to come!</h2>
        </div>
        <div className="contact-email">
          <a className="text-link" href={`mailto:${links.email}`}>{links.email}</a>
          <CopyEmail />
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {meta.name}</p>
        <nav aria-label="Elsewhere on the web">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.medium} target="_blank" rel="noreferrer">Medium</a>
        </nav>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
