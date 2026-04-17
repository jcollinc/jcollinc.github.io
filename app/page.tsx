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
      <main className="relative z-[2] mx-auto flex max-w-6xl flex-col gap-32 px-6 pb-16 pt-8 sm:px-10 sm:pt-12">
        <Hero />

        <div id="about" className="scroll-mt-28 space-y-16">
          <About />
          <SkillsGrid />
        </div>

        <Section
          id="experience"
          index="02"
          eyebrow="Journey"
          title="Experience and education"
          description="A snapshot of experiences that have led me here, to this very moment."
        >
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
              <Timeline items={experienceTimeline} />
            </div>
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Education</p>
              <Timeline items={educationTimeline} />
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          index="03"
          eyebrow="Selected Work"
          title="Projects I don't mind sharing"
          description="Not all of them, alas!"
        >
          <div>
            {projects.map((project, i) => (
              <ProjectCard key={project.name} index={i + 1} {...project} />
            ))}
            <div className="h-px bg-foreground/15" />
          </div>
        </Section>

        <Section
          id="writing"
          index="04"
          eyebrow="Writing"
          title="Notes on things I've found interesting"
          description="I don't write very often, but when I do..."
        >
          <div>
            {writing.map((entry) => (
              <WritingCard key={entry.url} {...entry} />
            ))}
            <div className="h-px bg-foreground/15" />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </Fragment>
  );
}
