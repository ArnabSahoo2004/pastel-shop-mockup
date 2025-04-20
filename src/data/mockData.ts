
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  id: number;
  user: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export const featuredProduct: Product = {
  id: 1,
  name: "Classic Leather Crossbody Bag",
  price: 89.99,
  description: "Crafted from premium leather, this versatile crossbody bag combines timeless design with modern functionality. The perfect size for everyday essentials, featuring multiple compartments and an adjustable strap.",
  category: "Accessories",
  images: [
    "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1591348122449-48226a051266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ],
  sizes: ["Small", "Medium", "Large"],
  colors: ["Black", "Brown", "Beige"],
  isNew: true,
  rating: 4.8,
  reviews: [
    {
      id: 1,
      user: "Sarah J.",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      comment: "This bag is absolutely perfect! The leather is soft yet durable, and it has just the right amount of pockets.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      user: "Michael T.",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 4,
      comment: "Great quality and design. Would've given 5 stars if the strap was a bit longer.",
      date: "1 month ago"
    }
  ]
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Leather Crossbody Bag",
    price: 89.99,
    description: "Crafted from premium leather, this versatile crossbody bag combines timeless design with modern functionality.",
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591348122449-48226a051266?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    isNew: true,
  },
  {
    id: 2,
    name: "Minimalist White Sneakers",
    price: 129.99,
    description: "Clean, contemporary sneakers crafted from premium materials for everyday style and comfort.",
    category: "Footwear",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    price: 34.99,
    description: "Ultra-soft cotton t-shirt with a relaxed fit and clean design.",
    category: "Clothing",
    images: [
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    name: "Gold Hoop Earrings",
    price: 49.99,
    description: "Elegant gold-plated hoop earrings, perfect for everyday wear or special occasions.",
    category: "Jewelry",
    images: [
      "https://images.unsplash.com/photo-1631165561936-3f751039b4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618404526282-1bd8650695c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
    isNew: true,
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug",
    price: 24.99,
    description: "Handcrafted ceramic mug with minimalist design for your daily coffee ritual.",
    category: "Home",
    images: [
      "https://images.unsplash.com/photo-1570695528319-b001bceb96af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 6,
    name: "Cashmere Scarf",
    price: 79.99,
    description: "Luxuriously soft cashmere scarf in a versatile neutral tone.",
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1520491883496-4ce388c4b738?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578996953137-2ead498148b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export const categories = [
  {
    id: 1,
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const cartItems: CartItem[] = [
  {
    ...products[0],
    quantity: 1,
    selectedSize: "Medium",
    selectedColor: "Black",
  },
  {
    ...products[2],
    quantity: 2,
    selectedSize: "Large",
  },
  {
    ...products[4],
    quantity: 1,
  },
];
