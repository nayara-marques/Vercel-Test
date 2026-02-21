import { ImageIcon } from "lucide-react"

export default function AllocatorsWhyChoose() {
  return (
    <section className="bg-surface-primary py-24">
      <div className="container mx-auto max-w-[1456px] px-6">
        <h2 className="font-sans text-4xl md:text-5xl font-medium text-content-primary mb-12 text-center">
          Why allocators choose Clade
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder image on left */}
          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center border border-border-subtle">
            <ImageIcon className="w-12 h-12 text-content-tertiary" />
          </div>

          {/* Content on right */}
          <div className="space-y-12">
            <div>
              <p className="font-sans text-xl text-content-primary font-medium mb-6">
                Generic AI fails at institutional investing.
              </p>
              <p className="font-sans text-lg text-content-secondary leading-relaxed">
                The work is too long-lived, too nuanced, and too consequential.
              </p>
            </div>

            <div>
              <p className="font-sans text-lg text-content-primary font-medium mb-6">Clade is built for:</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-brand-primary">•</span>
                  <span className="font-sans text-lg text-content-primary">
                    Multi-year diligence, not disposable prompts
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary">•</span>
                  <span className="font-sans text-lg text-content-primary">
                    Real document conflict, not single-file summaries
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary">•</span>
                  <span className="font-sans text-lg text-content-primary">
                    Institutional accountability, not black-box answers
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary">•</span>
                  <span className="font-sans text-lg text-content-primary">
                    Decisions where precision actually matters
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1456px] px-6 mt-24 pt-16 border-t border-border-subtle">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <p className="font-sans text-xl md:text-2xl text-content-primary font-medium">
            From raw materials to conviction.
          </p>
          <p className="font-sans text-xl md:text-2xl text-content-primary font-medium">
            Every conclusion can be traced.
          </p>
          <p className="font-sans text-xl md:text-2xl text-content-primary font-medium">Nothing is "just generated."</p>
        </div>
      </div>
    </section>
  )
}
