import Header from "@/components/header"
import Footer from "@/components/footer"
import AllocatorsHero from "@/components/allocators-hero"
import AllocatorsUseCases from "@/components/allocators-use-cases"
import AllocatorsWorkflows from "@/components/allocators-workflows"
import AllocatorsWhyChoose from "@/components/allocators-why-choose"
import AllocatorsImpact from "@/components/allocators-impact"
import AllocatorsCTA from "@/components/allocators-cta"

export default function AllocatorsPage() {
  return (
    <>
      <Header />
      <main>
        <AllocatorsHero />
        <AllocatorsUseCases />
        <AllocatorsWorkflows />
        <AllocatorsWhyChoose />
        <AllocatorsImpact />
        <AllocatorsCTA />
      </main>
      <Footer />
    </>
  )
}
