import React, { createContext, useContext, useState, useEffect } from 'react'
import {SUPPORTED_LANGUAGES} from '../utils/constants'
import { type Language, Language as GDB_Language } from 'genshin-db'
import type { LanguageContextType } from './interface'

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<GDB_Language>(() => {
    const saved = localStorage.getItem('language')
    const browserLang = navigator.language.split('-')[0]
    
    if (saved && SUPPORTED_LANGUAGES.some(lang => lang.code === saved)) return saved as Language
    
   switch (browserLang) {
      case 'es': return GDB_Language.Spanish
      case 'ja': return GDB_Language.Japanese
      case 'zh': return GDB_Language.ChineseSimplified
      case 'ko': return GDB_Language.Korean
      case 'fr': return GDB_Language.Korean
      case 'pt': return GDB_Language.Portuguese
      case 'de': return GDB_Language.German
      case 'ru': return GDB_Language.Russian
      case 'it': return GDB_Language.Italian
      default: return GDB_Language.English
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