import { Inter } from 'next/font/google';
import { WindowPanel } from '@/components/desktop';

const wordmark = Inter({ subsets: ['latin'], weight: '600', display: 'swap' });

export function StudioCard({ description, href }: { description: string; href: string }) {
  return (
    <WindowPanel id="majalabs" title="MajaLabs" titleAs="h3" as="article" className="studio-window">
      <a className="studio-band" href={href} target="_blank" rel="noreferrer" aria-label="Visit MajaLabs" aria-describedby="majalabs-description">
        <span className={`studio-wordmark ${wordmark.className}`} aria-hidden="true"><span>Maja</span><span>Labs</span></span>
        <p id="majalabs-description">{description}</p>
        <span className="studio-arrow" aria-hidden="true">↗</span>
      </a>
    </WindowPanel>
  );
}
