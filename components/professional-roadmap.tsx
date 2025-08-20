'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, Users, Building, PartyPopper, Code, Laptop, Trophy, GraduationCap } from 'lucide-react'

export function ProfessionalRoadmap() {
  const roadmapItems = [
    {
      icon: Calendar,
      title: "Journey Begins",
      date: "September 2, 2024",
      description: "The journey of the Elite Club began under the Department of Electronics and Computer Science Engineering."
    },
    {
      icon: Users,
      title: "Engineer's Day Celebration",
      date: "September 15, 2024",
      description: "Engineers' Day celebration featuring competitions: Poster Making, Project Presentation, and Debate."
    },
    {
      icon: Building,
      title: "Industrial Visit",
      date: "September 27, 2024",
      description: "The Elite Club organized an industrial visit to Reliance Jio."
    },
    {
      icon: PartyPopper,
      title: "Fresher's Party",
      date: "October 5, 2024",
      description: "A vibrant Fresher's Party to welcome first-year students into the department."
    },
    {
      icon: Code,
      title: "Expert Session on DSA & WT",
      date: "October 2024",
      description: "Expert session on Data Structures and Algorithms (DSA) and Web Technologies (WT)."
    },
    {
      icon: Laptop,
      title: "Full Stack Bootcamp",
      date: "January 2025",
      description: "One-week bootcamp on full-stack development, covering web design, coding, and deployment."
    },
    {
      icon: Trophy,
      title: "1ST Mega Hackathon",
      date: "February 2025",
      description: "First mega event: a 15-day hackathon focusing on both hardware and software domains."
    },
    {
      icon: GraduationCap,
      title: "Expert Academics Lecture",
      date: "Upcoming Events 2025",
      description: "Expert lectures to assist students in academic excellence."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EFF6FF] to-[#FFFFFF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 inline-block px-6 py-3 rounded-full mx-auto block w-fit shadow-lg"
          style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}
        >
          ELITE CLUB ROADMAP 2024-25
        </motion.h1>
        
        <div className="relative">
          {/* Road Path */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 sm:w-2 rounded" style={{ backgroundColor: '#60A5FA' }} />
          
          {/* Timeline Items */}
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
            >
              {/* Dot on the timeline */}
              <div 
                className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full z-10 shadow-md" 
                style={{ backgroundColor: '#2563EB' }} 
              />
              
              {/* Content Card */}
              <Card className={`w-full sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'} hover:shadow-xl transition-shadow duration-300 bg-white`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full mr-4" style={{ backgroundColor: '#DBEAFE', padding: '0.75rem' }}>
                      <item.icon className="w-6 h-6" style={{ color: '#2563EB' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: '#1E3A8A' }}>{item.title}</h3>
                      <div className="text-sm font-medium" style={{ color: '#3B82F6' }}>{item.date}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
