import { BlogHeader } from "@/components/blog/blog-header"
import { BlogList } from "@/components/blog/blog-list"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { getAllBlogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const allPosts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <BlogHeader />

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <BlogList posts={allPosts} showPagination={true} />
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
