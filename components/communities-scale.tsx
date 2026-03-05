export default function CommunitiesScale() {
  return (
    <section className="bg-surface-elevated py-16 md:py-24">
      <div className="mx-auto max-w-[1456px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
            <span className="text-content-tertiary">Image placeholder</span>
          </div>
          <div>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-xl md:text-2xl font-semibold text-content-primary">
                Networked knowledge instead of isolated content.
              </p>
              <p className="font-sans text-xl md:text-2xl font-semibold text-content-primary">
                Ongoing collaboration instead of one-off meetings.
              </p>
              <p className="font-sans text-xl md:text-2xl font-semibold text-content-primary">
                AI-enhanced insight instead of manual memory.
              </p>
            </div>
            <p className="text-lg text-content-secondary leading-relaxed">
              This is how communities stay aligned as they grow — and how the intelligence they generate compounds over time instead of disappearing after every conference.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
