import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

import 'material-design-icons'
import 'tailwindcss/tailwind.css'

import Navbar from '@components/navbar'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className='grid grid-cols-dashboard-sm lg:grid-cols-dashboard'>
      <Head>
        <title>monggolean</title>
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
