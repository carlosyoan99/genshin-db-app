import { useState, useMemo } from 'react'
import { useEmptyState } from './useEmptyState'

export function useSearch<T>(
    items: T[],
    searchKeys: (keyof T)[],
    options?: {
      enableEmptyState?: boolean
      searchTerm?: string
      onSearchChange?: (term: string) => void
    }
  ) {
  const [internalSearchTerm, setInternalSearchTerm] = useState('')
  const { showEmptyState, hideEmptyState } = useEmptyState()

  const searchTerm = options?.searchTerm ?? internalSearchTerm
  const setSearchTerm = options?.onSearchChange ?? setInternalSearchTerm

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items

    const lowercasedSearchTerm = searchTerm.toLowerCase()

    const filtered = items.filter(item =>
      searchKeys.some(key => {
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

    // Mostrar empty state si está habilitado y no hay resultados
    if (options?.enableEmptyState) {
      if (filtered.length === 0 && searchTerm) {
        showEmptyState('search', {
          message: `No results found for "${searchTerm}". Try different keywords.`,
          actionText: 'Clear search'
        })
      } else {
        hideEmptyState()
      }
    }

    return filtered
  }, [searchTerm, items, options?.enableEmptyState, searchKeys, showEmptyState, hideEmptyState])

  const clearSearch = () => {
    setSearchTerm('')
  }

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
    clearSearch
  }
}