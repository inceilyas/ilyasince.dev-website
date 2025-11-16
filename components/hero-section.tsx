'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="flex-1 px-6 py-12 lg:px-16 lg:py-24 flex flex-col justify-center max-w-5xl">
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className={`text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-balance transition-all duration-1000 ${
            isVisible ? 'fly-in-left opacity-100' : 'opacity-0'
          }`}>
            Crafting Digital <span className="text-primary animate-pulse">Experiences</span> That Matter
          </h2>
          <p className={`text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light transition-all duration-1000 delay-200 ${
            isVisible ? 'fly-in-right opacity-100' : 'opacity-0'
          }`}>
            I design and develop thoughtful digital solutions that blend aesthetics with functionality. Through code, design, and writing, I explore the intersection of creativity and technology.
          </p>
        </div>

        <div className={`space-y-4 pt-8 border-t border-border transition-all duration-1000 delay-300 ${
          isVisible ? 'slide-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest animate-pulse">
            Currently Exploring
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-foreground max-w-2xl hover:text-primary transition-colors duration-300">
            Building beautiful interfaces at <span className="font-semibold text-primary">My Company</span>, with a focus on accessibility and user experience. Passionate about creating digital products that solve real problems elegantly.
          </p>
        </div>

        <div className={`space-y-4 border-t border-border pt-8 transition-all duration-1000 delay-400 ${
          isVisible ? 'slide-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest animate-pulse">
            Background & Interests
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-foreground max-w-2xl hover:text-primary transition-colors duration-300">
            With years of experience in full-stack development, I've developed a deep appreciation for thoughtful design and clean code. I'm passionate about sharing knowledge, learning in public, and exploring the creative possibilities of the web.
          </p>
        </div>
      </div>
    </section>
  )
}
