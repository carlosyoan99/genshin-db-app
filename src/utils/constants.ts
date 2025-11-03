// Constantes para la aplicación Genshin Impact DB

// Idiomas soportados
export const SUPPORTED_LANGUAGES = [
  { code: 'english', name: 'English', flag: '🇺🇸', genshinCode: 'english' },
  { code: 'spanish', name: 'Español', flag: '🇪🇸', genshinCode: 'spanish' },
  { code: 'japanese', name: '日本語', flag: '🇯🇵', genshinCode: 'japanese' },
  { code: 'chinese', name: '中文', flag: '🇨🇳', genshinCode: 'chinese' },
  { code: 'korean', name: '한국어', flag: '🇰🇷', genshinCode: 'korean' },
] as const;

// Temas disponibles
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  GENSHIN: 'genshin',
} as const;

// Rutas de navegación
export const NAV_ROUTES = [
  { path: '/', label: 'Inicio', icon: '🏠' },
  { path: '/characters', label: 'Personajes', icon: '👤' },
  { path: '/weapons', label: 'Armas', icon: '⚔️' },
  { path: '/artifacts', label: 'Artefactos', icon: '🛡️' },
  { path: '/enemies', label: 'Enemigos', icon: '👹' },
  { path: '/materials', label: 'Materiales', icon: '📦' },
  { path: '/elements', label: 'Elementos', icon: '🔮' },
  { path: '/domains', label: 'Dominios', icon: '🏰' },
  { path: '/foods', label: 'Comidas', icon: '🍲' },
  { path: '/animals', label: 'Animales', icon: '🐾' },
  { path: '/about', label: 'Acerca de', icon: 'ℹ️' },
] as const;

// Elementos del juego
export const ELEMENTS = [
  {
    name: 'Pyro',
    displayName: 'Pyro',
    color: '#FF9999',
    bgColor: '#7f1d1d',
    emoji: '🔥',
    description: {
      english: 'The element of fire. Creates powerful reactions with other elements.',
      spanish: 'El elemento del fuego. Crea reacciones poderosas con otros elementos.'
    }
  },
  {
    name: 'Hydro',
    displayName: 'Hydro',
    color: '#99CCFF',
    bgColor: '#1e3a8a',
    emoji: '💧',
    description: {
      english: 'The element of water. Essential for healing and reaction support.',
      spanish: 'El elemento del agua. Esencial para curación y soporte de reacciones.'
    }
  },
  {
    name: 'Anemo',
    displayName: 'Anemo',
    color: '#99FFCC',
    bgColor: '#065f46',
    emoji: '🌪️',
    description: {
      english: 'The element of wind. Excels at crowd control and spreading elements.',
      spanish: 'El elemento del viento. Destaca en control de multitudes y esparcir elementos.'
    }
  },
  {
    name: 'Electro',
    displayName: 'Electro',
    color: '#CC99FF',
    bgColor: '#581c87',
    emoji: '⚡',
    description: {
      english: 'The element of lightning. Provides energy and rapid attacks.',
      spanish: 'El elemento del rayo. Proporciona energía y ataques rápidos.'
    }
  },
  {
    name: 'Dendro',
    displayName: 'Dendro',
    color: '#99FF99',
    bgColor: '#166534',
    emoji: '🌿',
    description: {
      english: 'The element of nature. Creates complex reactions with other elements.',
      spanish: 'El elemento de la naturaleza. Crea reacciones complejas con otros elementos.'
    }
  },
  {
    name: 'Cryo',
    displayName: 'Cryo',
    color: '#99FFFF',
    bgColor: '#0e7490',
    emoji: '❄️',
    description: {
      english: 'The element of ice. Excellent for crowd control and critical hits.',
      spanish: 'El elemento del hielo. Excelente para control de multitudes y golpes críticos.'
    }
  },
  {
    name: 'Geo',
    displayName: 'Geo',
    color: '#FFCC99',
    bgColor: '#92400e',
    emoji: '⛰️',
    description: {
      english: 'The element of earth. Provides strong shields and defensive capabilities.',
      spanish: 'El elemento de la tierra. Proporciona escudos fuertes y capacidades defensivas.'
    }
  }
] as const;

// Tipos de armas
export const WEAPON_TYPES = [
  'Sword',
  'Claymore',
  'Polearm',
  'Bow',
  'Catalyst'
] as const;

// Regiones del juego
export const REGIONS = [
  'Mondstadt',
  'Liyue',
  'Inazuma',
  'Sumeru',
  'Fontaine',
  'Natlan',
  'Snezhnaya'
] as const;

// Categorías de materiales
export const MATERIAL_CATEGORIES = [
  { value: 'all', label: { english: 'All', spanish: 'Todos' } },
  { value: 'character', label: { english: 'Character', spanish: 'Personaje' } },
  { value: 'weapon', label: { english: 'Weapon', spanish: 'Arma' } },
  { value: 'talent', label: { english: 'Talent', spanish: 'Talento' } },
  { value: 'ascension', label: { english: 'Ascension', spanish: 'Ascensión' } },
  { value: 'exp', label: { english: 'Experience', spanish: 'Experiencia' } },
  { value: 'common', label: { english: 'Common', spanish: 'Comunes' } },
  { value: 'elite', label: { english: 'Elite', spanish: 'Élite' } },
  { value: 'boss', label: { english: 'Boss', spanish: 'Jefe' } }
] as const;

