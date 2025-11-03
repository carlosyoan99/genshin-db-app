import React, { useMemo, useState } from 'react'
//import { Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearch } from '../hooks/useSearch'
import { useTranslation } from '../hooks/useTranslation'
import SearchFilter from '../components/common/SearchFilter'
import ItemCard from '../components/cards/ItemCard'

const Materials: React.FC = () => {
  const { language } = useLanguage()
      const t = useTranslation()
  const [materialType, setMaterialType] = useState<string>('all')
  
  const materials = useMemo(() => {
    const allMaterials = [
      ...genshin.materials('names', { matchCategories: true })
        .map(name => genshin.materials(name, { 
          resultLanguage: language,
        queryLanguages: [language]
        }))
        .filter(Boolean),
      ...genshin.talents('names', { matchCategories: true })
        .map(name => genshin.talents(name, { 
          resultLanguage: language,
        queryLanguages: [language]
        }))
        .filter(Boolean)
    ]
    return allMaterials
  }, [language])

  const filteredByType = useMemo(() => {
    if (materialType === 'all') return materials
    return materials.filter(material => {
      if (material) {
        return material.name.toLowerCase().includes(materialType.toLowerCase())
        // material.materialType?.toLowerCase().includes(materialType.toLowerCase()) ||
        // material.type?.toLowerCase().includes(materialType.toLowerCase())
      }
    })
  }, [materials, materialType])

  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    filteredByType,
    ['name', 'materialtype', 'type', 'domainofmastery', 'daysofweek']
  )

  const materialTypes = [
    { value: 'all', label: 'Todos' },
    { value: 'character', label: 'Personaje' },
    { value: 'weapon', label: 'Arma' },
    { value: 'talent', label: 'Talento' },
    { value: 'ascension', label: 'Ascensión' },
    { value: 'exp', label: 'Experiencia' }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.materials.title}</h1>
        <p>{t.pages.enemies.subtitle}</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder={t.pages.materials.searchPlaceholder}
        filters={
          <select 
            value={materialType} 
            onChange={(e) => setMaterialType(e.target.value)}
            className="filter-select"
          >
            {materialTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        }
      />

      <div className="grid-container">
        {filteredItems.map(material => {
          if (material) return (
          <div
            key={material.name}
            className="card-link"
          >
            <ItemCard
              name={material.name}
              image={"image.png"} /** material.images?.filename_combat1 */
              rarity={5} /** material.rarity no existe */
              type={"All"} /** material.materialtype || material.type */
              description={"Descripcion"} /** material.source?.join(', ') || material.description */
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

export default Materials