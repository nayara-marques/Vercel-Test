export default function SecurityPhilosophy() {
  return (
    <section className="bg-surface-secondary py-24 md:py-32">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left side - Heading */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-content-primary leading-tight">
              Security Built In.
              <br />
              Not Bolted On.
            </h2>
          </div>

          {/* Right side - Body text */}
          <div className="space-y-6">
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              At Clade, security is foundational to how the platform is designed and operated. From day one, we&apos;ve built with a zero-trust architecture, strict access controls, and end-to-end encryption to protect sensitive investment data at every layer.
            </p>
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              Institutional workflows involve highly confidential information across funds, managers, and internal processes. Our infrastructure is designed to reflect that reality. Data is isolated, permissions are granular, and every interaction is auditable.
            </p>
            <p className="font-sans text-lg text-content-secondary leading-relaxed">
              We run on modern cloud infrastructure with continuous monitoring, automated controls, and independent third-party audits, including SOC 2 Type II. Your data is never used to train internal or external models. Ever.
            </p>
            <p className="font-sans text-lg font-medium text-content-primary leading-relaxed">
              Security at Clade is not a checkpoint. It is a system property.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
