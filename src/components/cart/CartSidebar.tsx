import { Minus, Plus, X, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { CartItem } from '@/types'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemoveItem: (productId: string) => void
  onCheckout: () => void
}

export function CartSidebar({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout 
}: CartSidebarProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
  const deliveryFee = subtotal > 35 ? 0 : 4.99
  const total = subtotal + deliveryFee

  if (items.length === 0) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Your Cart</span>
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some delicious plant-based products to get started!</p>
            <Button onClick={onClose} className="bg-green-500 hover:bg-green-600">
              Continue Shopping
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Your Cart ({items.length})</span>
            </div>
          </SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-sm text-gray-500">${item.product.price.toFixed(2)} each</p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdateQuantity(item.productId, Math.max(0, item.quantity - 1))}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    
                    <span className="text-sm font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveItem(item.productId)}
                    className="p-1 text-gray-400 hover:text-red-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  
                  <span className="font-medium text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border-t pt-4 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span>Delivery Fee</span>
              <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
              </span>
            </div>
            
            {subtotal < 35 && (
              <p className="text-xs text-gray-500">
                Add ${(35 - subtotal).toFixed(2)} more for free delivery
              </p>
            )}
            
            <Separator />
            
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Delivery Time */}
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-800">
                🚚 Instant Delivery
              </span>
              <span className="text-sm text-green-600">30-45 min</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Button 
            onClick={onCheckout}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3"
            size="lg"
          >
            Proceed to Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}