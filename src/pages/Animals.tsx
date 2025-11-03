import React, { useMemo } from 'react'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'

const Animals: React.FC = () => {
  const { language } = useLanguage()
    const t = useTranslation()
  
  const animals = useMemo(() => {
    return genshin.animals('names', { matchCategories: true })
      .map(name => genshin.animals(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    animals,
    ['name', 'category', 'description']
  )

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.animals.title}</h1>
        <p>{t.pages.animals.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.animals.searchPlaceholder}
      />

      <div className="grid-container">
        {filteredItems.map(animal => {
          if(animal) return (
          <div
            key={animal.name}
            className="card-link"
          >
            <ItemCard
              name={animal.name}
              image={animal.images?.filename_icon}
              type={animal.categoryText}
              description={animal.description}
            />
          </div>
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

export default Animals