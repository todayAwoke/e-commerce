'use client';
import { formatPrice } from '@/utils/formatPrice';
import { CartProductType } from '../product/ProductDetails'
import Link from 'next/link';
import { truncateText } from '@/utils/truncateText';
import Image from 'next/image';
import SetQuantity from '../components/products/SetQuantity';
import { useCart } from '@/hooks/useCart';
import Sidebar from './Sidebar';

const ItemContent= ({ }) => {
    //uses useCart functions to this page
   
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
   
        <p>profle</p>            
        </div>
                    
</div>
            </div>
               <div className="col-span-2">
                   <div className='flex-row gap-3'>
                   <p>type new vent</p>
                   <textarea className="w-100 h-100 p-2 border border-gray-300 rounded-md" placeholder="Vent here"></textarea>
                   
                   </div>
                   <div><button className='bg-black text-white rounded-2xl m-5 p-3' >Release</button></div>
                   </div>
                {/* right side bare */}
          <div className="col-span-1">
        
        
        
          <Sidebar/>
        
         
        
       
           </div>
     </div>
</div>
     
  )
}

export default ItemContent