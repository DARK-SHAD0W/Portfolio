import { useState } from "react";
import "../styles/timeline.scss";

/* -------------------------------------------------------------------------- */
/*                             Données de la timeline                         */
/* -------------------------------------------------------------------------- */

const timelineData = [
  {
    year: "2001",
    title: "Naissance",
    description: "Naissance à Monastir, Tunisie",
    details: "Naissance dans la ville côtière de Monastir, en Tunisie.",
    logo: "birth.png",
  },
  {
    year: "2016",
    title: "Passion pour l'informatique",
    description: "Découverte des technologies",
    details: "Développement d'un intérêt croissant pour l'informatique et les nouvelles technologies.",
    logo: "feet.png",
  },
  {
    year: "2017",
    title: "Stage Amideast",
    description: "Stage d'assistance pédagogique",
    details: "Stage à AMIDEAST Monastir,et soutien pédagogique.",
    logo: "Amideast.png",
  },
  {
    year: "2019",
    title: "Stage en informatique",
    description: "Développement et maintenance",
    details: "Agent de services informatiques chez Servinet, maintenance de réseaux et assistance technique.",
    logo: "Servinet.png",
  },
  {
    year: "2020",
    title: "Bac Tunisien Maths",
    description: "Obtention du Baccalauréat",
    details: "Baccalauréat en Mathématiques obtenu au Lycée Mornag, Tunisie.",
    logo: "BacTn.png",
  },
  {
    year: "2020",
    title: "Bac Français Scientifique",
    description: "Obtention du Baccalauréat",
    details: "Baccalauréat Scientifique obtenu au Lycée René Descartes, Tunisie.",
    logo: "BacFr.png",
  },
  {
    year: "2021",
    title: "Licence Informatique",
    description: "Début à l'UCA",
    details: "Début des études en informatique à l'Université Clermont Auvergne, France.",
    logo: "Uca.png",
  },
  {
    year: "2021",
    title: "Auditeur RGIS",
    description: "Inventaires externalisés",
    details: "Auditeur chez RGIS, inventaires dans diverses enseignes d'Auvergne'.",
    logo: "RGIS.png",
  },
  {
    year: "2023",
    title: "Flow Leader RGIS",
    description: "Chef d'équipe",
    details: "Gestion d'équipe et optimisation des inventaires chez RGIS.",
    logo: "RGIS.png",
  },
  {
    year: "2024",
    title: "Stage KAUST",
    description: "Calcul haute performance",
    details: "Stage en intelligence artificielle et calcul scientifique à KAUST.",
    logo: "Kaust.png",
  },
  {
    year: "2025",
    title: "Licence obtenue",
    description: "Diplôme en Informatique",
    details: "Obtention de la Licence en Informatique à l'UCA.",
    logo: "graduation.png",
  },
  {
    year: "Futur",
    title: "Vers l'avenir",
    description: "Perspectives d'évolution",
    details: "Objectif : Poursuivre dans le domaine du developpement logiciel.",
    logo: "future.png",
  },
];

/* -------------------------------------------------------------------------- */
/*                      Composant principal : Timeline                        */
/* -------------------------------------------------------------------------- */

export default function Timeline() {
  // État pour suivre l'élément actuellement survolé
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      {/* Titre principal de la page */}
      <h1 className="page-title">Timeline</h1>

      {/* Conteneur principal de la timeline */}
      <div className="timeline-container">
        {/* Ligne verticale centrale et son extension en pointillés */}
        <div className="vertical-line"></div>
        <div className="vertical-line dotted"></div>

        {/* Parcours de tous les éléments de la timeline */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="timeline-element"
            onMouseEnter={() => setHovered(index)} // Active les effets au survol
            onMouseLeave={() => setHovered(null)} // Réinitialise au retrait
          >
            {/* Affichage de l'année */}
            <div className="timeline-date">{item.year}</div>

            {/* Point de la timeline avec le logo */}
            <div className={`timeline-point ${hovered === index ? "active" : ""}`}>
              <img src={`/src/assets/timeline-logos/${item.logo}`} alt={item.title} />
            </div>

            {/* Titre de l’événement */}
            <div className="timeline-description-container">
              <div className="timeline-description">
                <h3>{item.title}</h3>
              </div>
            </div>

            {/* Description + informations supplémentaires */}
            <div className="timeline-detail">
              <p>{item.description}</p>
              {hovered === index && (
                <div className="extra-info">{item.details}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
