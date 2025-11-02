import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import SearchFilter from '../components/common/SearchFilter'
import CharacterCard from '../components/cards/CharacterCard'

const Characters: React.FC = () => {
  const { language } = useLanguage()
  
  const characters = useMemo(() => {
    return genshin.characters('names', { matchCategories: true })
      .map(name => genshin.characters(name, { 
        resultLanguage: language === 'spanish' ? 'spanish' : 'english',
        queryLanguages: [language === 'spanish' ? 'spanish' : 'english']
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    characters,
    ['name', 'element', 'weapontype', 'region']
  )

  return (
    <div className="page">
      <div className="page-header">
        <h1>Personajes</h1>
        <p>Explora todos los personajes jugables de Genshin Impact</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar personajes..."
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
          <p>No se encontraron personajes que coincidan con la búsqueda.</p>
        </div>
      )}
    </div>
  )
}

export default Characters