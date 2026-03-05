import Header from "@/components/header"
import Footer from "@/components/footer"
import { MarketplaceHero } from "@/components/marketplace-hero"
import { MarketplaceBehaviorChanged } from "@/components/marketplace-behavior-changed"
import { MarketplaceDiscoveryDiligence } from "@/components/marketplace-discovery-diligence"
import { MarketplaceNotDatabase } from "@/components/marketplace-not-database"
import { MarketplaceDiscovery } from "@/components/marketplace-discovery"
import { MarketplaceDiscoveryStatement } from "@/components/marketplace-discovery-statement"
import { MarketplaceGPsShowUp } from "@/components/marketplace-gps-show-up"
import { MarketplaceEvaluatedSection } from "@/components/marketplace-evaluated-section"
import { MarketplaceTestimonial } from "@/components/marketplace-testimonial"
import { MarketplaceRelationships } from "@/components/marketplace-relationships"
import { MarketplaceCTA } from "@/components/marketplace-cta"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-surface-base">
      <Header />
      <main>
        <MarketplaceHero />
        <MarketplaceBehaviorChanged />
        <MarketplaceDiscoveryDiligence />
        <MarketplaceNotDatabase />
        <MarketplaceDiscovery />
        <MarketplaceDiscoveryStatement />
        <MarketplaceGPsShowUp />
        <MarketplaceEvaluatedSection />
        <MarketplaceTestimonial />
        <MarketplaceRelationships />
        <MarketplaceCTA />
      </main>
      <Footer />
    </div>
  )
}
