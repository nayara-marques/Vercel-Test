import Header from "@/components/header"
import Footer from "@/components/footer"
import CommunitiesHero from "@/components/communities-hero"
import CommunitiesPartners from "@/components/communities-partners"
import CommunitiesConnectiveTissue from "@/components/communities-connective-tissue"
import CommunitiesTrustedNetworks from "@/components/communities-trusted-networks"
import CommunitiesContinuousEngagement from "@/components/communities-continuous-engagement"
import CommunitiesAIIntelligence from "@/components/communities-ai-intelligence"
import CommunitiesAIStatement from "@/components/communities-ai-statement"
import CommunitiesScale from "@/components/communities-scale"
import CommunitiesCTA from "@/components/communities-cta"

export default function CommunitiesPage() {
  return (
    <>
      <Header />
      <main>
        <CommunitiesHero />
        <CommunitiesPartners />
        <CommunitiesConnectiveTissue />
        <CommunitiesTrustedNetworks />
        <CommunitiesContinuousEngagement />
        <CommunitiesAIIntelligence />
        <CommunitiesAIStatement />
        <CommunitiesScale />
        <CommunitiesCTA />
      </main>
      <Footer />
    </>
  )
}
