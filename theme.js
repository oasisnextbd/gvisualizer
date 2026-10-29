/* Site-wide day/night theme and Back button. Pages include this in <head>. */
(function(){
  var KEY='gv-theme', root=document.documentElement;
  function saved(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function current(){ return saved()||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'); }
  function apply(t){ root.setAttribute('data-theme',t); document.querySelectorAll('.themebtn').forEach(function(b){ b.textContent=t==='light'?'☾ Night':'☀ Day'; b.setAttribute('aria-label',t==='light'?'Switch to night theme':'Switch to day theme'); }); window.dispatchEvent(new CustomEvent('themechange',{detail:t})); }
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
