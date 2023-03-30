import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar'
import SocialMediaIcons from '@/components/SocialMediaIcons'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display ({ 
  subsets: ['latin'],
  weight: '400'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`overflow-y-hidden h-screen flex mobile:flex-col mobile:justify-between desktop:flex-row desktop:text-2xl mobile:text-sm ${playfair.className}`}>
        <NavBar />
        <div className='overflow-y-scroll w-full p-3'>
          <Component {...pageProps} />
        </div>
        <div className='desktop:hidden py-2'>
          <SocialMediaIcons />
        </div>
      </div>
    </>
  )
}
