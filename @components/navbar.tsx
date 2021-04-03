import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo.svg'

import type { Router } from 'next/router'

export default function Navbar({ route }: { route: Router }) {

  const isActive = (path: string) => route.pathname == path ? 'bg-white bg-opacity-30 hover:bg-opacity-30' : ''

  return (
    <div className='fixed t-0 b-0 l-0 h-full w-dashboard-navbar-sm lg:w-dashboard-navbar bg-blue-600 dark:bg-blue-900 text-white flex flex-col justify-between px-2 lg:px-6 py-4 select-none overflow-y-scroll'>
      <div className='flex flex-col items-center space-y-2 font-mono'>
        <Logo style={{ maxWidth: '200px', maxHeight: '200px' }} />
        <span className='text-xl hidden lg:block cursor-default' style={{ fontFamily: 'nova mono' }}>monggolean</span>
      </div>

      <div className='flex flex-col space-y-2 pb-4 mt-12'>
        <Link href='/'>
          <a className={`lg:px-4 py-3 text-center lg:text-left hover:bg-white hover:bg-opacity-10 rounded-lg ${isActive('/')}`}>
            <div className='lg:hidden'><span className="material-icons">home</span></div>
            <span className='hidden lg:block'>Home</span></a></Link>
        <Link href='/blog'>
          <a className={`lg:px-4 py-3 text-center lg:text-left hover:bg-white hover:bg-opacity-10 rounded-lg ${isActive('/blog')}`}>
            <div className='lg:hidden'><span className="material-icons">dynamic_feed</span></div>
            <span className='hidden lg:block'>Blog</span></a></Link>
        <Link href='/info'>
          <a className={`lg:px-4 py-3 text-center lg:text-left hover:bg-white hover:bg-opacity-10 rounded-lg ${isActive('/info')}`}>
            <div className='lg:hidden'><span className="material-icons">volunteer_activism</span></div>
            <span className='hidden lg:block'>Let's Work Together</span></a></Link>
        <div className='hidden items-center px-2 mt-8 lg:flex'>
          <span className='m-2 text-xs'>Made in Lipa with <span className="material-icons" style={{ fontSize: '6pt' }}>favorite</span> by</span>
          <a href='https://buslocollective.online' target='_blank' style={{ lineHeight: 0.5 }}>
            <Image src='/buslo.svg' width={20} height={20} alt='Buslo Collective Icon' />
          </a>
        </div>
      </div>
    </div>
  )
}
