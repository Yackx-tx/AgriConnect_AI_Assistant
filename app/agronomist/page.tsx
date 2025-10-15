import { Navbar } from "@/components/layout/navbar"
import { AgronomistStats } from "@/components/agronomist/agronomist-stats"
import { PendingConsultations } from "@/components/agronomist/pending-consultations"
import { RecentQuestions } from "@/components/agronomist/recent-questions"

export default function AgronomistPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Agronomist Dashboard</h1>
            <p className="text-muted-foreground">Manage consultations and help farmers</p>
          </div>

          <AgronomistStats />
          <PendingConsultations />
          <RecentQuestions />
        </div>
      </main>
    </div>
  )
}
