export default function CommunitiesHero() {
  return (
    <section className="bg-surface-base py-16 md:py-24">
      <div className="mx-auto max-w-[1456px] px-6 md:px-12">
        <div className="max-w-4xl">
          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold text-content-primary mb-6 text-balance">
            Where Investment Communities Actually Do the Work.
          </h1>
          <p className="text-lg md:text-xl text-content-secondary mb-8 text-pretty leading-relaxed">
            Clade Communities bring leading offline groups online—giving LPs and GPs an AI-native space to collaborate,
            share insight, and diligence opportunities together.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-brand-primary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Request a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
