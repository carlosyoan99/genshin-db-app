import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'

interface SearchFilterProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  placeholder?: string
  filters?: React.ReactNode
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  onSearchChange,
  placeholder = "Buscar...",
  filters
}) => {
  const t = useTranslation()

  return (
    <div className="search-filter">
      <div className="search-box">
        <input
          type="search"
          placeholder={placeholder || t.common.search}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      {filters && (
        <div className="filters">
          {filters}
        </div>
      )}
    </div>
  )
}

export default SearchFilter