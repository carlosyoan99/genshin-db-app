import React, { useEffect, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = useRef('☀️')

  useEffect(() => {
    switch (theme) {
      case 'light': themeIcon.current = '☀️'; break;
      case 'dark': themeIcon.current = '🌙'; break;
      case 'genshin': themeIcon.current = '⚡'; break;
      default: themeIcon.current = '☀️';
    }
  }, [theme])

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      <span className="theme-icon">{themeIcon.current}</span>
    </button>
  )
}

export default ThemeToggle