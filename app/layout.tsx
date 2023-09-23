import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'JSM Project Instance',
  description: 'JS Mastery Resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black font-poppins">{children}</body>
    </html>
  )
}
