"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, Smartphone, ArrowLeft } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PaymentPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const [selectedPayment, setSelectedPayment] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    upiId: "",
    paypalEmail: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const totalWithTax = state.total + Math.round(state.total * 0.18)

  const validatePaymentForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (selectedPayment === "card") {
      if (!paymentData.cardNumber.trim()) newErrors.cardNumber = "Card number is required"
      else if (!/^\d{16}$/.test(paymentData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Please enter a valid 16-digit card number"
      }

      if (!paymentData.expiryDate.trim()) newErrors.expiryDate = "Expiry date is required"
      else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentData.expiryDate)) {
        newErrors.expiryDate = "Please enter date in MM/YY format"
      }

      if (!paymentData.cvv.trim()) newErrors.cvv = "CVV is required"
      else if (!/^\d{3,4}$/.test(paymentData.cvv)) {
        newErrors.cvv = "Please enter a valid CVV"
      }

      if (!paymentData.cardholderName.trim()) newErrors.cardholderName = "Cardholder name is required"
    }

    if (selectedPayment === "upi") {
      if (!paymentData.upiId.trim()) newErrors.upiId = "UPI ID is required"
      else if (!/^[\w.-]+@[\w.-]+$/.test(paymentData.upiId)) {
        newErrors.upiId = "Please enter a valid UPI ID"
      }
    }

    if (selectedPayment === "paypal") {
      if (!paymentData.paypalEmail.trim()) newErrors.paypalEmail = "PayPal email is required"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paymentData.paypalEmail)) {
        newErrors.paypalEmail = "Please enter a valid email address"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method")
      return
    }

    if (!validatePaymentForm()) {
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      // Generate order number
      const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase()

      // Clear cart and redirect to confirmation
      dispatch({ type: "CLEAR_CART" })
      router.push(`/order-confirmation?orderNumber=${orderNumber}&total=${totalWithTax}`)
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Visa, Mastercard, RuPay",
    },
    {
      id: "upi",
      name: "UPI Payment",
      icon: <Smartphone className="w-6 h-6" />,
      description: "PhonePe, Google Pay, Paytm",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: (
        <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
          P
        </div>
      ),
      description: "Pay with PayPal account",
    },
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      <div className="pt-16 md:pt-16 flex flex-col lg:flex-row flex-1">
        {/* Left Side - Hero Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-4 md:p-8 lg:p-16 min-h-[30vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%), url('/payment-hero-background.png')`,
            }}
          />
          <div className="relative text-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 md:mb-8 tracking-wider">
              PAYMENT
            </h1>
            <p className="text-gray-300 text-sm md:text-lg max-w-md mx-auto">Choose your preferred payment method</p>
          </div>
        </div>

        {/* Right Side - Payment Options */}
        <div className="lg:w-1/2 bg-black p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Back Button */}
            <Link
              href="/checkout"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Checkout
            </Link>

            {/* Order Summary */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4">ORDER TOTAL</h2>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm md:text-base">{state.itemCount} items</span>
                <span className="text-amber-400 font-bold text-xl md:text-2xl">₹{totalWithTax}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4 md:mb-6">PAYMENT METHOD</h2>

              <div className="space-y-3 md:space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`p-4 md:p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPayment === method.id
                        ? "border-amber-400 bg-amber-400/10"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className={`${selectedPayment === method.id ? "text-amber-400" : "text-gray-400"}`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-medium text-sm md:text-base ${
                            selectedPayment === method.id ? "text-amber-400" : "text-white"
                          }`}
                        >
                          {method.name}
                        </h3>
                        <p className="text-gray-400 text-xs md:text-sm">{method.description}</p>
                      </div>
                      <div
                        className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 ${
                          selectedPayment === method.id ? "border-amber-400 bg-amber-400" : "border-gray-600"
                        }`}
                      >
                        {selectedPayment === method.id && (
                          <div className="w-full h-full rounded-full bg-amber-400 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Details Form */}
            {selectedPayment && (
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 mb-6">
                <h3 className="text-lg font-medium text-white tracking-wider mb-4">PAYMENT DETAILS</h3>

                {selectedPayment === "card" && (
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="Card Number"
                        value={paymentData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 ${
                          errors.cardNumber ? "border-red-500" : ""
                        }`}
                        maxLength={19}
                      />
                      {errors.cardNumber && <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="MM/YY"
                          value={paymentData.expiryDate}
                          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 ${
                            errors.expiryDate ? "border-red-500" : ""
                          }`}
                          maxLength={5}
                        />
                        {errors.expiryDate && <p className="text-red-400 text-xs mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <Input
                          placeholder="CVV"
                          value={paymentData.cvv}
                          onChange={(e) => handleInputChange("cvv", e.target.value)}
                          className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 ${
                            errors.cvv ? "border-red-500" : ""
                          }`}
                          maxLength={4}
                        />
                        {errors.cvv && <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                    <div>
                      <Input
                        placeholder="Cardholder Name"
                        value={paymentData.cardholderName}
                        onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                        className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 ${
                          errors.cardholderName ? "border-red-500" : ""
                        }`}
                      />
                      {errors.cardholderName && <p className="text-red-400 text-xs mt-1">{errors.cardholderName}</p>}
                    </div>
                  </div>
                )}

                {selectedPayment === "upi" && (
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="UPI ID (e.g., user@paytm)"
                        value={paymentData.upiId}
                        onChange={(e) => handleInputChange("upiId", e.target.value)}
                        className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 ${
                          errors.upiId ? "border-red-500" : ""
                        }`}
                      />
                      {errors.upiId && <p className="text-red-400 text-xs mt-1">{errors.upiId}</p>}
                    </div>
                    <div className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="w-32 h-32 mx-auto bg-white p-2 rounded-lg mb-4">
                        <img src="/upi-qr-code.png" alt="UPI QR Code" className="w-full h-full" />
                      </div>
                      <p className="text-gray-400 text-sm">Scan QR code with your UPI app</p>
                    </div>
                  </div>
                )}

                {selectedPayment === "paypal" && (
                  <div className="space-y-4">
                    <div>
                      <Input
                        placeholder="PayPal Email"
                        value={paymentData.paypalEmail}
                        onChange={(e) => handleInputChange("paypalEmail", e.target.value)}
                        className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 ${
                          errors.paypalEmail ? "border-red-500" : ""
                        }`}
                      />
                      {errors.paypalEmail && <p className="text-red-400 text-xs mt-1">{errors.paypalEmail}</p>}
                    </div>
                    <div className="text-center p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
                      <p className="text-blue-400 text-sm">You will be redirected to PayPal to complete payment</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Pay Button */}
            <Button
              onClick={handlePayment}
              disabled={!selectedPayment || isProcessing}
              className="w-full bg-amber-400 text-black hover:bg-amber-500 py-3 md:py-4 text-base md:text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing Payment...</span>
                </div>
              ) : (
                `Pay ₹${totalWithTax}`
              )}
            </Button>

            {/* Security Note */}
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs md:text-sm">🔒 Your payment information is secure and encrypted</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
