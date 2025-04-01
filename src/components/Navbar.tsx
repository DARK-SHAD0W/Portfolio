import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

export default function Navbar() {
  const location = useLocation();

  // Mapping des icônes en fonction de la page
  const iconMap: { [key: string]: string } = {
    "/": "/src/assets/icons/home-icon.png",
    "/projects": "/src/assets/icons/projects-icon.png",
    "/skills": "/src/assets/icons/skills-icon.png",
    "/timeline": "/src/assets/icons/timeline-icon.png",
    "/demos": "/src/assets/icons/demos-icon.png",
    "/contact": "/src/assets/icons/contact-icon.png",
  };

  // Obtenir l'icône correspondant à la page actuelle
  const currentIcon = iconMap[location.pathname] || iconMap["/"];

  return (
    <div className="navbar-wrapper">
      <div className="icon-box">
        <img src={currentIcon} alt="Page Icon" />
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/timeline">Timeline</Link></li>
          <li><Link to="/demos">Demos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  ); 
}
