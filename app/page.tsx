import { Hero } from '@/components/hero';
import { Section } from '@/components/section';
import { About } from '@/components/about';
import { Timeline } from '@/components/timeline';
import { ProjectCard } from '@/components/project-card';
import { WritingCard } from '@/components/writing-card';
import { SkillsGrid } from '@/components/skills-grid';
import { SiteNav } from '@/components/site-nav';
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
    <div className="relative z-[2] mx-auto max-w-7xl px-6 sm:px-10 lg:grid lg:grid-cols-[12.5rem_1fr] lg:px-12">
      <SiteNav />

      <div className="lg:border-l lg:border-foreground/10 lg:pl-12">
        <main className="flex flex-col gap-28 pb-4 sm:gap-32">
          <Hero />

          <div id="about" className="scroll-mt-24 space-y-14">
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
            <div className="grid gap-14 xl:grid-cols-2">
              <div className="space-y-5">
                <p className="mono-label">Experience</p>
                <Timeline items={experienceTimeline} />
              </div>
              <div className="space-y-5">
                <p className="mono-label">Education</p>
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
            <div className="space-y-12">
              {projects.map((project, i) => (
                <ProjectCard key={project.name} index={i + 1} {...project} />
              ))}
            </div>
          </Section>

          <Section
            id="writing"
            index="04"
            eyebrow="Writing"
            title="Notes on things I've found interesting"
            description="I don't write very often, but when I do..."
          >
            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
              {writing.map((entry) => (
                <WritingCard key={entry.url} {...entry} />
              ))}
            </div>
          </Section>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
