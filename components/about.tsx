import { about } from '@/content/site';

export function About() {
  const nameMatch = about.title.match(/Jon-Collin/);
  const beforeName = nameMatch ? about.title.slice(0, nameMatch.index) : about.title;
  const name = nameMatch ? 'Jon-Collin' : '';

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="mono-label">
          <span className="text-accent">№ 01</span> — About
        </p>
        <div className="mt-3 rule" />
        <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-5xl">
          {beforeName.trim()}
          {name ? <span className="block text-accent">{name}</span> : null}
        </h2>
      </div>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-8">
        {about.body.map((paragraph, index) => (
          <p key={index} className={index === 0 ? 'dropcap text-foreground/90' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
