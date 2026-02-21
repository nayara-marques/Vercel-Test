import { Button } from "@/components/ui/button"

export function ProductCTA() {
  return (
    <section className="bg-surface-elevated py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1456px]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-medium text-content-primary mb-6 text-balance">
            For teams navigating complexity, clarity matters.
          </h2>
          <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90 font-sans text-base px-8">
            Explore Clade
          </Button>
        </div>
      </div>
    </section>
  )
}
