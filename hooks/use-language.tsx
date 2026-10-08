'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { content, type Content, type Language } from '@/lib/content'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  c: Content
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('language')
      if (saved === 'en' || saved === 'tr') setLanguageState(saved)
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content[language].meta.title
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {}
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, c: content[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
