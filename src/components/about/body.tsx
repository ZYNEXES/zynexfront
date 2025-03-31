"use client"
import { Truck, Globe, Clock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description: "Get your packages delivered quickly and securely to any destination.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Ship anywhere in the world with our extensive logistics network.",
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Track your shipments live with our advanced tracking system.",
  },
  {
    icon: Shield,
    title: "Secure & Insured",
    description: "Your shipments are protected with top-notch security and insurance options.",
  },
]

export function AboutUs() {
  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Our Shipping Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We deliver more than packages. We deliver reliability, speed, and peace of mind.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="w-full h-full border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <Icon className="h-10 w-10 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
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

