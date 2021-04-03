import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

import 'material-design-icons'
import 'tailwindcss/tailwind.css'

import Navbar from '@components/navbar'
import Progress from '@components/progress'
import { useEffect, useState } from 'react'

const webFonts = [
  'Arvo:ital,wght@0,400;0,700;1,400;1,700',
  'JetBrains+Mono:ital,wght@0,400;1,700',
  'Nova+Mono',
  'Poppins:ital,wght@0,400;0,700;1,400',
  'Material+Icons'
]

function MyApp({ Component, pageProps, router }: AppProps) {

  const [progress, setProgress] = useState(0)
  const [showProgress, setShowProgress] = useState(false)

  useEffect(() => {
    const start = () => {
      setShowProgress(true)
      setProgress(10)
    }

    const complete = () => {
      setShowProgress(false)
    }

    const error = () => {
      setShowProgress(false)
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', complete)
    router.events.on('routeChangeError', error)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', complete)
      router.events.off('routeChangeError', error)
    }

  }, [])

  useEffect(() => {
    if (!showProgress) {
      return
    }

    const cancel = setTimeout(() => setProgress(cur => cur + 10), 1000)
    return () => clearTimeout(cancel)
  }, [progress, showProgress])

  return (
    <div className='grid grid-cols-dashboard-sm lg:grid-cols-dashboard'>
      <Head>
        <title>monggolean</title>

        <link rel="preconnect"
            href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel='preload' as='style'
            href={`https://fonts.googleapis.com/css2?${webFonts.map(item => `family=${item}`).join('&')}&display=swap`} />
          <link rel='stylesheet' media='print'
            href={`https://fonts.googleapis.com/css2?${webFonts.map(item => `family=${item}`).join('&')}&display=swap`} onLoad="this.media = 'all'" />
      </Head>
      <Navbar route={router} />
      <div></div>
      <div className='min-h-screen bg-white text-gray-800  dark:bg-gray-800 dark:text-white'>
        <Component {...pageProps} />
      </div>
      <Progress show={showProgress} progress={progress} />
    </div>
  )
}

export default MyApp
