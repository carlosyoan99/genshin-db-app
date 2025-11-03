import React from 'react'
import { useParams, Link } from 'react-router-dom'
import genshin, { type QueryOptions } from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/common/ImageWithFallback'
import MaterialList from '../components/common/MaterialList'

const WeaponDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const { language } = useLanguage()
  const config : QueryOptions = { 
    resultLanguage: language === 'spanish' ? 'spanish' : 'english'
  }

  const weapon = name ? genshin.weapons(name, config) : null

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

  // Niveles de refinamiento
  const refinementLevels = [
    { level: 'R1', effect: weapon.r1 },
    { level: 'R2', effect: weapon.r2 },
    { level: 'R3', effect: weapon.r3 },
    { level: 'R4', effect: weapon.r4 },
    { level: 'R5', effect: weapon.r5 }
  ].filter(refinement => refinement.effect)

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
              {weapon.baseStatText && (
                <div className="info-item">
                  <strong>ATQ Base:</strong>
                  <span>{weapon.baseAtkValue}</span>
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

          {/* Niveles de Refinamiento */}
          {refinementLevels.length > 0 && (
            <section className="info-section">
              <h2>Niveles de Refinamiento</h2>
              <div className="refinement-levels">
                {refinementLevels.map((refinement, index) => (
                  <div key={index} className="refinement-card">
                    <h4>{refinement.level}</h4>
                    {refinement.effect?.values.map((effect, effectIndex) => (
                      <p key={effectIndex} className="refinement-effect">
                        {effect}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Materiales de Ascensión */}
          {weapon.costs && (
            <section className="info-section">
              <h2>Materiales de Ascensión</h2>
              <div className="ascension-materials">
                {Object.entries(weapon.costs).map(([level, materials]) => (
                  <div key={level} className="ascension-level">
                    <h4>Ascensión {level.replace('ascend', '')}</h4>
                    <MaterialList
                      materials={materials || []}
                      title=""
                    />
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

export default WeaponDetail