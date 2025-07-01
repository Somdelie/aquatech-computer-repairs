import type { Metadata } from "next"
import ContactClientPage from "@/components/front/contact-page/ContactClientPage"

export const metadata: Metadata = {
  title: "Contact Us | Aquatech Computer Repairs",
  description:
    "Get in touch with Aquatech Computer Repairs. Visit our store, call us, or send a message. We're here to help with all your tech repair needs in South Africa.",
  keywords: [
    "contact aquatech",
    "computer repair contact",
    "tech support contact",
    "repair shop location",
    "South Africa",
    "phone number",
    "address",
  ],
}

// This would typically come from your database or CMS
const contactData = {
  businessInfo: {
    name: "Aquatech Computer Repairs",
    tagline: "Your Trusted Tech Repair Experts",
    description: "Professional repair services for phones, computers, and tablets with warranty guaranteed.",
  },
  locations: [
    {
      id: "main",
      name: "Main Store",
      type: "Primary Location",
      address: "123 Tech Street, Cape Town, 8001",
      phone: "+27 21 123 4567",
      email: "main@aquatech.co.za",
      hours: {
        weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
        saturday: "Saturday: 9:00 AM - 4:00 PM",
        sunday: "Sunday: Closed",
      },
      services: ["Walk-in Repairs", "Consultations", "Parts Sales"],
      coordinates: { lat: -33.9249, lng: 18.4241 },
    },
    {
      id: "mobile",
      name: "Mobile Service",
      type: "On-site Repairs",
      address: "Serving Greater Cape Town Area",
      phone: "+27 82 987 6543",
      email: "mobile@aquatech.co.za",
      hours: {
        weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
        saturday: "Saturday: 10:00 AM - 2:00 PM",
        sunday: "Sunday: Emergency Only",
      },
      services: ["Home Visits", "Office Repairs", "Emergency Service"],
      coordinates: null,
    },
    {
      id: "online",
      name: "Online Store",
      type: "E-commerce",
      address: "Nationwide Delivery",
      phone: "+27 21 123 4567",
      email: "online@aquatech.co.za",
      hours: {
        weekdays: "24/7 Online Ordering",
        saturday: "24/7 Online Ordering",
        sunday: "24/7 Online Ordering",
      },
      services: ["Device Sales", "Parts Ordering", "Repair Booking"],
      coordinates: null,
    },
  ],
  socialMedia: [
    { platform: "Facebook", url: "https://facebook.com/aquatech", handle: "@AquatechRepairs" },
    { platform: "Instagram", url: "https://instagram.com/aquatech", handle: "@aquatech_repairs" },
    { platform: "Twitter", url: "https://twitter.com/aquatech", handle: "@AquatechZA" },
    { platform: "WhatsApp", url: "https://wa.me/27211234567", handle: "+27 21 123 4567" },
  ],
  emergencyContact: {
    phone: "+27 82 911 TECH",
    email: "emergency@aquatech.co.za",
    description: "24/7 emergency repair service for critical business systems",
  },
  faqs: [
    {
      question: "What are your repair turnaround times?",
      answer:
        "Most repairs are completed within 24-48 hours. Complex repairs may take 3-5 business days. We'll provide an estimated timeframe when you drop off your device.",
    },
    {
      question: "Do you offer warranties on repairs?",
      answer:
        "Yes! All our repairs come with a 90-day warranty on parts and labor. If the same issue occurs within the warranty period, we'll fix it free of charge.",
    },
    {
      question: "Can you repair water-damaged devices?",
      answer:
        "We specialize in water damage recovery. Success rates vary depending on the extent of damage and how quickly you bring the device to us. The sooner, the better!",
    },
    {
      question: "Do you buy old devices?",
      answer:
        "Yes, we purchase used devices in working condition. We'll evaluate your device and provide a fair market quote. Trade-ins are also available for repair customers.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, all major credit cards, EFT, and mobile payments. Payment is due upon completion of repairs unless prior arrangements are made.",
    },
  ],
}

export default function ContactPage() {
  return <ContactClientPage data={contactData} />
}
