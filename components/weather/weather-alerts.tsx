import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Info } from "lucide-react"

const alerts = [
  {
    type: "warning",
    title: "Heavy Rain Expected",
    description: "Heavy rainfall predicted for tomorrow afternoon. Consider postponing outdoor activities.",
    icon: AlertTriangle,
  },
  {
    type: "info",
    title: "Optimal Planting Conditions",
    description: "Next 3 days show ideal conditions for planting maize and beans.",
    icon: Info,
  },
]

export function WeatherAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => {
          const Icon = alert.icon
          return (
            <Alert key={index} variant={alert.type === "warning" ? "destructive" : "default"}>
              <Icon className="h-4 w-4" />
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </Alert>
          )
        })}
      </CardContent>
    </Card>
  )
}
