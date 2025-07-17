import { useState, useEffect, useMemo } from 'react'
import { Header } from '@/components/layout/Header'
import { HeroSection } from '@/components/home/HeroSection'
import { CategorySidebar } from '@/components/categories/CategorySidebar'
import { ProductCard } from '@/components/products/ProductCard'
import { CartSidebar } from '@/components/cart/CartSidebar'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Filter } from 'lucide-react'
import { blink } from '@/blink/client'
import { Product, CartItem, User } from '@/types'
import { products, categories } from '@/data/mockData'

function App() {
  // Auth state
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // UI state
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('name')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Auth state management
  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  // Cart functions
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.productId === product.id)
      
      if (existingItem) {
        return prev.map(item =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prev, {
          id: `cart-${Date.now()}`,
          productId: product.id,
          product,
          quantity: 1
        }]
      }
    })
  }

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId)
      return
    }

    setCartItems(prev =>
      prev.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.productId !== productId))
  }

  const handleCheckout = () => {
    // TODO: Implement checkout flow
    alert('Checkout functionality coming soon!')
    setIsCartOpen(false)
  }

  const handleProductClick = (product: Product) => {
    // TODO: Navigate to product detail page
    console.log('Product clicked:', product)
  }

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading GreenCart...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">G</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to GreenCart</h1>
          <p className="text-gray-600 mb-6">
            Sign in to start shopping for fresh, organic plant-based products with instant delivery.
          </p>
          <Button 
            onClick={() => blink.auth.login()}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Sign In to Continue
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory 
                    ? categories.find(c => c.id === selectedCategory)?.name 
                    : 'All Products'
                  }
                </h2>
                <p className="text-gray-600">
                  {filteredProducts.length} products found
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="price-high">Price (High to Low)</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory(null)
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  )
}

export default App