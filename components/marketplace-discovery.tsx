export function MarketplaceDiscovery() {
  return (
    <section className="bg-surface-elevated py-24">
      <div className="mx-auto max-w-[1456px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-sans text-3xl md:text-4xl font-medium tracking-tight text-content-primary leading-tight">
              GPs appear where LPs are already deciding.
            </h2>
            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span className="text-lg leading-relaxed text-content-secondary">
                  While comparing peer funds they already trust
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span className="text-lg leading-relaxed text-content-secondary">
                  While underwriting strategies under active consideration
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span className="text-lg leading-relaxed text-content-secondary">
                  While preparing materials for investment committee
                </span>
              </li>
            </ul>
            <div className="mt-10 border-l-2 border-accent pl-5">
              <p className="text-xl font-medium leading-relaxed text-content-primary">
                Managers don't interrupt the process.
              </p>
              <p className="text-xl font-medium leading-relaxed text-content-primary">
                They appear within it.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[400px] w-full rounded-lg bg-muted" />
          </div>
        </div>
      </div>
    </section>
  )
}
