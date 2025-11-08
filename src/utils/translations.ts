import type { Language } from 'genshin-db'

export interface Translations {
  common: {
    search: string
    loading: string
    noResults: string
    back: string
    seeMore: string
    description: string
    details: string
    level: string
    type: string
    rarity: string
    effect: string
    materials: string
    ascension: string
    talents: string
    constellations: string
    refinement: string
  }
  nav: {
    home: string
    characters: string
    weapons: string
    artifacts: string
    enemies: string
    materials: string
    elements: string
    domains: string
    foods: string
    animals: string
    about: string
  }
  pages: {
    home: {
      title: string
      subtitle: string
      description: string
    }
    characters: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    weapons: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    artifacts: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    enemies: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    materials: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    elements: {
      title: string
      subtitle: string
    }
    domains: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    foods: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    animals: {
      title: string
      subtitle: string
      searchPlaceholder: string
    }
    about: {
      title: string
      description: string
      features: string
      technologies: string
      disclaimer: string
    }
  }
  characterDetail: {
    generalInfo: string
    region: string
    affiliation: string
    constellation: string
    birthday: string
    combatTalents: string
    passiveTalents: string
    ascensionMaterials: string
    talentMaterials: string
    domain: string
    days: string
    location: string
  }
  weaponDetail: {
    generalInfo: string
    weaponType: string
    substat: string
    baseAtk: string
    refinementLevels: string
    ascensionMaterials: string
  }
}

