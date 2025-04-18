import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

export default function Navbar() {
  const location = useLocation();
  const normalizedPath = location.pathname.toLowerCase();

  // Association des icônes aux chemins spécifiques
  const iconMap: { [key: string]: string } = {
    "/": "/src/assets/navbar-icons/home-icon.png",
    "/projets": "/src/assets/navbar-icons/projets-icon.png",
    "/competences": "/src/assets/navbar-icons/skills-icon.png",
    "/timeline": "/src/assets/navbar-icons/timeline-icon.png",
    "/contact": "/src/assets/navbar-icons/contact-icon.png",
    "/details": "/src/assets/navbar-icons/details-icon.png",
  };

  // Détection dynamique pour les chemins comme /details/quelquechose
  let currentIcon = "/src/assets/navbar-icons/error-404-icon.png";

  if (normalizedPath.startsWith("/details")) {
    currentIcon = iconMap["/details"];
  } else if (iconMap[normalizedPath]) {
    currentIcon = iconMap[normalizedPath];
  }

  return (
    <div className="navbar-wrapper">
      {/* Bloc de l'icône à gauche de la navbar */}
      <div className="icon-box">
        <img src={currentIcon} alt="Page Icon" />
      </div>

      {/* Navigation principale */}
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
