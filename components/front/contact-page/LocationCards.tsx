"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react"

interface LocationCardsProps {
  locations: Array<{
    id: string
    name: string
    type: string
    address: string
    phone: string
    email: string
    hours: {
      weekdays: string
      saturday: string
      sunday: string
    }
    services: string[]
    coordinates: { lat: number; lng: number } | null
  }>
}

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

export function LocationCards({ locations }: LocationCardsProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-16"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Multiple ways to reach us - visit our store, book mobile service, or shop online
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location, index) => (
          <motion.div key={location.id} variants={itemVariants} whileHover={{ scale: 1.02 }}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={index === 0 ? "default" : "secondary"}>{location.type}</Badge>
                  {location.coordinates && (
                    <Button variant="ghost" size="sm">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <CardTitle className="text-xl">{location.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <p className="text-sm">{location.address}</p>
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">{location.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">{location.email}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Hours</span>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1 ml-6">
                    <p>{location.hours.weekdays}</p>
                    <p>{location.hours.saturday}</p>
                    <p>{location.hours.sunday}</p>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <p className="text-sm font-medium mb-2">Services Available:</p>
                  <div className="flex flex-wrap gap-1">
                    {location.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <Phone className="mr-1 h-3 w-3" />
                    Call
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Mail className="mr-1 h-3 w-3" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
