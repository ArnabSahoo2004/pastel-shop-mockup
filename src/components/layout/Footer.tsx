
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-pastel-gray py-12 px-4 md:px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-4">pastel.</h3>
          <p className="text-gray-600 text-sm mb-4 max-w-xs">
            Modern e-commerce experience with a clean, minimal design focused on showcasing beautiful products.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-shop-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-shop-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-shop-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-base mb-3">Shop</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-shop-primary text-sm">All Products</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-shop-primary text-sm">New Arrivals</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-shop-primary text-sm">Best Sellers</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-shop-primary text-sm">Sale</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-base mb-3">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-shop-primary text-sm">About Us</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-shop-primary text-sm">Contact</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-shop-primary text-sm">Careers</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-shop-primary text-sm">Terms & Conditions</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-base mb-3">Newsletter</h4>
          <p className="text-gray-600 text-sm mb-4">Stay updated with our latest offers</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-3 py-2 rounded-l-md border-y border-l border-gray-300 focus:outline-none text-sm flex-1"
            />
            <button className="bg-shop-primary hover:bg-shop-secondary text-white px-3 py-2 rounded-r-md text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200">
        <p className="text-center text-gray-500 text-sm">
          © 2025 pastel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
