export function InvestmentBanksFeatures() {
  const features = [
    {
      title: "The full transaction record. Synthesized, not summarized.",
      description: "",
      points: [
        "Connect CIMs, financials, models, diligence reports, and management Q&A as a single intelligence layer",
        "Identify key drivers, assumptions, and open questions automatically",
        "Flag inconsistencies across materials before they surface at the wrong moment",
      ],
    },
    {
      title: "M&A & Capital Markets Execution",
      description: "Clade helps teams reason across fast-moving deal processes.",
      points: [
        "Maintain a coherent view as materials evolve under time pressure",
        "Track changes across decks, models, and disclosures",
        "Support fairness opinions, committee reviews, and internal approvals",
      ],
    },
    {
      title: "Deal, Pitch & Marketing Materials",
      description: "Clade speeds the creation of the materials bankers actually produce.",
      points: [
        "Draft CIM sections, pitch books, teasers, and transaction summaries directly from the diligence record",
        "Maintain consistency across CIMs, management presentations, models, and disclosures",
        "Reduce last-minute revisions caused by missed language, numbers, or assumptions",
      ],
    },
    {
      title: "Institutional Memory & Reuse",
      description: "Clade captures transaction knowledge that normally disappears.",
      points: [
        "Reuse insights from prior deals without copy-paste",
        "Build internal intelligence across sectors, structures, and clients",
        "Onboard new team members faster without context loss",
      ],
    },
  ]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="grid gap-16 md:gap-24">
          {features.map((feature, index) => (
            <div key={index} className="grid gap-8 md:grid-cols-2 md:gap-12 items-start">
              <div>
                <h3 className="font-sans text-2xl font-medium leading-tight tracking-tight text-content-primary md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 font-sans text-lg leading-relaxed text-content-secondary text-pretty">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3 pl-6">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="font-sans text-base leading-relaxed text-content-secondary list-disc">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-video w-full rounded-lg bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
