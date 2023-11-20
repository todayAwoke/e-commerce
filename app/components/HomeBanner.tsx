import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBanner = () => {
  return (
      <div className='relative  bg-transparent mb-8 mx-0'>
          <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row item-center justify-evenly'> 
             
              <div className='w-1/3 relative aspect-video '>
                  <Image
                      src='/banner.jpg'
                      alt='banner image'
                      fill
                      className='object-contain rounded-3xl'
                  />
              </div> 
               <div className='mb-8 md:mb-0 text-center  '>
                  <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Anonymity is first!</h1>
                  <p className='text-lg md:text-xl text-white mb-2'>Anonymity ensures privacy, freedom of expression, and protection from potential harm by concealing personal identities </p>
                  <h1 className='font-bold text-2xl md:text-2xl text-white  '>
                      <button className='btn  bg-black rounded-xl mx-4 my-2 p-3  '>
                           <Link href={'./login'}>login</Link>
                      </button>
                     
                  </h1>
              </div>
        </div>       
    </div>
  )
}

export default HomeBanner
