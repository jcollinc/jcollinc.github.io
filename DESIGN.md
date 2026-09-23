# Portfolio design

The site should feel like meeting Jon: direct, curious, particular about details,
and pleased to show what he has made. The projects and his own words provide the
personality. Visitors should quickly find the work, résumé, and existing social links.

## Current baseline: Aqua desktop

Jon approved the Aqua desktop and revised maximized copy for publication on
September 22, 2026. Continue future design iterations from this version.
Publishing follows the existing `main` → GitHub Actions → `gh-pages` workflow
at https://jcollinc.github.io/.

The earlier interactive Y2K baseline is preserved in commit `2f19e62` at tag
`archive/portfolio-y2k-2026-09-22`.

The earlier approved blue design is preserved exactly in commit `1c92700` at tag
`archive/portfolio-blue-2026-09-22`.

The first published Aqua version is saved at `archive/portfolio-aqua-2026-09-22`
(`f575a5e`). The retired visual-overhaul exploration is saved at
`archive/portfolio-visual-overhaul-2026-09-22` (`9c4ac14`). These tags replace the
inactive exploration branches. To revisit a snapshot, create a new branch from
its tag; keep the archived tag unchanged.

The blue checkpoint predates Jon's correction about intentionally omitted contact
information. Keep the historical commit intact, but apply the email removals
described below before restoring or publishing that design.

## Visual decisions

### Published Aqua direction

The Aqua design was developed on `explore/portfolio-aqua` from the saved desktop
baseline `2f19e62`. It keeps the approved compact content and window behavior,
with the theme preferences below and additional reading when maximized.

- Silver title bars for every window in light mode and blueberry title bars for
  every window in dark mode. This is CSS theme styling only; focus does not
  change a title bar's color. The permanent toolbar and taskbar retain pearly
  pinstriped chrome. Keyboard focus remains visibly outlined.
- Rounded beveled frames, glossy controls, a segmented navigation bar, and a
  softer blue desktop. Pinstripes belong only to the chrome, not the content.
- Trebuchet MS for display type and Verdana for compact interface labels, with
  the bundled IBM Plex Sans as fallback. Body text and mono details retain Plex.
- The navbar spans the viewport width to match the taskbar and is flush with the
  top at every breakpoint, including while scrolling. Jon approved changing its
  link to "Resumé" to match the hero.
- Both Resumé links open in a new tab, as Jon requested.
- Restore all and the theme toggle share one control-height value: 38px on
  desktop, 44px on mobile. Mobile navigation keeps all four links visible in a
  separate row, with 44px tap targets and a single divider instead of the desktop
  segmented frame. Keep the full name and utility controls together above it.
- The light-theme chrome and button gloss carry into a quieter graphite dark
  theme. Existing functional shortcut icons receive the same material finish.
- Theme precedence is an explicit saved light/dark choice, then the browser's
  preference, then dark when no usable preference signal is available. Automatic
  preferences follow browser changes and are not saved as explicit choices.
  Browsers can report light when no preference was actively chosen; respect
  that signal. Preserve the existing `theme` storage key and support legacy
  `system` values as automatic preferences.

### Saved baseline

- Silver-blue desktop background, pale document surfaces, blue links, and dark
  ink. The dark theme keeps the same hierarchy with graphite surfaces.
- Default to light mode regardless of browser/system preference. The theme
  toggle still remembers a visitor's explicit light or dark choice.
- IBM Plex Sans for content and IBM Plex Mono for compact title bars, dates, and
  technical details. Keep body text comfortably readable at 17–21px.
- Window frames, narrow metallic title bars, and restrained
  bevels refer to early desktop interfaces. Gradients are limited to these
  material surfaces and functional buttons.
- The hero and project previews act as the main windows. Career information and
  writing use simple list views. Headings and their subtext share a left edge.
- Jon rejected the decorative blue monitor, folder, and document icons as AI
  tells. Do not restore stock icons beside names or headings. Keep symbols that
  communicate an action, such as external-link arrows and the theme control.
  Jon subsequently approved functional window controls and named shortcuts for
  closed panels. These icons open content; they are not heading decorations.
- Avoid invented filenames, status text, fake close/minimize buttons, draggable
  windows, decorative drag handles, custom cursors, and decorative animations.
  Preserve normal navigation.
- Keep images free of nested frames. Use natural letter spacing and readable
  secondary text; desktop nostalgia is not a reason to shrink the content.
- Preserve approved copy, images, and existing public links. The email address,
  email CTA, and copy-email control added during the redesign have been removed
  at Jon's request; they were not present in the original rendered site.

Colors, spacing, and breakpoints live in `app/globals.css`. Project and profile
facts remain in `content/site.ts`. Do not add metrics or outcome claims without
evidence. Keep the pre-existing writing-description edit intact.

## Content constraints

Jon has personally approved and iterated on the copy. Preserve the exact hero,
section headings and subtext, biography, and project descriptions during visual
redesigns. Content can be omitted when a structural change calls for it, but do
not rewrite it for tone without asking. The three-item hero list is retired.

Treat this as a reskin with approved light copy edits, not permission to add
content, personal information, or contact methods. The rendered pre-redesign
site at `8db94c0` is the reference for intentional omissions. An unused field
in a content file is not approved public content. Do not restore an email
address, `mailto:` link, contact CTA, or email-copy control from old data or
checkpoints. Existing résumé and social links remain as previously published.

Do not add a location to the public profile or infer one from old drafts or Git
history. No location is currently approved for display.

## Research behind the direction

