import { Linkedin } from "lucide-react"
import Link from "next/link"

const leaders = [
  {
    name: "Jonathan Lipton",
    title: "CEO & Co-founder",
    linkedin: "#",
  },
  {
    name: "Jan Oliver Koelble",
    title: "COO, Product and Co-founder",
    linkedin: "#",
  },
  {
    name: "Brian Solon",
    title: "CTO and Founding Engineer",
    linkedin: "#",
  },
]

export function AboutLeadership() {
  return (
    <section className="py-24 md:py-32 bg-surface-elevated">
      <div className="max-w-[1456px] mx-auto px-6 md:px-12">
        <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-content-primary mb-16 text-balance leading-[1.15]">
          Leadership
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((leader) => (
            <div key={leader.name} className="flex flex-col">
              {/* Placeholder image */}
              <div className="aspect-[4/5] bg-muted rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-content-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              {/* Name and title */}
              <h3 className="text-xl font-medium text-content-primary mb-1">{leader.name}</h3>
              <p className="text-content-secondary mb-4">{leader.title}</p>

              {/* LinkedIn icon */}
              <Link
                href={leader.linkedin}
                className="text-content-secondary hover:text-content-primary transition-colors"
                aria-label={`${leader.name} on LinkedIn`}
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutLeadership
