import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projets() {
  return (
    <div className="projets-page">
      <h1 className="page-title">Mes Projets</h1>
      <div className="project-list">
        <ProjectCard
          title="Portfolio Fullstack"
          description="Un portfolio interactif utilisant React et Node.js"
          imageUrl="/src/assets/project-images/portfolio.png"
          link="https://github.com/ahmed/portfolio"
        />
        <ProjectCard
          title="Système de Gestion"
          description="Une application de gestion d'inventaire avec MongoDB"
          imageUrl="/src/assets/project-images/gestion.png"
          link="https://github.com/ahmed/gestion"
        />
      </div>
    </div>
  );
}
