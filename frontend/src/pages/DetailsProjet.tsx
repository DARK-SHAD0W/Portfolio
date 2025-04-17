// frontend/src/pages/DetailsProjet.tsx

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProject, ProjectAPI } from "../api/projectService";
import "../styles/details-projet.scss";

export default function DetailsProjet() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<ProjectAPI | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!projectId) {
      setError("Aucun identifiant de projet spécifié");
      setLoading(false);
      return;
    }

    setLoading(true);
    fetchProject(projectId)
      .then((data) => {
        if (data) setProject(data);
        else setError("Projet non trouvé");
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setError("Erreur lors du chargement du projet");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return (
      <div className="details-container">
        <p>Chargement…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="details-container">
        <h2>{error}</h2>
        <Link to="/projets" className="back-button">
          Retour aux projets
        </Link>
      </div>
    );
  }

  // project est non-null ici
  return (
    <div className="details-container">
      {/* En‑tête avec titre et bouton retour */}
      <div className="header">
        <h1>{project!.title}</h1>
        <Link to="/projets" className="back-button">
          <div className="back-circle">
            <img
              src="/src/assets/back.png"
              alt="Retour"
              className="back-icon"
            />
          </div>
        </Link>
      </div>

      {/* Image principale */}
      <div className="image-container">
        <img src={project!.imageUrl} alt={project!.title} />
      </div>

      {/* Description */}
      <div className="description">
        <h3>Description</h3>
        <p>{project!.description}</p>
      </div>

      {/* Galerie d’images */}
      {project!.galleryImages.length > 0 && (
        <div className="gallery">
          <h3>Galerie d’images</h3>
          <div className="gallery-grid">
            {project!.galleryImages.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`Galerie ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Stack technique animé (flip‑cards) */}
      {project!.stack.length > 0 && (
        <div className="stack-animated">
          <h3>Stack technique</h3>
          <div className="stack-grid">
            {project!.stack.map((tech, idx) => (
              <div key={tech._id ?? idx} className="flip-card">
                <div className="flip-inner">
                  {/* Face avant : nom de la techno */}
                  <div className="flip-front">{tech.name}</div>
                  {/* Face arrière : description / usage */}
                  <div className="flip-back">{tech.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lien GitHub */}
      {project!.githubLink && (
        <a
          href={project!.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-circle-link"
        >
          <div className="github-circle">
            <img
              src="/src/assets/github.png"
              alt="GitHub"
              className="github-icon"
            />
          </div>
        </a>
      )}
    </div>
  );
}
