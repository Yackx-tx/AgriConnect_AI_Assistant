import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sprout } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <div className="p-8 md:p-12 text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Sprout className="h-8 w-8 text-primary" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Transform Your Farming?</h2>

            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Join thousands of Rwandan farmers already using AgriConnect to increase productivity and profitability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Today
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
