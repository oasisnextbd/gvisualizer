// gvisualizer team dashboard: comments inbox, team notes, allowed students and the team list.
import { enabled, fb, onUser, signIn, signOut, googleSignIn, niceError, esc, when, shortName, OWNER, FOUNDER, DOMAIN } from '../shared/fb.js';
import { DEFAULT_RANGES } from '../shared/config.js';

const app = document.getElementById('app');
const COURSES = { che301: { name: 'CHE 301 Heat Transfer', dir: '../question-bank/' }, che303: { name: 'ChE 303 Mass Transfer I', dir: '../mass-transfer/' } };
const KINDS = { error: 'Error', method: 'Easier method', doubt: 'Doubt', request: 'Request' };
const STATUSES = ['new', 'reviewing', 'approved', 'fixed', 'declined'];
const NOTE_KINDS = { correction: 'Correction', method: 'Alternative method', review: 'Under review' };
let me = null, C = null, seenSaved = false;
const view = { tab: 'overview', status: 'new', course: '', kind: '', open: null, q: '' };

if (!enabled) {
  app.innerHTML = '<div class="tm-login"><h2>Not switched on yet</h2><p class="lede">Firebase is not configured. Follow <b>firebase/README.md</b>, paste the web config into <b>shared/config.js</b>, then reload.</p></div>';
} else {
  fb().then(c => { C = c; onUser(s => { me = s; render(); }); });
  window.addEventListener('hashchange', () => { view.tab = location.hash.slice(1) || 'overview'; view.open = null; render(); });
  view.tab = location.hash.slice(1) || 'overview';
}

// ------------------------------------------------------------ shell
function render() {
  if (!me || !me.user) return loginView();
  if (!me.verified && !me.emailVerified) return say(`<h2>Verify your email</h2><p class="lede">Open the verification link sent to <b>${esc(me.email)}</b>, then reload. Team members can also sign in with Google.</p><button class="btn ghost" id="out">Sign out</button>`);
  if (!me.emailVerified) return say(`<h2>Not on the team</h2><p class="lede"><b>${esc(me.email)}</b> was verified by the team as a student. Team members sign in with Google, or with an email whose verification link they opened.</p><button class="btn ghost" id="out">Sign out</button>`);
  if (me.dbError && !me.isOwner) return say(`<h2>Database not ready</h2><p class="lede">The database refused the request (${esc(me.dbError)}). If Firebase was just set up, publish <b>firebase/firestore.rules</b> in the console (Firestore → Rules) and reload.</p><button class="btn ghost" id="out">Sign out</button>`);
  if (!me.isMod) return say(`<h2>Not on the team</h2><p class="lede"><b>${esc(me.email)}</b> is signed in but is not on the team list. Ask the owner (${esc(OWNER)}) or an admin to add you.</p><button class="btn ghost" id="out">Sign out</button>`);
  if (!seenSaved) { seenSaved = true; C.F.setDoc(C.F.doc(C.db, 'seen', me.email), { at: C.F.serverTimestamp() }).catch(() => {}); }
  const tabs = [['overview', 'Overview'], ['comments', 'Comments'], ['notes', 'Notes'], ['students', 'Students']].concat(me.isAdmin ? [['team', 'Team']] : []);
  if (!tabs.some(t => t[0] === view.tab)) view.tab = 'overview';
  app.innerHTML = `<div class="tm"><nav class="tm-nav">
      <div class="tm-me"><b>${esc(me.email)}</b><span class="tag">${esc(me.role)}</span></div>
      ${tabs.map(([k, n]) => `<a href="#${k}" class="${view.tab === k ? 'on' : ''}">${n}</a>`).join('')}
      <button class="btn ghost" id="out" style="margin-top:8px">Sign out</button>
    </nav><section id="main"><p class="empty">Loading…</p></section></div>`;
  $('#out').onclick = () => signOut();
  ({ overview, comments, notes, students, team })[view.tab]();
}
const $ = s => app.querySelector(s);
function say(h) { app.innerHTML = `<div class="tm-login">${h}</div>`; const o = $('#out'); if (o) o.onclick = () => signOut(); }
function main(h) { const m = $('#main'); m.innerHTML = h; QB.typeset(m); return m; }
function fail(e) { main(`<p class="empty">${esc(niceError(e))}${e && e.code === 'permission-denied' ? '<br>If the database was just created, publish <b>firebase/firestore.rules</b> (Firestore → Rules) and reload.' : ''}</p>`); }

