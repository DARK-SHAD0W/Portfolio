import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/projets.scss";

export default function Projets() {
  return (
    <div className="projets-page">
      <h1 className="page-title">Mes Projets</h1>
      <div className="project-list">
        <ProjectCard
          title="Portfolio Fullstack"
          description="Un portfolio interactif utilisant React et Node.js"
          technologies={["React", "Node.js", "TypeScript"]}
          imageUrl="/src/assets/project-images/portfolio.png"
          githubLink="https://github.com/ahmed/portfolio"
          detailsLink="/details/portfolio-fullstack"
        />
        <ProjectCard
          title="Système de Gestion"
          description="Une application de gestion d'inventaire avec MongoDB"
          technologies={["MongoDB", "Express", "React", "Node.js"]}
          imageUrl="/src/assets/project-images/gestion.png"
          githubLink="https://github.com/ahmed/gestion"
          detailsLink="/details/systeme-gestion"
        />
        <ProjectCard
          title="Application de Chat"
          description="Application de messagerie en temps réel"
          technologies={["Socket.io", "Node.js", "React"]}
          imageUrl="/src/assets/project-images/chat.png"
          githubLink="https://github.com/ahmed/chat"
          detailsLink="/details/application-chat"
        />
        <ProjectCard
          title="Système de Gestion Avancé"
          description="Gestion d'inventaire avec fonctionnalités avancées"
          technologies={["MongoDB", "Express", "React", "Node.js"]}
          imageUrl="/src/assets/project-images/gestion-advanced.png"
          githubLink="https://github.com/ahmed/gestion-advanced"
          detailsLink="/details/systeme-gestion-avance"
        />
        <ProjectCard
          title="Application de Notes"
          description="Application pour gérer et organiser des notes"
          technologies={["React", "Node.js", "SQLite"]}
          imageUrl="/src/assets/project-images/notes.png"
          githubLink="https://github.com/ahmed/notes"
          detailsLink="/details/application-notes"
        />
        <ProjectCard
          title="Blog Personnel"
          description="Blog dynamique avec système de commentaires"
          technologies={["Next.js", "MongoDB", "TailwindCSS"]}
          imageUrl="/src/assets/project-images/blog.png"
          githubLink="https://github.com/ahmed/blog"
          detailsLink="/details/blog-personnel"
        />
      </div>
    </div>
  );
}
