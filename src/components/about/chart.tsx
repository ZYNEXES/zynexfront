"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Updated data to show package deliveries
const chartData = [
  { date: "2024-04-01", competitors: 950, Zynex: 970 },
  { date: "2024-04-02", competitors: 880, Zynex: 900 },
  { date: "2024-04-03", competitors: 920, Zynex: 940 },
  { date: "2024-04-04", competitors: 1060, Zynex: 1080 },
  { date: "2024-04-05", competitors: 1190, Zynex: 1209 },
  { date: "2024-04-06", competitors: 1140, Zynex: 1158 },
  { date: "2024-04-07", competitors: 980, Zynex: 998 },
  { date: "2024-04-08", competitors: 1120, Zynex: 1138 },
  { date: "2024-04-09", competitors: 910, Zynex: 928 },
  { date: "2024-04-10", competitors: 990, Zynex: 1009 },
  { date: "2024-04-11", competitors: 1050, Zynex: 1068 },
  { date: "2024-04-12", competitors: 1010, Zynex: 1028 },
  { date: "2024-04-13", competitors: 1080, Zynex: 1098 },
  { date: "2024-04-14", competitors: 920, Zynex: 938 },
  { date: "2024-04-15", competitors: 870, Zynex: 888 },
  { date: "2024-04-16", competitors: 890, Zynex: 908 },
  { date: "2024-04-17", competitors: 1160, Zynex: 1178 },
  { date: "2024-04-18", competitors: 1110, Zynex: 1128 },
  { date: "2024-04-19", competitors: 980, Zynex: 998 },
  { date: "2024-04-20", competitors: 850, Zynex: 868 },
  { date: "2024-04-21", competitors: 900, Zynex: 918 },
  { date: "2024-04-22", competitors: 970, Zynex: 988 },
  { date: "2024-04-23", competitors: 930, Zynex: 948 },
  { date: "2024-04-24", competitors: 1090, Zynex: 1108 },
  { date: "2024-04-25", competitors: 950, Zynex: 968 },
  { date: "2024-04-26", competitors: 830, Zynex: 848 },
  { date: "2024-04-27", competitors: 1120, Zynex: 1138 },
  { date: "2024-04-28", competitors: 880, Zynex: 898 },
  { date: "2024-04-29", competitors: 1040, Zynex: 1058 },
  { date: "2024-04-30", competitors: 1180, Zynex: 1198 },
  { date: "2024-05-01", competitors: 920, Zynex: 938 },
  { date: "2024-05-02", competitors: 1010, Zynex: 1028 },
  { date: "2024-05-03", competitors: 990, Zynex: 1008 },
  { date: "2024-05-04", competitors: 1120, Zynex: 1138 },
  { date: "2024-05-05", competitors: 1190, Zynex: 1208 },
  { date: "2024-05-06", competitors: 1220, Zynex: 1238 },
  { date: "2024-05-07", competitors: 1100, Zynex: 1118 },
  { date: "2024-05-08", competitors: 910, Zynex: 928 },
  { date: "2024-05-09", competitors: 980, Zynex: 998 },
  { date: "2024-05-10", competitors: 1030, Zynex: 1048 },
  { date: "2024-05-11", competitors: 1070, Zynex: 1088 },
  { date: "2024-05-12", competitors: 940, Zynex: 958 },
  { date: "2024-05-13", competitors: 960, Zynex: 978 },
  { date: "2024-05-14", competitors: 1190, Zynex: 1208 },
  { date: "2024-05-15", competitors: 1180, Zynex: 1198 },
  { date: "2024-05-16", competitors: 1100, Zynex: 1118 },
  { date: "2024-05-17", competitors: 1220, Zynex: 1238 },
  { date: "2024-05-18", competitors: 1050, Zynex: 1068 },
  { date: "2024-05-19", competitors: 980, Zynex: 998 },
  { date: "2024-05-20", competitors: 930, Zynex: 948 },
  { date: "2024-05-21", competitors: 840, Zynex: 858 },
  { date: "2024-05-22", competitors: 820, Zynex: 838 },
  { date: "2024-05-23", competitors: 990, Zynex: 1008 },
  { date: "2024-05-24", competitors: 1020, Zynex: 1038 },
  { date: "2024-05-25", competitors: 950, Zynex: 968 },
  { date: "2024-05-26", competitors: 970, Zynex: 988 },
  { date: "2024-05-27", competitors: 1160, Zynex: 1178 },
  { date: "2024-05-28", competitors: 990, Zynex: 1008 },
  { date: "2024-05-29", competitors: 830, Zynex: 848 },
  { date: "2024-05-30", competitors: 1080, Zynex: 1098 },
  { date: "2024-05-31", competitors: 930, Zynex: 948 },
  { date: "2024-06-01", competitors: 900, Zynex: 918 },
  { date: "2024-06-02", competitors: 1210, Zynex: 1228 },
  { date: "2024-06-03", competitors: 860, Zynex: 878 },
  { date: "2024-06-04", competitors: 1180, Zynex: 1198 },
  { date: "2024-06-05", competitors: 840, Zynex: 858 },
  { date: "2024-06-06", competitors: 1050, Zynex: 1068 },
  { date: "2024-06-07", competitors: 1070, Zynex: 1088 },
  { date: "2024-06-08", competitors: 1120, Zynex: 1138 },
  { date: "2024-06-09", competitors: 1180, Zynex: 1198 },
  { date: "2024-06-10", competitors: 900, Zynex: 918 },
  { date: "2024-06-11", competitors: 850, Zynex: 868 },
  { date: "2024-06-12", competitors: 1220, Zynex: 1238 },
  { date: "2024-06-13", competitors: 830, Zynex: 848 },
  { date: "2024-06-14", competitors: 1180, Zynex: 1198 },
  { date: "2024-06-15", competitors: 1050, Zynex: 1068 },
  { date: "2024-06-16", competitors: 1110, Zynex: 1128 },
  { date: "2024-06-17", competitors: 1220, Zynex: 1238 },
  { date: "2024-06-18", competitors: 870, Zynex: 888 },
  { date: "2024-06-19", competitors: 1090, Zynex: 1108 },
  { date: "2024-06-20", competitors: 1150, Zynex: 1168 },
  { date: "2024-06-21", competitors: 910, Zynex: 928 },
  { date: "2024-06-22", competitors: 1070, Zynex: 1088 },
  { date: "2024-06-23", competitors: 1230, Zynex: 1248 },
  { date: "2024-06-24", competitors: 880, Zynex: 898 },
  { date: "2024-06-25", competitors: 890, Zynex: 908 },
  { date: "2024-06-26", competitors: 1180, Zynex: 1198 },
  { date: "2024-06-27", competitors: 1190, Zynex: 1208 },
  { date: "2024-06-28", competitors: 900, Zynex: 918 },
  { date: "2024-06-29", competitors: 860, Zynex: 878 },
  { date: "2024-06-30", competitors: 1200, Zynex: 1218 },
]


// Updated chart configuration
const chartConfig = {
  packages: {
    label: "Packages",
  },
  Zynex: {
    label: "Zynex",
    color: "hsl(var(--chart-1))",
  },
  competitors: {
    label: "Competitors",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Chart() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Package Delivery Performance</CardTitle>
          <CardDescription>Comparing your company&apos;s package deliveries vs competitors</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto" aria-label="Select a time range">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillZynex" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-Zynex)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-Zynex)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillCompetitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-competitors)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-competitors)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="competitors"
              type="natural"
              fill="url(#fillCompetitors)"
              stroke="var(--color-competitors)"
              stackId="a"
            />
            <Area
              dataKey="Zynex"
              type="natural"
              fill="url(#fillZynex)"
              stroke="var(--color-Zynex)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

