"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const posts = [
  {
    id: 1,
    author: "John Mugisha",
    role: "Farmer",
    time: "2 hours ago",
    content:
      "Just harvested my maize crop! The yield was 30% higher this season thanks to the weather forecasts and proper timing. Thank you AgriConnect!",
    likes: 24,
    comments: 8,
    tags: ["Maize", "Harvest"],
  },
  {
    id: 2,
    author: "Dr. Sarah Uwase",
    role: "Agronomist",
    time: "5 hours ago",
    content:
      "Important tip: With the heavy rains expected this week, make sure to check your tomato plants for early blight symptoms. Prevention is key!",
    likes: 45,
    comments: 12,
    tags: ["Tomato", "Disease Prevention"],
  },
  {
    id: 3,
    author: "Peter Nkunda",
    role: "Farmer",
    time: "1 day ago",
    content: "Looking for advice on organic pest control for beans. Has anyone tried neem oil? What were your results?",
    likes: 18,
    comments: 15,
    tags: ["Beans", "Pest Control"],
  },
  {
    id: 4,
    author: "Marie Mukamana",
    role: "Farmer",
    time: "2 days ago",
    content:
      "Excited to share that I've started using drip irrigation! Already seeing water savings and healthier plants. Happy to answer questions!",
    likes: 32,
    comments: 10,
    tags: ["Irrigation", "Water Management"],
  },
]

export function CommunityFeed() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {post.role} • {post.time}
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Save Post</DropdownMenuItem>
                  <DropdownMenuItem>Report</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">{post.content}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-2 border-t border-border">
              <Button
                variant="ghost"
                size="sm"
                className={likedPosts.includes(post.id) ? "text-primary" : ""}
                onClick={() => toggleLike(post.id)}
              >
                <Heart className={`mr-2 h-4 w-4 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="mr-2 h-4 w-4" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
