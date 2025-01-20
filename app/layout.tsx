import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nipun Dileka | Portfolio',
  description: 'Professional portfolio of Nipun Dileka - Full-Stack Developer',
  keywords: ['Nipun Dileka', 'Dileka Nipun', 'Nipun portpolio', 'Nipun Dileka portfolio'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
