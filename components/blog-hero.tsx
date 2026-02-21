export default function BlogHero() {
  return (
    <section className="border-b border-border-subtle bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-balance font-sans text-4xl font-medium tracking-tight text-content-primary md:text-5xl lg:text-6xl leading-[1.1]">
          Clade Blog
        </h1>
        <p className="mb-8 font-sans text-lg text-content-secondary md:text-xl leading-relaxed">
          Product updates, industry insights, and company news from the Clade team.
        </p>
        <div className="mx-auto max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 pr-12 text-content placeholder:text-content-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-content-secondary hover:text-primary"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
