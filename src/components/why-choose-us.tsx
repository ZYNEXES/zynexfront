import Image from "next/image"
import { CheckCircle } from "lucide-react"

const reasons = [
  "Global network with coverage in over 200 countries",
  "Real-time tracking and shipment visibility",
  "Dedicated customer support available 24/7",
  "Customized shipping solutions for your business",
  "Competitive rates with no hidden fees",
  "Eco-friendly shipping options",
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/global-network.jpg"
              alt="Global Shipping Network"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Choose Our Shipping Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              With decades of experience in global logistics, we provide reliable, efficient, and secure shipping
              solutions that help your business thrive in today&#39;s competitive market.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

