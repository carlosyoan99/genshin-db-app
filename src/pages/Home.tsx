import React from 'react'
import { Link } from 'react-router-dom'
// import { useLanguage } from '../contexts/LanguageContext'

const Home: React.FC = () => {
//  const { language } = useLanguage()

  const sections = [
    { path: '/characters', label: 'Personajes', emoji: '👤' },
    { path: '/weapons', label: 'Armas', emoji: '⚔️' },
    { path: '/artifacts', label: 'Artefactos', emoji: '🛡️' },
    { path: '/enemies', label: 'Enemigos', emoji: '👹' },
    { path: '/materials', label: 'Materiales', emoji: '📦' },
    { path: '/elements', label: 'Elementos', emoji: '🔮' },
    { path: '/domains', label: 'Dominios', emoji: '🏰' },
    { path: '/foods', label: 'Comidas', emoji: '🍲' },
    { path: '/animals', label: 'Animales', emoji: '🐾' }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Genshin Impact Database</h1>
        <p>Explora toda la información del mundo de Teyvat</p>
      </div>

      <div className="home-grid">
        {sections.map(section => (
          <Link key={section.path} to={section.path} className="home-card">
            <span className="home-card-emoji">{section.emoji}</span>
            <h3>{section.label}</h3>
          </Link>
        ))}
      </div>

      <div className="home-info">
        <p>
          Esta aplicación utiliza la librería genshin-db para proporcionar 
          información actualizada sobre Genshin Impact.
        </p>
      </div>
    </div>
  )
}

export default Home