import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, TrendingUp, MessageSquare } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "10,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    description: "from last month",
  },
  {
    title: "Active Farmers",
    value: "8,234",
    change: "+8.2%",
    trend: "up",
    icon: UserCheck,
    description: "logged in this week",
  },
  {
    title: "Disease Detections",
    value: "1,456",
    change: "+23.1%",
    trend: "up",
    icon: TrendingUp,
    description: "this month",
  },
  {
    title: "Community Posts",
    value: "3,892",
    change: "+15.7%",
    trend: "up",
    icon: MessageSquare,
    description: "this month",
  },
]

export function AdminStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-medium text-primary">{stat.change}</span>
                <span className="text-xs text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