function loginView() {
  say(`<h2>Team sign-in</h2><p class="lede">For the gvisualizer team. Students sign in on the solution pages.</p>
    <button class="btn" id="g">Sign in with Google</button>
    <p class="cm-dim" style="margin-top:16px">or with email and password</p>
    <label>Email<input class="search" id="em" autocomplete="username"></label>
    <label>Password<input class="search" id="pw" type="password" autocomplete="current-password"></label>
    <div class="cm-row"><button class="btn ghost" id="e">Sign in</button></div><p class="cm-msg" id="msg"></p>`);
  const msg = t => { $('#msg').textContent = t; };
  $('#g').onclick = () => googleSignIn().catch(e => msg(niceError(e)));
  $('#e').onclick = () => signIn($('#em').value, $('#pw').value).catch(e => msg(niceError(e)));
}

// ------------------------------------------------------------ overview
async function overview() {
  const { F, db } = C;
  try {
    const cnt = async q => (await F.getCountFromServer(q)).data().count;
    const col = F.collection(db, 'comments');
    const [n, r, a, all, nt, vr] = await Promise.all([
      cnt(F.query(col, F.where('status', '==', 'new'))), cnt(F.query(col, F.where('status', '==', 'reviewing'))),
      cnt(F.query(col, F.where('public', '==', true))), cnt(col), cnt(F.collection(db, 'notes')), cnt(F.collection(db, 'verifyRequests'))]);
    const mem = me.isAdmin ? await cnt(F.collection(db, 'members')) : null;
    main(`<h1>Hello, ${esc(shortName(me.email))}</h1>
      <div class="tiles">
        <a class="tile" href="#comments" style="text-decoration:none;color:inherit"><div class="k">New comments</div><div class="v">${n}</div></a>
        <a class="tile" href="#students" style="text-decoration:none;color:inherit"><div class="k">Verification requests</div><div class="v" id="vr">${vr}</div></a>
        <div class="tile"><div class="k">Being reviewed</div><div class="v">${r}</div></div>
        <div class="tile"><div class="k">Public (approved)</div><div class="v">${a}</div></div>
        <div class="tile"><div class="k">All comments</div><div class="v">${all}</div></div>
        <div class="tile"><div class="k">Solutions with notes</div><div class="v">${nt}</div></div>
        ${mem == null ? '' : `<div class="tile"><div class="k">Allowed people</div><div class="v">${mem}</div></div>`}
      </div>
      <p class="lede">Work through <b>new</b> comments first: fix the solution (publish a correction note, or note it for the next content update), approve useful ones so every student sees them, and reply so the student knows what happened.</p>`);
  } catch (e) { fail(e); }
}

