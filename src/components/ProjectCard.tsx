import { Link } from "react-router-dom";
import "../styles/project-card.scss";

// Définition des props attendues pour la carte projet
type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  detailsLink?: string;
};

// Composant principal représentant une carte de projet
export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubLink,
  detailsLink,
}: ProjectProps) {
  return (
    <div className="project-card">
      
      {/* En-tête contenant le titre et les icônes d'action */}
      <div className="header">
        {/* Icône GitHub (lien vers le dépôt) */}
        {githubLink && (
          <div className="github-icon-container">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <div className="github-circle">
                <img
                  src="/src/assets/github.png"
                  alt="GitHub"
                  className="github-icon"
                />
              </div>
            </a>
          </div>
        )}

        {/* Titre du projet */}
        <h3>{title}</h3>

        {/* Icône lien vers page de détails */}
        {detailsLink && (
          <div className="details-icon-container">
            <Link to={detailsLink}>
              <div className="details-circle">
                <img
                  src="/src/assets/details.png"
                  alt="Détails"
                  className="details-icon"
                />
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Image du projet */}
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>

      {/* Description du projet */}
      <p>{description}</p>

      {/* Badges des technologies utilisées */}
      <div className="tech-badges">
        {technologies.map((tech, index) => (
          <span key={index} className={`badge badge-${tech.toLowerCase()}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
