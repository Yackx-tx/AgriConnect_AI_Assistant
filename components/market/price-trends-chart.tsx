"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const data = [
  { date: "Mon", maize: 400, beans: 320, rice: 550 },
  { date: "Tue", maize: 410, beans: 315, rice: 560 },
  { date: "Wed", maize: 420, beans: 325, rice: 555 },
  { date: "Thu", maize: 435, beans: 320, rice: 570 },
  { date: "Fri", maize: 445, beans: 330, rice: 580 },
  { date: "Sat", maize: 450, beans: 335, rice: 575 },
  { date: "Sun", maize: 450, beans: 340, rice: 590 },
]

export function PriceTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Trends</CardTitle>
        <CardDescription>Weekly price movements for major crops (RWF/kg)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="date" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="maize" stroke="hsl(var(--primary))" strokeWidth={2} name="Maize" />
            <Line type="monotone" dataKey="beans" stroke="hsl(var(--secondary))" strokeWidth={2} name="Beans" />
            <Line type="monotone" dataKey="rice" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Rice" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
