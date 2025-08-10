"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Phone, Home } from "lucide-react"
import Link from "next/link"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const [orderNumber, setOrderNumber] = useState("")
  const [total, setTotal] = useState("")
  const [estimatedTime, setEstimatedTime] = useState("")

  useEffect(() => {
    const orderNum = searchParams.get("orderNumber") || ""
    const orderTotal = searchParams.get("total") || ""

    setOrderNumber(orderNum)
    setTotal(orderTotal)

    // Generate random estimated time between 15-45 minutes
    const time = Math.floor(Math.random() * 31) + 15
    setEstimatedTime(`${time} minutes`)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      <div className="pt-16 md:pt-16 flex flex-col lg:flex-row flex-1">
        {/* Left Side - Hero Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-4 md:p-8 lg:p-16 min-h-[40vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%), url('/order-confirmation-hero.png')`,
            }}
          />
          <div className="relative text-center z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 md:mb-8 tracking-wider">
              ORDER CONFIRMED
            </h1>
            <p className="text-gray-300 text-sm md:text-lg max-w-md mx-auto">
              Thank you for your order! Your delicious meal is being prepared.
            </p>
          </div>
        </div>

        {/* Right Side - Order Details */}
        <div className="lg:w-1/2 bg-black p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Order Success Message */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 md:p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h2 className="text-lg md:text-xl font-medium text-green-400">Payment Successful!</h2>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                Your order has been confirmed and payment has been processed successfully.
              </p>
            </div>

            {/* Order Details */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6">
              <h3 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4 md:mb-6">ORDER DETAILS</h3>

              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300 text-sm md:text-base">Order Number</span>
                  <span className="text-amber-400 font-mono font-bold text-sm md:text-base">{orderNumber}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300 text-sm md:text-base">Total Amount</span>
                  <span className="text-white font-bold text-base md:text-lg">₹{total}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300 text-sm md:text-base">Payment Status</span>
                  <span className="text-green-400 font-medium text-sm md:text-base">✓ Paid</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300 text-sm md:text-base">Order Status</span>
                  <span className="text-amber-400 font-medium text-sm md:text-base">🍳 Preparing</span>
                </div>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="bg-amber-400/10 border border-amber-400/20 rounded-lg p-4 md:p-6 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-6 h-6 text-amber-400" />
                <h3 className="text-lg font-medium text-amber-400">Estimated Preparation Time</h3>
              </div>
              <p className="text-white text-xl md:text-2xl font-bold">{estimatedTime}</p>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                We'll notify you when your order is ready for pickup/delivery
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6">
              <h3 className="text-lg font-medium text-white tracking-wider mb-4">NEED HELP?</h3>
              <div className="flex items-center space-x-3 text-gray-300 mb-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-sm md:text-base">Call us: +91 850XXXXXXX</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">
                For any queries regarding your order, please call us or visit our restaurant.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 md:space-y-4">
              <Link href="/menu" className="block">
                <Button className="w-full bg-amber-400 text-black hover:bg-amber-500 py-3 md:py-4 text-base md:text-lg font-medium">
                  Order Again
                </Button>
              </Link>

              <Link href="/" className="block">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-800 py-3 md:py-4 text-base md:text-lg bg-transparent"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Thank You Message */}
            <div className="text-center mt-6 md:mt-8 p-4 md:p-6 bg-gray-900/30 rounded-lg">
              <h4 className="text-lg md:text-xl font-light text-white mb-2">Thank You!</h4>
              <p className="text-gray-400 text-sm md:text-base">
                We appreciate your business and hope you enjoy your meal. Don't forget to rate your experience!
              </p>
              <div className="flex justify-center space-x-1 mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} className="text-2xl hover:text-amber-400 transition-colors">
                    ⭐
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
