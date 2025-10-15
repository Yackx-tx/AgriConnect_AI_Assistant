import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const history = [
  {
    date: "2024-01-15",
    crop: "Tomato",
    disease: "Late Blight",
    confidence: 92,
    severity: "Moderate",
  },
  {
    date: "2024-01-12",
    crop: "Maize",
    disease: "Leaf Rust",
    confidence: 88,
    severity: "Low",
  },
  {
    date: "2024-01-08",
    crop: "Beans",
    disease: "Anthracnose",
    confidence: 95,
    severity: "High",
  },
]

export function DetectionHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detection History</CardTitle>
        <CardDescription>Your recent disease detection scans</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {history.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="space-y-1">
                <div className="font-semibold">{item.disease}</div>
                <div className="text-sm text-muted-foreground">
                  {item.crop} • {item.date}
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      item.severity === "High" ? "destructive" : item.severity === "Moderate" ? "secondary" : "default"
                    }
                  >
                    {item.severity}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.confidence}% confidence</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
