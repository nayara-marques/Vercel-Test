import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const features = [
  "Advanced analytics and reporting",
  "Real-time collaboration tools",
  "API access and integrations",
  "Custom workflows and automation",
  "Enterprise-grade security",
  "Priority support and SLA",
  "99.9% uptime guarantee",
  "Scalable infrastructure",
]

export function Features() {
  return (
    <section className="border-b border-border-subtle py-20 md:py-32">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-content-primary md:text-4xl lg:text-5xl">
              All the features you need
            </h2>
            <p className="mt-4 text-pretty text-lg text-content-secondary leading-relaxed">
              Everything you need to build, deploy, and scale your applications with confidence.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-surface-brand">
                    <Check className="h-3 w-3 text-brand-primary" />
                  </div>
                  <span className="text-sm text-content-primary">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Enterprise Ready</CardTitle>
              <CardDescription>Built for organizations of all sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg?height=400&width=600" alt="Enterprise Infrastructure" className="rounded-lg" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
