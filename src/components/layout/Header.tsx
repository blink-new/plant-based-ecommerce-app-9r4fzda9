import { useState } from 'react'
import { Search, ShoppingCart, User, Menu, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface HeaderProps {
  cartItemCount: number
  onCartClick: () => void
  onSearchChange: (query: string) => void
  searchQuery: string
}

export function Header({ cartItemCount, onCartClick, onSearchChange, searchQuery }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="py-6">
                  <nav className="space-y-4">
                    <a href="#" className="block text-lg font-medium text-gray-900 hover:text-green-600">
                      Home
                    </a>
                    <a href="#" className="block text-lg font-medium text-gray-900 hover:text-green-600">
                      Products
                    </a>
                    <a href="#" className="block text-lg font-medium text-gray-900 hover:text-green-600">
                      Categories
                    </a>
                    <a href="#" className="block text-lg font-medium text-gray-900 hover:text-green-600">
                      About
                    </a>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GreenCart</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search plant-based products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Location */}
            <div className="hidden lg:flex items-center space-x-1 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>Deliver to 10001</span>
            </div>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="relative p-2"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-green-500 hover:bg-green-600"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* User */}
            <Button variant="ghost" size="sm" className="p-2">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search plant-based products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>
      </div>
    </header>
  )
}