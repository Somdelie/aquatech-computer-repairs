"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield } from "lucide-react"

interface CertificationsProps {
  certifications: string[]
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Accreditations</h2>
          <p className="text-xl text-muted-foreground">Recognized expertise and commitment to quality standards</p>
        </motion.div>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Badge
                    variant="secondary"
                    className="w-full p-3 text-sm font-medium bg-white/80 hover:bg-white transition-colors"
                  >
                    {cert}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
