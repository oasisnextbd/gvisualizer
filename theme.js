/* Site-wide day/night theme and Back button. Pages include this in <head>. */
(function(){
  var KEY='gv-theme', root=document.documentElement;
  var MOON='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/></svg>';
  var SUN='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>';
  function saved(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function current(){ return saved()||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'); }
  function apply(t){ root.setAttribute('data-theme',t); document.querySelectorAll('.themebtn').forEach(function(b){ b.innerHTML=t==='light'?MOON:SUN; b.title=t==='light'?'Night theme':'Day theme'; b.setAttribute('aria-label',t==='light'?'Switch to night theme':'Switch to day theme'); }); window.dispatchEvent(new CustomEvent('themechange',{detail:t})); }
  apply(current());
  matchMedia('(prefers-color-scheme: light)').addEventListener('change',function(){ if(!saved()) apply(current()); });
  function wire(){
    document.querySelectorAll('.themebtn').forEach(function(b){ b.addEventListener('click',function(){ var t=root.getAttribute('data-theme')==='light'?'dark':'light'; try{ localStorage.setItem(KEY,t); }catch(e){} apply(t); }); });
    document.querySelectorAll('.backbtn').forEach(function(b){ b.addEventListener('click',function(e){
      var same=document.referrer&&document.referrer.indexOf(location.origin)===0;
      if(history.length>1&&(same||location.hash)){ e.preventDefault(); history.back(); } }); });
    apply(root.getAttribute('data-theme'));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',wire); else wire();
})();
