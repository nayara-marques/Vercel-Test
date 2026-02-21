export default function CommunitiesScale() {
  return (
    <section className="bg-surface-elevated py-16 md:py-24">
      <div className="mx-auto max-w-[1456px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
            <span className="text-content-tertiary">Image placeholder</span>
          </div>
          <div>
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-content-primary mb-6 text-balance">
              Institutional relationships don't scale on email.
            </h2>
            <p className="text-lg text-content-secondary mb-6 leading-relaxed">
              Clade Communities replace fragmentation with a shared, intelligent workspace:
            </p>
            <ul className="space-y-4">
              {[
                "Networked knowledge instead of isolated content",
                "Ongoing collaboration instead of one-off meetings",
                "AI-enhanced insight instead of manual memory",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-content-secondary">
                  <span className="text-brand-primary mt-1">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-content-secondary mt-6 italic">This is how communities stay aligned as they grow.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
