import ClientOnly from './components/ClientOnly';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import './globals.css'

//note you cant export metadata on a page marked use client
export const metadata = {
  title: 'Toyomove',
  description: 'Japanese Vehicle catalogue',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
            <ClientOnly>
            <div className = "gradient"/>
          <Navbar />
          </ClientOnly>
          <div className='pb-20 pt-28'>
        {children}
        </div>
        <Footer />
        </body>
    </html>
    //the className='pb-20 pt-28' will make content in homepage.tsx fall under the nav bar
  )
}
