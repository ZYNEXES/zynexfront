import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts"
import { BlogComments } from "@/components/blog/blog-comments"
import { BlogAuthor } from "@/components/blog/blog-author"
import { BlogShareLinks } from "@/components/blog/blog-share-links"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Using the new pattern for handling params
type Params = Promise<{ slug: string }>

export default async function BlogPostPage({ params }: { params: Params }) {
  // Await and destructure the params
  const { slug } = await params

  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <BlogPostHeader post={post} />

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <article className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <BlogPostContent post={post} />
                <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800">
                  <BlogShareLinks post={post} />
                </div>
                <div className="px-6 py-6 border-t border-gray-100 dark:border-gray-800">
                  <BlogAuthor author={post.author} />
                </div>
              </article>

              <div className="mt-8">
                <BlogComments />
              </div>
            </div>
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      <BlogRelatedPosts currentPostId={post.id} />
    </main>
  )
}
