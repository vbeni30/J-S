import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Playfair_Display, Geist } from "next/font/google"

// Initialize fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Wedding Invitation | John & Soliyana",
  description: "You are cordially invited to celebrate our wedding.",
  openGraph: {
    title: "Wedding Invitation | John & Soliyana",
    description: "You are cordially invited to celebrate our wedding.",
    url: "https://j-s-2.vercel.app/",
    siteName: "Wedding Invitation",
    type: "website",
    images: [
      {
        url: "/cray-maxwell-_yeVwbiuoko-unsplash.jpg", // Using the uploaded image for OG
        width: 1200,
        height: 1200, // Match the square aspect ratio of the provided image
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation | John & Soliyana",
    description: "You are cordially invited to celebrate our wedding.",
    images: ["/cray-maxwell-_yeVwbiuoko-unsplash.jpg"], // Using the uploaded image for Twitter
  },
  metadataBase: new URL("https://j-s-2.vercel.app/"),
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable} scroll-smooth`}>
      <body className="font-sans antialiased selection:bg-accent/30 bg-primary/10">
        <main className="max-w-[480px] mx-auto min-h-screen bg-background shadow-2xl relative overflow-x-hidden">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
