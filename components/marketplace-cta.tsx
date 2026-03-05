import { Button } from "@/components/ui/button"

export function MarketplaceCTA() {
  return (
    <section className="bg-muted py-28">
      <div className="mx-auto max-w-[1456px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-content-primary md:text-4xl">
            See the Marketplace in action.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-content-secondary md:text-xl">
            Explore how LPs discover and diligence managers — and how GPs participate in the AI-driven allocation process.
          </p>
          <div className="mt-10">
            <Button size="lg" className="px-8">
              Request a demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
