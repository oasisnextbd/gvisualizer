// gvisualizer: sign-in, team notes and the "Suggest / report" box on solution pages.
// Loaded as a module by every page (header Sign in, sign-in reminder); the suggestions box only appears on solution pages.
// Stays completely silent until Firebase is configured (shared/config.js).
import { enabled, fb, onUser, signIn, signUp, signOut, googleSignIn, resetPassword, resendVerification, recheck, requestTeamVerify, niceError, esc, when, shortName, DOMAIN } from './fb.js';

const COURSE = location.pathname.includes('/mass-transfer/') ? 'che303' : 'che301';
const COURSE_PAGE = /\/(question-bank|mass-transfer)\//.test(location.pathname);
const SOLUTIONS = /solutions\.html$/.test(location.pathname);
const KINDS = { error: 'Error in the question or solution', method: 'Easier or alternative method', doubt: 'Doubt: I do not understand a step', request: 'Missing: add a question or topic' };
const KIND_TAG = { error: 'error', method: 'easier method', doubt: 'doubt', request: 'request' };
const NOTE_LABEL = { correction: 'Correction', method: 'Alternative method', review: 'Under review' };
const STATUS = { new: 'received', reviewing: 'being reviewed', approved: 'approved', fixed: 'fixed', declined: 'declined' };

let state = null, part = null, nudgeClosed = false;
const $ = (s, el = document) => el.querySelector(s);

if (enabled) start();

function start() {
  const css = document.createElement('link');
  css.rel = 'stylesheet'; css.href = new URL('community.css?v=20261103', import.meta.url).href;
  document.head.appendChild(css);
  addHeader();
  addModal();
  window.addEventListener('qb:part', e => show(e.detail && e.detail.id));
  // Load Firebase after the page has drawn (it is ~190 KB); a click on Sign in loads it at once anyway.
  const later = window.requestIdleCallback ? f => requestIdleCallback(f, { timeout: 2500 }) : f => setTimeout(f, 1200);
  later(() => onUser(s => { state = s; paintHeader(); if (part) show(part, true); gate(); }));
  // any element with data-signin opens the sign-in box (e.g. the home-page strip)
  document.addEventListener('click', e => { const t = e.target.closest('[data-signin]'); if (t) { e.preventDefault(); openModal(t.dataset.signin === 'up' ? 'signup' : 'signin'); } });
  gate();   // guests are limited at once; a remembered signed-in user waits for confirmation
  window.addEventListener('hashchange', () => setTimeout(gate, 0));
  // the page may have routed before this module loaded
  const h = decodeURIComponent(location.hash.slice(1));
  if (h && window.QB && QB.byId && QB.byId[h]) show(h);
}

