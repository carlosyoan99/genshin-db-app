import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

const About: React.FC = () => {
  const t = useTranslation()

  const featuresList = [
    t.pages.characters.title,
    t.pages.weapons.title,
    t.pages.artifacts.title,
    t.pages.enemies.title,
    t.pages.materials.title,
    "Multi-language support",
    "Dark/Light theme"
  ]

  const techList = [
    { name: "React", url: "https://reactjs.org" },
    { name: "React Router", url: "https://reactrouter.com" },
    { name: "Vite", url: "https://vitejs.dev" },
    { name: "TypeScript", url: "https://www.typescriptlang.org" },
    { name: "Genshin DB", url: "https://github.com/theBowja/genshin-db" }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>{t.pages.about.title}</h1>
      </div>

      <div className="about-content">
        <section className="info-section">
          <p>{t.pages.about.description}</p>
        </section>

        <section className="info-section">
          <h2>{t.pages.about.features}</h2>
          <ul className="features-list">
            {featuresList.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="info-section">
          <h2>{t.pages.about.technologies}</h2>
          <div className="tech-grid">
            {techList.map((tech, index) => (
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
          <p className="disclaimer">{t.pages.about.disclaimer}</p>
        </section>
      </div>
    </div>
  )
}

export default About