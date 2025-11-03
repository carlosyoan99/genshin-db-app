import type { 
  SupportedLanguage, 
  Theme, 
  Element, 
  WeaponType, 
  Region, 
  MaterialCategory,
  Rarity 
} from '../utils/constants';

// Re-exportar tipos desde constants
export type {
  SupportedLanguage,
  Theme,
  Element,
  WeaponType,
  Region,
  MaterialCategory,
  Rarity
};
  
export interface Character {
  name: string
  title?: string
  description?: string
  rarity?: Rarity
  element?: Element
  weapontype?: WeaponType
  substat?: string
  gender?: string
  body?: string
  association?: string
  region?: Region
  affiliation?: string
  birthdaymmdd?: string
  birthday?: string
  constellation?: string
  cv?: {
    english?: string
    chinese?: string
    japanese?: string
    korean?: string
  }
  costs?: {
    ascend1?: []
    ascend2?: [] /** any[] */
    ascend3?: []
    ascend4?: []
  }
  images?: {
    card?: string
    portrait?: string
    icon?: string
    sideicon?: string
    cover1?: string
    cover2?: string
    'hoyolab-avatar'?: string
    nameicon?: string
    nameiconcard?: string
    namegachasplash?: string
    namegachaslice?: string
  }
  talent?: {
    combat1?: Talent
    combat2?: Talent
    combatsp?: Talent
    passive1?: Talent
    passive2?: Talent
    passive3?: Talent
    passive4?: Talent
  }
  constellations?: Constellation[]
  talentmaterial?: TalentMaterial
  url?: {
    fandom?: string
  }
  version?: string
}

export interface Talent {
  name: string
  info: string
  description?: string
  attributes?: {
    labels: string[]
    parameters: { [key: string]: number[] }
  }
}

export interface Constellation {
  name: string
  effect: string
  description?: string
}

export interface TalentMaterial {
  name: string
  "2starname"?: string
  "3starname"?: string
  "4starname"?: string
  day?: string[]
  location?: string
  region?: string
  domainofmastery?: string
}

export interface Weapon {
  name: string
  description?: string
  weapontype?: string
  rarity?: number
  baseatk?: number
  substat?: string
  subvalue?: string
  effectname?: string
  effect?: string
  r1?: string[]
  r2?: string[]
  r3?: string[]
  r4?: string[]
  r5?: string[]
  weaponmaterialtype?: string
  costs?: {
    ascend1?: [] /** any[] */
    ascend2?: []
    ascend3?: []
    ascend4?: []
  }
  images?: {
    icon?: string
    awakenicon?: string
  }
  url?: {
    fandom?: string
  }
  version?: string
}

export interface AscensionMaterial {
  name: string
  count?: number
}

export interface Material {
  name: string
  description?: string
  rarity?: number
  category?: string
  materialtype?: string
  dropdomain?: string
  daysofweek?: string[]
  source?: string[]
  images?: {
    icon?: string
    redirect?: string
  }
}

export interface Artifact {
  name: string
  rarity?: string[]
  '2pc'?: string
  '4pc'?: string
  flower?: {
    name?: string
    relictype?: string
    description?: string
  }
  plume?: {
    name?: string
    relictype?: string
    description?: string
  }
  sands?: {
    name?: string
    relictype?: string
    description?: string
  }
  goblet?: {
    name?: string
    relictype?: string
    description?: string
  }
  circlet?: {
    name?: string
    relictype?: string
    description?: string
  }
  images?: {
    flower?: string
    plume?: string
    sands?: string
    goblet?: string
    circlet?: string
  }
  url?: {
    fandom?: string
  }
  version?: string
}

export interface Enemy {
  name: string
  specialname?: string
  enemytype?: string
  category?: string
  description?: string
  investigation?: {
    name?: string
    category?: string
    description?: string
  }[]
  rewards?: {
    name?: string
    rarity?: number
  }[]
  images?: {
    icon?: string
  }
  drops?: string[]
  url?: {
    fandom?: string
  }
  version?: string
}
/**
export type WeaponType = 'Sword' | 'Claymore' | 'Polearm' | 'Bow' | 'Catalyst'
export type Element = 'Pyro' | 'Hydro' | 'Anemo' | 'Electro' | 'Dendro' | 'Cryo' | 'Geo'
export type Region = 'Mondstadt' | 'Liyue' | 'Inazuma' | 'Sumeru' | 'Fontaine' | 'Natlan' | 'Snezhnaya'
*/