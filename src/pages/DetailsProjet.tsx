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

      <div className="project-info">
        <p><b>Date de création :</b> {project.date}</p>
        <p><b>Difficulté :</b> {project.difficulty}</p>
      </div>

      <div className="description">
        <h3>Description :</h3>
        <p>{project.description}</p>
      </div>

      {project.gallery && (
        <div className="gallery">
          <h3>Galerie d’images :</h3>
          <div className="gallery-grid">
            {project.gallery.map((img, index) => (
              <img key={index} src={img} alt={`Step ${index + 1}`} />
            ))}
          </div>
        </div>
      )}

      <div className="tech-badges">
        {project.technologies.map((tech, index) => (
          <span key={index} className={`badge badge-${tech.toLowerCase()}`}>
            {tech}
          </span>
        ))}
      </div>

      {project.techDetails && (
        <div className="stack-animated">
          <h3>Stack technique :</h3>
          <div className="stack-grid">
            {project.techDetails.map((tech, index) => (
              <div key={index} className="flip-card">
                <div className="flip-inner">
                  <div className="flip-front">{tech.name}</div>
                  <div className="flip-back">{tech.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.learnings && (
        <div className="learnings">
          <h3>Ce que j’ai appris :</h3>
          <p>{project.learnings}</p>
        </div>
      )}

      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-circle-link"
        >
          <div className="github-circle">
            <img src="/src/assets/github.png" alt="GitHub" className="github-icon" />
          </div>
        </a>
      )}
    </div>
  );
}
