import React from 'react'
import ImageWithFallback from '../common/ImageWithFallback'

interface ItemCardProps {
  name: string
  image?: string
  rarity?: number
  type?: string
  description?: string
  itemType?: 'character' | 'weapon' | 'artifact' | 'enemy' | 'material' | 'domain' | 'food' | 'animal'
}

const ItemCard: React.FC<ItemCardProps> = ({ 
  name, 
  image, 
  rarity, 
  type,
  description,
  itemType = 'material'
}) => {
  return (
    <div className="item-card">
      <div className="item-header">
        <ImageWithFallback 
          src={image} 
          alt={name}
          className="item-image"
          fallbackType={itemType}
        />
        <div>
          <h3 className="item-name">{name}</h3>
          <div className="item-details">
            {rarity && (
              <span className="rarity-badge">
                {'⭐'.repeat(rarity)}
              </span>
            )}
            {type && (
              <span className="type-badge">{type}</span>
            )}
          </div>
        </div>
      </div>
      {description && (
        <p className="item-description">{description}</p>
      )}
    </div>
  )
}

export default ItemCard