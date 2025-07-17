import { useState } from 'react'
import { Star, Plus, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  onProductClick: (product: Product) => void
}

export function ProductCard({ product, onAddToCart, onProductClick }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsAdding(true)
    await new Promise(resolve => setTimeout(resolve, 300)) // Simulate API call
    onAddToCart(product)
    setIsAdding(false)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-gray-200 hover:border-green-300"
      onClick={() => onProductClick(product)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          
          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white shadow-sm"
            onClick={handleWishlist}
          >
            <Heart 
              className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>

          {/* Stock Badge */}
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              Out of Stock
            </Badge>
          )}

          {/* Quick Add Button */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              className="bg-green-500 hover:bg-green-600 text-white shadow-lg"
            >
              {isAdding ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="space-y-2">
            {/* Category */}
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>

            {/* Name */}
            <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {product.rating} ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              
              {product.inStock && (
                <Button
                  size="sm"
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  {isAdding ? 'Adding...' : 'Add'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}