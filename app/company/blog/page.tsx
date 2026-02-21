import Header from "@/components/header"
import BlogHero from "@/components/blog-hero"
import BlogPosts from "@/components/blog-posts"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BlogHero />
      <BlogPosts />
      <CTA />
      <Footer />
    </div>
  )
}
