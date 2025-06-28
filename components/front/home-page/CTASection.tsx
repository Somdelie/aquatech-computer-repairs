"use client"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
  Users,
  Award,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Form data:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Now",
      primary: "+1 (555) 123-4567",
      secondary: "Emergency: +1 (555) 987-6543",
      description: "Available 24/7",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      primary: "info@aquatech.com",
      secondary: "support@aquatech.com",
      description: "Response within 2 hours",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Our Store",
      primary: "123 Tech Street",
      secondary: "Digital City, DC 12345",
      description: "Free diagnostics in-store",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon-Fri: 8AM - 8PM",
      secondary: "Sat-Sun: 10AM - 6PM",
      description: "Extended weekend hours",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ]

  const services = [
    "Computer Repair",
    "Mobile Phone Repair",
    "Laptop Repair",
    "Tablet Repair",
    "Data Recovery",
    "Hardware Upgrade",
    "Software Installation",
    "Virus Removal",
    "Other",
  ]

  const features = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Trusted by thousands of customers",
    },
    {
      icon: Zap,
      title: "Quick Turnaround",
      description: "Most repairs completed within 24 hours",
    },
    {
      icon: Users,
      title: "Expert Technicians",
      description: "Certified professionals you can trust",
    },
  ]

  return (
    <section className="py-16 bg-white max-w-[90%] mx-auto">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Fix Your <span className="text-teal-600">Device?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact our expert technicians today for a free quote and professional repair services.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <Card
              key={method.title}
              className="border-0 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 ${method.lightColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <method.icon className={`w-8 h-8 ${method.textColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className={`font-semibold ${method.textColor} mb-1`}>{method.primary}</p>
                <p className="text-gray-600 text-sm mb-2">{method.secondary}</p>
                <p className="text-xs text-gray-500">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow border-0 border-t-2 border-teal-500">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours.</p>
              </CardHeader>
              <CardContent className="pt-0">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600">We'll get back to you within 2 hours during business hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          className={` ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-teal-500 focus:border-teal-500"}`}
                          placeholder="John Doe"
                          {...register("name", {
                            required: "Full name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                        />
                        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          className={` ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-teal-500 focus:border-teal-500"}`}
                          placeholder="+1 (555) 123-4567"
                          {...register("phone", {
                            pattern: {
                              value: /^[+]?[1-9][\d]{0,15}$/,
                              message: "Please enter a valid phone number",
                            },
                          })}
                        />
                        {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        className={` ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-teal-500 focus:border-teal-500"}`}
                        placeholder="john@example.com"
                        {...register("email", {
                          required: "Email address is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    <div className="w-full">
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <Controller
                        name="service"
                        control={control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger
                              className={` w-full ${errors.service ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-teal-500"}`}
                            >
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.service && <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Describe your device issue or repair needs in detail..."
                        className={`resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-teal-500 focus:border-teal-500"}`}
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                          },
                        })}
                      />
                      {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg disabled:opacity-50 transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <Card className="shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Why Choose AquaTech?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {features.map((feature, index) => (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white shadow border-0">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold mb-2">Emergency Repair?</h3>
                <p className="text-red-100 mb-4 text-sm">Device completely broken? We offer 24/7 emergency services.</p>
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            {/* <Card className="shadow border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
                    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
                    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
                    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-200 hover:bg-gray-200`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
