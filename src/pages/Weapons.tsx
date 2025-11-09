import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'
import { useEmptyState } from '../hooks/useEmptyState'
import EmptyState from '../components/common/EmptyState'

const Weapons: React.FC = () => {
  const { language } = useLanguage()
  const t = useTranslation()
  const { emptyState, handleAction } = useEmptyState()
  
  const weapons = useMemo(() => {
    return genshin.weapons('names', { matchCategories: true })
      .map(name => genshin.weapons(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems, clearSearch } = useSearch(
    weapons,
    ['name', 'weaponType', 'substat'],
    {
      enableEmptyState: true
    }
  )

  if (weapons.length === 0) {
    return (
      <div className="page">
        <EmptyState
          type="data"
          title="No weapons available"
          message="There was an error loading the weapons data."
          actionText="Try again"
          onAction={() => window.location.reload()}
        />
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.weapons.title}</h1>
        <p>{t.pages.weapons.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.weapons.searchPlaceholder}
      />

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
            {filteredItems.map(weapon => {
              if (weapon) return (
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
        </>
      )}
    </div>
  )
}

export default Weapons