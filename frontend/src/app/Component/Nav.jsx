"use client"
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react'

const Nav = () => {
    const ref = usePathname();
    const show = ref.includes("")
    return (
        <section className={` ${show ? "md:flex hidden" : "hidden"}  bg-white w-full text-center py-3  items-center transform-gpu transition-transform duration-300 text-xs gap-2`}>
            <div className='w-full h-0.5 bg-black'></div>
            <div className='shrink-0'>
                <h1 className='font-bold shrink-0 font-caveat w-full'>⚡️ Fresh Drops Daily, Only at X wears ⚡️</h1>
            </div>
            <div className='w-full h-0.5 bg-black'></div>
        </section>
    )
}

export default Nav