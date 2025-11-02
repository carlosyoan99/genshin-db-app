import { useState, useMemo } from 'react'

export function useSearch<T>(items: T[], searchKeys: (keyof T)[]) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items

    return items.filter(item =>
      searchKeys.some(key =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [items, searchTerm, searchKeys])

  return {
    searchTerm,
    setSearchTerm,
    filteredItems
  }
}