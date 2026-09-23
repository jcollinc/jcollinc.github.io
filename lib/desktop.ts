export const WINDOW_IDS = ['intro', 'paytogether', 'myfpl', 'majalabs', 'about', 'experience', 'education', 'writing', 'footer'] as const;
export type WindowId = typeof WINDOW_IDS[number];
export type WindowState = { status: 'open' | 'minimized' | 'closed'; maximized: boolean };
export type DesktopState = Record<WindowId, WindowState>;
export type DesktopAction =
  | { type: 'minimize' | 'close' | 'maximize' | 'restore'; id: WindowId }
  | { type: 'open' | 'navigate'; ids: WindowId[] }
  | { type: 'reset' };

export const WINDOW_LABELS: Record<WindowId, string> = {
  intro: 'Introduction', paytogether: 'PayTogether', myfpl: 'myFPL', majalabs: 'MajaLabs', about: 'About',
  experience: 'Experience', education: 'Education', writing: 'Writing', footer: 'More to come!'
};

export const WINDOW_GROUPS: WindowId[][] = [['paytogether', 'myfpl'], ['experience', 'education']];
export const ANCHOR_WINDOWS: Record<string, WindowId[]> = {
  top: ['intro'], intro: ['intro'], projects: ['paytogether', 'myfpl', 'majalabs'], majalabs: ['majalabs'], about: ['about'],
  experience: ['experience', 'education'], education: ['education'], writing: ['writing'], footer: ['footer']
};

export function createDesktop(): DesktopState {
  return Object.fromEntries(WINDOW_IDS.map(id => [id, { status: 'open', maximized: false }])) as DesktopState;
}

export function desktopReducer(state: DesktopState, action: DesktopAction): DesktopState {
  if (action.type === 'reset') return createDesktop();
  const next = Object.fromEntries(WINDOW_IDS.map(id => [id, { ...state[id] }])) as DesktopState;
  if ('ids' in action) {
    // Taskbar switches and navigation return the current foreground window to the page.
    for (const id of WINDOW_IDS) {
      if (next[id].status === 'open') next[id].maximized = false;
    }
    for (const id of action.ids) {
      next[id].status = 'open';
      if (action.type === 'navigate') next[id].maximized = false;
    }
    // Multi-window opens must never create multiple modal views.
    let foundMaximized = false;
    for (const id of WINDOW_IDS) {
      if (next[id].status !== 'open' || !next[id].maximized) continue;
      if (foundMaximized) next[id].maximized = false;
      foundMaximized = true;
    }
    return next;
  }
  const current = next[action.id];
  if (action.type === 'close') {
    current.status = 'closed';
    current.maximized = false;
  } else if (action.type === 'minimize') {
    current.status = 'minimized';
  } else if (action.type === 'restore') {
    current.status = 'open';
    current.maximized = false;
  } else {
    for (const id of WINDOW_IDS) if (next[id].status === 'open') next[id].maximized = false;
    current.status = 'open';
    current.maximized = true;
  }
  return next;
}

export function windowSpan(state: DesktopState, id: WindowId): number {
  if (state[id].status === 'closed') return 2;
  const group = WINDOW_GROUPS.find(ids => ids.includes(id));
  if (!group) return 12;
  const open = group.filter(key => state[key].status === 'open').length;
  const closed = group.filter(key => state[key].status === 'closed').length;
  return open ? (12 - closed * 2) / open : 2;
}
