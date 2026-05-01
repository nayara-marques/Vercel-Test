import SecurityHero from "@/components/security-hero"
import SecurityFeatures from "@/components/security-features"
import SecurityCompliance from "@/components/security-compliance"
import SecurityPhilosophy from "@/components/security-philosophy"
import SecurityCTA from "@/components/security-cta"

export const metadata = {
  title: "Security | Clade",
  description: "Enterprise-grade security for institutional investment data. Learn how Clade protects your most sensitive information.",
}

export default function SecurityPage() {
  return (
    <main>
      <SecurityHero />
      <SecurityFeatures />
      <SecurityCompliance />
      <SecurityPhilosophy />
      <SecurityCTA />
    </main>
  )
}
