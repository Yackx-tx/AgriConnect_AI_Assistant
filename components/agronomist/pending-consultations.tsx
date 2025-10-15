import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const consultations = [
  {
    farmer: "John Mugisha",
    issue: "Tomato leaf discoloration",
    crop: "Tomato",
    priority: "high",
    time: "2 hours ago",
  },
  {
    farmer: "Peter Nkunda",
    issue: "Bean pest infestation",
    crop: "Beans",
    priority: "medium",
    time: "5 hours ago",
  },
  {
    farmer: "Marie Mukamana",
    issue: "Maize growth stunted",
    crop: "Maize",
    priority: "low",
    time: "1 day ago",
  },
]

export function PendingConsultations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pending Consultations</CardTitle>
        <CardDescription>Farmers waiting for your expertise</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {consultations.map((consultation, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {consultation.farmer.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="font-semibold">{consultation.farmer}</div>
                  <div className="text-sm text-muted-foreground">{consultation.issue}</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{consultation.crop}</Badge>
                    <Badge
                      variant={
                        consultation.priority === "high"
                          ? "destructive"
                          : consultation.priority === "medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {consultation.priority}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {consultation.time}
                    </span>
                  </div>
                </div>
              </div>
              <Button>Respond</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
