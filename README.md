Built with Next.js, TypeScript, and Tailwind CSS.

## Editing text

Expanded window copy lives in **`content/windows/`**, one Markdown file per
window. Edit these files directly; no arrays, objects, or quoted strings needed.

| Window | File |
| --- | --- |
| Hero | [intro.md](content/windows/intro.md) |
| PayTogether | [paytogether.md](content/windows/paytogether.md) |
| myFPL | [myfpl.md](content/windows/myfpl.md) |
| About | [about.md](content/windows/about.md) |
| Experience | [experience.md](content/windows/experience.md) |
| Education | [education.md](content/windows/education.md) |
| Writing | [writing.md](content/windows/writing.md) |
| Footer | [footer.md](content/windows/footer.md) |

The first line is the title. Leave a blank line between paragraphs. Use `*italics*`,
`**bold**`, and `[link text](https://example.com)` for inline formatting:

```md
# Your expanded-window heading

Your first paragraph, with an *italic word* if you want one.

Another paragraph, with a [link](https://example.com) in the middle.
```

Delete a paragraph by deleting its text. To join paragraphs, remove the blank
line between them. Keep the filename and the first `# Heading` line.

Compact copy (including the regular About window's `about.body`) still lives in
[content/site.ts](content/site.ts). Those paragraph lists contain plain strings,
one per paragraph.

Run `npm run dev` to preview edits; save and refresh the browser after changing a
Markdown file. A static `out/` preview needs `npm run build` to pick up changes.
