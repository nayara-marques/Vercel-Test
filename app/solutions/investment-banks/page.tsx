import Header from "@/components/header"
import Footer from "@/components/footer"
import { InvestmentBanksHero } from "@/components/investment-banks-hero"
import { InvestmentBanksOverview } from "@/components/investment-banks-overview"
import { InvestmentBanksFeatures } from "@/components/investment-banks-features"
import { InvestmentBanksBuiltFor } from "@/components/investment-banks-built-for"
import { InvestmentBanksStatements } from "@/components/investment-banks-statements"
import { InvestmentBanksImpact } from "@/components/investment-banks-impact"
import { InvestmentBanksLeverage } from "@/components/investment-banks-leverage"
import { InvestmentBanksCta } from "@/components/investment-banks-cta"

export default function InvestmentBanksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <InvestmentBanksHero />
        <InvestmentBanksOverview />
        <InvestmentBanksFeatures />
        <InvestmentBanksBuiltFor />
        <InvestmentBanksStatements />
        <InvestmentBanksImpact />
        <InvestmentBanksLeverage />
        <InvestmentBanksCta />
      </main>
      <Footer />
    </div>
  )
}
