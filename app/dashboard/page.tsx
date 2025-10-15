import { Navbar } from "@/components/layout/navbar"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your farm today.</p>
          </div>

          <DashboardOverview />
          <QuickActions />
          <RecentActivity />
        </div>
      </main>
    </div>
  )
}
