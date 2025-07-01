"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, DollarSign, Clock, Heart } from "lucide-react"

interface OurValuesProps {
  values: Array<{
    title: string
    description: string
    icon: string
  }>
}

const getValueIcon = (iconType: string) => {
  switch (iconType) {
    case "quality":
      return Award
    case "pricing":
      return DollarSign
    case "speed":
      return Clock
    case "care":
      return Heart
    default:
      return Award
  }
}

const getValueColor = (index: number) => {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-orange-500 to-orange-600",
    "from-purple-500 to-purple-600",
  ]
  return colors[index % colors.length]
}

export function OurValues({ values }: OurValuesProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-gradient-to-r from-slate-900 to-blue-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            The principles that guide everything we do at Aquatech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = getValueIcon(value.icon)
            const colorClass = getValueColor(index)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full border-0 bg-white/10 backdrop-blur-sm text-white">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      className={`mx-auto mb-4 p-4 bg-gradient-to-r ${colorClass} rounded-full w-fit`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-blue-200 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
