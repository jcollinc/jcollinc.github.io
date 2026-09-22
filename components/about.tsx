import { about } from '@/content/site';
import { SkillsGrid } from '@/components/skills-grid';

export function About() {
  return (
    <section id="about" className="page-section about-section" aria-labelledby="about-title">
      <h2 id="about-title">{about.title}</h2>
      <div className="about-copy">
        <div className="about-story">
          {about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <SkillsGrid />
      </div>
    </section>
  );
}
