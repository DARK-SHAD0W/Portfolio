// Importation des outils de routage depuis React Router
import { Routes, Route } from "react-router-dom";

// Importation des différentes pages de l'application
import Home from "../pages/Home";
import Projets from "../pages/Projets";
import DetailsProjet from "../pages/DetailsProjet";
import Competences from "../pages/Competences";
import Timeline from "../pages/Timeline";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

/* -------------------------------------------------------------------------- */
/*                        Composant AppRouter (Routes)                        */
/* -------------------------------------------------------------------------- */

export default function AppRouter() {
  return (
    <Routes>
      {/* Route pour la page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* Route pour la page des projets */}
      <Route path="/Projets" element={<Projets />} />

      {/* Route pour la page des compétences */}
      <Route path="/Competences" element={<Competences />} />

      {/* Route pour la timeline */}
      <Route path="/Timeline" element={<Timeline />} />

      {/* Route pour la page de contact */}
      <Route path="/Contact" element={<Contact />} />

      {/* Route dynamique pour les détails d’un projet (par ID) */}
      <Route path="/details/:projectId" element={<DetailsProjet />} />

      {/* Route par défaut si aucune autre route ne correspond */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
