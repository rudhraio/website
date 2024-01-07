import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Rudhra',
  description: 'This is my Rudhra\'s website',
  icons: "assets/images/favicon.svg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='px-6 sm:px-6 md:px-12 lg:px-36'>
        <Header />
        {children}
      </body>
    </html>
  )
}
