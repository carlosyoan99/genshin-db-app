import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CharacterCard from '../cards/CharacterCard'

const mockCharacter = {
  name: 'Test Character',
  element: 'Pyro',
  rarity: 5,
  images: {
    icon: 'test-icon.jpg'
  }
}

describe('CharacterCard', () => {
  it('renders character information correctly', () => {
    render(<CharacterCard character={mockCharacter} />)
    
    expect(screen.getByText('Test Character')).toBeInTheDocument()
    expect(screen.getByText('Pyro')).toBeInTheDocument()
    expect(screen.getByAltText('Test Character')).toBeInTheDocument()
  })
})