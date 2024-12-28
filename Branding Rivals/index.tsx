'use client'

import { useState } from 'react'
import CharacterSelection from './components/CharacterSelection'
import BrandingCustomization from './components/BrandingCustomization'
import MockupGallery from './components/MockupGallery'

const characters = [
  { id: 1, name: 'Chef Ana', restaurantType: 'Cocina Fusión' },
  { id: 2, name: 'Chef Bruno', restaurantType: 'Pizzería Gourmet' },
  { id: 3, name: 'Chef Carla', restaurantType: 'Restaurante Vegano' },
  { id: 4, name: 'Chef David', restaurantType: 'Steakhouse' },
  { id: 5, name: 'Chef Elena', restaurantType: 'Sushi Bar' },
  { id: 6, name: 'Chef Fernando', restaurantType: 'Taquería Moderna' },
]

const brandingOptions = {
  logos: ['Logo1', 'Logo2', 'Logo3', 'Logo4', 'Logo5', 'Logo6'],
  fonts: ['Font1', 'Font2', 'Font3', 'Font4', 'Font5', 'Font6'],
  colors: ['Colors1', 'Colors2', 'Colors3', 'Colors4', 'Colors5', 'Colors6'],
}

export default function BrandingRivals() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [selectedLogo, setSelectedLogo] = useState('')
  const [selectedFont, setSelectedFont] = useState('')
  const [selectedColors, setSelectedColors] = useState('')

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character)
  }

  const handleBrandingSelect = (type, option) => {
    switch (type) {
      case 'logo':
        setSelectedLogo(option)
        break
      case 'font':
        setSelectedFont(option)
        break
      case 'colors':
        setSelectedColors(option)
        break
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Branding Rivals</h1>
      {!selectedCharacter ? (
        <CharacterSelection characters={characters} onSelect={handleCharacterSelect} />
      ) : (
        <>
          <BrandingCustomization
            options={brandingOptions}
            onSelect={handleBrandingSelect}
            selectedLogo={selectedLogo}
            selectedFont={selectedFont}
            selectedColors={selectedColors}
          />
          <MockupGallery
            character={selectedCharacter}
            logo={selectedLogo}
            font={selectedFont}
            colors={selectedColors}
          />
        </>
      )}
    </div>
  )
}