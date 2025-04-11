import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | ZYNEX",
  description: "Insights, news, and updates from the shipping and logistics industry.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
