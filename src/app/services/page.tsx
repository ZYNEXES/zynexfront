import { ServiceHero } from "@/components/service-hero"
import { ServicesList } from "@/components/services-list"
import { ServiceDetails } from "@/components/service-details"
import { ServiceComparison } from "@/components/service-comparison"
import { ServiceTestimonials } from "@/components/service-testimonials"
import { ServiceCTA } from "@/components/service-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <ServiceHero />
      <ServicesList />
      <ServiceDetails />
      <ServiceComparison />
      <ServiceTestimonials />
      <ServiceCTA />
    </main>
  )
}

