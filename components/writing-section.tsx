'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Building Better User Interfaces',
    excerpt: 'Thoughts on creating interfaces that are not just beautiful, but intuitive and accessible to all users.',
    date: 'Nov 15, 2024',
    category: 'Design',
    readTime: '5 min',
    link: '#',
  },
  {
    id: 2,
    title: 'Daily Thoughts: Coffee and Code',
    excerpt: 'Reflections from my workspace on creativity, problem-solving, and finding rhythm in the chaos of development.',
    date: 'Nov 12, 2024',
    category: 'Daily Life',
    readTime: '3 min',
    link: '#',
  },
  {
    id: 3,
    title: 'Understanding React Patterns',
    excerpt: 'A deep dive into modern React patterns and how they can improve your codebase and development experience.',
    date: 'Nov 10, 2024',
    category: 'Development',
    readTime: '8 min',
    link: '#',
  },
  {
    id: 4,
    title: 'On Learning in Public',
    excerpt: 'Why I started sharing my learning journey and what I\'ve discovered along the way about growth and community.',
    date: 'Nov 8, 2024',
    category: 'Thoughts',
    readTime: '6 min',
    link: '#',
  },
  {
    id: 5,
    title: 'The Art of Debugging',
    excerpt: 'Strategies and mindsets that help me solve problems more effectively and efficiently every single day.',
    date: 'Nov 5, 2024',
    category: 'Development',
    readTime: '7 min',
    link: '#',
  },
  {
    id: 6,
    title: 'Weekend Explorations',
    excerpt: 'Experimenting with new tools, frameworks, and creative projects outside the scope of regular work.',
    date: 'Nov 1, 2024',
    category: 'Daily Life',
    readTime: '4 min',
    link: '#',
  },
]

export default function WritingSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Design': 'bg-blue-50 text-blue-700 border-blue-200',
      'Development': 'bg-purple-50 text-purple-700 border-purple-200',
      'Daily Life': 'bg-orange-50 text-orange-700 border-orange-200',
      'Thoughts': 'bg-green-50 text-green-700 border-green-200',
    }
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200'
  }

  return (
    <section className="flex-1 px-6 py-12 lg:px-16 lg:py-24">
      <div className="max-w-5xl">
        <h2 className={`text-4xl lg:text-5xl font-bold mb-4 tracking-tight transition-all duration-1000 ${
          isVisible ? 'fly-in-left opacity-100' : 'opacity-0'
        }`}>
          Writing & Thoughts
        </h2>
        <p className={`text-muted-foreground mb-16 text-lg transition-all duration-1000 delay-100 ${
          isVisible ? 'fly-in-right opacity-100' : 'opacity-0'
        }`}>
          Stories, insights, and reflections on design, development, and daily life
        </p>

        <div className="space-y-4 stagger-children">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.link}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative block p-6 lg:p-8 rounded-xl border border-border hover:border-primary/50 bg-card hover:bg-secondary transition-all duration-300 transform hover:scale-102 hover:shadow-xl ${
                isVisible ? `slide-up opacity-100` : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${0.15 + index * 0.1}s` : '0s',
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className={`flex items-center gap-3 mb-3 transition-all duration-300 ${
                    hoveredId === post.id ? 'translate-x-2' : 'translate-x-0'
                  }`}>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getCategoryColor(post.category)} transition-all duration-300 scale-in`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium animate-pulse">{post.readTime}</span>
                  </div>
                  <h3 className={`text-xl lg:text-2xl font-bold mb-2 tracking-tight group-hover:text-primary transition-all duration-300 ${
                    hoveredId === post.id ? 'scale-105 translate-x-2' : 'scale-100'
                  }`} style={{ transformOrigin: 'left' }}>
                    {post.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4 font-light">{post.date}</p>
                </div>
                <div className={`flex-shrink-0 transition-all duration-300 ${
                  hoveredId === post.id ? 'opacity-100 translate-x-0 rotate-45' : 'opacity-0 translate-x-2'
                }`}>
                  <ArrowRight className="w-5 h-5 text-primary animate-bounce" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
