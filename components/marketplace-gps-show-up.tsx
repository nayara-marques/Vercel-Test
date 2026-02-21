import { ImageIcon } from "lucide-react"

export function MarketplaceGPsShowUp() {
  return (
    <section className="bg-surface-base py-24">
      <div className="mx-auto max-w-[1456px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Placeholder Image */}
          <div className="aspect-[4/3] w-full bg-muted rounded-lg flex items-center justify-center border border-border-subtle">
            <ImageIcon className="h-16 w-16 text-content-tertiary" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-sans text-4xl font-medium tracking-tight text-content-primary">
              GPs show up where LPs are already deciding.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-content-secondary">
              More than 2,000 institutional allocators, representing over $17 trillion in AUM, use Clade to evaluate
              investments.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-content-secondary">The Marketplace gives fund managers:</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-content-tertiary">•</span>
                <span className="text-lg leading-relaxed text-content-secondary">
                  Exposure at the exact moment LPs are analyzing peer managers they respect
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-content-tertiary">•</span>
                <span className="text-lg leading-relaxed text-content-secondary">
                  Visibility grounded in real documents, terms, and comparative analysis
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-content-tertiary">•</span>
                <span className="text-lg leading-relaxed text-content-secondary">
                  Presence inside allocator workflows—before investment committees meet
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
