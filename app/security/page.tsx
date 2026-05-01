import SecurityHero from "@/components/security-hero"
import SecurityFeatures from "@/components/security-features"

export const metadata = {
  title: "Security | Clade",
  description: "Enterprise-grade security for institutional investment data. Learn how Clade protects your most sensitive information.",
}

export default function SecurityPage() {
  return (
    <main>
      <SecurityHero />
      <SecurityFeatures />
    </main>
  )
}
