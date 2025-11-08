import type { Theme } from './types'
import type { Language } from 'genshin-db'

export interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

export interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
}