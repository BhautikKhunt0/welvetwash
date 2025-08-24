import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CleanPods Pro - Premium Laundry Pod Solutions',
  description: 'Revolutionary 5-in-1 and 7-in-1 laundry pod technology with advanced cleaning power, anti-bacterial protection, and eco-friendly design.',
  keywords: 'laundry pods, detergent, cleaning, eco-friendly, anti-bacterial, premium quality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-inter bg-slate-50 dark:bg-slate-900">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}