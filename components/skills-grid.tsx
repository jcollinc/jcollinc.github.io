import { skills } from '@/content/site';

export function SkillsGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="space-y-4 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground">Toolkit</h3>
        <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
          {skills.toolkit.map((tool) => (
            <li key={tool} className="rounded-full border border-border px-3 py-2 text-center">
              {tool}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground">Guiding principles</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {skills.values.map((value) => (
            <li key={value} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-accent/80" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
