import { Leaf, Apple, Wheat, Milk, Cookie, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Category } from '@/types'

interface CategorySidebarProps {
  categories: Category[]
  selectedCategory: string | null
  onCategorySelect: (categoryId: string | null) => void
}

const categoryIcons: Record<string, React.ReactNode> = {
  'fresh-produce': <Apple className="h-4 w-4" />,
  'plant-proteins': <Leaf className="h-4 w-4" />,
  'grains-cereals': <Wheat className="h-4 w-4" />,
  'plant-milk': <Milk className="h-4 w-4" />,
  'snacks': <Cookie className="h-4 w-4" />,
  'beverages': <Coffee className="h-4 w-4" />
}

export function CategorySidebar({ categories, selectedCategory, onCategorySelect }: CategorySidebarProps) {
  return (
    <Card className="h-fit">
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
        
        <div className="space-y-2">
          {/* All Products */}
          <Button
            variant={selectedCategory === null ? "default" : "ghost"}
            className={`w-full justify-start ${
              selectedCategory === null 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'hover:bg-gray-100'
            }`}
            onClick={() => onCategorySelect(null)}
          >
            <Leaf className="h-4 w-4 mr-2" />
            All Products
          </Button>

          {/* Category List */}
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className={`w-full justify-between ${
                selectedCategory === category.id 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <div className="flex items-center">
                {categoryIcons[category.id] || <Leaf className="h-4 w-4" />}
                <span className="ml-2 text-left">{category.name}</span>
              </div>
              <Badge 
                variant="secondary" 
                className={`text-xs ${
                  selectedCategory === category.id 
                    ? 'bg-green-400 text-green-900' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {category.productCount}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Featured Categories */}
        <div className="mt-6 pt-4 border-t">
          <h4 className="font-medium text-gray-900 mb-3 text-sm">Featured</h4>
          <div className="space-y-2">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-green-600">🌱</span>
                <div>
                  <p className="text-sm font-medium text-green-800">New Arrivals</p>
                  <p className="text-xs text-green-600">Fresh products weekly</p>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-orange-600">⚡</span>
                <div>
                  <p className="text-sm font-medium text-orange-800">Quick Delivery</p>
                  <p className="text-xs text-orange-600">30-45 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}