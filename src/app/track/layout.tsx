import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Track Your Shipment | GlobalShip",
  description:
    "Track your package in real-time with our advanced tracking system. Get detailed information about your shipment's journey.",
}

export default function TrackingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

