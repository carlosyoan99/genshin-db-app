import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'

const Header: React.FC = () => {
  const { theme } = useTheme()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/characters', label: 'Personajes' },
    { path: '/weapons', label: 'Armas' },
    { path: '/artifacts', label: 'Artefactos' },
    { path: '/enemies', label: 'Enemigos' },
    { path: '/materials', label: 'Materiales' },
    { path: '/elements', label: 'Elementos' },
    { path: '/domains', label: 'Dominios' },
    { path: '/foods', label: 'Comidas' },
    { path: '/animals', label: 'Animales' },
    { path: '/about', label: 'Acerca de' }
  ]

  return (
    <header className={`header theme-${theme}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Genshin DB</h1>
        </Link>
        
        <nav className="nav">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-controls">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

export default Header