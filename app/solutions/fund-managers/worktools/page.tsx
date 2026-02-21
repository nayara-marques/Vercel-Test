import Header from "@/components/header"
import Footer from "@/components/footer"
import WorktoolsHero from "@/components/worktools-hero"
import WorktoolsOverview from "@/components/worktools-overview"
import WorktoolsFeatures from "@/components/worktools-features"
import WorktoolsBuiltFor from "@/components/worktools-built-for"
import WorktoolsJudgmentStatement from "@/components/worktools-judgment-statement"
import WorktoolsImpact from "@/components/worktools-impact"
import WorktoolsCTA from "@/components/worktools-cta"

export default function WorktoolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <WorktoolsHero />
        <WorktoolsOverview />
        <WorktoolsFeatures />
        <WorktoolsBuiltFor />
        <WorktoolsJudgmentStatement />
        <WorktoolsImpact />
        <WorktoolsCTA />
      </main>
      <Footer />
    </div>
  )
}
