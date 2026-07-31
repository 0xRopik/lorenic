import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { LoadingScreen } from '@/components/loading-screen'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ConsultationProvider } from '@/components/consultation-modal'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lorenic — Sains Peptida. Diriset & Teruji.',
  description:
    'Lorenic menyediakan peptida riset kelas laboratorium dengan pengujian laboratorium independen Eropa, pengiriman cold-chain, dan dukungan purna jual 24/7.',
  generator: 'v0.app',
  keywords: [
    'Lorenic',
    'peptida',
    'peptida riset',
    'retatrutide',
    'tirzepatide',
    'semaglutide',
    'European Pharmacopoeia',
  ],
  openGraph: {
    title: 'Lorenic — Sains Peptida. Diriset & Teruji.',
    description:
      'Peptida riset kelas laboratorium dengan pengujian laboratorium independen Eropa dan pengiriman cold-chain.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0d2456',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`light bg-background ${inter.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">
        <LoadingScreen />
        <SmoothScroll />
        <ConsultationProvider>{children}</ConsultationProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
