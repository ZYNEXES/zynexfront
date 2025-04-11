"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, Plane, Ship, Train } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

// Data for shipping success rates
const shippingData = {
  road: [
    { name: "Successful", value: 100, color: "hsl(var(--chart-1))" },
    { name: "Issues", value: 0, color: "hsl(var(--chart-2))" },
  ],
  air: [
    { name: "Successful", value: 99.99, color: "hsl(var(--chart-1))" },
    { name: "Issues", value: 0.01, color: "hsl(var(--chart-2))" },
  ],
  sea: [
    { name: "Successful", value: 99.98, color: "hsl(var(--chart-1))" },
    { name: "Issues", value: 0.02, color: "hsl(var(--chart-2))" },
  ],
  rail: [
    { name: "Successful", value: 99.95, color: "hsl(var(--chart-1))" },
    { name: "Issues", value: 0.05, color: "hsl(var(--chart-2))" },
  ],
}

// Transportation mode details
const transportModes = {
  road: {
    title: "Road Shipping",
    description: "Our fleet of trucks ensures timely delivery across the continent",
    icon: Truck,
    successRate: "100%",
  },
  air: {
    title: "Air Freight",
    description: "Express delivery for time-sensitive shipments worldwide",
    icon: Plane,
    successRate: "99.99%",
  },
  sea: {
    title: "Ocean Freight",
    description: "Cost-effective shipping solutions for international trade",
    icon: Ship,
    successRate: "99.98%",
  },
  rail: {
    title: "Rail Transport",
    description: "Eco-friendly and efficient for long-distance continental shipping",
    icon: Train,
    successRate: "99.95%",
  },
}

type TransportMode = keyof typeof transportModes

export function ShippingSuccessChart() {
  const [activeTab, setActiveTab] = useState<TransportMode>("road")

  const renderActiveIcon = () => {
    const IconComponent = transportModes[activeTab].icon
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-4 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center">
        <IconComponent className="h-10 w-10 text-primary" />
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Shipping Success Rates</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our exceptional delivery success rates across all
            transportation modes
          </p>
        </div>

        <Tabs
          defaultValue="road"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TransportMode)}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="road" className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>Road</span>
              </TabsTrigger>
              <TabsTrigger value="air" className="flex items-center gap-2">
                <Plane className="h-4 w-4" />
                <span>Air</span>
              </TabsTrigger>
              <TabsTrigger value="sea" className="flex items-center gap-2">
                <Ship className="h-4 w-4" />
                <span>Sea</span>
              </TabsTrigger>
              <TabsTrigger value="rail" className="flex items-center gap-2">
                <Train className="h-4 w-4" />
                <span>Rail</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <button onClick={renderActiveIcon} hidden>hh</button>
          {Object.keys(transportModes).map((mode) => {
            const transportMode = mode as TransportMode
            return (
              <TabsContent key={mode} value={mode} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <Card>
                    <CardHeader>
                      <CardTitle>{transportModes[transportMode].title}</CardTitle>
                      <CardDescription>{transportModes[transportMode].description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-primary mr-2"></div>
                            <span className="text-sm font-medium">Success Rate</span>
                          </div>
                          <span className="font-bold text-lg">{transportModes[transportMode].successRate}</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Based on over 1 million shipments in the past year
                        </p>
                        <ul className="space-y-2 mt-4">
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-primary mt-0.5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">On-time delivery guarantee</span>
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
                            <span className="text-gray-600 dark:text-gray-300">Real-time tracking and visibility</span>
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
                            <span className="text-gray-600 dark:text-gray-300">Insurance coverage included</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="relative h-[350px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={shippingData[transportMode]}
                          cx="50%"
                          cy="50%"
                          innerRadius={80}
                          outerRadius={120}
                          paddingAngle={0}
                          dataKey="value"
                          startAngle={90}
                          endAngle={-270}
                          stroke="none"
                        >
                          {shippingData[transportMode].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Rate"]}
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)",
                            borderRadius: "0.5rem",
                          }}
                        />
                        <Legend
                          verticalAlign="bottom"
                          align="center"
                          layout="horizontal"
                          iconType="circle"
                          iconSize={10}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-2">
                        {(() => {
                          const IconComponent = transportModes[activeTab].icon
                          return <IconComponent className="h-10 w-10 text-primary" />
                        })()}
                      </div>
                      <p className="text-2xl font-bold text-primary mt-2">
                        {transportModes[transportMode].successRate}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
