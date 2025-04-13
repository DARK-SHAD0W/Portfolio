// -------------------------------------------------------------------
// Fichier : projectRoutes.ts
// Description : Définition des routes API pour la gestion des projets
// -------------------------------------------------------------------

import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/ProjectController";

import uploadCardImage from "../middlewares/uploadCardImage";
import { uploadGalleryImages } from "../middlewares/uploadMiddleware";

const router = express.Router();

// -------------------------------------------------------------------
// GET /api/projects → Récupère tous les projets
// -------------------------------------------------------------------
router.get("/", getAllProjects);

// -------------------------------------------------------------------
// GET /api/projects/:id → Récupère un projet par son ID
// -------------------------------------------------------------------
router.get("/:id", getProjectById);

// -------------------------------------------------------------------
// POST /api/projects → Crée un nouveau projet avec images
// -------------------------------------------------------------------
router.post("/", uploadCardImage, uploadGalleryImages, createProject);

// -------------------------------------------------------------------
// PUT /api/projects/:id → Met à jour un projet existant par ID
// -------------------------------------------------------------------
router.put("/:id", updateProject);

// -------------------------------------------------------------------
// DELETE /api/projects/:id → Supprime un projet existant par ID
// -------------------------------------------------------------------
router.delete("/:id", deleteProject);

export default router;
