import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "AgriConnect - Smart Agriculture Platform",
  description: "Empowering Rwandan farmers with smart agriculture solutions",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
