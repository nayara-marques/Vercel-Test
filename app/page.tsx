import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { DataFlowAnimation } from "@/components/data-flow-animation"
import { CapitalJudgementSection } from "@/components/capital-judgement-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { FocusSection } from "@/components/focus-section"
import { ClaritySection } from "@/components/clarity-section"
import { KnowledgeSystemSection } from "@/components/knowledge-system-section"
import { SignalNoiseSection } from "@/components/signal-noise-section"
import { ThreeFeatures } from "@/components/three-features"
import { InstitutionalWorkflows } from "@/components/institutional-workflows"
import { TrustedEcosystems } from "@/components/trusted-ecosystems"
import { IntelligenceCompounds } from "@/components/intelligence-compounds"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DataFlowAnimation />
        <CapitalJudgementSection />
        <InfrastructureSection />
        <FocusSection />
        <ClaritySection />
        <KnowledgeSystemSection />
        <SignalNoiseSection />
        <ThreeFeatures />
        <InstitutionalWorkflows />
        <TrustedEcosystems />
        <IntelligenceCompounds />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
