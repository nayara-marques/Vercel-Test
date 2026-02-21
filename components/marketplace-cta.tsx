import { Button } from "@/components/ui/button"

export function MarketplaceCTA() {
  return (
    <section className="bg-surface-secondary py-24">
      <div className="mx-auto max-w-[1456px] px-6 text-center">
        <h2 className="font-sans text-4xl font-medium tracking-tight text-content-primary">
          See the Marketplace in action.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-content-secondary">
          Explore how LPs discover and diligence managers—and how GPs participate in the AI-driven allocation process.
        </p>
        <div className="mt-8">
          <Button size="lg">Request a demo</Button>
        </div>
      </div>
    </section>
  )
}
