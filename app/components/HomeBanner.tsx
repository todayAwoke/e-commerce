import Image from 'next/image'
import React from 'react'

const HomeBanner = () => {
  return (
      <div className='relative bg-gradient-to-r from-sky-500 to-sky-800 mb-8'>
          <div className='mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row item-center justify-evenly'> 
              <div className='mb-8 md:mb-0 text-center  '>
                  <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Sale with Honest !</h1>
                  <p className='text-lg md:text-xl text-white mb-2'>Enjoy with discount </p>
                  <h1 className='font-bold text-2xl md:text-5xl text-yellow-500  '>get 25% Discout</h1>
              </div>
              <div className='w-1/3 relative aspect-video '>
                  <Image
                      src='/banner.jpg'
                      alt='banner image'
                      fill
                      className='object-contain'
                  />
              </div> 
        </div>       
    </div>
  )
}

export default HomeBanner
