import React, { useMemo } from 'react'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'

const Domains: React.FC = () => {
  const { language } = useLanguage()
    const t = useTranslation()
  
  const domains = useMemo(() => {
    return genshin.domains('names', { matchCategories: true })
      .map(name => genshin.domains(name, { 
        resultLanguage: language,
        queryLanguages: [language]
      }))
      .filter(Boolean)
  }, [language])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    domains,
    ['name', 'region', 'domaintype', 'description']
  )

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.domains.title}</h1>
        <p>{t.pages.domains.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.domains.searchPlaceholder}
      />

      <div className="grid-container">
        {filteredItems.map(domain => {
          if (domain) return (
            <div
              key={domain.name}
              className="card-link"
            >
              <ItemCard
                name={domain.name}
                image={domain.images.filename_image}
                type={domain.domainType}
                description={`${domain.regionName} • ${domain.entranceName || 'Dominio'}`}
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

export default Domains