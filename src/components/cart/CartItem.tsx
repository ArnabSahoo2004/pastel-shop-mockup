
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem = ({ id, name, price, image, quantity, size, color, onRemove, onUpdateQuantity }: CartItemProps) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  
  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    onUpdateQuantity(id, newQuantity);
  };
  
  const handleDecrease = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      onUpdateQuantity(id, newQuantity);
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-center py-6 border-b border-gray-200">
      <div className="flex-shrink-0">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 object-cover rounded-xl bg-gray-100"
          />
        </Link>
      </div>
      
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <Link to={`/product/${id}`} className="font-medium text-gray-800 hover:text-shop-primary">{name}</Link>
            {(size || color) && (
              <p className="text-sm text-gray-500 mt-1">
                {size && <span>Size: {size}</span>}
                {size && color && <span className="mx-2">|</span>}
                {color && <span>Color: {color}</span>}
              </p>
            )}
          </div>
          
          <div className="flex items-center mt-2 md:mt-0">
            <p className="font-semibold text-shop-primary">${price.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center border border-gray-200 rounded-full">
            <button 
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-shop-primary disabled:opacity-50"
              disabled={itemQuantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center">{itemQuantity}</span>
            <button 
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-shop-primary"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button 
            onClick={() => onRemove(id)}
            className="text-gray-400 hover:text-destructive transition-colors p-1"
            aria-label="Remove item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
