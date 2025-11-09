import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'

interface EmptyStateProps {
  type?: 'search' | 'data' | 'error' | 'favorites'
  title?: string
  message?: string
  actionText?: string
  onAction?: () => void
  icon?: string
}

const EmptyState: React.FC<EmptyStateProps> = ({
  type = 'data',
  title,
  message,
  actionText,
  onAction,
  icon
}) => {
  const t = useTranslation()

  // Configuración por tipo
  const getConfig = () => {
    const configs = {
      search: {
        icon: '🔍',
        title: title || t.common.noResults || 'No results found',
        message: message || 'Try adjusting your search terms or filters.',
        actionText: 'Clear search'
      },
      data: {
        icon: '📁',
        title: title || 'No data available',
        message: message || 'There is no data to display at the moment.',
        actionText: 'Refresh'
      },
      error: {
        icon: '⚠️',
        title: title || 'Something went wrong',
        message: message || 'We encountered an error while loading the data.',
        actionText: 'Try again'
      },
      favorites: {
        icon: '❤️',
        title: title || 'No favorites yet',
        message: message || 'Start adding items to your favorites list!',
        actionText: 'Browse items'
      }
    }

    return configs[type]
  }

  const config = getConfig()
  const displayIcon = icon || config.icon

  return (
    <div className="empty-state">
      <div className="empty-state-content">
        <div className="empty-state-icon">
          {displayIcon}
        </div>
        <h3 className="empty-state-title">{config.title}</h3>
        <p className="empty-state-message">{config.message}</p>
        
        {onAction && actionText && (
          <button 
            onClick={onAction}
            className="empty-state-action"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  )
}

export default EmptyState