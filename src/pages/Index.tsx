
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { featuredProduct, products, categories } from "@/data/mockData";

const Index = () => {
  const [email, setEmail] = useState("");
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert(`Thanks for subscribing with ${email}!`);
    setEmail("");
  };
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] bg-pastel-light-purple flex items-center px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 z-10">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 mb-4">
              Effortless style for everyday moments
            </h1>
            <p className="text-gray-600 text-lg mb-6 max-w-md">
              Discover our collection of timeless pieces designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-shop-primary hover:bg-shop-secondary text-white px-8 py-6 rounded-full text-base">
                Shop New Arrivals
              </Button>
              <Link to="/product/1">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 rounded-full text-base border border-gray-200">
                  Featured Product
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={featuredProduct.images[0]} 
                alt="Featured product" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-shop-primary font-medium mb-1">FEATURED</p>
                    <h3 className="font-medium text-gray-900">{featuredProduct.name}</h3>
                    <p className="text-gray-500 text-sm">{featuredProduct.category}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-shop-primary">${featuredProduct.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-pastel-yellow rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-pastel-pink rounded-full opacity-50 blur-3xl"></div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-gray-900">
              Shop by Category
            </h2>
            <Link to="/" className="text-shop-primary font-medium flex items-center hover:underline">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to="/" 
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="text-white font-medium text-lg md:text-xl">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="py-16 px-4 md:px-8 bg-pastel-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-gray-900">
              New Arrivals
            </h2>
            <Link to="/" className="text-shop-primary font-medium flex items-center hover:underline">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.slice(0, 3).map((product) => (
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
      
      {/* Promo Banner / Newsletter */}
      <section className="py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute -right-40 top-0 w-96 h-96 bg-pastel-peach rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -left-40 bottom-0 w-96 h-96 bg-pastel-blue rounded-full opacity-30 blur-3xl"></div>
        
        <div className="max-w-3xl mx-auto relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for early access to new products, special offers, and styling tips.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shop-primary/20 focus:border-shop-primary"
            />
            <Button 
              type="submit" 
              className="bg-shop-primary hover:bg-shop-secondary text-white px-6 py-3 rounded-full"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
