import Image from 'next/image';
import React from 'react';
import { CarouselData, newArrivals } from '../data/Images';
import { Card } from './Card-component/Card';
import Carousel from './Carousel';

export const Main = () => {
  return (
    <section className='md:mt-10'>
      {/* carousel */}
       <Carousel />
      
       {/* New arrivals */}
       <div className='  overflow-x-auto  no-scrollbar  flex md:justify-center md:flex-wrap gap-10  bg-white '>
         { 
         newArrivals.map(({image,title,price,offer_price},i)=>(
        <Card   key={i} image={image} title={title} price={price} offer_price={offer_price} />
         ))
          
         }
       </div>
    </section>
  )
}
