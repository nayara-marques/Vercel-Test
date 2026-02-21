export default function WorktoolsFeatures() {
  const features = [
    {
      title: "Deal Diligence",
      description:
        "Clade synthesizes the full deal record—CIMs, data room documents, financials, models, legal agreements, expert calls, and notes—into structured intelligence.",
      capabilities: [
        "Draft IC memos and deal summaries with citations to source materials",
        "Track key assumptions, risks, and unresolved questions",
        "Surface contradictions across management materials, diligence findings, and third-party reports",
      ],
    },
    {
      title: "Legal & Transaction Intelligence",
      description: "Clade helps teams reason across complex deal documentation without losing context.",
      capabilities: [
        "Extract and compare key terms across purchase agreements, credit docs, and side letters",
        "Flag investor protections, covenants, and downside scenarios",
        "Maintain a clear view of obligations, rights, and structural risk",
      ],
    },
    {
      title: "Investment Committee & Decision Support",
      description: "Clade turns diligence into coherent, defensible narratives.",
      capabilities: [
        "IC materials that separate facts, analysis, and judgment",
        "Clear articulation of the investment case and key risks",
        "Fast iteration as new information arrives late in process",
      ],
    },
    {
      title: "Portfolio Company Monitoring",
      description: "Clade keeps deal understanding alive after close.",
      capabilities: [
        "Track performance, risk signals, and strategic changes across updates and calls",
        "Compare actual performance to underwriting assumptions",
        "Prepare sharper board materials and internal updates",
      ],
    },
  ]

  return (
    <section className="border-b border-border-subtle bg-surface-elevated">
      <div className="mx-auto max-w-[1456px] px-6 py-20">
        <h2 className="mb-16 text-center font-sans text-3xl font-medium leading-tight tracking-tight text-content-primary md:text-4xl">
          Investment decision infrastructure.
        </h2>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div>
                <h3 className="font-sans text-2xl font-medium text-content-primary">{feature.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-content-secondary">{feature.description}</p>
                <ul className="mt-6 space-y-3">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start gap-3 text-content-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-content-secondary" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center">
                <div className="aspect-video w-full rounded-lg bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
