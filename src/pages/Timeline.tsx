import React, { useState } from 'react';
import "../styles/timeline.scss";

const timelineData = [
  { year: "2001", title: "Naissance", description: "Début de l'aventure", logo: "birth.png" },
  { year: "2016", title: "Passion pour l'informatique", description: "Découverte des technologies", logo: "computer.png" },
  { year: "2017", title: "Stage en informatique", description: "Première expérience IT", logo: "internship.png" },
  { year: "2019", title: "Stage en informatique", description: "Développement et maintenance", logo: "internship.png" },
  { year: "2020", title: "Bac Tunisien Maths", description: "Obtention du Bac tunisien", logo: "bac-tn.png" },
  { year: "2020", title: "Bac Français Scientifique", description: "Obtention du Bac français", logo: "bac-fr.png" },
  { year: "2021", title: "Licence Informatique", description: "Début à l'UCA", logo: "university.png" },
  { year: "2021", title: "Auditeur RGIS", description: "Première expérience chez RGIS", logo: "rgis.png" },
  { year: "2023", title: "Flow Leader RGIS", description: "Chef d'équipe chez RGIS", logo: "rgis.png" },
  { year: "2024", title: "Stage KAUST", description: "Calcul haute performance", logo: "kaust.png" },
  { year: "2025", title: "Licence obtenue", description: "Diplôme en informatique", logo: "graduation.png" },
  { year: "Future", title: "Vers l'avenir", description: "Continuité et évolution", logo: "future.png" },
];

export default function Timeline() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div> 
      <h1 className="page-title"> Timeline</h1>
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
            <div className={`timeline-point ${hovered === index ? "active" : ""}`}></div>
            <div className="timeline-description">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
      ))}
    </div>
  </div>
  );
}
