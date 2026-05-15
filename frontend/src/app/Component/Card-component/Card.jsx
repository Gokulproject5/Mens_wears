import React from 'react'
import { newArrivals } from '@/app/data/Images'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

export const Card = ({image,title ,price ,offer_price}) => {
    return (
        <div className='text-gray-800 relative font-bricolage cursor-pointer  max-w-xs flex flex-col  gap-5 '>

            <div className='w-80 h-100 overflow-hidden relative group  rounded-xs '>
                <div className='absolute group-hover:visible invisible bottom-2 z-10 right-2 bg-black/50 rounded-full p-2 transform-cpu transition-transform duration-300 '>
                    <ShoppingBag className='text-white' />
                </div>
                <Image src={image} fill alt={title} size="100" className='w-full h-full' />
            </div>
            <div>
                <h1 className='font-bold text-lg'>{title}</h1>
                <p className='flex gap-4'>{offer_price} <span className='line-through text-gray-400 '>{price}</span></p>
            </div>
        </div>
    )
}
