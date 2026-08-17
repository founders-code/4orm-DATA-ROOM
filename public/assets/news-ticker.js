/* 4orm data room - shared news ticker. Edit NEWS_ITEMS below; every page updates. */
(function () {
  var css = "\n  /* ----- NEWS TICKER (between hero and TOC) ----- */\n  .news-band { background: #0E1626; border-bottom: 1px solid rgba(255,255,255,.08); padding: 5px 0; overflow: hidden; }\n  .news-band-head { max-width: var(--maxw); margin: 0 auto 10px; padding: 0 28px; display: flex; align-items: center; gap: 10px; }\n  .news-band-head .nb-lab { font-family: var(--font-mono); font-size: .66rem; font-weight: 800; letter-spacing: .2em; text-transform: uppercase; color: #9AB6FF; }\n  .news-band-head .nb-dot { width: 7px; height: 7px; border-radius: 50%; background: #2E6BF2; animation: signed-pulse 2s ease-in-out infinite; }\n  .news-track-wrap { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent); mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent); }\n  .news-track { display: flex; gap: 14px; width: max-content; animation: news-scroll 143s linear infinite; }\n  .news-track:hover { animation-play-state: paused; }\n  @keyframes news-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }\n  @media (prefers-reduced-motion: reduce) { .news-track { animation: none; } .news-track-wrap { overflow-x: auto; } }\n  .news-card { display: flex; align-items: center; gap: 9px; width: 300px; flex-shrink: 0; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: 12px; padding: 7px 12px 7px 8px; text-decoration: none; transition: background .15s, border-color .15s, transform .15s; }\n  .news-card:hover { background: rgba(255,255,255,.10); border-color: rgba(154,182,255,.45); transform: translateY(-2px); }\n  .news-thumb { width: 34px; height: 34px; border-radius: 9px; flex-shrink: 0; background-size: cover; background-position: center; display: grid; place-items: center; font-family: var(--font-mono); font-weight: 800; font-size: 1rem; color: #fff; }\n  .news-meta { min-width: 0; }\n  .news-src { font-family: var(--font-mono); font-size: .6rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: #9AB6FF; margin-bottom: 3px; }\n  .news-ttl { font-size: .7rem; font-weight: 700; color: rgba(255,255,255,.92); line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }\n\n  .news-band { font-family: 'Inter', system-ui, sans-serif; }";
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var wrap = document.createElement('div');
  wrap.innerHTML = '<div class="news-band" id="newsBand"><div class="news-track-wrap"><div class="news-track" id="newsTrack"></div></div></div>';
  var anchor = document.getElementById('news-anchor');
  if (anchor && anchor.parentNode) { anchor.parentNode.insertBefore(wrap.firstChild, anchor); }
  else { document.body.insertBefore(wrap.firstChild, document.body.firstChild); }
})();
/* To update the ticker: edit this array. thumb is optional (image URL);
   without it the card shows a colored monogram tile. */
var NEWS_ITEMS = [
  { src: "The law", date: "Mar 2026", title: "Penalties for a single breach now reach $20,000,000 for a business", url: "documents/02-1-market-size.html", color: "#D6334E" },
  { src: "Enforcement", date: "2025", title: "Fines handed out reached $203.1 million, up from $19.0 million a year earlier", url: "documents/02-1-market-size.html", color: "#C49A3A" },
  { src: "The buyers", date: "2026", title: "About 745 Canadian firms already hold money that belongs to their customers", url: "documents/05-3-market-card-denominator.html", color: "#2E6BF2" },
  { src: "The rule", date: "Sep 2025", title: "A daily record of client money has been required since September 2025", url: "documents/regulatory-clock.html", color: "#0E8A5F" },
  { src: "The plan", date: "2031", title: "The model reaches $105.3 million of revenue by 2031", url: "documents/05-1-the-plan-in-one-table.html", color: "#1B4ABE" },
  { src: "The product", date: "2026", title: "One secure place for the proof: we read the money, we never touch it", url: "documents/03-1-technology-overview.html", color: "#142036" },
  { src: "The raise", date: "Aug 2026", title: "Raising $2,050,000 now, with $550,000 already committed", url: "documents/preseed-round-terms.html", color: "#7C5CC6" },
  { src: "Why now", date: "2026", title: "Eleven months into the rule, and no product is built for it", url: "documents/regulatory-clock.html", color: "#5E6E88" }
];
(function () {
  var track = document.getElementById('newsTrack');
  function card(n) {
    var a = document.createElement('a');
    a.className = 'news-card'; a.href = n.url; a.target = '_blank'; a.rel = 'noopener';
    var initials = n.src.split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 3).toUpperCase();
    var thumbStyle = n.thumb ? 'background-image:url(' + n.thumb + ')' : 'background:' + (n.color || '#2E6BF2');
    a.innerHTML = '<span class="news-thumb" style="' + thumbStyle + '">' + (n.thumb ? '' : initials) + '</span>' +
      '<span class="news-meta"><span class="news-src">' + n.src + ' \u00B7 ' + n.date + '</span>' +
      '<span class="news-ttl">' + n.title + '</span></span>';
    return a;
  }
  /* two passes of the list = seamless 50% loop */
  for (var pass = 0; pass < 2; pass++) {
    NEWS_ITEMS.forEach(function (n) { track.appendChild(card(n)); });
  }
})();
