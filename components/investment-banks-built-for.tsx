import { ImageIcon } from "lucide-react"

export function InvestmentBanksBuiltFor() {
  return (
    <section className="bg-surface-elevated py-16 md:py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Placeholder image on left */}
          <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-muted border border-border-subtle">
            <ImageIcon className="h-16 w-16 text-content-tertiary" />
          </div>

          {/* Content on right */}
          <div>
            <h2 className="font-sans text-3xl font-medium leading-tight tracking-tight text-content-primary md:text-4xl text-balance">
              Because transaction work breaks general-purpose AI.
            </h2>
            <div className="mt-10 space-y-4">
              <p className="font-sans text-lg leading-relaxed text-content-secondary">Clade is built for:</p>
              <ul className="space-y-3 pl-6">
                <li className="font-sans text-lg leading-relaxed text-content-secondary list-disc">
                  High deal velocity across parallel transactions
                </li>
                <li className="font-sans text-lg leading-relaxed text-content-secondary list-disc">
                  Materials that change daily and often contradict each other
                </li>
                <li className="font-sans text-lg leading-relaxed text-content-secondary list-disc">
                  Teams working under scrutiny from clients, committees, and regulators
                </li>
                <li className="font-sans text-lg leading-relaxed text-content-secondary list-disc">
                  An environment where every claim must be grounded in the deal record
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
