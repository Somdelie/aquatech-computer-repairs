"use client"

import { motion } from "framer-motion"
import { Laptop, Smartphone, Cpu, Wrench, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    {
      icon: Laptop,
      title: "Laptop & Computer Repairs",
      description: "Professional diagnosis and repair of all laptop and desktop computer issues.",
      features: ["Hardware Diagnostics", "Software Troubleshooting", "Performance Optimization"],
    },
    {
      icon: Cpu,
      title: "Motherboard Replacements",
      description: "Expert motherboard replacement and repair services for all device types.",
      features: ["Component-Level Repair", "Quality Parts", "Warranty Included"],
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repairs",
      description: "Complete mobile phone repair services including LCD replacement and more.",
      features: ["Screen Replacement", "Battery Replacement", "Water Damage Repair"],
    },
    {
      icon: Wrench,
      title: "iPhone Specialist Services",
      description: "Specialized iPhone software and hardware repair services.",
      features: ["iOS Troubleshooting", "Hardware Repairs", "Data Recovery"],
    },
    // selling used devices
    {
      icon: Smartphone,
      title: "Used Device Sales",
      description: "High-quality used laptops, desktops, and mobile devices at affordable prices.",
      features: ["Certified Pre-Owned", "Warranty Available", "Affordable Prices"],
    },
    // selling used devices
    {
      icon: Laptop,
      title: "Used Laptop Sales",
      description: "Reliable used laptops with performance guarantees and warranty options.",
      features: ["Refurbished Laptops", "Performance Tested", "Budget-Friendly"],
    },
    // selling used devices
    {
      icon: Cpu,
      title: "Used Desktop Sales",
      description: "Quality used desktops for home and office use, fully tested and ready to go.",
      features: ["Desktop Computers", "Performance Tested", "Affordable Options"],
    },
    // selling used devices
    {
      icon: Wrench,
      title: "Used Mobile Device Sales",
      description: "Affordable used mobile phones with quality assurance and warranty options.",
      features: ["Smartphones", "Quality Checked", "Budget-Friendly"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple repairs to complex diagnostics, we provide comprehensive solutions for all your technology
            needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow transition-shadow duration-300 border-0 shadow border-t-2 border-teal-500 border-b-2">
                <CardContent className=" space-y-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
