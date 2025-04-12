import { Facebook, Twitter, Linkedin, Mail, Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog-data"

export function BlogShareLinks({ post }: { post: BlogPost }) {
  // Using post.title to make use of the post parameter
  const shareTitle = encodeURIComponent(post.title)

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Share this article:</span>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          aria-label={`Share ${post.title} on Facebook`}
        >
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          aria-label={`Share ${post.title} on Twitter`}
        >
          <p hidden>{shareTitle}</p>
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          aria-label={`Share ${post.title} on LinkedIn`}
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          aria-label={`Share ${post.title} via Email`}
        >
          <Mail className="h-4 w-4" />
          <span className="sr-only">Share via Email</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" aria-label={`Copy link to ${post.title}`}>
          <Link className="h-4 w-4" />
          <span className="sr-only">Copy Link</span>
        </Button>
      </div>
    </div>
  )
}
