"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CarouselData } from '../data/Images'

const Carousel = () => {
    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? CarouselData.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrent((next) => (next == CarouselData.length - 1 ? 0 : next + 1))
    }

    useEffect(() => {
        const autoSlide = 
            setInterval(() => {
                setCurrent((next) => (next === CarouselData.length - 1 ? 0 : next + 1))
            }, 3000);
        
        return () => clearInterval(autoSlide)
    }, [CarouselData.length])
    return (
        <div className='relative group '>
            {/* left arrow */}
            <div onClick={prevSlide} className='md:visible invisible absolute left-0  opacity-0 group-hover:opacity-100 cursor-pointer rounded-full z-20 top-[40%]  bg-black/50 p-2 '>
                <div className='relative w-10 h-10 '>
                    <Image src={"https://img.icons8.com/liquid-glass/48/back.png"} alt='left-arrow' fill sizes='60' />
                </div>
            </div>

            {/* right arrow */}
            <div onClick={nextSlide} className='md:visible invisible opacity-0 group-hover:opacity-100 cursor-pointer absolute right-0 rounded-full z-20 top-[40%]  bg-black/50 p-2 '>
                <div className='relative w-10 h-10 '>
                    <Image src={"https://img.icons8.com/liquid-glass/48/forward.png"} alt='left-arrow' fill sizes='60' />
                </div>
            </div>
            {/* Carousel Image */}
            <div className='overflow-x-auto   flex justify-start gap-5   py-10  mx-auto  scrollbar-none  relative md:px-10 snap-mandatory snap-x '>

                {
                    CarouselData.map(({ image, link, name }, i) => (
                        <div key={i} style={{ transform: `translateX(-${current * 100}%) `, scrollBehavior: "smooth" }} className={` relative shrink-0  w-full h-130 md:rounded overflow-hidden snap-center  drop-shadow-2xl transition-all duration-300 ease-in-out drop-shadow-black/50 `}>
                            <Image src={`${image}`} alt={name} fill loading='eager' sizes='100' />
                        </div>
                    ))
                }

            </div >
            <div className='p-5 flex justify-center gap-2  rounded-full mx-auto'>
                {
                    CarouselData.map((_, i) => (
                        <button onClick={() => setCurrent(i)} key={i} className={`${current === i ? "w-5" : "w-2"} bg-white w-2 h-2 transition-all cursor-pointer duration-300 ease-in-out  rounded-full`}></button>

                    ))
                }
            </div>
        </div>
    )
}

export default Carousel