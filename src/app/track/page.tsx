import { TrackingHero } from "@/components/tracking-hero"
import { TrackingFAQ } from "@/components/tracking-faq"
import { TrackingServices } from "@/components/tracking-services"

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <TrackingHero />
      <TrackingServices />
      <TrackingFAQ />
    </main>
  )
}

