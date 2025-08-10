import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      <div className="pt-16 md:pt-16 flex flex-col lg:flex-row flex-1">
        {/* Left Side - Hero Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-4 md:p-8 lg:p-16 min-h-[40vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%), url('/contact-hero-background.png')`,
            }}
          />
          <div className="relative text-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 md:mb-8 tracking-wider">
              CONTACT US
            </h1>
            <p className="text-gray-300 text-sm md:text-lg max-w-md mx-auto">
              Get in touch with us for reservations, inquiries, or special events.
            </p>
          </div>
        </div>

        {/* Right Side - Contact Info & Surprising Element */}
        <div className="lg:w-1/2 bg-black p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
            {/* Contact Information */}
            <div
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%), url('/contact-info-background.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4 md:mb-6 relative z-10">
                GET IN TOUCH
              </h2>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Address</p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      Kolkata, WB, 700001
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Phone</p>
                    <p className="text-gray-400 text-xs md:text-sm">+91 850XXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Email</p>
                    <p className="text-gray-400 text-xs md:text-sm">info@restaurant.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Hours</p>
                    <p className="text-gray-400 text-xs md:text-sm">Mon-Thu: 7AM-11PM, Fri-Sun: 7AM-Midnight</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Tasting Experience - The Surprising Element */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6 relative overflow-hidden">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4">
                VIRTUAL TASTING EXPERIENCE
              </h2>
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src="/virtual-tasting-experience.png"
                  alt="Virtual Tasting Experience"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                While you wait to dine with us, immerse yourself in a virtual tasting of our Chef's signature creation:
                the "Golden Truffle Risotto." Imagine the creamy Arborio rice infused with rare black truffles, finished
                with a delicate sprinkle of 24-karat gold flakes. A symphony of earthy aromas and rich, velvety textures
                awaits your senses.
              </p>
              <Link href="/menu">
                <Button className="w-full bg-amber-400 text-black hover:bg-amber-500 text-sm md:text-base">
                  Explore Our Full Menu
                </Button>
              </Link>
            </div>

            {/* Reservation Info */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4">RESERVATIONS</h2>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                For immediate assistance or special arrangements, please call us directly.
              </p>
              <Link href="/book-a-table">
                <Button className="bg-amber-400 text-black hover:bg-amber-500 text-sm md:text-base">
                  Book a Table Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
