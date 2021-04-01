import Head from 'next/head'

export default function Home() {
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4 select-none'>
      <Head>
        <title>monggolean</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-8xl'>Hello!</h1>
      <p className='uppercase'>I do software engineering</p>
    </div>
  )
}
