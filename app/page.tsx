import { Fragment } from 'react';
import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { About } from '@/components/about';
import { Timeline } from '@/components/timeline';
import { ProjectCard } from '@/components/project-card';
import { WritingCard } from '@/components/writing-card';
import { SkillsGrid } from '@/components/skills-grid';
import { ContactCard } from '@/components/contact-card';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { education, experience, projects, writing } from '@/content/site';

export default function Home() {
  const experienceTimeline = experience.map((item) => ({
    title: item.role,
    subtitle: item.company,
    period: item.end ? `${item.start} – ${item.end}` : `${item.start} – present`,
    details: (
      <ul className="space-y-2">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent/70" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    )
  }));

  const educationTimeline = education.map((item) => ({
    title: item.institution,
    subtitle: item.program,
    period: `${item.start} – ${item.end}`
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
          description="A snapshot of programs and fellowships that sharpened my engineering craft." 
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
          title="Projects that balance craft and impact"
          description="I love working end-to-end: asking better questions, prototyping quickly, and iterating toward polished experiences."
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
          title="Notes on engineering, learning, and community"
          description="Writing keeps my thinking honest. These essays distill what I learn while pairing with teammates, coaching mentees, and shipping features."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {writing.map((entry) => (
              <WritingCard key={entry.url} {...entry} />
            ))}
          </div>
        </Section>
        <ContactCard />
      </main>
      <SiteFooter />
    </Fragment>
  );
}
