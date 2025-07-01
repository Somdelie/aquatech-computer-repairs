"use client"
import { ContactHero } from './ContactHero';
import { BusinessInfo } from './BusinessInfo';
import { LocationCards } from './LocationCards';
import { ContactForm } from './ContactForm';
import { EmergencyContact } from './EmergencyContact';
import { ContactFAQ } from './ContactFAQ';

interface ContactClientPageProps {
  data: {
    businessInfo: {
      name: string
      tagline: string
      description: string
    }
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
    socialMedia: Array<{
      platform: string
      url: string
      handle: string
    }>
    emergencyContact: {
      phone: string
      email: string
      description: string
    }
    faqs: Array<{
      question: string
      answer: string
    }>
  }
}

export default function ContactClientPage({ data }: ContactClientPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ContactHero businessInfo={data.businessInfo} />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ContactForm />
          <BusinessInfo locations={data.locations} socialMedia={data.socialMedia} />
        </div>

        <LocationCards locations={data.locations} />
        <EmergencyContact emergency={data.emergencyContact} />
        <ContactFAQ faqs={data.faqs} />
      </div>
    </main>
  )
}
