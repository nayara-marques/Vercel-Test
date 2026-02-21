export function MarketplaceDiscovery() {
  return (
    <section className="bg-surface-elevated py-24">
      <div className="mx-auto max-w-[1456px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-sans text-4xl font-medium tracking-tight text-content-primary">
              Discovery inside the allocator workflow
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-content-secondary">
              Managers appear at the moment LPs are forming conviction:
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-content-tertiary">–</span>
                <span className="text-lg leading-relaxed text-content-secondary">
                  Monitoring funds in their portfolio
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-content-tertiary">–</span>
                <span className="text-lg leading-relaxed text-content-secondary">
                  Underwriting strategies under active consideration
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-content-tertiary">–</span>
                <span className="text-lg leading-relaxed text-content-secondary">
                  Preparing materials for investment committee
                </span>
              </li>
            </ul>
            {/* </CHANGE> */}
            <p className="mt-8 text-lg leading-relaxed text-content-secondary">
              Managers don't interrupt the process.
              <br />
              They appear within it.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[400px] w-full rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    </section>
  )
}
