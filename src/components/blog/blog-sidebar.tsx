import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { blogCategories, blogTags, getRecentBlogPosts } from "@/lib/blog-data"

export function BlogSidebar() {
  const recentPosts = getRecentBlogPosts(3)

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex w-full items-center space-x-2">
            <Input type="search" placeholder="Search articles..." className="flex-1" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {blogCategories.map((category) => (
              <li key={category.name} className="flex justify-between items-center">
                <Link
                  href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {category.name}
                </Link>
                <span className="text-sm text-gray-500 dark:text-gray-400">{category.count}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{post.date}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {blogTags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                <Badge variant="outline" className="hover:bg-primary/10 cursor-pointer">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
