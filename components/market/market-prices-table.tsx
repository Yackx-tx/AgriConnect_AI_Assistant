"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const crops = [
  { name: "Maize", price: 450, change: 12, trend: "up", location: "Kigali", unit: "kg" },
  { name: "Beans", price: 340, change: 5, trend: "up", location: "Musanze", unit: "kg" },
  { name: "Rice", price: 590, change: -2, trend: "down", location: "Huye", unit: "kg" },
  { name: "Cassava", price: 280, change: 0, trend: "neutral", location: "Rubavu", unit: "kg" },
  { name: "Sweet Potato", price: 320, change: 8, trend: "up", location: "Nyagatare", unit: "kg" },
  { name: "Irish Potato", price: 380, change: -5, trend: "down", location: "Musanze", unit: "kg" },
  { name: "Tomato", price: 650, change: 15, trend: "up", location: "Kigali", unit: "kg" },
  { name: "Cabbage", price: 420, change: 3, trend: "up", location: "Huye", unit: "kg" },
]

export function MarketPricesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Market Prices</CardTitle>
        <CardDescription>Latest prices from major markets across Rwanda</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Crop</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price (RWF)</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {crops.map((crop) => (
              <TableRow key={crop.name}>
                <TableCell className="font-medium">{crop.name}</TableCell>
                <TableCell>{crop.location}</TableCell>
                <TableCell>
                  {crop.price} RWF/{crop.unit}
                </TableCell>
                <TableCell>
                  <span
                    className={
                      crop.trend === "up"
                        ? "text-primary"
                        : crop.trend === "down"
                          ? "text-destructive"
                          : "text-muted-foreground"
                    }
                  >
                    {crop.change > 0 ? "+" : ""}
                    {crop.change}%
                  </span>
                </TableCell>
                <TableCell>
                  {crop.trend === "up" ? (
                    <Badge variant="default" className="gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Up
                    </Badge>
                  ) : crop.trend === "down" ? (
                    <Badge variant="destructive" className="gap-1">
                      <TrendingDown className="h-3 w-3" />
                      Down
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="gap-1">
                      <Minus className="h-3 w-3" />
                      Stable
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
