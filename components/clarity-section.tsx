export function ClaritySection() {
  return (
    <section className="border-b border-border-subtle py-20 md:py-32 bg-surface-base">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        {/* Mobile layout - stacked */}
        <div className="flex flex-col gap-10 lg:hidden">
          <div className="text-center">
            <h3 className="font-sans text-base md:text-lg font-medium text-content-primary mb-2">
              Unlimited sources
            </h3>
            <p className="font-sans text-sm md:text-base text-content-secondary leading-relaxed">
              Internal systems, third-party providers, and proprietary data.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-sans text-base md:text-lg font-medium text-content-primary mb-2">
              Consistency at volume
            </h3>
            <p className="font-sans text-sm md:text-base text-content-secondary leading-relaxed">
              Data does not drift at scale.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-muted border border-border-subtle" />
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <h2 className="text-balance font-sans text-lg font-medium tracking-tight text-content-primary md:text-xl leading-tight text-center">
                  Clade converts scale and complexity into leverage.
                </h2>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-sans text-base md:text-lg font-medium text-content-primary mb-2">
              Context carries across everything
            </h3>
            <p className="font-sans text-sm md:text-base text-content-secondary leading-relaxed">
              Documents, entities, and history remain connected as information grows.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-sans text-base md:text-lg font-medium text-content-primary mb-2">
              Outputs improve with usage
            </h3>
            <p className="font-sans text-sm md:text-base text-content-secondary leading-relaxed">
              Reports and analyses auto-generate to reflect all available information.
            </p>
          </div>
        </div>

        {/* Desktop layout - features positioned around circle */}
        <div className="hidden lg:block relative">
          <div className="flex justify-center">
            <div className="relative w-[380px] h-[380px]">
              {/* Grey circle */}
              <div className="absolute inset-0 rounded-full bg-muted border border-border-subtle" />
              {/* Text centered inside circle */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <h2 className="text-balance font-sans text-2xl font-medium tracking-tight text-content-primary leading-tight text-center">
                  Clade converts scale and complexity into leverage.
                </h2>
              </div>

              {/* Upper left feature */}
              <div className="absolute -left-80 -top-4 w-72 text-right">
                <h3 className="font-sans text-lg font-medium text-content-primary mb-2">
                  Unlimited sources
                </h3>
                <p className="font-sans text-base text-content-secondary leading-relaxed">
                  Internal systems, third-party providers, and proprietary data.
                </p>
              </div>

              {/* Upper right feature */}
              <div className="absolute -right-80 -top-4 w-72 text-left">
                <h3 className="font-sans text-lg font-medium text-content-primary mb-2">
                  Consistency at volume
                </h3>
                <p className="font-sans text-base text-content-secondary leading-relaxed">
                  Data does not drift at scale.
                </p>
              </div>

              {/* Bottom left feature */}
              <div className="absolute -left-80 -bottom-4 w-72 text-right">
                <h3 className="font-sans text-lg font-medium text-content-primary mb-2">
                  Context carries across everything
                </h3>
                <p className="font-sans text-base text-content-secondary leading-relaxed">
                  Documents, entities, and history remain connected as information grows.
                </p>
              </div>

              {/* Bottom right feature */}
              <div className="absolute -right-80 -bottom-4 w-72 text-left">
                <h3 className="font-sans text-lg font-medium text-content-primary mb-2">
                  Outputs improve with usage
                </h3>
                <p className="font-sans text-base text-content-secondary leading-relaxed">
                  Reports and analyses auto-generate to reflect all available information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
