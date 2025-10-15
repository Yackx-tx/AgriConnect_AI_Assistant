import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Droplets, Wind, Eye, Gauge } from "lucide-react"

export function CurrentWeather() {
  return (
    <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
      <CardHeader>
        <CardTitle>Current Weather - Kigali</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Cloud className="h-20 w-20 text-primary" />
              <div>
                <div className="text-5xl font-bold">28°C</div>
                <div className="text-muted-foreground">Partly Cloudy</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Feels like 30°C</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Droplets className="h-4 w-4" />
                <span className="text-sm">Humidity</span>
              </div>
              <div className="text-2xl font-bold">65%</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Wind className="h-4 w-4" />
                <span className="text-sm">Wind Speed</span>
              </div>
              <div className="text-2xl font-bold">12 km/h</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span className="text-sm">Visibility</span>
              </div>
              <div className="text-2xl font-bold">10 km</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gauge className="h-4 w-4" />
                <span className="text-sm">Pressure</span>
              </div>
              <div className="text-2xl font-bold">1013 mb</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
