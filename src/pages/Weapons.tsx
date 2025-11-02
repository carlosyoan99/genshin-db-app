import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'

const Weapons: React.FC = () => {
  const { language } = useLanguage()
  
  const weapons = useMemo(() => {
    return genshin.weapons('names', { matchCategories: true })
      .map(name => genshin.weapons(name, { 
        resultLanguage: language === 'spanish' ? 'spanish' : 'english'
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    weapons,
    ['name', 'weapontype', 'substat']
  )

  return (
    <div className="page">
      <div className="page-header">
        <h1>Armas</h1>
        <p>Explora todas las armas disponibles en Genshin Impact</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar armas..."
      />

      <div className="grid-container">
        {filteredItems.length === 0 ? (
          <div className="no-results">
            <p>No se encontraron armas que coincidan con la búsqueda.</p>
          </div>
        ) : filteredItems.map(weapon => {
          if(weapon) return (
            <Link
              key={weapon.name}
              to={`/weapons/${weapon.name}`}
              className="card-link"
            >
              <ItemCard
                name={weapon.name}
                image={weapon.images?.filename_icon}
                rarity={weapon.rarity}
                type={weapon.weaponType}
                description={weapon.description}
              />
            </Link>
          )
        })}
      </div>

    </div>
  )
}

export default Weapons