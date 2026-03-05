export function InfrastructureSection() {
  return (
    <section className="border-b border-border-subtle py-20 md:py-32 bg-surface-base">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <p className="text-pretty font-sans text-base text-content-secondary leading-relaxed">
                Pitch decks, PPMs, LPAs, DDQs, purchase agreements, consultant studies, meeting notes, side letters,
                risk reports, and RFPs span firms, teams, and years.
              </p>
              <p className="mt-4 text-pretty font-sans text-base text-content-primary leading-relaxed">
                Clade connects and reasons across all inputs, turning fragmented materials into structured insight and
                generative reports.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full aspect-video bg-surface-elevated border border-border-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-content-tertiary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-content-tertiary font-sans">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
