import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='bg-black  flex items-center justify-center h-screen '>
               <div className='mx-auto max-w-4xl flex-col flex space-y-1 items-center '>
                <h1 className=' text-5xl font-bricolage  text-white'>Not Found</h1>
                <Link href={"/"} className='text-gray-400 font-sans   hover:text-white hover:border-white border-b border-transparent'>Return to home page</Link>
               </div>
            </section>
        </>
    )
}

export default page