import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '@/components/NavBar'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='overflow-y-hidden h-screen flex flex-row font-PlayfairDisplay text-2xl'>
        <NavBar />
        <div className='overflow-y-scroll w-full p-3'>
          <Component {...pageProps} />
        </div>
      </div>
    </>

  )
}
