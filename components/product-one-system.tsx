import { CheckCircle2, ImageIcon } from "lucide-react"

export function ProductOneSystem() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-[1456px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium text-content-primary mb-6 text-center text-balance">
            One system. Every source. Continuous intelligence.
          </h2>
          <p className="font-sans text-lg text-content-secondary mb-12 text-center leading-relaxed text-pretty">
            Clade is used by investment teams to understand opportunities faster, evaluate them more rigorously, and
            stay grounded in context over time.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Grey placeholder image on left */}
            <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border-subtle">
              <ImageIcon className="w-12 h-12 text-content-tertiary" />
            </div>

            {/* List moved to right */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <p className="font-sans text-base text-content-primary">
                  Transform fund and deal materials into structured data
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <p className="font-sans text-base text-content-primary">
                  Generate IC memos, tear sheets, and investment reports in minutes—not days
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <p className="font-sans text-base text-content-primary">
                  Identify and track fund risk factors as information changes
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <p className="font-sans text-base text-content-primary">
                  Capture and activate diligence meeting notes automatically
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <p className="font-sans text-base text-content-primary">
                  Analyze complex legal documents like LPAs, side letters, and MFN elections with precision
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <p className="font-sans text-base text-content-primary">
                  Compare funds, deals, and strategies side-by-side
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <p className="font-sans text-base text-content-primary">
                  Reason across documents, notes, and history using asset-class-aware natural language—so judgment is
                  amplified, not replaced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
