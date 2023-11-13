
'use client';
import React, { use, useCallback, useEffect, useState } from 'react'
import { product } from '../../utils/product';
import Image from 'next/image';
import { Rating } from '@mui/material';
import SetColor from '../components/products/SetColor';
import SetQuantity from '../components/products/SetQuantity';
import Button from '../components/Button';
import ProductImage from '../components/products/ProductImage';
import { useCart } from '@/hooks/useCart';
import { MdCheckCircle } from 'react-icons/md';
import { useRouter } from 'next/navigation';
interface ProductDetailsProps{
    product:any
}
export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: selectedImgType,
    quantity: number,
    price: number
}
export type selectedImgType = {
    color: string,
    colorCode: string,
    image: string
}
const Horizontal = () => {
    return <hr className='w-[40% ]my-2' />;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [isProductInCart,setIsProductInCart] = useState(false)
    //call from useCart
    const {handleAddProductToCart,cartProducts}=useCart()
    
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price
    });

    //use router
    const router = useRouter();
//LOGIC to check if product is already in cart
    useEffect(() => {
        setIsProductInCart(false);
        if (cartProducts) {
            const existingIndex =
                cartProducts.findIndex((item) => item.id === product.id)    
            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
            }  
    },[cartProducts])
//end of useeffct fo product check
    const productRating =
        product.reviews.reduce((acc: number, item: any) =>
        item.rating + acc, 0) / product.reviews.length
    const handleColorSelect = useCallback(
        (value: selectedImgType) => {
            setCartProduct((prev) => {
                return { ...prev, selectedImg: value };
            });
        }, [cartProduct.selectedImg]);
    //Dclear quantity functions
    const handleQtyIncreas = useCallback(() => {
        if (cartProduct.quantity > 50) {
            return;}
        setCartProduct((prev) => {
            return {... prev,quantity:++prev.quantity}
        })
    },[cartProduct])
    const handleQtyDecreas = useCallback(() => {
        if (cartProduct.quantity <1) {
            return;
         }
        setCartProduct((prev) => {
            return {... prev,quantity:--prev.quantity}
        })
    },[cartProduct])
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12' >
          <div>
                <ProductImage
                    cartProduct={cartProduct}
                    product={product}
                    handleColorSelect={handleColorSelect}

                    
                />
          </div>
          <div className='flex flex-col gap-1 text-slate-500 text-sm'>
             <h2 className='text-3xl font-medium text-slate-700'> {product.name}</h2>
              <div className='flex flex-row items-center gap-2'>
                  <Rating value={productRating } readOnly/>
                    <div> { product.reviews.length}reviews</div>
                </div>
                <Horizontal/>
                <div className='text-justify'>{ product.description}</div>
                <Horizontal />
                <div className='text-justify'>
                    <span className='font-semibold'>Category:</span>{product.category}
                </div>
                <div className='text-justify'>
                    <span className='font-semibold'>Brand:</span>{product.brand}
                </div>
                <div
                    className={product.inStock ? 'text-teal-400 font-bold' : 'text-rose-400'}>
                    {product.inStock ? 'in stock' : 'Out of stock'}
                </div>
                <Horizontal />
                {isProductInCart ? <>
                    <p className='mb-2 flex items-center gap-1 text-slate-500'>
                        <MdCheckCircle size={20} className='text-teal-400' />
                        <span>Product added to cart</span>
                    </p>
                    <div className='max-w-[300px]'>
                        <Button lable='View Cart' outline onClick={() => {
                            router.push('/cart')
                        }} />
                    </div>
                </> : <>
                    <SetColor
                    cartProduct={cartProduct}
                    images={product.images}
                    handleColorSelect={handleColorSelect} 
                /> 
                <Horizontal />
                <SetQuantity
                    cartProduct={cartProduct}
                    handleQtyIncreas={handleQtyIncreas}
                    handelQtyDecreas={handleQtyDecreas}
                />
                <Horizontal />
                <div className="max-w-[300px]">
                    <Button 
                        lable='Add to cart'
                        // outline
                        // small
                        onClick={() => handleAddProductToCart(cartProduct)} 
                    />
                 </div>
                </>}
            </div>
      </div>
                
  )
}

export default ProductDetails