export default function SecurityPhilosophy() {
  return (
    <section className="bg-surface-secondary py-24 md:py-32">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left side - Heading */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-content-primary leading-tight">
              Security Without Compromise.
            </h2>
          </div>

          {/* Right side - Body text */}
          <div className="space-y-8">
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              At Clade, security is a first principle, not a feature. The platform is built for enterprise-grade requirements and the realities of institutional investing, where sensitive data and high-stakes decisions demand control and accountability. Clade operates on modern cloud infrastructure with automated controls and independent third-party audits, including SOC 2 Type II. Your data is never used to train internal or external models. Security at Clade is not a checkpoint. It is a system property.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-content-primary font-sans text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              Explore Trust Portal
              <span className="w-8 h-8 bg-content-tertiary/20 rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
