'use client'

import { CartContextProvider } from "@/hooks/useCart"

interface CartProviderProps{
    children:React.ReactNode
}
//import React from 'react'

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
     
  return (
      <CartContextProvider>
          { children}
    </CartContextProvider>
  )
}

export default CartProvider