// ------------------------------------------------------------ header chip
function addHeader() {
  const top = $('.top'); if (!top) return;
  const b = document.createElement('div');
  b.className = 'cm-user';
  b.innerHTML = '<button type="button" class="navlink cm-signin">Sign in</button>' +
    '<span class="cm-me" hidden><button type="button" class="cm-acct" aria-haspopup="menu" aria-expanded="false" title="Account">' +
    '<span class="cm-av" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20.5c1.2-3.8 4.2-5.6 7.5-5.6s6.3 1.8 7.5 5.6"/></svg></span>' +
    '<span class="cm-id"></span><svg class="cm-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>' +
    '<div class="cm-menu" role="menu" hidden><div class="cm-menu-h">Signed in as<b class="cm-menu-id"></b><span class="cm-menu-st"></span></div><button type="button" class="cm-out" role="menuitem">Sign out</button></div></span>';
  const acct = $('.cm-acct', b), menu = $('.cm-menu', b);
  const setMenu = open => { menu.hidden = !open; acct.setAttribute('aria-expanded', String(open)); };
  acct.addEventListener('click', e => { e.stopPropagation(); setMenu(menu.hidden); });
  document.addEventListener('click', e => { if (!menu.hidden && !menu.contains(e.target)) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); acct.focus(); } });
  const theme = $('.themebtn', top);
  top.insertBefore(b, theme || null);
  $('.cm-signin', b).addEventListener('click', () => openModal('signin'));
  $('.cm-out', b).addEventListener('click', () => { $('.cm-menu', b).hidden = true; signOut(); });
}
// ------------------------------------------------------------ guest limits
// Not signed in (or not an allowed, verified account) = guest. Per course a guest may:
//   - see the questions of one paper (QB.freeYear) in the question bank,
//   - open any QB.freeSolutions (2) solutions of that paper (remembered in this browser),
// and nothing else: other papers' solutions, practice sets and the checklist show a sign-in screen.
// The home page, labs and team dashboard are unaffected. (A soft lock: the content files are still
// public; the real lock comes when the content moves to Firebase.)
// Function declarations, not consts: start() runs before this part of the module is evaluated.
function PAGE() { return location.pathname.split('/').pop() || 'index.html'; }
function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function FREE() { return (window.QB && QB.freeYear) || '2023-24'; }
function MAXFREE() { return (window.QB && QB.freeSolutions) || 2; }
function seenFree() { try { return JSON.parse(lsGet('gv-free-' + COURSE) || '[]'); } catch (e) { return []; } }
function freeLeft() { return Math.max(0, MAXFREE() - seenFree().length); }
function guestMayOpen(id) {
  const p = window.QB && QB.byId[id];
  if (!p || p.practice || p.key !== FREE()) return false;
  const s = seenFree();
  if (s.includes(id)) return true;
  if (s.length >= MAXFREE()) return false;
  s.push(id); lsSet('gv-free-' + COURSE, JSON.stringify(s)); return true;
}
function hasAccess() { return !!(state && state.user && state.verified && ((state.member && !state.blocked) || state.isMod)); }
// true / false, or null while a remembered signed-in user is still being confirmed
function access() { if (state) return hasAccess(); return lsGet('gv-access') === '1' ? null : false; }
function gate() {
  const a = access(); if (a === null) return;
  if (state) lsSet('gv-access', a ? '1' : '0');
  if (window.QB && QB.guest !== !a) { QB.guest = !a; window.dispatchEvent(new Event('qb:access')); }
  const wallEl = $('.cm-wall');
  const unlock = () => { if (wallEl) wallEl.remove(); document.documentElement.classList.remove('cm-locked'); };
  if (a) { unlock(); const n = $('.cm-nudge'); if (n) n.remove(); return; }
  if (!COURSE_PAGE) return;
  const page = PAGE();
  if (page === 'practice.html' || page === 'checklist.html') return wall(page === 'practice.html' ? 'practice' : 'checklist');
  if (page !== 'solutions.html') { unlock(); return; }
  const h = decodeURIComponent(location.hash.slice(1));
  if (part) return guestMayOpen(part) ? (unlock(), nudge()) : wall(QB.byId[part].practice || QB.byId[part].key !== FREE() ? 'paper' : 'used');
  if (h.startsWith('year-') && h.slice(5) !== FREE()) return wall('paper');
  unlock();
}
function nudge() {
  if (nudgeClosed) return;
  const left = freeLeft();
  const n = $('.cm-nudge') || document.body.appendChild(Object.assign(document.createElement('div'), { className: 'cm-nudge' }));
  n.setAttribute('role', 'dialog'); n.setAttribute('aria-label', 'Sign in suggestion');
  n.innerHTML = `<p><b>${left ? `${left} free solution${left === 1 ? '' : 's'} left.` : 'This was your last free solution.'}</b> Sign in with your BUET ChE student ID to see every paper, every solution, the practice sets and the checklist.</p>
    <div class="cm-row"><button type="button" class="btn" data-signin>Sign in</button><button type="button" class="btn ghost" data-signin="up">Create account</button><button type="button" class="cm-link cm-later">Not now</button></div>`;
  $('.cm-later', n).onclick = () => { nudgeClosed = true; n.remove(); };
  n.onclick = e => { if (e.target.closest('[data-signin]')) n.remove(); };
}
function wall(kind) {
  const nEl = $('.cm-nudge'); if (nEl) nEl.remove();
  let w = $('.cm-wall');
  if (!w) { w = document.body.appendChild(Object.assign(document.createElement('div'), { className: 'cm-wall' })); w.setAttribute('role', 'dialog'); w.setAttribute('aria-modal', 'true'); }
  document.documentElement.classList.add('cm-locked');
  const u = state && state.user;
  const what = { used: `You have opened your ${MAXFREE()} free solutions.`, paper: `Guests can open solutions from the ${FREE()} paper only.`, practice: 'Practice sets are for signed-in students.', checklist: 'The prep checklist is for signed-in students.' }[kind];
  const why = !u ? `${what} Sign in with your BUET ChE student ID to unlock every paper, every solution, the practice sets and the checklist.`
    : !state.verified ? 'You are signed in, but your BUET email is not verified yet. Open the link in your BUET mailbox (check Junk), or ask the team to verify you.'
    : state.blocked ? 'This account has been blocked by the team. Contact the gvisualizer team if this is a mistake.'
    : `This account (${esc(state.email)}) is not on the allowed list. Access is for BUET ChE students 2202001–2202120 and 2302001–2302120; contact the team if you should be included.`;
  const home = location.pathname.replace(/[^/]*\/[^/]*$/, '');
  const left = freeLeft();
  w.innerHTML = `<div class="cm-wall-box"><h3>Sign in to keep studying</h3><p>${why}</p>
    <div class="cm-row">${!u ? '<button type="button" class="btn" data-signin>Sign in</button><button type="button" class="btn ghost" data-signin="up">Create account</button>'
      : !state.verified ? '<button type="button" class="btn cm-w-verify">Verify my account</button><button type="button" class="btn ghost cm-w-out">Sign out</button>'
      : '<button type="button" class="btn ghost cm-w-out">Sign out</button>'}</div>
    ${!u ? '<p class="cm-dim" style="margin-top:12px">Team member? <button type="button" class="cm-link cm-w-google">Continue with Google</button></p>' : ''}
    <p class="cm-dim" style="margin-top:14px">Without signing in: <a href="./#year-${FREE()}">the ${FREE()} questions</a>${left ? ` (${left} free solution${left === 1 ? '' : 's'} left)` : ''} · <a href="${home}">home page</a></p></div>`;
  const g = $('.cm-w-google', w); if (g) g.onclick = () => googleSignIn().catch(e => alert(niceError(e)));
  const v = $('.cm-w-verify', w); if (v) v.onclick = () => openModal('verify');
  const o = $('.cm-w-out', w); if (o) o.onclick = () => signOut();
}

