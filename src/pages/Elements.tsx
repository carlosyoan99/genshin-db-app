import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'

const Elements: React.FC = () => {
  const { language } = useLanguage()
  const tt = useTranslation()

  const elements = [
    {
      name: 'Pyro',
      emoji: '🔥',
      color: '#FF9999',
      description: {
        english: 'The element of fire. Creates powerful reactions with other elements.',
        spanish: 'El elemento del fuego. Crea reacciones poderosas con otros elementos.'
      },
      reactions: ['Vaporize', 'Melt', 'Overloaded', 'Burning']
    },
    {
      name: 'Hydro',
      emoji: '💧',
      color: '#99CCFF',
      description: {
        english: 'The element of water. Essential for healing and reaction support.',
        spanish: 'El elemento del agua. Esencial para curación y soporte de reacciones.'
      },
      reactions: ['Vaporize', 'Electro-Charged', 'Frozen', 'Bloom']
    },
    {
      name: 'Anemo',
      emoji: '🌪️',
      color: '#99FFCC',
      description: {
        english: 'The element of wind. Excels at crowd control and spreading elements.',
        spanish: 'El elemento del viento. Destaca en control de multitudes y esparcir elementos.'
      },
      reactions: ['Swirl']
    },
    {
      name: 'Electro',
      emoji: '⚡',
      color: '#CC99FF',
      description: {
        english: 'The element of lightning. Provides energy and rapid attacks.',
        spanish: 'El elemento del rayo. Proporciona energía y ataques rápidos.'
      },
      reactions: ['Overloaded', 'Electro-Charged', 'Superconduct', 'Quicken']
    },
    {
      name: 'Dendro',
      emoji: '🌿',
      color: '#99FF99',
      description: {
        english: 'The element of nature. Creates complex reactions with other elements.',
        spanish: 'El elemento de la naturaleza. Crea reacciones complejas con otros elementos.'
      },
      reactions: ['Burning', 'Bloom', 'Quicken']
    },
    {
      name: 'Cryo',
      emoji: '❄️',
      color: '#99FFFF',
      description: {
        english: 'The element of ice. Excellent for crowd control and critical hits.',
        spanish: 'El elemento del hielo. Excelente para control de multitudes y golpes críticos.'
      },
      reactions: ['Melt', 'Frozen', 'Superconduct']
    },
    {
      name: 'Geo',
      emoji: '⛰️',
      color: '#FFCC99',
      description: {
        english: 'The element of earth. Provides strong shields and defensive capabilities.',
        spanish: 'El elemento de la tierra. Proporciona escudos fuertes y capacidades defensivas.'
      },
      reactions: ['Crystallize']
    }
  ]

  const t = language === 'spanish' ? 'spanish' : 'english'

  return (
    <div className="page">
      <div className="page-header">
        <h1>{tt.pages.elements.title}</h1>
        <p>{tt.pages.elements.subtitle}</p>
      </div>

      <div className="elements-grid">
        {elements.map(element => (
          <div 
            key={element.name}
            className="element-card"
            style={{ borderColor: element.color }}
          >
            <div className="element-header">
              <span className="element-emoji">{element.emoji}</span>
              <h3>{element.name}</h3>
            </div>
            <p className="element-description">
              {element.description[t]}
            </p>
            <div className="element-reactions">
              <strong>Reacciones:</strong>
              <div className="reactions-list">
                {element.reactions.map(reaction => (
                  <span key={reaction} className="reaction-badge">
                    {reaction}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Elements