"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { Sprout, Home, TrendingUp, Cloud, Camera, Users, Bell, Settings, LogOut, LayoutDashboard } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Navbar() {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  if (!user) return null

  const navItems =
    user.role === "admin"
      ? [
          { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
          { href: "/admin/users", label: "Users", icon: Users },
          { href: "/admin/analytics", label: "Analytics", icon: TrendingUp },
        ]
      : user.role === "agronomist"
        ? [
            { href: "/agronomist", label: "Dashboard", icon: Home },
            { href: "/agronomist/consultations", label: "Consultations", icon: Users },
            { href: "/agronomist/resources", label: "Resources", icon: Sprout },
          ]
        : [
            { href: "/dashboard", label: "Dashboard", icon: Home },
            { href: "/market", label: "Market Prices", icon: TrendingUp },
            { href: "/weather", label: "Weather", icon: Cloud },
            { href: "/disease-detection", label: "Disease Detection", icon: Camera },
            { href: "/community", label: "Community", icon: Users },
          ]

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">AgriConnect</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button variant={isActive ? "secondary" : "ghost"} size="sm" className="gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-primary capitalize">{user.role}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
