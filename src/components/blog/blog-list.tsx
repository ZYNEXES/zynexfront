"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { getAllBlogPosts, type BlogPost } from "@/lib/blog-data"
import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface BlogListProps {
  posts?: BlogPost[]
  showPagination?: boolean
}

export function BlogList({ posts, showPagination = false }: BlogListProps) {
  const allPosts = posts || getAllBlogPosts()
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(allPosts.length / postsPerPage)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to top of blog list
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="space-y-8">
      {currentPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow">
          <div className="md:flex">
            <div className="md:w-1/3 relative h-60 md:h-auto">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <CardContent className="p-6 md:w-2/3">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              </Link>

              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>

              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-3">
                  <AvatarFallback>{post.author.avatar}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-center mt-8">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50"
              aria-label="Previous page"
            >
              &laquo;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-10 h-10 rounded-md ${
                  currentPage === number ? "bg-primary text-white" : "border border-gray-300 dark:border-gray-600"
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 dark:border-gray-600 disabled:opacity-50"
              aria-label="Next page"
            >
              &raquo;
            </button>
          </nav>
        </div>
      )}
    </div>
  )
}
