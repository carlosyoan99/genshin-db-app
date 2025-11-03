import React, { useState } from 'react'
import { PLACEHOLDER_IMAGES } from '../../utils/constants'

interface ImageWithFallbackProps {
  src?: string
  alt: string
  className?: string
  fallbackType?: 'character' | 'weapon' | 'artifact' | 'enemy' | 'material' | 'domain' | 'food' | 'animal'
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'character'
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(PLACEHOLDER_IMAGES[fallbackType.toUpperCase() as keyof typeof PLACEHOLDER_IMAGES])
    }
  }

  // Función para construir la URL completa de la imagen
  const getImageUrl = (url: string | undefined): string => {
    if (!url) return PLACEHOLDER_IMAGES[fallbackType.toUpperCase() as keyof typeof PLACEHOLDER_IMAGES]
    
    // Si ya es una URL completa, usarla directamente
    if (url.startsWith('http')) return url
    
    // Si es una ruta relativa, construir la URL completa
    // Las imágenes de genshin-db suelen ser relativas al dominio de Genshin Impact
    if (url.startsWith('/')) return `https://genshin.honeyhunterworld.com${url}`
    
    return url
  }

  return (
    <img
      src={getImageUrl(imgSrc)}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  )
}

export default ImageWithFallback