"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = [
    {
      id: 1,
      image: "/bg1.jpg",
      badge: "YOUR TRUSTED PARTNER",
      title: "Computer & Mobile",
      titleAccent: "Repair Services",
      description:
        "Expert computer, laptop, and mobile device repair services with over 25 years of experience. Fast, reliable, and affordable solutions for all your tech needs.",
    },
    {
      id: 2,
      image: "/bg2.jpg",
      badge: "PROFESSIONAL REPAIRS",
      title: "iPhone & Android",
      titleAccent: "Specialist Services",
      description:
        "Specialized mobile device repairs including screen replacement, battery replacement, and water damage recovery. Quality parts with warranty included.",
    },
    {
      id: 3,
      image: "/bg3.jpg",
      badge: "QUALITY GUARANTEED",
      title: "Motherboard &",
      titleAccent: "Hardware Repairs",
      description:
        "Component-level motherboard repairs and replacements. Our expert technicians handle the most complex hardware issues with precision and care.",
    },
  ]

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "10K+", label: "Devices Repaired" },
    { number: "98%", label: "Success Rate" },
    { number: "24hr", label: "Quick Turnaround" },
  ]

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [slides.length, isPaused])

  const nextSlide = () => {
    setIsPaused(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsPaused(false), 30000)
  }

  const prevSlide = () => {
    setIsPaused(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsPaused(false), 30000)
  }


  const goToSlide = (index: number): void => {
    setIsPaused(true)
    setCurrentSlide(index)
    setTimeout(() => setIsPaused(false), 10000)
  }

  return (
    <section
      className="relative min-h-screen pt-8 bg-gradient-to-br from-teal-100 via-white to-green-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.05),transparent_50%)]" />

      <div className=" px-4 sm:px-6 h-full min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12">
          {/* Content Side */}
          <div className="relative z-10 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-6 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  {slides[currentSlide].badge}
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="space-y-4"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {slides[currentSlide].title}
                    <span className="block text-teal-600">{slides[currentSlide].titleAccent}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                    {slides[currentSlide].description}
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white text-lg">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent px-8 text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </motion.div>

            
          
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[300px] md:h-[300px] lg:h-[400px] rounded flow-hidden">
              {/* Image Container with Navigation */}
              <div className="relative h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slides[currentSlide].image || "/placeholder.svg"}
                      alt={`${slides[currentSlide].title} ${slides[currentSlide].titleAccent}`}
                      fill
                      className="object-cover rounded"
                      priority
                    />
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <Button
                  onClick={prevSlide}
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 hover:text-white transition-colors z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  onClick={nextSlide}
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 hover:text-white transition-colors z-10"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  {slides.map((_, index) => (
                    <Button
                      variant="ghost"
                      size="icon"
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-teal-400 w-6" : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10"
      >
        <div className=" flex-col items-center space-y-2 hidden md:flex">
          <span className="text-sm font-medium text-gray-500 ">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>

            {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 gap-4 pt-6"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="text-left"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div> */}
    </section>
  )
}