function paintHeader() {
  document.querySelectorAll('[data-signed-out]').forEach(el => { el.hidden = !!(state && state.user); });
  const b = $('.cm-user'); if (!b) return;
  const on = state && state.user;
  $('.cm-signin', b).hidden = !!on;
  $('.cm-me', b).hidden = !on;
  if (on) {
    const st = state.verified ? '' : state.request ? 'waiting for team' : 'verify email';
    $('.cm-id', b).textContent = shortName(state.email) + (st ? ' (' + st + ')' : '');
    $('.cm-menu-id', b).textContent = state.email;
    $('.cm-menu-st', b).textContent = st ? 'Not verified yet: ' + st : '';
  } else { const m = $('.cm-menu', b); if (m) m.hidden = true; }
}

// ------------------------------------------------------------ sign-in modal
function addModal() {
  const m = document.createElement('div');
  m.className = 'cm-modal'; m.hidden = true;
  m.innerHTML = `<div class="cm-dialog" role="dialog" aria-modal="true" aria-label="Sign in">
    <button type="button" class="cm-x" aria-label="Close">×</button>
    <form class="cm-pane" data-pane="signin" autocomplete="on" novalidate>
      <h3>Sign in</h3>
      <p class="cm-dim">BUET ChE students: use your student ID or <b>ID@${esc(DOMAIN)}</b> email.</p>
      <label>Student ID or email<input class="search cm-in-id" name="username" autocomplete="username" placeholder="2202025"></label>
      <label>Password<input class="search cm-in-pw" name="password" type="password" autocomplete="current-password"></label>
      <div class="cm-row"><button type="button" class="btn cm-do-in">Sign in</button><button type="button" class="btn ghost cm-go-up">Create account</button></div>
      <button type="button" class="cm-link cm-do-reset">Forgot password?</button>
    </form>
    <form class="cm-pane" data-pane="signup" autocomplete="on" novalidate hidden>
      <h3>Create your account</h3>
      <p class="cm-dim">We send a link to your BUET mailbox to prove it is yours. Only students on the allowed list can post.</p>
      <label>Student ID or BUET email<input class="search cm-up-id" name="username" autocomplete="username" placeholder="2202025"></label>
      <label>New password (6+ characters)<input class="search cm-up-pw" name="new-password" type="password" autocomplete="new-password"></label>
      <div class="cm-row"><button type="button" class="btn cm-do-up">Create account</button><button type="button" class="btn ghost cm-go-in">I have an account</button></div>
    </form>
    <div class="cm-pane" data-pane="verify" hidden>
      <h3>Check your BUET email</h3>
      <p>We sent a verification link to <b class="cm-v-email"></b>. Open it, then come back and press <b>I have verified</b>.</p>
      <p class="cm-dim">Not there? Look in the <b>Junk</b> folder of Outlook (outlook.office.com); it can take a minute.</p>
      <div class="cm-row"><button type="button" class="btn cm-do-check">I have verified</button><button type="button" class="btn ghost cm-do-resend">Send again</button></div>
      <div class="cm-team-v">
        <div class="cm-tv-ask">
          <p class="cm-dim"><b>Email not arriving?</b> The team can verify you instead: send a request, then show your student ID card to a team member.</p>
          <label>Your name (optional, helps the team find you)<input class="search cm-tv-name" autocomplete="name"></label>
          <button type="button" class="btn ghost cm-do-tv">Ask the team to verify me</button>
        </div>
        <div class="cm-tv-sent" hidden>
          <p><b>Request sent</b> <span class="cm-dim cm-tv-when"></span>: show your student ID card to a team member. When they approve it, press <b>I have verified</b> (or just reload the page).</p>
        </div>
      </div>
    </div>
    <p class="cm-msg" aria-live="polite"></p>
  </div>`;
  document.body.appendChild(m);
  const msg = t => { $('.cm-msg', m).textContent = t || ''; };
  const busy = async (fn) => { msg('…'); try { await fn(); } catch (e) { msg(niceError(e)); } };
  m.querySelectorAll('form').forEach(f => f.addEventListener('submit', e => e.preventDefault()));
  $('.cm-x', m).addEventListener('click', closeModal);
  m.addEventListener('click', e => { if (e.target === m) closeModal(); });
  $('.cm-go-up', m).addEventListener('click', () => openModal('signup'));
  $('.cm-go-in', m).addEventListener('click', () => openModal('signin'));
  $('.cm-do-in', m).addEventListener('click', () => busy(async () => { const s = await signIn($('.cm-in-id', m).value, $('.cm-in-pw', m).value); afterAuth(s); }));
  $('.cm-in-pw', m).addEventListener('keydown', e => { if (e.key === 'Enter') $('.cm-do-in', m).click(); });
  $('.cm-do-up', m).addEventListener('click', () => busy(async () => { const s = await signUp($('.cm-up-id', m).value, $('.cm-up-pw', m).value); afterAuth(s); }));
  $('.cm-do-reset', m).addEventListener('click', () => busy(async () => {
    const id = $('.cm-in-id', m).value; if (!id) throw new Error('Type your student ID or email first.');
    await resetPassword(id); msg('Password reset link sent. Check your inbox and Junk folder.');
  }));
  $('.cm-do-resend', m).addEventListener('click', () => busy(async () => { await resendVerification(); msg('Sent again. Check Junk too.'); }));
  $('.cm-do-check', m).addEventListener('click', () => busy(async () => { const s = await recheck(); paintVerify(); if (s.verified) afterAuth(s); else msg(s.request ? 'Not verified yet: the team has not approved your request yet.' : 'Not verified yet. Open the link in the email first.'); }));
  $('.cm-do-tv', m).addEventListener('click', () => busy(async () => { await requestTeamVerify($('.cm-tv-name', m).value); paintVerify(); msg(''); }));
}
function openModal(pane) {
  const m = $('.cm-modal'); m.hidden = false;
  m.querySelectorAll('.cm-pane').forEach(p => { p.hidden = p.dataset.pane !== pane; });
  $('.cm-msg', m).textContent = '';
  if (pane === 'verify' && state) { $('.cm-v-email', m).textContent = state.email; paintVerify(); }
  const f = m.querySelector(`[data-pane="${pane}"] input`); if (f) f.focus();
}
function closeModal() { $('.cm-modal').hidden = true; }
// The "ask the team" part of the verify pane remembers a request already sent (it is stored in the database).
function paintVerify() {
  const m = $('.cm-modal'); if (!m) return;
  const r = state && state.request;
  $('.cm-tv-ask', m).hidden = !!r;
  $('.cm-tv-sent', m).hidden = !r;
  if (r) $('.cm-tv-when', m).textContent = r.createdAt ? '(' + when(r.createdAt) + ')' : '';
}
function afterAuth(s) {
  if (!s.verified) return openModal('verify');
  closeModal();
}

