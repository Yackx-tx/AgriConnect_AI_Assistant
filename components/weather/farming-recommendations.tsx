import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

const recommendations = [
  {
    activity: "Planting",
    status: "good",
    advice: "Excellent conditions for planting maize and beans in the next 3 days",
    icon: CheckCircle2,
  },
  {
    activity: "Harvesting",
    status: "caution",
    advice: "Postpone harvesting until after Tuesday's heavy rain",
    icon: AlertCircle,
  },
  {
    activity: "Spraying",
    status: "bad",
    advice: "Not recommended due to expected rainfall. Wait until Thursday",
    icon: XCircle,
  },
  {
    activity: "Irrigation",
    status: "good",
    advice: "Reduce irrigation this week due to expected rainfall",
    icon: CheckCircle2,
  },
]

export function FarmingRecommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Farming Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {recommendations.map((rec) => {
            const Icon = rec.icon
            const statusColor =
              rec.status === "good" ? "text-primary" : rec.status === "caution" ? "text-secondary" : "text-destructive"

            return (
              <Card key={rec.activity} className="bg-muted/30">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${statusColor}`} />
                    <span className="font-semibold">{rec.activity}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.advice}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
