'use client';

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useReducer, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ANCHOR_WINDOWS, createDesktop, desktopReducer, WINDOW_IDS, WINDOW_LABELS, windowSpan, type DesktopAction, type DesktopState, type WindowId } from '@/lib/desktop';

type FocusRequest = { selector: string; scroll?: boolean };
type DesktopContextValue = {
  state: DesktopState;
  act: (action: DesktopAction, focus?: FocusRequest) => void;
};
const DesktopContext = createContext<DesktopContextValue | null>(null);
function useDesktop() {
  const context = useContext(DesktopContext);
  if (!context) throw new Error('Window components require Desktop');
  return context;
}

function positions() {
  return new Map(Array.from(document.querySelectorAll<HTMLElement>('[data-reflow]')).map(node => {
    const rect = node.getBoundingClientRect();
    return [node.dataset.reflow!, { left: rect.left, top: rect.top + window.scrollY, width: rect.width, height: rect.height }];
  }));
}

export function Desktop({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(desktopReducer, undefined, createDesktop);
  const [announcement, setAnnouncement] = useState('');
  const previous = useRef<ReturnType<typeof positions> | null>(null);
  const focusRequest = useRef<FocusRequest | undefined>(undefined);
  const maximized = WINDOW_IDS.find(id => state[id].status === 'open' && state[id].maximized);
  const hasMinimized = WINDOW_IDS.some(id => state[id].status === 'minimized');

  const act = useCallback((action: DesktopAction, focus?: FocusRequest) => {
    previous.current = document.querySelector('dialog[open]') || action.type === 'maximize' ? null : positions();
    focusRequest.current = focus;
    dispatch(action);
    if ('id' in action) {
      const verb = { minimize: 'minimized', close: 'closed', maximize: 'maximized', restore: 'restored' }[action.type];
      setAnnouncement(`${WINDOW_LABELS[action.id]} ${verb}.`);
    } else {
      setAnnouncement(action.type === 'reset' ? 'All windows restored.' : `${action.ids.map(id => WINDOW_LABELS[id]).join(' and ')} opened.`);
    }
  }, []);

  useLayoutEffect(() => {
    const before = previous.current;
    previous.current = null;
    if (before && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (const node of document.querySelectorAll<HTMLElement>('[data-reflow]')) {
        const old = before.get(node.dataset.reflow!);
        const rect = node.getBoundingClientRect();
        if (!old || !rect.width || !rect.height) continue;
        const x = old.left - rect.left;
        const y = old.top - (rect.top + window.scrollY);
        if (Math.abs(x) + Math.abs(y) + Math.abs(old.width - rect.width) < 1) continue;
        node.getAnimations().forEach(animation => animation.cancel());
        node.animate([
          { transform: `translate(${x}px, ${y}px) scale(${old.width / rect.width}, ${old.height / rect.height})`, transformOrigin: 'top left' },
          { transform: 'none', transformOrigin: 'top left' }
        ], { duration: 220, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' });
      }
    }
    const target = focusRequest.current;
    focusRequest.current = undefined;
    if (!target) return;
    const frame = requestAnimationFrame(() => {
      const node = document.querySelector<HTMLElement>(target.selector);
      node?.focus({ preventScroll: true });
      if (target.scroll) node?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [state]);

  useLayoutEffect(() => {
    if (!maximized) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = overflow; };
  }, [maximized]);

  const navigate = useCallback((hash: string) => {
    const target = hash.slice(1);
    const ids = ANCHOR_WINDOWS[target];
    if (!ids) return false;
    const selector = target === 'projects' || target === 'experience' ? `#${target} .section-heading` : `#${target}`;
    act({ type: 'navigate', ids }, { selector, scroll: true });
    return true;
  }, [act]);

  useEffect(() => {
    const restoreAnchor = () => { if (window.location.hash) navigate(window.location.hash); };
    // Defer the initial deep link until hydration has made the windows interactive.
    const frame = requestAnimationFrame(restoreAnchor);
    window.addEventListener('hashchange', restoreAnchor);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', restoreAnchor);
    };
  }, [navigate]);

  function onNavigate(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element).closest('a');
    const href = link?.getAttribute('href');
    if (!href?.startsWith('#') || !navigate(href)) return;
    event.preventDefault();
    if (window.location.hash !== href) window.history.pushState(null, '', href);
  }

  return (
    <DesktopContext.Provider value={{ state, act }}>
      <div className="desktop-shell" data-has-minimized={hasMinimized} onClickCapture={onNavigate}>
        {children}
        {!maximized && <DesktopTaskbar />}
        <p className="sr-only desktop-status" role="status" aria-live="polite">{announcement}</p>
      </div>
    </DesktopContext.Provider>
  );
}

export function RestoreAll() {
  const { state, act } = useDesktop();
  const changed = WINDOW_IDS.some(id => state[id].status !== 'open' || state[id].maximized);
  return <button type="button" className="restore-all" disabled={!changed} onClick={() => act({ type: 'reset' }, { selector: '#top', scroll: true })}>Restore all</button>;
}

function WindowIcon({ id }: { id: WindowId }) {
  return <span className={`window-icon window-icon-${id}`} aria-hidden="true"><span /><i /><i /><i /></span>;
}

function DesktopTaskbar() {
  const { state, act } = useDesktop();
  const minimized = WINDOW_IDS.filter(id => state[id].status === 'minimized');
  if (!minimized.length) return null;
  return (
    <nav className="desktop-taskbar" aria-label="Minimized windows">
      <span className="taskbar-label">Minimized</span>
      <div className="taskbar-items">
        {minimized.map(id => <button type="button" key={id} data-taskbar-window={id} aria-label={`Restore ${WINDOW_LABELS[id]}`} onClick={() => act({ type: 'open', ids: [id] }, { selector: `[data-window="${id}"]`, scroll: true })}><WindowIcon id={id} /><span>{WINDOW_LABELS[id]}</span></button>)}
      </div>
      <RestoreAll />
    </nav>
  );
}

export function DesktopGroup({ id, windows, title, description, children, aside }: {
  id: string; windows: WindowId[]; title: string; description: string; children: ReactNode; aside?: ReactNode;
}) {
  const { state } = useDesktop();
  const visible = windows.some(key => state[key].status === 'open');
  return (
    <section id={id} className="desktop-group" aria-label={title}>
      {visible && <header className="section-heading" data-reflow={`${id}-heading`} tabIndex={-1}><h2>{title}</h2><p>{description}</p></header>}
      {children}
      {visible && aside}
    </section>
  );
}

export function WindowPanel({ id, title, titleAs: Heading = 'h2', className = '', children, as: Frame = 'section' }: {
  id: WindowId; title: ReactNode; titleAs?: 'p' | 'h2' | 'h3'; className?: string; children: ReactNode; as?: 'section' | 'article' | 'footer';
}) {
  const { state, act } = useDesktop();
  const current = state[id];
  const label = WINDOW_LABELS[id];
  const dialog = useRef<HTMLDialogElement>(null);
  const frame = useRef<HTMLElement>(null);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const isMaximized = current.status === 'open' && current.maximized;
  const span = windowSpan(state, id);
  const style = { '--window-span': span } as CSSProperties;

  useLayoutEffect(() => {
    if (!isMaximized) return;
    const element = dialog.current;
    if (element && !element.open) element.showModal();
    return () => { if (element?.open) element.close(); };
  }, [isMaximized]);

  function resize() {
    if (!isMaximized) setPlaceholderHeight(frame.current?.getBoundingClientRect().height ?? 0);
    act({ type: isMaximized ? 'restore' : 'maximize', id }, { selector: `[data-window="${id}"]`, scroll: !isMaximized });
  }

  if (current.status === 'minimized') return null;
  if (current.status === 'closed') {
    const open = () => act({ type: 'open', ids: [id] }, { selector: `[data-window="${id}"]`, scroll: true });
    return <button
      type="button" className="desktop-shortcut" data-shortcut={id} data-reflow={`shortcut-${id}`}
      aria-label={`Open ${label}`} title={`Double-click to open ${label}`} style={style}
      onDoubleClick={open} onClick={event => { if (event.detail === 0) open(); }}
      onPointerUp={event => { if (event.pointerType !== 'mouse') open(); }}
    ><WindowIcon id={id} /><span>{label}</span></button>;
  }

  const panel = <Frame
    id={id === 'experience' ? 'experience-window' : id} ref={frame}
    data-window={id} data-wide={span > 6} data-reflow={isMaximized ? undefined : `window-${id}`}
    className={`desktop-window ${className}${isMaximized ? ' is-maximized' : ''}`}
    aria-labelledby={`${id}-window-title`} style={style} tabIndex={-1}
  >
    <header className="window-titlebar" onDoubleClick={event => {
      if (!(event.target as Element).closest('button, a')) resize();
    }}>
      <Heading id={`${id}-window-title`} className="window-title">{title}</Heading>
      <div className="window-controls" role="group" aria-label={`${label} window controls`}>
        <button type="button" aria-label={`Minimize ${label}`} title="Minimize" onClick={() => act({ type: 'minimize', id }, { selector: `[data-taskbar-window="${id}"]` })}><span className="control-minimize" aria-hidden="true" /></button>
        <button type="button" aria-label={`${isMaximized ? 'Restore' : 'Maximize'} ${label}`} title={isMaximized ? 'Restore' : 'Maximize'} onClick={resize}><span className={isMaximized ? 'control-restore' : 'control-maximize'} aria-hidden="true" /></button>
        <button type="button" className="window-close" aria-label={`Close ${label}`} title="Close" onClick={() => act({ type: 'close', id }, { selector: `[data-shortcut="${id}"]`, scroll: true })}><span className="control-close" aria-hidden="true" /></button>
      </div>
    </header>
    <div className="window-body">{children}</div>
  </Frame>;

  if (!isMaximized) return panel;
  return <>
    <div className="window-placeholder" style={{ ...style, height: placeholderHeight }} aria-hidden="true" />
    {createPortal(<dialog className="maximized-dialog" ref={dialog} aria-label={label} onCancel={event => {
      event.preventDefault();
      act({ type: 'restore', id }, { selector: `[data-window="${id}"]`, scroll: true });
    }}>{panel}<DesktopTaskbar /></dialog>, document.body)}
  </>;
}
