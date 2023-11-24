import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Molecules/Footer/Footer';
import Header from '@/components/Molecules/Header/Header';

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real-Estate',
  description: 'Real estate website',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
