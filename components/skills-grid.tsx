import { skills } from '@/content/site';

export function SkillsGrid() {
  return (
    <div className="grid gap-10 border-t border-foreground/15 pt-10 sm:grid-cols-12">
      <div className="sm:col-span-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Toolkit</p>
      </div>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm text-foreground/80 sm:col-span-8 sm:grid-cols-3">
        {skills.toolkit.map((tool) => (
          <li key={tool} className="transition hover:text-accent">
            {tool}
          </li>
        ))}
      </ul>

      <div className="sm:col-span-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Principles</p>
      </div>
      <ul className="space-y-3 sm:col-span-8">
        {skills.values.map((value, i) => (
          <li key={value} className="flex items-start gap-4 text-sm text-foreground/85 sm:text-base">
            <span className="mt-0.5 font-mono text-xs text-muted-foreground">0{i + 1}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
