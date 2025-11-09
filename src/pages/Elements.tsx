import React, {useMemo} from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'
import genshin from 'genshin-db'
//import { elements } from '../utils/elements'

const Elements: React.FC = () => {
  const { language } = useLanguage()
  const t = useTranslation()

  const elements = useMemo(() => {
      return genshin.elements('names', { matchCategories: true })
        .map(name => genshin.elements(name, { 
          resultLanguage: language,
          queryLanguages: [language]
        }))
        .filter(Boolean)
    }, [language])

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.elements.title}</h1>
        <p>{t.pages.elements.subtitle}</p>
      </div>

      <div className="elements-grid">
        {elements.map(element => (
          <div 
            key={element?.name}
            className="element-card"
            style={{ borderColor: element?.color }}
          >
            <div className="element-header">
              <span className="element-emoji">{element?.emoji}</span>
              <h3>{element?.name}</h3>
            </div>
            <p className="element-description">
              {/*element?.description[language] || element.description.English*/}
            </p>
            <div className="element-reactions">
              <strong>Reacciones:</strong>
              <div className="reactions-list">
                {/*element.reactions[language].map(reaction => (
                  <span key={reaction} className="reaction-badge">
                    {reaction}
                  </span>
                ))*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Elements