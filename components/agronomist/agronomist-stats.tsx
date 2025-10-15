import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, CheckCircle, Clock } from "lucide-react"

const stats = [
  {
    title: "Active Consultations",
    value: "12",
    icon: Users,
    description: "Ongoing cases",
  },
  {
    title: "Questions Answered",
    value: "156",
    icon: MessageSquare,
    description: "This month",
  },
  {
    title: "Resolved Cases",
    value: "89",
    icon: CheckCircle,
    description: "This month",
  },
  {
    title: "Avg Response Time",
    value: "2.5h",
    icon: Clock,
    description: "Last 7 days",
  },
]

export function AgronomistStats() {
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
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
