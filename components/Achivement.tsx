'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface Achievement {
  year: string
  title: string
  description: string
  icon: React.ReactNode
}

const achievements: Achievement[] = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Successfully launched our startup with a team of 5 passionate individuals.',
    icon: <ChevronRight className="w-6 h-6" />
  },
  {
    year: '2021',
    title: 'First Major Client',
    description: 'Secured our first enterprise client, marking a significant milestone in our growth.',
    icon: <ChevronRight className="w-6 h-6" />
  },
  {
    year: '2022',
    title: 'Product Launch',
    description: 'Released our flagship product, receiving positive feedback from the market.',
    icon: <ChevronRight className="w-6 h-6" />
  },
  {
    year: '2023',
    title: 'International Expansion',
    description: 'Expanded operations to 3 new countries, establishing a global presence.',
    icon: <ChevronRight className="w-6 h-6" />
  },
]

const RoadmapSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0073FE] hidden md:block" />
          
          {achievements.map((achievement, index) => (
            <RoadmapItem key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const RoadmapItem = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''} mb-4 md:mb-0`}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-[#0073FE]">{achievement.title}</h3>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{achievement.year}</span>
          </div>
          <p className="text-gray-600">{achievement.description}</p>
        </div>
      </div>
      <div className="w-full md:w-2/12 flex justify-center items-center">
        <div className="w-12 h-12 bg-[#0073FE] rounded-full flex items-center justify-center shadow-lg">
          {achievement.icon}
        </div>
      </div>
      <div className="w-full md:w-5/12 hidden md:block" />
    </motion.div>
  )
}

export default RoadmapSection

