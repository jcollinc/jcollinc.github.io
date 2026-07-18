import { Fragment } from 'react';
import { skills } from '@/content/site';

const pops = ['text-accent', 'text-[hsl(var(--pop-blue))]', 'text-[hsl(var(--pop-green))]', 'text-[hsl(var(--pop-gold))]'];

export function SkillsGrid() {
  return (
    <div className="grid gap-x-10 gap-y-10 border-t border-foreground/15 pt-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="mono-label">Toolkit</p>
      </div>
      <p className="font-mono text-sm leading-loose text-foreground/80 lg:col-span-8">
        {skills.toolkit.map((tool, i) => (
          <Fragment key={tool}>
            {i > 0 && <span className="mx-2 text-foreground/25">/</span>}
            <span className="transition hover:text-accent">{tool}</span>
          </Fragment>
        ))}
      </p>

      <div className="lg:col-span-4">
        <p className="mono-label">Principles</p>
      </div>
      <ul className="space-y-3.5 lg:col-span-8">
        {skills.values.map((value, i) => (
          <li key={value} className="flex items-baseline gap-4">
            <span className={`font-mono text-xs ${pops[i % pops.length]}`}>0{i + 1}</span>
            <span className="text-base leading-relaxed text-foreground/85 sm:text-lg">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
