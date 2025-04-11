"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Package, Truck, Calendar, Clock, Info, Loader2 } from "lucide-react"
import { fetchShipmentWithDelay, type ShipmentDetails } from "@/lib/shipment-data"

export function TrackingDetail({ trackingNumber }: { trackingNumber: string }) {
  const [shipment, setShipment] = useState<ShipmentDetails | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchShipmentDetails = async () => {
      try {
        setLoading(true)
        const data = await fetchShipmentWithDelay(trackingNumber)

        if (data) {
          setShipment(data)
          setError(null)
        } else {
          setError("Shipment not found")
        }
      } catch (error) {
        setError("Failed to load shipment details")
        console.error("Error fetching shipment details:", error)
      } finally {
        setLoading(false)
      }
    }

    if (trackingNumber) {
      fetchShipmentDetails()
    }
  }, [trackingNumber])

  // Status color mapping
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "In Transit":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Exception":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading shipment details...</span>
      </div>
    )
  }

  if (error || !shipment) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <div className="text-red-500 dark:text-red-400 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Shipment Not Found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We couldn&apos;t find any information for the tracking number: {trackingNumber}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {/* Shipment Summary */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <CardTitle>Shipment #{shipment.tracking_number}</CardTitle>
            <Badge className={getStatusColor(shipment.status)}>{shipment.status}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Delivery</p>
                <p className="font-medium">{shipment.estimated_delivery}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Package className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Service</p>
                <p className="font-medium">{shipment.service}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Truck className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Origin</p>
                <p className="font-medium">{shipment.origin}</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Destination</p>
                <p className="font-medium">{shipment.destination}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipment Details Tabs */}
      <Tabs defaultValue="timeline">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="timeline">Shipment Timeline</TabsTrigger>
          <TabsTrigger value="details">Shipment Details</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {shipment.events && shipment.events.length > 0 ? (
                  shipment.events.map((event, index) => (
                    <div key={index} className="relative pl-8 pb-6">
                      {/* Timeline connector */}
                      {index < shipment.events.length - 1 && (
                        <div className="absolute left-[9px] top-[24px] bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
                      )}

                      {/* Status dot */}
                      <div
                        className={`absolute left-0 top-1 h-[18px] w-[18px] rounded-full border-2 border-white dark:border-gray-900 ${
                          index === 0 ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />

                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <h3 className="font-medium">{event.status}</h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.date}
                            <Clock className="h-4 w-4 ml-3 mr-1" />
                            {event.time}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-1">{event.location}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{event.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">No timeline events available for this shipment.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Shipment Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Tracking Number</p>
                      <p className="font-medium">{shipment.tracking_number}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Service Type</p>
                      <p className="font-medium">{shipment.service}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Weight</p>
                      <p className="font-medium">{shipment.weight}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Dimensions</p>
                      <p className="font-medium">{shipment.dimensions}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Shipping Route</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Sender</p>
                      <p className="font-medium">{shipment.sender_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Receiver</p>
                      <p className="font-medium">{shipment.receiver_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Origin</p>
                      <p className="font-medium">{shipment.origin}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Destination</p>
                      <p className="font-medium">{shipment.destination}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Delivery</p>
                      <p className="font-medium">{shipment.estimated_delivery}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Current Status</p>
                      <Badge className={getStatusColor(shipment.status)}>{shipment.status}</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-2 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Need Assistance?</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      If you have questions about this shipment, please contact our customer service at
                      <a href="tel:+1-800-123-4567" className="text-primary ml-1">
                        1-800-123-4567
                      </a>{" "}
                      or
                      <a href="mailto:support@ZYNEX.com" className="text-primary ml-1">
                        support@ZYNEX.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
