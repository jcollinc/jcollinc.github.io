import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { WindowId } from '@/lib/desktop';

export type ExpandedWindowId = Exclude<WindowId, 'majalabs'>;

// Runs on the server (at build time for the exported site).
// Keep editable prose in content/windows/*.md, not in this loader.
export function readWindowCopy(id: ExpandedWindowId) {
  const filename = `content/windows/${id}.md`;
  const [title, ...lines] = readFileSync(join(process.cwd(), filename), 'utf8').trim().split(/\r?\n/);

  if (!/^#\s+\S/.test(title)) {
    throw new Error(`${filename}: start the file with "# Your heading", followed by a blank line and your text.`);
  }

  return { heading: title.replace(/^#\s+/, '').trim(), body: lines.join('\n').trim() };
}
