import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQContent } from "@/components/faq-content"
import { CTA } from "@/components/cta"

export const metadata = {
  title: "FAQ | Clade",
  description: "Frequently asked questions about Clade - financial infrastructure for institutional judgment.",
}

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-base">
      <Header />
      <main className="flex-1">
        <FAQContent />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
