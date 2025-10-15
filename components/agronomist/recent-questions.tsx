import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const questions = [
  {
    farmer: "Alice Uwera",
    question: "What's the best time to plant potatoes in Musanze?",
    time: "3 hours ago",
  },
  {
    farmer: "David Karenzi",
    question: "How can I improve soil fertility naturally?",
    time: "6 hours ago",
  },
  {
    farmer: "Grace Mutesi",
    question: "Recommended spacing for cabbage plants?",
    time: "1 day ago",
  },
]

export function RecentQuestions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Community Questions</CardTitle>
        <CardDescription>Help farmers with their questions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div key={index} className="flex items-start justify-between p-4 border border-border rounded-lg">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">{q.farmer.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="font-semibold text-sm">{q.farmer}</div>
                  <p className="text-sm text-muted-foreground">{q.question}</p>
                  <span className="text-xs text-muted-foreground">{q.time}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Answer
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
