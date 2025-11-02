import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'
import { NAV_ROUTES } from '../../utils/constants'

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()
  const location = useLocation()

  // Cerrar sidebar al cambiar de ruta en móvil
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(false)
    }
  }, [location])

  // Cerrar sidebar al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('.sidebar')
      const menuButton = document.querySelector('.menu-button')
      
      if (isOpen && 
          sidebar && 
          !sidebar.contains(event.target as Node) &&
          menuButton &&
          !menuButton.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
      
      {/* Botón de menú hamburguesa */}
      <button 
        className={`menu-button ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Panel lateral */}
      <aside className={`sidebar ${isOpen ? 'open' : ''} theme-${theme}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={closeSidebar}>
            <h1>Genshin DB</h1>
          </Link>
        </div>

        <nav className="sidebar-nav">
          {NAV_ROUTES.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={closeSidebar}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-controls">
          <ThemeToggle />
          <LanguageSelector />
        </div>

        <div className="sidebar-footer">
          <p>v1.0.0</p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar