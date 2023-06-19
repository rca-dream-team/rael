import { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RAEL',
  description: 'All you need to know about RCA and the RCA community',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://rael.vercel.app/',
    siteName: 'RAEL',
    description: 'All you need to know about RCA and the RCA community',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="rael.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