// ------------------------------------------------------------ solution page blocks
async function show(id, again) {
  if (!id || !window.QB || !QB.byId[id]) { part = null; gate(); return; }
  const changed = part !== id; part = id;
  gate();
  const sol = $('#view .sol'); if (!sol) return;
  if (changed || !$('#view .cm-notes')) renderNotes(id, sol);
  renderBox(id, sol);
}

async function renderNotes(id, sol) {
  let box = $('#view .cm-notes');
  if (!box) { box = document.createElement('div'); box.className = 'cm-notes'; sol.parentNode.insertBefore(box, sol); }
  box.innerHTML = '';
  try {
    const nk = 'gv-note:' + COURSE + '_' + id; let items = null;
    try { const c = JSON.parse(sessionStorage.getItem(nk) || 'null'); if (c && Date.now() - c.at < 600e3) items = c.items; } catch (e) {}
    if (!items) {
      const { F, db } = await fb();
      const d = await F.getDoc(F.doc(db, 'notes', COURSE + '_' + id));
      items = d.exists() ? (d.data().items || []) : [];
      try { sessionStorage.setItem(nk, JSON.stringify({ at: Date.now(), items })); } catch (e) {}
    }
    if (part !== id || !items.length || !box.isConnected) return;
    box.innerHTML = items.map(it => `<div class="cm-note k-${esc(it.kind)}"><div class="cm-note-h">${esc(NOTE_LABEL[it.kind] || 'Note')}${it.kind === 'method' && it.credit ? ' by ' + esc(it.credit) : it.credit ? ' · thanks to ' + esc(it.credit) : ''}${it.at ? ' <span class="cm-dim">· ' + esc(when(new Date(it.at))) + '</span>' : ''}</div>${QB.md(it.text || '')}</div>`).join('');
    QB.typeset(box);
  } catch (e) { /* notes are optional */ }
}

