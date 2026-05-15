import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../data/links'
import { Search, ShoppingBag, User2 } from 'lucide-react'



const Header = () => {
  
  return (
    
    <section className={` bg-black  sticky  transform-gpu transition-all duration-300 w-full ease-in-out top-0 md:py-6 py-3 z-100  md:px-10 flex items-center justify-center md:justify-between overflow-hidden `}>
      {/* Logo */}
      <div className='flex  items-center group gap-2 text-white'>
        <div className='relative w-10 h-10 overflow-hidden group-hover:scale-115 transform-gpu transition-transform duration-300 ease-in-out'>
          <Image src={'/logo/logo-main-1.png'} loading='eager' alt='Brand_logo' fill sizes='50' />
        </div>
        <h1 className=' font-serif  tracking-widest text-4xl  transform-gpu transition-transform duration-300 ease-in-out '>Wears</h1>
      </div>
      {/* Middle Nav Links */}
      <div className='hidden lg:flex gap-5 items-center font-bricolage text-md  text-gray-400'>
        {
          navLinks.map(({ title, link }, i) => (
            <Link key={i} href={link} className='scale-100 hover:scale-115 relative overflow-hidden group transition-transform duration-300  ease-out transform-gpu  p-1 hover:bg-white/90 hover:text-black/70' >
              <div className='group-hover:-translate-y-10  transform-gpu transition-transform duration-300 ease-in-out'>
                {title}</div>
              <div className='absolute top-1 opacity-0 group-hover:opacity-100 translate-y-10 text-black group-hover:translate-0 transform-gpu transition-transform duration-300 ease-in-out'>
                {title}</div>
            </Link>
          ))
        }

      </div>

      {/* Right Side nav */}
      <nav className='hidden md:flex items-center gap-4'>
        {/* Search Icon */}
        <div className='icons8-search relative w-7 h-7 cursor-pointer hover:scale-115 transition-transform duration-300 eas-in-out text-white' >
          <Search />
        </div>

        {/* Profile Icon */}
        <div className='relative  w-7 h-7 cursor-pointer hover:scale-115 transition-transform duration-300 eas-in-out text-white '>
          <User2 />

        </div>

        {/* Cart Icon  */}
        <div className='relative w-7 h-7 cursor-pointer hover:scale-115 transition-transform duration-300 ease-in-out '>
          <div className='absolute -right-2 -top-4 font-semibold rounded-full  text-center px-2 py-1 text-xs text-white bg-red-500 animate-pulse font-caveat'>
            <p>2</p>
          </div>
          <ShoppingBag className='text-white' />
        </div>
      </nav>
    </section>
  )
}

export default Header