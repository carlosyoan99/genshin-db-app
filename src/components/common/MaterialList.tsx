import React from 'react'
import genshin from 'genshin-db'
import { useLanguage } from '../../contexts/LanguageContext'
import ImageWithFallback from './ImageWithFallback'

interface MaterialItem {
  name: string
  count?: number
}

interface MaterialListProps {
  materials: MaterialItem[]
  title: string
  emptyMessage?: string
}

const MaterialList: React.FC<MaterialListProps> = ({ 
  materials, 
  title, 
  emptyMessage = "No se requieren materiales" 
}) => {
  const { language } = useLanguage()

  if (!materials || materials.length === 0) {
    return (
      <div className="material-section">
        <h3>{title}</h3>
        <p className="empty-message">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="material-section">
      <h3>{title}</h3>
      <div className="materials-grid">
        {materials.map((material, index) => {
          const materialData = genshin.materials(material.name, { 
            resultLanguage: language === 'spanish' ? 'spanish' : 'english'
          })
          
          return (
            <div key={index} className="material-item">
              <ImageWithFallback
                src={materialData?.images?.filename_icon}
                alt={material.name}
                className="material-icon"
                fallbackType="material"
              />
              <div className="material-info">
                <span className="material-name">{material.name}</span>
                {material.count && (
                  <span className="material-count">x{material.count}</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MaterialList