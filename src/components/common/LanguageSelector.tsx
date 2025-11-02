import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { SUPPORTED_LANGUAGES } from '../../utils/constants'
import type { Language } from '../../contexts/types'

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="language-selector"
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.name}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelector