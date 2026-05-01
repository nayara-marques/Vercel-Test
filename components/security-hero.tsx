export default function SecurityHero() {
  return (
    <section className="bg-surface-primary py-24 md:py-32">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="max-w-4xl">
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium text-content-primary mb-6 text-balance">
            Trust is the prerequisite
          </h1>
          <p className="font-sans text-xl md:text-2xl text-content-secondary mb-8 text-pretty leading-relaxed">
            Clade is built to the standards institutions require — independently audited, encrypted end-to-end, and governed by the same controls as the firms we serve.
          </p>
          <button className="bg-brand-primary text-content-on-brand px-8 py-4 rounded-lg font-sans text-lg font-medium hover:opacity-90 transition-opacity">
            Request a demo
          </button>
        </div>
      </div>
    </section>
  )
}
