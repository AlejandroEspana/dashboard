import "./globals.css"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

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
      <body className={`flex min-h-screen w-full bg-bg-dash text-text-primary ${inter.variable} ${outfit.variable} font-inter`}>
        {children}
      </body>
    </html>
  )
}
