"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export function ServiceDetails() {
  const [, setActiveTab] = useState("domestic")

  return (
    <section className="w-full py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Service Details</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
            Explore our shipping and storage options in detail to find the perfect solution for your needs.
          </p>
        </div>

        <Tabs defaultValue="domestic" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
              <TabsTrigger value="international">International Shipping</TabsTrigger>
              <TabsTrigger value="specialized">Specialized Services</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="domestic" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Domestic Shipping Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our domestic shipping services offer reliable and cost-effective delivery options throughout the
                      country. Whether you need same-day, next-day, or standard delivery, we have solutions to meet your
                      timeline and budget.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">Same-day delivery for urgent shipments</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">Next-day delivery to major cities</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">Standard 2-3 day delivery nationwide</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          Economy options for cost-sensitive shipments
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Domestic Shipping Rates</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Same-Day Delivery</span>
                        <span>From $25.99</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Next-Day Delivery</span>
                        <span>From $15.99</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Standard (2-3 days)</span>
                        <span>From $9.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Economy (4-7 days)</span>
                        <span>From $5.99</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      *Rates vary based on package weight, dimensions, and destination. Use our shipping calculator for
                      an accurate quote.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="international" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">International Shipping Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our international shipping services connect you to over 200 countries worldwide. We offer air
                      freight, ocean freight, and combined solutions to meet your global logistics needs with customs
                      clearance assistance.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          Express international air freight (1-3 days)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          Standard international air freight (3-6 days)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">Ocean freight (FCL and LCL options)</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          Customs clearance and documentation assistance
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">International Shipping Rates</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Express Air Freight</span>
                        <span>From $49.99</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Standard Air Freight</span>
                        <span>From $29.99</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Ocean Freight (FCL)</span>
                        <span>From $1,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Ocean Freight (LCL)</span>
                        <span>From $200</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      *International rates vary based on destination country, weight, dimensions, and service level.
                      Contact us for a custom quote.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specialized" className="mt-0">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Specialized Shipping Services</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our specialized shipping services cater to unique requirements such as temperature-controlled
                      shipments, hazardous materials, oversized cargo, and high-value items requiring extra security.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          Temperature-controlled shipping for sensitive items
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          Hazardous materials handling and compliance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">Oversized and heavy cargo logistics</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          High-security shipping for valuable items
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="text-xl font-semibold mb-4">Specialized Services</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Temperature-Controlled</span>
                        <span>Custom Quote</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Hazardous Materials</span>
                        <span>Custom Quote</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Oversized Cargo</span>
                        <span>Custom Quote</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">High-Value Security</span>
                        <span>Custom Quote</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      *Specialized shipping requires custom quotes based on specific requirements. Contact our
                      specialists for a detailed assessment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

