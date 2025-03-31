import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HomeCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Ship with Confidence?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of satisfied customers who trust us with their shipping needs. Get started today and
            experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

