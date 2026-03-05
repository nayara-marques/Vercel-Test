export default function CommunitiesAIIntelligence() {
  return (
    <section className="bg-surface-base py-16 md:py-24">
      <div className="mx-auto max-w-[1456px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-content-primary mb-6 text-balance">
              From meetings to momentum.
            </h2>
            <p className="text-lg text-content-secondary mb-6 leading-relaxed">
              Members connect beyond conferences and calendars:
            </p>
            <ul className="space-y-4">
              {[
                "Share best practices and benchmark thinking",
                "Surface managers and strategies through structured insight",
                "Collaborate on diligence and research in private, searchable spaces",
                "Run community-backed deal investigations, surveys, and workstreams",
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
