const features = [
  {
    title: "No training on your data.",
    description:
      "Your documents, conversations, and outputs are never used to train Clade's models — or any third party's.",
  },
  {
    title: "Isolated by tenant.",
    description:
      "Customer data is logically isolated at every layer. Nothing crosses the boundary between tenants.",
  },
  {
    title: "Full audit visibility.",
    description:
      "Every query, document access, and output is logged. Export complete audit trails on demand.",
  },
  {
    title: "Zero-trust access.",
    description:
      "Role-based permissions, least privilege by default, and MFA enforced across the platform.",
  },
  {
    title: "Encrypted in transit and at rest.",
    description:
      "TLS 1.3 across all network traffic. AES-256 at rest. Keys rotated on industry-standard cadence.",
  },
  {
    title: "Independently audited.",
    description:
      "SOC 2 Type II certified. Annual third-party penetration testing. Continuous vulnerability scanning.",
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
