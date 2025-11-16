'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 px-6 lg:px-8 py-24 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'fly-in-left opacity-100' : 'opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a passionate developer and designer dedicated to creating beautiful, functional digital experiences.
            </p>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'slide-up opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Background</h2>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                With years of experience in full-stack development, I've developed a deep appreciation for thoughtful design and clean code. My journey started with a passion for solving problems and has evolved into a mission to create digital products that genuinely improve people's lives.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                I believe that great design is invisible—it just works. Whether it's a responsive interface or efficient backend architecture, I focus on creating solutions that are both beautiful and functional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Interests & Passions</h2>
              <ul className="space-y-3 text-lg">
                {[
                  'Building accessible and inclusive web experiences',
                  'Exploring the intersection of design and technology',
                  'Sharing knowledge and learning in public',
                  'Creative problem-solving and innovation',
                  'Mentoring and helping other developers grow',
                ].map((interest, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span className="text-foreground">{interest}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Skills & Technologies</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Design Systems', 'UX/UI', 'Full-stack', 'Performance'].map((skill, index) => (
                  <div
                    key={skill}
                    className={`p-4 rounded-lg border border-border bg-card hover:bg-secondary transition-all duration-300 hover:scale-105 ${
                      isVisible ? 'scale-in opacity-100' : 'opacity-0 scale-75'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${0.3 + index * 0.05}s` : '0s',
                    }}
                  >
                    <p className="font-semibold text-center">{skill}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
