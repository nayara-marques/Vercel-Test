export function TrustedBy() {
  const clients = ["Client Logo", "Client Logo", "Client Logo", "Client Logo", "Client Logo"]

  return (
    <section className="border-b border-border-subtle py-12 md:py-16 bg-surface-base">
      <div className="max-w-[1456px] mx-auto px-5 sm:px-10 2xl:px-0">
        <p className="font-sans text-sm font-medium text-content-primary mb-8">
          Used by the pros. Select clients include:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="font-sans text-sm font-medium text-content-tertiary">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
