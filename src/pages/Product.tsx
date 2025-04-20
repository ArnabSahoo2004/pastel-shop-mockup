
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ChevronLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import ProductCarousel from "@/components/products/ProductCarousel";
import ProductCard from "@/components/products/ProductCard";
import { products, featuredProduct } from "@/data/mockData";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id)) || featuredProduct;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedSize,
      selectedColor
    });
    alert(`Added ${quantity} ${product.name} to cart`);
  };
  
  const similarProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);
  
  return (
    <div className="flex flex-col">
      {/* Breadcrumbs */}
      <div className="py-4 px-4 md:px-8 bg-pastel-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-shop-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/" className="hover:text-shop-primary">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductCarousel 
              images={product.images} 
              className="sticky top-24 h-[500px] md:h-[600px]"
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            {product.isNew && (
              <div className="inline-block bg-shop-primary/10 text-shop-primary px-3 py-1 rounded-full text-sm font-medium mb-4 self-start">
                New Arrival
              </div>
            )}
            
            <h1 className="font-poppins text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 mb-4">
              {product.rating && (
                <>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={cn(
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviews?.length || 0} reviews)
                  </span>
                </>
              )}
            </div>
            
            <p className="text-2xl font-semibold text-shop-primary mb-6">
              ${product.price.toFixed(2)}
            </p>
            
            <p className="text-gray-600 mb-8">
              {product.description}
            </p>
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <p className="font-medium text-gray-800 mb-2">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={cn(
                        "px-4 py-2 rounded-full border text-sm font-medium",
                        selectedSize === size 
                          ? "border-shop-primary bg-shop-primary/10 text-shop-primary" 
                          : "border-gray-300 hover:border-gray-400"
                      )}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <p className="font-medium text-gray-800 mb-2">Color</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => {
                    const colorClass = 
                      color.toLowerCase() === "black" ? "bg-black" :
                      color.toLowerCase() === "white" ? "bg-white" :
                      color.toLowerCase() === "gray" ? "bg-gray-400" :
                      color.toLowerCase() === "brown" ? "bg-amber-800" :
                      color.toLowerCase() === "beige" ? "bg-amber-100" :
                      color.toLowerCase() === "blue" ? "bg-blue-500" :
                      color.toLowerCase() === "red" ? "bg-red-500" :
                      color.toLowerCase() === "green" ? "bg-green-500" :
                      color.toLowerCase() === "purple" ? "bg-purple-500" :
                      color.toLowerCase() === "pink" ? "bg-pink-500" :
                      "bg-gray-200";
                    
                    return (
                      <button
                        key={color}
                        aria-label={`Select ${color}`}
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center",
                          selectedColor === color 
                            ? "ring-2 ring-offset-2 ring-shop-primary" 
                            : ""
                        )}
                        onClick={() => setSelectedColor(color)}
                      >
                        <span className={`w-6 h-6 rounded-full ${colorClass} border border-gray-300`}></span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-8">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:text-shop-primary disabled:opacity-50"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:text-shop-primary"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="bg-shop-primary hover:bg-shop-secondary text-white px-8 py-6 rounded-full flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
            </div>
            
            {/* Product Details Tabs */}
            <Tabs defaultValue="description" className="w-full mt-4">
              <TabsList className="grid w-full grid-cols-3 bg-pastel-gray rounded-full h-12 p-1">
                <TabsTrigger value="description" className="rounded-full data-[state=active]:bg-white">
                  Description
                </TabsTrigger>
                <TabsTrigger value="details" className="rounded-full data-[state=active]:bg-white">
                  Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-full data-[state=active]:bg-white">
                  Reviews ({product.reviews?.length || 0})
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="pt-6">
                <p className="text-gray-600">
                  {product.description}
                </p>
              </TabsContent>
              
              <TabsContent value="details" className="pt-6">
                <ul className="space-y-2 text-gray-600">
                  <li>Category: {product.category}</li>
                  {product.sizes && <li>Available Sizes: {product.sizes.join(", ")}</li>}
                  {product.colors && <li>Available Colors: {product.colors.join(", ")}</li>}
                  <li>Product ID: {product.id}</li>
                </ul>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-6">
                {product.reviews && product.reviews.length > 0 ? (
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {review.avatar && (
                              <img 
                                src={review.avatar} 
                                alt={review.user} 
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            )}
                            <span className="font-medium">{review.user}</span>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        
                        <div className="flex items-center mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={cn(
                                i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              )}
                            />
                          ))}
                        </div>
                        
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Similar Products */}
      <section className="py-16 px-4 md:px-8 bg-pastel-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                category={product.category}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
