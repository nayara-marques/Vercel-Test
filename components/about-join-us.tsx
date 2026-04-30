import Link from "next/link"

export function AboutJoinUs() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-[1456px] mx-auto px-6 md:px-12">
        <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-content-primary mb-12 text-balance leading-[1.15]">
          Join Us
        </h2>

        {/* Card with neutral grey background */}
        <div className="relative rounded-2xl bg-surface-elevated p-10 md:p-14 lg:p-16">
          <p className="font-sans text-xl md:text-2xl lg:text-3xl font-medium text-content-primary leading-snug max-w-4xl text-balance">
            We're always on the lookout for great athletes who have a passion for creativity, a dedication to hard work,
            and a desire to drive systematic change.
          </p>

          <p className="mt-8 text-base md:text-lg text-content-secondary">
            If that's you, we'd love to have you{" "}
            <Link
              href="/careers"
              className="text-content-primary underline underline-offset-4 font-medium hover:text-brand-primary transition-colors"
            >
              apply HERE!
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
