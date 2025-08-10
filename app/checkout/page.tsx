"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Minus, ArrowLeft } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const handleProceedToPayment = () => {
    if (state.items.length === 0) return
    setIsProcessing(true)

    // Simulate processing time
    setTimeout(() => {
      router.push("/payment")
      setIsProcessing(false)
    }, 1000)
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center p-4 pt-20 md:pt-16">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="text-4xl">🛒</div>
            </div>
            <h2 className="text-2xl font-light text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">Add some delicious items from our menu</p>
            <Link href="/menu">
              <Button className="bg-amber-400 text-black hover:bg-amber-500">Browse Menu</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      <div className="pt-16 md:pt-16 flex flex-col lg:flex-row flex-1">
        {/* Left Side - Hero Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-4 md:p-8 lg:p-16 min-h-[30vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%), url('/restaurant-checkout.png')`,
            }}
          />
          <div className="relative text-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 md:mb-8 tracking-wider">
              ORDER SUMMARY
            </h1>
            <p className="text-gray-300 text-sm md:text-lg max-w-md mx-auto">
              Review your order and proceed to payment
            </p>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="lg:w-1/2 bg-black p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Back Button */}
            <Link
              href="/menu"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Menu
            </Link>

            {/* Order Items */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4 md:mb-6">YOUR ORDER</h2>

              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-800/50 rounded-lg"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm md:text-base truncate">{item.name}</h3>
                      <p className="text-amber-400 font-medium text-sm md:text-base">₹{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 md:w-8 md:h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                      >
                        <Minus className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </button>
                      <span className="text-white font-medium w-6 md:w-8 text-center text-sm md:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 md:w-8 md:h-8 bg-amber-400 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                      >
                        <Plus className="w-3 h-3 md:w-4 md:h-4 text-black" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium text-sm md:text-base">₹{item.price * item.quantity}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300 text-xs md:text-sm mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Total */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6">
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between text-gray-300 text-sm md:text-base">
                  <span>Subtotal</span>
                  <span>₹{state.total}</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm md:text-base">
                  <span>Taxes & Fees</span>
                  <span>₹{Math.round(state.total * 0.18)}</span>
                </div>
                <div className="border-t border-gray-700 pt-2 md:pt-3">
                  <div className="flex justify-between text-white font-medium text-base md:text-lg">
                    <span>Total</span>
                    <span>₹{state.total + Math.round(state.total * 0.18)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6">
              <h3 className="text-lg font-medium text-white tracking-wider mb-4">DELIVERY DETAILS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  className="bg-gray-800 border-gray-700 text-white focus:border-amber-400"
                />
                <Input
                  placeholder="Phone Number"
                  className="bg-gray-800 border-gray-700 text-white focus:border-amber-400"
                />
                <Input
                  placeholder="Table Number"
                  className="bg-gray-800 border-gray-700 text-white focus:border-amber-400 md:col-span-2"
                />
              </div>
            </div>

            {/* Proceed Button */}
            <Button
              onClick={handleProceedToPayment}
              disabled={isProcessing}
              className="w-full bg-amber-400 text-black hover:bg-amber-500 py-3 md:py-4 text-base md:text-lg font-medium"
            >
              {isProcessing ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
