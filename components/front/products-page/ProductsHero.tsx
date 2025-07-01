"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Shield, Smartphone, Laptop, Tablet } from "lucide-react"

export function ProductsHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-20 px-4 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
        >
          <Shield className="h-5 w-5" />
          <span className="text-sm font-medium">Quality Guaranteed • Warranty Included</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Quality Second-Hand
          <span className="block text-yellow-300">Devices</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto"
        >
          Affordable phones, computers, and tablets - all tested, guaranteed, and ready to use
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            View Warranty Info
          </Button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 left-10 opacity-20"
      >
        <Smartphone className="h-12 w-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-32 right-20 opacity-20"
      >
        <Laptop className="h-16 w-16" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-20 right-10 opacity-20"
      >
        <Tablet className="h-10 w-10" />
      </motion.div>
    </motion.section>
  )
}
