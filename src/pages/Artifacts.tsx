import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'

const Artifacts: React.FC = () => {
  const { language } = useLanguage()
    const t = useTranslation()
  
  const artifacts = useMemo(() => {
    return genshin.artifacts('names', { matchCategories: true })
      .map(name => genshin.artifacts(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    artifacts,
    ['name', 'rarity']
  )

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.artifacts.title}</h1>
        <p>{t.pages.artifacts.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.artifacts.searchPlaceholder}
      />

      <div className="grid-container">
        {filteredItems.map(artifact => {
          if (artifact) return(
          <Link
            key={artifact.name}
            to={`/artifacts/${artifact.name}`}
            className="card-link"
          >
            <ItemCard
              name={artifact.name}
              image={artifact.images?.filename_flower}
              rarity={Math.max(...(artifact.rarityList || []))}
              description={`${artifact['2pc'] || 'Set completo'}`}
              itemType='artifact'
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

export default Artifacts