// -------------------------------------------------------------------
// Fichier : ProjectRoutes.ts
// Description : Définition des routes API pour la gestion des projets
// -------------------------------------------------------------------

import { Router } from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController";

const router = Router();

// -----------------------------------------------------------
// Route GET /api/projects → Liste tous les projets
// -----------------------------------------------------------
router.get("/", getAllProjects);

// -----------------------------------------------------------
// Route GET /api/projects/:id → Détail d’un projet par ID
// -----------------------------------------------------------
router.get("/:id", getProjectById);

// -----------------------------------------------------------
// Route POST /api/projects → Crée un nouveau projet
// -----------------------------------------------------------
router.post("/", createProject);

// -----------------------------------------------------------
// Route PUT /api/projects/:id → Met à jour un projet existant
// -----------------------------------------------------------
router.put("/:id", updateProject);

// -----------------------------------------------------------
// Route DELETE /api/projects/:id → Supprime un projet
// -----------------------------------------------------------
router.delete("/:id", deleteProject);

// -----------------------------------------------------------
// Exportation du routeur
// -----------------------------------------------------------
export default router;
