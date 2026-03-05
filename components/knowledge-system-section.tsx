export function KnowledgeSystemSection() {
  return (
    <section className="border-b border-border-subtle py-20 md:py-32 bg-surface-base">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-balance font-sans text-3xl font-medium tracking-tight text-content-primary md:text-4xl lg:text-5xl leading-tight">
              A knowledge system for serious investment work
            </h2>
            <p className="mt-6 text-pretty font-sans text-lg text-content-secondary md:text-xl leading-relaxed">
              Clade unifies documents, data, and relationships into a single investment workspace, then applies
              purpose-built AI to contextualize it all.
            </p>
            <p className="mt-4 text-pretty font-sans text-base text-content-secondary leading-relaxed italic">
              Generic AI generates answers. Clade understands asset-classes.
            </p>
          </div>
          <div className="relative aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border-subtle">
            <span className="text-content-tertiary text-sm">Image placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}
