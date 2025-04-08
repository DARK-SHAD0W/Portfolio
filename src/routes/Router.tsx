import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projets from "../pages/Projets";
import DetailsProjet from "../pages/DetailsProjet";
import Competences from "../pages/Competences";
import Timeline from "../pages/Timeline";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projets" element={<Projets />} />
      <Route path="/Competences" element={<Competences />} />
      <Route path="/Timeline" element={<Timeline />} />
      <Route path="/Contact" element={<Contact />} />

      {/* Route dynamique pour les détails d'un projet */}
      <Route path="/details/:projectId" element={<DetailsProjet />} />

      {/* Catch-all pour toute route non définie */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
