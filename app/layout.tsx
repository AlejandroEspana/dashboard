import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flex Dashboard",
  description: "1:1 Dashboard Recreation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  )
}
