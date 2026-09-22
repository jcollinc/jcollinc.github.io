import { ThemeToggle } from '@/components/theme-toggle';
import { links, meta } from '@/content/site';
import { RestoreAll } from '@/components/desktop';

export function SiteHeader() {
  return (
    <header className="site-header page-width">
      <a className="site-name" href="#top">{meta.name}</a>
      <nav aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#writing">Writing</a>
        <a href={links.resume}>Résumé <span aria-hidden="true">↗</span></a>
      </nav>
      <div className="desktop-toolbar"><RestoreAll /><ThemeToggle /></div>
    </header>
  );
}
