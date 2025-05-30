"use client"

import { Card, CardContent } from "@/components/ui/card"
import { InputComponent } from "@/components/scomp/input"
import { useState, useEffect } from "react"

interface TrackingHeroProps {
  onTrackingSubmit?: (trackingNumber: string) => void
  initialTrackingNumber?: string | null
}

export function TrackingHero({ onTrackingSubmit, initialTrackingNumber }: TrackingHeroProps) {
  const [trackingNumber, setTrackingNumber] = useState("")

  // Set initial tracking number if provided
  useEffect(() => {
    if (initialTrackingNumber) {
      setTrackingNumber(initialTrackingNumber)
    }
  }, [initialTrackingNumber])

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Track Your Shipment</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Enter your tracking number to get real-time updates on your package location and delivery status
          </p>
        </div>
        <button onAuxClick={() => onTrackingSubmit?.(trackingNumber) } hidden>{trackingNumber}</button>
        <div className="max-w-3xl mx-auto">
          <Card className="border shadow-sm bg-white dark:bg-gray-800">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Shipment Tracking</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Enter your tracking number below to check the current status of your shipment.
                </p>
                <InputComponent />
                <div className="pt-4 text-sm text-gray-500 dark:text-gray-400">
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
