'use client'
import { formatPrice } from '@/utils/formatPrice';
import { truncateText } from '@/utils/truncateText';
import Image from 'next/image';
import React from 'react'
import {Rating} from '@mui/material';
import { useRouter } from 'next/navigation';

const ProductCard = () => { 
  const router=useRouter();
    
    return (
        <div
        
            className='
            col-span-1 
            cursor-pointer
            border-[1.2px]
            bg-blue-400
            rounded-sm
            p-2
            transition
            hover:scale-105
            text-center
            text-sm'>
          
          <div className="grid grid-cols-4  gap-3 ">
         <div className="col-span-1">
           <div className="grid grid-cols-1 gap-3">
  <div>
   
        <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded-md" />                
                        </div>
                        
  <div className='gap-3'>
  <div>
    <div className="aspect-w-5 aspect-h-4">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="w-24 h-16 p-3 mx-3"></iframe>
        </div>
    </div>
    <div className="aspect-w-5 aspect-h-4">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="w-24 h-16 p-3 mx-3"></iframe>
             </div>
         <div className="aspect-w-5 aspect-h-4">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID" className="w-24 h-16 p-3 mx-3"></iframe>
    </div>
                            
  </div>
</div>
            </div>
        <div className="col-span-2">
         <textarea className="w-full h-full p-2 border border-gray-300 rounded-md" placeholder="Vent here"></textarea>
                </div>
                {/* right side bare */}
          <div className="col-span-1">
        <div className="grid grid-cols-2 gap-4">
     
      <div className="col-span-2">
        <div className="grid grid-cols-1 gap-4">
         <div className="p-4 shadow rounded-md">
           
            <h3 className="text-lg font-bold mb-2">News Blog Title</h3>
          
            <p className="text-gray-800">News blog content goes here.</p>
          </div>
        
        
          <div className="p-4 shadow rounded-md">
            <h3 className="text-lg font-bold mb-2">News Blog Title</h3>
            <p className="text-gray-800">News blog content goes here.</p>
                </div>
                  <div className="p-4 shadow rounded-md">
            <h3 className="text-lg font-bold mb-2">News Blog Title</h3>
            <p className="text-gray-800">News blog content goes here.</p>
          </div>
        
         
        
        </div>
      </div>
    </div>
           </div>
     </div>
           </div>
     
  )
}

export default ProductCard
