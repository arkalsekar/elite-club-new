'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, Users } from 'lucide-react'

const VisionMission = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Vision & Mission
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div {...fadeInUp}>
            <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be the premier hub for innovation in electronics and computer science, 
                  fostering a community of forward-thinking individuals who will shape the 
                  future of technology and drive positive change in the world.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower and nurture talented individuals in the fields of electronics 
                  and computer science through collaborative learning, hands-on projects, 
                  and industry connections, preparing them to become leaders and innovators 
                  in the ever-evolving tech landscape.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-blue-600 text-white inline-block">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold text-black"> Join Our Community</h3>
              </div>
              <p className="max-w-2xl mx-auto mb-6 text-black">
                Be part of a dynamic group of tech enthusiasts and innovators. 
                Together, we willll push the boundaries of what possible in electronics and computer science.
              </p>
              <button className="bg-blue  text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300">
                Become a Member
              </button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionMission