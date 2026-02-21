export function ThreeFeatures() {
  const features = [
    {
      title: "Cross-document reasoning",
      description:
        "Semantic-intelligence span funds and deals, vintages, strategies, and histories — with consistent, explainable answers.",
    },
    {
      title: "Structured collaboration",
      description:
        "Information sharing, diligence responses, and task management inside a private system of engagement.",
    },
    {
      title: "Workflow automation",
      description:
        "End-to-end generation of diligence, bespoke reports, and portfolio monitoring, driven directly by your data.",
    },
  ]

  return (
    <section className="border-b border-border-subtle py-20 md:py-32 bg-surface-base">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-sans text-xl font-medium text-content-primary">{feature.title}</h3>
              <p className="mt-3 font-sans text-base text-content-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
