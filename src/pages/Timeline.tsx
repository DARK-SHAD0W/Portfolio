import React, { useState } from 'react';
import "../styles/timeline.scss";

const timelineData = [
  { year: "2001", title: "Naissance", description: "Naissance à Monastir, Tunisie", details: "Naissance dans la ville côtière de Monastir, en Tunisie.", logo: "birth.png" },
  { year: "2016", title: "Passion pour l'informatique", description: "Découverte des technologies", details: "Développement d'un intérêt croissant pour l'informatique et les nouvelles technologies.", logo: "feet.png" },
  { year: "2017", title: "Stage Amideast", description: "Stage d'assistance pédagogique", details: "Stage à AMIDEAST Monastir,et soutien pédagogique.", logo: "Amideast.png" },
  { year: "2019", title: "Stage en informatique", description: "Développement et maintenance", details: "Agent de services informatiques chez Servinet, maintenance de réseaux et assistance technique.", logo: "Servinet.png" },
  { year: "2020", title: "Bac Tunisien Maths", description: "Obtention du Baccalauréat", details: "Baccalauréat en Mathématiques obtenu au Lycée Mornag, Tunisie.", logo: "BacTn.png" },
  { year: "2020", title: "Bac Français Scientifique", description: "Obtention du Baccalauréat", details: "Baccalauréat Scientifique obtenu au Lycée René Descartes, Tunisie.", logo: "BacFr.png" },
  { year: "2021", title: "Licence Informatique", description: "Début à l'UCA", details: "Début des études en informatique à l'Université Clermont Auvergne, France.", logo: "Uca.png" },
  { year: "2021", title: "Auditeur RGIS", description: "Inventaires externalisés", details: "Auditeur chez RGIS, inventaires dans diverses entreprises de Clermont-Ferrand.", logo: "RGIS.png" },
  { year: "2023", title: "Flow Leader RGIS", description: "Chef d'équipe", details: "Gestion d'équipe et optimisation des inventaires chez RGIS.", logo: "RGIS.png" },
  { year: "2024", title: "Stage KAUST", description: "Calcul haute performance", details: "Stage en intelligence artificielle et calcul scientifique à KAUST.", logo: "Kaust.png" },
  { year: "2025", title: "Licence obtenue", description: "Diplôme en Informatique", details: "Obtention de la Licence en Informatique à l'UCA.", logo: "graduation.png" },
  { year: "Future", title: "Vers l'avenir", description: "Perspectives d'évolution", details: "Objectif : Poursuivre dans le domaine de l'architecture logicielle.", logo: "future.png" },
];

export default function Timeline() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div> 
      <h1 className="page-title">Timeline</h1>
      <div className="timeline-container">
        <div className="vertical-line"></div>
        <div className="vertical-line dotted"></div>
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className="timeline-element"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="timeline-date">{item.year}</div>
            <div className={`timeline-point ${hovered === index ? "active" : ""}`}>
              <img src={`/src/assets/logos/${item.logo}`} alt={item.title} />
            </div>
            <div className="timeline-description-container">
              <div className="timeline-description">
                <h3>{item.title}</h3>
              </div>
            </div>
            <div className="timeline-detail">
              <p>{item.description}</p>
              {hovered === index && (
                <div className="extra-info">
                  {item.details}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
