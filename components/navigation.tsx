"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { state } = useCart()

  const navLinks = [
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-8 z-50 w-fit">
        <div className="bg-black/90 backdrop-blur-md border border-gray-800 rounded-full px-2 py-2 flex items-center justify-center space-x-2 md:space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-amber-400 transition-colors md:hidden p-2 rounded-full"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/" className="flex items-center px-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">R</span>
              </div>
              <span className="text-2xl font-light text-white tracking-wider whitespace-nowrap bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                Restaurant
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  nav-link px-4 py-2 rounded-full transition-colors duration-300 whitespace-nowrap
                  ${pathname === link.href ? "bg-amber-400 text-black" : "text-white/80 hover:bg-gray-700/50"}
                `}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-a-table"
              className="nav-link px-4 py-2 rounded-full transition-colors duration-300 whitespace-nowrap bg-amber-400 text-black hover:bg-amber-500"
            >
              Book A Table
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs">R</span>
            </div>
            <span className="text-xl font-light text-white tracking-wider bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Restaurant
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {state.itemCount > 0 && (
              <Link href="/checkout" className="relative">
                <ShoppingCart className="h-6 w-6 text-white" />
                <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              </Link>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-amber-400 transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="bg-black/95 backdrop-blur-md p-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    block px-3 py-2 rounded-md nav-link
                    ${pathname === link.href ? "bg-amber-400 text-black" : "text-white/80 hover:bg-gray-700/50"}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-a-table"
                className="block px-3 py-2 rounded-md nav-link bg-amber-400 text-black hover:bg-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Book A Table
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
