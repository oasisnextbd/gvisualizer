/* gvisualizer question bank: shared data registry, loader and renderer.
   Defaults are CHE 301; another course sets window.QB_COURSE={topics,years,sets} before loading this file. */
(function(){
const COURSE=window.QB_COURSE||{};
const TOPICS=COURSE.topics||[
  {id:'intro',name:'Introduction & modes',ch:'01'},
  {id:'conduction',name:'Steady conduction',ch:'02'},
  {id:'insulation',name:'Critical insulation',ch:'02'},
  {id:'generation',name:'Heat generation',ch:'02'},
  {id:'convection-basics',name:'Convection basics & dimensionless numbers',ch:'05'},
  {id:'boundary-layer',name:'Boundary layers & analogies',ch:'05'},
  {id:'forced-convection',name:'Forced convection correlations',ch:'06'},
  {id:'natural-convection',name:'Natural convection',ch:'07'},
  {id:'condensation',name:'Condensation',ch:'08'},
  {id:'boiling',name:'Boiling',ch:'08'},
  {id:'heat-exchangers',name:'Heat exchangers: LMTD, double pipe, ε–NTU',ch:'HX'},
  {id:'shell-tube',name:'Shell & tube design (Kern)',ch:'HX'},
  {id:'evaporator',name:'Evaporators',ch:'10'},
  {id:'other',name:'Other (radiation, transient)',ch:'–'}
];
const YEARS=COURSE.years||['2023-24','2022-23','2021-22','2020-21','2018-19','2017-18','2016-17','2015-16','2014-15','2013-14','2012-13','2011-12'];
const SETS=(COURSE.sets||['intro','conduction','insulation','generation','convection-basics','boundary-layer','forced-convection','natural-convection','condensation','boiling','heat-exchangers','shell-tube','evaporator']).map(t=>'practice-'+t);   /* book-style practice sets, files data/<name>.js */
const keyOf=p=>p.practice?'practice-'+String(p.set||'set').toLowerCase().replace(/[^a-z0-9]+/g,'-'):p.year;
const papers={}, parts=[], byId={};
// Guests (not signed in with an allowed account) see one paper's questions and 2 of its solutions per course.
// shared/community.js flips QB.guest to false once a signed-in, allowed account is confirmed ('qb:access' event).
const guestHint=(()=>{ try{ return localStorage.getItem('gv-access')!=='1'; }catch(e){ return true; } })();
const QB={TOPICS,YEARS,SETS,papers,parts,byId,keyOf,stepify,related,guest:guestHint,freeYear:COURSE.freeYear||'2023-24',freeSolutions:2,
  // A student ID or email in the search box is the browser's password manager, never a real search: drop it.
  cleanQ:v=>{ v=String(v||'').trim(); return /^(\d{6,9}|[^\s@]+@[^\s@]*)$/.test(v)?'':v; },
  guardSearch(inp,onClear){ if(!inp) return; const chk=()=>{ if(inp.value&&!QB.cleanQ(inp.value)){ inp.value=''; onClear(); } };
    ['input','change','focus','blur'].forEach(ev=>inp.addEventListener(ev,chk)); [300,1000,2500,5000].forEach(t=>setTimeout(chk,t)); },
  keys:()=>YEARS.filter(y=>papers[y]).concat(Object.keys(papers).filter(k=>k.startsWith('practice-'))),
  topic:id=>TOPICS.find(t=>t.id===id)||TOPICS[TOPICS.length-1],
  paper(p){ const key=keyOf(p); p.key=key; papers[key]=p; p.questions.forEach(q=>q.parts.forEach((pt,i)=>{ const o=Object.assign({},pt,{year:p.year,key,practice:!!p.practice,set:p.set||'',q:q.q,section:q.section,compulsory:q.compulsory,stem:q.stem||'',qid:q.id,idx:i,siblings:q.parts.map(x=>x.id)}); parts.push(o); byId[o.id]=o; })); },
  load(done){ const files=YEARS.concat(SETS); let left=files.length; files.forEach(y=>{ const s=document.createElement('script'); s.src='data/'+y+'.js'; s.onload=s.onerror=()=>{ if(--left===0){ parts.sort(cmp); done(); } }; document.head.appendChild(s); }); },
  label:p=>p.practice?`Practice · ${p.set} P${p.q}${p.label||''}`:`${p.year} · Q${p.q}${p.label?p.label:''}`,
  title:k=>{ const P=papers[k]; return P&&P.practice?'Practice: '+P.set:k; },
  md, typeset, typesetLazy
};
function rank(p){ const i=YEARS.indexOf(p.key); return i<0?YEARS.length:i; }
function cmp(a,b){ return rank(a)-rank(b)||(a.key<b.key?-1:a.key>b.key?1:0)||a.q-b.q||a.idx-b.idx; }
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function inline(s,math){
  s=s.replace(/\$\$([\s\S]+?)\$\$/g,(m,x)=>{ math.push('\\['+x+'\\]'); return '\u0000'+(math.length-1)+'\u0000'; });
  s=s.replace(/\$([^$\n]+?)\$/g,(m,x)=>{ math.push('\\('+x+'\\)'); return '\u0000'+(math.length-1)+'\u0000'; });
  s=esc(s).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g,'$1<em>$2</em>');
  return s.replace(/\u0000(\d+)\u0000/g,(m,i)=>esc(math[+i]));
}
function md(src){
  if(!src) return '';
  const L=String(src).replace(/\r/g,'').split('\n'); let out='',i=0;
  const para=[]; const flush=()=>{ if(para.length){ out+='<p>'+inline(para.join(' '),[])+'</p>'; para.length=0; } };
  while(i<L.length){ const ln=L[i], t=ln.trim();
    if(!t){ flush(); i++; continue; }
    if(t.startsWith('$$')){ flush(); let buf=[t.slice(2)]; if(t.length>2&&t.endsWith('$$')&&t!=='$$'){ out+='<div class="dm">'+esc('\\['+t.slice(2,-2)+'\\]')+'</div>'; i++; continue; } i++; while(i<L.length&&!L[i].trim().endsWith('$$')){ buf.push(L[i]); i++; } if(i<L.length){ buf.push(L[i].trim().slice(0,-2)); i++; } out+='<div class="dm">'+esc('\\['+buf.join('\n')+'\\]')+'</div>'; continue; }
    { const im=t.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/); if(im){ flush(); out+='<figure class="fig"><img src="'+esc(im[2])+'" alt="'+esc(im[1])+'" loading="lazy">'+(im[1]?'<figcaption>'+inline(im[1],[])+'</figcaption>':'')+'</figure>'; i++; continue; } }
    if(/^#{2,4}\s/.test(t)){ flush(); const n=t.match(/^#+/)[0].length; out+=`<h${Math.min(6,n+1)}>`+inline(t.replace(/^#+\s*/,''),[])+`</h${Math.min(6,n+1)}>`; i++; continue; }
    if(t.startsWith('|')){ flush(); const rows=[]; while(i<L.length&&L[i].trim().startsWith('|')){ rows.push(L[i].trim()); i++; }
      const cells=r=>r.replace(/^\||\|$/g,'').split('|').map(c=>c.trim()); let h='<div class="tw"><table>'; let body=rows;
      if(rows.length>1&&/^\|?\s*:?-{2,}/.test(rows[1])){ h+='<thead><tr>'+cells(rows[0]).map(c=>'<th>'+inline(c,[])+'</th>').join('')+'</tr></thead>'; body=rows.slice(2); }
      h+='<tbody>'+body.map(r=>'<tr>'+cells(r).map(c=>'<td>'+inline(c,[])+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>'; out+=h; continue; }
    if(t.startsWith('>')){ flush(); const b=[]; while(i<L.length&&L[i].trim().startsWith('>')){ b.push(L[i].trim().replace(/^>\s?/,'')); i++; } out+='<div class="note">'+md(b.join('\n'))+'</div>'; continue; }
    if(/^(-|\*|\d+[.)])\s/.test(t)){ flush(); const ol=/^\d/.test(t); let h=ol?(parseInt(t,10)>1?'<ol start="'+parseInt(t,10)+'">':'<ol>'):'<ul>';
      const ind=L[i].match(/^\s*/)[0].length;
      while(i<L.length&&/^\s*(-|\*|\d+[.)])\s/.test(L[i])&&L[i].match(/^\s*/)[0].length<=ind){ let item=L[i].trim().replace(/^(-|\*|\d+[.)])\s/,''); i++; while(i<L.length&&L[i].trim()&&/^\s{2,}/.test(L[i])&&!/^\s*(-|\*|\d+[.)])\s/.test(L[i])){ item+=' '+L[i].trim(); i++; }
        let sub=''; if(i<L.length&&/^\s*(-|\*|\d+[.)])\s/.test(L[i])&&L[i].match(/^\s*/)[0].length>=ind+2){ const sl=[]; while(i<L.length&&L[i].trim()&&L[i].match(/^\s*/)[0].length>=ind+2){ sl.push(L[i].replace(new RegExp('^\\s{'+(ind+2)+'}'),'')); i++; } sub=md(sl.join('\n')); }
        h+='<li>'+inline(item,[])+sub+'</li>'; }
      out+=h+(ol?'</ol>':'</ul>'); continue; }
    para.push(t); i++; }
  flush(); return out;
}
// Long lists: typeset each card only when it comes near the screen (typesetting hundreds of formulas at once is slow on phones).
// Chegg-style solution: split a rendered solution into "Given" + "Step N" cards. Numbered bold-led items ("1. **Balances:** …")
// and ###-headings start steps; everything after a step start belongs to it. Theory answers stay one card.
function stepify(html,type){
  const d=document.createElement('div'); d.innerHTML=html;
  const kids=[...d.childNodes].filter(n=>n.nodeType===1||(n.textContent||'').trim());
  const lead=el=>{ const f=[...el.childNodes].find(n=>n.nodeType===1||(n.textContent||'').trim()); return f&&f.nodeType===1&&f.tagName==='STRONG'?f:null; };
  const isStepList=el=>el.tagName==='OL'&&el.children.length&&[...el.children].every(li=>lead(li));
  const steps=[], pre=[]; let cur=null;
  const add=(title,nodes)=>{ cur={title,nodes:nodes||[]}; steps.push(cur); };
  const hasHeads=kids.some(el=>el.nodeType===1&&/^H[234]$/.test(el.tagName));
  const numeric=type!=='theory'&&type!=='sketch'&&!hasHeads;
  for(const el of kids){
    if(el.nodeType===1&&/^H[234]$/.test(el.tagName)){ add(el.textContent.replace(/^\s*(\d+[.)]|Step\s*\d+[:.]?)\s*/i,'').trim()); continue; }
    if(numeric&&el.nodeType===1&&isStepList(el)){
      for(const li of [...el.children]){ const st=lead(li); let t=st.textContent.trim();
        if(/[:.]$/.test(t)){ st.remove(); t=t.replace(/[:.]$/,''); if(li.firstChild&&li.firstChild.nodeType===3) li.firstChild.textContent=li.firstChild.textContent.replace(/^\s+/,''); }
        add(t,[...li.childNodes]); }
      continue; }
    (cur?cur.nodes:pre).push(el);
  }
  const box=(cls,label,title,nodes)=>{ const b=document.createElement('div'); nodes.forEach(n=>b.appendChild(n)); return `<section class="step${cls}"><div class="step-h"><span class="step-n">${label}</span>${title?`<span class="step-t">${title.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</span>`:''}</div><div class="step-b">${b.innerHTML}</div></section>`; };
  if(!steps.length) return {n:1,html:box('','Explanation','',pre)};
  const givenLike=pre.length&&pre.every(el=>el.nodeType===1&&el.tagName==='P'&&lead(el)&&/^(given|data|find|known|assum|basis|properties|note)/i.test(lead(el).textContent.trim()));
  let h=pre.length?box(givenLike?' given':'',givenLike?'Given':'Approach','',pre):'';
  steps.forEach((s,i)=>{ h+=box('','Step '+(i+1),s.title,s.nodes); });
  return {n:steps.length,html:h};
}
// Related questions for the side panel: same problem asked in other years first, then the same topic.
function related(p,n){
  const out=[], seen=new Set([p.id].concat(p.siblings||[]));
  (p.repeats||[]).forEach(id=>{ const r=byId[id]; if(r&&!seen.has(id)){ seen.add(id); out.push(r); } });
  const pool=parts.filter(x=>x.topic===p.topic&&!seen.has(x.id)&&!!x.practice===!!p.practice);
  const i=pool.findIndex(x=>cmp(x,p)>0); const ordered=i<0?pool.slice().reverse():pool.slice(i).concat(pool.slice(0,i).reverse());
  for(const x of ordered){ if(out.length>=n) break; if(!x.sub) continue; seen.add(x.id); out.push(x); }
  return out.slice(0,n);
}
function typesetLazy(root,sel){ if(root.__io) root.__io.disconnect(); const items=root.querySelectorAll(sel||'.card'); if(!('IntersectionObserver' in window)||!items.length) return typeset(root);
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ io.unobserve(e.target); typeset(e.target); } }),{rootMargin:'800px 0px'}); root.__io=io; items.forEach(c=>io.observe(c)); }
function typeset(el){ if(window.MathJax&&MathJax.typesetPromise){ MathJax.typesetClear&&MathJax.typesetClear([el]); MathJax.typesetPromise([el]).catch(()=>{}); } else { (window.__mjq=window.__mjq||[]).push(el); } }
window.MathJax={tex:{inlineMath:[['\\(','\\)']],displayMath:[['\\[','\\]']]},svg:{fontCache:'global'},startup:{typeset:false,ready(){ MathJax.startup.defaultReady(); (window.__mjq||[]).forEach(e=>MathJax.typesetPromise([e]).catch(()=>{})); }}};
window.QB=QB;
})();
