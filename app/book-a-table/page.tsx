"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react"

export default function BookTablePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    partySize: "",
    specialRequests: "",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    // Required fields (email is optional)
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.date) newErrors.date = "Date is required"
    if (!formData.time) newErrors.time = "Time is required"
    if (!formData.partySize) newErrors.partySize = "Party size is required"

    // Phone validation (Indian format)
    if (formData.phone && !/^(\+91|91)?[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid Indian phone number"
    }

    // Email validation (if provided)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Form is valid, proceed with submission
      alert("Reservation request submitted successfully!")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        partySize: "",
        specialRequests: "",
      })
      setErrors({})
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      <div className="pt-16 md:pt-16 flex flex-col lg:flex-row flex-1">
        {/* Left Side - Hero Section */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-4 md:p-8 lg:p-16 min-h-[40vh] lg:min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%), url('/book-table-hero-background.png')`,
            }}
          />
          <div className="relative text-center z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-light text-white mb-4 md:mb-8 tracking-wider">
              BOOK A TABLE
            </h1>
            <p className="text-gray-300 text-sm md:text-lg max-w-md mx-auto">
              Reserve your perfect dining experience at Restaurant. Choose your preferred date, time, and party size.
            </p>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="lg:w-1/2 bg-black p-4 md:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
            {/* Reservation Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4 md:mb-6">
                MAKE A RESERVATION
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      <User className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                      First Name *
                    </label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 text-sm md:text-base ${
                        errors.firstName ? "border-red-500" : ""
                      }`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 text-sm md:text-base ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                      Email (Optional)
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 text-sm md:text-base ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 text-sm md:text-base ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      placeholder="+91 850XXXXXXX"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                      Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 text-sm md:text-base ${
                        errors.date ? "border-red-500" : ""
                      }`}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                      Time *
                    </label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger
                        className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 text-sm md:text-base ${
                          errors.time ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="7:00">7:00 PM</SelectItem>
                        <SelectItem value="7:30">7:30 PM</SelectItem>
                        <SelectItem value="8:00">8:00 PM</SelectItem>
                        <SelectItem value="8:30">8:30 PM</SelectItem>
                        <SelectItem value="9:00">9:00 PM</SelectItem>
                        <SelectItem value="9:30">9:30 PM</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                      <Users className="w-3 h-3 md:w-4 md:h-4 inline mr-2" />
                      Party Size *
                    </label>
                    <Select value={formData.partySize} onValueChange={(value) => handleInputChange("partySize", value)}>
                      <SelectTrigger
                        className={`bg-gray-800 border-gray-700 text-white focus:border-amber-400 text-sm md:text-base ${
                          errors.partySize ? "border-red-500" : ""
                        }`}
                      >
                        <SelectValue placeholder="Guests" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="7">7+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.partySize && <p className="text-red-400 text-xs mt-1">{errors.partySize}</p>}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2">Special Requests</label>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 text-white focus:border-amber-400 rounded-md p-3 min-h-[80px] md:min-h-[100px] resize-none text-sm md:text-base"
                    placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-400 text-black hover:bg-amber-500 py-3 md:py-4 text-base md:text-lg font-medium"
                >
                  Confirm Reservation
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium text-white tracking-wider mb-4">NEED HELP?</h2>
              <p className="text-gray-300 mb-4 text-sm md:text-base">
                For immediate assistance or special arrangements, please call us directly.
              </p>
              <div className="flex items-center space-x-3 text-amber-400">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium text-sm md:text-base">+91 850XXXXXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
