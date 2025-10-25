import { about } from '@/content/site';

export function About() {
  return (
    <div className="grid gap-8 rounded-3xl border border-border/60 bg-card/70 p-8 shadow-soft sm:grid-cols-2">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">About</p>
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{about.title}</h2>
      </div>
      <div className="space-y-4 text-base text-muted-foreground">
        {about.body.map((paragraph, index) => (
          <p
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: paragraph }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
