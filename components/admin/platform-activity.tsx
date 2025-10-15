"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const data = [
  { day: "Mon", posts: 45, detections: 89, logins: 1234 },
  { day: "Tue", posts: 52, detections: 95, logins: 1456 },
  { day: "Wed", posts: 48, detections: 102, logins: 1389 },
  { day: "Thu", posts: 61, detections: 87, logins: 1567 },
  { day: "Fri", posts: 55, detections: 110, logins: 1678 },
  { day: "Sat", posts: 38, detections: 76, logins: 1123 },
  { day: "Sun", posts: 42, detections: 82, logins: 1245 },
]

export function PlatformActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Activity</CardTitle>
        <CardDescription>Weekly engagement metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="day" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="posts" stroke="hsl(var(--primary))" strokeWidth={2} name="Posts" />
            <Line
              type="monotone"
              dataKey="detections"
              stroke="hsl(var(--secondary))"
              strokeWidth={2}
              name="Detections"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