export const translations: Record<Language, Translations> = {
  English: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: 'Home',
      characters: 'Characters',
      weapons: 'Weapons',
      artifacts: 'Artifacts',
      enemies: 'Enemies',
      materials: 'Materials',
      elements: 'Elements',
      domains: 'Domains',
      foods: 'Foods',
      animals: 'Animals',
      about: 'About'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
  Spanish: {
    common: {
      search: 'Buscar',
      loading: 'Cargando...',
      noResults: 'No se encontraron resultados',
      back: 'Volver',
      seeMore: 'Ver más',
      description: 'Descripción',
      details: 'Detalles',
      level: 'Nivel',
      type: 'Tipo',
      rarity: 'Rareza',
      effect: 'Efecto',
      materials: 'Materiales',
      ascension: 'Ascensión',
      talents: 'Talentos',
      constellations: 'Constelaciones',
      refinement: 'Refinamiento'
    },
    nav: {
      home: 'Inicio',
      characters: 'Personajes',
      weapons: 'Armas',
      artifacts: 'Artefactos',
      enemies: 'Enemigos',
      materials: 'Materiales',
      elements: 'Elementos',
      domains: 'Dominios',
      foods: 'Comidas',
      animals: 'Animales',
      about: 'Acerca de'
    },
    pages: {
      home: {
        title: 'Base de Datos Genshin Impact',
        subtitle: 'Explora toda la información del mundo de Teyvat',
        description: 'Esta aplicación utiliza la librería genshin-db para proporcionar información actualizada sobre Genshin Impact.'
      },
      characters: {
        title: 'Personajes',
        subtitle: 'Explora todos los personajes jugables de Genshin Impact',
        searchPlaceholder: 'Buscar personajes...'
      },
      weapons: {
        title: 'Armas',
        subtitle: 'Explora todas las armas disponibles en Genshin Impact',
        searchPlaceholder: 'Buscar armas...'
      },
      artifacts: {
        title: 'Artefactos',
        subtitle: 'Explora todos los sets de artefactos disponibles',
        searchPlaceholder: 'Buscar artefactos...'
      },
      enemies: {
        title: 'Enemigos',
        subtitle: 'Explora todos los enemigos y jefes del juego',
        searchPlaceholder: 'Buscar enemigos...'
      },
      materials: {
        title: 'Materiales',
        subtitle: 'Materiales de ascensión, talentos y mejora de armas',
        searchPlaceholder: 'Buscar materiales...'
      },
      elements: {
        title: 'Elementos',
        subtitle: 'Los siete elementos que definen el combate en Teyvat'
      },
      domains: {
        title: 'Dominios',
        subtitle: 'Dominios de artefactos, talentos y ascensión',
        searchPlaceholder: 'Buscar dominios...'
      },
      foods: {
        title: 'Comidas',
        subtitle: 'Platos y alimentos que proporcionan beneficios temporales',
        searchPlaceholder: 'Buscar comidas...'
      },
      animals: {
        title: 'Animales',
        subtitle: 'Fauna y criaturas de Teyvat',
        searchPlaceholder: 'Buscar animales...'
      },
      about: {
        title: 'Acerca del Proyecto',
        description: 'Esta es una aplicación web creada por fans que proporciona información completa sobre los datos del juego Genshin Impact.',
        features: 'Características',
        technologies: 'Tecnologías Utilizadas',
        disclaimer: 'Este proyecto no está afiliado con HoYoverse. Genshin Impact, el contenido del juego y los materiales son marcas registradas y derechos de autor de HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'Información General',
      region: 'Región',
      affiliation: 'Afiliación',
      constellation: 'Constelación',
      birthday: 'Cumpleaños',
      combatTalents: 'Talentos de Combate',
      passiveTalents: 'Talentos Pasivos',
      ascensionMaterials: 'Materiales de Ascensión',
      talentMaterials: 'Materiales de Talentos',
      domain: 'Dominio',
      days: 'Días',
      location: 'Ubicación'
    },
    weaponDetail: {
      generalInfo: 'Información General',
      weaponType: 'Tipo de Arma',
      substat: 'Substat',
      baseAtk: 'ATQ Base',
      refinementLevels: 'Niveles de Refinamiento',
      ascensionMaterials: 'Materiales de Ascensión'
    }
  },
  French: {
    common: {
      search: 'Rechercher',
      loading: 'Chargement...',
      noResults: 'Aucun résultat trouvé',
      back: 'Retour',
      seeMore: 'Voir plus',
      description: 'Description',
      details: 'Détails',
      level: 'Niveau',
      type: 'Type',
      rarity: 'Rareté',
      effect: 'Effet',
      materials: 'Matériaux',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Raffinement'
    },
    nav: {
      home: 'Accueil',
      characters: 'Personnages',
      weapons: 'Armes',
      artifacts: 'Artéfacts',
      enemies: 'Ennemis',
      materials: 'Matériaux',
      elements: 'Éléments',
      domains: 'Domaines',
      foods: 'Nourritures',
      animals: 'Animaux',
      about: 'À propos'
    },
    pages: {
      home: {
        title: 'Base de données Genshin Impact',
        subtitle: 'Explorez toutes les informations du monde de Teyvat',
        description: 'Cette application utilise la bibliothèque genshin-db pour fournir des informations actualisées sur Genshin Impact.'
      },
      characters: {
        title: 'Personnages',
        subtitle: 'Explorez tous les personnages jouables de Genshin Impact',
        searchPlaceholder: 'Rechercher des personnages...'
      },
      weapons: {
        title: 'Armes',
        subtitle: 'Explorez toutes les armes disponibles dans Genshin Impact',
        searchPlaceholder: 'Rechercher des armes...'
      },
      artifacts: {
        title: 'Artéfacts',
        subtitle: 'Explorez tous les sets d\'artéfacts disponibles',
        searchPlaceholder: 'Rechercher des artéfacts...'
      },
      enemies: {
        title: 'Ennemis',
        subtitle: 'Explorez tous les ennemis et boss du jeu',
        searchPlaceholder: 'Rechercher des ennemis...'
      },
      materials: {
        title: 'Matériaux',
        subtitle: 'Matériaux d\'ascension, de talents et d\'amélioration d\'armes',
        searchPlaceholder: 'Rechercher des matériaux...'
      },
      elements: {
        title: 'Éléments',
        subtitle: 'Les sept éléments qui définissent le combat à Teyvat'
      },
      domains: {
        title: 'Domaines',
        subtitle: 'Domaines d\'artéfacts, de talents et d\'ascension',
        searchPlaceholder: 'Rechercher des domaines...'
      },
      foods: {
        title: 'Nourritures',
        subtitle: 'Plats et aliments qui fournissent des avantages temporaires',
        searchPlaceholder: 'Rechercher des nourritures...'
      },
      animals: {
        title: 'Animaux',
        subtitle: 'Faune et créatures de Teyvat',
        searchPlaceholder: 'Rechercher des animaux...'
      },
      about: {
        title: 'À propos du projet',
        description: 'Ceci est une application web créée par des fans qui fournit des informations complètes sur les données du jeu Genshin Impact.',
        features: 'Fonctionnalités',
        technologies: 'Technologies Utilisées',
        disclaimer: 'Ce projet n\'est pas affilié à HoYoverse. Genshin Impact, le contenu du jeu et les matériaux sont des marques déposées et des droits d\'auteur de HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'Informations Générales',
      region: 'Région',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Anniversaire',
      combatTalents: 'Talents de Combat',
      passiveTalents: 'Talents Passifs',
      ascensionMaterials: 'Matériaux d\'Ascension',
      talentMaterials: 'Matériaux de Talents',
      domain: 'Domaine',
      days: 'Jours',
      location: 'Emplacement'
    },
    weaponDetail: {
      generalInfo: 'Informations Générales',
      weaponType: 'Type d\'Arme',
      substat: 'Sous-statistique',
      baseAtk: 'ATQ de Base',
      refinementLevels: 'Niveaux de Raffinement',
      ascensionMaterials: 'Matériaux d\'Ascension'
    }
  },
  Portuguese: {
    common: {
      search: 'Pesquisar',
      loading: 'Carregando...',
      noResults: 'Nenhum resultado encontrado',
      back: 'Voltar',
      seeMore: 'Ver mais',
      description: 'Descrição',
      details: 'Detalhes',
      level: 'Nível',
      type: 'Tipo',
      rarity: 'Raridade',
      effect: 'Efeito',
      materials: 'Materiais',
      ascension: 'Ascensão',
      talents: 'Talentos',
      constellations: 'Constelações',
      refinement: 'Refinamento'
    },
    nav: {
      home: 'Início',
      characters: 'Personagens',
      weapons: 'Armas',
      artifacts: 'Artefatos',
      enemies: 'Inimigos',
      materials: 'Materiais',
      elements: 'Elementos',
      domains: 'Domínios',
      foods: 'Comidas',
      animals: 'Animais',
      about: 'Sobre'
    },
    pages: {
      home: {
        title: 'Banco de Dados Genshin Impact',
        subtitle: 'Explore todas as informações do mundo de Teyvat',
        description: 'Esta aplicação usa a biblioteca genshin-db para fornecer informações atualizadas sobre Genshin Impact.'
      },
      characters: {
        title: 'Personagens',
        subtitle: 'Explore todos os personagens jogáveis de Genshin Impact',
        searchPlaceholder: 'Pesquisar personagens...'
      },
      weapons: {
        title: 'Armas',
        subtitle: 'Explore todas as armas disponíveis em Genshin Impact',
        searchPlaceholder: 'Pesquisar armas...'
      },
      artifacts: {
        title: 'Artefatos',
        subtitle: 'Explore todos os conjuntos de artefatos disponíveis',
        searchPlaceholder: 'Pesquisar artefatos...'
      },
      enemies: {
        title: 'Inimigos',
        subtitle: 'Explore todos os inimigos e chefes do jogo',
        searchPlaceholder: 'Pesquisar inimigos...'
      },
      materials: {
        title: 'Materiais',
        subtitle: 'Materiais de ascensão, talentos e melhoria de armas',
        searchPlaceholder: 'Pesquisar materiais...'
      },
      elements: {
        title: 'Elementos',
        subtitle: 'Os sete elementos que definem o combate em Teyvat'
      },
      domains: {
        title: 'Domínios',
        subtitle: 'Domínios de artefatos, talentos e ascensão',
        searchPlaceholder: 'Pesquisar domínios...'
      },
      foods: {
        title: 'Comidas',
        subtitle: 'Pratos e alimentos que fornecem benefícios temporários',
        searchPlaceholder: 'Pesquisar comidas...'
      },
      animals: {
        title: 'Animais',
        subtitle: 'Fauna e criaturas de Teyvat',
        searchPlaceholder: 'Pesquisar animais...'
      },
      about: {
        title: 'Sobre o Projeto',
        description: 'Este é um aplicativo web feito por fãs que fornece informações abrangentes sobre os dados do jogo Genshin Impact.',
        features: 'Características',
        technologies: 'Tecnologias Utilizadas',
        disclaimer: 'Este projeto não é afiliado à HoYoverse. Genshin Impact, conteúdo do jogo e materiais são marcas registradas e direitos autorais da HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'Informações Gerais',
      region: 'Região',
      affiliation: 'Afiliação',
      constellation: 'Constelação',
      birthday: 'Aniversário',
      combatTalents: 'Talentos de Combate',
      passiveTalents: 'Talentos Passivos',
      ascensionMaterials: 'Materiais de Ascensão',
      talentMaterials: 'Materiais de Talentos',
      domain: 'Domínio',
      days: 'Dias',
      location: 'Localização'
    },
    weaponDetail: {
      generalInfo: 'Informações Gerais',
      weaponType: 'Tipo de Arma',
      substat: 'Substat',
      baseAtk: 'ATQ Base',
      refinementLevels: 'Níveis de Refinamento',
      ascensionMaterials: 'Materiais de Ascensão'
    }
  },
  German: {
    common: {
      search: 'Suchen',
      loading: 'Lädt...',
      noResults: 'Keine Ergebnisse gefunden',
      back: 'Zurück',
      seeMore: 'Mehr sehen',
      description: 'Beschreibung',
      details: 'Details',
      level: 'Stufe',
      type: 'Typ',
      rarity: 'Seltenheit',
      effect: 'Effekt',
      materials: 'Materialien',
      ascension: 'Aufstieg',
      talents: 'Talente',
      constellations: 'Konstellationen',
      refinement: 'Verfeinerung'
    },
    nav: {
      home: 'Startseite',
      characters: 'Charaktere',
      weapons: 'Waffen',
      artifacts: 'Artefakte',
      enemies: 'Gegner',
      materials: 'Materialien',
      elements: 'Elemente',
      domains: 'Domänen',
      foods: 'Gerichte',
      animals: 'Tiere',
      about: 'Über'
    },
    pages: {
      home: {
        title: 'Genshin Impact Datenbank',
        subtitle: 'Erkunden Sie alle Informationen der Welt von Teyvat',
        description: 'Diese Anwendung verwendet die genshin-db-Bibliothek, um aktualisierte Informationen über Genshin Impact bereitzustellen.'
      },
      characters: {
        title: 'Charaktere',
        subtitle: 'Erkunden Sie alle spielbaren Charaktere von Genshin Impact',
        searchPlaceholder: 'Charaktere suchen...'
      },
      weapons: {
        title: 'Waffen',
        subtitle: 'Erkunden Sie alle verfügbaren Waffen in Genshin Impact',
        searchPlaceholder: 'Waffen suchen...'
      },
      artifacts: {
        title: 'Artefakte',
        subtitle: 'Erkunden Sie alle verfügbaren Artefakt-Sets',
        searchPlaceholder: 'Artefakte suchen...'
      },
      enemies: {
        title: 'Gegner',
        subtitle: 'Erkunden Sie alle Gegner und Bosse des Spiels',
        searchPlaceholder: 'Gegner suchen...'
      },
      materials: {
        title: 'Materialien',
        subtitle: 'Aufstiegs-, Talent- und Waffenverbesserungsmaterialien',
        searchPlaceholder: 'Materialien suchen...'
      },
      elements: {
        title: 'Elemente',
        subtitle: 'Die sieben Elemente, die den Kampf in Teyvat definieren'
      },
      domains: {
        title: 'Domänen',
        subtitle: 'Artefakt-, Talent- und Aufstiegsdomänen',
        searchPlaceholder: 'Domänen suchen...'
      },
      foods: {
        title: 'Gerichte',
        subtitle: 'Gerichte und Lebensmittel, die temporäre Vorteile bieten',
        searchPlaceholder: 'Gerichte suchen...'
      },
      animals: {
        title: 'Tiere',
        subtitle: 'Fauna und Kreaturen von Teyvat',
        searchPlaceholder: 'Tiere suchen...'
      },
      about: {
        title: 'Über das Projekt',
        description: 'Dies ist eine von Fans erstellte Webanwendung, die umfassende Informationen über Genshin Impact-Spieldaten bereitstellt.',
        features: 'Funktionen',
        technologies: 'Verwendete Technologien',
        disclaimer: 'Dieses Projekt ist nicht mit HoYoverse affiliiert. Genshin Impact, Spielinhalte und Materialien sind Marken und Urheberrechte von HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'Allgemeine Informationen',
      region: 'Region',
      affiliation: 'Zugehörigkeit',
      constellation: 'Konstellation',
      birthday: 'Geburtstag',
      combatTalents: 'Kampftalente',
      passiveTalents: 'Passive Talente',
      ascensionMaterials: 'Aufstiegsmaterialien',
      talentMaterials: 'Talentmaterialien',
      domain: 'Domäne',
      days: 'Tage',
      location: 'Standort'
    },
    weaponDetail: {
      generalInfo: 'Allgemeine Informationen',
      weaponType: 'Waffentyp',
      substat: 'Unterstat',
      baseAtk: 'Basis-ANG',
      refinementLevels: 'Verfeinerungsstufen',
      ascensionMaterials: 'Aufstiegsmaterialien'
    }
  },
  Russian: {
    common: {
      search: 'Поиск',
      loading: 'Загрузка...',
      noResults: 'Результаты не найдены',
      back: 'Назад',
      seeMore: 'Подробнее',
      description: 'Описание',
      details: 'Детали',
      level: 'Уровень',
      type: 'Тип',
      rarity: 'Редкость',
      effect: 'Эффект',
      materials: 'Материалы',
      ascension: 'Вознесение',
      talents: 'Таланты',
      constellations: 'Созвездия',
      refinement: 'Пробуждение'
    },
    nav: {
      home: 'Главная',
      characters: 'Персонажи',
      weapons: 'Оружие',
      artifacts: 'Артефакты',
      enemies: 'Враги',
      materials: 'Материалы',
      elements: 'Элементы',
      domains: 'Подземелья',
      foods: 'Еда',
      animals: 'Животные',
      about: 'О проекте'
    },
    pages: {
      home: {
        title: 'База данных Genshin Impact',
        subtitle: 'Исследуйте весь мир Тейвата',
        description: 'Это приложение использует библиотеку genshin-db для предоставления актуальной информации о Genshin Impact.'
      },
      characters: {
        title: 'Персонажи',
        subtitle: 'Исследуйте всех игровых персонажей Genshin Impact',
        searchPlaceholder: 'Поиск персонажей...'
      },
      weapons: {
        title: 'Оружие',
        subtitle: 'Исследуйте все доступное оружие в Genshin Impact',
        searchPlaceholder: 'Поиск оружия...'
      },
      artifacts: {
        title: 'Артефакты',
        subtitle: 'Исследуйте все доступные наборы артефактов',
        searchPlaceholder: 'Поиск артефактов...'
      },
      enemies: {
        title: 'Враги',
        subtitle: 'Исследуйте всех врагов и боссов игры',
        searchPlaceholder: 'Поиск врагов...'
      },
      materials: {
        title: 'Материалы',
        subtitle: 'Материалы вознесения, талантов и улучшения оружия',
        searchPlaceholder: 'Поиск материалов...'
      },
      elements: {
        title: 'Элементы',
        subtitle: 'Семь элементов, определяющих бой в Тейвате'
      },
      domains: {
        title: 'Подземелья',
        subtitle: 'Подземелья артефактов, талантов и вознесения',
        searchPlaceholder: 'Поиск подземелий...'
      },
      foods: {
        title: 'Еда',
        subtitle: 'Блюда и продукты, предоставляющие временные бонусы',
        searchPlaceholder: 'Поиск еды...'
      },
      animals: {
        title: 'Животные',
        subtitle: 'Фауна и существа Тейвата',
        searchPlaceholder: 'Поиск животных...'
      },
      about: {
        title: 'О проекте',
        description: 'Это веб-приложение, созданное фанатами, которое предоставляет полную информацию об игровых данных Genshin Impact.',
        features: 'Функции',
        technologies: 'Используемые технологии',
        disclaimer: 'Этот проект не связан с HoYoverse. Genshin Impact, игровой контент и материалы являются товарными знаками и авторскими правами HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'Общая информация',
      region: 'Регион',
      affiliation: 'Принадлежность',
      constellation: 'Созвездие',
      birthday: 'День рождения',
      combatTalents: 'Боевые таланты',
      passiveTalents: 'Пассивные таланты',
      ascensionMaterials: 'Материалы вознесения',
      talentMaterials: 'Материалы талантов',
      domain: 'Подземелье',
      days: 'Дни',
      location: 'Местоположение'
    },
    weaponDetail: {
      generalInfo: 'Общая информация',
      weaponType: 'Тип оружия',
      substat: 'Дополнительный параметр',
      baseAtk: 'Базовая атака',
      refinementLevels: 'Уровни пробуждения',
      ascensionMaterials: 'Материалы вознесения'
    }
  },
  Italian: {
    common: {
      search: 'Cerca',
      loading: 'Caricamento...',
      noResults: 'Nessun risultato trovato',
      back: 'Indietro',
      seeMore: 'Vedi più',
      description: 'Descrizione',
      details: 'Dettagli',
      level: 'Livello',
      type: 'Tipo',
      rarity: 'Rarità',
      effect: 'Effetto',
      materials: 'Materiali',
      ascension: 'Ascensione',
      talents: 'Talenti',
      constellations: 'Costellazioni',
      refinement: 'Raffinamento'
    },
    nav: {
      home: 'Home',
      characters: 'Personaggi',
      weapons: 'Armi',
      artifacts: 'Manufatti',
      enemies: 'Nemici',
      materials: 'Materiali',
      elements: 'Elementi',
      domains: 'Domini',
      foods: 'Cibi',
      animals: 'Animali',
      about: 'Informazioni'
    },
    pages: {
      home: {
        title: 'Database Genshin Impact',
        subtitle: 'Esplora tutte le informazioni del mondo di Teyvat',
        description: 'Questa applicazione utilizza la libreria genshin-db per fornire informazioni aggiornate su Genshin Impact.'
      },
      characters: {
        title: 'Personaggi',
        subtitle: 'Esplora tutti i personaggi giocabili di Genshin Impact',
        searchPlaceholder: 'Cerca personaggi...'
      },
      weapons: {
        title: 'Armi',
        subtitle: 'Esplora tutte le armi disponibili in Genshin Impact',
        searchPlaceholder: 'Cerca armi...'
      },
      artifacts: {
        title: 'Manufatti',
        subtitle: 'Esplora tutti i set di manufatti disponibili',
        searchPlaceholder: 'Cerca manufatti...'
      },
      enemies: {
        title: 'Nemici',
        subtitle: 'Esplora tutti i nemici e i boss del gioco',
        searchPlaceholder: 'Cerca nemici...'
      },
      materials: {
        title: 'Materiali',
        subtitle: 'Materiali di ascensione, talenti e potenziamento armi',
        searchPlaceholder: 'Cerca materiali...'
      },
      elements: {
        title: 'Elementi',
        subtitle: 'I sette elementi che definiscono il combattimento a Teyvat'
      },
      domains: {
        title: 'Domini',
        subtitle: 'Domini di manufatti, talenti e ascensione',
        searchPlaceholder: 'Cerca domini...'
      },
      foods: {
        title: 'Cibi',
        subtitle: 'Piatti e alimenti che forniscono benefici temporanei',
        searchPlaceholder: 'Cerca cibi...'
      },
      animals: {
        title: 'Animali',
        subtitle: 'Fauna e creature di Teyvat',
        searchPlaceholder: 'Cerca animali...'
      },
      about: {
        title: 'Informazioni sul Progetto',
        description: 'Questa è un\'applicazione web creata da fan che fornisce informazioni complete sui dati del gioco Genshin Impact.',
        features: 'Caratteristiche',
        technologies: 'Tecnologie Utilizzate',
        disclaimer: 'Questo progetto non è affiliato con HoYoverse. Genshin Impact, contenuti di gioco e materiali sono marchi registrati e copyright di HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'Informazioni Generali',
      region: 'Regione',
      affiliation: 'Affiliazione',
      constellation: 'Costellazione',
      birthday: 'Compleanno',
      combatTalents: 'Talenti di Combattimento',
      passiveTalents: 'Talenti Passivi',
      ascensionMaterials: 'Materiali di Ascensione',
      talentMaterials: 'Materiali dei Talenti',
      domain: 'Dominio',
      days: 'Giorni',
      location: 'Posizione'
    },
    weaponDetail: {
      generalInfo: 'Informazioni Generali',
      weaponType: 'Tipo di Arma',
      substat: 'Sottostatistica',
      baseAtk: 'ATT Base',
      refinementLevels: 'Livelli di Raffinamento',
      ascensionMaterials: 'Materiali di Ascensione'
    }
  },
  /**
   * Idiomas asiáticos (mantenemos los textos en inglés para la interfaz)
   */ 
  Japanese: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: 'ホーム',
      characters: 'キャラクター',
      weapons: '武器',
      artifacts: '聖遺物',
      enemies: '敵',
      materials: '素材',
      elements: '元素',
      domains: '秘境',
      foods: '料理',
      animals: '動物',
      about: 'について'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
  ChineseSimplified: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: '首页',
      characters: '角色',
      weapons: '武器',
      artifacts: '圣遗物',
      enemies: '敌人',
      materials: '材料',
      elements: '元素',
      domains: '秘境',
      foods: '食物',
      animals: '动物',
      about: '关于'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
  Korean: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: '홈',
      characters: '캐릭터',
      weapons: '무기',
      artifacts: '성유물',
      enemies: '적',
      materials: '재료',
      elements: '원소',
      domains: '비경',
      foods: '요리',
      animals: '동물',
      about: '정보'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
  /**
   * Estos son puro Ingles, estan puestos para quitarnos el error de Typescript
   */
  ChineseTraditional: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: 'Home',
      characters: 'Characters',
      weapons: 'Weapons',
      artifacts: 'Artifacts',
      enemies: 'Enemies',
      materials: 'Materials',
      elements: 'Elements',
      domains: 'Domains',
      foods: 'Foods',
      animals: 'Animals',
      about: 'About'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
  Indonesian: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: 'Home',
      characters: 'Characters',
      weapons: 'Weapons',
      artifacts: 'Artifacts',
      enemies: 'Enemies',
      materials: 'Materials',
      elements: 'Elements',
      domains: 'Domains',
      foods: 'Foods',
      animals: 'Animals',
      about: 'About'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
  Thai: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: 'Home',
      characters: 'Characters',
      weapons: 'Weapons',
      artifacts: 'Artifacts',
      enemies: 'Enemies',
      materials: 'Materials',
      elements: 'Elements',
      domains: 'Domains',
      foods: 'Foods',
      animals: 'Animals',
      about: 'About'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
  Turkish: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: 'Home',
      characters: 'Characters',
      weapons: 'Weapons',
      artifacts: 'Artifacts',
      enemies: 'Enemies',
      materials: 'Materials',
      elements: 'Elements',
      domains: 'Domains',
      foods: 'Foods',
      animals: 'Animals',
      about: 'About'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
  Vietnamese: {
    common: {
      search: 'Search',
      loading: 'Loading...',
      noResults: 'No results found',
      back: 'Back',
      seeMore: 'See more',
      description: 'Description',
      details: 'Details',
      level: 'Level',
      type: 'Type',
      rarity: 'Rarity',
      effect: 'Effect',
      materials: 'Materials',
      ascension: 'Ascension',
      talents: 'Talents',
      constellations: 'Constellations',
      refinement: 'Refinement'
    },
    nav: {
      home: 'Home',
      characters: 'Characters',
      weapons: 'Weapons',
      artifacts: 'Artifacts',
      enemies: 'Enemies',
      materials: 'Materials',
      elements: 'Elements',
      domains: 'Domains',
      foods: 'Foods',
      animals: 'Animals',
      about: 'About'
    },
    pages: {
      home: {
        title: 'Genshin Impact Database',
        subtitle: 'Explore all Teyvat world information',
        description: 'This application uses the genshin-db library to provide updated information about Genshin Impact.'
      },
      characters: {
        title: 'Characters',
        subtitle: 'Explore all playable characters from Genshin Impact',
        searchPlaceholder: 'Search characters...'
      },
      weapons: {
        title: 'Weapons',
        subtitle: 'Explore all available weapons in Genshin Impact',
        searchPlaceholder: 'Search weapons...'
      },
      artifacts: {
        title: 'Artifacts',
        subtitle: 'Explore all artifact sets available',
        searchPlaceholder: 'Search artifacts...'
      },
      enemies: {
        title: 'Enemies',
        subtitle: 'Explore all enemies and bosses in the game',
        searchPlaceholder: 'Search enemies...'
      },
      materials: {
        title: 'Materials',
        subtitle: 'Ascension, talent and weapon enhancement materials',
        searchPlaceholder: 'Search materials...'
      },
      elements: {
        title: 'Elements',
        subtitle: 'The seven elements that define combat in Teyvat'
      },
      domains: {
        title: 'Domains',
        subtitle: 'Artifact, talent and ascension domains',
        searchPlaceholder: 'Search domains...'
      },
      foods: {
        title: 'Foods',
        subtitle: 'Dishes and foods that provide temporary benefits',
        searchPlaceholder: 'Search foods...'
      },
      animals: {
        title: 'Animals',
        subtitle: 'Fauna and creatures of Teyvat',
        searchPlaceholder: 'Search animals...'
      },
      about: {
        title: 'About the Project',
        description: 'This is a fan-made web application that provides comprehensive information about Genshin Impact game data.',
        features: 'Features',
        technologies: 'Technologies Used',
        disclaimer: 'This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse.'
      }
    },
    characterDetail: {
      generalInfo: 'General Information',
      region: 'Region',
      affiliation: 'Affiliation',
      constellation: 'Constellation',
      birthday: 'Birthday',
      combatTalents: 'Combat Talents',
      passiveTalents: 'Passive Talents',
      ascensionMaterials: 'Ascension Materials',
      talentMaterials: 'Talent Materials',
      domain: 'Domain',
      days: 'Days',
      location: 'Location'
    },
    weaponDetail: {
      generalInfo: 'General Information',
      weaponType: 'Weapon Type',
      substat: 'Substat',
      baseAtk: 'Base ATK',
      refinementLevels: 'Refinement Levels',
      ascensionMaterials: 'Ascension Materials'
    }
  },
}