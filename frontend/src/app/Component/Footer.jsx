import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-black relative w-full grid gap-10  grid-cols-4 text-gray-400 p-10  '>
      {/* brand  */}
      <div className='flex gap-1 items-center '>
        {/* brand logo  */}
        <div className='relative w-20 h-20 '>
          <Image src={"/logo/logo-main-1.png"} fill sizes='800' alt='brand-logo' />
        </div>
        <div className='font-caveat text-4xl'>
          <h1>Goxz Wears</h1>
          <p className='text-sm'>Premium Wears with affordable price</p>
        </div>
      </div>

      {/* about us */}
      <nav className=' font-bricolage '>
        <ol className='space-y-2 flex flex-col' >
          <Link href={""} className=' hover:translate-x-3 cursor-pointer transition-transform ease-in-out duration-300 hover:border-b w-fit '>About Us</Link>
          <Link href={""} className=' hover:translate-x-3 cursor-pointer transition-transform ease-in-out duration-300 hover:border-b w-fit '>Refund and Returns Policy</Link >
          <Link href={""} className=' hover:translate-x-3 cursor-pointer transition-transform ease-in-out duration-300 hover:border-b w-fit '>Privacy Policy</Link >
          <Link href={""} className=' hover:translate-x-3 cursor-pointer transition-transform ease-in-out duration-300 hover:border-b w-fit '>Terms & Conditions</Link >
        </ol>
      </nav>
      {/* Contact us */}
      <nav className=' font-bricolage '>
        <ol className='space-y-2 flex flex-col '>
          <Link href={""} className=' hover:translate-x-3 cursor-pointer transition-transform ease-in-out duration-300 hover:border-b w-fit '>Contact Us</Link >
          <Link href={""} className=' hover:translate-x-3 cursor-pointer transition-transform ease-in-out duration-300 hover:border-b w-fit '>Store Locator</Link >
          <Link href={""} className=' hover:translate-x-3 cursor-pointer transition-transform ease-in-out duration-300 hover:border-b w-fit '>Partner</Link >
          <Link href={""} className=' hover:translate-x-3 cursor-pointer transition-transform ease-in-out duration-300 hover:border-b w-fit '>Fashion Tips</Link>
        </ol >

      </nav>
      {/* news letter */}
      <nav className=' font-bricolage flex flex-col gap-4 '>
        <div>
          <h1 className='text-xl font-black'>  Join our email list </h1>
          <p>Sign up for new arrivals, offers, and more!</p>
        </div>
        <div className='bg-white rounded-full flex w-full justify-between py-3 pr-5 px-2 group '  >
          <input type="email" required name="" id="" placeholder='Enter a email' className='outline-none w-full  bg-transparent font-caveat font-semibold placeholder:text-lg text-lg' />
          <MoveRight className='group-hover:text-gray-900 group-hover:translate-x-2 transition-transform duration-300 ease-in-out ' />
        </div>
      </nav>
      {/* overlay */}
      <div className='  m-auto justify-center col-span-full ' >
        <div className=' w-50 h-50 relative   overflow-hidden'>
          <Image src={"/logo/logo-ma-1.png"} fill alt="brand overlay"  className='w-full h-full' />
        </div>
        <div className='text-center text-xs  font-caveat'>
          <p>Terms & Conditions</p>
        </div>
      </div>

    </section>
  )
}

export default Footer