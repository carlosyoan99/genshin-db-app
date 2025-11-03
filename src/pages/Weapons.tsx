import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'

const Weapons: React.FC = () => {
  const { language } = useLanguage()
  const t = useTranslation()
  
  const weapons = useMemo(() => {
    return genshin.weapons('names', { matchCategories: true })
      .map(name => genshin.weapons(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    weapons,
    ['name', 'weaponType', 'substat']
  )

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.weapon.title}</h1>
        <p>{t.pages.weapon.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.weapon.searchPlaceholder}
      />

      <div className="grid-container">
        {filteredItems.length === 0 ? (
          <div className="no-results">
            <p>{t.common.noResults}</p>
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
                itemType='weapon'
              />
            </Link>
          )
        })}
      </div>

    </div>
  )
}

export default Weapons