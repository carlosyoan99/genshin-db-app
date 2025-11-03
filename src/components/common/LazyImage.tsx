import React from 'react'
import { useLazyLoad } from '../../hooks/useLazyLoad'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fallback?: string
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMzNzQxNTEiLz48L3N2Zz4='
}) => {
  const { ref, isVisible } = useLazyLoad({
    rootMargin: '50px 0px',
    threshold: 0.1
  })

  return (
    <div ref={ref} className={`lazy-image-container ${className}`}>
      {isVisible ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = fallback
          }}
        />
      ) : (
        <div className="skeleton" style={{ width, height }} />
      )}
    </div>
  )
}

export default LazyImage