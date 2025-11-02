import React from 'react'
//import type { Character } from '../../types'
import type { Character } from 'genshin-db'

interface CharacterCardProps {
  character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-header">
        <img 
          src={character.images?.filename_icon} 
          alt={character.name}
          className="character-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://via.placeholder.com/60x60?text=?'
          }}
        />
        <div>
          <h3 className="character-name">{character.name}</h3>
          <div className="character-details">
            {character.elementType && (
              <span className={`element-badge ${character.elementText.toLowerCase()}`}>
                {character.elementText}
              </span>
            )}
            {character.rarity && (
              <span className="rarity-badge">
                {'⭐'.repeat(character.rarity)}
              </span>
            )}
          </div>
        </div>
      </div>
      {character.title && (
        <p className="character-title">{character.title}</p>
      )}
    </div>
  )
}

export default CharacterCard