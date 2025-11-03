import React, { useMemo } from 'react'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'

const Foods: React.FC = () => {
  const { language } = useLanguage()
    const t = useTranslation()
  
  const foods = useMemo(() => {
    return genshin.foods('names', { matchCategories: true })
      .map(name => genshin.foods(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    foods,
    ['name', 'rarity', 'foodtype', 'effect']
  )

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.foods.title}</h1>
        <p>{t.pages.foods.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.characters.searchPlaceholder}
      />

      <div className="grid-container">
        {filteredItems.map(food => {
          if(food) return (
          <div
            key={food.name}
            className="card-link"
          >
            <ItemCard
              name={food.name}
              image={food.images?.filename_icon}
              rarity={food.rarity}
              type={food.foodtype}
              description={food.effect}
            />
          </div>
        )})}
      </div>

      {filteredItems.length === 0 && (
        <div className="no-results">
          <p>{t.common.noResults}</p>
        </div>
      )}
    </div>
  )
}

export default Foods