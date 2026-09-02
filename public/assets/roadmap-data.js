/* 4orm Finance · Path to Revenue · adoption-led plan, Sep 2026 -> Sep 2027 and beyond.
   States: done = complete groundwork · active = underway now · todo = planned.
   Percentages are a founder's self-assessment of an early-stage plan, not a claim of shipped product. */
const DATA = {
  updated: "September 1, 2026",
  overallPct: 18,
  overallNote: "The arc is simple: 4ormIQ earns trust for free, 4orm sells the record to the regulated business, and the same engine widens into a moat one industry at a time. The groundwork is done, the pre-seed is open, and the build, the first customers and the free consumer check are sequenced behind the close. The workstreams below carry the whole plan: what is done, what is underway now, and what is next.",

  capitalValue: {
    asOf: "September 2026",
    lead: "The pre-seed is $2.05 million across five tranches, of which $1.5 million is open now and closes in May 2027. A $3.55 million seed follows at a $30 million valuation. Below are the tranches, and where the first year of money goes.",
    stats: [
      { k:"$2.05M", l:"Pre-seed, five tranches" },
      { k:"$1.5M",  l:"Open now, closes May 2027" },
      { k:"$3.55M", l:"Seed to follow, at $30M" },
      { k:"$71.1M", l:"Base-case revenue in 2031" }
    ],
    groups: [
      { title:"The pre-seed, tranche by tranche", rows:[
        { item:"Angel, at close", detail:"First cheque, priced.", cons:"$50,000", head:"$0.25 a share" },
        { item:"First subscription", detail:"Priced equity.", cons:"$500,000", head:"$0.50 a share" },
        { item:"Price-later tranche", detail:"Converts at the next round, 15% discount.", cons:"$500,000", head:"$15M ceiling" },
        { item:"Price-later tranche", detail:"Converts at the next round, 15% discount.", cons:"$500,000", head:"$18M ceiling" },
        { item:"Price-later tranche", detail:"Converts at the next round, 15% discount.", cons:"$500,000", head:"$20M ceiling" }
      ], subtotal:{ label:"Subtotal - the pre-seed", cons:"$2,050,000", head:"" } },
      { title:"Where the first year of money goes", rows:[
        { item:"The team", detail:"13 months of payroll, founder pay below market.", cons:"$784,945", head:"38%" },
        { item:"Reaching first customers", detail:"Sales and marketing, mortgage-first.", cons:"$502,667", head:"25%" },
        { item:"Building the software", detail:"The engine and 4ormIQ, with Speer.", cons:"$466,667", head:"23%" },
        { item:"Legal and audit", detail:"Counsel, audit and review readiness.", cons:"$149,500", head:"7%" },
        { item:"Delivering the service", detail:"Hosting, security and operations.", cons:"$102,871", head:"5%" }
      ], subtotal:{ label:"Subtotal - use of the pre-seed", cons:"$2,006,650", head:"98%" } }
    ],
    total: { label:"Pre-seed total", cons:"$2,050,000", head:"" },
    foot: "The one-line version: five tranches totalling $2.05M fund thirteen months of build and first sales, after which the company turns its first profit in 2029 and funds itself. The $3.55M seed at a $30M valuation shortens the climb rather than keeping the company alive. Source: 4orm Finance master pro forma and capital structure, September 2026, in Canadian dollars."
  },

  /* Planned milestones, newest target first. date = target quarter. vertical = a workstream id. */
  wins: [
    { date:"2028+",   vertical:"moat",        text:"Investments and insurance turn paid; the same engine, a fifth and sixth rule set." },
    { date:"2029",    vertical:"moat",        text:"Real estate trust accounts turn paid as monthly reconciliation lands." },
    { date:"Q3 2027", vertical:"regulator",   text:"Independent review readiness proven end to end, aligned to the RPAA review." },
    { date:"Q3 2027", vertical:"capital",     text:"Seed closed at $3.55M on a $30M valuation, against five customer references." },
    { date:"Q3 2027", vertical:"iq",          text:"Seventy-five thousand consumers on the free 4ormIQ layer." },
    { date:"Q2 2027", vertical:"capital",     text:"Pre-seed completes at $1.5M; the three price-later tranches close." },
    { date:"Q2 2027", vertical:"distribution",text:"First network partner signed, reaching many firms at once." },
    { date:"Q2 2027", vertical:"form",        text:"$10,000 a month recurring; reconciliation and the evidence record shipping." },
    { date:"Q1 2027", vertical:"moat",        text:"Regulated payments and automotive open as the second and third markets." },
    { date:"Q1 2027", vertical:"iq",          text:"4ormIQ goes live, free for the consumer." },
    { date:"Q1 2027", vertical:"form",        text:"First two mortgage broker firms live; the first paying customer." },
    { date:"Q1 2027", vertical:"distribution",text:"Design partner live: a lighthouse firm co-proving the record." },
    { date:"Q4 2026", vertical:"product",     text:"Tier two of the Speer build: the core evidence engine and the 4ormIQ check." },
    { date:"Q4 2026", vertical:"capital",     text:"First $500,000 subscription in; non-dilutive applications filed." },
    { date:"Q4 2026", vertical:"regulator",   text:"Regulator cultivation: first engagements on review readiness." },
    { date:"Q4 2026", vertical:"distribution",text:"First franchisor and network conversations opened." },
    { date:"Q3 2026", vertical:"product",     text:"Tier one of the Speer build: architecture accepted, IP assigned." },
    { date:"Q3 2026", vertical:"capital",     text:"Pre-seed opens; angel cheque and first subscription set." },
    { date:"Q3 2026", vertical:"distribution",text:"Discovery underway, twenty firm conversations opened." },
    { date:"Q3 2026", vertical:"team",        text:"Incorporated in Alberta; Speer Technologies engaged as build partner." }
  ],

  verticals: [
    {
      id:"iq", name:"4ormIQ - the free wedge", short:"4ormIQ",
      pct:12, stage:"The free consumer check · in build",
      benchmark:{level:"onpar", note:"<b>4ormIQ earns trust before anyone pays.</b> A free check a person runs before they move money. The consumer is never charged; the business pays. A firm a consumer has checked is already pulled toward the record, so the free layer is the top of the funnel."},
      checkpoints:[
        {state:"done", t:"The consumer check designed", d:"Ask about a business or a person, get an answer you can act on."},
        {state:"active", t:"4ormIQ in build with Speer", d:"Sequenced as one of the first things the pre-seed funds."},
        {state:"todo", t:"4ormIQ goes live, free", d:"Q1 2027, free for the consumer."},
        {state:"todo", t:"Demand pulls the first firms", d:"A checked business is a business drawn toward the paid record."},
        {state:"todo", t:"75,000 consumers on the free layer", d:"By Q3 2027, base case; 3.0M by 2031."}
      ],
      facts:[
        "Free for the consumer, <b>always</b>",
        "The consumer is <b>never charged</b>",
        "Top of the funnel for <b>4orm</b>",
        "3.0M consumers by 2031, base case"
      ]
    },
    {
      id:"form", name:"4orm - the paid record", short:"4orm",
      pct:14, stage:"Mortgage-first · first firms ahead",
      benchmark:{level:"onpar", note:"<b>4orm sells the daily record to the regulated business.</b> Mortgage brokering is the first paid market, chosen because the documented gap is sharpest there. The engine, the price card and the first firms are sequenced right behind the build."},
      checkpoints:[
        {state:"done", t:"The record model defined", d:"Identity, options, reasoning, disclosure, acknowledgement and evidence, joined into one re-performable record."},
        {state:"active", t:"Mortgage-first market readied", d:"The sharpest gap: 100% of a targeted FSRA sample lacked documented suitability."},
        {state:"todo", t:"First mortgage broker firms live", d:"Q1 2027, with the first paying customer."},
        {state:"todo", t:"Evidence record shipping", d:"Reconciliation and the dated record, Q2 2027."},
        {state:"todo", t:"$10,000 a month recurring", d:"By mid-2027, base case."},
        {state:"todo", t:"110 firms, 40,000 seats", d:"The 2031 base-case adoption target."}
      ],
      facts:[
        "First market: <b>mortgage brokering</b>",
        "Seat payback: <b>6.6 months</b>",
        "2031 base revenue: <b>$71.1M</b>",
        "One engine, <b>five rule sets</b>"
      ]
    },
    {
      id:"moat", name:"The Moat - industry by industry", short:"The Moat",
      pct:8, stage:"One engine, market by market",
      benchmark:{level:"ahead", note:"<b>The same record, pointed at a different rule set.</b> The moat is the join between systems, which is universal, so each new market is content rather than a new product. Mortgage first, then payments, automotive, real estate, and investments and insurance."},
      checkpoints:[
        {state:"done", t:"Markets sequenced", d:"Five regulated markets, each reusing the same engine."},
        {state:"active", t:"Mortgage brokering", d:"First paid market, 2027."},
        {state:"todo", t:"Regulated payments", d:"Daily safeguarding duty already live and penalised; 2028."},
        {state:"todo", t:"Automotive finance", d:"Inside dealer groups that set the requirement; 2028."},
        {state:"todo", t:"Real estate trust", d:"Monthly trust reconciliation planned; 2029."},
        {state:"todo", t:"Investments and insurance", d:"Adjacent duties, once the engine is proven; 2030."}
      ],
      facts:[
        "The join is <b>universal</b>",
        "Each market is <b>content, not a new product</b>",
        "Five regulated markets, <b>one company</b>",
        "Payments duty live: <b>8 Sep 2025</b>"
      ]
    },
    {
      id:"product", name:"Product & Engineering (tiered build)", short:"Build",
      pct:16, stage:"Architecture accepted · tiered Speer build",
      benchmark:{level:"onpar", note:"<b>Built in tiers with Speer Technologies, full IP to 4orm.</b> The architecture is accepted; the engine and 4ormIQ come first, then the record and reconciliation, then hardening. The build is sequenced behind the pre-seed close by design."},
      checkpoints:[
        {state:"done", t:"Tier 1 - architecture accepted", d:"The evidence architecture, accepted; intellectual property assigned to 4orm."},
        {state:"done", t:"Build partner engaged", d:"Speer Technologies engaged for the phased build."},
        {state:"active", t:"Tier 2 - engine and 4ormIQ", d:"The core evidence engine and the free consumer check, in build."},
        {state:"todo", t:"Tier 3 - the record and reconciliation", d:"The dated record and reconciliation shipping, Q2 2027."},
        {state:"todo", t:"Tier 4 - connectors, market by market", d:"The same engine pointed at each new rule set."},
        {state:"todo", t:"Tier 5 - hardening and review", d:"Security, audit and review readiness."}
      ],
      facts:[
        "Build partner: <b>Speer Technologies</b>",
        "Full <b>IP to 4orm</b>",
        "4orm <b>never holds</b> client money",
        "Build sequenced <b>behind the close</b>"
      ]
    },
    {
      id:"distribution", name:"Distribution & Design Partner", short:"Distribution",
      pct:12, stage:"Discovery underway · design partner ahead",
      benchmark:{level:"ahead", note:"<b>The channel is the network, not the door.</b> These markets sit inside franchisors, dealer groups and lender panels, so one relationship reaches many firms. A design partner proves the record first, then the networks carry it."},
      checkpoints:[
        {state:"done", t:"Target base sourced", d:"217,585 professionals and the regulated firm populations, sourced firm by firm."},
        {state:"active", t:"Discovery, twenty conversations", d:"Firm conversations opened, mortgage-first."},
        {state:"active", t:"First network conversations", d:"Opening with a franchisor group that reaches many firms."},
        {state:"todo", t:"Design partner live", d:"A lighthouse firm co-proving the record, Q1 2027."},
        {state:"todo", t:"First two firms live", d:"The first paid deployments, Q1 2027."},
        {state:"todo", t:"First network partner signed", d:"One relationship reaching many firms, Q2 2027."}
      ],
      facts:[
        "Payment firms: <b>745</b> · trust firms: <b>25,682</b>",
        "One relationship reaches <b>many firms</b>",
        "Reach by 2031: <b>18.4%</b> of a counted base",
        "Design partner <b>before</b> the network"
      ]
    },
    {
      id:"regulator", name:"Regulator Cultivation & Review Readiness", short:"Regulatory",
      pct:22, stage:"Landscape mapped · cultivation ahead",
      benchmark:{level:"ahead", note:"<b>4orm never holds client money, so the duty stays with the firm.</b> The landscape is mapped and sourced; the near work is cultivating the regulators and proving that a firm using 4orm can pass the reviews and examinations these regimes now demand."},
      checkpoints:[
        {state:"done", t:"Landscape mapped and sourced", d:"RPAA, FSRA, RECO, CSA and CIRO, FCAC and FINTRAC, each traced to a public source."},
        {state:"done", t:"Product posture defined", d:"4orm never holds or moves client money, never signs a filing, never decides for the customer."},
        {state:"active", t:"Regulator cultivation", d:"First engagements on review readiness and the evidence a firm must produce."},
        {state:"todo", t:"Review-readiness proven", d:"End to end, Q3 2027, aligned to the RPAA independent review."},
        {state:"todo", t:"First examination support", d:"Supporting a customer through a real examination or review."}
      ],
      facts:[
        "RPAA safeguarding live: <b>8 Sep 2025</b>",
        "4orm <b>never holds</b> client money",
        "Reviews fall due <b>firm by firm from 2028</b>",
        "One record, <b>five regimes</b>"
      ]
    },
    {
      id:"capital", name:"Capital & the Raise", short:"Capital",
      pct:32, stage:"Pre-seed open · $2.05M · seed to follow",
      benchmark:{level:"onpar", note:"<b>Structured, priced and open.</b> Five tranches make the $2.05M pre-seed; the angel and first subscription are set and the three price-later tranches are open now, closing May 2027. A $3.55M seed follows at a $30M valuation."},
      checkpoints:[
        {state:"done", t:"Capital structure set", d:"$2.05M across five tranches; cap table and three-case model tracing to the pro forma."},
        {state:"done", t:"Angel and first subscription", d:"$50,000 at $0.25 and $500,000 at $0.50."},
        {state:"active", t:"Three price-later tranches open", d:"$500,000 each at $15M, $18M and $20M ceilings, 15% discount."},
        {state:"active", t:"Non-dilutive applications", d:"Eight programmes, modelled at zero as upside."},
        {state:"todo", t:"Pre-seed completes", d:"May 2027, at $1.5M."},
        {state:"todo", t:"Seed closed", d:"$3.55M at a $30M valuation, September 2027, against five references."}
      ],
      facts:[
        "Pre-seed: <b>$2.05M</b> · open now: <b>$1.5M</b>",
        "Seed: <b>$3.55M</b> at <b>$30M</b>",
        "First profit: <b>2029</b>, base case",
        "Grants modelled at <b>zero</b> (upside)"
      ]
    },
    {
      id:"team", name:"Team & Partners", short:"Team",
      pct:20, stage:"Founder-led · build partner and advisors",
      benchmark:{level:"onpar", note:"<b>Founder-led, with the build partner engaged and the senior hires sequenced behind the raise.</b> Incorporated in Alberta; the technology and compliance searches run alongside the pre-seed."},
      checkpoints:[
        {state:"done", t:"Incorporated in Alberta", d:"The operating company incorporated, founding structure in place."},
        {state:"done", t:"Build partner engaged", d:"Speer Technologies, with IP assigned to 4orm."},
        {state:"active", t:"Technology and compliance search", d:"Recruiting the technology and compliance leadership."},
        {state:"todo", t:"Founding team hires", d:"The first engineering and go-to-market hires after the close."},
        {state:"todo", t:"Sixty people by 2031", d:"The base-case team, built as revenue supports it."}
      ],
      facts:[
        "Incorporated in <b>Alberta</b>",
        "Build partner: <b>Speer Technologies</b>",
        "Team in 2031: <b>60</b>, base case",
        "Revenue a person: <b>$1.18M</b>"
      ]
    }
  ]
};
