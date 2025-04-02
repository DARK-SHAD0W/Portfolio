import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

export default function Navbar() {
  const location = useLocation();

  // Mapping des icônes en fonction de la page
  const iconMap: { [key: string]: string } = {
    "/": "/src/assets/icons/home-icon.png",
    "/Projets": "/src/assets/icons/projets-icon.png",
    "/Competences": "/src/assets/icons/skills-icon.png",
    "/Timeline": "/src/assets/icons/timeline-icon.png",
    "/Demos": "/src/assets/icons/demos-icon.png",
    "/Contact": "/src/assets/icons/contact-icon.png",
  };

  // Vérifier si le chemin existe dans le mapping
  const currentIcon = iconMap[location.pathname] || "/src/assets/icons/error-404-icon.png";

  return (
    <div className="navbar-wrapper">
      <div className="icon-box">
        <img src={currentIcon} alt="Page Icon" />
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Competences">Competences</Link></li>
          <li><Link to="/Timeline">Timeline</Link></li>
          <li><Link to="/Projets">Projets</Link></li>
          <li><Link to="/Demos">Demos</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  ); 
}
