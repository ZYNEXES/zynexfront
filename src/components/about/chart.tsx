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
  { date: "2024-04-01", Zynex: 1422, competitors: 950 },
  { date: "2024-04-02", Zynex: 1297, competitors: 880 },
  { date: "2024-04-03", Zynex: 1367, competitors: 920 },
  { date: "2024-04-04", Zynex: 1542, competitors: 1060 },
  { date: "2024-04-05", Zynex: 1673, competitors: 1190 },
  { date: "2024-04-06", Zynex: 1601, competitors: 1140 },
  { date: "2024-04-07", Zynex: 1445, competitors: 980 },
  { date: "2024-04-08", Zynex: 1609, competitors: 1120 },
  { date: "2024-04-09", Zynex: 1259, competitors: 910 },
  { date: "2024-04-10", Zynex: 1461, competitors: 990 },
  { date: "2024-04-11", Zynex: 1527, competitors: 1050 },
  { date: "2024-04-12", Zynex: 1492, competitors: 1010 },
  { date: "2024-04-13", Zynex: 1542, competitors: 1080 },
  { date: "2024-04-14", Zynex: 1337, competitors: 920 },
  { date: "2024-04-15", Zynex: 1320, competitors: 870 },
  { date: "2024-04-16", Zynex: 1338, competitors: 890 },
  { date: "2024-04-17", Zynex: 1646, competitors: 1160 },
  { date: "2024-04-18", Zynex: 1564, competitors: 1110 },
  { date: "2024-04-19", Zynex: 1443, competitors: 980 },
  { date: "2024-04-20", Zynex: 1289, competitors: 850 },
  { date: "2024-04-21", Zynex: 1337, competitors: 900 },
  { date: "2024-04-22", Zynex: 1424, competitors: 970 },
  { date: "2024-04-23", Zynex: 1338, competitors: 930 },
  { date: "2024-04-24", Zynex: 1587, competitors: 1090 },
  { date: "2024-04-25", Zynex: 1415, competitors: 950 },
  { date: "2024-04-26", Zynex: 1275, competitors: 830 },
  { date: "2024-04-27", Zynex: 1583, competitors: 1120 },
  { date: "2024-04-28", Zynex: 1322, competitors: 880 },
  { date: "2024-04-29", Zynex: 1515, competitors: 1040 },
  { date: "2024-04-30", Zynex: 1654, competitors: 1180 },
  { date: "2024-05-01", Zynex: 1365, competitors: 920 },
  { date: "2024-05-02", Zynex: 1493, competitors: 1010 },
  { date: "2024-05-03", Zynex: 1447, competitors: 990 },
  { date: "2024-05-04", Zynex: 1585, competitors: 1120 },
  { date: "2024-05-05", Zynex: 1681, competitors: 1190 },
  { date: "2024-05-06", Zynex: 1698, competitors: 1220 },
  { date: "2024-05-07", Zynex: 1588, competitors: 1100 },
  { date: "2024-05-08", Zynex: 1349, competitors: 910 },
  { date: "2024-05-09", Zynex: 1427, competitors: 980 },
  { date: "2024-05-10", Zynex: 1493, competitors: 1030 },
  { date: "2024-05-11", Zynex: 1535, competitors: 1070 },
  { date: "2024-05-12", Zynex: 1397, competitors: 940 },
  { date: "2024-05-13", Zynex: 1397, competitors: 960 },
  { date: "2024-05-14", Zynex: 1648, competitors: 1190 },
  { date: "2024-05-15", Zynex: 1673, competitors: 1180 },
  { date: "2024-05-16", Zynex: 1538, competitors: 1100 },
  { date: "2024-05-17", Zynex: 1699, competitors: 1220 },
  { date: "2024-05-18", Zynex: 1515, competitors: 1050 },
  { date: "2024-05-19", Zynex: 1435, competitors: 980 },
  { date: "2024-05-20", Zynex: 1377, competitors: 930 },
  { date: "2024-05-21", Zynex: 1282, competitors: 840 },
  { date: "2024-05-22", Zynex: 1281, competitors: 820 },
  { date: "2024-05-23", Zynex: 1452, competitors: 990 },
  { date: "2024-05-24", Zynex: 1494, competitors: 1020 },
  { date: "2024-05-25", Zynex: 1401, competitors: 950 },
  { date: "2024-05-26", Zynex: 1413, competitors: 970 },
  { date: "2024-05-27", Zynex: 1620, competitors: 1160 },
  { date: "2024-05-28", Zynex: 1433, competitors: 990 },
  { date: "2024-05-29", Zynex: 1278, competitors: 830 },
  { date: "2024-05-30", Zynex: 1540, competitors: 1080 },
  { date: "2024-05-31", Zynex: 1378, competitors: 930 },
  { date: "2024-06-01", Zynex: 1378, competitors: 900 },
  { date: "2024-06-02", Zynex: 1670, competitors: 1210 },
  { date: "2024-06-03", Zynex: 1303, competitors: 860 },
  { date: "2024-06-04", Zynex: 1639, competitors: 1180 },
  { date: "2024-06-05", Zynex: 1288, competitors: 840 },
  { date: "2024-06-06", Zynex: 1494, competitors: 1050 },
  { date: "2024-06-07", Zynex: 1523, competitors: 1070 },
  { date: "2024-06-08", Zynex: 1585, competitors: 1120 },
  { date: "2024-06-09", Zynex: 1638, competitors: 1180 },
  { date: "2024-06-10", Zynex: 1355, competitors: 900 },
  { date: "2024-06-11", Zynex: 1292, competitors: 850 },
  { date: "2024-06-12", Zynex: 1692, competitors: 1220 },
  { date: "2024-06-13", Zynex: 1281, competitors: 830 },
  { date: "2024-06-14", Zynex: 1626, competitors: 1180 },
  { date: "2024-06-15", Zynex: 1507, competitors: 1050 },
  { date: "2024-06-16", Zynex: 1571, competitors: 1110 },
  { date: "2024-06-17", Zynex: 1675, competitors: 1220 },
  { date: "2024-06-18", Zynex: 1307, competitors: 870 },
  { date: "2024-06-19", Zynex: 1541, competitors: 1090 },
  { date: "2024-06-20", Zynex: 1608, competitors: 1150 },
  { date: "2024-06-21", Zynex: 1369, competitors: 910 },
  { date: "2024-06-22", Zynex: 1517, competitors: 1070 },
  { date: "2024-06-23", Zynex: 1680, competitors: 1230 },
  { date: "2024-06-24", Zynex: 1332, competitors: 880 },
  { date: "2024-06-25", Zynex: 1341, competitors: 890 },
  { date: "2024-06-26", Zynex: 1634, competitors: 1180 },
  { date: "2024-06-27", Zynex: 1648, competitors: 1190 },
  { date: "2024-06-28", Zynex: 1349, competitors: 900 },
  { date: "2024-06-29", Zynex: 1303, competitors: 860 },
  { date: "2024-06-30", Zynex: 1646, competitors: 1200 },
]

// Updated chart configuration
const chartConfig = {
  packages: {
    label: "Packages",
  },
  Zynex: {
    label: "Your Company",
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

