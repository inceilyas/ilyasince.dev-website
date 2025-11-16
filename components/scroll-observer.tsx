'use client'

import { useEffect, useState } from 'react'

interface ScrollSection {
  id: string
  element: HTMLElement
}

export function useScrollObserver() {
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const sections: ScrollSection[] = []
    const sectionIds = ['about', 'projects', 'skills', 'contact']
    
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        sections.push({ id, element })
      }
    })

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const { top, bottom } = section.element.getBoundingClientRect()
        const sectionTop = window.scrollY + top
        const sectionBottom = sectionTop + section.element.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
          break
        }
      }

      if (scrollPosition < 200) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeSection
}
