import React from 'react'
import { useParams, Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'

const EnemyDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const { language } = useLanguage()

  const enemy = name ? genshin.enemies(name, { 
    resultLanguage: language === 'spanish' ? 'spanish' : 'english'
  }) : null

  if (!enemy) {
    return (
      <div className="page">
        <div className="error-page">
          <h1>Enemigo no encontrado</h1>
          <Link to="/enemies" className="back-link">
            Volver a enemigos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="detail-header">
        <Link to="/enemies" className="back-link">
          ← Volver a enemigos
        </Link>
        <h1>{enemy.name}</h1>
        <div className="detail-subtitle">
          {enemy.enemyType && (
            <span className="type-badge">{enemy.enemyType}</span>
          )}
          {enemy.categoryType && (
            <span className="category-badge">{enemy.categoryText}</span>
          )}
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-image">
          <img 
            src={enemy.images?.filename_icon} 
            alt={enemy.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://via.placeholder.com/300x300?text=Enemy'
            }}
          />
        </div>

        <div className="detail-info">
          <section className="info-section">
            <h2>Información General</h2>
            <div className="info-grid">
              {enemy.enemyType && (
                <div className="info-item">
                  <strong>Tipo:</strong>
                  <span>{enemy.enemyType}</span>
                </div>
              )}
              {enemy.categoryType && (
                <div className="info-item">
                  <strong>Categoría:</strong>
                  <span>{enemy.categoryText}</span>
                </div>
              )}
              {enemy.specialNames && (
                <div className="info-item">
                  <strong>Nombre especial:</strong>
                  <span>{enemy.specialNames.join(". ")}</span>
                </div>
              )}
            </div>
          </section>

          {enemy.description && (
            <section className="info-section">
              <h2>Descripción</h2>
              <p>{enemy.description}</p>
            </section>
          )}

          {enemy.rewardPreview && enemy.rewardPreview.length > 0 && (
            <section className="info-section">
              <h2>Recompensas</h2>
              <div className="drops-grid">
                {enemy.rewardPreview.map((drop, index) => (
                  <div key={index} className="drop-item">
                    {drop.name}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default EnemyDetail