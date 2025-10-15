import { Navbar } from "@/components/layout/navbar"
import { MarketPricesTable } from "@/components/market/market-prices-table"
import { PriceTrendsChart } from "@/components/market/price-trends-chart"
import { MarketInsights } from "@/components/market/market-insights"

export default function MarketPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Market Prices</h1>
            <p className="text-muted-foreground">Real-time crop prices and market trends across Rwanda</p>
          </div>

          <MarketInsights />
          <PriceTrendsChart />
          <MarketPricesTable />
        </div>
      </main>
    </div>
  )
}