- [Apple: Apple Unveils Mac OS X (2000)](https://www.apple.com/newsroom/2000/01/05Apple-Unveils-Mac-OS-X/)
  Historical reference for the early Aqua era. Borrow the sense of tangible
  controls and distinct surfaces without attempting a literal OS recreation.
- [Paul Bakaus / Impeccable: Slop](https://impeccable.style/slop/)
  Treat familiar patterns as prompts for judgment, not a mechanical blacklist.
  Removing a gradient is not enough if the result is another interchangeable
  editorial template.
- [Therese Fessenden / Nielsen Norman Group: Three Pillars of User Delight](https://www.nngroup.com/articles/pillars-user-delight/)
  Appearance, ease of use, and personal connection all contribute. Apply this by
  making the work readable and the navigation straightforward.
- [Josh W. Comeau: A Million Little Secrets](https://www.joshwcomeau.com/blog/whimsical-animations/)
  Generic effects lose their charm through repetition. This portfolio does not
  need a borrowed animation to communicate enthusiasm.
- [Maggie Appleton: A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history)
  A personal website can reflect its author's particular interests and voice.
  Keep the approved wording and personal observations.
- [Aurora Harley / Nielsen Norman Group: Icon Usability](https://www.nngroup.com/articles/icon-usability/)
  Icons should communicate useful meaning. Here, the stock symbols beside
  already-clear headings added visual noise, so they have been removed.
- [Kate Moran / Nielsen Norman Group: Flat-Design Best Practices](https://www.nngroup.com/articles/flat-design-best-practices/)
  Distinguish interactive controls from static content. Keep real buttons
  visibly pressable and remove the nonfunctional window grip. Subtle depth
  can remain where it supports the interface.

## Second design review

Applied Impeccable's guidance on nested containers, cramped letter spacing, and
small secondary text: removed the portrait's extra frame and project-image
outlines, relaxed heading tracking, and enlarged navigation, dates, technology
labels, and links. Removed redundant stock icons throughout.

The two project windows remain paired because visitors are comparing two real
products with screenshots. Writing and career entries remain compact lists.
Material gradients are limited to title bars and controls; they are a deliberate
part of this requested desktop direction. Keep the approved long headline and
personal copy intact rather than rewriting them to satisfy a generic checklist.

## Review

Check desktop and narrow mobile layouts in light and dark themes, keyboard
focus, anchor navigation, and reduced-motion behavior. Check that built pages
and client bundles do not expose the removed email address or email links.
Publication of this version was explicitly approved on September 22, 2026.
Future changes still require authorization through the repository workflow.

## Interactive desktop behavior

Jon approved working minimize, maximize, and close controls for all content
panels, including the footer. The nine windows are Introduction, PayTogether,
myFPL, MajaLabs, About, Experience, Education, Writing, and More to come! The header is
the permanent toolbar. The pre-window Y2K source and export are preserved
locally at `/tmp/portfolio-before-windows-20260922`; the blue Git checkpoint
remains unchanged.

- Start every visit with all windows open. Do not persist hidden content.
- Minimize removes the panel from the layout and adds a restore button to the
  bottom taskbar. Only show the taskbar while a window is minimized.
- Close replaces the panel with a named shortcut. A single click, tap, Enter,
  or Space opens it again.
- MajaLabs has a slim, full-width wordmark window beneath the two app windows,
  using its existing description and website link.
- Remaining paired windows expand around a shortcut or fill the space left by
  a minimized sibling. Section labels collapse when every
  window in their group is hidden; closing everything leaves only shortcuts.
- Maximize uses a native modal dialog with a scrollable content area, keyboard
  focus containment, and Escape to restore. Keep the minimized-window taskbar
  usable inside the maximized view. A minimized maximized window restores to
  its maximized size; a closed window reopens at normal size.
- Navigation reopens its target panels, including direct hash links. Restore
  all brings back the original arrangement. Do not add dragging in this pass.
- Anchor navigation aligns the destination below the sticky navbar with a 12px
  gap. Measure the navbar as its height changes across layouts. Use settled panel
  positions for these jumps; ordinary window actions retain reflow animation and
  scroll only as far as needed to reveal their destination.
- Initial hash restoration scrolls to its destination without taking focus.
  Deliberate navigation still moves focus, retaining keyboard focus indicators.
- Rearrangements use a brief transform animation, disabled for reduced motion.
  Content and links remain available without JavaScript; window controls hide.

Validate reducer transitions with `npm test`, then check the full interaction
sequence in a real browser, including touch, keyboard, all-closed/all-minimized
layouts, taskbar switches, and long maximized content. Preserve all approved
copy and the intentional omissions documented above.

## Maximized reading

Jon authorized additional copy for all eight maximized windows. The normal
desktop keeps its approved content. `content/windows/*.md` holds the new
passages separately, and `WindowPanel` renders them only while maximized.
Jon supplied revised wording for these passages and approved Experience unchanged.
Jon's publication approval includes the penny-allocation and myFPL explanations.
Each window has one Markdown file: the first `# Heading` is its expanded title,
and blank lines separate paragraphs. Links use `[text](url)` and italics use
`*text*`. These files are the single source for both editing and review.

Give each addition a purpose: product decisions and concrete examples in the
projects, more personal context in About, working examples in Experience,
the route into software in Education, and a brief aside in the footer.
Use readable line lengths and the existing window styling. On larger screens,
career lists sit beside their commentary; on narrow screens they stack.
The footer's links settle below its short note. Keep contact details and
location omitted. The requested largest-remainder citation in PayTogether is the
only added external link; it appears only in the maximized passage. Jon later
shortened several passages directly in the Markdown files; preserve those edits.
Keep the footer title "You maximized the footer".
