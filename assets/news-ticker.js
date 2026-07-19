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
  { src: "TD Securities", date: "Mar 30, 2026", title: "Tokenization is now: the impact on markets and companies", url: "https://www.tdsecurities.com/ca/en/tokenization-is-now-impact-on-markets-and-companies", color: "#0E8A5F", thumb: "https://www.tdsecurities.com/tds/image/Insights-External-Open-Graph-AOTC-Tokenization-Is-Now.jpg" },
  { src: "Canadian Mining Report", date: "Mar 24, 2026", title: "Gold tokenization is going mainstream, here's why", url: "https://www.canadianminingreport.com/blog/gold-tokenization-is-going-mainstream-here-s-why", color: "#C49A3A" },
  { src: "RE/MAX Millennium", date: "Jan 13, 2026", title: "Blockchain in real estate: the complete beginner's guide", url: "https://remaxmillennium.ca/blog/blockchain-in-real-estate-the-complete-beginners-guide/", color: "#C52026", thumb: "https://remaxmillennium.ca/wp-content/uploads/2026/01/Blockchain-in-Real-Estate.webp" },
  { src: "CoinDesk", date: "Mar 6, 2026", title: "Bank of Canada, country's largest banks complete first tokenized bond trial", url: "https://www.coindesk.com/business/2026/03/06/bank-of-canada-country-s-largest-banks-complete-first-tokenized-bond-trial", color: "#2E6BF2", thumb: "https://cdn.sanity.io/images/s3y3vcno/production/fcbd7657bed4ca85138744cb2bd61c408ab799a7-1919x1080.jpg?auto=format&w=480" },
  { src: "Osler", date: "2026", title: "CIRO's Digital Asset Custody Framework: institutionalizing crypto custody in Canada", url: "https://www.osler.com/en/insights/updates/ciros-digital-asset-custody-framework-institutionalizing-crypto-custody-in-canada/", color: "#142036", thumb: "https://www.osler.com/wp-content/uploads/2026/02/gettyimages-1130490519-612x612-1.jpg" },
  { src: "Dept. of Finance Canada", date: "Feb 2026", title: "Canada's Stablecoin Framework sets the federal baseline for fiat-backed digital instruments", url: "https://www.canada.ca/en/department-finance/programs/financial-sector-policy/canadas-stablecoin-framework.html", color: "#1B4ABE", thumb: "https://www.canada.ca/content/dam/fin/programs-programmes/stablecoin/fig1-eng.png" },
  { src: "CSA / Newswire", date: "Mar 2026", title: "CSA invites stakeholders to participate in tokenization initiative", url: "https://www.newswire.ca/news-releases/csa-invites-stakeholders-to-participate-in-tokenization-initiative-845901105.html", color: "#1B4ABE", thumb: "https://mma.prnewswire.com/media/2946887/Canadian_Securities_Administrators_CSA_invites_stakeholders_to_p.jpg" },
  { src: "PR Newswire", date: "Oct 27, 2025", title: "Loon raises $3 million to build Canada's regulated digital dollar; acquires CADC stablecoin", url: "https://www.prnewswire.com/news-releases/loon-raises-3-million-to-build-canadas-regulated-digital-dollar-acquires-cadc-stablecoin-302594051.html", color: "#0E8A5F", thumb: "https://mma.prnewswire.com/media/2804756/Loon___CADC.jpg" },
  { src: "Yahoo Finance / CNW", date: "Oct 8, 2025", title: "Canadian startup TransCrypts raises $20M CDN seed round to combat AI fraud", url: "https://finance.yahoo.com/news/canadian-startup-transcrypts-raises-20m-110500330.html", color: "#C49A3A", thumb: "https://s.yimg.com/os/en/cnwgroup.com/43dfff2dd3dcdf28ddce235d6eec1c75" },
  { src: "NCFA Canada", date: "Dec 2025", title: "Canadian fintech Tuhk raises US$6M seed round for a global payment fraud network", url: "https://ncfacanada.org/canadian-fintech-tuhk-raises-us6m-seed-round/", color: "#7BE3B0", thumb: "https://ncfacanada.org/wp-content/uploads/2023/05/NCFA-Jan-2018-resize.jpg" },
  { src: "ACN Newswire", date: "Oct 2025", title: "Canada backs tokenization and federated learning research with $3M+ (T-RIZE / ÉTS chair)", url: "https://en.acnnewswire.com/press-release/english/103153/canada-backs-advanced-tokenization-and-distributed-federated-learning-research-with-over-%243-million-in-funding", color: "#C8B0EF" },
  { src: "CIRO / Newswire", date: "Feb 2026", title: "CIRO issues guidance on digital asset custody for crypto asset trading platforms", url: "https://www.newswire.ca/news-releases/ciro-issues-guidance-on-digital-asset-custody-for-crypto-asset-trading-platforms-804362934.html", color: "#5E6E88", thumb: "https://mma.prnewswire.com/media/2875990/Canadian_Investment_Regulatory_Organization__CIRO__CIRO_Issues_G.jpg" },
  { src: "Kraken", date: "2026", title: "The Canadian stablecoin opportunity: QCAD, Canada's first approved CAD stablecoin", url: "https://blog.kraken.com/news/industry-news/the-canadian-stablecoin-opportunity-qcad", color: "#0E8A5F", thumb: "https://blog.kraken.com/wp-content/uploads/2026/06/Blog-19-1024x467.png" },
  { src: "The Logic", date: "Sep 2025", title: "National Bank joins ATB, Wealthsimple, and Shopify in Tetra Digital's $10M round", url: "https://thelogic.co/news/national-bank-stablecoin-tetra/", color: "#C49A3A" },
  { src: "Pineapple Financial", date: "Dec 2025", title: "Pineapple launches mortgage tokenization platform; first tranche of C$13.7B portfolio on-chain", url: "https://gopineapple.com/", color: "#7BE3B0" },
  { src: "Polymesh / Ocree", date: "Mar 2025", title: "C$51.9M Winnipeg commercial property tokenized on Canada's first regulated platform", url: "https://polymesh.network/blog/51-9-million-canadian-commercial-real-estate", color: "#C8B0EF" }
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
