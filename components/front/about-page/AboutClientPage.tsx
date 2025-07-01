"use client"

import { AboutHero } from './AboutHero';
import { Certifications } from './Certifications';
import { Timeline } from './Timeline';
import { TeamSection } from './TeamSection';
import { OurValues } from './OurValues';
import { OurStory } from './OurStory';
import { CompanyStats } from './CompanyStats';


interface AboutClientPageProps {
  data: {
    foundedYear: number
    totalRepairs: number
    happyCustomers: number
    teamMembers: number
    locations: number
    story: {
      title: string
      content: string
    }
    mission: {
      title: string
      content: string
    }
    values: Array<{
      title: string
      description: string
      icon: string
    }>
    team: Array<{
      name: string
      role: string
      experience: string
      specialties: string[]
      image: string
      bio: string
    }>
    certifications: string[]
    timeline: Array<{
      year: string
      title: string
      description: string
    }>
  }
}

export default function AboutClientPage({ data }: AboutClientPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <AboutHero />
      <CompanyStats stats={data} />
      <OurStory story={data.story} mission={data.mission} />
      <OurValues values={data.values} />
      <TeamSection team={data.team} />
      <Timeline timeline={data.timeline} />
      <Certifications certifications={data.certifications} />
    </main>
  )
}
