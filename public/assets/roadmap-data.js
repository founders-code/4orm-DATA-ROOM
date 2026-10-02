/* 4orm Finance · Path to Revenue · adoption-led plan, Sep 2026 -> Sep 2027 and beyond.
   States: done = complete groundwork · active = underway now · todo = planned.
   Percentages are a founder's self-assessment of an early-stage plan, not a claim of shipped product. */
const DATA = {
  updated: "September 1, 2026",
  overallPct: 18,
  overallNote: "The arc is simple: 4ormIQ earns trust for free, 4orm sells the record to the regulated business, and the same engine widens into a moat one industry at a time. The groundwork is done, the pre-seed is open, and the build, the first customers and the free consumer check are sequenced behind the close. The workstreams below carry the whole plan: what is done, what is underway now, and what is next.",

  capitalValue: {
    asOf: "October 2026",
    lead: "The pre-seed is $2.5 million, closed in Q1 2027. $80K is raised; $170K completes the opening $250K; the remaining $2.25M closes in two tranches, $1.0M and $1.25M. A $3.55 million seed follows at a $30 million valuation. Below is the sequence, and where the money goes.",
    stats: [
      { k:"$2.5M", l:"Pre-seed, closed Q1 2027" },
      { k:"$250K",  l:"Opening capital ($80K raised)" },
      { k:"$3.55M", l:"Seed to follow, at $30M" },
      { k:"$71.1M", l:"Base-case revenue in 2031" }
    ],
    groups: [
      { title:"The capital sequence", rows:[
        { item:"Raised", detail:"Capital already raised and working as the base.", cons:"$80,000", head:"Foundation" },
        { item:"To $250K", detail:"Completes the opening tranche: discovery, legal and compliance, insurance, talent and design-partner work.", cons:"+$170,000", head:"Q4 2026" },
        { item:"First major close", detail:"To $1.25M total: the mortgage build, pilot readiness, core delivery and the operating team.", cons:"+$1,000,000", head:"Q1 2027" },
        { item:"Final close", detail:"To $2.5M total: full runway, commercial launch and the proof required to expand.", cons:"+$1,250,000", head:"Q1 2027" }
      ], subtotal:{ label:"Subtotal - the pre-seed", cons:"$2,500,000", head:"" } },
      { title:"What the $2.5M must buy", rows:[
        { item:"People and advisors", detail:"Named fees, sales and client delivery, and operating leadership.", cons:"$1,005,000", head:"40%" },
        { item:"Speer build and maintenance", detail:"Development and routine testing through Speer.", cons:"$460,000", head:"18%" },
        { item:"Legal and security", detail:"Contracts, privacy design, independent security testing and advice.", cons:"$190,000", head:"8%" },
        { item:"Run the company", detail:"Hosting, tools, bookkeeping, insurance and administration.", cons:"$180,000", head:"7%" },
        { item:"Reach customers", detail:"Discovery, demonstrations, pilots and customer marketing.", cons:"$136,000", head:"5%" },
        { item:"Bridge repayment", detail:"Existing principal allowance; final balance to be confirmed.", cons:"$30,000", head:"1%" }
      ], subtotal:{ label:"Subtotal - 18-month core", cons:"$2,001,000", head:"80%" } }
    ],
    total: { label:"Pre-seed total", cons:"$2,500,000", head:"" },
    foot: "The one-line version: $2.5M closes the pre-seed in Q1 2027 - $80K raised, $170K to $250K, then $1.0M and $1.25M. The $2.001M 18-month core is wrapped with $300K contingency (15%) and a $199K runway reserve, for $2.5M total. A $3.55M seed at a $30M valuation shortens the climb rather than keeping the company alive. Source: 4orm Finance Roadmap to Capital and master pro forma, October 2026, in Canadian dollars."
  },

  /* Planned milestones, newest target first. date = target quarter. vertical = a workstream id. */
  wins: [
    { date:"2028+",   vertical:"moat",        text:"Investments and insurance turn paid; the same engine, a fifth and sixth rule set." },
    { date:"2029",    vertical:"moat",        text:"Real estate trust accounts turn paid as monthly reconciliation lands." },
    { date:"Q3 2027", vertical:"regulator",   text:"Independent review readiness proven end to end, aligned to the RPAA review." },
    { date:"Q3 2027", vertical:"capital",     text:"Seed closed at $3.55M on a $30M valuation, against five customer references." },
    { date:"Q3 2027", vertical:"iq",          text:"Seventy-five thousand consumers on the free 4ormIQ layer." },
    { date:"Q1 2027", vertical:"capital",     text:"Pre-seed closes at $2.5M; the final $1.25M tranche completes." },
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
    { date:"Q4 2026", vertical:"capital",     text:"Opening capital to $250K; $80K raised, then $170K added." },
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
      pct:32, stage:"Pre-seed open · $2.5M · seed to follow",
      benchmark:{level:"onpar", note:"<b>Structured and open.</b> A $2.5M pre-seed closes in Q1 2027: $80K is raised, $170K completes the opening $250K, then $1.0M and $1.25M close the round. A $3.55M seed follows at a $30M valuation."},
      checkpoints:[
        {state:"done", t:"Capital structure set", d:"$2.5M pre-seed, four-step sequence; cap table and three-case model tracing to the pro forma."},
        {state:"done", t:"$80K raised", d:"The founding capital, working as the base."},
        {state:"active", t:"Opening capital to $250K", d:"$170K completes the opening tranche: discovery, legal, compliance, insurance, talent and the design partner."},
        {state:"todo", t:"First major close", d:"+$1.0M to $1.25M total: build, pilot readiness and the operating team."},
        {state:"todo", t:"Pre-seed closes", d:"+$1.25M to $2.5M total, Q1 2027: full runway and expansion proof."},
        {state:"todo", t:"Seed closed", d:"$3.55M at a $30M valuation, September 2027, against five references."}
      ],
      facts:[
        "Pre-seed: <b>$2.5M</b> · opening: <b>$250K</b> ($80K raised)",
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
