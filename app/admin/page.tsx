import { Navbar } from "@/components/layout/navbar"
import { AdminStats } from "@/components/admin/admin-stats"
import { UserGrowthChart } from "@/components/admin/user-growth-chart"
import { PlatformActivity } from "@/components/admin/platform-activity"
import { RecentUsers } from "@/components/admin/recent-users"

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Platform overview and analytics</p>
          </div>

          <AdminStats />

          <div className="grid lg:grid-cols-2 gap-8">
            <UserGrowthChart />
            <PlatformActivity />
          </div>

          <RecentUsers />
        </div>
      </main>
    </div>
  )
}
