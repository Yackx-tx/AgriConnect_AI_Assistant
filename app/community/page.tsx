import { Navbar } from "@/components/layout/navbar"
import { CreatePost } from "@/components/community/create-post"
import { CommunityFeed } from "@/components/community/community-feed"
import { TrendingTopics } from "@/components/community/trending-topics"
import { SuggestedConnections } from "@/components/community/suggested-connections"

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Community</h1>
            <p className="text-muted-foreground">Connect with farmers and agronomists across Rwanda</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <CreatePost />
              <CommunityFeed />
            </div>

            <div className="space-y-6">
              <TrendingTopics />
              <SuggestedConnections />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
