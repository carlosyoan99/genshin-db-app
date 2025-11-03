import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import CharacterCard from '../components/cards/CharacterCard'

const Characters: React.FC = () => {
  const { language } = useLanguage()
  const t = useTranslation()

  const characters = useMemo(() => {
    return genshin.characters('names', { matchCategories: true })
      .map(name => genshin.characters(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    characters,
    ['name', 'element', 'weaponType', 'region']
  )

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

      {filteredItems.length === 0 && (
        <div className="no-results">
          <p>{t.common.noResults}</p>
        </div>
      )}
    </div>
  )
}

export default Characters