
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import CartItem from "@/components/cart/CartItem";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { cart: cartItems, removeFromCart, updateQuantity } = useCart();
  
  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };
  
  const handleUpdateQuantity = (id: number, quantity: number) => {
    updateQuantity(id, quantity);
  };
  
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const getShipping = () => {
    // Free shipping over $100, otherwise $10
    return getSubtotal() > 100 ? 0 : 10;
  };
  
  const getTax = () => {
    // Calculate tax (e.g., 8%)
    return getSubtotal() * 0.08;
  };
  
  const getTotal = () => {
    return getSubtotal() + getShipping() + getTax();
  };
  
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    // Mock checkout functionality
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <h1 className="font-poppins text-3xl font-semibold text-gray-900 mb-2">
        Shopping Cart
      </h1>
      <Link to="/" className="flex items-center text-shop-primary hover:underline mb-8">
        <ChevronLeft size={16} className="mr-1" />
        Continue Shopping
      </Link>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border-b border-gray-200 pb-2 mb-4">
              <p className="text-gray-500">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            
            <div>
              {cartItems.map((item) => (
                <CartItem 
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.images[0]}
                  quantity={item.quantity}
                  size={item.selectedSize}
                  color={item.selectedColor}
                  onRemove={handleRemoveItem}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="bg-pastel-gray p-6 rounded-2xl self-start sticky top-24">
            <h2 className="font-poppins text-xl font-semibold mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${getSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {getShipping() === 0 ? 'Free' : `$${getShipping().toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span className="font-medium">${getTax().toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 pt-3 flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-semibold text-shop-primary">${getTotal().toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              onClick={handleCheckout}
              className="bg-shop-primary hover:bg-shop-secondary text-white w-full py-6 rounded-full mb-4"
            >
              Checkout
            </Button>
            
            <div className="p-4 border border-gray-300 rounded-xl bg-white">
              <h3 className="font-medium mb-2">We accept</h3>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-gray-300 rounded"></div>
                <div className="w-10 h-6 bg-gray-300 rounded"></div>
                <div className="w-10 h-6 bg-gray-300 rounded"></div>
                <div className="w-10 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="bg-pastel-light-purple p-6 rounded-full mb-6">
            <ShoppingCart size={48} className="text-shop-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/">
            <Button className="bg-shop-primary hover:bg-shop-secondary text-white px-8 py-6 rounded-full">
              Start Shopping
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
