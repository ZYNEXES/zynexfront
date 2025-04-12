import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-data"

import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts"
import { BlogComments } from "@/components/blog/blog-comments"
import { BlogAuthor } from "@/components/blog/blog-author"
import { BlogShareLinks } from "@/components/blog/blog-share-links"

// Define types
type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

// Generate static params
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Optional: You can define dynamic metadata here
export async function generateMetadata(props: {
  params: Params
  searchParams: SearchParams
}) {
  const { slug } = await props.params
  const searchParams = await props.searchParams

  // Example: add dynamic title based on query
  return {
    title: `Blog Post: ${slug}`,
    description: `Read our blog post about ${slug}.`,
    keywords: searchParams?.query ?? [],
  }
}

// Main blog post page
export default async function BlogPostPage(props: {
  params: Params
  searchParams: SearchParams
}) {
  const { slug } = await props.params
  const searchParams = await props.searchParams // Unused in this example but accessible
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <BlogPostHeader post={post} />
      <p hidden>{JSON.stringify(searchParams)}</p>
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
