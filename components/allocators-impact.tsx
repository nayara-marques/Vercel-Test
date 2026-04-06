import { ImageIcon } from "lucide-react"

export default function AllocatorsImpact() {
  return (
    <section className="bg-surface-elevated py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="relative max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-content-primary text-center mb-12">
            What changes with Clade
          </h2>

          {/* Central circular placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-muted border border-border-subtle flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-content-tertiary" />
            </div>
          </div>

          {/* Points arranged in a grid around the circle */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Top row - 3 points */}
            <div className="text-center md:text-left">
              <p className="font-sans text-base md:text-lg text-content-primary leading-relaxed">
                Diligence compresses without losing rigor
              </p>
            </div>
            <div className="text-center">
              <p className="font-sans text-base md:text-lg text-content-primary leading-relaxed">
                Key terms and risks stop getting rediscovered late
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-sans text-base md:text-lg text-content-primary leading-relaxed">
                IC discussions shift from "what does this say?" to "what do we believe?"
              </p>
            </div>

            {/* Bottom row - 3 points */}
            <div className="text-center md:text-left">
              <p className="font-sans text-base md:text-lg text-content-primary leading-relaxed">
                Teams share a single, defensible view of the record
              </p>
            </div>
            <div className="text-center">
              <p className="font-sans text-base md:text-lg text-content-primary leading-relaxed">
                Turnover stops erasing institutional knowledge
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-sans text-base md:text-lg text-content-primary leading-relaxed">
                Document archives compound into an advantage
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle max-w-4xl mx-auto">
          <p className="font-sans text-xl font-semibold text-content-primary text-center leading-relaxed">
            Unified data. Automated workflows. Time back.
          </p>
        </div>
      </div>
    </section>
  )
}
