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
  { src: "McCarthy Tetrault", date: "Mar 2026", title: "Bill C-12 brings 40x penalties into force, top fine now $20,000,000", url: "https://www.mccarthy.ca/en/insights/blogs/techlex/canada-s-aml-reform-advances-bill-c-12-brings-hefty-penalties-and-higher-compliance-expectations-into-force", color: "#C49A3A" },
  { src: "Blakes", date: "Mar 2026", title: "New AML law raises penalties and adds a new violation for weak programs", url: "https://www.blakes.com/insights/canada-s-new-anti-money-laundering-legislation-significantly-raises-penalties-and-adds-new-violation/", color: "#2E6BF2" },
  { src: "CBC News", date: "Oct 2025", title: "Crypto exchange Cryptomus fined record $177M by Canada's watchdog", url: "https://www.cbc.ca/news/business/cryptomus-fined-177-million-fintrac-9.6948338", color: "#D6334E" },
  { src: "Bank of Canada", date: "Sep 2025", title: "Payment service providers are now under supervision", url: "https://www.bankofcanada.ca/2025/09/payment-service-providers-are-now-under-supervision-registry-to-follow/", color: "#0E8A5F" },
  { src: "Bennett Jones", date: "Oct 2025", title: "$176.9M fine shows the cost of not proving compliance", url: "https://www.bennettjones.com/Insights/Blogs/176-9-million-fine-against-cryptocurrency-exchange-from-FINTRAC-demonstrates-costs-of-non-compliance", color: "#7C5CC6" },
  { src: "FINTRAC", date: "Sep 2025", title: "$19.6M penalty imposed on Peken Global, operator of KuCoin", url: "https://fintrac-canafe.canada.ca/new-neuf/nr/2025-09-25-eng", color: "#1B4ABE" },
  { src: "DLA Piper", date: "Oct 2025", title: "FINTRAC imposes the largest penalty in Canadian history", url: "https://www.dlapiper.com/en/insights/publications/2025/10/fintrac-imposes-largest-penalty-in-canadian-history-and-the-new-financial-crimes-agency", color: "#142036" },
  { src: "McMillan", date: "2025", title: "Safeguarding client funds under the Retail Payment Activities Act", url: "https://mcmillan.ca/insights/publications/safeguarding-end-user-funds-under-the-retail-payment-activities-act/", color: "#5E6E88" },
  { src: "Bitcoin.com", date: "2026", title: "Canada revokes 50 money-services licences, 47 of them crypto firms", url: "https://news.bitcoin.com/canada-revokes-50-money-services-licenses-in-2026-with-23-crypto-firms-taking-the-hit/", color: "#C49A3A" },
  { src: "FINTRAC", date: "May 2026", title: "$693,742 penalty on an Alberta money-services business", url: "https://fintrac-canafe.canada.ca/new-neuf/nr/2026-05-14-eng", color: "#2E6BF2" },
  { src: "BLG", date: "Aug 2025", title: "FINTRAC changes its supervision model and penalty policy", url: "https://www.blg.com/en/insights/2025/08/changes-to-fintrac-supervision-model-and-penalty-policy", color: "#D6334E" },
  { src: "CoinGeek", date: "2026", title: "$40M seized as Canada shuts down the TradeOgre exchange", url: "https://coingeek.com/40m-crypto-seized-as-canada-shuts-tradeogre-exchange/", color: "#0E8A5F" },
  { src: "Investment Executive", date: "2026", title: "FINTRAC sanctions a second Ontario real estate broker", url: "https://www.investmentexecutive.com/from-the-regulators/fintrac-sanctions-second-ontario-real-estate-broker/", color: "#7C5CC6" },
  { src: "Torys", date: "2026", title: "FINTRAC penalties: where are they heading", url: "https://www.torys.com/en/our-latest-thinking/torys-quarterly/q1-2026/fintac-amps", color: "#1B4ABE" },
  { src: "Globe and Mail", date: "2025", title: "Crypto firm appeals its $176M FINTRAC fine", url: "https://www.theglobeandmail.com/business/economy/article-cryptocurrency-firm-appeals-176-million-fine-by-fintrac/", color: "#142036" },
  { src: "Bank of Canada", date: "2026", title: "Refused and revoked payment registrations, the public list", url: "https://www.bankofcanada.ca/core-functions/retail-payments-supervision/refused-or-revoked-registrations/", color: "#5E6E88" },
  { src: "Blakes", date: "2025", title: "Strong Borders Act: a landmark shift in Canada's AML penalties", url: "https://www.blakes.com/insights/canada-s-strong-borders-act-a-landmark-shift-in-canada-s-aml-penalties/", color: "#C49A3A" },
  { src: "AMF Quebec", date: "May 2025", title: "Quebec court orders XT.com and CoinEx blocked in Canada", url: "https://lautorite.qc.ca/en/general-public/media-centre/news/major-issues/xtcom-coinex", color: "#2E6BF2" },
  { src: "Fasken", date: "2025", title: "Payment providers prepare to safeguard client funds", url: "https://www.fasken.com/en/knowledge/2025/03/payment-service-providers-preparing-to-comply-with-safeguarding-of-fund-requirements", color: "#D6334E" },
  { src: "MNP", date: "2026", title: "FINTRAC penalties reveal real estate compliance gaps", url: "https://www.mnp.ca/en/insights/directory/fintrac-penalties-reveal-real-estate-broker-compliance", color: "#0E8A5F" },
  { src: "BLG", date: "Apr 2026", title: "Preparing for universal enrolment, higher penalties and enforcement", url: "https://www.blg.com/en/insights/2026/04/preparing-for-universal-enrolment-higher-penalties-and-fintrac-enforcement", color: "#7C5CC6" },
  { src: "Crowdfund Insider", date: "Sep 2025", title: "FINTRAC imposes a monetary penalty on KuCoin", url: "https://www.crowdfundinsider.com/2025/09/253126-canadas-fintrac-imposes-administrative-monetary-penalty-on-kucoin/", color: "#1B4ABE" },
  { src: "STEP", date: "2026", title: "Canada raises penalties for technical money-laundering offences", url: "https://www.step.org/industry-news/canada-increases-penalties-technical-money-laundering-offences", color: "#142036" },
  { src: "FINTRAC", date: "2026", title: "Modernization and upcoming changes for reporting entities", url: "https://fintrac-canafe.canada.ca/businesses-entreprises/changes-changements-eng", color: "#5E6E88" }
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