async function renderBox(id, sol) {
  let box = $('#view .cm-box');
  if (!box) { box = document.createElement('section'); box.className = 'cm-box'; sol.parentNode.insertBefore(box, sol.nextSibling); }
  const s = state;
  const key = id + '|' + (s && s.user ? [s.email, s.verified, s.canPost, s.blocked, s.dbError, !!s.request].join(',') : '-');
  if (box.dataset.key === key) return;
  box.dataset.key = key;
  let h = '<h3>Suggestions and doubts</h3>';
  if (!s || !s.user) {
    h += `<p class="cm-dim">Found an error, an easier method, or stuck on a step? BUET ChE students can sign in to tell the team.</p><button type="button" class="btn ghost cm-open">Sign in to post</button>`;
  } else if (!s.verified && s.request) {
    h += `<p class="cm-dim">Your request to be verified by the team was sent. Show your student ID card to a team member; once they approve it you can post here.</p><button type="button" class="btn ghost cm-verify">Check again</button>`;
  } else if (!s.verified) {
    h += `<p class="cm-dim">Verify your email to post: open the link we sent to <b>${esc(s.email)}</b> (check Junk). Email not arriving? The team can verify you instead.</p><button type="button" class="btn ghost cm-verify">I have verified / ask the team</button>`;
  } else if (s.dbError) {
    h += '<p class="cm-dim">Suggestions are being set up and are not open yet. Please try again later.</p>';
  } else if (!s.canPost) {
    h += s.blocked ? '<p class="cm-dim">Posting is turned off for this account. Contact the team.</p>'
      : `<p class="cm-dim">You are signed in as <b>${esc(s.email)}</b>, but this account is not on the allowed list yet. BUET ChE students should use their <b>ID@${esc(DOMAIN)}</b> email; if that does not work, ask the team to add you.</p>`;
  } else {
    h += `<div class="cm-list"><button type="button" class="btn ghost cm-show">Show discussion and my suggestions</button></div>
      <details class="cm-form"><summary class="btn">Suggest / report</summary>
        <label>What is it?<select class="search cm-kind">${Object.entries(KINDS).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}</select></label>
        <label>Details <span class="cm-dim">(step number, the correct value, your method; you can write math as $...$)</span><textarea class="search cm-text" rows="5" maxlength="4000"></textarea></label>
        <label>Photo of your working (optional)<input type="file" class="cm-photo" accept="image/*"></label>
        <div class="cm-row"><button type="button" class="btn cm-send">Send to the team</button><span class="cm-msg2 cm-dim"></span></div>
        <p class="cm-dim">The team reads every message. Approved suggestions appear here for everyone, credited to you.</p>
      </details>`;
  }
  box.innerHTML = h;
  const o = $('.cm-open', box); if (o) o.addEventListener('click', () => openModal('signin'));
  const v = $('.cm-verify', box); if (v) v.addEventListener('click', async () => { const r = await recheck(); if (!r.verified) openModal('verify'); });
  if (s && s.canPost) { $('.cm-show', box).addEventListener('click', () => { $('.cm-list', box).innerHTML = '<p class="cm-dim">Loading…</p>'; loadList(id, box); }); $('.cm-send', box).addEventListener('click', () => send(id, box)); }
}

