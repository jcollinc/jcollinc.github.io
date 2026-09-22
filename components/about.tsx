import { about } from '@/content/site';
import { SkillsGrid } from '@/components/skills-grid';
import { WindowPanel } from '@/components/desktop';
import { WindowDetails } from '@/components/window-details';

export function About() {
  return (
    <WindowPanel id="about" title={about.title} className="about-section" expandedContent={<WindowDetails id="about" />}>
      <div className="about-copy">
        <div className="about-story">
          {about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <SkillsGrid />
      </div>
    </WindowPanel>
  );
}
