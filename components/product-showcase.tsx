import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Cpu, Globe } from "lucide-react"

const products = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed and performance with cutting-edge optimization techniques.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC2 and HIPAA compliant with enterprise-grade security features.",
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Leverage advanced AI and machine learning to automate your workflow.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy anywhere with worldwide infrastructure and 99.9% uptime.",
  },
]

export function ProductShowcase() {
  return (
    <section className="border-b border-border py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            A comprehensive platform designed for teams of all sizes
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
