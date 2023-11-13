import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";

import { CartProductType } from "@/app/product/ProductDetails";
//import { product } from '../utils/product';

type CartContextType = {
    cartTotalQty: number;
    cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    handleCartQtyDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
  
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    // To see the cart items
    useEffect(() => {
        const cartItems: any = localStorage.getItem('eShopCartItems');
        const caProducts: CartProductType[] | null = JSON.parse(cartItems);
        setCartProducts(caProducts);
    }, []); // Add empty dependency array to run the effect only once
//add subtotal means total amount of cart with quantity
   
    useEffect(() => {
        const getTotals = () => {
            if (cartProducts) {
            const { total, qty } = cartProducts?.reduce((acc, item) => {
                const itemTotal = item.price * item.quantity
                acc.total += itemTotal
                acc.qty += item.quantity
                return acc;
            }, {
                total: 0,
                qty: 0
            })
                setCartTotalQty(qty);
                setCartTotalAmount(total);
        }
    }
        getTotals();
    },[cartProducts])
    // To add product into cart
    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }
            toast.success("Product added to cart");
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);
    //end add to cart
    // Remove item from cart
    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter(item => {
                return item.id !== product.id; // Fixed typo: "===" should be "!=="
            });
            setCartProducts(filteredProducts);
            toast.success('Product removed successfully');
            localStorage.setItem('eShopCartItems', JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);
    
    //end of remove function that used to remove product form cart

    //increas quantity of product form cart

    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        let updatedCart;
        if (product.quantity === 99) {
            return toast.error("Ooops! maximun reached")
        }
        if (cartProducts) {
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);
            if (existingIndex > -1) {
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
        }
    }, [cartProducts])
    
    //end of the inclease function
    //decrease quantity from cart 
    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        
        let updatedCart;
        if (product.quantity === 1) {
            return toast.error("Ooops! minmun reached")
        }
        if (cartProducts) {
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);
            if (existingIndex > -1) {
                updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
        }
    }, [cartProducts])
    //end  quantity decrease function 
    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem('eShopCartItems', JSON.
            stringify(null));

    }, [cartProducts])

    //end of reseat function
  const value = {
    cartTotalQty,
      cartProducts,
    cartTotalAmount,
    handleAddProductToCart,
    handleRemoveProductFromCart,
      handleCartQtyIncrease,
      handleCartQtyDecrease,
        handleClearCart
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};