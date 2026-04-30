import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const useCases = [
  {
    title: "Financial Services",
    description: "Process complex financial documents, statements, and reports with precision.",
    image: "/financial-charts-and-analytics.jpg",
  },
  {
    title: "Healthcare",
    description: "Streamline patient records, medical forms, and healthcare documentation.",
    image: "/healthcare-medical-interface.jpg",
  },
  {
    title: "Legal",
    description: "Analyze contracts, legal documents, and case files efficiently.",
    image: "/legal-documents-and-contracts.jpg",
  },
]

export function UseCases() {
  return (
    <section className="border-b border-border py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Built for your industry
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Trusted across industries where accuracy and reliability matter most
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <CardContent className="flex flex-col justify-center p-8 md:p-12">
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                  <p className="mt-4 text-pretty text-muted-foreground">{useCase.description}</p>
                  <Button variant="link" className="mt-6 w-fit p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
                <div className="relative h-64 md:h-auto">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
