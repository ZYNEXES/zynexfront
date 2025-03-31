"use client"

import { Plane, Ship, Truck, Package, Clock, Warehouse } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const services = [
  {
    icon: Plane,
    title: "Express Air Freight",
    description: "Fast delivery for time-sensitive shipments with guaranteed delivery times.",
    features: ["Next-day delivery options", "Real-time tracking", "Priority handling"],
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective shipping solution for large volumes and international trade.",
    features: ["FCL & LCL options", "Customs clearance", "Port-to-port service"],
  },
  {
    icon: Truck,
    title: "Ground Transportation",
    description: "Reliable road freight services for domestic and cross-border shipments.",
    features: ["FTL & LTL options", "Nationwide coverage", "Scheduled deliveries"],
  },
  {
    icon: Package,
    title: "Specialized Shipping",
    description: "Custom solutions for oversized, fragile, or high-value items requiring special care.",
    features: ["Custom packaging", "White glove service", "Insurance options"],
  },
  {
    icon: Clock,
    title: "Time-Critical Logistics",
    description: "Ultra-fast shipping options for emergency and time-sensitive deliveries.",
    features: ["Same-day delivery", "24/7 service", "Direct courier options"],
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description: "Complete storage and distribution services to optimize your supply chain.",
    features: ["Inventory management", "Order fulfillment", "Distribution services"],
  },
]

export function ServicesList() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Shipping Solutions</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
            Choose from our wide range of shipping services tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`h-full border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800 ${
                  activeService === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Icon className="h-6 w-6 mr-2 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary mt-0.5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

