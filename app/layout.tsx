import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'WelvetWash - Premium Laundry Pod Solutions',
  description: 'WelvetWash offers revolutionary 5-in-1 and 7-in-1 laundry pod technology with advanced cleaning power, anti-bacterial protection, and eco-friendly design.',
  keywords: 'laundry pods, detergent, cleaning, eco-friendly, anti-bacterial, premium quality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919725550820?text=Hi! I'm interested in WelvetWash laundry pods. Can you help me with more information?"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          data-testid="whatsapp-button"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-2 -left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat with us on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </div>
        </a>
      </body>
    </html>
  )
}