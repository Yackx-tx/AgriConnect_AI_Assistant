import { Navbar } from "@/components/layout/navbar"
import { CurrentWeather } from "@/components/weather/current-weather"
import { WeatherForecast } from "@/components/weather/weather-forecast"
import { WeatherAlerts } from "@/components/weather/weather-alerts"
import { FarmingRecommendations } from "@/components/weather/farming-recommendations"

export default function WeatherPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Weather Forecast</h1>
            <p className="text-muted-foreground">14-day weather predictions for your location</p>
          </div>

          <CurrentWeather />
          <WeatherAlerts />
          <WeatherForecast />
          <FarmingRecommendations />
        </div>
      </main>
    </div>
  )
}
