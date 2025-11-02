import React from 'react'
import { useParams, Link } from 'react-router-dom'
import genshin from 'genshin-db'
import { useLanguage } from '../contexts/LanguageContext'

const ArtifactDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const { language } = useLanguage()

  const artifact = name ? genshin.artifacts(name, { 
    resultLanguage: language === 'spanish' ? 'spanish' : 'english'
  }) : null

  if (!artifact) {
    return (
      <div className="page">
        <div className="error-page">
          <h1>Artefacto no encontrado</h1>
          <Link to="/artifacts" className="back-link">
            Volver a artefactos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="detail-header">
        <Link to="/artifacts" className="back-link">
          ← Volver a artefactos
        </Link>
        <h1>{artifact.name}</h1>
        <div className="detail-subtitle">
          {artifact.rarityList && (
            <span className="rarity-badge">
              Rareza: {artifact.rarityList.join('-')}&nbsp;⭐
            </span>
          )}
        </div>
      </div>

      <div className="detail-content">
        <div className="detail-images">
          <div className="artifact-image-grid">
            {artifact.images?.filename_flower && (
              <div className="artifact-piece">
                <img src={artifact.images.filename_flower} alt="Flor" />
                <span>Flor de la Vida</span>
              </div>
            )}
            {artifact.images?.filename_plume && (
              <div className="artifact-piece">
                <img src={artifact.images.filename_plume} alt="Pluma" />
                <span>Pluma de la Muerte</span>
              </div>
            )}
            {artifact.images?.filename_sands && (
              <div className="artifact-piece">
                <img src={artifact.images.filename_sands} alt="Arenas" />
                <span>Arenas del Eón</span>
              </div>
            )}
            {artifact.images?.filename_goblet && (
              <div className="artifact-piece">
                <img src={artifact.images.filename_goblet} alt="Cáliz" />
                <span>Cáliz de Eonothem</span>
              </div>
            )}
            {artifact.images?.filename_circlet && (
              <div className="artifact-piece">
                <img src={artifact.images.filename_circlet} alt="Corona" />
                <span>Corona de la Razón</span>
              </div>
            )}
          </div>
        </div>

        <div className="detail-info">
          {artifact['1pc'] && (
            <section className="info-section">
              <h2>Bono de 2 Piezas</h2>
              <p>{artifact['1pc']}</p>
            </section>
          )}

          {artifact['2pc'] && (
            <section className="info-section">
              <h2>Bono de 2 Piezas</h2>
              <p>{artifact['2pc']}</p>
            </section>
          )}

          {artifact['4pc'] && (
            <section className="info-section">
              <h2>Bono de 4 Piezas</h2>
              <p>{artifact['4pc']}</p>
            </section>
          )}

          {artifact.version && (
            <section className="info-section">
              <h2>Descripción</h2>
              <p>{artifact.version}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArtifactDetail