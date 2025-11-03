import React from 'react'
import { useParams, Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/common/ImageWithFallback'

const CharacterDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const { language } = useLanguage()

  const character = name ? genshin.characters(name, { 
    resultLanguage: language === 'spanish' ? 'spanish' : 'english'
  }) : null

  if (!character) {
    return (
      <div className="page">
        <div className="error-page">
          <h1>Personaje no encontrado</h1>
          <Link to="/characters" className="back-link">
            Volver a personajes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="detail-header">
        <Link to="/characters" className="back-link">
          ← Volver a personajes
        </Link>
        <h1>{character.name}</h1>
        <div className="detail-subtitle">
          {character.elementType && (
            <span className={`element-badge ${character.elementType.toLowerCase()}`}>
              {character.elementType}
            </span>
          )}
          {character.weaponType && (
            <span className="weapon-badge">{character.weaponType}</span>
          )}
          {character.rarity && (
            <span className="rarity-badge">{'⭐'.repeat(character.rarity)}</span>
          )}
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-image">
          <ImageWithFallback 
            src={character.images?.card} 
            alt={character.name}
            fallbackType="character"
          />
        </div>

        <div className="detail-info">
          <section className="info-section">
            <h2>Informaci&oacute;n General</h2>
            <div className="info-grid">
              {character.region && (
                <div className="info-item">
                  <strong>Regi&oacte;n:</strong>
                  <span>{character.region}</span>
                </div>
              )}
              {character.affiliation && (
                <div className="info-item">
                  <strong>Afiliaci&oacute;n:</strong>
                  <span>{character.affiliation}</span>
                </div>
              )}
              {character.constellation && (
                <div className="info-item">
                  <strong>Constelaci&oacute;n:</strong>
                  <span>{character.constellation}</span>
                </div>
              )}
              {character.birthday && (
                <div className="info-item">
                  <strong>Cumplea&ntilde;os:</strong>
                  <span>{character.birthday}</span>
                </div>
              )}
            </div>
          </section>

          {character.description && (
            <section className="info-section">
              <h2>Descripci&oacute;n</h2>
              <p>{character.description}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail