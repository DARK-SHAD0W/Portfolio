import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

export default function Navbar() {
  const location = useLocation();

  // Mapping des icônes en fonction de la page
  const iconMap: { [key: string]: string } = {
    "/": "/src/assets/navbar-icons/home-icon.png",
    "/Projets": "/src/assets/navbar-icons/projets-icon.png",
    "/Competences": "/src/assets/navbar-icons/skills-icon.png",
    "/Timeline": "/src/assets/navbar-icons/timeline-icon.png",
    "/Contact": "/src/assets/navbar-icons/contact-icon.png",
  };

  // Vérifier si le chemin existe dans le mapping
  const currentIcon = iconMap[location.pathname] || "/src/assets/navbar-icons/error-404-icon.png";

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
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  ); 
}
