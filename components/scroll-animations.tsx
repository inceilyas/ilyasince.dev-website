'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade' | 'slide-up' | 'scale'
  delay?: number
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade',
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animationClasses = {
    fade: 'fade-in',
    'slide-up': 'slide-up',
    scale: 'scale-in'
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClasses[animation] : 'opacity-0'}`}
      style={{
        animationDelay: isVisible ? `${delay}s` : '0s'
      }}
    >
      {children}
    </div>
  )
}
