"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, Mail } from "lucide-react"

interface EmergencyContactProps {
  emergency: {
    phone: string
    email: string
    description: string
  }
}

export function EmergencyContact({ emergency }: EmergencyContactProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <Card className="border-0 shadow-lg bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-l-red-500">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="p-4 bg-red-500 rounded-full"
            >
              <AlertTriangle className="h-8 w-8 text-white" />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-red-800 mb-2">Emergency Repair Service</h3>
              <p className="text-red-700 mb-4">{emergency.description}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="mr-2 h-4 w-4" />
                  {emergency.phone}
                </Button>
                <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                  <Mail className="mr-2 h-4 w-4" />
                  {emergency.email}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
