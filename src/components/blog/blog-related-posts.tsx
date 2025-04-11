import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { getRelatedBlogPosts } from "@/lib/blog-data"

export function BlogRelatedPosts({ currentPostId }: { currentPostId: number }) {
  // Get related posts based on the current post
  const relatedPosts = getRelatedBlogPosts(currentPostId, 3)

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-5">
                <Link href={`/blog/${post.slug}`} className="group">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
