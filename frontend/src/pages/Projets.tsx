
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/projets.scss";
import { fetchProjects, ProjectAPI } from "../api/projectService";

// Composant de la page "Projets"
export default function Projets() {
  const [projectsData, setProjectsData] = useState<ProjectAPI[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjectsData(data);
    };
    loadProjects();
  }, []);

  return (
    <div className="projets-page">
      <h1 className="page-title">Mes Projets</h1>
      <div className="project-list">
        {projectsData.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            detailsLink={`/details/${project._id}`}
          />
        ))}
      </div>
    </div>
  );
}

/*
import ProjectCard from "../components/ProjectCard";
import "../styles/projets.scss";
import { projectsData } from "../data/projectsData";



// Composant de la page "Projets"
export default function Projets() {
  return (
    <div className="projets-page">
      <h1 className="page-title">Mes Projets</h1>
      <div className="project-list">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            detailsLink={`/details/${project.id}`}
          />
        ))}
      </div>
    </div>
  );
}
*/