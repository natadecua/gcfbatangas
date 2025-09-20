import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GCF Batangas - Gospel City Fellowship',
  description: 'Welcome to Gospel City Fellowship Batangas - A church committed to making disciples of Jesus Christ.',
  keywords: 'church, gospel, batangas, fellowship, christian, jesus, worship, sermons',
  openGraph: {
    title: 'GCF Batangas - Gospel City Fellowship',
    description: 'Welcome to Gospel City Fellowship Batangas - A church committed to making disciples of Jesus Christ.',
    type: 'website',
    locale: 'en_US',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}