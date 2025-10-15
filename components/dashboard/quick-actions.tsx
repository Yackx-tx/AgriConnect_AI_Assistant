import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Cloud, Camera, Users } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Check Market Prices",
    description: "View current crop prices and trends",
    icon: TrendingUp,
    href: "/market",
    color: "text-primary",
  },
  {
    title: "Weather Forecast",
    description: "7-day weather predictions",
    icon: Cloud,
    href: "/weather",
    color: "text-secondary",
  },
  {
    title: "Detect Disease",
    description: "Upload crop photos for AI analysis",
    icon: Camera,
    href: "/disease-detection",
    color: "text-primary",
  },
  {
    title: "Join Community",
    description: "Connect with other farmers",
    icon: Users,
    href: "/community",
    color: "text-secondary",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Access key features quickly</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Link key={action.title} href={action.href}>
                <Button
                  variant="outline"
                  className="w-full h-auto flex-col items-start p-4 gap-2 hover:border-primary bg-transparent"
                >
                  <Icon className={`h-6 w-6 ${action.color}`} />
                  <div className="text-left">
                    <div className="font-semibold">{action.title}</div>
                    <div className="text-xs text-muted-foreground">{action.description}</div>
                  </div>
                </Button>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
