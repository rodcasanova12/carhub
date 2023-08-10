import { Footer, Navbar } from '@/components'
import './globals.css'




export const metadata = {
  title: 'CarHub',
  description: 'Discover, book, and rent cars -- quickly and easily!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
