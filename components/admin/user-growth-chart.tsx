"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const data = [
  { month: "Jan", farmers: 6500, agronomists: 420 },
  { month: "Feb", farmers: 7200, agronomists: 450 },
  { month: "Mar", farmers: 7800, agronomists: 480 },
  { month: "Apr", farmers: 8100, agronomists: 490 },
  { month: "May", farmers: 8500, agronomists: 510 },
  { month: "Jun", farmers: 8234, agronomists: 523 },
]

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>Monthly user registration trends</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Bar dataKey="farmers" fill="hsl(var(--primary))" name="Farmers" />
            <Bar dataKey="agronomists" fill="hsl(var(--secondary))" name="Agronomists" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
