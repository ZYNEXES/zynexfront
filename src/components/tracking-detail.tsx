"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Package, Truck, Calendar, Clock, Info } from "lucide-react"

interface ShipmentEvent {
  date: string
  time: string
  location: string
  status: string
  description: string
}

interface ShipmentDetails {
  trackingNumber: string
  status: string
  estimatedDelivery: string
  service: string
  weight: string
  dimensions: string
  origin: string
  destination: string
  events: ShipmentEvent[]
}

// This would normally come from an API
const mockShipmentDetails: ShipmentDetails = {
  trackingNumber: "ABC123456789",
  status: "In Transit",
  estimatedDelivery: "June 15, 2023",
  service: "Express Shipping",
  weight: "5.2 kg",
  dimensions: "30 × 20 × 15 cm",
  origin: "New York, USA",
  destination: "London, UK",
  events: [
    {
      date: "June 10, 2023",
      time: "08:30 AM",
      location: "London Heathrow Airport, UK",
      status: "Arrived at Destination",
      description: "Package has arrived at destination airport and is awaiting customs clearance.",
    },
    {
      date: "June 9, 2023",
      time: "10:15 PM",
      location: "Frankfurt Airport, Germany",
      status: "In Transit",
      description: "Package is in transit to the next facility.",
    },
    {
      date: "June 8, 2023",
      time: "02:45 PM",
      location: "JFK International Airport, USA",
      status: "Departed",
      description: "Package has departed from origin airport.",
    },
    {
      date: "June 7, 2023",
      time: "11:20 AM",
      location: "New York Sorting Facility, USA",
      status: "Processed",
      description: "Package has been processed and is ready for departure.",
    },
    {
      date: "June 6, 2023",
      time: "09:45 AM",
      location: "New York, USA",
      status: "Picked Up",
      description: "Package has been picked up by carrier.",
    },
  ],
}

export function TrackingDetail() {
  const [shipment] = useState<ShipmentDetails>(mockShipmentDetails)

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

  return (
    <div className="space-y-8">
      {/* Shipment Summary */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <CardTitle>Shipment #{shipment.trackingNumber}</CardTitle>
            <Badge className={getStatusColor(shipment.status)}>{shipment.status}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Delivery</p>
                <p className="font-medium">{shipment.estimatedDelivery}</p>
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
                {shipment.events.map((event, index) => (
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
                ))}
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
                      <p className="font-medium">{shipment.trackingNumber}</p>
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
                      <p className="text-sm text-gray-500 dark:text-gray-400">Origin</p>
                      <p className="font-medium">{shipment.origin}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Destination</p>
                      <p className="font-medium">{shipment.destination}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Delivery</p>
                      <p className="font-medium">{shipment.estimatedDelivery}</p>
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
                      <a href="mailto:support@zynex.com" className="text-primary ml-1">
                        support@zynex.com
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

