
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="font-poppins font-semibold text-xl text-shop-primary">
            pastel.
          </Link>
          
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="font-medium text-sm hover:text-shop-primary transition-colors">
                Home
              </Link>
              <Link to="/product/1" className="font-medium text-sm hover:text-shop-primary transition-colors">
                Shop
              </Link>
              <Link to="/" className="font-medium text-sm hover:text-shop-primary transition-colors">
                New Arrivals
              </Link>
              <Link to="/" className="font-medium text-sm hover:text-shop-primary transition-colors">
                About
              </Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className="p-2 rounded-full hover:bg-pastel-light-purple transition-colors"
            aria-label="Search"
          >
            <Search size={20} className="text-gray-600" />
          </button>
          
          <Link to="/cart">
            <button 
              className="p-2 rounded-full hover:bg-pastel-light-purple transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-shop-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </button>
          </Link>
          
          {isMobile && (
            <button
              className="p-2 md:hidden rounded-full hover:bg-pastel-light-purple transition-colors"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <Menu size={20} className="text-gray-600" />
            </button>
          )}
          
          {!isMobile && (
            <Button className="bg-shop-primary hover:bg-shop-secondary ml-4">
              Sign In
            </Button>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 pt-20 px-6 transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col gap-6">
          <Link 
            to="/" 
            className="font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/product/1" 
            className="font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            to="/" 
            className="font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            New Arrivals
          </Link>
          <Link 
            to="/" 
            className="font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Button className="bg-shop-primary hover:bg-shop-secondary mt-4 w-full">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
