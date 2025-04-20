
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCarouselProps {
  images: string[];
  className?: string;
}

const ProductCarousel = ({ images, className }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-pastel-gray", className)}>
      <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img src={image} alt={`Product image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === index ? "bg-shop-primary w-6" : "bg-gray-300"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCarousel;
