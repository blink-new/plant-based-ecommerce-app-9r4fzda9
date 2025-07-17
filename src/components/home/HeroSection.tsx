import { Clock, Truck, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-green-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh Plant-Based
                <span className="text-green-500 block">Delivered Fast</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Get organic, plant-based groceries delivered to your door in 30-45 minutes. 
                Fresh, healthy, and sustainable food for a better you and planet.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">30-45 min</p>
                  <p className="text-sm text-gray-500">Delivery</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">100% Organic</p>
                  <p className="text-sm text-gray-500">Products</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Free Delivery</p>
                  <p className="text-sm text-gray-500">Over $35</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
              >
                Shop Now
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop"
                alt="Fresh vegetables and fruits"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <Card className="absolute -top-4 -left-4 w-48 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🥬</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Fresh Produce</p>
                      <p className="text-sm text-green-600">Daily Harvest</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-4 -right-4 w-48 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Quick Delivery</p>
                      <p className="text-sm text-orange-600">30-45 minutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-green-200 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}