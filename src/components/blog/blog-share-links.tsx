import { Facebook, Twitter, Linkedin, Mail, Link } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogShareLinks({ post }: { post: any }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Share this article:</span>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Share via Email</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <Link className="h-4 w-4" />
          <span className="sr-only">Copy Link</span>
        </Button>
      </div>
    </div>
  )
}
