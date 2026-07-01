/* 4orm data room · cross-reference linker
   Turns "Document NN.N" references inside doc pages into clickable links,
   and provides a "back to where you were reading" pill with scroll restore.
   Self-contained: include once per documents/*.html page. */
(function () {
  if (window.__x4xref) return; window.__x4xref = true;

  /* live documents only — placeholders stay plain text */
  var DOCS = {
    '00': { f: '00-what-we-are-building.html', t: 'What We Are Building' },
    '01.0': { f: '01-0-two-pager.html',               t: 'Two-Pager' },
    '01.5': { f: '01-5-executive-overview.html',      t: 'Executive Overview' },
    '02.1': { f: '02-1-market-sizing.html',           t: 'Market Sizing (TAM · SAM · SOM)' },
    '02.2': { f: '02-2-mckinsey-base-case.html',      t: 'McKinsey Base Case' },
    '02.3': { f: '02-3-project-samara.html',          t: 'Project Samara' },
    '02.4': { f: '02-4-canadian-rwa-landscape.html',  t: 'Canadian RWA Landscape' },
    '02.5': { f: '02-5-polymath-competitive-scope.html', t: 'Polymath Competitive Scope' },
    '02.6': { f: '02-6-expansion-revenue-verticals.html', t: 'Expansion Revenue Verticals' },
    '02.8': { f: '02-8-global-tokenization-proof-points.html', t: 'Global Tokenization Proof Points' },
    '03.1': { f: '03-1-control-plane-capabilities.html', t: 'Control Plane Capabilities' },
    '03.2': { f: '03-2-lifecycle-architecture.html',  t: 'End-to-End Lifecycle Architecture' },
    '03.3': { f: '03-3-lifecycle-architecture-visual.html', t: 'Lifecycle Architecture (Visual)' },
    '03.5': { f: '03-5-30-60-90-technical-plan.html', t: '30-60-90 Technical Plan' },
    '03.6': { f: '03-6-structured-roadmap-matrix.html', t: 'Structured Roadmap Matrix' },
    '03.7': { f: '03-7-reference-architecture.html', t: 'Reference Architecture & Control Matrix' },
    '03.8': { f: '03-8-procurement-readiness.html', t: 'Procurement Readiness' },
    '04.1': { f: '04-1-team-advisory.html',           t: 'Team, Advisory & Legal Counsel' },
    '04.2': { f: '04-2-organizational-chart.html',     t: 'Organizational Chart' },
    '04.3': { f: '04-3-phase-one-hiring-plan.html',  t: 'Phase-One Hiring Plan' },
    '05.1': { f: '05-1-five-year-model.html',         t: 'Five-Year Financial Model' },
    '05.2': { f: '05-2-education-gtm-revenue-bridge.html', t: '4orm Education: GTM Revenue Bridge' },
    '05.3': { f: '05-3-revenue-drivers.html',          t: 'Revenue Drivers' },
    '07.2': { f: '07-2-partnership-pipeline.html',    t: 'Partnership Pipeline' },
    '08.2': { f: '08-2-capital-structure-workbook.html', t: 'Capital Structure Workbook' },
    '08.3': { f: '08-3-corporate-structure-chart.html', t: 'Corporate Structure Chart' },
    '08.4': { f: '08-4-mission-anchor.html',          t: 'The Mission Anchor' },
    '08.6': { f: '08-6-ceo-commitment.html',          t: 'Founder & CEO Commitment Statement' },
    '08.7': { f: '08-7-entity-status.html',          t: 'Entity Status' },
    '09.5': { f: '09-5-funding-comps.html',           t: 'Funding Comps' },
    '10.1': { f: '10-1-reviewer-questions-founder-responses.html', t: 'Reviewer Questions & Founder Responses' },
    '10.2': { f: '10-2-indicative-responses-common-asks.html', t: 'Indicative Responses to Common Asks' },
    '10.4': { f: '10-4-swot-controls.html',           t: 'SWOT & Controls' },
    '10.5': { f: '10-5-tokenization-scorecard.html',  t: 'Tokenization Scorecard' }
  };

  var KEY_STACK = 'x4xrefStack';
  var KEY_RESTORE = 'x4xrefRestore';

  function curFile() { return (location.pathname.split('/').pop() || '').toLowerCase(); }
  function curId() {
    var f = curFile();
    for (var k in DOCS) { if (DOCS[k].f === f) return k; }
    return null;
  }
  function curLabel() {
    var id = curId();
    if (id) return id + ' · ' + DOCS[id].t;
    return document.title.split('·')[0].trim() || 'previous document';
  }
  function getStack() {
    try { return JSON.parse(sessionStorage.getItem(KEY_STACK) || '[]'); } catch (e) { return []; }
  }
  function setStack(s) { try { sessionStorage.setItem(KEY_STACK, JSON.stringify(s)); } catch (e) {} }

  /* ---------- styles ---------- */
  var css = ''
    + 'a.xref{font-family:"JetBrains Mono",ui-monospace,monospace;font-weight:700;font-size:.85em;'
    + 'color:#2E6BF2;background:#EAF1FE;border:1px solid rgba(46,107,242,.28);border-radius:7px;'
    + 'padding:1px 7px;text-decoration:none;white-space:nowrap;transition:background .12s,color .12s;}'
    + 'a.xref:hover{background:#2E6BF2;color:#fff;}'
    + '#x4back{position:fixed;left:18px;bottom:18px;z-index:9999;display:flex;align-items:center;gap:9px;'
    + 'background:#142036;color:#fff;border:1px solid rgba(255,255,255,.14);border-radius:99px;'
    + 'padding:9px 16px 9px 13px;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:.68rem;'
    + 'letter-spacing:.08em;text-transform:uppercase;font-weight:700;cursor:pointer;'
    + 'box-shadow:0 8px 26px rgba(11,18,32,.35);transition:background .12s,transform .12s;}'
    + '#x4back:hover{background:#2E6BF2;transform:translateY(-1px);}'
    + '#x4back .arr{font-size:.9rem;line-height:1;}'
    + '@media print{a.xref{background:none;border:none;padding:0;color:inherit;}#x4back{display:none;}}';
  var st = document.createElement('style'); st.textContent = css;
  document.head.appendChild(st);

  /* ---------- link the references ---------- */
  var OUTER = /([Dd]ocuments?\s+)\d{2}\.\d(?:(?:\s*,\s*|,?\s+and\s+|\s+or\s+)\d{2}\.\d)*/g;
  var NUM = /\d{2}\.\d/g;

  /* if the sentence already names the document just before the number,
     don't write the title twice */
  function titleAlreadyNear(fullText, absPos, id) {
    var t = DOCS[id].t;
    var probe = (t.split(/\s+/)[0].length >= 4 ? t.split(/\s+/)[0] : t.slice(0, 12)).toLowerCase();
    var pre = fullText.slice(Math.max(0, absPos - 60), absPos).toLowerCase();
    return pre.indexOf(probe) !== -1;
  }

  function makePill(id) {
    var a = document.createElement('a');
    a.className = 'xref';
    a.href = DOCS[id].f;
    a.textContent = id;
    a.title = 'Open ' + id + ' · ' + DOCS[id].t;
    a.setAttribute('data-x4', id);
    return a;
  }

  function linkNode(textNode) {
    var text = textNode.nodeValue;
    OUTER.lastIndex = 0;
    if (!OUTER.test(text)) return;
    OUTER.lastIndex = 0;
    var frag = document.createDocumentFragment();
    var last = 0, m;
    while ((m = OUTER.exec(text)) !== null) {
      frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var seg = m[0];
      var nums = seg.match(NUM) || [];
      var allLive = nums.length > 0 && nums.every(function (id) {
        return DOCS[id] && DOCS[id].f !== curFile();
      });
      var segLast = 0, n;
      NUM.lastIndex = 0;
      if (allLive) {
        /* drop the generic "document(s) " word; write each ref as
           "<Title> [NN.N]" with the number as the clickable pill */
        segLast = m[1].length; /* skip leading word */
        while ((n = NUM.exec(seg)) !== null) {
          frag.appendChild(document.createTextNode(seg.slice(segLast, n.index)));
          var id = n[0];
          if (!titleAlreadyNear(text, m.index + n.index, id)) {
            frag.appendChild(document.createTextNode(DOCS[id].t + ' '));
          }
          frag.appendChild(makePill(id));
          segLast = n.index + id.length;
        }
        frag.appendChild(document.createTextNode(seg.slice(segLast)));
      } else {
        /* keep original wording; linkify only the live, non-self numbers */
        while ((n = NUM.exec(seg)) !== null) {
          frag.appendChild(document.createTextNode(seg.slice(segLast, n.index)));
          var id2 = n[0];
          if (DOCS[id2] && DOCS[id2].f !== curFile()) {
            if (!titleAlreadyNear(text, m.index + n.index, id2)) {
              frag.appendChild(document.createTextNode(DOCS[id2].t + ' '));
            }
            frag.appendChild(makePill(id2));
          } else {
            frag.appendChild(document.createTextNode(id2));
          }
          segLast = n.index + id2.length;
        }
        frag.appendChild(document.createTextNode(seg.slice(segLast)));
      }
      last = m.index + seg.length;
    }
    frag.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode.replaceChild(frag, textNode);
  }

  function scan() {
    var SKIP = { SCRIPT: 1, STYLE: 1, A: 1, BUTTON: 1, TEXTAREA: 1 };
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var p = node.parentNode;
        while (p && p !== document.body) {
          if (SKIP[p.nodeName]) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(linkNode);
  }

  /* ---------- navigation ---------- */
  function go(targetFile) {
    var s = getStack();
    s.push({ f: curFile(), y: window.scrollY || window.pageYOffset || 0, label: curLabel() });
    if (s.length > 12) s = s.slice(-12);
    setStack(s);
    location.href = targetFile;
  }

  function renderBack() {
    var s = getStack();
    var old = document.getElementById('x4back');
    if (old) old.parentNode.removeChild(old);
    if (!s.length) return;
    var top = s[s.length - 1];
    var b = document.createElement('button');
    b.id = 'x4back'; b.type = 'button';
    b.innerHTML = '<span class="arr">&#8592;</span><span>Back to ' + top.label + '</span>';
    b.addEventListener('click', function () {
      var st2 = getStack();
      var entry = st2.pop();
      setStack(st2);
      if (!entry) return;
      try { sessionStorage.setItem(KEY_RESTORE, JSON.stringify(entry)); } catch (e) {}
      location.href = entry.f;
    });
    document.body.appendChild(b);
  }

  function restoreScroll() {
    var raw = null;
    try { raw = sessionStorage.getItem(KEY_RESTORE); } catch (e) {}
    if (!raw) return;
    try {
      var entry = JSON.parse(raw);
      if (entry && entry.f === curFile()) {
        sessionStorage.removeItem(KEY_RESTORE);
        var y = entry.y || 0;
        requestAnimationFrame(function () {
          window.scrollTo(0, y);
          setTimeout(function () { window.scrollTo(0, y); }, 120);
        });
      }
    } catch (e) {}
  }

  function init() {
    scan();
    document.body.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a.xref') : null;
      if (!a) return;
      e.preventDefault();
      go(a.getAttribute('href'));
    });
    renderBack();
    restoreScroll();
    /* keep the pop-up title bar in sync when framed */
    if (window.self !== window.top) {
      try { parent.postMessage({ x4title: curLabel(), x4id: curId() }, '*'); } catch (e) {}
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
