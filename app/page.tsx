import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { About } from '@/components/about';
import { Timeline } from '@/components/timeline';
import { ProjectCard } from '@/components/project-card';
import { WritingCard } from '@/components/writing-card';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { education, experience, projects, writing } from '@/content/site';

export default function Home() {
  const applications = projects.filter((project) => project.name !== 'MajaLabs');
  const studio = projects.find((project) => project.name === 'MajaLabs');

  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" className="page-width" tabIndex={-1}>
        <Hero />
        <Section id="projects" title="Projects I don't mind sharing" description="Not all of them, alas!">
          <div className="projects-list">
            {applications.map((project) => <ProjectCard key={project.name} {...project} />)}
          </div>
          {studio ? (
            <aside className="studio-note" aria-label="My studio">
              <a className="text-link" href={studio.demo} target="_blank" rel="noreferrer">{studio.name} <span aria-hidden="true">↗</span></a>
              <p>{studio.description}</p>
            </aside>
          ) : null}
        </Section>
        <About />
        <Section id="experience" title="Experience and education" description="A snapshot of experiences that have led me here, to this very moment.">
          <div className="career-columns">
            <div>
              <h3>Experience</h3>
              <Timeline items={experience.map((item) => ({ title: item.company, subtitle: item.role }))} />
            </div>
            <div>
              <h3>Education</h3>
              <Timeline items={education.map((item) => ({ title: item.institution, subtitle: item.program }))} />
            </div>
          </div>
        </Section>
        <Section id="writing" title="Notes on things I've found interesting" description="I don't write very often, but when I do...">
          <div className="writing-list">
            {writing.map((entry) => <WritingCard key={entry.url} {...entry} />)}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
