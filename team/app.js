// gvisualizer team dashboard: comments inbox, team notes, allowed students, lab access (bKash payments and codes), the tutor studio list and the team list.
import { enabled, fb, onUser, signIn, signOut, googleSignIn, niceError, esc, when, shortName, OWNER, FOUNDER, DOMAIN } from '../shared/fb.js';
import { DEFAULT_RANGES } from '../shared/config.js';

const app = document.getElementById('app');
const COURSES = { che301: { name: 'CHE 301 Heat Transfer', dir: '../question-bank/' }, che303: { name: 'ChE 303 Mass Transfer I', dir: '../mass-transfer/' }, che311: { name: 'CHE 311 Special Topics in Unit Operations', dir: '../unit-ops/' }, che313: { name: 'ChE 313 Chemical Engineering Thermodynamics II', dir: '../thermo/' }, math327: { name: 'MATH 327 Multivariable Statistics and Complex Analysis', dir: '../math327/' } };
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
  const tabs = [['overview', 'Overview'], ['comments', 'Comments'], ['notes', 'Notes'], ['students', 'Students'], ['labs', 'Lab access']].concat(me.isAdmin ? [['tutors', 'Tutors'], ['team', 'Team']] : []);
  if (!tabs.some(t => t[0] === view.tab)) view.tab = 'overview';
  app.innerHTML = `<div class="tm"><nav class="tm-nav">
      <div class="tm-me"><b>${esc(me.email)}</b><span class="tag">${esc(me.role)}</span></div>
      ${tabs.map(([k, n]) => `<a href="#${k}" class="${view.tab === k ? 'on' : ''}">${n}</a>`).join('')}
      <button class="btn ghost" id="out" style="margin-top:8px">Sign out</button>
    </nav><section id="main"><p class="empty">Loading…</p></section></div>`;
  $('#out').onclick = () => signOut();
  ({ overview, comments, notes, students, labs, tutors, team })[view.tab]();
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
        <a class="tile" href="#labs" style="text-decoration:none;color:inherit"><div class="k">Lab payments to check</div><div class="v" id="lp">…</div></a>
      </div>
      <p class="lede">Work through <b>new</b> comments first: fix the solution (publish a correction note, or note it for the next content update), approve useful ones so every student sees them, and reply so the student knows what happened.</p>`);
    labsApi('/summary').then(j => { const el = $('#lp'); if (el) el.textContent = j.pending; }).catch(() => { const el = $('#lp'); if (el) el.textContent = '—'; });
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
    <label>Credit<input type="text" id="cr" autocomplete="off" data-lpignore="true" data-1p-ignore="true" value="${esc(c.authorId || '')}"></label>
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
        <label>Question part id (as in the solution link, e.g. 2023-24-Q2b or practice-flash-P4)<input type="text" id="ap" autocomplete="off" data-lpignore="true" data-1p-ignore="true"></label>
        <label>Kind<select id="ak">${Object.entries(NOTE_KINDS).map(([k, n]) => `<option value="${k}">${n}</option>`).join('')}</select></label>
        <label>Text (markdown, math as $...$)<textarea id="at" rows="4"></textarea></label>
        <label>Credit (optional)<input type="text" id="acr" autocomplete="off" data-lpignore="true" data-1p-ignore="true"></label>
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
        <div class="tm-bar"><input class="search" id="r1" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="from, e.g. 2202001"><input class="search" id="r2" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="to, e.g. 2202120"><button class="btn" id="ar">Allow range</button></div>
        <div class="tm-bar"><button class="btn ghost" id="ad">Allow ${DEFAULT_RANGES.map(r => r.join('–')).join(' and ')}</button><span class="cm-dim" id="rm"></span></div>
        <h3>Add one person</h3><p class="cm-dim">For a teacher, a senior or anyone outside the ranges (any email, including Gmail).</p>
        <div class="tm-bar"><input class="search" id="oe" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="email"><input class="search" id="on" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="name (optional)"><select class="search" id="ok"><option value="guest">guest</option><option value="student">student</option></select><button class="btn" id="ao">Add</button></div></div>` : '<p class="cm-dim">Admins manage the allowed list; moderators approve verification requests.</p>'}
      <h3>Allowed people</h3>
      <div class="tm-bar"><input class="search" id="sq" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="Search email or name" value="${esc(view.q)}"><span class="cm-dim">${rows.length} of ${all.length}</span></div>
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

