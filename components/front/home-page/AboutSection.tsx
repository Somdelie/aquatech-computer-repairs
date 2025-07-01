"use client"

import { motion } from "framer-motion"
import { Star, CheckCircle, Clock, Shield, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function AboutSection() {

  const router = useRouter()

  return (
    <section id="about" className="py-10 bg-gray-50">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                We Provide Quality
                <span className="text-teal-600 block">Repair Services</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 25 years of experience in the technology repair industry, Aquatech Computer Repairs has built
                a reputation for excellence, reliability, and customer satisfaction.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Technicians</h4>
                  <p className="text-gray-600">Certified professionals with extensive experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Parts</h4>
                  <p className="text-gray-600">Only genuine and high-quality replacement parts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-teal-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Turnaround</h4>
                  <p className="text-gray-600">Quick and efficient repair services</p>
                </div>
              </div>
            </div>

            <Button className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => router.push("/about")}
            >Learn More About Us</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded border-t-2 border-rose-500 shadow">
                  <Clock className="w-8 h-8 text-teal-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">Fast Service</h4>
                  <p className="text-sm text-gray-600">24-hour turnaround on most repairs</p>
                </div>
                <div className="bg-white p-6 rounded border-t-2 border-rose-500 shadow">
                  <Shield className="w-8 h-8 text-teal-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">Warranty</h4>
                  <p className="text-sm text-gray-600">All repairs come with warranty</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded border-t-2 border-rose-500 shadow">
                  <Star className="w-8 h-8 text-teal-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">5-Star Rated</h4>
                  <p className="text-sm text-gray-600">Excellent customer reviews</p>
                </div>
                <div className="bg-white p-6 rounded border-t-2 border-rose-500 shadow">
                  <Wrench className="w-8 h-8 text-teal-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">Expert Care</h4>
                  <p className="text-sm text-gray-600">Professional diagnosis & repair</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
