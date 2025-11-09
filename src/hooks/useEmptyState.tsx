import { useState, useCallback } from 'react'

export type EmptyStateType = 'search' | 'data' | 'error' | 'favorites'

interface UseEmptyStateProps {
  initialType?: EmptyStateType
}

export const useEmptyState = ({ initialType = 'data' }: UseEmptyStateProps = {}) => {
  const [emptyState, setEmptyState] = useState<{
    isVisible: boolean
    type: EmptyStateType
    title?: string
    message?: string
    actionText?: string
  }>({
    isVisible: false,
    type: initialType
  })

  const showEmptyState = useCallback((
    type: EmptyStateType = 'data',
    options?: {
      title?: string
      message?: string
      actionText?: string
    }
  ) => {
    setEmptyState({
      isVisible: true,
      type,
      ...options
    })
  }, [])

  const hideEmptyState = useCallback(() => {
    setEmptyState(prev => ({ ...prev, isVisible: false }))
  }, [])

  const handleAction = useCallback((callback?: () => void) => {
    if (callback) callback()
    
    hideEmptyState()
  }, [hideEmptyState])

  return {
    emptyState,
    showEmptyState,
    hideEmptyState,
    handleAction
  }
}