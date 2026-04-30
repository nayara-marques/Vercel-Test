import { Button } from "@/components/ui/button"

export function MarketplaceCTA() {
  return (
    <section className="bg-muted py-28">
      <div className="mx-auto max-w-[1456px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-semibold leading-tight tracking-tight text-content-primary md:text-4xl">
            Don't be invisible when decisions are made.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-content-secondary md:text-xl">
            See how allocators discover and diligence managers inside Clade — and how the Marketplace puts you inside that process.
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
