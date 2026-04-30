export default function CommunitiesPartners() {
  return (
    <section className="bg-surface-elevated py-12 md:py-16">
      <div className="mx-auto max-w-[1456px] px-6 md:px-12">
        <p className="text-content-tertiary text-sm md:text-base mb-8">
          Home to industry-leading communities, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Institutional Investor", "Allocator Collective", "100 Women in Finance", "AAAIM"].map((partner) => (
            <div key={partner} className="text-content-primary font-medium">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
