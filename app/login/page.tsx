"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { LoginForm } from "@/components/auth/login-form"
import { Sprout } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && user) {
      if (user.role === "admin") {
        router.push("/admin")
      } else if (user.role === "agronomist") {
        router.push("/agronomist")
      } else {
        router.push("/dashboard")
      }
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin">
          <Sprout className="h-8 w-8 text-primary" />
        </div>
      </div>
    )
  }

  if (user) {
    return null
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-4 left-4">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <Sprout className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-balance">AgriConnect</h1>
          <p className="text-muted-foreground text-balance">
            Empowering Rwandan farmers with smart agriculture solutions
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  )
}
