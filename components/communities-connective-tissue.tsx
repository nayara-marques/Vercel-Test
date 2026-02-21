export default function CommunitiesConnectiveTissue() {
  return (
    <section className="bg-surface-base py-16 md:py-24">
      <div className="mx-auto max-w-[1456px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-content-primary mb-6 text-balance">
              Communities are the connective tissue of institutional investing.
            </h2>
            <p className="text-lg text-content-secondary mb-6 leading-relaxed">
              They bring allocators, fund managers, and strategic partners together—continuously, not episodically.
            </p>
            <p className="text-lg text-content-primary font-medium mb-6">Clade enhances these communities with AI:</p>
            <ul className="space-y-4">
              {[
                "Structured member directories that surface relevance, not noise",
                "AI chat and contextual discovery across shared content",
                "Pitch sessions and on-platform events tied to real workflows",
                "Private data rooms and collaborative diligence spaces",
                "Analytics that track engagement, shared intelligence, and opportunity flow",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-content-secondary">
                  <span className="text-brand-primary mt-1">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
            <span className="text-content-tertiary">Image placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
