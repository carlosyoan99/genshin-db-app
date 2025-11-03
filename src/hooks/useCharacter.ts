import { useMemo } from 'react'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useCache } from './useCache'

export const useCharacters = () => {
  const { language } = useLanguage()
  
  const [cachedCharacters, setCachedCharacters] = useCache<any[]>(
    `characters-${language}`,
    []
  )

  const characters = useMemo(() => {
    if (cachedCharacters.length > 0) {
      return cachedCharacters
    }

    const data = genshin.characters('names', { matchCategories: true })
      .map(name => genshin.characters(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)

    setCachedCharacters(data)
    return data
  }, [language, cachedCharacters, setCachedCharacters])

  return {
    characters,
    isLoading: characters.length === 0
  }
}