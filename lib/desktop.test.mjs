import assert from 'node:assert/strict';
import test from 'node:test';
import { createDesktop, desktopReducer, windowSpan, WINDOW_IDS } from './desktop.ts';

test('minimize and close have distinct destinations and both reopen', () => {
  let state = desktopReducer(createDesktop(), { type: 'minimize', id: 'about' });
  state = desktopReducer(state, { type: 'close', id: 'paytogether' });
  assert.equal(state.about.status, 'minimized');
  assert.equal(state.paytogether.status, 'closed');
  state = desktopReducer(state, { type: 'open', ids: ['about', 'paytogether'] });
  assert.equal(state.about.status, 'open');
  assert.equal(state.paytogether.status, 'open');
});

test('a minimized maximized window remembers its size; a closed one does not', () => {
  let state = desktopReducer(createDesktop(), { type: 'maximize', id: 'writing' });
  state = desktopReducer(state, { type: 'minimize', id: 'writing' });
  state = desktopReducer(state, { type: 'open', ids: ['writing'] });
  assert.equal(state.writing.maximized, true);
  state = desktopReducer(state, { type: 'close', id: 'writing' });
  state = desktopReducer(state, { type: 'open', ids: ['writing'] });
  assert.equal(state.writing.maximized, false);
});

test('switching from a maximized window through the taskbar leaves only one maximized', () => {
  let state = desktopReducer(createDesktop(), { type: 'maximize', id: 'about' });
  state = desktopReducer(state, { type: 'minimize', id: 'about' });
  state = desktopReducer(state, { type: 'maximize', id: 'writing' });
  state = desktopReducer(state, { type: 'open', ids: ['about'] });
  assert.equal(state.about.maximized, true);
  assert.equal(state.writing.maximized, false);
  assert.equal(Object.values(state).filter(w => w.status === 'open' && w.maximized).length, 1);
});

test('navigation restores its whole group and exits a maximized view', () => {
  let state = desktopReducer(createDesktop(), { type: 'close', id: 'paytogether' });
  state = desktopReducer(state, { type: 'minimize', id: 'myfpl' });
  state = desktopReducer(state, { type: 'maximize', id: 'footer' });
  state = desktopReducer(state, { type: 'navigate', ids: ['paytogether', 'myfpl'] });
  assert.equal(state.paytogether.status, 'open');
  assert.equal(state.myfpl.status, 'open');
  assert.equal(Object.values(state).some(w => w.status === 'open' && w.maximized), false);
});

test('panels share space, expand around a shortcut, and fill a minimized sibling’s space', () => {
  let state = createDesktop();
  assert.equal(windowSpan(state, 'myfpl'), 6);
  state = desktopReducer(state, { type: 'close', id: 'paytogether' });
  assert.equal(windowSpan(state, 'myfpl'), 10);
  assert.equal(windowSpan(state, 'paytogether'), 2);
  state = desktopReducer(state, { type: 'open', ids: ['paytogether'] });
  state = desktopReducer(state, { type: 'minimize', id: 'paytogether' });
  assert.equal(windowSpan(state, 'myfpl'), 12);
});

test('restore all recovers every panel, including the footer, without mutating the initial state', () => {
  const initial = createDesktop();
  let state = initial;
  for (const id of WINDOW_IDS) state = desktopReducer(state, { type: 'close', id });
  assert.equal(Object.values(state).every(w => w.status === 'closed'), true);
  assert.deepEqual(desktopReducer(state, { type: 'reset' }), initial);
  assert.equal(initial.footer.status, 'open');
});
