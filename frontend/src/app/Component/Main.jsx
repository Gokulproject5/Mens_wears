import Image from 'next/image';
import React from 'react';
import { CarouselData, newArrivals } from '../data/Images';
import { Card } from './Card-component/Card';

export const Main = () => {
  return (
    <section className='mt-24'>
      {/* carousel */}
      <div className='relative group '>
        {/* left arrow */}
        <div className='absolute left-0  opacity-0 group-hover:opacity-100 rounded-full z-20 top-[40%]  bg-black/50 p-2 '>
          <div className='relative w-10 h-10 '>
            <Image src={"https://img.icons8.com/liquid-glass/48/back.png"} alt='left-arrow' fill sizes='60' />
          </div>
        </div>

        {/* right arrow */}
        <div className='opacity-0 group-hover:opacity-100 absolute right-0 rounded-full z-20 top-[40%]  bg-black/50 p-2 '>
          <div className='relative w-10 h-10 '>
            <Image src={"https://img.icons8.com/liquid-glass/48/forward.png"} alt='left-arrow' fill sizes='60' />
          </div>
        </div>
         {/* Carousel Image */}
        <div className='overflow-x-auto   flex justify-start gap-10   py-10  mx-auto  no-scrollbar snap-x snap-mandatory relative px-10'>

          {
            CarouselData.map(({ image, link, name }, i) => (
              <div key={i} className='relative shrink-0  max-w-200 w-full h-100 rounded-xl overflow-hidden snap-center drop-shadow-2xl drop-shadow-black/50'>
                <Image src={image} alt={name} fill sizes='100' />
              </div>
            ))
          }

        </div >
        <div className='p-5 flex justify-center gap-2  max-w-30 rounded-full mx-auto'>
           <div className='bg-white w-2 h-2  rounded-full'></div>
           <div className='bg-white w-2 h-2  rounded-full'></div>
           <div className='bg-white w-2 h-2  rounded-full'></div>
           <div className='bg-white w-2 h-2  rounded-full'></div>
        </div>
      </div>
      
       {/* New arrivals */}
       <div className='py-10 px-10 flex  flex-wrap gap-10  bg-white'>
         { 
         newArrivals.reverse().map(({image,title,price,offer_price},i)=>(
        <Card key={i} image={image} title={title} price={price} offer_price={offer_price} />
         ))
          
         }
       </div>
    </section>
  )
}
