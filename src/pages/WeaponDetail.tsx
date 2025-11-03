import React from 'react'
import { useParams, Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/common/ImageWithFallback'

const WeaponDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const { language } = useLanguage()

  const weapon = name ? genshin.weapons(name, { 
    resultLanguage: language === 'spanish' ? 'spanish' : 'english'
  }) : null

  if (!weapon) {
    return (
      <div className="page">
        <div className="error-page">
          <h1>Arma no encontrada</h1>
          <Link to="/weapons" className="back-link">
            Volver a armas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="detail-header">
        <Link to="/weapons" className="back-link">
          ← Volver a armas
        </Link>
        <h1>{weapon.name}</h1>
        <div className="detail-subtitle">
          <span className="weapon-type-badge">{weapon.weaponType}</span>
          {weapon.rarity && (
            <span className="rarity-badge">{'⭐'.repeat(weapon.rarity)}</span>
          )}
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-image">
          <ImageWithFallback 
            src={weapon.images?.filename_icon} 
            alt={weapon.name}
            fallbackType='weapon'
          />
        </div>

        <div className="detail-info">
          <section className="info-section">
            <h2>Información General</h2>
            <div className="info-grid">
              <div className="info-item">
                <strong>Tipo:</strong>
                <span>{weapon.weaponType}</span>
              </div>
              {weapon.mainStatText && (
                <div className="info-item">
                  <strong>Substat:</strong>
                  <span>{weapon.mainStatText}</span>
                </div>
              )}
              {weapon.rarity && (
                <div className="info-item">
                  <strong>Rareza:</strong>
                  <span>{'⭐'.repeat(weapon.rarity)}</span>
                </div>
              )}
            </div>
          </section>

          {weapon.effectTemplateRaw && (
            <section className="info-section">
              <h2>Efecto</h2>
              <p>{weapon.effectTemplateRaw}</p>
              {weapon.effectName && (
                <p><strong>Nombre del efecto:</strong> {weapon.effectName}</p>
              )}
            </section>
          )}

          {weapon.description && (
            <section className="info-section">
              <h2>Descripción</h2>
              <p>{weapon.description}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default WeaponDetail