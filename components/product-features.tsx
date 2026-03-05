export function ProductFeatures() {
  return (
    <section className="bg-surface-elevated py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1456px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Research & Diligence */}
          <div>
            <h3 className="font-sans text-2xl font-medium text-content-primary mb-4">Research & Diligence</h3>
            <p className="font-sans text-base text-content-secondary leading-relaxed">
              IDD and ODD workflows are automated with generative analysis. Key terms are extracted, managers are
              compared, inconsistencies are surfaced, and a complete diligence record is built—without stitching
              together spreadsheets, documents, and notes.
            </p>
          </div>

          {/* Automated Report Writing */}
          <div>
            <h3 className="font-sans text-2xl font-medium text-content-primary mb-4">Automated Report Writing</h3>
            <p className="font-sans text-base text-content-secondary leading-relaxed">
              With a click, disparate inputs become IC-ready materials teams can stand behind. Investment Committee
              memos, tear sheets, and ODD reports are generated from your data, your history, and your
              standards—preserving reasoning, not just conclusions.
            </p>
          </div>

          {/* Meeting Intelligence */}
          <div>
            <h3 className="font-sans text-2xl font-medium text-content-primary mb-4">Meeting Intelligence</h3>
            <p className="font-sans text-base text-content-secondary leading-relaxed">
              Diligence meetings become usable immediately. Calls are captured and analyzed in asset-class context
              agentically, ensuring insights don't disappear into static notes. Claims, risks, and follow-ups are
              identified, labeled, and linked directly to the broader investment record.
            </p>
          </div>

          {/* Portfolio Monitoring */}
          <div>
            <h3 className="font-sans text-2xl font-medium text-content-primary mb-4">Portfolio Monitoring</h3>
            <p className="font-sans text-base text-content-secondary leading-relaxed">
              The platform continuously tracks what changes and what quietly drifts. As new letters, DDQs, updates, and
              filings arrive, material differences are flagged and elevated into questions—highlighting risk and
              strategy drift early.
            </p>
          </div>

          {/* Natural-language Intelligence */}
          <div>
            <h3 className="font-sans text-2xl font-medium text-content-primary mb-4">Natural-language Intelligence</h3>
            <p className="font-sans text-base text-content-secondary leading-relaxed">
              Ask real questions. Get grounded answers. Teams query across documents, notes, meetings, and history using
              natural language without hunting for answers or managing files. Every response remains anchored to source
              evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
