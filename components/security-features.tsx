const features = [
  {
    title: "Your data is never used for training.",
    description:
      "Documents, inputs, queries, and outputs are never used to train Clade's models or any third-party models.",
  },
  {
    title: "Strict tenant isolation.",
    description:
      "Customer data is logically isolated by tenant. No data is shared across environments, and access is tightly controlled.",
  },
  {
    title: "Complete audit visibility.",
    description:
      "Every query, document access, and output is logged. Export full audit trails on demand with complete lineage.",
  },
  {
    title: "Role-based, least-privilege access.",
    description:
      "Customer data is protected through tightly controlled permissions, with MFA for privileged access and fully auditable production controls.",
  },
  {
    title: "Encryption without compromise.",
    description:
      "Data is encrypted in transit using TLS and at rest with AES-256, with keys rotated on a regular schedule.",
  },
  {
    title: "Independently validated.",
    description:
      "SOC 2 Type II certified. Annual third-party penetration testing. Continuous monitoring and vulnerability detection.",
  },
]

export default function SecurityFeatures() {
  return (
    <section className="bg-surface-secondary py-24 md:py-32">
      <div className="container mx-auto max-w-[1456px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-primary rounded-2xl p-8 border border-border-subtle"
            >
              <p className="font-sans text-lg text-content-primary leading-relaxed">
                <span className="font-semibold">{feature.title}</span>{" "}
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
