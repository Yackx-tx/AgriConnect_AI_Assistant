import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"

const suggestions = [
  { name: "Dr. Kamanzi", role: "Agronomist", specialty: "Crop Diseases" },
  { name: "Alice Uwera", role: "Farmer", specialty: "Organic Farming" },
  { name: "James Habimana", role: "Agronomist", specialty: "Soil Management" },
  { name: "Grace Mutesi", role: "Farmer", specialty: "Irrigation Expert" },
]

export function SuggestedConnections() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested Connections</CardTitle>
        <CardDescription>People you might want to follow</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((person) => (
            <div key={person.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary">{person.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{person.name}</div>
                  <div className="text-xs text-muted-foreground">{person.specialty}</div>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <UserPlus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
