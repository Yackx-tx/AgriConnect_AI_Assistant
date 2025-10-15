import { Button } from "@/components/ui/button"
import { Sprout } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sprout className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Smart Agriculture for Rwanda</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
            Empowering Farmers with <span className="text-primary">Smart Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Access real-time market prices, weather forecasts, AI-powered disease detection, and connect with a
            community of farmers and agronomists across Rwanda.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Farmers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Agronomists</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Crop Types</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
