"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Wrench } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const services = [
    "Laptop Repairs",
    "Computer Repairs",
    "Motherboard Replacement",
    "iPhone Repairs",
    "LCD Replacement",
    "Second Hand Devices",
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className=" px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-2">
           <Image 
            src="/aqua-log-2.png"
            alt="Aquatech Computers Logo"
            width={100}
            height={100}
            className="h-52 w-52 object-contain"	
           />
          </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional computer and mobile device repair services with over 25 years of experience. Quality repairs
              you can trust.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-teal-400">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-teal-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300 text-sm">
                  <Link href="tel:+1234567890" className="hover:text-white transition-colors">
                    +27 69 772 3221
                  </Link>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300 text-sm">info@aquatechrepairs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300 text-sm">123 Tech Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300 text-sm">Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">© 2020 Aquatech Computer Repairs. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
