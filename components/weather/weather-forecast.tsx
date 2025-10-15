import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, CloudRain, Sun, CloudDrizzle } from "lucide-react"

const forecast = [
  { day: "Mon", high: 28, low: 18, condition: "Partly Cloudy", icon: Cloud, rain: 20 },
  { day: "Tue", high: 26, low: 17, condition: "Rainy", icon: CloudRain, rain: 80 },
  { day: "Wed", high: 27, low: 18, condition: "Light Rain", icon: CloudDrizzle, rain: 40 },
  { day: "Thu", high: 29, low: 19, condition: "Sunny", icon: Sun, rain: 10 },
  { day: "Fri", high: 30, low: 20, condition: "Sunny", icon: Sun, rain: 5 },
  { day: "Sat", high: 28, low: 19, condition: "Partly Cloudy", icon: Cloud, rain: 15 },
  { day: "Sun", high: 27, low: 18, condition: "Light Rain", icon: CloudDrizzle, rain: 35 },
  { day: "Mon", high: 28, low: 19, condition: "Partly Cloudy", icon: Cloud, rain: 20 },
  { day: "Tue", high: 29, low: 20, condition: "Sunny", icon: Sun, rain: 10 },
  { day: "Wed", high: 27, low: 18, condition: "Rainy", icon: CloudRain, rain: 70 },
  { day: "Thu", high: 26, low: 17, condition: "Light Rain", icon: CloudDrizzle, rain: 45 },
  { day: "Fri", high: 28, low: 19, condition: "Partly Cloudy", icon: Cloud, rain: 25 },
  { day: "Sat", high: 30, low: 20, condition: "Sunny", icon: Sun, rain: 5 },
  { day: "Sun", high: 29, low: 19, condition: "Sunny", icon: Sun, rain: 10 },
]

export function WeatherForecast() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>14-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {forecast.map((day, index) => {
            const Icon = day.icon
            return (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-4 space-y-3">
                  <div className="font-semibold text-center">{day.day}</div>
                  <div className="flex justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-2xl font-bold">{day.high}°</div>
                    <div className="text-sm text-muted-foreground">{day.low}°</div>
                  </div>
                  <div className="text-xs text-center text-muted-foreground">{day.condition}</div>
                  <div className="text-xs text-center text-primary">{day.rain}% rain</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