// Tipos de artefactos
export const ARTIFACT_TYPES = [
  'Flower of Life',
  'Plume of Death',
  'Sands of Eon',
  'Goblet of Eonothem',
  'Circlet of Logos'
] as const;

// Días de la semana para dominios
export const WEEK_DAYS = [
  { english: 'Monday', spanish: 'Lunes' },
  { english: 'Tuesday', spanish: 'Martes' },
  { english: 'Wednesday', spanish: 'Miércoles' },
  { english: 'Thursday', spanish: 'Jueves' },
  { english: 'Friday', spanish: 'Viernes' },
  { english: 'Saturday', spanish: 'Sábado' },
  { english: 'Sunday', spanish: 'Domingo' }
] as const;

// Rarezas (rarity)
export const RARITY_COLORS: { [key: number]: string } = {
  1: '#8c8c8c',
  2: '#5e9e5e',
  3: '#4a8cdb',
  4: '#a256e1',
  5: '#d4af37'
};

// Colores para los temas
export const THEME_COLORS = {
  [THEMES.LIGHT]: {
    primary: '#2563eb',
    secondary: '#64748b',
    accent: '#f59e0b',
    background: '#ffffff',
    surface: '#f8fafc',
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    border: '#e2e8f0'
  },
  [THEMES.DARK]: {
    primary: '#3b82f6',
    secondary: '#94a3b8',
    accent: '#f59e0b',
    background: '#0f172a',
    surface: '#1e293b',
    textPrimary: '#f1f5f9',
    textSecondary: '#94a3b8',
    border: '#334155'
  },
  [THEMES.GENSHIN]: {
    primary: '#c53030',
    secondary: '#ecc94b',
    accent: '#b83280',
    background: '#fed7d7',
    surface: '#fff5f5',
    textPrimary: '#2d3748',
    textSecondary: '#4a5568',
    border: '#fed7d7'
  }
} as const;

// Configuración de la aplicación
export const APP_CONFIG = {
  name: 'Genshin Impact DB',
  version: '0.1',
  description: {
    english: 'A comprehensive database for Genshin Impact game data',
    spanish: 'Una base de datos completa para los datos del juego Genshin Impact'
  },
  author: 'Carlos Yoan',
  repository: 'https://github.com/carlosyoan99/genshin-db-app'
} as const;

// LocalStorage keys
export const STORAGE_KEYS = {
  THEME: 'theme',
  LANGUAGE: 'language',
  FAVORITES: 'favorites',
  RECENT_SEARCHES: 'recent-searches'
} as const;

// Breakpoints para responsive design
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1200
} as const;

// Configuración de paginación
export const PAGINATION_CONFIG = {
  ITEMS_PER_PAGE: 20,
  VISIBLE_PAGES: 5
} as const;

// Tipos de enemigos
export const ENEMY_TYPES = [
  'Common Enemies',
  'Elite Enemies',
  'Boss Enemies',
  'Weekly Bosses'
] as const;

// Categorías de alimentos
export const FOOD_CATEGORIES = [
  'Recovery',
  'ATK-Boosting',
  'DEF-Boosting',
  'Adventurer\'s',
  'Satisfaction'
] as const;

// Categorías de animales
export const ANIMAL_CATEGORIES = [
  'Birds',
  'Beasts',
  'Fish',
  'Other'
] as const;

// Reacciones elementales
export const ELEMENTAL_REACTIONS = {
  PYRO: ['Vaporize', 'Melt', 'Overloaded', 'Burning'],
  HYDRO: ['Vaporize', 'Electro-Charged', 'Frozen', 'Bloom'],
  ANEMO: ['Swirl'],
  ELECTRO: ['Overloaded', 'Electro-Charged', 'Superconduct', 'Quicken'],
  DENDRO: ['Burning', 'Bloom', 'Quicken'],
  CRYO: ['Melt', 'Frozen', 'Superconduct'],
  GEO: ['Crystallize']
} as const;

// Exportar tipos relacionados
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]['code'];
export type Theme = keyof typeof THEMES;
export type Element = typeof ELEMENTS[number]['name'];
export type WeaponType = typeof WEAPON_TYPES[number];
export type Region = typeof REGIONS[number];
export type MaterialCategory = typeof MATERIAL_CATEGORIES[number]['value'];
export type Rarity = 1 | 2 | 3 | 4 | 5;

// Utilidades
export const getElementColor = (element: string): string => {
  const found = ELEMENTS.find(e => e.name.toLowerCase() === element.toLowerCase());
  return found?.color || '#8c8c8c';
};

export const getRarityColor = (rarity: number): string => {
  return RARITY_COLORS[rarity] || RARITY_COLORS[1];
};

export const getLocalizedText = (text: string | { [key: string]: string }, language: SupportedLanguage): string => {
  if (typeof text === 'string') return text;
  return text[language] || text.english || text[Object.keys(text)[0]] || '';
};

// Función para obtener opciones de filtro localizadas
export const getLocalizedOptions = (options: readonly { value: string; label: { english: string; spanish: string } }[], language: SupportedLanguage) => {
  return options.map(option => ({
    value: option.value,
    label: language === 'spanish' ? option.label.spanish : option.label.english
  }));
};