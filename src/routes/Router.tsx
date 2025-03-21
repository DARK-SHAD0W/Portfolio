import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Skills from "../pages/Skills";
import Timeline from "../pages/Timeline";
import Demos from "../pages/Demos";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/demos" element={<Demos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
