import { BlogHeader } from "@/components/blog/blog-header"
import { BlogList } from "@/components/blog/blog-list"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { getBlogPostsByCategory, blogCategories } from "@/lib/blog-data"
import { notFound } from "next/navigation"

// Generate static params for all categories
export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: category.name.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Convert slug format back to category name
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
