import { Header } from "@/components/header"
import { ProductHero } from "@/components/product-hero"
import { ProductOneSystem } from "@/components/product-one-system"
import { ProductDataSources } from "@/components/product-data-sources"
import { ProductStructuredInsight } from "@/components/product-structured-insight"
import { ProductFeatures } from "@/components/product-features"
import { ProductIntelligenceCompounds } from "@/components/product-intelligence-compounds"
import { ProductCTA } from "@/components/product-cta"
import { Footer } from "@/components/footer"

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductHero />
        <ProductOneSystem />
        <ProductDataSources />
        <ProductStructuredInsight />
        <ProductFeatures />
        <ProductIntelligenceCompounds />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  )
}
