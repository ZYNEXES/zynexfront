import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const articles = [
  {
    title: "New Eco-Friendly Shipping Options Now Available",
    excerpt: "We're proud to announce our new carbon-neutral shipping options to help reduce environmental impact.",
    date: "June 15, 2023",
    image: "/blog/carbon.jpeg?height=200&width=400&text=Eco-Shipping",
    slug: "/blog/eco-friendly-shipping",
  },
  {
    title: "Expanding Our Global Network to South America",
    excerpt: "Our shipping network now covers all major South American ports with faster delivery times.",
    date: "May 22, 2023",
    image: "/blog/south.jpg?height=200&width=400&text=Global-Network",
    slug: "/blog/south-america-expansion",
  },
  {
    title: "How to Optimize Your Supply Chain with Our Services",
    excerpt: "Learn how our integrated shipping solutions can streamline your logistics operations.",
    date: "April 10, 2023",
    image: "/blog/sustainable.jpeg?height=200&width=400&text=Supply-Chain",
    slug: "/blog/supply-chain-optimization",
  },
]

export function LatestNews() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Latest News & Updates</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stay informed about our services and industry insights
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden border shadow-sm bg-white dark:bg-gray-800">
              <div className="relative h-48 w-full">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</p>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                <Link href={article.slug} className="text-primary font-medium inline-flex items-center">
                  Read more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

