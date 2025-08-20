import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

type FacultyMember = {
  name: string
  role: string
  department: string
  isHOD?: boolean
  image: string // Added image property to each faculty member
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Prof Riyaz Pathan",
    role: "Faculty",
    department: "Electronics and Computer Science Department",
    image: "/assets/member/2.png" // Image for faculty
  },
  {
    name: "Bandanawaz Kotiyal",
    role: "Head of the Department",
    department: "Electronics and Computer Science",
    isHOD: true,
    image: "/assets/member/3.png" // Image for Head of Department
  },
  {
    name: "Prof Ismail",
    role: "Faculty",
    department: "Electronics and Computer Science Department",
    image: "/assets/member/3.png" // Image for faculty
  }
]

export default function FacultySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Faculty</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {facultyMembers.map((faculty, index) => (
            <Card 
              key={faculty.name}
              className={`w-full max-w-sm transition-all duration-300 ease-in-out hover:shadow-lg
                ${faculty.isHOD ? 'md:order-2 md:scale-110 bg-blue text-primary-foreground' : 'bg-card'}
                ${index === 0 ? 'md:order-1' : ''}
                ${index === 2 ? 'md:order-3' : ''}
              `}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={faculty.image} // Use the image path from each faculty member
                      alt={faculty.name}
                      layout="fill"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{faculty.name}</h3>
                  <p className={`text-sm mb-2 ${faculty.isHOD ? 'text-primary-foreground' : 'text-muted-foreground'}`}>{faculty.role}</p>
                  <p className={`text-xs ${faculty.isHOD ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{faculty.department}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
