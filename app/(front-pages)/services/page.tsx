"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Laptop,
  Monitor,
  Wrench,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Cpu,
  HardDrive,
  Battery,
  Wifi,
  Camera,
  Volume2,
} from "lucide-react"

const services = [
  {
    id: "phone-repair",
    title: "Phone Repairs",
    icon: Smartphone,
    description: "Expert repair services for all smartphone brands and models",
    price: "From R150",
    duration: "30-60 mins",
    rating: 4.9,
    popular: true,
    features: [
      "Screen replacement",
      "Battery replacement",
      "Camera repair",
      "Charging port fix",
      "Water damage recovery",
      "Software troubleshooting",
    ],
    repairs: [
      { name: "Screen Replacement", price: "R350-R800", icon: Monitor },
      { name: "Battery Replacement", price: "R200-R450", icon: Battery },
      { name: "Camera Repair", price: "R250-R600", icon: Camera },
      { name: "Charging Port", price: "R180-R350", icon: Zap },
      { name: "Speaker/Mic Repair", price: "R150-R300", icon: Volume2 },
      { name: "Water Damage", price: "R300-R900", icon: Shield },
    ],
  },
  {
    id: "laptop-repair",
    title: "Laptop Repairs",
    icon: Laptop,
    description: "Professional laptop repair and maintenance services",
    price: "From R250",
    duration: "1-3 hours",
    rating: 4.8,
    popular: false,
    features: [
      "Hardware diagnostics",
      "Screen replacement",
      "Keyboard repair",
      "Hard drive recovery",
      "Virus removal",
      "Performance optimization",
    ],
    repairs: [
      { name: "Screen Replacement", price: "R800-R2500", icon: Monitor },
      { name: "Hard Drive Repair", price: "R400-R1200", icon: HardDrive },
      { name: "Motherboard Repair", price: "R600-R2000", icon: Cpu },
      { name: "Battery Replacement", price: "R350-R800", icon: Battery },
      { name: "Keyboard Repair", price: "R200-R600", icon: Wrench },
      { name: "WiFi/Network Fix", price: "R150-R400", icon: Wifi },
    ],
  },
  {
    id: "computer-repair",
    title: "Desktop Repairs",
    icon: Monitor,
    description: "Complete desktop computer repair and upgrade services",
    price: "From R200",
    duration: "1-4 hours",
    rating: 4.7,
    popular: false,
    features: [
      "Component replacement",
      "System upgrades",
      "Data recovery",
      "Virus removal",
      "Performance tuning",
      "Custom builds",
    ],
    repairs: [
      { name: "Motherboard Repair", price: "R500-R1800", icon: Cpu },
      { name: "Hard Drive Recovery", price: "R300-R1000", icon: HardDrive },
      { name: "Power Supply Fix", price: "R250-R700", icon: Zap },
      { name: "RAM Upgrade", price: "R200-R800", icon: Cpu },
      { name: "Graphics Card", price: "R400-R1500", icon: Monitor },
      { name: "System Cleanup", price: "R150-R350", icon: Shield },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <Wrench className="h-5 w-5" />
            <span className="text-sm font-medium">Professional Repair Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Expert Tech Repair
            <span className="block text-yellow-300">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            Fast, reliable, and affordable repairs for all your devices
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Clock className="mr-2 h-5 w-5" />
              Book Repair Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Get Free Quote
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
          className="absolute bottom-20 right-10 opacity-20"
        >
          <Laptop className="h-16 w-16" />
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-10"
      >
        <div className="max-w-[95%] mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional repair services with warranty and expert technicians
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div key={service.id} variants={cardVariants} whileHover="hover" className="relative">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-fit"
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </motion.div>

                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>

                    <div className="flex items-center justify-center gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{service.price}</div>
                        <div className="text-sm text-muted-foreground">Starting price</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{service.rating}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{service.duration}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">What we fix:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full group" onClick={() => setSelectedService(service.id)}>
                        View Pricing Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Detailed Pricing Modal/Section */}
      {selectedService && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const service = services.find((s) => s.id === selectedService)
              if (!service) return null

              return (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedService(null)}>
                      ✕
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.repairs.map((repair, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <repair.icon className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold">{repair.name}</h4>
                        </div>
                        <div className="text-lg font-bold text-green-600">{repair.price}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1">
                        <Clock className="mr-2 h-4 w-4" />
                        Book This Service
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Get Custom Quote
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </motion.section>
      )}

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Why Choose Aquatech?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Warranty Guaranteed", desc: "All repairs come with warranty protection" },
              { icon: Clock, title: "Fast Turnaround", desc: "Most repairs completed within 24 hours" },
              { icon: Star, title: "Expert Technicians", desc: "Certified professionals with years of experience" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mx-auto mb-4 p-4 bg-white/10 backdrop-blur-sm rounded-full w-fit"
                >
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
