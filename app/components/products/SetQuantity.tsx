'use client';
import { CartProductType } from '@/app/product/ProductDetails';
import React from 'react'
interface SetQtyProps{
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncreas: () => void;
    handelQtyDecreas: () => void;
}
//create separate properties for style
const btnStyles ='border-[1.2px] border-slate-300 px-2 rounded'

const SetQuantity: React.FC<SetQtyProps> = ({
    cartCounter,
    cartProduct,
    handleQtyIncreas,
    handelQtyDecreas
}) => {
  return (
      <div className='flex gap-8 items-center'>
          {cartCounter ? 'null' : <div className='font-semibold'>
             QAUNTITY: 
          </div>}
          <div className='flex gap-4 items-center text-base '>
              <button className={btnStyles} onClick={handelQtyDecreas} >-</button>
              <div>{cartProduct.quantity}</div>
              <button className={btnStyles} onClick={handleQtyIncreas}>+</button>
          </div>
      </div>
  )
}

export default SetQuantity