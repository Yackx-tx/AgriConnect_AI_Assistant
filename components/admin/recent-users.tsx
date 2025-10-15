import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const users = [
  {
    name: "John Mugisha",
    email: "john.m@example.com",
    role: "farmer",
    location: "Kigali",
    joined: "2024-01-15",
    status: "active",
  },
  {
    name: "Dr. Sarah Uwase",
    email: "sarah.u@example.com",
    role: "agronomist",
    location: "Musanze",
    joined: "2024-01-14",
    status: "active",
  },
  {
    name: "Peter Nkunda",
    email: "peter.n@example.com",
    role: "farmer",
    location: "Huye",
    joined: "2024-01-13",
    status: "active",
  },
  {
    name: "Marie Mukamana",
    email: "marie.m@example.com",
    role: "farmer",
    location: "Rubavu",
    joined: "2024-01-12",
    status: "inactive",
  },
  {
    name: "James Habimana",
    email: "james.h@example.com",
    role: "agronomist",
    location: "Nyagatare",
    joined: "2024-01-11",
    status: "active",
  },
]

export function RecentUsers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Users</CardTitle>
        <CardDescription>Latest user registrations</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={user.role === "agronomist" ? "default" : "secondary"} className="capitalize">
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>{user.location}</TableCell>
                <TableCell className="text-sm">{user.joined}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Suspend User</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
