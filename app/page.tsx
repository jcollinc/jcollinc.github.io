import { Hero } from '@/components/hero';
import { Desktop, DesktopGroup, WindowPanel } from '@/components/desktop';
import { About } from '@/components/about';
import { Timeline } from '@/components/timeline';
import { ProjectCard } from '@/components/project-card';
import { StudioCard } from '@/components/studio-card';
import { WritingCard } from '@/components/writing-card';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WindowDetails } from '@/components/window-details';
import { education, experience, projects, writing } from '@/content/site';

export default function Home() {
  const applications = projects.filter((project) => project.name !== 'MajaLabs');
  const studio = projects.find((project) => project.name === 'MajaLabs');

  return (
    <Desktop>
      <div id="top" tabIndex={-1}>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main" className="page-width desktop-layout" tabIndex={-1}>
          <Hero />
          <DesktopGroup id="projects" windows={['paytogether', 'myfpl', 'majalabs']} title="Projects I don't mind sharing" description="Not all of them, alas!">
            {applications.map((project) => <ProjectCard key={project.name} windowId={project.name === 'PayTogether' ? 'paytogether' : 'myfpl'} {...project} />)}
            {studio ? <StudioCard description={studio.description} href={studio.demo} /> : null}
          </DesktopGroup>
          <About />
          <DesktopGroup id="experience" windows={['experience', 'education']} title="Experience and education" description="A snapshot of experiences that have led me here, to this very moment.">
            <WindowPanel id="experience" title="Experience" titleAs="h3" className="career-window" expandedContent={<WindowDetails id="experience" />}>
              <Timeline items={experience.map((item) => ({ title: item.company, subtitle: item.role }))} />
            </WindowPanel>
            <WindowPanel id="education" title="Education" titleAs="h3" className="career-window" expandedContent={<WindowDetails id="education" />}>
              <Timeline items={education.map((item) => ({ title: item.institution, subtitle: item.program }))} />
            </WindowPanel>
          </DesktopGroup>
          <WindowPanel id="writing" title="Notes on things I've found interesting" className="writing-window" expandedContent={<WindowDetails id="writing" />}>
            <p className="window-description">{"I don't write very often, but when I do..."}</p>
            <div className="writing-list">
              {writing.map((entry) => <WritingCard key={entry.url} {...entry} />)}
            </div>
          </WindowPanel>
          <SiteFooter />
        </main>
      </div>
    </Desktop>
  );
}
