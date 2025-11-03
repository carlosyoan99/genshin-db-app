import { PLACEHOLDER_IMAGES } from './constants'

// Función para construir URLs de imágenes de Genshin Impact
export const buildGenshinImageUrl = (relativePath: string | undefined): string => {
  if (!relativePath) return PLACEHOLDER_IMAGES.CHARACTER
  
  // Si ya es una URL completa
  if (relativePath.startsWith('http')) {
    return relativePath
  }
  
  // Si es una ruta relativa de genshin-db
  if (relativePath.startsWith('/')) {
    return `https://genshin.honeyhunterworld.com${relativePath}`
  }
  
  // Si es un nombre de archivo sin ruta
  return `https://genshin.honeyhunterworld.com/img/${relativePath}`
}

// Función para obtener el tipo de fallback basado en la entidad
export const getFallbackType = (entityType: string): keyof typeof PLACEHOLDER_IMAGES => {
  const typeMap: { [key: string]: keyof typeof PLACEHOLDER_IMAGES } = {
    'character': 'CHARACTER',
    'weapon': 'WEAPON',
    'artifact': 'ARTIFACT',
    'enemy': 'ENEMY',
    'material': 'MATERIAL',
    'domain': 'DOMAIN',
    'food': 'FOOD',
    'animal': 'ANIMAL'
  }
  
  return typeMap[entityType.toLowerCase()] || 'CHARACTER'
}

// Función para obtener la mejor imagen disponible
export const getBestImage = (images: any, priorities: string[] = []): string | undefined => {
  if (!images) return undefined
  
  for (const priority of priorities) {
    if (images[priority]) {
      return images[priority]
    }
  }
  
  // Si no encuentra ninguna prioritaria, devolver la primera disponible
  return Object.values(images).find(img => img) as string | undefined
}