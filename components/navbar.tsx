'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Download, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'
import { useScrollObserver } from '@/components/scroll-observer'
import { useLanguage } from '@/hooks/use-language'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()
  const { language, setLanguage, t, mounted: langMounted } = useLanguage()
  const activeSection = useScrollObserver()

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/#', label: t('home'), id: 'home' },
    { href: '/#about', label: t('about'), id: 'about' },
    { href: '/#projects', label: t('projects'), id: 'projects' },
    { href: '/#skills', label: t('skills'), id: 'skills' },
    { href: '/#contact', label: t('contact'), id: 'contact' },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace('/#', '')
    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(targetId)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/95 dark:bg-background/95 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`text-xl font-semibold tracking-wide text-foreground dark:text-foreground hover:text-primary dark:hover:text-accent transition-colors duration-300 ${
          isVisible ? 'fly-in-left opacity-100' : 'opacity-0'
        }`}>
          ilyasince.dev
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 lg:gap-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? 'bg-primary/10 text-primary dark:text-accent'
                    : 'text-foreground hover:text-primary dark:hover:text-accent'
                } ${isVisible ? 'fly-in-right opacity-100' : 'opacity-0'}`}
                style={{
                  transitionDelay: isVisible ? `${0.05 + index * 0.05}s` : '0s',
                }}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
                {!isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-300" />
                )}
              </a>
            )
          })}
        </div>

        {/* Theme Toggle, Language Toggle & Download CV Button */}
        <div className="flex items-center gap-2 ml-4">
          {/* Language Toggle */}
          {langMounted && (
            <div className="flex items-center bg-secondary/50 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded font-medium text-sm transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:text-primary dark:hover:text-accent'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1.5 rounded font-medium text-sm transition-all duration-300 ${
                  language === 'tr'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:text-primary dark:hover:text-accent'
                }`}
              >
                TR
              </button>
            </div>
          )}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-foreground transition-all duration-300 hover:scale-110 ${
                isVisible ? 'fly-in-right opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? '0.25s' : '0s',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download="Mehmet_Ilyas_Ince_Resume.pdf"
            className={`px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 ${
              isVisible ? 'fly-in-right opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: isVisible ? '0.3s' : '0s',
            }}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t('resume')}</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
