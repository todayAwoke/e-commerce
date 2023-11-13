import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import CartProvider from '@/providers/CartProvider'
import { Toaster } from 'react-hot-toast'
const Poppin = Poppins({ subsets: ['latin'],weight:['400','700'] })

export const metadata: Metadata = {
  title: 'My ecommerce',
  description: 'my ecommerce website is available',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <body className={`${Poppin.className}text-slate-700`}>
              <Toaster toastOptions={{
                  style: {
                      background: 'rgbToHex(51,65,85)',
                   color:"#fff" 
                }
            }} />
              <CartProvider>
              <div className="flex flex-col min-h-screen">
               <Navbar />
              <main className='flex-grow'> {children} </main>
                 <Footer />
                </div>
            </CartProvider>
          </body>
    </html>
  )
}
