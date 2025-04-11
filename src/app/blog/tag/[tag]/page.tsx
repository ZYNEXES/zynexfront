import { BlogHeader } from "@/components/blog/blog-header"
import { BlogList } from "@/components/blog/blog-list"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { getBlogPostsByTag, blogTags } from "@/lib/blog-data"
import { notFound } from "next/navigation"

// Generate static params for all tags
export async function generateStaticParams() {
  return blogTags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  // Convert slug format back to tag name
  const tagName = params.tag.replace(/-/g, " ")
  const posts = getBlogPostsByTag(tagName)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <BlogHeader title={`Articles tagged "${tagName}"`} description={`Browse our latest articles about ${tagName}`} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <BlogList posts={posts} showPagination={true} />
            </div>
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <BlogNewsletter />
    </main>
  )
}
