"use client"
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react'

const Nav = () => {
    const ref = usePathname();
    const show = ref.includes("")
    return (
        <section className={` ${show ? "md:flex hidden" : "hidden"}  bg-white w-full text-center py-3  items-center transform-gpu transition-transform duration-300 `}>
            <div className='w-full h-1 bg-black'></div>
            <h1 className='font-bold font-caveat w-full'>⚡️ Fresh Drops Daily, Only at X wears ⚡️</h1>
            <div className='w-full h-1 bg-black'></div>
        </section>
    )
}

export default Nav