// ------------------------------------------------------------ comments
async function comments() {
  const { F, db } = C;
  const m = main(`<h1>Comments</h1><div class="tm-bar">
      <select class="search" id="fs"><option value="">All statuses</option>${STATUSES.map(s => `<option ${view.status === s ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <select class="search" id="fc"><option value="">Both courses</option>${Object.entries(COURSES).map(([k, c]) => `<option value="${k}" ${view.course === k ? 'selected' : ''}>${c.name}</option>`).join('')}</select>
      <select class="search" id="fk"><option value="">All kinds</option>${Object.entries(KINDS).map(([k, n]) => `<option value="${k}" ${view.kind === k ? 'selected' : ''}>${n}</option>`).join('')}</select>
    </div><div id="cl"><p class="empty">Loading…</p></div>`);
  ['fs', 'fc', 'fk'].forEach(id => { m.querySelector('#' + id).onchange = e => { view[{ fs: 'status', fc: 'course', fk: 'kind' }[id]] = e.target.value; view.open = null; comments(); }; });
  try {
    const col = F.collection(db, 'comments');
    const q = view.status ? F.query(col, F.where('status', '==', view.status), F.limit(500)) : F.query(col, F.orderBy('createdAt', 'desc'), F.limit(300));
    let rows = (await F.getDocs(q)).docs.map(d => ({ id: d.id, ...d.data() }));
    rows = rows.filter(c => (!view.course || c.course === view.course) && (!view.kind || c.kind === view.kind));
    rows.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    const cl = m.querySelector('#cl');
    cl.innerHTML = rows.length ? rows.map(c => `<div class="tm-row" data-id="${c.id}">
        <span><span class="tag">${esc(KINDS[c.kind] || c.kind)}</span></span>
        <span class="t mathjax_ignore"><b>${esc(c.part)}</b> · ${esc((c.text || '').slice(0, 120))}</span>
        <span class="st-${esc(c.status)}">${esc(c.status)}${c.public ? ' · public' : ''} · ${esc(c.authorId || '')}</span></div>
        ${view.open === c.id ? '<div id="det"></div>' : ''}`).join('') : '<p class="empty">Nothing here.</p>';
    cl.querySelectorAll('.tm-row').forEach(r => r.onclick = () => { view.open = view.open === r.dataset.id ? null : r.dataset.id; comments(); });
    const c = rows.find(x => x.id === view.open);
    if (c) detail(c, cl.querySelector('#det'));
  } catch (e) { fail(e); }
}
function partLink(c) {
  const co = COURSES[c.course];
  return co ? `<a href="${co.dir}solutions.html#${encodeURIComponent(c.part)}" target="_blank" rel="noopener">${esc(co.name)} · ${esc(c.part)} ↗</a>` : esc(c.part);
}
function detail(c, el) {
  const { F, db } = C;
  el.className = 'tm-detail';
  el.innerHTML = `<div class="meta" style="display:flex;gap:6px;flex-wrap:wrap"><span class="tag">${esc(KINDS[c.kind])}</span><span class="tag">${esc(c.author)}</span><span class="cm-dim">${esc(when(c.createdAt))}</span></div>
    <p>${partLink(c)}</p><div class="cm-text">${QB.md(c.text || '')}</div>
    ${c.hasImage ? '<div id="ph"><button class="cm-link" id="lp">Show photo</button></div>' : ''}
    <div class="cm-row" style="margin-top:6px"><button class="btn" id="qa">Approve &amp; make public</button><button class="btn ghost" id="qd">Decline (hide)</button>${me.isAdmin ? '<button class="btn ghost" id="qx">Delete for good</button>' : ''}<span class="cm-dim" id="m0"></span></div>
    <label>Status<select id="st">${STATUSES.map(s => `<option ${c.status === s ? 'selected' : ''}>${s}</option>`).join('')}</select></label>
    <label><input type="checkbox" id="pub" ${c.public ? 'checked' : ''}> Public: every signed-in student sees it under the solution</label>
    <label>Reply to the student (shown with their comment; math as $...$)<textarea id="rp" rows="3">${esc(c.reply || '')}</textarea></label>
    <div class="cm-row"><button class="btn" id="sv">Save</button><span class="cm-dim" id="m1"></span></div>
    <h3 style="margin-top:18px">Publish on the solution page</h3>
    <label>As<select id="nk">${Object.entries(NOTE_KINDS).map(([k, n]) => `<option value="${k}" ${(c.kind === 'method' ? 'method' : 'correction') === k ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
    <label>Text shown to everyone (edit it into a clean correction or method)<textarea id="nt" rows="6">${esc(c.text || '')}</textarea></label>
    <label>Credit<input type="text" id="cr" value="${esc(c.authorId || '')}"></label>
    <div class="cm-row"><button class="btn ghost" id="pn">Publish note</button><span class="cm-dim" id="m2"></span></div>`;
  QB.typeset(el);
  const lp = el.querySelector('#lp');
  if (lp) lp.onclick = async () => { const d = await F.getDoc(F.doc(db, 'commentImages', c.id)); el.querySelector('#ph').innerHTML = d.exists() ? `<img class="cm-img" src="${d.data().data}" alt="Attached photo">` : 'Photo missing'; };
  const quick = async (patch, msg) => {
    try {
      await F.updateDoc(F.doc(db, 'comments', c.id), { ...patch, replyBy: me.email, updatedAt: F.serverTimestamp() });
      el.querySelector('#m0').textContent = msg; setTimeout(comments, 500);
    } catch (e) { el.querySelector('#m0').textContent = niceError(e); }
  };
  el.querySelector('#qa').onclick = () => quick({ status: 'approved', public: true }, 'Approved: students now see it under the solution.');
  el.querySelector('#qd').onclick = () => quick({ status: 'declined', public: false }, 'Declined and hidden from students.');
  const qx = el.querySelector('#qx');
  if (qx) qx.onclick = async () => {
    if (!confirm('Delete this comment (and its photo) permanently? This cannot be undone.')) return;
    try {
      if (c.hasImage) await F.deleteDoc(F.doc(db, 'commentImages', c.id)).catch(() => {});
      await F.deleteDoc(F.doc(db, 'comments', c.id));
      el.querySelector('#m0').textContent = 'Deleted.'; setTimeout(comments, 500);
    } catch (e) { el.querySelector('#m0').textContent = niceError(e); }
  };
  el.querySelector('#st').onchange = e => { if (e.target.value === 'declined') el.querySelector('#pub').checked = false; };
  el.querySelector('#pub').onchange = e => { if (e.target.checked && el.querySelector('#st').value === 'declined') el.querySelector('#st').value = 'approved'; };
  el.querySelector('#sv').onclick = async () => {
    try {
      const st = el.querySelector('#st').value, pub = el.querySelector('#pub').checked && el.querySelector('#st').value !== 'declined';
      await F.updateDoc(F.doc(db, 'comments', c.id), { status: pub && st === 'new' ? 'approved' : st, public: pub, reply: el.querySelector('#rp').value.trim() || null, replyBy: me.email, updatedAt: F.serverTimestamp() });
      el.querySelector('#m1').textContent = 'Saved.'; setTimeout(comments, 500);
    } catch (e) { el.querySelector('#m1').textContent = niceError(e); }
  };
  el.querySelector('#pn').onclick = async () => {
    try {
      await addNote(c.course, c.part, { kind: el.querySelector('#nk').value, text: el.querySelector('#nt').value.trim(), credit: el.querySelector('#cr').value.trim() });
      await F.updateDoc(F.doc(db, 'comments', c.id), { noted: true, status: c.status === 'new' || c.status === 'reviewing' ? 'fixed' : c.status, updatedAt: F.serverTimestamp() });
      el.querySelector('#m2').textContent = 'Published on the solution page.';
    } catch (e) { el.querySelector('#m2').textContent = niceError(e); }
  };
}

// ------------------------------------------------------------ notes
async function addNote(course, part, item) {
  const { F, db } = C;
  if (!item.text) throw new Error('Write the note text first.');
  const ref = F.doc(db, 'notes', course + '_' + part);
  const d = await F.getDoc(ref);
  const items = d.exists() ? d.data().items || [] : [];
  items.push({ kind: item.kind, text: item.text.slice(0, 6000), credit: (item.credit || '').slice(0, 60), by: me.email, at: Date.now() });
  await F.setDoc(ref, { course, part, items, updatedAt: F.serverTimestamp(), updatedBy: me.email });
}
async function notes() {
  const { F, db } = C;
  try {
    const docs = (await F.getDocs(F.collection(db, 'notes'))).docs.map(d => ({ id: d.id, ...d.data() }));
    const m = main(`<h1>Notes on solutions</h1><p class="lede">Corrections, alternative methods and "under review" flags shown at the top of a solution, for everyone.</p>
      <div class="tm-detail"><h3>Add a note</h3>
        <label>Course<select id="ac">${Object.entries(COURSES).map(([k, c]) => `<option value="${k}">${c.name}</option>`).join('')}</select></label>
        <label>Question part id (as in the solution link, e.g. 2023-24-Q2b or practice-flash-P4)<input type="text" id="ap"></label>
        <label>Kind<select id="ak">${Object.entries(NOTE_KINDS).map(([k, n]) => `<option value="${k}">${n}</option>`).join('')}</select></label>
        <label>Text (markdown, math as $...$)<textarea id="at" rows="4"></textarea></label>
        <label>Credit (optional)<input type="text" id="acr"></label>
        <div class="cm-row"><button class="btn" id="add">Add note</button><span class="cm-dim" id="am"></span></div></div>
      ${docs.length ? docs.map(n => `<div class="tm-detail" data-id="${esc(n.id)}"><p><b>${esc(n.part)}</b> · ${partLink(n)}</p>
        ${(n.items || []).map((it, i) => `<div class="cm-note k-${esc(it.kind)}"><div class="cm-note-h">${esc(NOTE_KINDS[it.kind] || it.kind)}${it.credit ? ' · ' + esc(it.credit) : ''} <span class="cm-dim">· ${esc(it.by || '')}</span></div>
          <textarea data-i="${i}" rows="3">${esc(it.text)}</textarea>
          <div class="cm-row"><button class="btn ghost" data-save="${i}">Save</button><button class="btn ghost" data-del="${i}">Remove</button></div></div>`).join('')}</div>`).join('') : '<p class="empty">No notes yet.</p>'}`);
    m.querySelector('#add').onclick = async () => {
      try { await addNote(m.querySelector('#ac').value, m.querySelector('#ap').value.trim(), { kind: m.querySelector('#ak').value, text: m.querySelector('#at').value.trim(), credit: m.querySelector('#acr').value.trim() }); notes(); }
      catch (e) { m.querySelector('#am').textContent = niceError(e); }
    };
    m.querySelectorAll('[data-id]').forEach(box => {
      const n = docs.find(d => d.id === box.dataset.id);
      const save = async items => {
        const ref = F.doc(db, 'notes', n.id);
        if (items.length) await F.setDoc(ref, { course: n.course, part: n.part, items, updatedAt: F.serverTimestamp(), updatedBy: me.email });
        else await F.deleteDoc(ref);
        notes();
      };
      box.querySelectorAll('[data-save]').forEach(b => b.onclick = () => { const i = +b.dataset.save; const items = n.items.slice(); items[i] = { ...items[i], text: box.querySelector(`textarea[data-i="${i}"]`).value.trim(), by: me.email, at: Date.now() }; save(items).catch(fail); });
      box.querySelectorAll('[data-del]').forEach(b => b.onclick = () => { if (confirm('Remove this note?')) save(n.items.filter((_, i) => i !== +b.dataset.del)).catch(fail); });
    });
  } catch (e) { fail(e); }
}

// ------------------------------------------------------------ students (allowed list)
async function students() {
  const { F, db } = C;
  try {
    const [mem, reqs] = await Promise.all([F.getDocs(F.collection(db, 'members')), F.getDocs(F.collection(db, 'verifyRequests'))]);
    const all = mem.docs.map(d => ({ email: d.id, ...d.data() })).sort((a, b) => a.email.localeCompare(b.email));
    const requests = reqs.docs.map(d => ({ uid: d.id, ...d.data() })).sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
    const have = new Map(all.map(r => [r.email, r]));
    const inRange = email => { const id = +(String(email).match(/^(\d{7})@/) || [])[1]; return String(email).endsWith('@' + DOMAIN) && DEFAULT_RANGES.some(([a, b]) => id >= a && id <= b); };
    const q = view.q.toLowerCase();
    const rows = all.filter(r => !q || (r.email + ' ' + (r.name || '')).toLowerCase().includes(q));
    const fmt = s => { const d = s ? new Date(s) : null; return d && !isNaN(d) ? d.toLocaleString(undefined, { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '?'; };
    const m = main(`<h1>Students</h1>
      <div class="tm-detail"><h3>Verification requests (${requests.length})</h3>
        <p class="cm-dim">For students whose verification email never arrived. <b>Check their student ID card</b> (in person or a photo over a channel you trust) before approving. Approving binds the BUET email to that one account, so ask the student to confirm <b>when they created the account</b>: if someone else registered their email first, decline and block it.</p>
        ${requests.length ? `<table class="tm-t"><thead><tr><th>Email</th><th>ID / name</th><th>Account created</th><th>Requested</th><th></th></tr></thead><tbody>
        ${requests.map(r => { const mb = have.get(r.email); const note = !mb ? (inRange(r.email) ? 'in the allowed range, not on the list yet' : '<b>not on the allowed list</b>') : mb.blocked ? '<b>blocked</b>' : mb.verifiedUid && mb.verifiedUid !== r.uid ? '<b>already verified for another account</b>' : 'on the allowed list';
          return `<tr><td>${esc(r.email)}<br><span class="cm-dim">${note}</span></td><td>${esc(r.studentId || '')}${r.name ? '<br>' + esc(r.name) : ''}</td><td class="cm-dim">${esc(fmt(r.accountCreated))}</td><td class="cm-dim">${esc(r.createdAt ? fmt(r.createdAt.toDate()) : '')}</td>
          <td><button class="btn" data-ok="${esc(r.uid)}">Approve</button> <button class="cm-link" data-no="${esc(r.uid)}">Decline</button></td></tr>`; }).join('')}
        </tbody></table>` : '<p class="empty">No requests waiting.</p>'}<p class="cm-msg" id="vm"></p></div>
      ${me.isAdmin ? `<div class="tm-detail"><h3>Allow a range of student IDs</h3>
        <p class="cm-dim">Only people on this list can read approved comments and post. Students sign in with <b>ID@${esc(DOMAIN)}</b> and verify their mailbox (or ask the team, above).</p>
        <div class="tm-bar"><input class="search" id="r1" placeholder="from, e.g. 2202001"><input class="search" id="r2" placeholder="to, e.g. 2202120"><button class="btn" id="ar">Allow range</button></div>
        <div class="tm-bar"><button class="btn ghost" id="ad">Allow ${DEFAULT_RANGES.map(r => r.join('–')).join(' and ')}</button><span class="cm-dim" id="rm"></span></div>
        <h3>Add one person</h3><p class="cm-dim">For a teacher, a senior or anyone outside the ranges (any email, including Gmail).</p>
        <div class="tm-bar"><input class="search" id="oe" placeholder="email"><input class="search" id="on" placeholder="name (optional)"><select class="search" id="ok"><option value="guest">guest</option><option value="student">student</option></select><button class="btn" id="ao">Add</button></div></div>` : '<p class="cm-dim">Admins manage the allowed list; moderators approve verification requests.</p>'}
      <h3>Allowed people</h3>
      <div class="tm-bar"><input class="search" id="sq" placeholder="Search email or name" value="${esc(view.q)}"><span class="cm-dim">${rows.length} of ${all.length}</span></div>
      <table class="tm-t"><thead><tr><th>Email</th><th>Kind</th><th>Status</th>${me.isAdmin ? '<th></th>' : ''}</tr></thead><tbody>
      ${rows.slice(0, 400).map(r => `<tr><td>${esc(r.email)}${r.name ? ' · ' + esc(r.name) : ''}</td><td>${esc(r.kind)}</td><td>${r.blocked ? '<span class="st-new">blocked</span>' : 'allowed'}${r.verifiedUid ? ' · <span class="cm-dim">verified by ' + esc(shortName(r.verifiedBy || 'team')) + '</span>' : ''}</td>
        ${me.isAdmin ? `<td><button class="cm-link" data-b="${esc(r.email)}">${r.blocked ? 'Unblock' : 'Block'}</button> · <button class="cm-link" data-x="${esc(r.email)}">Remove</button></td>` : ''}</tr>`).join('')}
      </tbody></table>`);
    const vmsg = t => { m.querySelector('#vm').textContent = t; };
    m.querySelectorAll('[data-ok]').forEach(b => b.onclick = async () => {
      const r = requests.find(x => x.uid === b.dataset.ok), mb = have.get(r.email);
      try {
        if (mb && mb.blocked) throw new Error(r.email + ' is blocked. Unblock it first (admins).');
        if (mb && mb.verifiedUid && mb.verifiedUid !== r.uid && !confirm(r.email + ' is already verified for another account. Move the verification to this request\'s account?')) return;
        const v = { verifiedUid: r.uid, verifiedBy: me.email, verifiedAt: F.serverTimestamp() };
        if (mb) await F.updateDoc(F.doc(db, 'members', r.email), v);
        else {
          if (!inRange(r.email) && !confirm(r.email + ' is not on the allowed list. Allow it and verify?')) return;
          await F.setDoc(F.doc(db, 'members', r.email), { id: (r.email.match(/^(\d{7})@/) || [])[1] || null, name: r.name || null, kind: 'student', blocked: false, by: me.email, at: F.serverTimestamp(), ...v });
        }
        await F.deleteDoc(F.doc(db, 'verifyRequests', r.uid));
        vmsg('Verified ' + r.email + '.'); setTimeout(students, 600);
      } catch (e) { vmsg(niceError(e)); }
    });
    m.querySelectorAll('[data-no]').forEach(b => b.onclick = async () => { const r = requests.find(x => x.uid === b.dataset.no); if (!confirm('Decline the request from ' + r.email + '?')) return; try { await F.deleteDoc(F.doc(db, 'verifyRequests', r.uid)); students(); } catch (e) { vmsg(niceError(e)); } });
    let t; m.querySelector('#sq').oninput = e => { clearTimeout(t); t = setTimeout(() => { view.q = e.target.value; students(); }, 300); };
    if (!me.isAdmin) return;
    const msg = t => { m.querySelector('#rm').textContent = t; };
    const allow = async ranges => {
      const list = [];
      for (const [a, b] of ranges) { if (!(a > 999999 && b >= a && b - a < 5000)) throw new Error('Give two 7-digit IDs, smallest first (at most 5000 at a time).'); for (let i = a; i <= b; i++) list.push(String(i)); }
      const fresh = list.filter(id => !have.has(id + '@' + DOMAIN));
      for (let k = 0; k < fresh.length; k += 450) {
        const wb = F.writeBatch(db);
        fresh.slice(k, k + 450).forEach(id => wb.set(F.doc(db, 'members', id + '@' + DOMAIN), { id, kind: 'student', blocked: false, by: me.email, at: F.serverTimestamp() }));
        await wb.commit(); msg(`Saved ${Math.min(k + 450, fresh.length)} of ${fresh.length}…`);
      }
      msg(`Done: ${fresh.length} added, ${list.length - fresh.length} were already on the list.`); setTimeout(students, 800);
    };
    m.querySelector('#ar').onclick = () => allow([[+m.querySelector('#r1').value, +m.querySelector('#r2').value]]).catch(e => msg(niceError(e)));
    m.querySelector('#ad').onclick = () => allow(DEFAULT_RANGES).catch(e => msg(niceError(e)));
    m.querySelector('#ao').onclick = async () => {
      const email = m.querySelector('#oe').value.trim().toLowerCase();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return msg('Type a full email address.');
      try { await F.setDoc(F.doc(db, 'members', email), { id: (email.match(/^(\d{7})@/) || [])[1] || null, name: m.querySelector('#on').value.trim() || null, kind: m.querySelector('#ok').value, blocked: false, by: me.email, at: F.serverTimestamp() }, { merge: true }); students(); }
      catch (e) { msg(niceError(e)); }
    };
    m.querySelectorAll('[data-b]').forEach(b => b.onclick = async () => {
      const r = have.get(b.dataset.b);
      try { await F.updateDoc(F.doc(db, 'members', r.email), { blocked: !r.blocked, by: me.email, at: F.serverTimestamp() }); students(); } catch (e) { msg(niceError(e)); }
    });
    m.querySelectorAll('[data-x]').forEach(b => b.onclick = async () => { if (confirm('Remove ' + b.dataset.x + ' from the allowed list?')) { try { await F.deleteDoc(F.doc(db, 'members', b.dataset.x)); students(); } catch (e) { msg(niceError(e)); } } });
  } catch (e) { fail(e); }
}

// ------------------------------------------------------------ team
const ROLE_INFO = {
  owner: ['Owner', 'Everything, including admins and the company account.'],
  admin: ['Admin', 'Everything, except changing the owner or other admins: comments, notes, allowed students, moderators.'],
  moderator: ['Moderator', 'Comments and notes: review, reply, approve, publish corrections and methods; approve student verification requests.']
};
const CAN_SEE = { owner: 'Everything', admin: 'Everything except changing the owner or admins', moderator: 'Comments, Notes, verification requests' };
async function team() {
  const { F, db } = C;
  try {
    const [docs, seen] = await Promise.all([F.getDocs(F.collection(db, 'team')), F.getDocs(F.collection(db, 'seen'))]);
    const last = new Map(seen.docs.map(d => [d.id, d.data().at]));
    const people = [{ email: OWNER, name: 'Company account', role: 'owner', fixed: true },
      { email: FOUNDER, name: 'Founder', role: 'admin', fixed: true },
      ...docs.docs.map(d => ({ email: d.id, ...d.data() })).sort((a, b) => (a.role === b.role ? a.email.localeCompare(b.email) : a.role === 'admin' ? -1 : 1))];
    const canEdit = p => !p.fixed && (me.isOwner || p.role === 'moderator');
    const roles = me.isOwner ? ['admin', 'moderator'] : ['moderator'];
    const m = main(`<h1>Team</h1>
      <p class="lede">People sign in here with the Google account added below (any Gmail; they do not need the company account). Ask everyone to turn on 2-step verification.</p>
      <div class="tm-detail" style="overflow-x:auto"><table class="tm-t"><thead><tr><th>Person</th><th>Role</th><th>Can see</th><th>Last opened</th><th></th></tr></thead><tbody>
      ${people.map(p => `<tr><td><b>${esc(p.name || shortName(p.email))}</b>${p.email === me.email ? ' (you)' : ''}<br><span class="cm-dim">${esc(p.email)}</span></td>
        <td>${canEdit(p) && me.isOwner ? `<select data-r="${esc(p.email)}">${roles.map(x => `<option ${p.role === x ? 'selected' : ''}>${x}</option>`).join('')}</select>` : `<span class="tag">${esc(p.role.toUpperCase())}</span>`}</td>
        <td class="cm-dim">${esc(CAN_SEE[p.role])}</td>
        <td class="cm-dim">${last.get(p.email) ? esc(when(last.get(p.email))) : 'never'}</td>
        <td>${canEdit(p) && p.email !== me.email ? `<button class="cm-link" data-x="${esc(p.email)}">Remove</button>` : p.fixed ? '<span class="cm-dim">built in</span>' : ''}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="tm-detail"><h3>Add person</h3>
        <div class="tm-bar"><input class="search" id="tn" placeholder="name"><input class="search" id="te" placeholder="email (their Google account)">
        <select class="search" id="tr">${roles.map(x => `<option>${x}</option>`).join('')}</select><button class="btn" id="ta">Add person</button></div><p class="cm-msg" id="tm"></p></div>
      <div class="tiles">${Object.entries(ROLE_INFO).map(([k, [n, d]]) => `<div class="tile"><div class="k">${n}</div><p style="margin:6px 0 0">${esc(d)}</p></div>`).join('')}</div>`);
    const msg = t => { m.querySelector('#tm').textContent = t; };
    const put = (email, role, name) => F.setDoc(F.doc(db, 'team', email), { role, name: name || null, by: me.email, at: F.serverTimestamp() });
    m.querySelector('#ta').onclick = async () => {
      const email = m.querySelector('#te').value.trim().toLowerCase();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return msg('Type a full email address.');
      if (email === OWNER || email === FOUNDER) return msg('That account is built in already.');
      try { await put(email, m.querySelector('#tr').value, m.querySelector('#tn').value.trim()); team(); } catch (e) { msg(niceError(e)); }
    };
    m.querySelectorAll('[data-r]').forEach(sel => sel.onchange = async () => { const p = people.find(x => x.email === sel.dataset.r); try { await put(p.email, sel.value, p.name); team(); } catch (e) { msg(niceError(e)); } });
    m.querySelectorAll('[data-x]').forEach(b => b.onclick = async () => { if (confirm('Remove ' + b.dataset.x + ' from the team?')) { try { await F.deleteDoc(F.doc(db, 'team', b.dataset.x)); team(); } catch (e) { msg(niceError(e)); } } });
  } catch (e) { fail(e); }
}
