import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { about, education, experience, hero, links, meta, projects, skills, writing } from '@/content/site';

const projectFlavors: Record<string, string> = {
  MajaLabs: 'hsl(var(--gold))',
  PayTogether: 'hsl(var(--blue))',
  myFPL: 'hsl(var(--green))'
};

function Window({
  id,
  title,
  titleColor,
  className,
  children
}: {
  id?: string;
  title: string;
  titleColor?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`window scroll-mt-6 ${className ?? ''}`}>
      <div className="window-title" style={titleColor ? { backgroundColor: titleColor } : undefined}>
        <span>{title}</span>
        <span className="window-controls" aria-hidden>
          – □ ✕
        </span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </section>
  );
}

const bulletColors = ['hsl(var(--green))', 'hsl(var(--blue))', 'hsl(var(--gold))'];

export default function Home() {
  return (
    <>
      <div className="construction" aria-hidden />
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6">
        {/* ======= masthead ======= */}
        <header className="text-center">
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-ink))]">
            perpetually under construction 🚧
          </p>
          <h1 className="wordart mt-3 text-5xl sm:text-6xl">{meta.name.toUpperCase()}</h1>
          <p className="mono mt-3 text-xs uppercase tracking-[0.18em] text-[hsl(var(--muted-ink))]">
            {meta.role}
          </p>

          <nav className="mono mt-6 text-sm">
            [ <a href="#about">about</a> | <a href="#career">career</a> | <a href="#projects">projects</a> |{' '}
            <a href="#writing">writing</a> | <a href={links.resume}>résumé</a> |{' '}
            <a href={`mailto:${links.email}`}>email</a> ]
          </nav>

          <div className="mt-6">
            <span className="mono mr-2 align-middle text-xs">you are visitor №</span>
            <span className="counter align-middle">
              {['0', '0', '4', '2', '0', '7'].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </span>
            <span className="mono ml-2 align-middle text-[11px] text-[hsl(var(--muted-ink))]">
              since the dial-up days
            </span>
          </div>
        </header>

        {/* ======= marquee ======= */}
        <div className="marquee mt-8 border-y-[1.5px] border-[hsl(var(--ink))] bg-[hsl(var(--surface))] py-1.5">
          <span className="mono text-xs">
            welcome to jon-chinje.com ··· {meta.summary.toLowerCase()} ··· {hero.subheadline.toLowerCase()} ···
            sign the guestbook before you go ✍ ···
          </span>
        </div>

        <main className="mt-10 flex flex-col gap-10">
          {/* welcome */}
          <Window title="welcome.txt">
            <h2 className="cursor text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {hero.headline.replace('™', '')}
              <span className="mono align-top text-sm font-normal text-[hsl(var(--muted-ink))]">™</span>
            </h2>
            <ul className="mt-5 space-y-2.5">
              {hero.bullets.map((bullet, i) => (
                <li key={bullet} className="flex items-start gap-3 text-[15px] leading-relaxed">
                  <span
                    className="mt-[7px] h-2 w-2 flex-shrink-0"
                    style={{ backgroundColor: bulletColors[i % bulletColors.length] }}
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label.toLowerCase()} ↗
              </a>
              <a className="btn" href={hero.ctaSecondary.href}>
                {hero.ctaSecondary.label.toLowerCase()} →
              </a>
            </div>
          </Window>

          {/* about */}
          <Window id="about" title="about_me.txt">
            <div className="flex flex-col gap-6 sm:flex-row">
              <figure className="shrink-0 text-center">
                <div className="border-[1.5px] border-[hsl(var(--ink))] p-1 shadow-[3px_3px_0_hsl(var(--ink)/0.85)]">
                  <Image src={hero.heroImage} alt={meta.name} width={170} height={212} className="block" priority />
                </div>
                <figcaption className="mono mt-2 text-[11px] text-[hsl(var(--muted-ink))]">me, IRL</figcaption>
              </figure>
              <div className="space-y-4 text-[15px] leading-relaxed">
                {about.body.map((p, i) => (
                  <p key={i} className={i > 0 ? 'text-[hsl(var(--muted-ink))]' : ''}>
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-7 border-t border-dotted border-[hsl(var(--ink)/0.35)] pt-6">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--muted-ink))]">toolkit</p>
              <p className="mt-2.5 flex flex-wrap gap-1.5">
                {skills.toolkit.map((tool) => (
                  <span key={tool} className="tag-chip">
                    {tool}
                  </span>
                ))}
              </p>
              <p className="mono mt-6 text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--muted-ink))]">
                principles
              </p>
              <ul className="mt-2.5 space-y-2">
                {skills.values.map((v, i) => (
                  <li key={v} className="flex items-baseline gap-3 text-[15px]">
                    <span className="mono text-xs" style={{ color: bulletColors[i % bulletColors.length] }}>
                      0{i + 1}
                    </span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Window>

          {/* career */}
          <Window id="career" title="career.log">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="mono text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--muted-ink))]">
                  experience
                </p>
                <div className="mt-3">
                  {experience.map((job) => (
                    <div key={job.company} className="log-row">
                      <span className="text-[15px] font-semibold">{job.role}</span>
                      <span className="mono ml-auto text-right text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--muted-ink))]">
                        {job.company}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mono text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--muted-ink))]">
                  education
                </p>
                <div className="mt-3">
                  {education.map((school) => (
                    <div key={school.institution} className="log-row">
                      <span className="text-[15px] font-semibold">{school.institution}</span>
                      <span className="mono ml-auto text-right text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--muted-ink))]">
                        {school.program}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Window>

          {/* projects */}
          <div id="projects" className="scroll-mt-6 space-y-10">
            {projects.map((project) => {
              const flavor = projectFlavors[project.name] ?? 'hsl(var(--ink))';
              const url = project.demo ?? '#';
              const displayUrl = project.demo?.replace(/^https?:\/\//, '') ?? '';
              return (
                <Window key={project.name} title={`${project.name.toLowerCase()}.exe`} titleColor={flavor}>
                  <div className="-m-5 sm:-m-7">
                    <div className="browser-bar">
                      <span aria-hidden>◀ ▶ ⟳</span>
                      <Link href={url} target="_blank" rel="noreferrer" className="browser-address">
                        https://{displayUrl}
                      </Link>
                    </div>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="block border-b-[1.5px] border-[hsl(var(--ink))] bg-white"
                    >
                      <div className="relative h-64 sm:h-80">
                        <Image src={project.image} alt={project.name} fill className="object-contain p-4" />
                      </div>
                    </Link>
                    <div className="p-5 sm:p-7">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
                        <p className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="tag-chip">
                              {tag}
                            </span>
                          ))}
                        </p>
                      </div>
                      <p className="mt-3 text-[15px] leading-relaxed">{project.description}</p>
                      <p className="mt-2 text-[15px] leading-relaxed text-[hsl(var(--muted-ink))]">
                        {project.impact}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.demo && (
                          <a className="btn" href={project.demo} target="_blank" rel="noreferrer">
                            {(project.demoLabel ?? 'visit').toLowerCase()} ↗
                          </a>
                        )}
                        {project.appStore && (
                          <a className="btn" href={project.appStore} target="_blank" rel="noreferrer">
                            app store
                          </a>
                        )}
                        {project.googlePlay && (
                          <a className="btn" href={project.googlePlay} target="_blank" rel="noreferrer">
                            play store
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Window>
              );
            })}
          </div>

          {/* writing */}
          <Window id="writing" title="musings.txt">
            <ul className="space-y-5">
              {writing.map((entry) => (
                <li key={entry.url}>
                  <p>
                    <a href={entry.url} target="_blank" rel="noreferrer" className="text-[15px] font-semibold">
                      {entry.title}
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-ink))]">
                    {entry.description}{' '}
                    <span className="mono text-[11px] uppercase tracking-[0.12em]">· {entry.date}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Window>

          {/* guestbook */}
          <Window title="guestbook.exe">
            <p className="text-[15px] leading-relaxed">
              Like the page? Tell me why. Hate it? Definitely tell me why. Either way, it&apos;s nice to hear
              from people.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="btn" href={`mailto:${links.email}?subject=guestbook`}>
                ✍ sign the guestbook
              </a>
              <a className="btn" href={links.github} target="_blank" rel="noreferrer">
                github
              </a>
              <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">
                linkedin
              </a>
              <a className="btn" href={links.medium} target="_blank" rel="noreferrer">
                medium
              </a>
            </div>
          </Window>

          {/* webring */}
          <div className="window mx-auto w-fit max-w-full">
            <div className="px-8 py-4 text-center">
              <p className="mono text-[11px] uppercase tracking-[0.18em] text-[hsl(var(--muted-ink))]">
                the majalabs webring
              </p>
              <p className="mono mt-2 text-sm">
                [ <a href="https://paytogether.io" target="_blank" rel="noreferrer">&lt;&lt; prev</a> |{' '}
                <a href="https://majalabs.net" target="_blank" rel="noreferrer">random</a> |{' '}
                <a href="https://myfpl.co" target="_blank" rel="noreferrer">next &gt;&gt;</a> ]
              </p>
            </div>
          </div>
        </main>

        {/* ======= badges + footer ======= */}
        <footer className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="badge88">
              <span>netscape</span>
              <span>ready</span>
            </span>
            <span className="badge88">
              <span>800×600</span>
              <span>friendly</span>
            </span>
            <span className="badge88">
              <span>y2k</span>
              <span>compliant ✓</span>
            </span>
            <span className="badge88">
              <span>made with</span>
              <span>notepad.exe*</span>
            </span>
            <a className="badge88" href={links.github} target="_blank" rel="noreferrer">
              <span>view source</span>
              <span>github</span>
            </a>
          </div>
          <div className="mono mt-8 space-y-1.5 text-center text-[11px] text-[hsl(var(--muted-ink))]">
            <p>© 2026 {meta.name.toLowerCase()} · best viewed at any resolution</p>
            <p>
              thanks for visiting — <span className="blink">come back soon</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
