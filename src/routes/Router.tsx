import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projets from "../pages/Projets";
import DetailsProjet from "../pages/DetailsProjet";
import Competences from "../pages/Competences";
import Timeline from "../pages/Timeline";
import Demos from "../pages/Demos";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projets" element={<Projets />} />
      <Route path="/Competences" element={<Competences />} />
      <Route path="/Timeline" element={<Timeline />} />
      <Route path="/Demos" element={<Demos />} />
      <Route path="/Contact" element={<Contact />} />

      {/* Catch-all for any invalid sub-route under other main paths */}
      <Route path="/Projets/*" element={<NotFound />} />
      <Route path="/Competences/*" element={<NotFound />} />
      <Route path="/Timeline/*" element={<NotFound />} />
      <Route path="/Demos/*" element={<NotFound />} />
      <Route path="/Contact/*" element={<NotFound />} />
      
      {/* Global catch-all for any undefined route */}
      <Route path="*" element={<NotFound />} />

      {/* taw ba3d  nthabet */}
      <Route path="/DetailsProjet/" element={<DetailsProjet />} />
      <Route path="/DetailsProjet/*" element={<NotFound />} />
    </Routes>
  );
}
