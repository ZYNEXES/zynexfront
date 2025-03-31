import { Truck, Ship, Plane, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Truck,
    title: "Ground Shipping",
    description:
      "Reliable road freight services for domestic and cross-border shipments with flexible delivery options.",
    link: "/services#ground",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description:
      "Cost-effective shipping solutions for large volumes and international trade with global port coverage.",
    link: "/services#ocean",
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Express delivery for time-sensitive shipments with guaranteed delivery times and real-time tracking.",
    link: "/services#air",
  },
  {
    icon: Package,
    title: "Specialized Shipping",
    description: "Custom solutions for oversized, fragile, or high-value items requiring special handling and care.",
    link: "/services#specialized",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Shipping Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your specific shipping needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="flex flex-col bg-gray-50 dark:bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{service.description}</p>
                <Link href={service.link} className="text-primary font-medium inline-flex items-center">
                  Learn more
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
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

