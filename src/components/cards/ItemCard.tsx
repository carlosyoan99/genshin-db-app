import React from 'react'

interface ItemCardProps {
  name: string
  image?: string
  rarity?: number
  type?: string
  description?: string
}

const ItemCard: React.FC<ItemCardProps> = ({ 
  name, 
  image, 
  rarity, 
  type,
  description 
}) => {
  return (
    <div className="item-card">
      <div className="item-header">
        <img 
          src={image} 
          alt={name}
          className="item-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://via.placeholder.com/50x50?text=?'
          }}
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