import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

const topics = [
  { name: "Maize Farming", posts: 156, trend: "+12%" },
  { name: "Disease Prevention", posts: 89, trend: "+8%" },
  { name: "Irrigation Tips", posts: 67, trend: "+15%" },
  { name: "Market Prices", posts: 134, trend: "+5%" },
  { name: "Organic Farming", posts: 45, trend: "+20%" },
]

export function TrendingTopics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Trending Topics
        </CardTitle>
        <CardDescription>Popular discussions this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topics.map((topic) => (
            <div key={topic.name} className="flex items-center justify-between">
              <div>
                <div className="font-medium text-sm">{topic.name}</div>
                <div className="text-xs text-muted-foreground">{topic.posts} posts</div>
              </div>
              <Badge variant="secondary" className="text-primary">
                {topic.trend}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
