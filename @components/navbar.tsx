import Link from 'next/link'
import Image from 'next/image'

import type { Router } from 'next/router'

export default function Navbar({ route }: { route: Router }) {

  const isActive = (path: string) => route.pathname == path ? 'bg-white bg-opacity-30 hover:bg-opacity-30' : ''

  return (
    <div className='fixed t-0 b-0 l-0 h-full w-dashboard-navbar bg-blue-600 dark:bg-blue-900 text-white flex flex-col justify-between px-6 py-4 select-none overflow-y-scroll'>
      <div className='flex flex-col items-center space-y-2 font-mono'>
        <Image src='/logo.svg' alt='logo' width={200} height={200} />
        <span className='text-xl'>monggolean</span>
      </div>

      <div className='flex flex-col space-y-2 pb-4 mt-12'>
        <Link href='/'><a className={`px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg ${isActive('/')}`}>Home</a></Link>
        <Link href='/blog'><a className={`px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg ${isActive('/blog')}`}>Blog</a></Link>
        <Link href='/work'><a className={`px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg ${isActive('/work')}`}>Works</a></Link>
        <Link href='/info'><a className={`px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg ${isActive('/info')}`}>Let's Work Together</a></Link>
        <div className='flex items-center px-2 mt-8'>
          <span className='m-2 text-xs'>Made in Lipa with ❤️ by</span>
          <a href='https://buslocollective.online' target='_blank' style={{lineHeight:0.5}}>
            <Image src='/buslo.svg' width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
