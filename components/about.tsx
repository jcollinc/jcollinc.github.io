import { about } from '@/content/site';

export function About() {
  const nameMatch = about.title.match(/Jon-Collin/);
  const beforeName = nameMatch ? about.title.slice(0, nameMatch.index) : about.title;
  const name = nameMatch ? 'Jon-Collin' : '';

  return (
    <div className="grid gap-10 sm:grid-cols-12">
      <div className="sm:col-span-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-accent">§ 01</span> — About
        </p>
        <div className="mt-3 h-px bg-foreground/15" />
        <h2 className="mt-6 font-display text-4xl font-normal leading-[1.02] tracking-tightest text-foreground sm:text-5xl">
          {beforeName.trim()}
          {name ? <span className="block italic text-accent">{name}</span> : null}
        </h2>
      </div>
      <div className="sm:col-span-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {about.body.map((paragraph, index) => (
          <p key={index} className="first:text-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
