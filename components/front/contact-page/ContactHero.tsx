"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

interface ContactHeroProps {
  businessInfo: {
    name: string
    tagline: string
    description: string
  }
}

export function ContactHero({ businessInfo }: ContactHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
        >
          <Phone className="h-5 w-5" />
          <span className="text-sm font-medium">Get In Touch With Us</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Contact
          <span className="block text-yellow-300">Aquatech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
        >
          {businessInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 left-10 opacity-20"
      >
        <MapPin className="h-12 w-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-20 right-10 opacity-20"
      >
        <Clock className="h-16 w-16" />
      </motion.div>
    </motion.section>
  )
}
