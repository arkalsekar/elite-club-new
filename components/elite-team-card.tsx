'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type TeamMember = {
  name: string
  designation: string
  image: string
}

type TeamGeneration = {
  [key: string]: TeamMember[]
}

export function EliteTeamCardComponent() {
  const [teamMembers] = useState<TeamGeneration>({
    "Gen-0": [
      { name: 'Aqsa Shah', designation: 'President', image: '/assets/member/aqsa.jpeg' },
      { name: 'Mudassir', designation: 'Technical Lead', image: '/assets/member/1.png' },
      { name: 'Anish', designation: '', image: '/assets/member/anish.png' },
      { name: 'Yamini Jadav', designation: 'Finance Lead', image: '/assets/member/yamini.jpeg' },
      { name: 'Faizan', designation: 'Finance Lead', image: '/assets/member/faizan.jpeg' },
      { name: 'Sayyad Umar', designation: 'Tresurer', image: '/assets/member/umar_sayyad.webp' },
    ],
    "Gen-1": [
      { name: 'Sayyad Umar', designation: 'President', image: '/assets/member/umar_sayyad.webp' },
      { name: 'Abdul Rehman Kalsekar', designation: 'Technical Lead', image: '/assets/member/abdul-rehman-kalsekar.jpg' },
      { name: 'Shaikh Mohd Arsan', designation: 'Technical Lead', image: '/assets/member/arsansk.jpg' },
      { name: 'Yamini Jadav', designation: 'Finance Lead', image: '/assets/member/yamini.jpeg' },
      { name: 'Sadiya Shaikh', designation: 'AIML domain lead', image: '/assets/member/sadiya_shaikh.png' },
    ],
  })

  const [selectedGen, setSelectedGen] = useState<keyof TeamGeneration>("Gen-1")
  const generations = Object.keys(teamMembers)

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#0075FF] mb-8 flex items-center justify-center">
        <Briefcase className="mr-2" size={32} />
        Our Elite Team
      </h2>

      {/* Generation Selector (no scrollbar, wrap instead) */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {generations.map((gen) => (
          <button
            key={gen}
            onClick={() => setSelectedGen(gen)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 
              ${selectedGen === gen
                ? "bg-[#0075FF] text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {gen}
          </button>
        ))}
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {teamMembers[selectedGen].map((member, index) => (
            <motion.div
              key={member.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="h-full bg-white shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <Avatar className="w-28 h-28 mb-4 ring-4 ring-[#0075FF] ring-opacity-40">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-[#0075FF] text-white text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-[#0075FF] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex items-center justify-center">
                    <Briefcase className="mr-1 w-4 h-4" />
                    {member.designation || "Member"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
