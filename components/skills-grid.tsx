import { skills } from '@/content/site';

export function SkillsGrid() {
  return (
    <div className="working-notes">
      <div>
        <h3>Toolkit</h3>
        <p>{skills.toolkit.join(', ')}.</p>
      </div>
      <div>
        <h3>Principles</h3>
        <ul>{skills.values.map((value) => <li key={value}>{value}</li>)}</ul>
      </div>
    </div>
  );
}
