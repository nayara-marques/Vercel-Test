export default function WorktoolsOverview() {
  return (
    <section className="border-b border-border-subtle bg-background">
      <div className="mx-auto max-w-[1456px] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-sans text-3xl font-medium leading-tight tracking-tight text-content-primary md:text-4xl">
            Clade replaces fragmented deal work with a continuous investment intelligence system.
          </h2>
          <div className="mt-12 space-y-4">
            <p className="text-lg text-content-secondary">Fund managers use Clade to:</p>
            <ul className="space-y-3 text-lg text-content-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-content-secondary" />
                <span>Understand companies and deals across every diligence artifact, not isolated files</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-content-secondary" />
                <span>Surface risks, assumptions, and inconsistencies before capital is committed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-content-secondary" />
                <span>Generate IC memos, deal updates, and investment narratives grounded in source evidence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-content-secondary" />
                <span>Preserve deal knowledge across teams, time, and turnover</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
