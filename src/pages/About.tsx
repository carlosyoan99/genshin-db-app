import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const About: React.FC = () => {
  const { language } = useLanguage()

  const translations = {
    english: {
      title: "About the Project",
      description: "This is a fan-made web application that provides comprehensive information about Genshin Impact game data.",
      features: "Features",
      featuresList: [
        "Character information and details",
        "Weapons database with stats",
        "Artifacts sets and bonuses",
        "Enemies and bosses data",
        "Materials and resources",
        "Multi-language support",
        "Dark/Light theme"
      ],
      technologies: "Technologies Used",
      techList: [
        { name: "React", url: "https://reactjs.org" },
        { name: "React Router", url: "https://reactrouter.com" },
        { name: "Vite", url: "https://vitejs.dev" },
        { name: "TypeScript", url: "https://www.typescriptlang.org" },
        { name: "Genshin DB", url: "https://github.com/theBowja/genshin-db" }
      ],
      disclaimer: "This project is not affiliated with HoYoverse. Genshin Impact, game content and materials are trademarks and copyrights of HoYoverse."
    },
    spanish: {
      title: "Acerca del Proyecto",
      description: "Esta es una aplicación web creada por fans que proporciona información completa sobre los datos del juego Genshin Impact.",
      features: "Características",
      featuresList: [
        "Información y detalles de personajes",
        "Base de datos de armas con estadísticas",
        "Sets de artefactos y bonificaciones",
        "Datos de enemigos y jefes",
        "Materiales y recursos",
        "Soporte multi-idioma",
        "Tema claro/oscuro"
      ],
      technologies: "Tecnologías Utilizadas",
      techList: [
        { name: "React", url: "https://reactjs.org" },
        { name: "React Router", url: "https://reactrouter.com" },
        { name: "Vite", url: "https://vitejs.dev" },
        { name: "TypeScript", url: "https://www.typescriptlang.org" },
        { name: "Genshin DB", url: "https://github.com/theBowja/genshin-db" }
      ],
      disclaimer: "Este proyecto no está afiliado con HoYoverse. Genshin Impact, el contenido del juego y los materiales son marcas registradas y derechos de autor de HoYoverse."
    }
  }

  const t = translations[language === 'spanish' ? 'spanish' : 'english']

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.title}</h1>
      </div>

      <div className="about-content">
        <section className="info-section">
          <p>{t.description}</p>
        </section>

        <section className="info-section">
          <h2>{t.features}</h2>
          <ul className="features-list">
            {t.featuresList.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="info-section">
          <h2>{t.technologies}</h2>
          <div className="tech-grid">
            {t.techList.map((tech, index) => (
              <a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card"
              >
                {tech.name}
              </a>
            ))}
          </div>
        </section>

        <section className="info-section">
          <p className="disclaimer">{t.disclaimer}</p>
        </section>
      </div>
    </div>
  )
}

export default About