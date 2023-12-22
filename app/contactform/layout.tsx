import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header2 from '../components/Header2'
import Footer from '../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SiteWizard Content Studio CMS',
  description: 'SiteWizard code By Luis Rivera - Xplendev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
      <Header2></Header2>
      {children}
      <footer>
        <Footer/>
      </footer>
      </body>


    </html>
  )
}
