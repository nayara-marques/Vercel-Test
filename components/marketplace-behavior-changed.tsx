import { ImageIcon } from "lucide-react"

export function MarketplaceBehaviorChanged() {
  return (
    <section className="bg-surface-elevated py-24">
      <div className="mx-auto max-w-[1456px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-sans text-4xl font-medium tracking-tight text-content-primary">
              Allocator behavior has permanently changed.
            </h2>
            <p className="text-lg leading-relaxed text-content-secondary">
              Institutional investors and family offices no longer evaluate opportunities document by document.
            </p>
            <p className="text-lg leading-relaxed text-content-secondary">
              They use AI to synthesize materials, compare managers, surface risk, and pressure-test decisions—as part
              of their daily work.
            </p>
            <p className="text-lg leading-relaxed text-content-secondary">
              The managers who get evaluated are the ones inside that workflow.
              <br />
              The ones who aren't, don't.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-muted aspect-[4/3]">
            <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
