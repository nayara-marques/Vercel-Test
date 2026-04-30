import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutVision } from "@/components/about-vision"
import { AboutPlatform } from "@/components/about-platform"
import { AboutMission } from "@/components/about-mission"
import { AboutTeam } from "@/components/about-team"
import { AboutLeadership } from "@/components/about-leadership"
import { AboutJoinUs } from "@/components/about-join-us"
import { CTA } from "@/components/cta"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen">
        <AboutHero />
        <AboutVision />
        <AboutPlatform />
        <AboutMission />
        <AboutTeam />
        <AboutLeadership />
        <AboutJoinUs />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
