import { ImageIcon } from "lucide-react"

export function MarketplaceNotDatabase() {
  return (
    <section className="bg-surface-base py-24">
      <div className="mx-auto max-w-[1456px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Grey placeholder image on the left */}
          <div className="aspect-[4/3] w-full rounded-lg bg-muted flex items-center justify-center border border-border-subtle">
            <ImageIcon className="h-16 w-16 text-content-tertiary" />
          </div>

          {/* Text content on the right */}
          <div>
            <h2 className="font-sans text-4xl font-medium tracking-tight text-content-primary">
              Not capital introduction. Not a database.
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-lg leading-relaxed text-content-secondary">
                The Marketplace lives inside allocator diligence workflows.
              </p>
              <p className="text-lg leading-relaxed text-content-secondary">
                Managers surface while LPs are analyzing peers, pressure-testing strategies, and preparing IC
                materials—not browsing profiles.
              </p>
              <p className="text-lg leading-relaxed text-content-secondary">
                Visibility is driven by AI-structured intelligence grounded in real documents, terms, and disclosures.
              </p>
              <p className="text-lg font-medium leading-relaxed text-content-primary">
                Discovery, diligence, and decision-making happen as one continuous process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
