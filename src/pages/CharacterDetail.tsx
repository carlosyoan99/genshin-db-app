import React from 'react'
import { useParams, Link } from 'react-router-dom'
import genshin, { type QueryOptions } from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/common/ImageWithFallback'
import MaterialList from '../components/common/MaterialList'

const CharacterDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const { language } = useLanguage()
  const config : QueryOptions = {
    resultLanguage: language === 'spanish' ? 'spanish' : 'english'
  }

  const character = name ? genshin.characters(name, config) : null

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

  const characterTalent = name ? genshin.talents(name, config) : null
  const cc = name ? genshin.constellations(name, config) : null
  const characterConstellation = [
    cc?.c1,
    cc?.c2,
    cc?.c3,
    cc?.c4, 
    cc?.c6,
    cc?.c6,
  ].filter(Boolean)

  // Obtener talentos
  const combatTalents = [
    { key: 'combat1', label: 'Ataque Normal' },
    { key: 'combat2', label: 'Habilidad Elemental' },
    { key: 'combatsp', label: 'Habilidad Definitiva' },
    { key: 'combatju', label: 'Habilidad Definitiva' },
    { key: 'combat3', label: 'Habilidad Definitiva' }
  ].filter(talent => {
    if (characterTalent) return characterTalent[talent.key as keyof typeof characterTalent]
  })

  const passiveTalents = [
    { key: 'passive1', label: 'Habilidad Pasiva 1' },
    { key: 'passive2', label: 'Habilidad Pasiva 2' },
    { key: 'passive3', label: 'Habilidad Pasiva 3' },
    { key: 'passive4', label: 'Habilidad Pasiva 4' }
  ].filter(talent => {
    if (characterTalent) return characterTalent[talent.key as keyof typeof characterTalent]
  })

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

          {/* Talentos de Combate */}
          {combatTalents.length > 0 && (
            <section className="info-section">
              <h2>Talentos de Combate</h2>
              <div className="talents-grid">
                {combatTalents.map(({ key, label }) => {
                  const talent = characterTalent ? characterTalent[key as keyof typeof characterTalent] : null
                  return talent ? (
                    <div key={key} className="talent-card">
                      <h4>{label}</h4>
                      <p className="talent-description">{talent.name}</p>
                      {talent.description && (
                        <p className="talent-details">{talent.description}</p>
                      )}
                    </div>
                  ) : null
                })}
              </div>
            </section>
          )}

          {/* Talentos Pasivos */}
          {passiveTalents.length > 0 && (
            <section className="info-section">
              <h2>Talentos Pasivos</h2>
              <div className="talents-grid">
                {passiveTalents.map(({ key, label }) => {
                  const talent = characterTalent ? characterTalent[key as keyof typeof characterTalent] : null
                  return talent ? (
                    <div key={key} className="talent-card passive">
                      <h4>{label}</h4>
                      <p className="talent-description">{talent.description}</p>
                    </div>
                  ) : null
                })}
              </div>
            </section>
          )}

          {/* Constelaciones */}
          {characterConstellation && characterConstellation.length > 0 && (
            <section className="info-section">
              <h2>Constelaciones</h2>
              <div className="constellations-grid">
                {characterConstellation.map((constellation, index) => {
                  if (constellation) return (
                  <div key={index} className="constellation-card">
                    <div className="constellation-header">
                      <span className="constellation-level">C{index + 1}</span>
                      <h4>{constellation.name}</h4>
                    </div>
                    {constellation.description && (
                      <p className="constellation-description">{constellation.description}</p>
                    )}
                  </div>)
                })}
              </div>
            </section>
          )}

          {/* Materiales de Ascensión */}
          {character.costs && (
            <section className="info-section">
              <h2>Materiales de Ascensión</h2>
              <div className="ascension-materials">
                {Object.entries(character.costs).map(([level, materials]) => (
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

export default CharacterDetail