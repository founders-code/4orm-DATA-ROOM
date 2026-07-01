/* 4orm Finance Data Room — UI interactions
   ============================================
   PHASE 1 (THIS FILE): Auth disabled. Clicking sign-in or submitting the
   request access form just navigates to data-room.html.
   PHASE 2: Replace the redirects with real Clerk auth calls. */

(function(){
  /* OAuth buttons (both landing + member views) → auto-login to data room */
  document.querySelectorAll('.oauth-btn').forEach(function(b){
    b.addEventListener('click', function(e){
      e.preventDefault();
      window.location.href = 'data-room.html';
    });
  });

  /* Request access form on landing → auto-login */
  var rq = document.getElementById('dr-request-form');
  if (rq) {
    rq.addEventListener('submit', function(e){
      e.preventDefault();
      window.location.href = 'data-room.html';
    });
  }

  /* Sign-in form on landing → auto-login */
  var si = document.getElementById('dr-signin-form');
  if (si) {
    si.addEventListener('submit', function(e){
      e.preventDefault();
      window.location.href = 'data-room.html';
    });
  }

  /* Smooth scroll for TOC anchors */
  document.querySelectorAll('.meth-toc a').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href') || '';
      if (href.startsWith('#')) {
        var t = document.querySelector(href);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();
