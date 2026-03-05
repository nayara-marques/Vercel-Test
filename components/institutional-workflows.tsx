export function InstitutionalWorkflows() {
  return (
    <section className="border-b border-border-subtle py-20 md:py-32 bg-background">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div>
            <h2 className="text-balance font-sans text-4xl font-medium tracking-tight text-content-primary md:text-5xl lg:text-6xl leading-tight">
              Clade is designed around institutional workflows on both sides of the table.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-base text-content-secondary leading-relaxed">
              The more your team uses Clade, the more intelligent it becomes, compounding insight over time.
            </p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central placeholder image */}
          <div className="aspect-[4/3] flex items-center justify-center">
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Institutional workflows visualization"
              className="w-full h-full object-contain rounded-lg bg-muted"
            />
          </div>

          {/* Top left - Data and system-of-record integrations */}
          <div className="absolute left-0 top-8 max-w-[280px] hidden lg:block">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">
                <svg className="w-5 h-5 text-content-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-base font-medium text-content-primary mb-1">
                  Data and system-of-record integrations
                </p>
                <p className="font-sans text-sm text-content-secondary leading-relaxed">
                  Native integrations across third-party sources and core systems
                </p>
              </div>
            </div>
          </div>

          {/* Middle left - Asset class intelligence */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 max-w-[280px] hidden lg:block">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">
                <svg className="w-5 h-5 text-content-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-base font-medium text-content-primary mb-1">Strategy-aware taxonomies</p>
                <p className="font-sans text-sm text-content-secondary leading-relaxed">
                  Configurable ontologies by strategy and asset class
                </p>
              </div>
            </div>
          </div>

          {/* Bottom left - Structured extraction */}
          <div className="absolute left-0 bottom-16 max-w-[280px] hidden lg:block">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">
                <svg className="w-5 h-5 text-content-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-base font-medium text-content-primary mb-1">Structured extraction</p>
                <p className="font-sans text-sm text-content-secondary leading-relaxed">
                  Asset class-based data extraction from unstructured documents
                </p>
              </div>
            </div>
          </div>

          {/* Top right - Purpose-built schema */}
          <div className="absolute right-0 top-8 max-w-[280px] hidden lg:block">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">
                <svg className="w-5 h-5 text-content-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-base font-medium text-content-primary mb-1">Purpose-built schema</p>
                <p className="font-sans text-sm text-content-secondary leading-relaxed">
                  Investment-specific models and context graphs
                </p>
              </div>
            </div>
          </div>

          {/* Middle right - Entity resolution */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 max-w-[280px] hidden lg:block">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">
                <svg className="w-5 h-5 text-content-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-base font-medium text-content-primary mb-1">Entity-level coherence</p>
                <p className="font-sans text-sm text-content-secondary leading-relaxed">
                  Resolution across managers, vehicles, and counterparties
                </p>
              </div>
            </div>
          </div>

          {/* Bottom right - Enterprise trust layer */}
          <div className="absolute right-0 bottom-16 max-w-[280px] hidden lg:block">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 mt-1">
                <svg className="w-5 h-5 text-content-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-sans text-base font-medium text-content-primary mb-1">Enterprise trust layer</p>
                <p className="font-sans text-sm text-content-secondary leading-relaxed">
                  Institutional-grade security, permissions, and auditability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
