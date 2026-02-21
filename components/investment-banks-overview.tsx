export function InvestmentBanksOverview() {
  return (
    <section className="bg-surface-elevated py-16 md:py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-sans text-3xl font-medium leading-tight tracking-tight text-content-primary md:text-4xl text-balance">
            Clade turns transaction volume into durable institutional intelligence.
          </h2>
          <div className="mt-10 space-y-4">
            <p className="font-sans text-lg leading-relaxed text-content-secondary">Investment banks use Clade to:</p>
            <ul className="space-y-3 pl-6">
              <li className="font-sans text-lg leading-relaxed text-content-secondary list-disc">
                Understand each transaction across all deal materials—not just the latest deck
              </li>
              <li className="font-sans text-lg leading-relaxed text-content-secondary list-disc">
                Surface risks, gaps, and inconsistencies early in the process
              </li>
              <li className="font-sans text-lg leading-relaxed text-content-secondary list-disc">
                Produce high-quality internal and client-facing materials faster
              </li>
              <li className="font-sans text-lg leading-relaxed text-content-secondary list-disc">
                Preserve deal knowledge across teams, offices, and mandates
              </li>
            </ul>
          </div>
          <div className="mt-12 text-center">
            <p className="font-sans text-2xl md:text-4xl font-bold leading-relaxed text-content-primary">
              This isn't search. It's transaction infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
