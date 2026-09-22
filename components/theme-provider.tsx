'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
const storageKey = 'theme';
const themeEvent = 'portfolio-theme-change';
let sessionChoice: Theme | undefined;

function readTheme(): Theme {
  if (sessionChoice) return sessionChoice;
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* Browser preferences still work when storage is unavailable. */ }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

function subscribe(onChange: () => void) {
  const preference = window.matchMedia?.('(prefers-color-scheme: light)');
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) {
      sessionChoice = undefined;
      onChange();
    }
  };
  preference?.addEventListener('change', onChange);
  window.addEventListener('storage', onStorage);
  window.addEventListener(themeEvent, onChange);
  return () => {
    preference?.removeEventListener('change', onChange);
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(themeEvent, onChange);
  };
}

function setTheme(theme: Theme) {
  // Keep the toggle usable for this visit even if storage is blocked.
  sessionChoice = theme;
  try { window.localStorage.setItem(storageKey, theme); } catch { /* Session choice is retained. */ }
  applyTheme(theme);
  window.dispatchEvent(new Event(themeEvent));
}

const ThemeContext = createContext({ resolvedTheme: 'dark' as Theme, setTheme });
export const useTheme = () => useContext(ThemeContext);

// Apply the same precedence before the content paints, without saving an
// automatic browser preference as though the visitor explicitly selected it.
const initialThemeScript = `(() => {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch {}
  const theme = saved === 'light' || saved === 'dark' ? saved
    : window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
})();`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const resolvedTheme = useSyncExternalStore(subscribe, readTheme, () => 'dark' as Theme);
  useEffect(() => { applyTheme(readTheme()); }, [resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: initialThemeScript }} />
      {children}
    </ThemeContext.Provider>
  );
}
