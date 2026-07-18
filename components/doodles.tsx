import { cn } from '@/lib/utils';

/* hand-drawn odds and ends — the stuff a template wouldn't have */

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      className={cn('pointer-events-none', className)}
      viewBox="0 0 120 12"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M2 8c12-6 24 4 38-2s26 3 38-3 26 4 40-1"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* a loose arrow, drawn in one stroke; flip with scale-x-[-1] / rotate as needed */
export function HandArrow({ className }: { className?: string }) {
  return (
    <svg className={cn('pointer-events-none', className)} viewBox="0 0 56 44" fill="none" aria-hidden>
      <path
        d="M52 40C36 38 16 30 8 8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M3 15L8 5l10 3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* a rough circle, for ringing something on the page */
export function HandCircle({ className }: { className?: string }) {
  return (
    <svg
      className={cn('pointer-events-none', className)}
      viewBox="0 0 140 60"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M115 10C90 2 20 4 9 26c-9 19 24 30 62 28 39-2 66-14 60-30-4-12-27-17-44-17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Tape({ className }: { className?: string }) {
  return <span className={cn('tape', className)} aria-hidden />;
}
