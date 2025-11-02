import React from 'react'

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
  return (
    <div className="search-filter">
      <div className="search-box">
        <input
          type="text"
          placeholder={placeholder}
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