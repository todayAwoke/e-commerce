import { product } from '@/utils/product'
import Container from '@/app/components/Container'
import React from 'react'
import ProductDetails from '../ProductDetails'
import ListRating from './ListRating'
interface IParams{
    productId?: string
}
const Product = ({ params }:{params:IParams}) => {
  //console.log("params",params)
    
    return (
        <div>
            <Container>
                <ProductDetails product={product} />
                <div className='flex flex-col gap-4 mt-20'>
                    <div>Add Rating</div>
                    
                    <ListRating product={product}
                    />
                    
                </div>
            </Container>
    </div>
  )
}

export default Product