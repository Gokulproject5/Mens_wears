import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../data/links'
const Header = () => {
  return (
    <section className='bg-black fixed w-full top-0 py-6 z-100  px-10 flex items-center justify-between '>
      {/* Logo */}
      <div className='flex items-center group gap-2 text-white'>
        <div className='relative w-10 h-10 overflow-hidden group-hover:scale-115 transform-gpu transition-transform duration-300 ease-in-out'>
          <Image src={'/logo/logo-main-1.png'} loading='eager' alt='Brand_logo' fill sizes='50' />
        </div>
        <h1 className='font-semibold font-caveat tracking-widest text-4xl group-hover:scale-115 transform-gpu transition-transform duration-300 ease-in-out'>Goxz Wears</h1>
      </div>
      {/* Middle Nav Links */}
      <div className='flex gap-5 items-center font-bricolage text-lg  text-gray-400'>
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
      <nav className='flex items-center gap-4'>
        {/* Search Icon */}
        <div className='icons8-search relative w-7 h-7 cursor-pointer hover:scale-115 transition-transform duration-300 eas-in-out ' >
          <Image fill sizes='80' src="https://img.icons8.com/liquid-glass/48/search.png" alt="search" />
        </div>

        {/* Profile Icon */}
        <div className='relative  w-7 h-7 cursor-pointer hover:scale-115 transition-transform duration-300 eas-in-out '>
          <Image fill sizes='80' src="https://img.icons8.com/liquid-glass/48/user-male-circle.png" alt="user-male-circle" />

        </div>

        {/* Cart Icon  */}
        <div className='relative w-7 h-7 cursor-pointer hover:scale-115 transition-transform duration-300 eas-in-out '>
           <div className='absolute -right-2 -top-2 font-semibold bg-white -400 rounded-full w-5 h-5 text-center text-xs text-red-400 '>
            <p>2</p>
           </div>
          <Image src={"https://img.icons8.com/liquid-glass/48/shopping-bag.png"} fill alt='cart-icon' sizes='80' />
        </div>
      </nav>
    </section>
  )
}

export default Header