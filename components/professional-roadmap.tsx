'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, Users, Building, PartyPopper, Code, Laptop, Trophy, GraduationCap } from 'lucide-react'

export function ProfessionalRoadmap() {
  const roadmapItems = [
    {
      icon: Users,
      title: "Department Orientation",
      date: "July 23 2025",
      description: "The journey of the Elite Club takes next step at 23rd July with its Department Orientation.",
      completed: true
    },
    {
      icon: Users,
      title: "Coordinator & Leads Meeting",
      date: "July 28 2025",
      description: "28th July Club Coordinator, Leads Meeting And Installation.",
      completed: true
    },
    {
      icon: Code,
      title: "Hands-on IoT & Cloud Computing",
      date: "August 21 2025",
      description: "21 Augest - Hands-on Session IoT & Cloud Computing By Dr. Riyaz Pathan & Mr. Salman Ansari.",
      completed: true
    },
    {
      icon: Building,
      title: "Industrial Visit",
      date: "September 27 2025",
      description: "Industrial Visit (details to be updated).",
      completed: false
    },
    {
      icon: Users,
      title: "Domain Specific Meeting",
      date: "August 30 2025",
      description: "30th Augest- Domain Specific Meeting For Students By Prof. Ismaeel Shaikh on 30/08/2025 (Online).",
      completed: true
    },
    {
      icon: Code,
      title: "WT Workshop",
      date: "September 16 2025",
      description: "16-17 sept WT 2 days Workshop (Abdul salam sir)",
      completed: true
    },
    {
      icon: Trophy,
      title: "Anxiety & Coping Skills Session",
      date: "September 15 2025",
      description: "15th Sept.- Anxiety & Coping Skills by Meraj Mir.",
      completed: true
    },
    {
      icon: GraduationCap,
      title: "AI/ML Expert Session",
      date: "October 4 2025",
      description: "4th Oct Experts Session On AI/ML",
      completed: false
    },
    {
      icon: GraduationCap,
      title: "Expert Talk on Software Testing",
      date: "October 18 2025",
      description: "18th Oct Expert Talk on Software Testing and Quality Assurance.",
      completed: false
    },
    {
      icon: GraduationCap,
      title: "Expert Talk on Phishing Attack",
      date: "October 2025",
      description: "Expert talk on Phishing attack by Mahekh",
      completed: false
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
                <CardContent className="border-2 border-green-500 p-4 rounded-lg bg-green-50">
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
