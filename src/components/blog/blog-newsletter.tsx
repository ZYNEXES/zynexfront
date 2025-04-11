import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BlogNewsletter() {
  return (
    <section className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Get the latest shipping insights, industry news, and logistics tips delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" required />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