async function loadList(id, box) {
  const list = $('.cm-list', box);
  try {
    const { F, db } = await fb();
    const base = [F.where('course', '==', COURSE), F.where('part', '==', id)];
    const qs = [F.getDocs(F.query(F.collection(db, 'comments'), ...base, F.where('public', '==', true))),
                F.getDocs(F.query(F.collection(db, 'comments'), ...base, F.where('author', '==', state.email)))];
    const seen = new Map();
    for (const r of await Promise.all(qs)) r.forEach(d => seen.set(d.id, { id: d.id, ...d.data() }));
    const rows = [...seen.values()].sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
    if (part !== id) return;
    if (!list.isConnected) return;
    list.innerHTML = rows.length ? rows.map(c => card(c)).join('') : '<p class="cm-dim">No approved suggestions yet. Be the first.</p>';
    list.querySelectorAll('.cm-photo-btn').forEach(b => b.addEventListener('click', () => photo(b)));
    QB.typeset(list);
  } catch (e) { list.innerHTML = `<p class="cm-dim">Could not load suggestions: ${esc(niceError(e))}</p>`; }
}
function card(c) {
  const mine = c.author === state.email;
  return `<article class="cm-c">
    <div class="meta"><span class="tag">${esc(KIND_TAG[c.kind] || c.kind)}</span><span class="cm-dim">${esc(c.authorId || '')} · ${esc(when(c.createdAt))}</span>${mine ? `<span class="tag ${c.public ? 'rep' : ''}">yours · ${esc(STATUS[c.status] || c.status)}${c.public ? ', public' : ', only you and the team see it'}</span>` : ''}</div>
    <div class="cm-text">${QB.md(c.text || '')}</div>
    ${c.hasImage ? `<button type="button" class="cm-link cm-photo-btn" data-id="${esc(c.id)}">Show photo</button>` : ''}
    ${c.reply ? `<div class="cm-reply"><b>Team reply:</b> ${QB.md(c.reply)}</div>` : ''}
  </article>`;
}
async function photo(b) {
  b.textContent = 'Loading photo…';
  try {
    const { F, db } = await fb();
    const d = await F.getDoc(F.doc(db, 'commentImages', b.dataset.id));
    if (d.exists()) { const img = document.createElement('img'); img.className = 'cm-img'; img.src = d.data().data; img.alt = 'Photo attached to this suggestion'; b.replaceWith(img); }
    else b.textContent = 'Photo not available';
  } catch (e) { b.textContent = 'Photo not available'; }
}

// Shrink a photo to at most 1200 px and a JPEG that fits one Firestore document.
async function shrink(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = url; });
    for (const [px, q] of [[1200, 0.7], [1200, 0.55], [900, 0.55], [700, 0.5]]) {
      const k = Math.min(1, px / Math.max(img.width, img.height));
      const cv = document.createElement('canvas'); cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
      cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
      const data = cv.toDataURL('image/jpeg', q);
      if (data.length <= 940000) return data;
    }
    throw new Error('Photo is too large even after shrinking.');
  } finally { URL.revokeObjectURL(url); }
}

async function send(id, box) {
  const msg = t => { $('.cm-msg2', box).textContent = t; };
  const text = $('textarea.cm-text', box).value.trim();
  if (!text) return msg('Write a few words first.');
  if (text.length > 4000) return msg('Please keep it under 4000 characters.');
  const btn = $('.cm-send', box); btn.disabled = true; msg('Sending…');
  try {
    const f = $('.cm-photo', box).files[0];
    const data = f ? await shrink(f) : null;
    const { F, db } = await fb();
    const ref = F.doc(F.collection(db, 'comments'));
    await F.setDoc(ref, { course: COURSE, part: id, kind: $('.cm-kind', box).value, text, hasImage: !!data,
      author: state.email, authorId: shortName(state.email).slice(0, 40), status: 'new', public: false, createdAt: F.serverTimestamp() });
    if (data) await F.setDoc(F.doc(db, 'commentImages', ref.id), { data, author: state.email, createdAt: F.serverTimestamp() });
    $('textarea.cm-text', box).value = ''; $('.cm-photo', box).value = '';
    msg('Sent. Thank you! You will see the status and any reply here.');
    loadList(id, box);
  } catch (e) { msg(niceError(e)); }
  btn.disabled = false;
}
