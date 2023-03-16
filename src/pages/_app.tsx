import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='overflow-y-hidden h-screen flex mobile:flex-col mobile:justify-between desktop:flex-row font-PlayfairDisplay desktop:text-2xl mobile:text-sm'>
        <NavBar />
        <div className='overflow-y-scroll w-full p-3'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
