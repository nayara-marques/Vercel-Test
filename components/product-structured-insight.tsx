export function ProductStructuredInsight() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1456px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
            <span className="text-content-tertiary font-sans text-sm">Placeholder Image</span>
          </div>
          <div>
            <h2 className="font-sans text-3xl md:text-4xl font-medium text-content-primary mb-6 text-balance">
              From unstructured inputs to structured insight
            </h2>
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              Clade applies investment-specific semantic analysis to identify what actually matters: strategies,
              exposures, terms, performance, risks, entities, and time.
            </p>
            <p className="font-sans text-lg text-content-secondary leading-relaxed mt-6">
              This foundation is what gives the platform its strength—enabling consistent comparison, change detection,
              and output across funds and deals, vintages, and asset classes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
