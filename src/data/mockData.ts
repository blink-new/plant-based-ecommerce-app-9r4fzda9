import { Product, Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'fresh-produce',
    name: 'Fresh Produce',
    icon: 'apple',
    productCount: 24
  },
  {
    id: 'plant-proteins',
    name: 'Plant Proteins',
    icon: 'leaf',
    productCount: 18
  },
  {
    id: 'grains-cereals',
    name: 'Grains & Cereals',
    icon: 'wheat',
    productCount: 15
  },
  {
    id: 'plant-milk',
    name: 'Plant-Based Milk',
    icon: 'milk',
    productCount: 12
  },
  {
    id: 'snacks',
    name: 'Healthy Snacks',
    icon: 'cookie',
    productCount: 21
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: 'coffee',
    productCount: 16
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Spinach Bundle',
    description: 'Fresh organic spinach leaves, perfect for salads and smoothies. Rich in iron and vitamins.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
    category: 'fresh-produce',
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ['organic', 'leafy-greens', 'vitamin-rich'],
    nutritionInfo: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4
    }
  },
  {
    id: '2',
    name: 'Almond Protein Powder',
    description: 'Premium plant-based protein powder made from organic almonds. Perfect for post-workout nutrition.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
    category: 'plant-proteins',
    inStock: true,
    rating: 4.6,
    reviews: 89,
    tags: ['protein', 'almonds', 'post-workout'],
    nutritionInfo: {
      calories: 120,
      protein: 20,
      carbs: 4,
      fat: 3
    }
  },
  {
    id: '3',
    name: 'Organic Quinoa',
    description: 'Premium organic quinoa, a complete protein grain perfect for healthy meals.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    category: 'grains-cereals',
    inStock: true,
    rating: 4.7,
    reviews: 156,
    tags: ['quinoa', 'complete-protein', 'gluten-free'],
    nutritionInfo: {
      calories: 222,
      protein: 8,
      carbs: 39,
      fat: 3.6
    }
  },
  {
    id: '4',
    name: 'Oat Milk Original',
    description: 'Creamy and delicious oat milk, perfect for cereals, coffee, and baking.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop',
    category: 'plant-milk',
    inStock: true,
    rating: 4.5,
    reviews: 203,
    tags: ['oat-milk', 'dairy-free', 'creamy'],
    nutritionInfo: {
      calories: 80,
      protein: 3,
      carbs: 16,
      fat: 1.5
    }
  },
  {
    id: '5',
    name: 'Mixed Nuts Trail Mix',
    description: 'A perfect blend of almonds, walnuts, and cashews with dried fruits.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop',
    category: 'snacks',
    inStock: true,
    rating: 4.4,
    reviews: 78,
    tags: ['nuts', 'trail-mix', 'energy-boost'],
    nutritionInfo: {
      calories: 170,
      protein: 6,
      carbs: 8,
      fat: 14
    }
  },
  {
    id: '6',
    name: 'Green Smoothie Blend',
    description: 'Refreshing green smoothie with kale, spinach, apple, and ginger.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop',
    category: 'beverages',
    inStock: true,
    rating: 4.6,
    reviews: 92,
    tags: ['smoothie', 'green', 'detox'],
    nutritionInfo: {
      calories: 95,
      protein: 3,
      carbs: 22,
      fat: 0.5
    }
  },
  {
    id: '7',
    name: 'Organic Avocados (3 pack)',
    description: 'Fresh, ripe organic avocados perfect for toast, salads, and guacamole.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop',
    category: 'fresh-produce',
    inStock: true,
    rating: 4.9,
    reviews: 267,
    tags: ['avocado', 'healthy-fats', 'organic'],
    nutritionInfo: {
      calories: 234,
      protein: 3,
      carbs: 12,
      fat: 21
    }
  },
  {
    id: '8',
    name: 'Chickpea Pasta',
    description: 'High-protein pasta made from chickpeas. Gluten-free and delicious.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=400&fit=crop',
    category: 'plant-proteins',
    inStock: false,
    rating: 4.3,
    reviews: 145,
    tags: ['chickpea', 'pasta', 'gluten-free'],
    nutritionInfo: {
      calories: 190,
      protein: 14,
      carbs: 32,
      fat: 3.5
    }
  },
  {
    id: '9',
    name: 'Coconut Milk Yogurt',
    description: 'Creamy coconut milk yogurt with live probiotics. Dairy-free and delicious.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1571212515416-fca88c2d2c3e?w=400&h=400&fit=crop',
    category: 'plant-milk',
    inStock: true,
    rating: 4.2,
    reviews: 88,
    tags: ['coconut', 'yogurt', 'probiotics'],
    nutritionInfo: {
      calories: 70,
      protein: 1,
      carbs: 7,
      fat: 5
    }
  },
  {
    id: '10',
    name: 'Organic Brown Rice',
    description: 'Premium organic brown rice, a nutritious whole grain staple.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    category: 'grains-cereals',
    inStock: true,
    rating: 4.5,
    reviews: 112,
    tags: ['brown-rice', 'whole-grain', 'organic'],
    nutritionInfo: {
      calories: 216,
      protein: 5,
      carbs: 45,
      fat: 1.8
    }
  },
  {
    id: '11',
    name: 'Kale Chips Sea Salt',
    description: 'Crispy baked kale chips seasoned with sea salt. A healthy alternative to potato chips.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop',
    category: 'snacks',
    inStock: true,
    rating: 4.1,
    reviews: 67,
    tags: ['kale', 'chips', 'healthy-snack'],
    nutritionInfo: {
      calories: 50,
      protein: 2,
      carbs: 7,
      fat: 2.5
    }
  },
  {
    id: '12',
    name: 'Cold-Pressed Orange Juice',
    description: 'Fresh cold-pressed orange juice with no added sugars or preservatives.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=400&fit=crop',
    category: 'beverages',
    inStock: true,
    rating: 4.7,
    reviews: 134,
    tags: ['orange-juice', 'cold-pressed', 'vitamin-c'],
    nutritionInfo: {
      calories: 110,
      protein: 2,
      carbs: 26,
      fat: 0.5
    }
  }
]