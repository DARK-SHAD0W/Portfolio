import ProjectCard from "../components/ProjectCard";
import "../styles/projets.scss";
import { projectsData } from "../data/projectsData";

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
