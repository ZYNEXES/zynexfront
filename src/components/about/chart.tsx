'use client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import * as React from "react"
const ShippingData = [
  {
    month: "Jan",
    parcelsShipped: 2345,
    successfulDeliveries: 2243,
    successRate: (2243 / 2345) * 100,
  },
  // ... rest of your data
];

export default function Chart() {
  return (
    <Card className="p-6 bg-black border-blue-800/50">
      <h2 className="text-xl font-semibold mb-4 text-white">Shipping Performance 2024</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ShippingData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" opacity={0.3} />
            <XAxis
              dataKey="month"
              stroke="#e5e7eb"
              fontSize={12}
              tick={{ fill: '#e5e7eb' }}
            />
            <YAxis
              stroke="#e5e7eb"
              fontSize={12}
              tick={{ fill: '#e5e7eb' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#e5e7eb"
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
              tick={{ fill: '#e5e7eb' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                borderColor: "#1e3a8a",
                borderRadius: "8px",
                color: "#e5e7eb",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              formatter={(value) => (
                <span className="text-blue-100">{value}</span>
              )}
            />
            <Bar
              dataKey="parcelsShipped"
              name="Parcels Shipped"
              fill="#1e40af"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="successfulDeliveries"
              name="Successful Deliveries"
              fill="#38bdf8"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="successRate"
              name="Success Rate (%)"
              fill="#e0f2fe"
              radius={[4, 4, 0, 0]}
              yAxisId="right"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}