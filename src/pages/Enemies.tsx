import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'

const Enemies: React.FC = () => {
  const { language } = useLanguage()
    const t = useTranslation()
  
  const enemies = useMemo(() => {
    return genshin.enemies('names', { matchCategories: true })
      .map(name => genshin.enemies(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    enemies,
    ['name', 'enemyType', 'categoryType']
  )

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.enemies.title}</h1>
        <p>{t.pages.enemies.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.enemies.searchPlaceholder}
      />

      <div className="grid-container">
        {filteredItems.map(enemy => {
          if (enemy) return (
          <Link
            key={enemy.name}
            to={`/enemies/${enemy.name}`}
            className="card-link"
          >
            <ItemCard
              name={enemy.name}
              image={enemy.images?.filename_icon}
              type={enemy.enemyType || enemy.categoryType}
                description={enemy.specialNames.join(', ') || enemy.description}
                itemType='enemy'
            />
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

export default Enemies