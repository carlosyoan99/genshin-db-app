import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return '☀️'
      case 'dark': return '🌙'
      case 'genshin': return '⚡'
      default: return '☀️'
    }
  }

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      <span className="theme-icon">{getThemeIcon()}</span>
    </button>
  )
}

export default ThemeToggle