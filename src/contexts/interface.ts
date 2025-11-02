import type { Theme, Language } from './types'

export interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

export interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
}