export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
  rating: number
  reviews: number
  tags: string[]
  nutritionInfo?: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
}

export interface CartItem {
  id: string
  productId: string
  product: Product
  quantity: number
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  addresses: Address[]
}

export interface Address {
  id: string
  name: string
  street: string
  city: string
  state: string
  zipCode: string
  isDefault: boolean
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled'
  deliveryAddress: Address
  estimatedDelivery: string
  actualDelivery?: string
  trackingInfo?: {
    driverName: string
    driverPhone: string
    currentLocation: {
      lat: number
      lng: number
    }
  }
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  icon: string
  productCount: number
}