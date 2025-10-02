'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
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
      { name: 'Aqsa Shah', designation: 'President', image: '/assets/member/2024/aqsa.jpeg' },
      { name: 'Mudassir', designation: 'Technical Lead', image: '/assets/member/2024/mudassir.png' },
      { name: 'Anish', designation: '', image: '/assets/member/2024/anish.png' },
      { name: 'Yamini Jadav', designation: 'Finance Lead', image: '/assets/member/2024/yamini.jpeg' },
      { name: 'Faizan', designation: 'Finance Lead', image: '/assets/member/2024/faizan.jpeg' },
      { name: 'Sayyad Umar', designation: 'Tresurer', image: '/assets/member/2024/umar_new.jpg' },
    ],
    "Gen-1": [
      { name: 'Sayyad Umar', designation: 'President', image: '/assets/member/2025/umar_new.jpg' },
      { name: 'Abdul Rehman Kalsekar', designation: 'Technical Lead', image: '/assets/member/2025/abdul-rehman-kalsekar.jpg' },
      { name: 'Shaikh Mohd Arsan', designation: 'Technical Lead', image: '/assets/member/2025/arsansk.jpg' },
      { name: 'kazi khadija Mubin', designation: 'Technical Lead', image: '/assets/member/2025/khadija-kazi.jpg' },
      { name: 'Kaskar Hasan', designation: 'Cyber Security domain lead', image: '/assets/member/2025/kaskar-hasan.jpg' },
      { name: 'Adnan Ansari', designation: 'Cyber Security domain lead', image: '/assets/member/2025/adnan.jpeg' },
      { name: 'Yamini Jadav', designation: 'Finance Lead', image: '/assets/member/2025/yamini.jpeg' },
      { name: 'Sadiya Shaikh', designation: 'AIML domain lead', image: '/assets/member/2025/sadiya_shaikh.png' },
      { name: 'Aasmiya Phatak', designation: 'AIML domain lead', image: '/assets/member/2025/aasmiya-phatak.jpg' },
      { name: 'Zaid Khan', designation: 'Marketing Lead', image: '/assets/member/2025/zaid-khan.png' },
      { name: 'Faizan Shaikh', designation: 'Finance Lead', image: '/assets/member/2025/faizan.jpeg' },
    ],
  })

  const [selectedGen, setSelectedGen] = useState<keyof TeamGeneration>("Gen-1")
  const generations = Object.keys(teamMembers)

  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [showArrow, setShowArrow] = useState(false)

  // check if scrolling is needed
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const checkScroll = () => {
      setShowArrow(container.scrollHeight > container.clientHeight && 
                   container.scrollTop + container.clientHeight < container.scrollHeight - 5)
    }

    checkScroll()
    container.addEventListener("scroll", checkScroll)
    return () => container.removeEventListener("scroll", checkScroll)
  }, [selectedGen])

  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#0075FF] mb-8 flex items-center justify-center">
        <Briefcase className="mr-2" size={32} />
        Our Elite Team
      </h2>

      {/* Generation Selector */}
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

      {/* Members Grid with fixed height (2 rows visible) */}
      <div className="max-h-[38rem] relative">
        <div
          ref={scrollRef}
          className="overflow-y-auto h-full scroll-smooth max-h-[30rem] pr-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-12">
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

        {/* Glow Effect at Bottom while scrolling (anchored to wrapper so it stays fixed) */}
        {showArrow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 w-full h-16 
                       bg-gradient-to-t from-[#0075FF]/40 to-transparent 
                       flex justify-center items-end pb-2 pointer-events-none"
          >
            <ChevronDown className="w-8 h-8 text-[#0075FF] animate-bounce" />
          </motion.div>
        )}
      </div>
    </div>
  )
}
