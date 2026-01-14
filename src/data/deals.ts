export interface Deal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  category: string;
  image: string;
  store: string;
  rating: number;
  featured: boolean;
  expiry: string;
  link: string;
}

export const deals: Deal[] = [
  {
    id: "1",
    title: "Sony WH-1000XM5 Kopfhörer",
    description: "Premium Noise-Cancelling Kopfhörer mit 30h Akku und kristallklarem Sound",
    originalPrice: 399.99,
    discountedPrice: 279.99,
    discount: 30,
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
    store: "Amazon",
    rating: 4.8,
    featured: true,
    expiry: "2024-12-31",
    link: "#"
  },
  {
    id: "2",
    title: "Apple iPad Air M2",
    description: "Das neueste iPad Air mit M2 Chip, 128GB Speicher und atemberaubendem Display",
    originalPrice: 749.00,
    discountedPrice: 599.00,
    discount: 20,
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    store: "MediaMarkt",
    rating: 4.9,
    featured: true,
    expiry: "2024-12-25",
    link: "#"
  },
  {
    id: "3",
    title: "Nike Air Max 270",
    description: "Stylische Sneaker mit maximaler Dämpfung für ultimativen Komfort",
    originalPrice: 149.99,
    discountedPrice: 89.99,
    discount: 40,
    category: "Mode",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    store: "Nike",
    rating: 4.6,
    featured: false,
    expiry: "2024-12-20",
    link: "#"
  },
  {
    id: "4",
    title: "Samsung 65\" OLED TV",
    description: "Brillantes 4K OLED Display mit HDR10+ und Dolby Atmos",
    originalPrice: 1799.00,
    discountedPrice: 1299.00,
    discount: 28,
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    store: "Saturn",
    rating: 4.7,
    featured: true,
    expiry: "2024-12-28",
    link: "#"
  },
  {
    id: "5",
    title: "PlayStation 5 Digital Edition",
    description: "Die ultimative Gaming-Konsole für Next-Gen Spiele",
    originalPrice: 449.99,
    discountedPrice: 399.99,
    discount: 11,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop",
    store: "GameStop",
    rating: 4.9,
    featured: true,
    expiry: "2024-12-30",
    link: "#"
  },
  {
    id: "6",
    title: "Dyson V15 Detect",
    description: "Kabelloser Staubsauger mit Lasererkennungstechnologie",
    originalPrice: 699.00,
    discountedPrice: 549.00,
    discount: 21,
    category: "Haushalt",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop",
    store: "Dyson",
    rating: 4.5,
    featured: false,
    expiry: "2024-12-22",
    link: "#"
  },
  {
    id: "7",
    title: "Levi's 501 Original Jeans",
    description: "Der Klassiker unter den Jeans - zeitloses Design",
    originalPrice: 99.95,
    discountedPrice: 59.95,
    discount: 40,
    category: "Mode",
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=300&fit=crop",
    store: "Levi's",
    rating: 4.4,
    featured: false,
    expiry: "2024-12-19",
    link: "#"
  },
  {
    id: "8",
    title: "DJI Mini 3 Pro Drohne",
    description: "Kompakte Drohne mit 4K Kamera und 34 Minuten Flugzeit",
    originalPrice: 909.00,
    discountedPrice: 699.00,
    discount: 23,
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
    store: "DJI",
    rating: 4.8,
    featured: true,
    expiry: "2024-12-27",
    link: "#"
  },
  {
    id: "9",
    title: "Bose SoundLink Flex",
    description: "Wasserdichter Bluetooth-Lautsprecher mit sattem Bass",
    originalPrice: 149.95,
    discountedPrice: 99.95,
    discount: 33,
    category: "Elektronik",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    store: "Bose",
    rating: 4.6,
    featured: false,
    expiry: "2024-12-24",
    link: "#"
  }
];

export const categories = [
  { name: "Alle", icon: "✨" },
  { name: "Elektronik", icon: "💻" },
  { name: "Mode", icon: "👕" },
  { name: "Gaming", icon: "🎮" },
  { name: "Haushalt", icon: "🏠" },
  { name: "Sport", icon: "⚽" }
];
