import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: "RAEL",
  description: "All you need to know about RCA and the RCA community",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://rael.vercel.app/",
    siteName: "RAEL",
    description: "All you need to know about RCA and the RCA community",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
