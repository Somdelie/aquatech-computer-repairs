import type { Metadata } from "next"
import AboutClientPage from '@/components/front/about-page/AboutClientPage';

export const metadata: Metadata = {
  title: "About Us | Aquatech Computer Repairs",
  description:
    "Learn about Aquatech Computer Repairs - South Africa's trusted tech repair experts. Our story, mission, and commitment to quality service since our founding.",
  keywords: [
    "about aquatech",
    "computer repair company",
    "tech repair experts",
    "South Africa",
    "our story",
    "mission",
    "values",
  ],
}

// This would typically come from your database or CMS
const companyData = {
  foundedYear: 2018,
  totalRepairs: 15000,
  happyCustomers: 8500,
  teamMembers: 12,
  locations: 3,
  story: {
    title: "Our Story",
    content: `Founded in 2018, Aquatech Computer Repairs began as a small family business with a simple mission: 
    to provide honest, reliable, and affordable tech repair services to our community. What started as a single 
    technician working from a small workshop has grown into South Africa's most trusted repair service, 
    serving thousands of satisfied customers across multiple locations.`,
  },
  mission: {
    title: "Our Mission",
    content: `To make technology accessible and reliable for everyone by providing expert repair services, 
    honest pricing, and exceptional customer care. We believe that quality repairs shouldn't break the bank, 
    and every device deserves a second chance.`,
  },
  values: [
    {
      title: "Quality First",
      description: "We use only genuine parts and proven repair techniques to ensure lasting results.",
      icon: "quality",
    },
    {
      title: "Honest Pricing",
      description: "Transparent, upfront pricing with no hidden fees or surprise charges.",
      icon: "pricing",
    },
    {
      title: "Fast Service",
      description: "Most repairs completed within 24 hours without compromising quality.",
      icon: "speed",
    },
    {
      title: "Customer Care",
      description: "Friendly, knowledgeable support from consultation to completion.",
      icon: "care",
    },
  ],
  team: [
    {
      name: "Michael Thompson",
      role: "Founder & Lead Technician",
      experience: "8+ years",
      specialties: ["Motherboard Repair", "Data Recovery", "iOS Devices"],
      image: "/team/michael.jpg",
      bio: "Michael founded Aquatech with a vision to revolutionize tech repair in South Africa. His expertise in complex motherboard repairs has saved thousands of devices from the scrap heap.",
    },
    {
      name: "Sarah Ndlovu",
      role: "Senior Repair Specialist",
      experience: "6+ years",
      specialties: ["Android Devices", "Screen Replacement", "Water Damage"],
      image: "/team/sarah.jpg",
      bio: "Sarah's gentle touch and attention to detail make her our go-to specialist for delicate repairs. She's restored over 3,000 devices to perfect working condition.",
    },
    {
      name: "David Chen",
      role: "Computer Hardware Expert",
      experience: "7+ years",
      specialties: ["Desktop Builds", "Gaming PCs", "Performance Optimization"],
      image: "/team/david.jpg",
      bio: "David's passion for cutting-edge technology and custom builds has helped countless customers achieve their dream PC setups while staying within budget.",
    },
    {
      name: "Lisa Botha",
      role: "Customer Success Manager",
      experience: "4+ years",
      specialties: ["Customer Relations", "Quality Assurance", "Training"],
      image: "/team/lisa.jpg",
      bio: "Lisa ensures every customer leaves with a smile. Her dedication to service excellence has earned us a 4.9-star rating across all review platforms.",
    },
  ],
  certifications: [
    "Apple Authorized Service Provider",
    "Samsung Certified Repair Center",
    "CompTIA A+ Certified Technicians",
    "ISO 9001 Quality Management",
    "SABS Approved Service Center",
  ],
  timeline: [
    {
      year: "2018",
      title: "Humble Beginnings",
      description: "Started with one technician and a dream to provide honest tech repairs.",
    },
    {
      year: "2019",
      title: "First Expansion",
      description: "Opened our second location and hired our first team members.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online booking and contactless repair services during the pandemic.",
    },
    {
      year: "2021",
      title: "Certification Achievement",
      description: "Became an Apple Authorized Service Provider and Samsung Certified Center.",
    },
    {
      year: "2022",
      title: "Community Impact",
      description: "Reached 10,000 successful repairs and launched our e-waste recycling program.",
    },
    {
      year: "2023",
      title: "Innovation Focus",
      description: "Introduced advanced diagnostic tools and expanded to mobile repair services.",
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Opened third location and launched our comprehensive warranty program.",
    },
  ],
}

export default function AboutPage() {
  return <AboutClientPage data={companyData} />
}
