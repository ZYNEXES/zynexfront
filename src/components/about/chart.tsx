"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { year: "January", Shipments: 186, success: 80 },
  { year: "February", Shipments: 305, success: 200 },
  { year: "March", Shipments: 237, success: 120 },
  { year: "April", Shipments: 73, success: 190 },
  { year: "May", Shipments: 209, success: 130 },
  { year: "June", Shipments: 214, success: 140 },
]

const chartConfig = {
  desktop: {
    label: "Shipments",
    color: "#2563eb",
  },
  mobile: {
    label: "Success",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="h-96 min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Shipments" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="success" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
