import Image from 'next/image';
import Link from 'next/link';
import { about, education, experience, hero, links, meta, projects, skills, writing } from '@/content/site';

const projectColors: Record<string, string> = {
  MajaLabs: '#cc6600',
  PayTogether: '#0000cc',
  myFPL: '#008800'
};

function RainbowHr() {
  return <div className="rainbow-hr my-4" aria-hidden />;
}

function SectionHeader({ children }: { children: string }) {
  return <div className="navbar-header mt-6 text-sm">☆ {children} ☆</div>;
}

function BackToTop() {
  return (
    <p className="mt-2 text-right text-xs">
      <a href="#top">^ Back to Top ^</a>
    </p>
  );
}

export default function Home() {
  return (
    <div id="top" className="px-2 py-4">
      {/* ======= HEADER ======= */}
      <div className="mx-auto w-[780px] max-w-full">
        <div className="construction" aria-hidden />
        <div className="py-4 text-center">
          <p className="t-comic text-sm">★彡 Welcome to my corner of the World Wide Web 彡★</p>
          <h1 className="wordart py-2 text-5xl sm:text-6xl">JON-COLLIN&apos;S HOMEPAGE</h1>
          <p className="t-comic text-sm font-bold text-red-700">
            <span className="blink">🚧</span> This site is UNDER CONSTRUCTION (and always will be){' '}
            <span className="blink">🚧</span>
          </p>
        </div>
        <div className="construction" aria-hidden />

        {/* marquee */}
        <div className="marquee mt-2 border-2 border-black bg-black py-1">
          <span className="t-courier text-sm font-bold text-lime-400">
            *** Thanks for stopping by!!! *** I&apos;m {meta.name}, a {meta.role} from {meta.location} ***{' '}
            {hero.subheadline} *** Don&apos;t forget to sign my guestbook before you go!!! *** This page is
            Y2K compliant ***
          </span>
        </div>

        {/* nav + counter */}
        <div className="mt-3 text-center">
          <p className="text-sm font-bold">
            [ <a href="#about">About Me</a> | <a href="#work">My Jobs</a> | <a href="#projects">Cool Projects</a> |{' '}
            <a href="#writing">My Essays</a> | <a href={links.resume}>My Résumé (.pdf)</a> |{' '}
            <a href={`mailto:${links.email}`}>E-Mail Me!</a> ]
          </p>
          <div className="mt-3">
            <span className="mr-2 align-middle text-sm">You are visitor №:</span>
            <span className="counter align-middle">
              {['0', '0', '4', '2', '0', '7'].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </span>
            <span className="ml-2 align-middle text-xs">(since December 1999)</span>
          </div>
        </div>

        {/* ======= MAIN CONTENT BOX ======= */}
        <div className="bevel-out mt-4 p-1">
          <div className="border border-black bg-white p-4">
            {/* ABOUT */}
            <div id="about">
              <SectionHeader>ABOUT ME</SectionHeader>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row">
                <div className="shrink-0 text-center">
                  <div className="bevel-in inline-block p-1">
                    <Image
                      src={hero.heroImage}
                      alt={meta.name}
                      width={160}
                      height={200}
                      className="block"
                      priority
                    />
                  </div>
                  <p className="t-comic mt-1 text-xs">^ me, IRL</p>
                  <p className="t-courier mt-2 text-xs">
                    A/S/L: yes/yes/
                    <br />
                    Queens, NY
                  </p>
                </div>
                <div className="text-[15px] leading-snug">
                  {about.body.map((p, i) => (
                    <p key={i} className="mb-3">
                      {p}
                    </p>
                  ))}
                  <p className="t-comic text-sm font-bold text-blue-800">
                    Fun fact: {hero.bullets[2]} 😎
                  </p>
                </div>
              </div>

              <RainbowHr />

              {/* skillz */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <p className="t-arial text-sm font-bold text-[#000080]">💾 My Computer Skillz:</p>
                  <p className="t-courier mt-1 text-sm leading-relaxed">
                    {skills.toolkit.map((tool) => (
                      <span key={tool} className="mr-1 inline-block whitespace-nowrap">
                        [{tool}]
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="t-arial text-sm font-bold text-[#000080]">✨ Things I Believe In:</p>
                  <ul className="mt-1 list-none text-sm">
                    {skills.values.map((v) => (
                      <li key={v}>⭐ {v}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <BackToTop />
            </div>

            {/* WORK */}
            <div id="work">
              <SectionHeader>MY JOBS &amp; SKOOL</SectionHeader>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row">
                <table className="retro-table flex-1 text-sm">
                  <tbody>
                    <tr>
                      <th colSpan={2}>💼 Places I&apos;ve Worked</th>
                    </tr>
                    {experience.map((job) => (
                      <tr key={job.company}>
                        <td className="font-bold">{job.role}</td>
                        <td>{job.company}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="retro-table flex-1 text-sm">
                  <tbody>
                    <tr>
                      <th colSpan={2}>🎓 Where I Learned Stuff</th>
                    </tr>
                    {education.map((school) => (
                      <tr key={school.institution}>
                        <td className="font-bold">{school.institution}</td>
                        <td>{school.program}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <BackToTop />
            </div>

            {/* PROJECTS */}
            <div id="projects">
              <SectionHeader>MY COOL PROJECTS!!</SectionHeader>
              <p className="t-comic mt-2 text-center text-sm">
                (i made all of these myself. click the pictures!!)
              </p>
              {projects.map((project, i) => (
                <div key={project.name}>
                  <div className="mt-3 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                    <div className="bevel-in shrink-0 p-1">
                      <Link href={project.demo ?? '#'} target="_blank" rel="noreferrer">
                        <Image src={project.image} alt={project.name} width={260} height={195} className="block" />
                      </Link>
                    </div>
                    <div className="text-sm">
                      <p className="t-comic text-xl font-bold" style={{ color: projectColors[project.name] ?? '#cc0000' }}>
                        {project.name}
                        {i === 0 && (
                          <span className="blink ml-2 align-middle text-sm text-red-600">
                            ★NEW!★
                          </span>
                        )}
                      </p>
                      <p className="mt-1">{project.description}</p>
                      <p className="mt-1">{project.impact}</p>
                      <p className="t-courier mt-1 text-xs">
                        Powered by: {project.tags.join(' + ')}
                      </p>
                      <p className="mt-2 space-x-2">
                        {project.demo && (
                          <a className="btn95" href={project.demo} target="_blank" rel="noreferrer">
                            {project.demoLabel ?? 'Visit'}!!
                          </a>
                        )}
                        {project.appStore && (
                          <a className="btn95" href={project.appStore} target="_blank" rel="noreferrer">
                            📱 App Store
                          </a>
                        )}
                        {project.googlePlay && (
                          <a className="btn95" href={project.googlePlay} target="_blank" rel="noreferrer">
                            🤖 Play Store
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                  {i < projects.length - 1 && <RainbowHr />}
                </div>
              ))}
              <BackToTop />
            </div>

            {/* WRITING */}
            <div id="writing">
              <SectionHeader>MY ESSAYS &amp; MUSINGS</SectionHeader>
              <ul className="mt-3 list-none text-sm">
                {writing.map((entry) => (
                  <li key={entry.url} className="mb-2">
                    📄{' '}
                    <a href={entry.url} target="_blank" rel="noreferrer" className="font-bold">
                      {entry.title}
                    </a>{' '}
                    <span className="text-xs">({entry.date})</span>
                    <br />
                    <span className="ml-6 italic">{entry.description}</span>
                  </li>
                ))}
              </ul>
              <BackToTop />
            </div>

            {/* GUESTBOOK */}
            <SectionHeader>SIGN MY GUESTBOOK!!</SectionHeader>
            <div className="mt-3 text-center">
              <p className="t-comic text-sm">
                Like my page? Hate my page? Let me know!! I read every single one!!
              </p>
              <p className="mt-2">
                <a className="btn95" href={`mailto:${links.email}?subject=RE: your awesome homepage`}>
                  ✍️ Sign Guestbook
                </a>{' '}
                <a className="btn95" href={`mailto:${links.email}`}>
                  <span className="spin-y">📧</span> E-Mail Me!!
                </a>
              </p>
              <p className="t-courier mt-2 text-xs">
                ♪ now playing: jon_guitar_riff.mid [<a href="#top">stop</a>] ♪
              </p>
            </div>
          </div>
        </div>

        {/* ======= WEBRING ======= */}
        <div className="bevel-out mx-auto mt-4 w-fit max-w-full px-6 py-3 text-center">
          <p className="t-arial text-sm font-bold">~ The MajaLabs WebRing ~</p>
          <p className="mt-1 text-sm">
            [ <a href="https://paytogether.io" target="_blank" rel="noreferrer">&lt;&lt; prev</a> |{' '}
            <a href="https://majalabs.net" target="_blank" rel="noreferrer">random</a> |{' '}
            <a href="https://myfpl.co" target="_blank" rel="noreferrer">next &gt;&gt;</a> ]
          </p>
        </div>

        {/* ======= BADGES ======= */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
          <span className="badge88 bg-black text-white">
            <span>NETSCAPE</span>
            <span className="text-lime-400">NOW!</span>
          </span>
          <span className="badge88 bg-[#000080] text-white">
            <span>best viewed at</span>
            <span>800 x 600</span>
          </span>
          <span className="badge88 bevel-out">
            <span>MADE WITH</span>
            <span>NOTEPAD.EXE</span>
          </span>
          <span className="badge88 bg-black text-lime-400">
            <span>Y2K</span>
            <span>COMPLIANT ✓</span>
          </span>
          <span className="badge88 bg-yellow-300">
            <span>VALID</span>
            <span>HTML 4.0!</span>
          </span>
          <a className="badge88 bg-white" href={links.github} target="_blank" rel="noreferrer">
            <span>my code on</span>
            <span>GITHUB</span>
          </a>
        </div>

        {/* ======= FOOTER ======= */}
        <RainbowHr />
        <div className="pb-6 text-center text-xs">
          <p>
            © 1999–2026 {meta.name}. All Rights Reserved. Do NOT steal my HTML!!
          </p>
          <p className="mt-1">
            Last updated: July 18, 2026 · Hand-coded with love in Notepad.exe · Hosted on GeoCities{' '}
            <span className="t-courier">(/SiliconValley/Heights/4207)</span>
          </p>
          <p className="mt-1">
            This page is best experienced in Netscape Navigator 4.0 at 800x600 resolution with your speakers ON.
          </p>
          <p className="t-comic mt-3 text-sm font-bold text-purple-800">~*~ thanx 4 visiting!! come back soon!! ~*~</p>
        </div>
      </div>
    </div>
  );
}
