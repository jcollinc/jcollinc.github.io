import { Fragment } from 'react';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { About } from '@/components/about';
import { Timeline } from '@/components/timeline';
import { ProjectCard } from '@/components/project-card';
import { WritingCard } from '@/components/writing-card';
import { SkillsGrid } from '@/components/skills-grid';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { education, experience, projects, writing } from '@/content/site';

export default function Home() {
  const experienceTimeline = experience.map((item) => ({
    title: item.role,
    subtitle: item.company
  }));

  const educationTimeline = education.map((item) => ({
    title: item.institution,
    subtitle: item.program
  }));

  return (
    <Fragment>
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10">
        <Hero />
        <div id="about" className="scroll-mt-28 space-y-12">
          <About />
          <SkillsGrid />
        </div>
        <Section
          id="experience"
          eyebrow="Journey"
          title="Experience and education"
          description="A snapshot of experiences that have led me here, to this very moment." 
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Experience</h3>
              <Timeline items={experienceTimeline} />
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
              <Timeline items={educationTimeline} />
            </div>
          </div>
        </Section>
        <Section
          id="projects"
          eyebrow="Selected Work"
          title="Projects I don't mind sharing"
          description="Very much not all of them, alas."
        >
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </Section>
        <Section
          id="writing"
          eyebrow="Writing"
          title="Notes on things I've found interesting"
          description="I don't write very often, but when I do..."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {writing.map((entry) => (
              <WritingCard key={entry.url} {...entry} />
            ))}
          </div>
        </Section>
      </main>
      <SiteFooter />
    </Fragment>
  );
}
