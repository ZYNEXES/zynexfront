import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface BlogHeaderProps {
  title?: string
  description?: string
}

export function BlogHeader({
  title = "Shipping & Logistics Blog",
  description = "Industry insights, shipping tips, and logistics news to help optimize your supply chain",
}: BlogHeaderProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="flex w-full items-center space-x-2">
            <Input type="search" placeholder="Search articles..." className="flex-1" />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
