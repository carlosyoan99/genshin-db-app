import React, { createContext, useContext, useState, useEffect } from 'react'
import {SUPPORTED_LANGUAGES} from '../utils/constants'
import type { Language } from './types'
import type { LanguageContextType } from './interface'

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    const browserLang = navigator.language.split('-')[0]
    
    if (saved && SUPPORTED_LANGUAGES.some(lang => lang.code === saved)) return saved as Language
    
   switch (browserLang) {
      case 'es': return 'spanish'
      case 'ja': return 'japanese'
      case 'zh': return 'chinese'
      case 'ko': return 'korean'
      case 'fr': return 'french'
      case 'pt': return 'portuguese'
      case 'de': return 'german'
      case 'ru': return 'russian'
      case 'it': return 'italian'
      default: return 'english'
    }
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage() must be used within a LanguageProvider.')
  }
  return context
}