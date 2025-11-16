'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useState, useEffect } from 'react'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'writing', label: 'Writing' },
  ]

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-80 bg-background border-r border-border flex-col justify-between p-12">
      <div className="space-y-16">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'scale-in opacity-100' : 'opacity-0 scale-75'
        }`}>
          <h1 className="text-3xl font-bold tracking-tight mb-2 hover:text-primary transition-colors duration-300">
            Your Name
          </h1>
          <p className="text-sm text-muted-foreground font-medium tracking-wide animate-pulse">DESIGNER & DEVELOPER</p>
        </div>

        <nav className="space-y-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative block text-left group transition-all duration-700 ${
                isVisible ? 'fly-in-left opacity-100' : 'opacity-0 -translate-x-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${0.2 + index * 0.1}s` : '0s',
              }}
            >
              <span
                className={`text-base transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-foreground font-semibold scale-110'
                    : 'text-muted-foreground group-hover:text-foreground group-hover:scale-105'
                }`}
                style={{ transformOrigin: 'left' }}
              >
                {item.label}
              </span>
              {activeSection === item.id && (
                <div className="absolute -bottom-2 left-0 h-1 w-8 bg-primary rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className={`transition-all duration-1000 delay-500 ${
        isVisible ? 'fly-in-up opacity-100' : 'opacity-0 translate-y-10'
      }`}>
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6 font-medium animate-pulse">Connect</p>
        <div className="flex gap-6">
          {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className={`text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12 transform ${
                isVisible ? 'scale-in opacity-100' : 'opacity-0 scale-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${0.6 + index * 0.05}s` : '0s',
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
