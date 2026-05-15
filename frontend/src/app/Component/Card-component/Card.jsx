import React from 'react'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

export const Card = ({ image, title, price, offer_price }) => {
    return (
        <div className='text-gray-800  shrink-0  relative font-bricolage cursor-pointer  max-w-xs flex flex-col  gap-5 '>

            <div className=' md:w-80 md:h-100 max-w-xl h-46 overflow-hidden relative group  rounded-xs '>
                <div className='absolute  group-hover:visible invisible bottom-2 z-10 right-2 bg-black/50 text-white flex items-center rounded-full p-2 transform-cpu transition-transform duration-300 gap-2 overflow-hidden '>
                    <ShoppingBag />
                </div>
                <Image src={image} fill alt={title} sizes="100"  className='w-full h-full' />
            </div>
            <div>
                <h1 className='font-bold text-lg'>{title}</h1>
                <p className='flex gap-4'>{offer_price} <span className='line-through text-gray-400 '>{price}</span></p>
            </div>
        </div>
    )
}
