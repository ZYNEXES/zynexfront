"use client"

import { useState, useRef, type FormEvent, type JSX } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Loader2, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { fetchShipmentWithDelay, type ShipmentDetails } from "@/lib/shipment-data"
import { addToTrackingHistory } from "@/lib/tracking-history"
import { TrackingHistory } from "@/components/tracking-history"
interface TrackingHeroProps {
  onTrackingSubmit?: (trackingNumber: string) => void
  initialTrackingNumber?: string | null
}
export function InputComponent(): JSX.Element {
  const [trackingNumber, setTrackingNumber] = useState<string>("")
  const [shipmentInfo, setShipmentInfo] = useState<ShipmentDetails | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleTrackShipment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!trackingNumber) return

    setLoading(true)
    setShipmentInfo(null)
    setError(null)

    try {
      // Use our simulated API call with delay
      const shipment = await fetchShipmentWithDelay(trackingNumber)

      if (shipment) {
        setShipmentInfo(shipment)
        // Save to tracking history when successful
        addToTrackingHistory(trackingNumber)
      } else {
        setError("Shipment not found")
      }
    } catch {
      setError("Error tracking shipment")
    } finally {
      setLoading(false)
    }
  }

  const handleSelectTracking = (selectedNumber: string) => {
    setTrackingNumber(selectedNumber)
    // Focus the input after selection
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full"
    >
      {/* Form */}
      <div className="relative">
        <form ref={formRef} className="flex w-full items-center gap-2" onSubmit={handleTrackShipment}>
          <Input
            ref={inputRef}
            type="text"
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              // Small delay to allow clicking on history items
              setTimeout(() => setIsFocused(false), 200)
            }}
            disabled={loading}
            className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus-visible:ring-white"
          />
          <Button type="submit" disabled={loading} className="shrink-0">
            {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Search className="h-4 w-4 mr-2" />}
            Track
          </Button>
        </form>

        {/* Tracking History Dropdown (positioned below input) */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 mt-1 z-50"
              style={{ width: inputRef.current ? inputRef.current.offsetWidth : "100%" }}
            >
              <TrackingHistory onSelectTracking={handleSelectTracking} insertMode={true} dropdownMode={true} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card className="mt-4 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="pt-4">
              <Skeleton className="h-6 w-1/2 mb-2 bg-white/20" />
              <Skeleton className="h-4 w-full mb-1 bg-white/20" />
              <Skeleton className="h-4 w-2/3 mb-1 bg-white/20" />
              <Skeleton className="h-4 w-1/2 mb-1 bg-white/20" />
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Shipment Info Preview */}
      {shipmentInfo && !loading && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="mt-4 bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Shipment Found</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold text-gray-200">Tracking Number:</span> {shipmentInfo.tracking_number}
                </p>
                <p>
                  <span className="font-semibold text-gray-200">Status:</span>
                  <span
                    className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                      shipmentInfo.status === "Delivered"
                        ? "bg-green-500/20 text-green-300"
                        : shipmentInfo.status === "In Transit"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {shipmentInfo.status}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-gray-200">Current Location:</span>{" "}
                  {shipmentInfo.current_location_one || shipmentInfo.events[0]?.location || "Information not available"}
                </p>
                <div className="pt-3">
                  <Link
                    href={`/track?number=${shipmentInfo.tracking_number}`}
                    className="flex items-center text-primary-foreground hover:underline"
                  >
                    View detailed tracking information
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md"
        >
          <p className="text-red-300 font-medium text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        </motion.div>
      )}
    </motion.div>
  )
}
