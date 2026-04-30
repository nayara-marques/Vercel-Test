import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-surface-base">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-sans text-2xl font-medium tracking-tight text-content-primary md:text-3xl lg:text-4xl leading-tight">
            Bring a real fund, deal, or portfolio. We'll show you what Clade produces — using your documents.
          </h2>

          <div className="mt-10 flex justify-center">
            <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90 font-sans text-base">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
