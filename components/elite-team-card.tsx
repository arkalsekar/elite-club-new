'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import { useState } from "react"

type TeamMember = {
  name: string
  designation: string
  image: string
}

export function EliteTeamCardComponent() {
  const [teamMembers] = useState<TeamMember[]>([
    {
      name: 'Aqsa Shah',
      designation: 'President',
      image: '/assets/member/aqsa.jpeg',
    },
    {
      name: 'Mudassir',
      designation: 'Technical lead',
      image: '/assets/member/1.png',
    },
    {
      name: 'Anish',
      designation: '',
      image: '/assets/member/anish.png',
    },
    {
      name: 'Yamini Jadav',
      designation: 'Finance Lead ',
      image: '/assets/member/yamini.jpeg',
    },{
      name: 'faizan',
      designation: 'Finance Lead ',
      image: '/assets/member/faizan.jpeg',
    },{
      name: 'umar',
      designation: ' ',
      image: '/umar.jpeg',
    },
   
  ])

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-[#0075FF] mb-12 flex items-center justify-center">
        <Briefcase className="mr-2" size={32} />
        Our Elite Team
      </h2>
      <div className="relative">
        <div
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex-shrink-0 w-72 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4 ring-4 ring-[#0075FF] ring-opacity-50">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-[#0075FF] text-white text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-[#0075FF] mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <Briefcase className="mr-1" size={14} />
                  {member.designation}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
