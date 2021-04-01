import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import Navbar from '@components/navbar'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className='grid grid-cols-dashboard'>
      <Head>
        <title>monggolean</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,700;1,500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar route={router} />
      <div></div>
      <div className='min-h-screen bg-white text-gray-800  dark:bg-gray-800 dark:text-white'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
