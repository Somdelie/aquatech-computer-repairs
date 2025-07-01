"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"

interface BusinessInfoProps {
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
  }>
  socialMedia: Array<{
    platform: string
    url: string
    handle: string
  }>
}

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return Facebook
    case "instagram":
      return Instagram
    case "twitter":
      return Twitter
    case "whatsapp":
      return MessageCircle
    default:
      return Mail
  }
}

export function BusinessInfo({ locations, socialMedia }: BusinessInfoProps) {
  const mainLocation = locations.find((loc) => loc.id === "main") || locations[0]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Quick Contact */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-2xl">Quick Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500 rounded-full">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">{mainLocation.phone}</p>
              <p className="text-sm text-muted-foreground">Main Store</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-full">
              <Mail className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">{mainLocation.email}</p>
              <p className="text-sm text-muted-foreground">General Inquiries</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500 rounded-full">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-semibold">{mainLocation.address}</p>
              <p className="text-sm text-muted-foreground">Visit Our Store</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Business Hours
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-medium">Monday - Friday</span>
            <Badge variant="outline">8:00 AM - 6:00 PM</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Saturday</span>
            <Badge variant="outline">9:00 AM - 4:00 PM</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Sunday</span>
            <Badge variant="secondary">Closed</Badge>
          </div>
          <div className="pt-3 border-t">
            <p className="text-sm text-muted-foreground">
              Emergency repairs available 24/7 for critical business systems
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {socialMedia.map((social, index) => {
              const IconComponent = getSocialIcon(social.platform)
              return (
                <Button key={index} variant="outline" className="justify-start bg-transparent" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <IconComponent className="mr-2 h-4 w-4" />
                    {social.platform}
                  </a>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Service Areas */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle>Service Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Badge className="mr-2 mb-2">Cape Town CBD</Badge>
            <Badge className="mr-2 mb-2">Stellenbosch</Badge>
            <Badge className="mr-2 mb-2">Paarl</Badge>
            <Badge className="mr-2 mb-2">Somerset West</Badge>
            <Badge className="mr-2 mb-2">Bellville</Badge>
            <Badge className="mr-2 mb-2">Goodwood</Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Mobile service available throughout the Western Cape</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
