/* Home page search across both courses (index built by tools/build-search-index.js, loaded on first use). */
(function () {
  const $ = s => document.querySelector(s);
  const input = $('#gs'), form = input && input.form, out = $('#results'), browse = $('#browse');
  if (!input) return;
  const CODE = { 'mass-transfer': 'ChE 303', 'question-bank': 'CHE 301', 'unit-ops': 'CHE 311', 'thermo': 'ChE 313' };
  const FREE = { 'mass-transfer': '2023-24', 'question-bank': '2023-24', 'unit-ops': '2023-24', 'thermo': '2023-24' };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[–—‐-]/g, ' ');
  // A student ID or email is the browser's password manager, never a search.
  const clean = v => { v = String(v || '').trim(); return /^(\d{6,9}|[^\s@]+@[^\s@]*)$/.test(v) ? '' : v; };
  let idx = null, loading = null, shown = 20, last = '';

  function load() {
    if (idx) return Promise.resolve(idx);
    if (!loading) loading = new Promise(res => {
      const s = document.createElement('script'); s.src = 'search-index.js?v=202611131019';
      s.onload = () => { idx = (window.GV_INDEX || []).map(r => { const topic = (window.GV_TOPICS || [])[r[5]] || ''; return { dir: r[0], id: r[1], label: r[2], title: r[3], text: r[4], topic, type: r[6], practice: !!r[7], paper: r[8], hTitle: norm(r[3]), hAll: norm([r[3], r[4], topic, r[2], CODE[r[0]]].join(' ')) }; }); res(idx); };
      s.onerror = () => res([]);
      document.head.appendChild(s);
    });
    return loading;
  }
  const guest = () => { try { return localStorage.getItem('gv-access') !== '1'; } catch (e) { return true; } };
  function mark(text, toks) {
    let h = esc(text);
    toks.filter(t => t.length > 1).forEach(t => { h = h.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); });
    return h;
  }
  async function run(q, keepCount) {
    q = clean(q); last = q;
    try { const u = new URL(location.href); if (q) u.searchParams.set('q', q); else u.searchParams.delete('q'); history.replaceState(null, '', u); } catch (e) {}
    if (!q) { out.hidden = true; out.innerHTML = ''; if (browse) browse.hidden = false; return; }
    if (!keepCount) shown = 20;
    const all = await load(); if (q !== last) return;
    const toks = norm(q).split(/\s+/).filter(Boolean);
    const hits = [];
    for (const r of all) {
      let score = 0, ok = true;
      for (const t of toks) { if (!r.hAll.includes(t)) { ok = false; break; } score += r.hTitle.includes(t) ? 5 : norm(r.topic).includes(t) ? 2 : 1; }
      if (ok) hits.push([score + (r.practice ? 0 : 1), r]);
    }
    hits.sort((a, b) => b[0] - a[0]);
    const g = guest();
    const list = hits.slice(0, shown).map(([, r]) => {
      const locked = g && (r.practice || r.paper !== FREE[r.dir]);
      return `<a class="res" href="${r.dir}/solutions.html#${encodeURIComponent(r.id)}"><b>${mark(r.title || r.label, toks)}</b>${locked ? '<p class="lock">Sign in to see this question and its solution</p>' : `<p>${mark(r.text, toks)}</p>`}<span class="rm"><span>${CODE[r.dir]}</span><span>${esc(r.label)}</span><span>${esc(r.topic.replace(/^.*? · /, ''))}</span>${r.type ? `<span>${esc(r.type)}</span>` : ''}</span></a>`;
    }).join('');
    out.innerHTML = `<div class="rhead"><span><b>${hits.length}</b> ${hits.length === 1 ? 'question' : 'questions'} for “${esc(q)}”</span><button type="button" class="btn ghost" id="clr">Clear</button></div>` +
      (list || '<p class="empty">No questions match. Try a shorter word, e.g. “reflux” or “fin”.</p>') +
      (hits.length > shown ? `<p style="text-align:center"><button type="button" class="btn ghost" id="more">Show more</button></p>` : '');
    out.hidden = false; if (browse) browse.hidden = true;
    const c = $('#clr'); if (c) c.onclick = () => { input.value = ''; run(''); input.focus(); };
    const m = $('#more'); if (m) m.onclick = () => { shown += 20; run(q, true); };
  }
  let t;
  input.addEventListener('focus', load, { once: true });
  input.addEventListener('input', () => { clearTimeout(t); const v = clean(input.value); if (!v && input.value) input.value = ''; t = setTimeout(() => run(v), 180); });
  form.addEventListener('submit', e => { e.preventDefault(); run(input.value); input.blur(); });
  document.querySelectorAll('.try button').forEach(b => b.addEventListener('click', () => { input.value = b.textContent; run(b.textContent); }));
  // Clear anything a password manager drops in after load.
  [300, 1000, 2500].forEach(ms => setTimeout(() => { if (input.value && !clean(input.value)) { input.value = ''; run(''); } }, ms));
  const q0 = clean(new URLSearchParams(location.search).get('q'));
  if (q0) { input.value = q0; run(q0); }
  else if (location.hash === '#search') setTimeout(() => input.focus(), 50);
})();
