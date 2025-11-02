import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import { NAV_ROUTES } from '../../utils/constants'

const Header: React.FC = () => {
  const { theme } = useTheme()
  const location = useLocation()

// Encontrar la página actual para mostrar el título
  const currentPage = NAV_ROUTES.find(route => route.path === location.pathname) || 
                     NAV_ROUTES.find(route => route.path === '/')

  return (
    <header className={`header theme-${theme}`}>
      <div className="header-container">
        <div className="header-title">
          <h1>{currentPage?.label || 'Genshin DB'}</h1>
        </div>
        
        {/* Controles en el header para desktop */}
        <div className="header-controls desktop-only">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

export default Header