# Portfolio design

The site should feel like meeting Jon: direct, curious, particular about details,
and pleased to show what he has made. The projects and his own words provide the
personality. Visitors should quickly find the work, résumé, and contact details.

## Visual decisions

- White and ink with a single blue accent. Keep this approved palette. Blue
  fills the portrait caption and contact section; a faint blue surface groups
  the biography. Dark mode uses the same hierarchy and a lighter blue.
- Lato, with normal sentence case and three weights. Body text is 18–22px;
  secondary text is at least 14px. Give headings, project titles, and the portrait
  enough scale to hold the page without large stretches of empty space.
- Large, uncropped project previews sit side by side on desktop, with their
  descriptions directly underneath. Stack them on phones. The studio is
  supporting context for the applications, rather than a competing feature.
- Keep related content close. Section gaps are 56–64px; internal gaps are smaller.
  The larger portrait, paired projects, tinted biography, and solid blue contact
  section give the page distinct visual anchors using the same palette.
- Use space to group related content, and rules only to separate sections or
  entries. No section numbers, technology pills, decorative cards, or grain.
- Keep Jon's portrait and his approved conversational writing. Use his name as
  the portrait caption instead of inventing personal copy.
- Motion is limited to native anchor scrolling, disabled for reduced motion.
  Links remain recognizable without hover. No moving imagery or reveal effects.

Colors, spacing, and breakpoints live in `app/globals.css`. Project and profile
facts remain in `content/site.ts`. Do not add metrics or outcome claims without
evidence. Keep the pre-existing writing-description edit intact.

## Content constraints

Jon has personally approved and iterated on the copy. Preserve the exact hero,
section headings and subtext, biography, and project descriptions during visual
redesigns. Content can be omitted when a structural change calls for it, but do
not rewrite it for tone without asking. The three-item hero list is retired.

Do not add a location to the public profile or infer one from old drafts or Git
history. No location is currently approved for display.

## Research behind the direction

- [Paul Bakaus / Impeccable: Slop](https://impeccable.style/slop/)
  Treat familiar patterns as prompts for judgment, not a mechanical blacklist.
  Removing a gradient is not enough if the result is another interchangeable
  editorial template.
- [Therese Fessenden / Nielsen Norman Group: Three Pillars of User Delight](https://www.nngroup.com/articles/pillars-user-delight/)
  Appearance, ease of use, and personal connection all contribute. Apply this by
  making the work readable, the navigation straightforward, and contact easy.
- [Josh W. Comeau: A Million Little Secrets](https://www.joshwcomeau.com/blog/whimsical-animations/)
  Generic effects lose their charm through repetition. This portfolio does not
  need a borrowed animation to communicate enthusiasm.
- [Maggie Appleton: A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history)
  A personal website can reflect its author's particular interests and voice.
  Keep the approved wording and personal observations.

## Review

Check desktop and narrow mobile layouts in light and dark themes, keyboard
focus, anchor navigation, the email-copy feedback, and reduced-motion behavior.
Keep this as a local design for review until publishing is explicitly approved.
