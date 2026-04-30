import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InvestmentBanksCta() {
  return (
    <section className="bg-surface-elevated py-16 md:py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-sans text-3xl font-medium leading-tight tracking-tight text-content-primary md:text-4xl text-balance">
            See Clade on a live transaction.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-content-secondary text-pretty">
            Bring a CIM, pitch deck, or data room. We'll show you what Clade produces—using your materials.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90">
              <Link href="/contact">Request a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
