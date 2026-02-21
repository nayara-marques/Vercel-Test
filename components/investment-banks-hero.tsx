import { Button } from "@/components/ui/button"
import Link from "next/link"

export function InvestmentBanksHero() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-sans text-4xl font-medium leading-tight tracking-tight text-content-primary md:text-5xl lg:text-6xl text-balance">
            Clade Is the AI System Banks Use to Evaluate Transactions—at Scale.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-lg leading-relaxed text-content-secondary md:text-xl text-pretty">
            It connects CIMs, models, diligence materials, management presentations, legal documents, emails, and call
            notes into a single reasoning layer—so teams can process their deal flow without sacrificing precision.
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
