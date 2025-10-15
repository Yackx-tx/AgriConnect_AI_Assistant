import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    user: "John Mugisha",
    action: "posted in Community",
    content: "Best practices for maize farming in rainy season",
    time: "2 hours ago",
    type: "post",
  },
  {
    user: "Sarah Uwase",
    action: "shared a tip",
    content: "How to prevent tomato blight disease",
    time: "5 hours ago",
    type: "tip",
  },
  {
    user: "Market Update",
    action: "price change",
    content: "Maize prices increased by 12%",
    time: "1 day ago",
    type: "alert",
  },
  {
    user: "Dr. Kamanzi",
    action: "answered your question",
    content: "Regarding potato disease treatment",
    time: "2 days ago",
    type: "answer",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Stay updated with the latest from your network</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary">{activity.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-sm text-muted-foreground">{activity.action}</span>
                  <Badge variant="secondary" className="ml-auto text-xs">
                    {activity.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{activity.content}</p>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
