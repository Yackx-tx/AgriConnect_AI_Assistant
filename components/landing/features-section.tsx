import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Cloud, Camera, Users, Bell, BarChart3 } from "lucide-react"

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Market Prices",
    description:
      "Track crop prices across Rwanda with live updates and historical trends to make informed selling decisions.",
  },
  {
    icon: Cloud,
    title: "Weather Forecasting",
    description: "Get accurate 7-14 day weather forecasts tailored to your location for better crop planning.",
  },
  {
    icon: Camera,
    title: "AI Disease Detection",
    description: "Upload crop photos and get instant AI-powered disease identification with treatment recommendations.",
  },
  {
    icon: Users,
    title: "Farmer Community",
    description: "Connect with fellow farmers, share experiences, and learn from agricultural experts.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive alerts for price changes, weather warnings, and important agricultural updates.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your farm performance with detailed analytics and insights to optimize productivity.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Everything You Need to Succeed</h2>
          <p className="text-lg text-muted-foreground text-balance">
            AgriConnect provides comprehensive tools and resources to help Rwandan farmers thrive in modern agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
