
import { useState } from "react";
import { CartItem, cartItems as initialCart } from "@/data/mockData";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  
  const addToCart = (item: CartItem) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => 
        cartItem.id === item.id && 
        cartItem.selectedSize === item.selectedSize && 
        cartItem.selectedColor === item.selectedColor
    );
    
    if (existingItemIndex !== -1) {
      // If item exists, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
    } else {
      // Add new item to cart
      setCart([...cart, item]);
    }
  };
  
  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: number, quantity: number) => {
    setCart(
      cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
    clearCart,
  };
};
