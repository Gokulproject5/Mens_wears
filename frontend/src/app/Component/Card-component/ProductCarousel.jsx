import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProductCarousel = () => {
    return (

        <div className='relative w-full max-w-xl mx-auto'>
            {/* Left Arrow Button */}
            <button className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-10 transition-colors shadow-md hover:scale-105'>
                <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full z-10 transition-colors shadow-md hover:scale-105'>
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Carousel Container */}
            <figure className='flex w-full overflow-x-auto  snap-x snap-mandatory scrollbar-none gap-4 pb-4'>
                {/* Carousel Item 1 */}
                <div className='relative shrink-0 w-full aspect-square rounded-lg overflow-hidden snap-center'>
                    <Image src="/new-arrivals/img1.png" fill sizes="(max-w-576px) 100vw, 576px" alt="New arrival item 1" priority />
                </div>

                {/* Carousel Item 2 */}
                <div className='relative shrink-0 w-full aspect-square rounded-lg overflow-hidden snap-center'>
                    <Image src="/new-arrivals/img1.png" fill sizes="(max-w-576px) 100vw, 576px" alt="New arrival item 2" />
                </div>

                {/* Carousel Item 3 */}
                <div className='relative shrink-0 w-full aspect-square rounded-lg overflow-hidden snap-center'>
                    <Image src="/new-arrivals/img1.png" fill sizes="(max-w-576px) 100vw, 576px" alt="New arrival item 3" />
                </div>
            </figure>
        </div>

    )
}

export default ProductCarousel