import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function BlogPostHeader({ post }: { post: BlogPost }) {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90 dark:from-gray-900/90 dark:to-gray-900/100" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center text-sm text-gray-300">
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="h-3 w-3 mr-1" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex items-center justify-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarFallback>{post.author.avatar}</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-medium text-white">{post.author.name}</p>
              <p className="text-sm text-gray-300">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
