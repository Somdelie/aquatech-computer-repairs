"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Users, Heart, MapPin, Calendar } from "lucide-react"

interface CompanyStatsProps {
  stats: {
    foundedYear: number
    totalRepairs: number
    happyCustomers: number
    teamMembers: number
    locations: number
  }
}

export function CompanyStats({ stats }: CompanyStatsProps) {
  const statsData = [
    {
      icon: Calendar,
      value: `${new Date().getFullYear() - stats.foundedYear}+`,
      label: "Years of Excellence",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      value: `${(stats.totalRepairs / 1000).toFixed(0)}K+`,
      label: "Successful Repairs",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Heart,
      value: `${(stats.happyCustomers / 1000).toFixed(1)}K+`,
      label: "Happy Customers",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Users,
      value: `${stats.teamMembers}+`,
      label: "Expert Technicians",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      value: `${stats.locations}`,
      label: "Service Locations",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 -mt-10 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    className={`mx-auto mb-4 p-3 bg-gradient-to-r ${stat.color} rounded-full w-fit`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
