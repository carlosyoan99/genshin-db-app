import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import CharacterCard from '../components/cards/CharacterCard'
import { useEmptyState } from '../hooks/useEmptyState'
import EmptyState from '../components/common/EmptyState'

const Characters: React.FC = () => {
  const { language } = useLanguage()
  const t = useTranslation()
  const { emptyState, handleAction } = useEmptyState()

  const characters = useMemo(() => {
    return genshin.characters('names', { matchCategories: true })
      .map(name => genshin.characters(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems, clearSearch } = useSearch(
    characters,
    ['name', 'element', 'weaponType', 'region'],
    {
      enableEmptyState: true
    }
  )

  /**
   * Mostrar empty state si no hay personajes
  */ 
  if (characters.length === 0) {
    return (
      <div className="page">
        <EmptyState
          type="data"
          title="No characters available"
          message="There was an error loading the characters data."
          actionText="Try again"
          onAction={() => window.location.reload()}
        />
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.characters.title}</h1>
        <p>{t.pages.characters.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.characters.searchPlaceholder}
      />

      {/* Mostrar empty state de búsqueda si está activo */}
      {emptyState.isVisible ? (
        <EmptyState
          type={emptyState.type}
          title={emptyState.title}
          message={emptyState.message}
          actionText={emptyState.actionText}
          onAction={() => handleAction(clearSearch)}
        />
      ) : (
        <>
          <div className="grid-container">
            {filteredItems.map(character => {
              if (character) return (
                <Link
                  key={character.name}
                  to={`/characters/${character.name}`}
                  className="card-link"
                >
                  <CharacterCard character={character} />
                </Link>
              )
            })}
          </div>

          {filteredItems.length === 0 && searchTerm && (
            <EmptyState
              type="search"
              message={`No characters found for "${searchTerm}"`}
              actionText="Clear search"
              onAction={clearSearch}
            />
          )}
        </>
      )}
    </div>
  )
}

export default Characters