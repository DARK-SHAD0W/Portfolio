import React from "react";
import "../styles/project-card.scss";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="details-button">
          Voir Détails
        </a>
      </div>
    </div>
  );
}
