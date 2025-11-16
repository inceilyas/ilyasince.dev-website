'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Timeline',
    description: 'Building a seamless path to better cellular health',
    tags: ['Design', 'React', 'Healthcare'],
    link: '#',
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 2,
    title: 'Siesta Campers',
    description: 'Elevating Portugal\'s premier van rental company',
    tags: ['Design', 'Next.js', 'Travel'],
    link: '#',
    color: 'from-orange-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Dr. (I) Julia Woehr',
    description: 'Distilling architectural impact to its spatial essence',
    tags: ['Design', 'Architecture', 'Portfolio'],
    link: '#',
    color: 'from-slate-600 to-slate-800',
  },
  {
    id: 4,
    title: 'Fahrplan.guru',
    description: 'Bringing clarity to complex transportation',
    tags: ['Design', 'Development', 'Mobility'],
    link: '#',
    color: 'from-green-500 to-emerald-500',
  },
]

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="flex-1 px-6 py-12 lg:px-16 lg:py-24">
      <div className="max-w-5xl">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-4 tracking-tight transition-all duration-1000 ${
          isVisible ? 'fly-in-left opacity-100' : 'opacity-0'
        }`}>
          Selected Work
        </h2>
        <p className={`text-muted-foreground mb-16 text-lg transition-all duration-1000 delay-100 ${
          isVisible ? 'fly-in-right opacity-100' : 'opacity-0'
        }`}>
          A curated collection of projects showcasing design and development expertise
        </p>

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
      </div>
    </section>
  )
}
