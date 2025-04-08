import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/details-projet.scss";
import { projectsData, ProjectDetailsProps } from "../data/projectsData";

export default function DetailsProjet() {
  const { projectId } = useParams<{ projectId: string }>();

  const project: ProjectDetailsProps | undefined = projectsData.find(
    (proj) => proj.id === projectId
  );

  if (!project) {
    return (
      <div className="details-container">
        <h2>Projet non trouvé</h2>
        <Link to="/projets" className="back-button">
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="header">
        <h1>{project.title}</h1>
        <Link to="/projets" className="back-button">
          <div className="back-circle">
            <img src="/src/assets/back.png" alt="Retour" className="back-icon" />
          </div>
        </Link>
      </div>
      <div className="image-container">
        <img src={project.imageUrl} alt={project.title} />
      </div>
      <p className="description">{project.description}</p>

      <div className="project-info">
        <p><b>Date de création :</b> {project.date}</p>
        <p><b>Difficulté :</b> {project.difficulty}</p>
      </div>

      <div className="tech-badges">
        {project.technologies.map((tech, index) => (
          <span key={index} className={`badge badge-${tech.toLowerCase()}`}>
            {tech}
          </span>
        ))}
      </div>

      <div className="features">
        <h3>Fonctionnalités :</h3>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {project.contributors && (
        <div className="contributors">
          <h3>Contributeurs :</h3>
          <ul>
            {project.contributors.map((contributor, index) => (
              <li key={index}>{contributor}</li>
            ))}
          </ul>
        </div>
      )}

      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-circle-link">
          <div className="github-circle">
            <img src="/src/assets/github.png" alt="GitHub" className="github-icon" />
          </div>
        </a>
      )}
    </div>
  );
}
