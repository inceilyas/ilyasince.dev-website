'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Timeline',
    description: 'Building a seamless path to better cellular health',
    tags: ['Design', 'React', 'Healthcare'],
    link: '#',
  },
  {
    id: 2,
    title: 'Siesta Campers',
    description: 'Elevating Portugal\'s premier van rental company',
    tags: ['Design', 'Next.js', 'Travel'],
    link: '#',
  },
  {
    id: 3,
    title: 'Dr. (I) Julia Woehr',
    description: 'Distilling architectural impact to its spatial essence',
    tags: ['Design', 'Architecture', 'Portfolio'],
    link: '#',
  },
  {
    id: 4,
    title: 'Fahrplan.guru',
    description: 'Bringing clarity to complex transportation',
    tags: ['Design', 'Development', 'Mobility'],
    link: '#',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 px-6 lg:px-8 py-24 max-w-5xl mx-auto">
        <div className={`mb-12 transition-all duration-1000 ${
          isVisible ? 'fly-in-left opacity-100' : 'opacity-0'
        }`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground">A curated collection of projects showcasing design and development expertise</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative block overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 p-8 lg:p-10 bg-card hover:bg-card/80 transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? `slide-up opacity-100` : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${0.1 + index * 0.15}s` : '0s',
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-2 tracking-tight group-hover:text-primary transition-all duration-300 ${
                    hoveredId === project.id ? 'scale-105' : 'scale-100'
                  }`} style={{ transformOrigin: 'left' }}>
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-2xl group-hover:text-foreground transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                <div className={`ml-4 flex-shrink-0 transition-all duration-300 ${
                  hoveredId === project.id ? 'opacity-100 translate-x-0 rotate-45' : 'opacity-0 translate-x-2'
                }`}>
                  <ArrowUpRight className="w-6 h-6 text-primary animate-bounce" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className={`px-4 py-1.5 text-xs font-medium bg-primary/8 text-primary rounded-full border border-primary/20 group-hover:bg-primary/12 transition-all duration-300 hover:scale-110 ${
                      isVisible ? 'scale-in opacity-100' : 'opacity-0 scale-75'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${0.2 + tagIndex * 0.05}s` : '0s',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary w-0 group-hover:w-full transition-all duration-700" />
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
