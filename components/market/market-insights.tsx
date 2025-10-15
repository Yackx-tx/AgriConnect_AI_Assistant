import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react"

const insights = [
  {
    title: "Highest Gainer",
    crop: "Maize",
    value: "+12%",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    title: "Lowest Price",
    crop: "Beans",
    value: "320 RWF/kg",
    icon: TrendingDown,
    color: "text-destructive",
  },
  {
    title: "Market Alert",
    crop: "Rice",
    value: "High Demand",
    icon: AlertCircle,
    color: "text-secondary",
  },
]

export function MarketInsights() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {insights.map((insight) => {
        const Icon = insight.icon
        return (
          <Card key={insight.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{insight.title}</CardTitle>
              <Icon className={`h-4 w-4 ${insight.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{insight.crop}</div>
              <p className={`text-xs ${insight.color} mt-1`}>{insight.value}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
