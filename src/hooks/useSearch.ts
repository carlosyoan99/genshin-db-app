import { useState, useMemo } from 'react'

export function useSearch<T>(
    items: T[],
    searchKeys: (keyof T)[]
  ) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items

    const lowercasedSearchTerm = searchTerm.toLowerCase()

    return items.filter(item =>
      searchKeys.some(key => {
        // String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
        const value = item[key]
        // Manejar diferentes tipos de valores
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowercasedSearchTerm)
        }
        if (typeof value === 'number') {
          return value.toString().includes(lowercasedSearchTerm)
        }
        if (Array.isArray(value)) {
          return value.some(v => 
            typeof v === 'string' && v.toLowerCase().includes(lowercasedSearchTerm)
          )
        }
        return false
      })
    )
  }, [items, searchTerm, searchKeys])

  return {
    searchTerm,
    setSearchTerm,
    filteredItems
  }
}