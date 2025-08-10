"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Clock, Search } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { menuItems, categories } from "@/data/menu-items"
import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function MenuPage() {
  const { state, dispatch } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const addToCart = (item: any) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      },
    })
  }

  const removeFromCart = (itemId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId })
  }

  const getItemQuantity = (itemId: string) => {
    const item = state.items.find((item) => item.id === itemId)
    return item ? item.quantity : 0
  }

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      <div className="pt-16 md:pt-16 flex flex-col lg:flex-row flex-1">
        {/* Left Side - Hero Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-4 md:p-8 lg:p-16 min-h-[40vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%), url('/gourmet-plating.png')`,
            }}
          />
          <div className="relative text-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 md:mb-8 tracking-wider">
              OUR MENU
            </h1>
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden">
              <img src="/signature-dish.png" alt="Signature Dish" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Right Side - Menu Items */}
        <div className="lg:w-1/2 bg-black p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white focus:border-amber-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === "all" ? "bg-amber-400 text-black" : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category.id
                      ? "bg-amber-400 text-black"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Menu Items by Category */}
            {categories.map((category) => {
              const categoryItems = filteredItems.filter((item) => item.category === category.id)
              if (categoryItems.length === 0 && selectedCategory !== "all") return null
              if (selectedCategory !== "all" && selectedCategory !== category.id) return null

              return (
                <div key={category.id} className="mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                      </div>
                      <h2 className="text-lg md:text-xl font-medium text-white tracking-wider">{category.name}</h2>
                    </div>
                    {category.time && (
                      <div className="flex items-center text-gray-400 text-xs md:text-sm">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {category.time}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    {categoryItems.map((item) => (
                      <div key={item.id} className="menu-item-card">
                        <div className="flex items-center space-x-3 md:space-x-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1 min-w-0 pr-2">
                                <h3 className="text-white font-medium flex items-center space-x-2 text-sm md:text-base">
                                  <span className="truncate">{item.name}</span>
                                  {item.dietary?.includes("vegetarian") && (
                                    <span className="text-green-400 text-xs flex-shrink-0">🌱</span>
                                  )}
                                  {item.dietary?.includes("vegan") && (
                                    <span className="text-green-400 text-xs flex-shrink-0">🌿</span>
                                  )}
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm mt-1 line-clamp-2">{item.description}</p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="text-white font-medium text-sm md:text-base">₹{item.price}</div>
                                <div className="flex items-center space-x-1 md:space-x-2 mt-2">
                                  {getItemQuantity(item.id) > 0 && (
                                    <>
                                      <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="w-5 h-5 md:w-6 md:h-6 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                                      >
                                        <Minus className="w-2 h-2 md:w-3 md:h-3 text-white" />
                                      </button>
                                      <span className="text-white text-xs md:text-sm w-4 md:w-6 text-center">
                                        {getItemQuantity(item.id)}
                                      </span>
                                    </>
                                  )}
                                  <button
                                    onClick={() => addToCart(item)}
                                    className="w-5 h-5 md:w-6 md:h-6 bg-amber-400 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                                  >
                                    <Plus className="w-2 h-2 md:w-3 md:h-3 text-black" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Floating Cart */}
      {state.itemCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-amber-400 text-black p-3 md:p-4 rounded-lg shadow-lg z-40">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-sm md:text-base">{state.itemCount} items</div>
              <div className="text-xs md:text-sm">₹{state.total}</div>
            </div>
            <Link href="/checkout">
              <Button className="bg-black text-amber-400 hover:bg-gray-800 text-sm md:text-base px-4 md:px-6">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
