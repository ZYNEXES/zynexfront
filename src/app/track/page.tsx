"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { TrackingHero } from "@/components/tracking-hero"
import { TrackingFAQ } from "@/components/tracking-faq"
import { TrackingServices } from "@/components/tracking-services"
import { TrackingDetail } from "@/components/tracking-detail"
import { addToTrackingHistory } from "@/lib/tracking-history"

export default function TrackingPage() {
  const searchParams = useSearchParams()
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null)

  // Get tracking number from URL on initial load
  useEffect(() => {
    const number = searchParams.get("number")
    if (number) {
      setTrackingNumber(number)
      // Save to tracking history when accessed via URL
      addToTrackingHistory(number)
    }
  }, [searchParams])

  // Function to handle tracking number submission from the hero component
  const handleTrackingSubmit = (number: string) => {
    setTrackingNumber(number)
    // Save to tracking history when submitted
    addToTrackingHistory(number)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <TrackingHero onTrackingSubmit={handleTrackingSubmit} initialTrackingNumber={trackingNumber} />

      {trackingNumber && (
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <TrackingDetail trackingNumber={trackingNumber} />
        </div>
      )}

      <TrackingServices />
      <TrackingFAQ />
    </main>
  )
}
