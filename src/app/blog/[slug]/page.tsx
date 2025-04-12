import { notFound } from "next/navigation"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogList } from "@/components/blog/blog-list"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { getBlogPostsByCategory } from "@/lib/blog-data"

// Remove Promise type and use direct object type
export default function CategoryPage({ 
  params 
}: { 
  params: { category: string } 
}) {
  const categoryName = params.category.replace(/-/g, " ")
  const posts = getBlogPostsByCategory(categoryName)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <BlogHeader
        title={`${categoryName} Articles`}
        description={`Browse our latest articles about ${categoryName.toLowerCase()}`}
      />
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