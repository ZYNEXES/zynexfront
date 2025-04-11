import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog-data"
import ReactMarkdown from "react-markdown"

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="prose dark:prose-invert max-w-none p-6 md:p-8">
      <ReactMarkdown>{post.content}</ReactMarkdown>

      <div className="flex flex-wrap gap-2 mt-8">
        {post.tags.map((tag: string) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}
