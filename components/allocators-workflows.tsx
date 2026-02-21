export default function AllocatorsWorkflows() {
  return (
    <section className="bg-surface-elevated py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <h2 className="font-sans text-4xl md:text-5xl font-medium text-content-primary mb-16 text-center">
          Core allocator workflows
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-sans text-2xl font-medium text-content-primary">Diligence</h3>
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              Clade synthesizes the full diligence record—DDQs, decks, LPAs, policies, financials, notes—into structured
              intelligence.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Analyze the full corpus of documents, data, and policies as a single diligence record
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Normalize terms, economics, and governance across funds and vintages
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Expose contradictions, omissions, and embedded risk across materials
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-2xl font-medium text-content-primary">Legal & Terms Intelligence</h3>
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              Clade understands LPAs, side letters, purchase agreements as a system—not isolated PDFs.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Compare terms across funds and vintages
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Surface MFN-relevant clauses and edge cases
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Track obligations, discretion, and investor protections over time
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-2xl font-medium text-content-primary">Portfolio Monitoring</h3>
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              Clade continuously reasons across quarterly letters, updates, calls, and reports.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">Identify what changed—and what didn't</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Track narratives, promises, exposures, and risk signals by fund
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Prepare sharper questions before every manager interaction
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-2xl font-medium text-content-primary">IC & Reporting</h3>
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              Clade turns analysis into defensible written output.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  IC updates, ODD and monitoring memos, and board-ready summaries
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Clear separation of facts, interpretation, and open questions
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary">•</span>
                <span className="font-sans text-base text-content-primary">
                  Always traceable back to source materials
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
