import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Cloud, Sprout } from "lucide-react"

const stats = [
  {
    title: "Market Average",
    value: "450 RWF/kg",
    change: "+12%",
    trend: "up",
    icon: TrendingUp,
    description: "Maize prices this week",
  },
  {
    title: "Weather Alert",
    value: "Sunny",
    change: "28°C",
    trend: "neutral",
    icon: Cloud,
    description: "Perfect for harvesting",
  },
  {
    title: "Active Crops",
    value: "5",
    change: "2 ready",
    trend: "up",
    icon: Sprout,
    description: "Crops in your farm",
  },
  {
    title: "Community Posts",
    value: "24",
    change: "+8 today",
    trend: "up",
    icon: TrendingUp,
    description: "New discussions",
  },
]

export function DashboardOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const isPositive = stat.trend === "up"

        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${isPositive ? "text-primary" : "text-muted-foreground"}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-medium ${isPositive ? "text-primary" : "text-muted-foreground"}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
