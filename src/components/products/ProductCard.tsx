
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  className?: string;
}

const ProductCard = ({ id, name, price, image, category, isNew = false, className }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className={cn("group block", className)}>
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-3">
        {isNew && (
          <span className="absolute top-2 left-2 bg-shop-primary text-white text-xs font-medium px-2 py-1 rounded-full z-10">
            New
          </span>
        )}
        <img 
          src={image} 
          alt={name}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-800 py-2 px-4 rounded-full font-medium text-sm transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          View Product
        </button>
      </div>
      <div className="px-1">
        <p className="text-xs text-gray-500 mb-1">{category}</p>
        <h3 className="font-medium text-base mb-1 text-gray-800">{name}</h3>
        <p className="font-semibold text-shop-primary">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
