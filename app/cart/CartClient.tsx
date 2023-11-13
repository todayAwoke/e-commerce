'use client'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link';
import React from 'react'
import { MdArrowBack } from 'react-icons/md';
import Heading from '../components/Heading';
import Button from '../components/Button';
import ItemContent from './ItemContent';
import { formatPrice } from '@/utils/formatPrice';


const CartClient = () => {
    const { cartProducts, handleClearCart ,cartTotalAmount} = useCart();
    //const { cartProducts } = useCart();
    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className='flex flex-col items-center '>
                <div className="text-2xl">Your cart is Empty</div>
                <div>
                    <Link href={"/"} className='text-slate-500 flex items-center gap-1 mt-2 '>
                        <MdArrowBack/>
                        <span>Start Shopping</span></Link>
                </div>
            </div>
           
        )
    }
    return (
        <div>
            <Heading title='shopping cart' center />
            <div className='grid grid-cols-5
            text-xs
            gap-4
            pb-2
            items-center
            mt-8'>
                <div className='col-span-2
                justify-self-start'>Product</div>
                <div className='justify-self-center'>Price</div>
                <div className='justify-self-center'>Quantity</div>
                <div className='justify-self-end'>Total</div>
            </div> 
            <div>
                {cartProducts && cartProducts.map((item) => {
                    return (
                       <ItemContent key={item.id}item={item} />
                  )  
                })}
            </div>
            <div>
                <div className='border-t-[1.5px]
                border-slate-200
                py-4
                flex justify-between gap-4'>
                    <div className='w-[90px]'>
                        <Button
                            lable='Clear Cart'
                            outline
                            small
                            onClick={() =>{handleClearCart()} }
                        /> 
                    </div>
                    <div className='text-sm flex flex-col gap-1 items-center'>
                        <div className='flex justify-between w-full text-base font-semibold'>
                                <span>Subtotal</span>
                            <span>{formatPrice(cartTotalAmount) }</span>
                            </div>
                            <p className='text-slate-500'>Taxes and Shipping calculate at checkout</p>
                        <Button
                            lable='checkout'
                            onClick={() =>
                            {}}
                        />
                        <Link href={"/"} className='text-slate-500 flex items-center gap-1 mt-2 '>
                        <MdArrowBack/>
                        <span>Continoue Shopping</span></Link>
                    </div>
                    </div>
                </div>
            </div>
  )
}

export default CartClient