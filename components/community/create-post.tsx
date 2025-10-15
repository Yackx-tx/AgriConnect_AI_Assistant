"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useAuth } from "@/lib/auth-context"
import { ImageIcon, Send } from "lucide-react"

export function CreatePost() {
  const { user } = useAuth()
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post submission
    console.log("[v0] Post submitted:", content)
    setContent("")
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user?.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="Share your farming experience, ask questions, or give advice..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-24"
            />
          </div>

          <div className="flex items-center justify-between">
            <Button type="button" variant="ghost" size="sm">
              <ImageIcon className="mr-2 h-4 w-4" />
              Add Photo
            </Button>
            <Button type="submit" disabled={!content.trim()}>
              <Send className="mr-2 h-4 w-4" />
              Post
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
