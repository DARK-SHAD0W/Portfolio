import { Link } from "react-router-dom";
import "../styles/project-card.scss";

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink?: string;
  detailsLink?: string;
};

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
      <div className="header">
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
        <h3>{title}</h3>
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
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <p>{description}</p>
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
