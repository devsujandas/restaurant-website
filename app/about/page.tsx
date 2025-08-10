import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Star, Twitter, Instagram, Facebook, Youtube } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      <div className="pt-16 md:pt-16 flex flex-col lg:flex-row flex-1">
        {/* Left Side - Hero Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-4 md:p-8 lg:p-16 min-h-[40vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%), url('/about-hero-background.png')`, // Specific image
            }}
          />
          <div className="relative text-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 md:mb-8 tracking-wider">
              ABOUT US
            </h1>
            <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-xs md:max-w-md mx-auto">
              <img
                src="/fresh-ingredients-display.png" // Specific image
                alt="Fresh ingredients"
                className="w-full h-16 md:h-24 lg:h-32 object-cover rounded-lg"
              />
              <img
                src="/culinary-artistry-chef.png" // Specific image
                alt="Culinary art"
                className="w-full h-16 md:h-24 lg:h-32 object-cover rounded-lg"
              />
              <img
                src="/food-plating-art.png" // Specific image
                alt="Food presentation"
                className="w-full h-16 md:h-24 lg:h-32 object-cover rounded-lg"
              />
              <img
                src="/elegant-dining-atmosphere.png" // Specific image
                alt="Dining experience"
                className="w-full h-16 md:h-24 lg:h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 bg-black p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
            {/* History & Goals */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-medium text-white tracking-wider">OUR HISTORY & GOALS</h2>
                <img
                  src="/restaurant-interior-history.png" // Specific image
                  alt="Restaurant interior"
                  className="w-16 h-10 md:w-20 md:h-12 object-cover rounded"
                />
              </div>
              <div className="text-right mb-4">
                <h3 className="text-xl md:text-2xl font-light text-white">Restaurant</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                From humble beginnings to a renowned dining spot, Restaurant blends tradition and innovation to deliver
                luxurious, unforgettable meals with exceptional service.
              </p>
            </div>

            {/* Opening Hours */}
            <div
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%), url('/restaurant-clock-interior.png')`, // Specific image
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4 relative z-10">
                OPENING HOURS
              </h2>
              <div className="space-y-2 text-gray-300 text-sm md:text-base relative z-10">
                <div className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span>07:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Sunday:</span>
                  <span>07:00 AM - Midnight</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6 relative z-10">
                <Link href="/book-a-table">
                  <Button className="bg-amber-400 text-black hover:bg-amber-500 w-full lg:w-auto text-sm md:text-base">
                    Book a Table →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Food Philosophy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div>
                <img
                  src="/chef-cooking-philosophy.png" // Specific image
                  alt="Chef cooking"
                  className="w-full h-32 md:h-40 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/restaurant-ambiance-philosophy.png" // Specific image
                  alt="Restaurant ambiance"
                  className="w-full h-32 md:h-40 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4">OUR FOOD PHILOSOPHY</h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Restaurant crafts dishes with passion, blending fresh, seasonal ingredients and classic flavors with
                modern techniques for a refined, lasting dining experience.
              </p>
            </div>

            {/* Reviews */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4">REVIEW US ON</h2>
              <div className="flex items-center space-x-2 md:space-x-4 mb-4">
                <span className="text-xl md:text-2xl font-bold text-blue-500">G</span>
                <span className="text-xl md:text-2xl font-bold text-red-500">o</span>
                <span className="text-xl md:text-2xl font-bold text-yellow-500">o</span>
                <span className="text-xl md:text-2xl font-bold text-blue-500">g</span>
                <span className="text-xl md:text-2xl font-bold text-green-500">l</span>
                <span className="text-xl md:text-2xl font-bold text-red-500">e</span>
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-right">
                  <div className="text-lg md:text-2xl font-light text-white italic">Scan Me</div>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white p-2 rounded">
                  <img src="/google-review-qr-code.png" alt="QR Code" className="w-full h-full" />{" "}
                  {/* Specific image */}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4">SOCIAL MEDIA</h2>
              <div className="flex items-center justify-end space-x-4">
                <Twitter className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
