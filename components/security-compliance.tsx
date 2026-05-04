export default function SecurityCompliance() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-[1456px] px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-content-primary">
            Built to Meet
          </h2>
          <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-content-secondary italic">
            Industry Standards
          </p>
        </div>

        {/* Bordered container with corner brackets */}
        <div className="relative max-w-5xl mx-auto">
          {/* Top-left corner */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-content-primary" />
          {/* Bottom-right corner */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-content-primary" />

          {/* Dashed border container */}
          <div className="border border-dashed border-content-primary/30 py-16 px-8">
            {/* Compliance items */}
            <div className="grid grid-cols-3 divide-x divide-dashed divide-content-primary/30">
              {/* SOC 2 */}
              <div className="flex flex-col items-center justify-center px-8">
                <div className="w-24 h-24 rounded-full border-2 border-content-primary flex flex-col items-center justify-center mb-6">
                  <span className="text-content-primary text-xs font-medium">AICPA</span>
                  <span className="text-content-primary text-lg font-semibold">SOC 2</span>
                </div>
                <span className="text-content-primary text-lg font-medium">SOC 2</span>
              </div>

              {/* CCPA */}
              <div className="flex flex-col items-center justify-center px-8">
                <div className="w-24 h-24 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 40 60" className="w-12 h-20 fill-content-primary">
                    <path d="M20 0C8 0 0 8 0 20c0 8 4 16 8 24 4 8 8 12 12 16 4-4 8-8 12-16 4-8 8-16 8-24C40 8 32 0 20 0z" />
                  </svg>
                </div>
                <span className="text-content-primary text-lg font-medium">CCPA</span>
              </div>

              {/* GDPR */}
              <div className="flex flex-col items-center justify-center px-8">
                <div className="w-24 h-24 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 60 60" className="w-20 h-20">
                    {/* EU stars in a circle */}
                    {[...Array(12)].map((_, i) => {
                      const angle = (i * 30 - 90) * (Math.PI / 180)
                      const x = 30 + 24 * Math.cos(angle)
                      const y = 30 + 24 * Math.sin(angle)
                      return (
                        <text
                          key={i}
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="fill-content-primary text-[10px]"
                        >
                          ★
                        </text>
                      )
                    })}
                  </svg>
                </div>
                <span className="text-content-primary text-lg font-medium">GDPR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
