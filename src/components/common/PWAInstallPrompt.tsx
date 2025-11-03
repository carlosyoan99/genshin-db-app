import React from 'react'
import { usePWA } from '../../hooks/usePWA'
import { useTranslation } from '../../hooks/useTranslation'

const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, installApp } = usePWA()
  const t = useTranslation()

  if (!isInstallable) return null

  return (
    <div className="pwa-install-prompt">
      <div className="pwa-install-content">
        <p>📱 {t.common.installPrompt || 'Install Genshin DB for better experience'}</p>
        <button onClick={installApp} className="install-button">
          {t.common.install || 'Install'}
        </button>
      </div>
    </div>
  )
}

export default PWAInstallPrompt