// ------------------------------------------------------------ lab access (gvisualizer-labs: bKash payments and access codes)
const LABS = 'https://gvisualizer-labs.pages.dev';
async function labsApi(path, body) {
  const t = await C.auth.currentUser.getIdToken();
  let r;
  try { r = await fetch(LABS + '/api/team' + path, { method: body ? 'POST' : 'GET', headers: { Authorization: 'Bearer ' + t, ...(body ? { 'Content-Type': 'application/json' } : {}) }, body: body ? JSON.stringify(body) : undefined }); }
  catch (e) { throw new Error('Could not reach the labs site.'); }
  const j = await r.json().catch(() => ({}));
  if (r.status === 503) throw new Error('The labs site is not set up yet (LAB_SECRET missing in Cloudflare).');
  if (!r.ok) throw new Error(j.error || 'Labs server error ' + r.status);
  return j;
}
const dhaka = s => s ? new Date(s * 1000).toLocaleString('en-GB', { timeZone: 'Asia/Dhaka', dateStyle: 'medium', timeStyle: 'short' }) : '';
const labView = { tab: 'pending' };
async function labs() {
  const t = labView.tab;
  const sub = [['pending', 'Pending'], ['approved', 'Approved'], ['rejected', 'Rejected'], ['users', 'Lab users'], ['codes', 'Codes'], ['settings', 'Settings']]
    .map(([k, n]) => `<button class="btn ${k === t ? '' : 'ghost'}" data-lt="${k}">${n}</button>`).join('');
  const m = main(`<h1>Lab access</h1>
    <p class="lede">Students sign in to the labs with their gvisualizer account, pay with bKash and submit the TrxID. Find the TrxID in the bKash app, check amount and sender, then approve: the code appears in the student's <b>My account</b>, they activate it once and it stays locked to their account. Team members open the labs without a code.</p>
    <div class="tm-bar">${sub}</div><p class="cm-msg" id="lm"></p><div id="lb"><p class="empty">Loading…</p></div>`);
  m.querySelectorAll('[data-lt]').forEach(b => b.onclick = () => { labView.tab = b.dataset.lt; labs(); });
  const box = m.querySelector('#lb'), msg = h => { m.querySelector('#lm').innerHTML = h; };
  const run = async (fn, done) => { try { const j = await fn(); done && done(j); } catch (e) { msg(esc(e.message)); } };
  try {
    if (t === 'settings') {
      const c = await labsApi('/settings'), ro = me.isAdmin ? '' : 'disabled';
      const sw = (id, on, label, hint) => `<label style="display:flex;gap:10px;align-items:flex-start;margin:12px 0;color:var(--ink)"><input type="checkbox" id="${id}" ${on ? 'checked' : ''} ${ro} style="width:auto;margin-top:4px"><span><b>${label}</b><br><span class="cm-dim">${hint}</span></span></label>`;
      box.innerHTML = `<div class="tiles"><div class="tile"><div class="k">Labs</div><div class="v" style="font-size:22px">${c.locked ? '🔒 Locked' : '🌐 Open to all'}</div></div>
        <div class="tile"><div class="k">Payments</div><div class="v" style="font-size:22px">${c.payments ? 'Accepting' : 'Paused'}</div></div>
        <div class="tile"><div class="k">Price</div><div class="v">${c.price ? '৳' + esc(c.price) : '—'}</div></div>
        <div class="tile"><div class="k">Students with access</div><div class="v">${c.activeUsers}</div></div></div>
        <div class="tm-detail"><h3>Lab website settings</h3>${me.isAdmin ? '' : '<p class="cm-dim">Only the owner or an admin can change these.</p>'}
        <label>Price (৳)<input type="text" id="sp" value="${esc(c.price)}" inputmode="numeric" ${ro}></label>
        <label>Access per code (months)<input type="text" id="sm" value="${esc(c.months)}" inputmode="numeric" ${ro}></label>
        <label>bKash number students send to<input type="text" id="sb" value="${esc(c.bkash)}" inputmode="tel" ${ro}></label>
        <label>Notice on the pay page (optional, e.g. an offer)<input type="text" id="sn" value="${esc(c.notice)}" maxlength="200" ${ro}></label>
        ${sw('sl', c.locked, 'Lock the labs', 'On: only people with a code can open the labs. Off: anyone can open them (free preview).')}
        ${sw('sy', c.payments, 'Accept new payments', 'Off: the pay page says payments are paused.')}
        ${me.isAdmin ? '<div class="cm-row"><button class="btn" id="ss">Save settings</button></div>' : ''}
        ${c.by ? `<p class="cm-dim">Last changed by ${esc(c.by)}, ${esc(dhaka(c.at))}</p>` : ''}</div>
        <div class="tm-detail"><h3>Links</h3><p><a href="${LABS}/" target="_blank" rel="noopener">Labs home</a> · <a href="${LABS}/pay" target="_blank" rel="noopener">Pay page</a> · <a href="${LABS}/pay/status" target="_blank" rel="noopener">Check request page</a></p></div>
        ${me.isOwner ? `<div class="tm-detail"><h3>Log everyone out</h3><p class="cm-dim">Every student must sign in to the labs again (their access stays). Use it if you think logins were shared.</p><button class="btn ghost" id="lo">Log everyone out</button></div>` : ''}`;
      const ss = box.querySelector('#ss');
      if (ss) ss.onclick = () => run(() => labsApi('/settings/save', { months: box.querySelector('#sm').value, price: box.querySelector('#sp').value, bkash: box.querySelector('#sb').value, notice: box.querySelector('#sn').value.trim(), locked: box.querySelector('#sl').checked, payments: box.querySelector('#sy').checked }), () => labs().then(() => msg('Saved. The lab website uses the new settings within a minute.')));
      const lo = box.querySelector('#lo');
      if (lo) lo.onclick = () => { if (confirm('Log every student out of the labs?')) run(() => labsApi('/logout-everyone', {}), () => msg('Everyone is logged out (within a minute).')); };
    } else if (t === 'users') {
      const { items } = await labsApi('/users'), nowS = Date.now() / 1000;
      box.innerHTML = `<div class="tm-detail" style="overflow-x:auto"><table class="tm-t"><thead><tr><th>Account</th><th>Access until</th><th>Devices</th></tr></thead><tbody>
        ${items.map(u => `<tr><td><b>${esc(u.email || u.uid)}</b></td><td class="${u.until > nowS ? 'st-approved' : 'st-declined'}">${u.until ? esc(dhaka(u.until).split(',')[0]) + (u.until > nowS ? '' : ' (ended)') : 'never had access'}</td><td>${u.devices || 0}/2</td></tr>`).join('') || '<tr><td colspan="3" class="cm-dim">No one has signed in to the labs yet.</td></tr>'}
        </tbody></table><p class="cm-dim">To stop someone, revoke their code in <b>Codes</b>, or block them in <b>Students</b>.</p></div>`;
    } else if (t === 'codes') {
      const { items } = await labsApi('/codes'), nowS = Date.now() / 1000;
      box.innerHTML = (me.isAdmin ? `<div class="tm-detail"><h3>Free access code</h3><div class="tm-bar"><input class="search" id="cn" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="name">
          <select class="search" id="cmo">${[1, 3, 6, 12].map(n => `<option value="${n}" ${n === 6 ? 'selected' : ''}>${n} month${n > 1 ? 's' : ''}</option>`).join('')}</select><button class="btn" id="cc">Create code</button></div>
          <p class="cm-dim">Send the code to the person. They activate it once in the labs and it locks to their account.</p></div>` : '') +
        `<div class="tm-detail" style="overflow-x:auto"><table class="tm-t"><thead><tr><th>Name</th><th>Paid with</th><th>Activated by</th><th>Valid until</th><th>Status</th><th></th></tr></thead><tbody>
        ${items.map(c => `<tr><td><b>${esc(c.name || '—')}</b>${c.free ? ' <span class="tag">free</span>' : ''}<br><span class="cm-dim">${esc(c.months || 6)} months · by ${esc(c.by || '')}</span></td>
          <td>${esc(c.phone || '')}<br><span class="cm-dim">${esc(c.trx || '')}</span></td>
          <td>${c.redeemedBy ? esc(c.redeemedBy) : `<span class="cm-dim">not yet${c.account ? ' (for ' + esc(c.account) + ')' : ''}</span>`}</td>
          <td class="cm-dim">${c.until ? esc(dhaka(c.until).split(',')[0]) : ''}</td>
          <td><span class="${c.revoked ? 'st-declined' : c.until && c.until < nowS ? 'st-declined' : 'st-approved'}">${c.revoked ? 'revoked' : c.until && c.until < nowS ? 'ended' : c.redeemedBy ? 'active' : 'unused'}</span></td>
          <td>${me.isAdmin ? `${c.redeemedBy ? `<button class="cm-link" data-reset="${c.tag}">Reset devices</button> · ` : ''}${c.revoked ? `<button class="cm-link" data-on="${c.tag}">Turn on</button>` : `<button class="cm-link" data-off="${c.tag}">Revoke</button>`}` : ''}</td></tr>`).join('') || '<tr><td colspan="6" class="cm-dim">No codes yet.</td></tr>'}
        </tbody></table></div>`;
      const cc = box.querySelector('#cc');
      if (cc) cc.onclick = () => run(() => labsApi('/codes/create', { name: box.querySelector('#cn').value.trim(), months: box.querySelector('#cmo').value }), j => { labs().then(() => msg(`New code: <b>${esc(j.code)}</b> — copy it now and send it to the person.`)); });
      box.querySelectorAll('[data-reset]').forEach(b => b.onclick = () => run(() => labsApi('/codes/reset', { tag: b.dataset.reset }), () => labs().then(() => msg('Devices cleared. The person can add 2 devices again.'))));
      box.querySelectorAll('[data-on]').forEach(b => b.onclick = () => run(() => labsApi('/codes/restore', { tag: b.dataset.on }), () => labs()));
      box.querySelectorAll('[data-off]').forEach(b => b.onclick = () => { if (confirm('Revoke this code? The person loses lab access within a minute.')) run(() => labsApi('/codes/revoke', { tag: b.dataset.off }), () => labs()); });
    } else {
      const { items } = await labsApi('/payments?status=' + t);
      box.innerHTML = `<div class="tm-detail" style="overflow-x:auto"><table class="tm-t"><thead><tr><th>TrxID</th><th>Sender</th><th>৳</th><th>Student</th><th>Submitted</th><th></th></tr></thead><tbody>
        ${items.map(p => `<tr><td><b>${esc(p.trx)}</b></td><td>${esc(p.phone)}</td><td>${esc(p.amount)}</td>
          <td>${esc(p.name)}${p.account ? `<br><span class="cm-dim">${esc(p.account)}</span>` : ''}</td>
          <td class="cm-dim">${esc(dhaka(p.created))}${p.by ? `<br>${t} by ${esc(p.by)}` : ''}</td>
          <td>${t === 'pending' ? `<button class="btn" data-ok="${esc(p.trx)}">Approve</button> <button class="cm-link" data-no="${esc(p.trx)}">Reject</button>` : t === 'rejected' ? `<button class="cm-link" data-ok="${esc(p.trx)}">Approve</button>` : ''}</td></tr>`).join('') || '<tr><td colspan="6" class="cm-dim">Nothing here.</td></tr>'}
        </tbody></table></div>`;
      box.querySelectorAll('[data-ok]').forEach(b => b.onclick = () => { if (confirm('Approve ' + b.dataset.ok + '? Only if you found this TrxID in bKash with the right amount.')) { b.disabled = true; run(() => labsApi('/payments/approve', { trx: b.dataset.ok }), j => labs().then(() => msg(`Approved. Code <b>${esc(j.code)}</b> — the student sees it in My account and activates it.`))); } });
      box.querySelectorAll('[data-no]').forEach(b => b.onclick = () => { const note = prompt('Reject ' + b.dataset.no + '? Optional reason shown to the student:', 'TrxID not found in bKash.'); if (note !== null) run(() => labsApi('/payments/reject', { trx: b.dataset.no, note }), () => labs()); });
    }
  } catch (e) { box.innerHTML = `<p class="empty">${esc(e.message)}</p>`; }
}

// ------------------------------------------------------------ tutors (tutor studio access and its question bank)
// Admins only. The tutors list is separate from the allowed students: nobody gets the studio by being a student.
// The shared question bank lives in Firestore (tutorBank/*), never in this repository; it is uploaded here from a file.
const BANK_PART_BYTES = 600000;
function bankParts(list) {
  const enc = new TextEncoder(), parts = [];
  let cur = [], size = 2;
  for (const q of list) {
    const n = enc.encode(JSON.stringify(q)).length + 1;
    if (n > BANK_PART_BYTES) throw new Error('Question ' + q.id + ' is too large (over 600 KB). Shrink its image.');
    if (cur.length && size + n > BANK_PART_BYTES) { parts.push(cur); cur = []; size = 2; }
    cur.push(q); size += n;
  }
  if (cur.length) parts.push(cur);
  return parts;
}
async function tutors() {
  const { F, db } = C;
  if (!me.isAdmin) return main('<p class="empty">Only admins manage the tutor studio.</p>');
  try {
    const [tu, bank] = await Promise.all([F.getDocs(F.collection(db, 'tutors')), F.getDocs(F.collection(db, 'tutorBank'))]);
    const all = tu.docs.map(d => ({ email: d.id, ...d.data() })).sort((a, b) => a.email.localeCompare(b.email));
    const have = new Map(all.map(r => [r.email, r]));
    const parts = bank.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => a.id.localeCompare(b.id));
    const total = parts.reduce((n, p) => n + (p.count || 0), 0);
    const last = parts.reduce((a, p) => (p.updatedAt && (!a || p.updatedAt.seconds > a.updatedAt.seconds) ? p : a), null);
    const m = main(`<h1>Tutors</h1>
      <p class="lede">Who can open the <a href="../tutor/" target="_blank" rel="noopener">tutor studio</a>. This list is separate from <b>Students</b>: being an allowed student gives no access here. A tutor signs in on the studio page with the email below (their BUET account, or Google for any Gmail).</p>
      <div class="tm-detail"><h3>Add a tutor</h3>
        <div class="tm-bar"><input class="search" id="ue" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="email or 7-digit student ID"><input class="search" id="un" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="name (optional)"><input class="search" id="uo" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="note, e.g. paid until March (optional)"><button class="btn" id="ua">Add tutor</button></div>
        <p class="cm-msg" id="um"></p></div>
      <div class="tm-detail" style="overflow-x:auto"><h3>Tutors with access (${all.filter(r => !r.blocked).length})</h3>
        ${all.length ? `<table class="tm-t"><thead><tr><th>Email</th><th>Note</th><th>Status</th><th>Added</th><th></th></tr></thead><tbody>
        ${all.map(r => `<tr><td><b>${esc(r.name || shortName(r.email))}</b><br><span class="cm-dim">${esc(r.email)}</span></td><td class="cm-dim">${esc(r.note || '')}</td>
          <td>${r.blocked ? '<span class="st-new">blocked</span>' : '<span class="st-approved">has access</span>'}</td><td class="cm-dim">${esc(when(r.at))}<br>by ${esc(shortName(r.by || ''))}</td>
          <td><button class="cm-link" data-b="${esc(r.email)}">${r.blocked ? 'Unblock' : 'Block'}</button> · <button class="cm-link" data-x="${esc(r.email)}">Remove</button></td></tr>`).join('')}
        </tbody></table>` : '<p class="empty">No tutors yet. Admins can always open the studio.</p>'}</div>
      <div class="tm-detail"><h3>Shared question bank</h3>
        <p>${total ? `<b>${total}</b> questions in ${parts.length} part${parts.length > 1 ? 's' : ''}${last ? `, last uploaded ${esc(when(last.updatedAt))} by ${esc(shortName(last.updatedBy || ''))}` : ''}.` : 'Nothing uploaded yet: tutors see an empty bank.'}</p>
        <p class="cm-dim">Upload the bank as one JSON file (a list of questions). It <b>replaces</b> the whole bank for every tutor. Keep the file on your computer or a private drive, never in the public repository. Tutors' own questions stay in their browsers and are not affected.</p>
        <div class="tm-bar"><input type="file" id="bf" accept=".json,application/json"><button class="btn" id="bu">Upload and replace bank</button>${total ? '<button class="btn ghost" id="bd">Download current bank</button>' : ''}</div>
        <p class="cm-msg" id="bm"></p></div>`);
    const msg = t => { m.querySelector('#um').textContent = t; }, bmsg = t => { m.querySelector('#bm').textContent = t; };
    m.querySelector('#ua').onclick = async () => {
      let email = m.querySelector('#ue').value.trim().toLowerCase();
      if (/^\d{7}$/.test(email)) email += '@' + DOMAIN;
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return msg('Type a full email address or a 7-digit student ID.');
      if (have.has(email)) return msg(email + ' is already on the list.');
      try { await F.setDoc(F.doc(db, 'tutors', email), { name: m.querySelector('#un').value.trim().slice(0, 80) || null, note: m.querySelector('#uo').value.trim().slice(0, 200) || null, blocked: false, by: me.email, at: F.serverTimestamp() }); tutors(); }
      catch (e) { msg(niceError(e)); }
    };
    m.querySelectorAll('[data-b]').forEach(b => b.onclick = async () => {
      const r = have.get(b.dataset.b);
      try { await F.setDoc(F.doc(db, 'tutors', r.email), { name: r.name || null, note: r.note || null, blocked: !r.blocked, by: me.email, at: F.serverTimestamp() }); tutors(); } catch (e) { msg(niceError(e)); }
    });
    m.querySelectorAll('[data-x]').forEach(b => b.onclick = async () => { if (confirm('Remove ' + b.dataset.x + ' from the tutors list? They lose the studio at once.')) { try { await F.deleteDoc(F.doc(db, 'tutors', b.dataset.x)); tutors(); } catch (e) { msg(niceError(e)); } } });
    m.querySelector('#bu').onclick = async () => {
      const f = m.querySelector('#bf').files[0];
      if (!f) return bmsg('Choose the JSON file first.');
      try {
        const list = JSON.parse(await f.text());
        if (!Array.isArray(list) || !list.length) throw new Error('The file must be a JSON list of questions.');
        const ids = new Set();
        list.forEach((q, i) => {
          if (!q || typeof q !== 'object' || typeof q.id !== 'string' || !/^[\w.-]{1,80}$/.test(q.id) || typeof q.stem !== 'string' || !q.stem.trim()) throw new Error('Entry ' + (i + 1) + ' needs an id (letters, digits, _ . -) and a stem.');
          if (ids.has(q.id)) throw new Error('The id ' + q.id + ' appears twice.');
          ids.add(q.id);
        });
        const chunks = bankParts(list);
        if (!confirm(`Replace the shared bank (${total} questions) with ${list.length} questions from ${f.name}? Every tutor sees the new bank on their next visit.`)) return;
        for (let i = 0; i < chunks.length; i++) {
          bmsg(`Uploading part ${i + 1} of ${chunks.length}…`);
          await F.setDoc(F.doc(db, 'tutorBank', 'part-' + String(i).padStart(3, '0')), { data: JSON.stringify(chunks[i]), count: chunks[i].length, updatedAt: F.serverTimestamp(), updatedBy: me.email });
        }
        const keep = new Set(chunks.map((_, i) => 'part-' + String(i).padStart(3, '0')));
        for (const p of parts) if (!keep.has(p.id)) await F.deleteDoc(F.doc(db, 'tutorBank', p.id));
        bmsg(`Done: ${list.length} questions uploaded.`); setTimeout(tutors, 900);
      } catch (e) { bmsg(e instanceof SyntaxError ? 'That file is not valid JSON.' : niceError(e)); }
    };
    const bd = m.querySelector('#bd');
    if (bd) bd.onclick = () => {
      const list = []; parts.forEach(p => { try { list.push(...JSON.parse(p.data)); } catch (e) { /* skip a damaged part */ } });
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(list, null, 1)], { type: 'application/json' }));
      a.download = 'tutor-bank.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
  } catch (e) { fail(e); }
}

// ------------------------------------------------------------ team
const ROLE_INFO = {
  owner: ['Owner', 'Everything, including admins and the company account.'],
  admin: ['Admin', 'Everything, except changing the owner or other admins: comments, notes, allowed students, tutors and their question bank, moderators.'],
  moderator: ['Moderator', 'Comments and notes: review, reply, approve, publish corrections and methods; approve student verification requests; approve lab payments.']
};
const CAN_SEE = { owner: 'Everything', admin: 'Everything except changing the owner or admins', moderator: 'Comments, Notes, verification requests, lab payments' };
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
        <div class="tm-bar"><input class="search" id="tn" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="name"><input class="search" id="te" autocomplete="off" data-lpignore="true" data-1p-ignore="true" placeholder="email (their Google account)">
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
