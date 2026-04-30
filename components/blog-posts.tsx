const blogPosts = [
  {
    id: 1,
    category: "THOUGHT LEADERSHIP",
    title: "The Future of Investment Intelligence",
    excerpt:
      "How AI-powered platforms are transforming the way institutional investors make decisions and manage complex data across their portfolios.",
    date: "December 15, 2025",
    author: "Jonathan Lipton",
    image: "/investment-data-visualization.jpg",
  },
  {
    id: 2,
    category: "PRODUCT UPDATE",
    title: "Introducing Enhanced Deal Analysis",
    excerpt:
      "Our latest release brings powerful new capabilities for comparing managers, tracking changes, and generating comprehensive reports at scale.",
    date: "November 28, 2025",
    author: "Jan Oliver Koelble",
    image: "/data-analytics-dashboard.png",
  },
  {
    id: 3,
    category: "INDUSTRY INSIGHTS",
    title: "The Evolution of Due Diligence",
    excerpt:
      "Exploring how technology is reshaping the diligence process for allocators, from document analysis to portfolio monitoring.",
    date: "November 12, 2025",
    author: "Brian Solon",
    image: "/financial-documents.jpg",
  },
  {
    id: 4,
    category: "THOUGHT LEADERSHIP",
    title: "From Data Silos to Unified Intelligence",
    excerpt:
      "Breaking down the barriers between disparate systems and creating a single source of truth for investment teams.",
    date: "October 30, 2025",
    author: "Jonathan Lipton",
    image: "/connected-systems.jpg",
  },
  {
    id: 5,
    category: "COMPANY NEWS",
    title: "Clade Reaches 4,000 Active Users",
    excerpt:
      "Celebrating a milestone as more institutional investors and fund managers trust Clade for their most critical workflows.",
    date: "October 18, 2025",
    author: "Jan Oliver Koelble",
    image: "/team-celebration.png",
  },
]

export default function BlogPosts() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex gap-6 border-b border-border-subtle pb-12 last:border-0">
              <div className="flex-shrink-0">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-32 w-48 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 text-sm font-semibold tracking-wide text-primary">{post.category}</div>
                <h2 className="mb-3 text-balance font-sans text-2xl font-medium tracking-tight text-content-primary group-hover:text-primary md:text-3xl leading-[1.1]">
                  <a href="#" className="transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="mb-4 font-sans text-base leading-relaxed text-content-secondary">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-content-secondary">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
