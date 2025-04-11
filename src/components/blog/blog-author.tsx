import Link from "next/link"
import { Twitter, Linkedin, Globe } from "lucide-react"
import type { BlogAuthor as BlogAuthorType } from "@/lib/blog-data"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function BlogAuthor({ author }: { author: BlogAuthorType }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-lg">{author.avatar}</AvatarFallback>
      </Avatar>
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-bold">{author.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{author.role}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{author.bio}</p>
        <div className="flex items-center justify-center sm:justify-start gap-3">
          <Link href="#" className="text-gray-500 hover:text-primary">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary">
            <Globe className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
