import { ImageIcon } from "lucide-react"

export default function AllocatorsUseCases() {
  return (
    <section className="bg-surface-primary py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - text content */}
          <div>
            <p className="font-sans text-xl text-content-primary font-bold mb-12 text-pretty leading-relaxed">
              From fragmented diligence to continuous investment intelligence.
            </p>

            <div className="space-y-8">
              <p className="font-sans text-lg text-content-primary font-medium mb-6">Allocators use Clade to:</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-brand-primary">•</span>
                  <p className="font-sans text-lg text-content-primary text-pretty leading-relaxed">
                    Understand funds and deals across the full body of materials—not one document at a time
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-brand-primary">•</span>
                  <p className="font-sans text-lg text-content-primary text-pretty leading-relaxed">
                    Surface risks, obligations, and inconsistencies before they become problems
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-brand-primary">•</span>
                  <p className="font-sans text-lg text-content-primary text-pretty leading-relaxed">
                    Draft IC memos, meeting notes, and bespoke reports grounded directly in source language
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="text-brand-primary">•</span>
                  <p className="font-sans text-lg text-content-primary text-pretty leading-relaxed">
                    Preserve institutional knowledge across turnover, time, and growing portfolios
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - image placeholder */}
          <div className="flex items-center justify-center bg-muted rounded-lg aspect-[4/3] border border-border-subtle">
            <ImageIcon className="w-12 h-12 text-content-tertiary" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle">
          <p className="font-sans text-2xl md:text-3xl text-content-primary font-bold text-center">
            This is infrastructure for institutional investment decisions.
          </p>
        </div>
      </div>
    </section>
  )
}
