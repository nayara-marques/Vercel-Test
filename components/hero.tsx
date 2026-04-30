import { Button } from "@/components/ui/button"

export function Hero() {
  const clients = ["Client Logo", "Client Logo", "Client Logo", "Client Logo"]

  return (
    <section className="relative overflow-hidden border-b border-border-subtle py-24 md:py-32 lg:py-40">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance font-sans text-4xl font-medium tracking-tight text-content-primary md:text-5xl lg:text-6xl leading-[1.1]">
            Institutional AI for Capital Decisions
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty font-sans text-lg text-content-secondary md:text-xl leading-relaxed">
            Investment tools that turn documents and data into intelligence, connecting teams and automating workflows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center">
            <Button size="lg" className="bg-brand-primary text-white hover:bg-brand-primary/90 font-sans text-base">
              Book a Demo
            </Button>
            <a 
              href="/product" 
              className="group inline-flex items-center gap-2 text-base font-medium text-content-primary hover:text-brand-primary transition-colors"
            >
              Explore the Product
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Client logos section */}
          <div className="mt-16 md:mt-20">
            <p className="font-sans text-sm font-medium text-content-secondary mb-8 text-center">
              Helping everyone from endowments to private equity funds unlock their data:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center">
                  <span className="font-sans text-sm font-medium text-content-tertiary">{client}</span>
                </div>
              ))}
              <span className="font-sans text-sm font-medium text-content-tertiary">+many more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
