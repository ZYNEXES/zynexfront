import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServiceCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Ship with Us?</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get started today and experience the difference of our reliable shipping services.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
            <Link href="/quote">
              <Button size="lg">Get a Quote</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

