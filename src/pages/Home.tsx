import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'

const Home: React.FC = () => {
  const t = useTranslation()

  const sections = [
    { path: '/characters', label: t.nav.characters, emoji: '👤' },
    { path: '/weapons', label: t.nav.weapons, emoji: '⚔️' },
    { path: '/artifacts', label: t.nav.artifacts, emoji: '🛡️' },
    { path: '/enemies', label: t.nav.enemies, emoji: '👹' },
    { path: '/materials', label: t.nav.materials, emoji: '📦' },
    { path: '/elements', label: t.nav.elements, emoji: '🔮' },
    { path: '/domains', label: t.nav.domains, emoji: '🏰' },
    { path: '/foods', label: t.nav.foods, emoji: '🍲' },
    { path: '/animals', label: t.nav.animals, emoji: '🐾' }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.home.title}</h1>
        <p>{t.pages.home.subtitle}</p>
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
        <p>{t.pages.home.description}</p>
      </div>
    </div>
  )
}

export default Home